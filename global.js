// JS for custom code of vanilla js

// tab nav items  content change
$(document).ready(function(){
    $(".tab_content:nth-of-type(1)").fadeIn()
    $(".nav-item li:nth-of-type(1)").addClass("active_item");
    $(".item li").on('click',function(event){
        event.preventDefault();
    $(".nav-item li:nth-of-type(1)").removeClass("active_item");
      var target=$(this).attr("id");
      $(".nav-item li").siblings().removeClass("active_item");
      $(this).addClass('active_item');
      $(".tab_content").fadeOut(0);     
      $("[data-tab="+target+"]").fadeIn(); 
    });
    });
