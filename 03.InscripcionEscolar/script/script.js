$(document).ready(function(){
  var opcion = $("li")

    let formulario =$("form")

    opcion.on("click",function(){
        var i = $(this).index();
       formulario.hide();
        formulario.eq(i).show();
      
      
         $(this).find("a").addClass("active")
        $(this).removeClass("active");
      
    })
})

