$(document).ready(function(){
   
   	$(".cart_h1").click(function(){
   		$(".cart_p1").slideToggle(1000)});

	$(".cart_h2").click(function(){
   		$(".cart_p2").slideToggle(1000)});

	$(".cart_h3").click(function(){
   		$(".cart_p3").slideToggle(1000)});

	$(".cart_h4").click(function(){
   		$(".cart_p4").slideToggle(1000)});

	$(".cart_h5").click(function(){
   		$(".cart_p5").slideToggle(1000)});

	$(".cart_h6").click(function(){
   		$(".cart_p6").slideToggle(1000)});

	$(".cart_h7").click(function(){
   		$(".cart_p7").slideToggle(1000)});

	$(".cart_h8").click(function(){
   		$(".cart_p8").slideToggle(1000)});

	$(".cart_h9").click(function(){
   		$(".cart_p9").slideToggle(1000)});

	$(".cart_h10").click(function(){
   		$(".cart_p10").slideToggle(1000)});

	$(".cart_h11").click(function(){
   		$(".cart_p11").slideToggle(1000)});

	$(".cart_h12").click(function(){
   		$(".cart_p12").slideToggle(1000)});


	$('.motorollas').mouseover(function(){
		$(".menu_but2").css("background-color","#1765b0");
		$(".menu_but_vs").slideDown(700);
		$(".menu_but_vs").css("background-color","#1765b0");
      $(".menu_but2").fadeOut(500);

	});
	$('.motorollas').mouseleave(function(){
		$(".menu_but_vs").slideUp(700);
		$(".menu_but_vs").css("background-color","rgba(0, 0, 0, 0)");
		$(".menu_but2").css("background-color","#16365f");
		$("#menu_cnop").css("background-color","#1765b0");
      $(".menu_but2").fadeIn(500);	
	});



	$(".img_prosmotr_zakr").click(function(){
   		$(".img_prosmotr").fadeOut(0);
   		$( ".img_prosmotr" ).removeClass( "cart_img1");
   		$( ".img_prosmotr" ).removeClass( "cart_img2");
   		$( ".img_prosmotr" ).removeClass( "cart_img3");
   		$( ".img_prosmotr" ).removeClass( "cart_img4");
   		$( ".img_prosmotr" ).removeClass( "cart_img5");
   		$( ".img_prosmotr" ).removeClass( "cart_img6");
   		$( ".img_prosmotr" ).removeClass( "cart_img7");
   		$( ".img_prosmotr" ).removeClass( "cart_img8");
   		$( ".img_prosmotr" ).removeClass( "cart_img9");
   		$( ".img_prosmotr" ).removeClass( "cart_img10");
   		$( ".img_prosmotr" ).removeClass( "cart_img11");
   		$( ".img_prosmotr" ).removeClass( "cart_img12");
   	});


	$(".cart_img1").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass("cart_img1");
   	});

   	$(".cart_img2").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass("cart_img2");
   	});

   	$(".cart_img3").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img3" );
   	});

   	$(".cart_img4").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img4" );
   	});

   	$(".cart_img5").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img5" );
   	});

   	$(".cart_img6").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img6" );
   	});

   	$(".cart_img7").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img7" );
   	});

   	$(".cart_img8").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img8" );
   	});

   	$(".cart_img9").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img9" );
   	});

   	$(".cart_img10").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img10" );
   	});

   	$(".cart_img11").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img11" );
   	});

   	$(".cart_img12").click(function(){
   		$(".img_prosmotr").fadeIn(500);
   		$( ".img_prosmotr" ).addClass( "cart_img12" );
   	});

});
