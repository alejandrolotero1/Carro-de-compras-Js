const selectProducts = document.getElementById("select-products");
const mainCard = document.getElementById("containerCards");



/*------------------------Modal-------------------------*/
//abrir modal
const buttonModalOpen = document.getElementById("buttonModalClass");
//cerrar modal
const buttonModalClose = document.getElementById("buttonModalClose");
//crear producto modal
const buttonCreateproduct = document.getElementById("buttonCreateproduct");
//modal create product
const modalContainerCreate = document.getElementById("modalCreateProducts");
//contenedor carro de compras
const modalContainer = document.getElementById("modal");
const inicioContainer = document.getElementById("inicio");


function buttonModal1(){
  modalContainer.style.display ='block'
  inicioContainer.style.display ="none"
  modalContainerCreate.style.display ="none"
  }
function buttonModal2(){
  modalContainer.style.display ="none";
  inicioContainer.style.display ="block";
  modalContainerCreate.style.display ="none";
}

function buttonModal3(){
  modalContainer.style.display ="none";
  inicioContainer.style.display ="none";
  modalContainerCreate.style.display ="block";
}
buttonModalOpen.addEventListener("click",buttonModal1);
buttonModalClose.addEventListener("click",buttonModal2);
buttonCreateproduct.addEventListener("click",buttonModal3);
/*-------------------------Create product---------------------*/
const inputName = document.getElementById("nameProduct");
const inputPrice = document.getElementById("priceProduct");
const inputImage = document.getElementById("imageProduct");
const buttonAdd = document.getElementById("addProduct");
let id =0;
let imgSelect = " ";

function createNewProduct(){
  id++;
  const elementProduct = inputName.value;
  const elementPrice = inputPrice.value;
  const idProduct = id;

  const newFruits ={id:idProduct, product: elementProduct, price:elementPrice, image: imgSelect};
  const newFruitsName ={id:idProduct}
  fruits.push(newFruits)
  fruitsName.push(newFruitsName)
  
  listSelect()

  modalContainer.style.display ="none";
  inicioContainer.style.display ="block";
  modalContainerCreate.style.display ="none";

}

function importImg(event){
  const currentImg = event.target.files[0];
  const objectUrl = URL.createObjectURL(currentImg)
  imgSelect = objectUrl;
}
inputImage.addEventListener('change',importImg);
buttonAdd.addEventListener('click',createNewProduct);


/*---------------------Almacenar valores----------------------------*/
let priceProductCant = [];
/*-------------------------------------------------------------------*/

/*--------------------------------------------------*/
window.addEventListener('load', listSelect);
selectProducts.addEventListener('change', renderCards);
let option = document.getElementById("select-products");

function renderCards() {
fruits.map(fruits => fruits.product === selectProducts.value ? createCards(fruits) : null);
}

function listSelect() {
  selectProducts.textContent = "";
  fruits.map(function(fruits){
  let element = document.createElement("option");
  element.innerText = fruits.product;
  selectProducts.appendChild(element);
  })
}

const agregar = () => {
  option = document.createElement("value");
  return option;

};
agregar();


function createCards(fruits) {
  const {product, image,id,price} = fruits;

  //AUXILIAR PARA EL PRECIO
  productPrice = price;
  //Contenedor imagen
  let cardImg =document.createElement("div");
  cardImg.classList.add("cardImg");

  //contenedor datos adicionales
  let cardData = document.createElement("div");
  cardData.classList.add("cardData");

  //contenedor de img y datos adicionales
  let cardContent =document.createElement("div");
  cardContent.classList.add("contentCard");

  //Image
  let imgCard = document.createElement("img");
  imgCard.setAttribute("src",image);
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
/*
  let bottonResultTotal = document.createElement("button");
  bottonResultTotal.classList.add("bottonResultTotal");
  bottonResultTotal.textContent ="Fijar";

  let bottonResultCancel = document.createElement("button");
  bottonResultCancel.classList.add("bottonResultCancel");
  bottonResultCancel.textContent ="Cancelar";
  */

/*
const bottonResultEverything = (var1) =>{
  priceProductCant.unshift(var1);

  //   priceProductCant.shift(priceProductCant[i])
 console.log(priceProductCant);
  
  


}

bottonResultTotal.addEventListener('click',bottonResultEverything);
*/
cantProduct.addEventListener ('change',event =>{
  if(event){
    let valuePrice = event.target.value;
    let textWatch = 0;

    if (valuePrice !== ""){
      textWatch =valuePrice * productPrice;
    }

    else{
      textWatch = 0;
    }
  resultPriceText.textContent =`el precio es de ${textWatch}`;
  resultPrice.appendChild(resultPriceText);

}
});


// /*----------------Valor total-------------------*/
//   let resultPriceEverything = document.createElement("div");
//   resultPriceEverything.classList.add("divResulFinal");

// /*------------------------------------------------*/

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
  // cardContent.appendChild(bottonResultTotal);
  //añado los dos en uno solo para poderlos personalizar
  mainCard.appendChild(cardContent);
/*-----------------------------------*/
}


/*--------------------Renderizar cartas-----------------------*/



// const renderElements = (fruitsName) =>{
//   const{product} = fruitsName
//   console.log(fruitsName.product);
//   let card =document.createElement("div");
//   card.classList.add("createCard");
//   //imagen card
//   let imageCard =document.createElement("img");
//   imageCard.classList.add("imagesCard");
//   imageCard.setAttribute('src', image);
//   // //nombre card
//   let nameCard = document.createElement("p");
//   nameCard.classList.add("nameCard")
//   nameCard.textContent = product;



//   card.appendChild(imageCard);
//   card.appendChild(nameCard);
//   mainRender.appendChild(card);
// }

// buttonRender.addEventListener('click',renderElements);


/*-------------------------------------------------------------*/



