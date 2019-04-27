$(document).ready(function(){
   $(".artworks").change(function(){
     $("img[name=image-swap]").attr("src",$(this).val());

   });

});