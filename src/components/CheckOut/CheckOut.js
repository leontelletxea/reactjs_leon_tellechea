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
                    <h1 class="checkoutTitle">Ya casi es tuyo...</h1>
                    <hr />
                    <h4 checkoutTitle>Datos de Contacto:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input class="formInputs" type="text" name="Name" placeholder="Name" value={buyer.Name} onChange={handleInputChange} required/>
                        <br/>
                        <input class="formInputs" type="text" name="Email" placeholder="Email" value={buyer.Email} onChange={handleInputChange} required/>
                        <br/>
                        <input class="formInputs" type="text" name="Phone" placeholder="Phone" value={buyer.Phone} onChange={handleInputChange} required/>
                        <br/>
                        <br/>
                        <input type="submit" value="Comprar" className='btn btn-success'/>
                    </form>
                </div>)
            }

            <div>
                {
                    orderId && (
                        <div>
                            <h3 class="checkoutTitle">Compra realizada!</h3>
                            <h4>{`Su numero de seguimiento es: ${orderId}`}</h4>
                            <Link to="/"><h5>Ir al catalogo</h5></Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CheckOut