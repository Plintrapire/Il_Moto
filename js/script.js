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
		$(".menu_but_vs").slideDown(1000);
		$(".menu_but_vs").css("background-color","#1765b0");

	});
	$('.motorollas').mouseleave(function(){
		$(".menu_but_vs").slideUp(1000);
		$(".menu_but_vs").css("background-color","rgba(0, 0, 0, 0)");
		$(".menu_but2").css("background-color","#16365f");
		$("#menu_cnop").css("background-color","#1765b0");
		
	});

});
