import React, {useContext, useState} from 'react'
import {collection, addDoc} from "firebase/firestore"
import CartContext from '../../store/cart-context'
import {Link} from 'react-router-dom'
import {getFirestore} from 'firebase/firestore' 
import './CheckOut.css'

const CheckOut = () => {
    const dataBase = getFirestore();
    const cartCtx = useContext(CartContext);
    const [orderId, setOrderId] = useState()

    const [buyer, setBuyer] = useState({
        Name: "",
        LastName: "",
        Email: "",
        Phone: ''
    })

    const handleInputChange = (e) => {
        try{
            setBuyer(({
                ...buyer,
                [e.target.name]: e.target.value
            }))
        }catch(e){
            
        }
    }


    const generateOrder = async (data) => {
        const col = collection(dataBase, "Orders")
        const order = await addDoc(col, data)
        setOrderId(order.id)
        cartCtx.clear();
    }

    const handleSubmit = (e) => {
        try{
            e.preventDefault();
            const day = new Date();
            const total = cartCtx.totalPrice()
            const items = cartCtx.products.map(item => {return {id: item.id, title: item.title, price: item.price, quantity: item.quantity}})
            const data = {buyer, total, day, items}
            generateOrder(data);
        }catch(e){

        }
    }

    return (
        <div class="checkoutContainer">
            {
                 (!orderId && <div>
                    <div class="cartTotal">
                        <div class="alert alert-light" role="alert">
                        <h1 class="display-4">Completa los campos</h1>
                        <hr/>

                        <form onSubmit={handleSubmit} class="checkOutForm">
                        <div class="formInputs form-group">
                            <label for="exampleInputEmail1">Nombre</label>
                            <input class="form-control" type="text" name="Name" value={buyer.Name} onChange={handleInputChange} required/>
                        </div>
                        <div class="formInputs form-group">
                            <label for="exampleInputEmail1">Apellido</label>
                            <input class="form-control" type="text" name="LastName" value={buyer.LastName} onChange={handleInputChange} required/>
                        </div>
                        <div class="formInputs form-group">
                            <label for="exampleInputEmail1">Email</label>
                            <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="email" name="Email" value={buyer.Email} onChange={handleInputChange} required/>
                        </div>
                        <div class="formInputs   form-group">
                            <label>Telefono</label>
                            <input class="form-control"  type="number" name="Phone" value={buyer.Phone} onChange={handleInputChange} required/>
                        </div>
                        <button type="submit" class="btn btn-outline-success">Comprar</button>
                        </form>   
                            </div>
                        </div>
                </div>)
            }

            <div>
                {
                    orderId && (
                        <div class="cartTotal">
                            <div class="alert alert-light" role="alert">
                            <h1 class="display-4">Compra realizada!</h1>
                            <h4>{`Su numero de seguimiento es: ${orderId}`}</h4>
                            <hr/>
                            <Link to={'/'} style={{textDecoration: 'none'}}><button className="btn btn-outline-dark">Ir al listado</button></Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CheckOut