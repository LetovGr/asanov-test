$( document ).ready(function() {

	var Shuffle = window.Shuffle;
	var element = $(".directions__sort-container");
	var shuffleInstance = new Shuffle(element, {
	  itemSelector: ".directions__item",
	});

	$(".directions__btn").click(function(){
		let dataAttr = $(this).attr("data-filter");		
		if (dataAttr === "all"){
			shuffleInstance.filter();
		} else {	
			shuffleInstance.filter([dataAttr]);
		}

		$(".directions__btn").removeClass("_active");
		$(this).addClass("_active");
		$(".directions__btn-line").addClass("_active");
	});

	$(".main__banner-button").click(function(){
		$(".popup").not(":last").addClass("_active");
		$(".dark-screen").not(":last").addClass("_active");
	});

	$(".footer__button").click(function(){
		$(".popup").not(":first").addClass("_active");
		$(".dark-screen").not(":first").addClass("_active");
	});

	$(".popup__close").click(function(){
		$(".popup").removeClass("_active");
		$(".dark-screen").removeClass("_active");
	});

	$(".dark-screen").click(function(){
		$(".popup").removeClass("_active");
		$(".dark-screen").removeClass("_active");
	});

});


