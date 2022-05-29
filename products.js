const fruits = [
  {id:"01",product: 'apple',price: 2000,image: '/Images/apple.jpeg'},
  {id:"02",product: 'orange',price:3000,image: '/Images/orange.jpeg'},
  {id:"03",product: 'banana',price: 500,image: '/Images/banana.jpeg'},
  {id:"04",product: 'pineapple',price: 4500,image: '/Images/pineapple.jpg'},
  {id:"05",product: 'peach',price: 200,image: '/Images/peach.jpeg'},
  {id:"06",product: 'grapes',price: 2000,image: '/Images/grapes.jpeg'},
  {id:"07",product: 'watermelon',price: 3400,image: '/Images/watermelon.jpeg'},
  {id:"08",product: 'strawberry',price: 3700,image: '/Images/strawberry.jpeg'},
  {id:"09",product: 'pear',price: 2000,image: '/Images/pear.jpeg'},
  {id:"10",product: 'kiwi',price: 3500,image: '/Images/kiwi.jpeg'},
];
const fruitsName = fruits.map(function(product){
  return product.product;
})


