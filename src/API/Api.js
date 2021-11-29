 const getProducts = async() => {
     return await fetch('http://localhost:8021/api/v1/products')
         .then((pro) =>
             pro.json()
         ).then((data) => {
             return data;
         }).catch(console.error);
 }

 const addProd = (options) => {
     fetch('http://localhost:8021/api/v1/products/add', options)
         .then((res) =>
             res.json()
         ).then((data) => {
             return data.status;

         }).catch(console.error);
 }

 export default [getProducts, addProd];