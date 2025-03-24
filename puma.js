 let cart = document.getElementById("idealcont");

 let cartItemsData = [
     
        {   
            "id" : 1, 
            "image": {
               //  imagePuma image-js-1.jpeg 
            },
            "name": "Puma Rs X Bold",
            "size": "Dubble-XL",
            "price": 200,
            "button": "Buy now"
         },
        

      {    
        "id" : 2, 
        "image": {
             
        },
        "name": "Puma Sneakers",
        "size": "Dubble-XL",
        "price": 180,
        "button": "Buy now"
     },
     {    
        "id" : 3, 
        "image": {
             
        },
        "name": "Puma Ferrari",
        "size": "Dubble-XL",
        "price": 190,
        "button": "Buy now"
     },
     {    "id" : 4, 
        "image": {
             
        },
        "name": "Puma Running",
        "size": "Dubble-XL",
        "price": 200,
        "button": "Buy now"
     },
    


 ]

 let generatecart = ()=>{
    return(cart.innerHTML =cartItemsData.map((x)=> {
let {id, image,name, size, price, button} = x;
return `
 <div class="Icard">
                    <div class="imgconTiner">
                        <img src="" alt="">
                    </div>
                    <h3>name:${name}</h3>
                     <h4>size:${size}</h4>
                     <h4>price:${price}</h4>
                     <button>${button}</button>
                   </div>
`
    })
    .join("")
)
 };

generatecart();




function showSidebar(){
   const sidebar = document.querySelector('.sidebar');
   sidebar.style.display = 'block';
   }
  
  
         function closeSidebar(){
          const sidebar = document.querySelector('.sidebar');
          sidebar.style.display = 'none'
         }




// let cart = document.getElementById("idealcont");

// let cartItemsData = [
//     {   
//         id: 1, 
//         image: {},
//         name: "Puma Rs X Bold",
//         size: "Double-XL",
//         price: 200,
//         button: "Buy now"
//     },
//     {    
//         id: 2, 
//         image: {},
//         name: "Puma Sneakers",
//         size: "Double-XL",
//         price: 180,
//         button: "Buy now"
//     },
//     {    
//         id: 3, 
//         image: {},
//         name: "Puma Ferrari",
//         size: "Double-XL",
//         price: 190,
//         button: "Buy now"
//     },
//     {    
//         id: 4, 
//         image: {},
//         name: "Puma Running",
//         size: "Double-XL",
//         price: 200,
//         button: "Buy now"
//     }
// ];

// let generatecart = () => {
//     cart.innerHTML = cartItemsData.map((x) => {
//         let { id, image, name, size, price, button } = x;
//         return `
//             <div class="Icard">
//                 <div class="imgconTiner">
//                     <img src="" alt="">
//                 </div>
//                 <h3>${name}</h3>
//                 <h4>size: ${size}</h4>
//                 <h4>price: $${price}</h4>
//                 <button>${button}</button>
//             </div>
//         `;
//     }).join("");
// };

// // Call the function to populate the cart on page load
// generatecart();
