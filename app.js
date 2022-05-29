const selectProducts = document.getElementById("select-products");
const mainCard = document.getElementById("containerCards");
const buttonModal = document.getElementById("buttonModalClass")
/*-------------------------------------------------*/
let priceProductCant = [];
// function sumaTotalProductos(var1, var2){
//   // return priceProductCant.push(var1),priceProductCant.push(var2);
//   return var1 * var2;
// }

// import {fruits} from "./products.js"
// import {fruitsName} from "./products.js"

/*--------------------------------------------*/
window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);
let option = document.getElementById("select-products")

function renderCards() {
fruits.map(fruits => fruits.product === selectProducts.value ? createCards(fruits) : null)

  }


function listSelect() {
  fruitsName.map(function(product){
  let element = document.createElement("option");
  element.innerText = product;
  selectProducts.appendChild(element);
  })
}


const agregar = () => {
  option = document.createElement("value");
  return option

};
agregar();


function createCards(fruits) {
  const {product, image,id,price} = fruits;


  productPrice = price;
  //Contenedor imagen
  let cardImg =document.createElement("div");
  cardImg.classList.add("cardImg");

  //contenedor datos adicionales
  let cardData = document.createElement("div");
  cardData.classList.add("cardData")

  //contenedor de img y datos adicionales
  let cardContent =document.createElement("div");
  cardContent.classList.add("contentCard");

  //Image
  let imgCard = document.createElement("img");
  imgCard.setAttribute("src",image);
  // imgCard.setAttribute("alt",`${id}-${product}`);
  imgCard.classList.add("imgProduct");

  //Nombre de la carta
  let nameCard = document.createElement("h2");
  nameCard.textContent = product;
  nameCard.classList.add("nameCard");

  //Precio de la carta
  let priceCard = document.createElement("p");
  priceCard.textContent = `Price:${price}`;
  priceCard.classList.add("priceCard");

  //texto con la id del producto
  let buttonCard = document.createElement("p");
  buttonCard.textContent = `id:${id}`;
  buttonCard.classList.add("buttonCard");
/*----------------------------------------------------Precios--------------------------------------------------------*/
/*-----------------Input de cantidad-------------*/
  let cantProduct = document.createElement("input");
  cantProduct.setAttribute("type","number");
  cantProduct.classList.add("numProductCard");

/*-----------------RESULTADO PRECIO------------*/
//contenedor del texto resultado
  let resultPrice = document.createElement("div");
  resultPrice.classList.add("containerResult");
//texto resultado
  let resultPriceText = document.createElement("p");
  resultPriceText.classList.add("textPriceProduct");
//botton confirmar pedido
  let bottonResultTotal = document.createElement("button");
  bottonResultTotal.classList.add("bottonResultTotal");
  bottonResultTotal.textContent ="Fijar";

  let bottonResultCancel = document.createElement("button");
  bottonResultCancel.classList.add("bottonResultCancel");
  bottonResultCancel.textContent ="Cancelar";

/*-------Arrray suma de precios---------*/
const bottonResultEverything = (var1) =>{
  priceProductCant.unshift(var1);

  //   priceProductCant.shift(priceProductCant[i])
 console.log(priceProductCant);
  
  


}
bottonResultTotal.addEventListener('click',bottonResultEverything);
/*----------------------------------------------*/
cantProduct.addEventListener ('keyup',event =>{
  if(event){
    let valuePrice = event.target.value;
    let textWatch = 0;

    if (valuePrice !== ""){
      textWatch =valuePrice * productPrice;
    }

    else{
      textWatch = 0;
    }
/*--------------------Evento botton--------------------*/
  resultPriceText.textContent =`el precio es de ${textWatch}`;
  resultPrice.appendChild(resultPriceText);
  bottonResultEverything(textWatch);


  // //evento fijar precio
  // bottonResultTotal.addEventListener('click',event =>{
  // if(event){
  // priceProductCant.unshift(textWatch);
  // console.log(priceProductCant);
  // }
  // })
}
});


/*----------------Valor total-------------------*/
  let resultPriceEverything = document.createElement("div");
  resultPriceEverything.classList.add("divResulFinal");

/*------------------------------------------------*/

/*-----------------------BUTTON-----------------------*/
  let buttonClose = document.createElement("button");
  buttonClose.textContent ="X";
  buttonClose.classList.add("buttonClose");
  buttonClose.addEventListener ("click",event =>{
  if(event){
    buttonClose.parentElement.remove(mainCard);
    buttonClose.parentElement.remove(imgCard);
  }
  })
  /*------------------------------------------------*/


  cardImg.appendChild(imgCard);
  cardData.appendChild(nameCard);
  cardData.appendChild(priceCard);
  cardData.appendChild(buttonCard);
  cardData.appendChild(cantProduct);
  cardData.appendChild(resultPrice)
/*-----------------------------------*/
  cardContent.appendChild(cardImg);
  cardContent.appendChild(cardData);
  cardContent.appendChild(buttonClose);
  cardContent.appendChild(bottonResultTotal);
  //añado los dos en uno solo para poderlos personalizar
  mainCard.appendChild(cardContent)
/*-----------------------------------*/
}




