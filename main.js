

class ProductManager {

  constructor (){
      this.products = []
    }

static id = 0

  addProduct (title, description, price, thumbnail, code, stock){
    
    for (let i = 0; i < this.products.length; i++){

      if(this.products[i].code===code){
        console.log(`The code ${code} is repetead`)
        break
      }
    }

    const newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
    }
    
    if(!Object.values(newProduct).includes(undefined)){

      ProductManager.id++;
      this.products.push( {

       ...newProduct,
        id:ProductManager.id
      })
    } else {
      console.log('All fields are required')
    }
   
  }

  getProducts (){
  
    return this.products
  }

exist(id){
  return this.products.find((productElement)=> productElement.id === id)
}

  getProductById (id){

    if(!this.exist(id)){
      console.log('Not Found')
    }
    else {
      console.log(this.exist(id))
    }
    
  }

}

const productos = new ProductManager

//Llamada con arreglo vacio

console.log(productos.getProducts())

//Agregando Productos

productos.addProduct('titulo1', 'description1', '402' , 'imagen1' , 'code123' , 5)
productos.addProduct('titulo2', 'description2', '402' , 'imagen2' , 'code1234' , )

//Llamada con arreglo de producto
console.log(productos.getProducts())


productos.addProduct('titulo3', 'description3', '402' , 'imagen3' , 'code1234' , 7)