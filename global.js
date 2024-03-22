// JS for custom code of vanilla js

// tab nav items  content change
// $(document).ready(function(){
//     $(".tab_content:nth-of-type(1)").fadeIn()
//     $(".nav-item li:nth-of-type(1)").addClass("active_item");
//     $(".item li").on('click',function(event){
//         event.preventDefault();
//     $(".nav-item li:nth-of-type(1)").removeClass("active_item");
//       var target=$(this).attr("id");
//       $(".nav-item li").siblings().removeClass("active_item");
//       $(this).addClass('active_item');
//       $(".tab_content").fadeOut(0);     
//       $("[data-tab="+target+"]").fadeIn(); 
//     });
//     });


document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tab_content:nth-of-type(1)").style.display = "block";
  document.querySelector(".nav-item li:nth-of-type(1)").classList.add("active_item");
  document.querySelectorAll(".item li").forEach(function(item) {
      item.addEventListener('click', function(event) {
          event.preventDefault();
          document.querySelector(".nav-item li:nth-of-type(1)").classList.remove("active_item");
          var target = this.getAttribute("id");
          document.querySelectorAll(".nav-item li").forEach(function(navItem) {
              navItem.classList.remove("active_item");
          });
          this.classList.add('active_item');
          document.querySelectorAll(".tab_content").forEach(function(tabContent) {
              tabContent.style.display = "none";
          });
          document.querySelector("[data-tab=" + target + "]").style.display = "block";
      });
  });
});

