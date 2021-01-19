


 if(document.querySelector('.index')){

 var catalogSideMenu = document.querySelector('.catalog-navblock-side-menu')
 var openSidmenuCatalog = document.querySelector('.open-sidmenu-catalog')
 var closeSdpopup = document.querySelector('.close-dfpopup')

 closeSdpopup.addEventListener('click', () => {
  sidepopupJS[i].style.display = 'none'
  bgSdepopup.classList.remove('active')
 })

 openSidmenuCatalog.addEventListener('click', () => {
  openSidmenuCatalog.classList.toggle('closeCat')
  catalogSideMenu.classList.toggle('closeCat')
 })


var catalogItem = document.querySelectorAll('.catalog-sidemenu-content-item')
var sidepopupJS = document.querySelectorAll('.sidepopup')
var bgSdepopup = document.querySelector('.bg-for-sdepopup')


for( let i = 0 ;  i < catalogItem.length ; i++ ){
  catalogItem[i].addEventListener('mouseenter', () => {
    for( let i = 0 ;  i < catalogItem.length ; i++ ){
      sidepopupJS[i].style.display = 'none'
    }
    sidepopupJS[i].style.display = 'block'
    bgSdepopup.classList.add('active')
    catalogItem[i].classList.add('enterMouseItem')
  })

  catalogItem[i].addEventListener('mouseleave', () => {
        catalogItem[i].classList.remove('enterMouseItem')
        setTimeout(() =>{
          if( !catalogItem[i].classList.contains('enterMouseItem')){
            if(!sidepopupJS[i].classList.contains('enterMouse')){
            sidepopupJS[i].style.display = 'none'
            bgSdepopup.classList.remove('active')
          }
          }
        }, 400)
  })
  sidepopupJS[i].addEventListener('mouseenter', () => {
    sidepopupJS[i].style.display = 'block'
    bgSdepopup.style.display = 'block'
    bgSdepopup.classList.add('active')
    sidepopupJS[i].classList.add('enterMouse')
  })
  sidepopupJS[i].addEventListener('mouseleave', () => {
    sidepopupJS[i].classList.remove('enterMouse')
    setTimeout(() =>{
      if( !sidepopupJS[i].classList.contains('enterMouse')){
      sidepopupJS[i].style.display = 'none'
      bgSdepopup.classList.remove('active')
      }
    }, 400)
   
  })
}



var productNum = document.querySelectorAll('.product-num')
var plusButton = document.querySelectorAll('.plus-button')
var minusButton = document.querySelectorAll('.minus-button')

for( let i = 0 ;  i < productNum.length ; i++ ){
  plusButton[i].addEventListener('click', () => {
    console.log('+');
    productNum[i].value++
  })
  minusButton[i].addEventListener('click', () => {
    console.log('-');
    if(productNum[i].value == 0){
      return
    }
    productNum[i].value--
  })
}
}




// onclick change arrow in header



  // 
  function DropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // main slider in homepage
  $('.mainslider').slick();
  // акційні товари
 $('.brend-container').slick({
  slidesToShow: 4,
     autoplay: true,
  autoplaySpeed: 1000,
  dots: true,
  centerMode: true,
  responsive: [{
    breakpoint: 1340,
    settings: {
        slidesToShow: 3
    }
},
{
  breakpoint:  1092,
  settings: {
      slidesToShow: 2
  }
},
{
  breakpoint: 670,
  settings: {
      slidesToShow: 1
  }
},
{
  breakpoint: 490,
  settings: {
    slidesToShow: 1,
    centerMode: false,
  }
}
]

 });
 $('.news-container').slick({
  slidesToShow: 4,
  dots: true,
  centerMode: true,
     autoplay: true,
  autoplaySpeed: 1000,
  responsive: [{
    breakpoint: 1340,
    settings: {
        slidesToShow: 3
    }
},
{
  breakpoint:  1092,
  settings: {
      slidesToShow: 2
  }
},
{
  breakpoint: 670,
  settings: {
      slidesToShow: 1
  }
},
{
  breakpoint: 490,
  settings: {
    slidesToShow: 1,
    centerMode: false,
  }
}
]

 });
 $('.popular-container').slick({
  slidesToShow: 4,
  dots: true,
     autoplay: true,
  autoplaySpeed: 1000,
  centerMode: true,
  responsive: [{
    breakpoint: 1340,
    settings: {
        slidesToShow: 3
    }
},
{
  breakpoint: 1092,
  settings: {
      slidesToShow: 2
  }
}
,
{
  breakpoint: 670,
  settings: {
      slidesToShow: 1
  }
},
{
  breakpoint: 490,
  settings: {
    slidesToShow: 1,
    centerMode: false,
  }
}
]

 });
 $('.news2-container').slick({
  slidesToShow: 4,
  dots: true,
     centerMode: true,

  responsive: [{
    breakpoint: 1340,
    settings: {
        slidesToShow: 3
    }
},
{
  breakpoint:  1092,
  settings: {
      slidesToShow: 2
  }
},
{
  breakpoint: 670,
  settings: {
      slidesToShow: 1
  }
},
{
  breakpoint: 490,
  settings: {
    slidesToShow: 1,
    centerMode: false,
  }
}

]

 });
 $('.sponsors-container').slick({
  slidesToShow: 6,
  infinite: true,
     autoplay: true,
  autoplaySpeed: 1000,
  responsive: [{
    breakpoint: 1409,
    settings: {
        slidesToShow: 5
    }
},
{
  breakpoint: 1222,
  settings: {
   
      slidesToShow: 4
  }
},

{
  breakpoint: 886,
  settings: {
   
      slidesToShow: 3
  }
},
{
  breakpoint: 663,
  settings: {
      slidesToShow: 2
  }
},
{
  breakpoint: 524,
  settings: {
      slidesToShow: 1
  }
}

]

 });


function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


 var favoriteBtn = document.querySelectorAll('.favorite-btn')
for(let i of favoriteBtn){
  i.addEventListener('click', () =>{
    i.classList.toggle('active')
  })
}

var comparisonBtn  = document.querySelectorAll('.comparison-btn ')
for(let i of comparisonBtn){
  i.addEventListener('click', () =>{
    i.classList.toggle('active')
  })
}


if(document.querySelector('.catalogJS')){


  var catalogItem = document.querySelectorAll('.catalog-sidemenu-content-item')
  var sidepopupJS = document.querySelectorAll('.sidepopup')
  var bgSdepopup = document.querySelector('.bg-for-sdepopup')
  
  
  for( let i = 0 ;  i < catalogItem.length ; i++ ){
    catalogItem[i].addEventListener('mouseenter', () => {
      for( let i = 0 ;  i < catalogItem.length ; i++ ){
        sidepopupJS[i].style.display = 'none'
      }
      sidepopupJS[i].style.display = 'block'
      bgSdepopup.classList.add('active')
      catalogItem[i].classList.add('enterMouseItem')
    })
  
    catalogItem[i].addEventListener('mouseleave', () => {
          catalogItem[i].classList.remove('enterMouseItem')
          setTimeout(() =>{
            if( !catalogItem[i].classList.contains('enterMouseItem')){
              if(!sidepopupJS[i].classList.contains('enterMouse')){
              sidepopupJS[i].style.display = 'none'
              bgSdepopup.classList.remove('active')
            }
            }
          }, 400)
    })
    sidepopupJS[i].addEventListener('mouseenter', () => {
      sidepopupJS[i].style.display = 'block'
      bgSdepopup.style.display = 'block'
      bgSdepopup.classList.add('active')
      sidepopupJS[i].classList.add('enterMouse')
    })
    sidepopupJS[i].addEventListener('mouseleave', () => {
      sidepopupJS[i].classList.remove('enterMouse')
      setTimeout(() =>{
        if( !sidepopupJS[i].classList.contains('enterMouse')){
        sidepopupJS[i].style.display = 'none'
        bgSdepopup.classList.remove('active')
        }
      }, 400)
     
    })
  }





var buyBtn  = document.querySelectorAll('.buy-modal-btn ')
for(let i of buyBtn ){
  i.addEventListener('click', () =>{
    i.classList.toggle('toggle')
  })
}

var stockAmount  = document.querySelectorAll('.stock-amount ')

for(let i of stockAmount ){
  i.addEventListener('mouseenter', () =>{
i.nextElementSibling.style.display = 'block'
  })
  i.addEventListener('mouseleave', () =>{
    i.nextElementSibling.style.display = 'none'
      })
}

var filterBar  = document.querySelector('.filter__container')
var mainContent  = document.querySelector('.container-content')



if(filterBar.classList.contains('active')){
  mainContent.classList.add('filter__container-open')
}


var filterIcon  = document.querySelector('.filter__close-icon')
var closeFilterContainer  = document.querySelector('.close-filter-container')

if (window.matchMedia("(max-width: 600px)").matches) {
  filterBar.classList.remove('active')
  mainContent.classList.remove('active')
  filterIcon.classList.add('active')
  closeFilterContainer.classList.add('active')
} 


closeFilterContainer.addEventListener('click', () => {
  filterBar.classList.toggle('active')
  if(filterBar.classList.contains('active')){
    mainContent.classList.add('filter__container-open')
    filterIcon.classList.remove('active')
    closeFilterContainer.classList.remove('active')
  } else {
    mainContent.classList.remove('filter__container-open')
    filterIcon.classList.add('active')
    closeFilterContainer.classList.add('active')
  }
})



// dropdown-filter

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  let thisElement = acc[i]
  thisElement.classList.toggle("active");
  var panel = thisElement.nextElementSibling;
  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
  } 

  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

}


$(document).on('click', '.dropdown-toggle-category', function () {

  if ($(document).find('.dropdown-menu.dropdown-category').hasClass('show')) {
      $(document).find('.dropdown-menu.dropdown-category').removeClass('show');
  } else {
      $(document).find('.dropdown-menu.dropdown-category').addClass('show');
  }
});

$(document).on('click', event => {
  let object = $(event.target);
  if (!object.hasClass('dropdown-toggle-category')) {

      if (object.closest('.dropdown-category').length === 0) {
          $(document).find('.dropdown-menu.dropdown-category').removeClass('show');
      }
  }
  if (object.closest('.header-main').length === 0 && object.closest('.product-view').length === 0) {

      $(document).find('#page-content').css({pointerEvents: 'all'});
      $(document).find('#search-block').css({display: 'none'});
      $(document).find('#filter-fog').css({display: 'none'});

  }
  return true;
});

$(document).on('click', '.catalog-product-category .expand-btn', function () {
  if ($(this).closest('li').children('.collapsed').is(':visible')) {
      $(this).find('.collapse-icon').css({display: 'none'});
      $(this).find('.expand-icon').css({display: 'block'});
      $(this).closest('.category-input-group').removeClass('active');
  } else {
      $(this).find('.collapse-icon').css({display: 'block'});
      $(this).find('.expand-icon').css({display: 'none'});
      $(this).closest('.category-input-group').addClass('active');
  }
  $(this).closest('li').children('.collapsed').slideToggle('fast');

  let main = $(this).closest('.main');
  $(document).find('.catalog-product-category .main:not([data-code="' + main.attr('data-code') + '"])').each(function () {
      $(this).find('.collapse-icon').css({display: 'none'});
      $(this).find('.expand-icon').css({display: 'block'})
      $(this).find('.category-input-group').removeClass('active');
  });
  $(document).find('.catalog-product-category .main:not([data-code="' + main.attr('data-code') + '"]) .collapsed').each(function () {
      if ($(this).is(':visible')) {
          $(this).slideToggle('slow')
      }
      $(this).find('.collapse-icon').css({display: 'none'});
      $(this).find('.expand-icon').css({display: 'block'})
  })
});

$(document).on('click', '.catalog-product-category .checkbox-custom', function (e) {

  if ($(e.target).hasClass('checkbox-custom') && $(this).closest('.category-input-group').length > 0) {
      e.preventDefault();
      $(this).closest('.category-input-group').find('.expand-btn').trigger('click');
  }
});


$(document).on('change', '.catalog-product-category .checkbox-custom input', function () {
  updateCategoryBackground()
  updateCatalogByFilters();
});
$(document).on('click', '#filter-form .submit-filter', function () {
  updateCatalogByFilters();
});







var stepsSlider = document.getElementById('steps-slider');
var input0 = document.getElementById('input-with-keypress-0');
var input1 = document.getElementById('input-with-keypress-1');
var inputs = [input0, input1];

noUiSlider.create(stepsSlider, {
    start: [20, 2790],
    connect: true,
    range: {
        'min': 0,
        'max': 3000
    }
});


stepsSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.floor(values[handle]);
});

// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

  input.addEventListener('change', function () {
      stepsSlider.noUiSlider.setHandle(handle, this.value);
  });

  input.addEventListener('keydown', function (e) {

      var values = stepsSlider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = stepsSlider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;


      switch (e.which) {

          case 13:
              stepsSlider.noUiSlider.setHandle(handle, this.value);
              break;

          case 38:

              // Get step to go increase slider value (up)
              position = step[1];

              // false = no step is set
              if (position === false) {
                  position = 1;
              }

              // null = edge of slider
              if (position !== null) {
                  stepsSlider.noUiSlider.setHandle(handle, value + position);
              }

              break;

          case 40:

              position = step[0];

              if (position === false) {
                  position = 1;
              }

              if (position !== null) {
                  stepsSlider.noUiSlider.setHandle(handle, value - position);
              }

              break;
      }
  });
});


// input1