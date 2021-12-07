export const getProducts = async() => {
    return await fetch('http://localhost:8021/api/v1/products')
        .then((pro) =>
            pro.json()
        ).then((data) => {
            return data;
        }).catch(console.error);
}

export const addProd = async(options) => {
    return await fetch('http://localhost:8021/api/v1/products/add', options)
        .then((res) => {
            console.log(res.total);
            return res.json()
        }).then((data) => {
            return data;

        }).catch(console.error);


}