
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