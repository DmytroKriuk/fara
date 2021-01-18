 if(document.querySelector('.index')){


 

 
 var catalogSideMenu = document.querySelector('.catalog-navblock-side-menu')
 var openSidmenuCatalog = document.querySelector('.open-sidmenu-catalog')
 var closeSdpopup = document.querySelector('.close-dfpopup')

 closeSdpopup.addEventListener('click', () => {
   console.log('asdasd');
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
    productNum[i].value++
  })
  minusButton[i].addEventListener('click', () => {
    if(productNum[i].value == 0){
      return
    }
    productNum[i].value--
  })
}
}
// onclick change arrow in header

    $('.header-top-second-btn').click(function(){
      var src = $(".header-top-second-btn img").attr('src');
  
      if(src=="img/icons/arr-down.svg")
        $(".header-top-second-btn img").attr('src',"img/icons/arr-up.svg");
      else
        $(".header-top-second-btn img").attr('src',"img/icons/arr-down.svg");
    });

  // 
  function DropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // main slider in homepage
  $('.mainslider').slick();
  // акційні товари
 $('.brend-container').slick({
  slidesToShow: 4,
     autoplay: false,
  autoplaySpeed: 10000,
  dots: true,
  centerMode: true,
  responsive: [{
    breakpoint: 1510,
    settings: {
        slidesToShow: 3
    }
},
{
  breakpoint: 1232,
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
     autoplay: false,
  autoplaySpeed: 10000,
  responsive: [{
    breakpoint: 1510,
    settings: {
        slidesToShow: 3
    }
},
{
  breakpoint: 1232,
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
     autoplay: false,
  autoplaySpeed: 10000,
  centerMode: true,
  responsive: [{
    breakpoint: 1510,
    settings: {
        slidesToShow: 3
    }
},
{
  breakpoint: 1232,
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
     autoplay: false,
     centerMode: true,

  autoplaySpeed: 10000,
  responsive: [{
    breakpoint: 1510,
    settings: {
        slidesToShow: 3
    }
},
{
  breakpoint: 1232,
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
     autoplay: false,
  autoplaySpeed: 10000,
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

//range

var thumbsize = 14;

function draw(slider,splitvalue) {

    /* set function vars */
    var min = slider.querySelector('.min');
    var max = slider.querySelector('.max');
    var lower = slider.querySelector('.lower');
    var upper = slider.querySelector('.upper');
    var legend = slider.querySelector('.legend');
    var thumbsize = parseInt(slider.getAttribute('data-thumbsize'));
    var rangewidth = parseInt(slider.getAttribute('data-rangewidth'));
    var rangemin = parseInt(slider.getAttribute('data-rangemin'));
    var rangemax = parseInt(slider.getAttribute('data-rangemax'));

    /* set min and max attributes */
    min.setAttribute('max',splitvalue);
    max.setAttribute('min',splitvalue);

    /* set css */
    min.style.width = parseInt(thumbsize + ((splitvalue - rangemin)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))+'px';
    max.style.width = parseInt(thumbsize + ((rangemax - splitvalue)/(rangemax - rangemin))*(rangewidth - (2*thumbsize)))+'px';
    min.style.left = '0px';
    max.style.left = parseInt(min.style.width)+'px';
    min.style.top = lower.offsetHeight+'px';
    max.style.top = lower.offsetHeight+'px';
    legend.style.marginTop = min.offsetHeight+'px';
    slider.style.height = (lower.offsetHeight + min.offsetHeight + legend.offsetHeight)+'px';
    
    /* correct for 1 off at the end */
    if(max.value>(rangemax - 1)) max.setAttribute('data-value',rangemax);

    /* write value and labels */
    max.value = max.getAttribute('data-value'); 
    min.value = min.getAttribute('data-value');
    lower.innerHTML = min.getAttribute('data-value');
    upper.innerHTML = max.getAttribute('data-value');

}

function init(slider) {
    /* set function vars */
    var min = slider.querySelector('.min');
    var max = slider.querySelector('.max');
    var rangemin = parseInt(min.getAttribute('min'));
    var rangemax = parseInt(max.getAttribute('max'));
    var avgvalue = (rangemin + rangemax)/2;
    var legendnum = slider.getAttribute('data-legendnum');

    /* set data-values */
    min.setAttribute('data-value',rangemin);
    max.setAttribute('data-value',rangemax);
    
    /* set data vars */
    slider.setAttribute('data-rangemin',rangemin); 
    slider.setAttribute('data-rangemax',rangemax); 
    slider.setAttribute('data-thumbsize',thumbsize); 
    slider.setAttribute('data-rangewidth',slider.offsetWidth);

    /* write labels */
    var lower = document.createElement('span');
    var upper = document.createElement('span');
    lower.classList.add('lower','value');
    upper.classList.add('upper','value');
    lower.appendChild(document.createTextNode(rangemin));
    upper.appendChild(document.createTextNode(rangemax));
    slider.insertBefore(lower,min.previousElementSibling);
    slider.insertBefore(upper,min.previousElementSibling);
    
    /* write legend */
    var legend = document.createElement('div');
    legend.classList.add('legend');
    var legendvalues = [];
    for (var i = 0; i < legendnum; i++) {
        legendvalues[i] = document.createElement('div');
        var val = Math.round(rangemin+(i/(legendnum-1))*(rangemax - rangemin));
        legendvalues[i].appendChild(document.createTextNode(val));
        legend.appendChild(legendvalues[i]);

    } 
    slider.appendChild(legend);

    /* draw */
    draw(slider,avgvalue);

    /* events */
    min.addEventListener("input", function() {update(min);});
    max.addEventListener("input", function() {update(max);});
}

function update(el){
    /* set function vars */
    var slider = el.parentElement;
    var min = slider.querySelector('#min');
    var max = slider.querySelector('#max');
    var minvalue = Math.floor(min.value);
    var maxvalue = Math.floor(max.value);
    
    /* set inactive values before draw */
    min.setAttribute('data-value',minvalue);
    max.setAttribute('data-value',maxvalue);

    var avgvalue = (minvalue + maxvalue)/2;

    /* draw */
    draw(slider,avgvalue);
}

var sliders = document.querySelectorAll('.min-max-slider');
sliders.forEach( function(slider) {
    init(slider);
});


}