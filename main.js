

class ProductManager {

  constructor (title, description, price, thumbnail, code, stock){

      this.products = []
      this.title = title
      this.description =  description
      this.price =  price
      this.thumbnail =  thumbnail
      this.code = code
      this.stock = stock

    }

addProduct (){

    this.products.push([{  
         id: this.products.length +1
        }])  

      }

getProducts (){
  
    return this.products
}



getProductById (){
  
this.products.find(e => e.id === idproduct) 

}

}