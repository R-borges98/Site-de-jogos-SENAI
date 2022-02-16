$(document).ready(function(){
   $("#banner-carrosel img:eq(0)").addclass("banner-ativo").show()
})
   setInterval(slide,1000)
   
   function slide(){
      if ($(".banner-ativo").next().length){
         $(".banner-ativo").removeclass("banner-ativo").hide().next().addclass("banner-ativo").show()
          }else{
             $(".banner-ativo").removeclass()("banner-ativo").hide()
             $("#banner-carrosel img:eq(0)").addclass("banner-ativo").show()

          }
      }
   


   
















$(document).ready(function(){
   $("#barras").click(function(){
      $("#menu").toggleclass("#menu-ativo")
 })
})














    
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