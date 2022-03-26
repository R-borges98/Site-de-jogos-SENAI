$( document ).ready(function() {

   $("#banner-carrosel img:eq(0)").addClass("banner-ativo").show()

   setInterval(slide, 3000)

   function slide(){
       if($(".banner-ativo").next().length ){
           $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
       }else{
           $(".banner-ativo").removeClass().hide()
           $("#banner-carrosel img:eq(0)").addClass("banner-ativo").show()
       }
   }

   $("#barras").click(function(){
      $("#menu").toggleClass("#menu-ativo")
 })
})

    let email = document.getElementById("campo-email");

    function enviaremail(){
      let emaildigitado = email.value;
      console.log(emaildigitado)
    }


// $(document).ready(function(){
     // $("#barras").click(function(){
        // if($("#menu").hasclass("#menu-ativo")){
        //    $("menu").removeclass("#menu-ativo")
       //  }else{
          //  $("#menu").addclass("menu-ativo")
        // }

      //}
    //  )
  //})
  
  
  // function mostrarpopup(){
   //     window.alert("Hello world")
   // }