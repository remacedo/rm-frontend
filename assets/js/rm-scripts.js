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

	$(".iconLupa").click(function(e){
		e.preventDefault();
		var inputSearch = $(".searchInput");
		var fieldSearch = $(".fieldSearch");

		
		inputSearch.toggleClass("openSearch");
		fieldSearch.show().focus().attr("placeholder", "o que você procura?");

		if (fieldSearch.val() != "") {
			$('#formSearch').submit();
		};

	});


});






