//FEATURED HOVER
$(document).ready(function myDisplay(){
    $(".linkfeat").hover(
      function () {
          $(".textfeat").show(500);
      },
      function () {
          $(".textfeat").hide(500);
      }
  );
}); 