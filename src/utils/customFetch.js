let Ok = true;

const customFetch = (time, tipo, products, Id) => {
    return new Promise((resolve, reject) => {
        console.log(Id);
        const filtroProducts = tipo === 'C' ? products.filter((prod) => prod.category === Id) : products.find((prod) => prod.id === parseInt(Id))
        setTimeout(() => {
            if (Ok) {
                Id ? resolve(filtroProducts) : resolve(products);
            } else {
                reject("Error");
            }
        }, time)
    })
}

export default customFetch;