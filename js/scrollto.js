$(document).ready(function(){
			$("a[href^='#']").click(function(){
				var _href = $(this).attr("href");
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"},1500);
				return false;
			});
});