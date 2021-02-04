
var productNum = document.querySelectorAll('.product-num')
var plusButton = document.querySelectorAll('.plus-button')
var minusButton = document.querySelectorAll('.minus-button')

for( let i = 0 ;  i < productNum.length ; i++ ){
  plusButton[i].addEventListener('click', () => {
    console.log('+');
    productNum[i].value++;
  })
  minusButton[i].addEventListener('click', () => {
    console.log('-');
    if(productNum[i].value == 0){
      return
    }
    productNum[i].value--;
  })
}

