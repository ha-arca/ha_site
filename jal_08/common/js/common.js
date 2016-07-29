/*=======================================================
						Rollover
=======================================================*/
jQuery(document).ready(function($) {
    $("img.imgover").mouseover(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_over$2"))

    }).mouseout(function(){
        $(this).attr("src",$(this).attr("src").replace(/^(.+)_over(\.[a-z]+)$/, "$1$2"))
    })
})

/*=======================================================
						Popup
=======================================================*/
function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
/*=======================================================
						GNAV
=======================================================*/
jQuery(document).ready(function($) {
    $open=false;
	function menuMb() {
		$("#menu ul").slideToggle();
		if($open==false){
			$open=true;
		}else{
			$open=false;
		}
	}
	
	$('#menu #btn_menu').click(function() {
		menuMb();
	});
	
});

/*=======================================================
					CHANGES GNAV SP
=======================================================*/
jQuery(document).ready(function($) {
	// Add menu li on mobile
	$("#gnav ul").append('<li class="sp"><a href="#" target="_blank"><span>地図・アクセス</span></a></li>');
	$("#gnav ul").append('<li class="sp"><a href="#" target="_blank"><span>お問い合わせ</span></a></li>');
	$("#gnav ul").append('<li class="sp"><a href="#" target="_blank"><span>サイトマップ</span></a></li>');
	
	// Effect Click on Mobile
	$open=false;
	function menuMb() {
		$("#gnav ul").slideToggle();
		if($open==false){
			$open=true;
		}else{
			$open=false;
		}
	}
	
	$('#gnav #btn_menu').click(function() {
		menuMb();
	});
	
});

/*=======================================================
				CHANGE IMG FROM PC TO SP
=======================================================*/
jQuery(document).ready(function($) {
	var elem = $(this);
	var imgSrc = $("img", elem).map(function() {
		return $(this).attr("src");
	});

	function changeImages() {
		var winW = $(window).width();
		for (var i = 0; i < imgSrc.length; i++) {
			var newImgSrc = imgSrc[i].substring(0, imgSrc[i].length - 4),
				getExp = imgSrc[i].slice(-3),
				newImg = newImgSrc + "_sp";
			if (getExp == "jpg") {
					newImg = newImg + "." + getExp;
				} else if (getExp == "gif") {
					newImg = newImg + "." + getExp;
				} else if (getExp == "png") {
					newImg = newImg + "." + getExp;
				}

			if (winW <= 1280) {
					$("img.spChange", elem).each(function() {
						$(this).attr("src", $(this).attr("src").replace(imgSrc[i], newImg));
					});
				} else {
					$("img.spChange", elem).each(function() {
						$(this).attr("src", $(this).attr("src").replace(newImg, imgSrc[i]));
					});
				}
		}
	}
	changeImages();
	$(window).resize(function() {
		changeImages();
	});
})

/*=======================================================
						PAGETOP
=======================================================*/
jQuery(document).ready(function($) {
	$('a').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $(this).attr('href') ).offset().top
    	}, 500);
    	return 
	});
});

/*=======================================================
					HEIGHTLINE
 =======================================================*/
(function( $ ) {
	$.fn.heightLine = function( options ){
		 var container = $( this );			
		 function setHeight() {
			var winW = $(window).width();
			var maxHeight = 0;
			//Get all the element with class = col
			column = $( container );
			if(winW <= 360){
				column.removeAttr( 'style' );		
			}else{
				column.css( 'height', 'auto' );
				//Loop all the column
				column.each( function() {
					//Store the highest value
					if( $( this ).height() > maxHeight ) {
					maxHeight = $( this ).height();
				}
				});
				//Set the height
				column.height( maxHeight );
			}
		}
		setHeight();		
		$(window).resize( function() {
			setHeight();
		});
	};
}( jQuery ));
/*=======================================================
					accordion
 =======================================================*/

jQuery(document).ready(function($) {
	// Ẩn tất cả .accordion trừ accordion đầu tiên
	$("#accordion .box_list:not(:first)").hide();
	// Áp dụng sự kiện click vào thẻ h3
	$("#accordion .btn_accor").each(function(){
		 $(this).click(function(){
	  if ($("#accordion .box_list").is(':hidden')!=true) {
	    	$("#accordion .box_list").slideUp();
	  } if ($("#accordion .box_list").is(':hidden')==true) {
	    $("#accordion .box_list").slideDown();
	  }
		 });
	});});
	

 
/*=======================================================
					fix_sidebar
 =======================================================*/
$(window).load(function () { 
	
	

	var mainArea = $("#main");
	var sideWrap = $("#sideWrap");
	var sideArea = $("#side");

	var wd = $(window); 
	
	var mainH = mainArea.height();
	var sideH = sideWrap.height();
	
	
	if(sideH < mainH) { 
		sideWrap.css({"height": mainH,"position": "relative"});
		var sideOver = wd.height()-sideArea.height();
		var starPoint = sideArea.offset().top-140 + (-sideOver);
		var breakPoint = sideArea.offset().top-140 + mainH;
		
		wd.scroll(function() {
			
			if(wd.height() < sideArea.height()){
				if(starPoint < wd.scrollTop() && wd.scrollTop() + wd.height() < breakPoint){
					sideArea.css({"position": "fixed", "bottom": "10px"}); 
	
				}else if(wd.scrollTop() + wd.height() >= breakPoint){
					sideArea.css({"position": "absolute", "bottom": "10px"});
	
				} else {
					sideArea.css({"position": "static"});
	
				}
	
			}else{
			
				var sideBtm = wd.scrollTop() + sideArea.height () ;
				
				if(mainArea.offset().top-140 < wd.scrollTop() && sideBtm < breakPoint){
					sideArea.css({"position": "fixed", "top": "140px"});
					
				}else if(sideBtm >= breakPoint){
				
					var fixedSide = mainH - sideH ;
					
					sideArea.css({"position": "absolute", "top": fixedSide });
					
				} else {
					sideArea.css("position", "static");
				}
			}				
		
		});
	
	} 

}); 
 