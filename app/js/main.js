
// onclick change arrow in header
$(document).ready(function() { 
    $('.header-top-second-btn').click(function(){
      var src = $(".header-top-second-btn img").attr('src');
  
      if(src=="img/icons/arr-down.svg")
        $(".header-top-second-btn img").attr('src',"img/icons/arr-up.svg");
      else
        $(".header-top-second-btn img").attr('src',"img/icons/arr-down.svg");
    });
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
  dots: true,
  responsive: [{
    breakpoint: 1510,
    settings: {
        centerMode: true,
        slidesToShow: 3
    }
},
{
  breakpoint: 1232,
  settings: {
      slidesToShow: 2
  }
}

]

 });
 $('.news-container').slick({
  slidesToShow: 4,
  dots: true,
  responsive: [{
    breakpoint: 1510,
    settings: {
        centerMode: true,
        slidesToShow: 3
    }
},
{
  breakpoint: 1232,
  settings: {
      slidesToShow: 2
  }
}

]

 });
 $('.popular-container').slick({
  slidesToShow: 4,
  dots: true,
  responsive: [{
    breakpoint: 1510,
    settings: {
        centerMode: true,
        slidesToShow: 3
    }
},
{
  breakpoint: 1232,
  settings: {
      slidesToShow: 2
  }
}

]

 });

 $('.news2-container').slick({
  slidesToShow: 4,
  dots: true,
  responsive: [{
    breakpoint: 1510,
    settings: {
        centerMode: true,
        slidesToShow: 3
    }
},
{
  breakpoint: 1232,
  settings: {
      slidesToShow: 2
  }
}

]

 });

 $('.sponsors-container').slick({
  slidesToShow: 6,
  infinite: true,
  dots: true,
  responsive: [{
    breakpoint: 1409,
    settings: {
        centerMode: true,
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
    centerMode: true,
      slidesToShow: 2
  }
},
{
  breakpoint: 524,
  settings: {
    centerMode: true,
      slidesToShow: 1
  }
}

]

 });
 function showSideBar(){
  document.getElementById('sidepopup').style.display="block";
 }
//  function hideSideBar(){
//   document.getElementById('sidepopup').style.display="none";
//  }

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}