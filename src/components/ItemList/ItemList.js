function setProducts() {
    const myPromise = new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                const itemList = [
                    {
                      id: 1,
                      title: "Days Gone",
                      description: "Esta es la descripcion de Days Gone.",
                      image: "https://as.com/meristation/imagenes/2020/11/03/game_cover/666031971604438123.jpg",
                      price: 11200,
                      stock: 5
                    },
                    {
                      id: 2,
                      title: "God Of War",
                      description: "Esta es la descripcion de God Of War.",
                      image: "https://s3.gaming-cdn.com/images/products/7325/orig-fallback-v1/god-of-war-pc-juego-steam-cover.jpg",
                      price: 9500,
                      stock: 2
                    },
                    {
                      id: 3,
                      title: "Gta V",
                      description: "Esta es la descripcion de Gta V.",
                      image: "https://media.vandal.net/m/15192/grand-theft-auto-v-2015413122229_1.jpg",
                      price: 5000,
                      stock: 7
                    },
                    {
                      id: 4,
                      title: "Fifa 22",
                      description: "Esta es la descripcion de Fifa 22.",
                      image: "https://img.g2a.com/323x433/1x1x0/fifa-22-pc-origin-key-europe/dce7598de0604b70ae47d576",
                      price: 13900,
                      stock: 3
                    }
                  ]
            }, 2000);
        }
    );
    return myPromise;
}