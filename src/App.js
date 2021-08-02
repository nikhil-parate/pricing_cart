import React, {Component} from "react";
import {Button} from 'react-bootstrap';
import {FaStar} from 'react-icons/fa'; 
class pricing extends Component {
  constructor() {
    super();
    this.state = {
         total: 0,
         cart : [
           {
             product: "Fancy Product",
             priceRange: "$40.00 - $80.00",
             val : "Add To Cart",
           },
           {
            product: "Special Item",
            priceRange: "$18.00",
            val : "Add To Cart",
           },
           {
            product: "Sale Item",
            priceRange: "$25.00",
            val : "Add To Cart",
           },
           {
            product: " Popular Item",
            priceRange: " $40.00"   ,
            val : "Add To Cart",
           },
           {
            product: " Sale Item",
            priceRange: " $25.00"  ,
            val : "Add To Cart", 
           },
           {
            product: "Fancy Product",
            priceRange: "$120.00 - $280.00",
            val : "Add To Cart",
           },
           {
            product: "Special Item",
            priceRange: "$18.00",
            val : "Add To Cart",
           },
           {
            product: " Popular Item",
            priceRange: " $40.00"   ,
            val : "Add To Cart",
           }
         ]
    }
  }
  change = (prod)=> {
    for(var i = 0;i < this.state.cart.length;++i) {
      if(this.state.cart[i].product == prod) {
        let temp3 = this.state.total;
        temp3 = this.state.cart[i].val == "Add To Cart"?  temp3 += 1: temp3 -=1 
        this.setState({total:temp3});
         let temp1 = this.state.cart[i].val == "Add To Cart" ? "Remove From Cart" : "Add To Cart"
         this.state.cart[i].val = temp1;
         const cart = [...this.state.cart]
         this.setState({cart});
      }
    }
  }
  render () {
         return(
           <>
           <div style={{float:"right"}}>
           <img src="https://image.shutterstock.com/image-vector/shopping-cart-icon-flat-design-260nw-570153007.jpg" alt="cart" height="45" width="50"/>
           <button >Cart: {this.state.total} Item</button>
           </div>
           <br />
           <br />
           <div style={{textAlign:"center", background:"black", color:"white"}}>
             <br />
             <br />
             <h1 style={{fontSize:"350%"}}>Shop In Style</h1>
             <p>With this shop homepage template</p>
             <br />
             <br />
           </div>
           <br />
            <div style={{textAlign:"center"}}>
             <div class="row">
             {this.state.cart.map(({product,priceRange,val})=>

              <div  class="col" style={{border:"1px solid #D3D3D3"}}>
                <br />
                <img src="https://www.jaipuriaschoolbahraich.in/wp-content/uploads/2016/11/blank-img.jpg" height="200" width="300" alt="product" />
                <br />
                <span style={{fontWeight:"bold", fontSize:"150%"}}>{product}</span>
                <br />
                {(product === "Special Item" || product === " Popular Item") ? <><FaStar style={{color:"#FFD700"}}/><FaStar style={{color:"#FFD700"}}/><FaStar style={{color:"#FFD700"}}/><FaStar style={{color:"#FFD700"}}/><FaStar style={{color:"#FFD700"}}/> </>: " "}
               
                <br />
                <span>{priceRange}</span>
                <br />
                 <Button onClick={()=>this.change(product)}>{val}</Button>
                 <br />
                 <br />
              </div>
             )}
             </div>
             </div>
           </>
         )
  }
}
export default pricing;