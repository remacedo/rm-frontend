/* JS Document
+----------------------------------------------------------------+
:: Blog / Portfolio - RM Renato Macedo Front-End Developer
:: Versão: 1.0
:: Front-End: Renato de Macedo
:: Data: 05/02/2015
+----------------------------------------------------------------+
*/

$(document).ready(function(){

/*
+----------------------------------------------------------------+
:: Search Top Animate
+----------------------------------------------------------------+
*/

/*
	$(".iconLupa").click(function(e){
		
		e.preventDefault();
		var inputSearch = $(".searchInput");
		var fieldSearch = $(".fieldSearch");

		if (fieldSearch.val() != "") {
			$('#formSearch').submit();

		}else {
		     inputSearch.toggleClass("openSearch");
		     fieldSearch.focus();
		}

	});
*/


	/* BOTÃO SCROLL TOP */
	$(".btnTop").click(function(){
		$("html, body").animate({ scrollTop: 0 }, 800);
	});

	/* LIGHTBOX - MENU CATEGORIA MOBILE */
	$(".menuMobile").click(function(){
		$(".modalBackgroundMobile").fadeIn('fast');
		$(".modalMenuCateg").fadeIn('fast').animate({ marginTop: '60px', opacity: 1}, 400);
	});

	$(".closeMenuMobile").click(function(){
		$(".modalMenuCateg, .modalBackgroundMobile").fadeOut('fast');
		$(".modalMenuCateg").animate({ marginTop: '0', opacity: 0}, 400);
	});



});






