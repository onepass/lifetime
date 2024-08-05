///****************************************
//*************
///**************************************** 

$(document).ready(function () {

	//Initiat WOW JS
	new WOW().init();


	$('a[href="#about"],a[href="#room"],a[href="#other"],a[href="#room1"],a[href="#room2"],a[href="#room3"],a[href="#room4"],a[href="#room5"]').on('click', function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 900, 'swing');
	});

	//goto top
	$("#gotop").click(function () {
		jQuery("html,body").animate({
			scrollTop: 0
		}, 1200);
	});
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.btns').fadeIn("fast");
		} else {
			$('.btns').stop().fadeOut("fast");
		}
	});
	$('#otherbtn').click(function(){
		$('html, body').animate({scrollTop: $('#room').offset().top}, 1000)
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 800) {
			$('img.dex_logo').fadeIn("300");
		} else {
			$('img.dex_logo').stop().fadeOut("fast");
		}
	});
		
	/*mobile menu*/
	$(".mibutton").click(function(e) {
		$(this).toggleClass("mibutton_ani");
		$(".navbar").toggleClass("show");
	});
	$(".ibutton li").click(function(e) {
		$(".mibutton").removeClass("mibutton_ani");
		$(".navbar").removeClass("show");
	});

});


	$.fn.sideToggle = function(options) {

		var settings = $.extend({
		  moving : null, // which object to toggle?
		  direction : null // toggle from this side of the window
		}, options);
	
	
		return this.click(function(){
	
		  var thisDir = {};
	
		  var moveThis = settings.moving;
		  var dirPos = parseInt($(moveThis).css(settings.direction), 10);
		  var menuWidth = $(moveThis).outerWidth();
	
		  if (isNaN(dirPos)) {
			console.log("Please define the object's position in the css.");
		  }
	
		  if (dirPos === 0) {
			thisDir[settings.direction] = -menuWidth;
			$(moveThis).animate(thisDir);
		  } else {
			thisDir[settings.direction] = 0;
			$(moveThis).animate(thisDir);
		  }
		});
	  }

  $.fn.sideToggle = function(moving) {
    return this.click(function(){
      var right = parseInt($(moving).css('left'), 10);
      var menuWidth = $(moving).outerWidth();
      if (right === 0) {
        $(moving).animate({'left' : -menuWidth
                          });
      } else {
        $(moving).animate({'left' : '0px'});
      }
    });
  }



jQuery(function ($) {

	//nav collapse
	var _0x36f8 = ["\x3A\x76\x69\x73\x69\x62\x6C\x65", "\x69\x73", "\x2E\x6E\x61\x76\x62\x61\x72\x2D\x74\x6F\x67\x67\x6C\x65", "\x68\x69\x64\x65", "\x63\x6F\x6C\x6C\x61\x70\x73\x65", "\x2E\x6E\x61\x76\x62\x61\x72\x2D\x63\x6F\x6C\x6C\x61\x70\x73\x65", "\x63\x6C\x69\x63\x6B", "\x2E\x6E\x61\x76\x62\x61\x72\x2D\x6E\x61\x76\x20\x6C\x69\x20\x61"];
	$(_0x36f8[7])[_0x36f8[6]](function (_0xfed2x1) {
		var _0xfed2x2 = $(_0x36f8[2])[_0x36f8[1]](_0x36f8[0]);
		if (_0xfed2x2) {
			$(_0x36f8[5])[_0x36f8[4]](_0x36f8[3])
		}
	})


});



//IE6或者IE7 IE8*/

var _0xb9d7 = ["\x61\x70\x70\x4E\x61\x6D\x65", "\x61\x70\x70\x56\x65\x72\x73\x69\x6F\x6E", "\x3B", "\x73\x70\x6C\x69\x74", "", "\x72\x65\x70\x6C\x61\x63\x65", "\x4D\x69\x63\x72\x6F\x73\x6F\x66\x74\x20\x49\x6E\x74\x65\x72\x6E\x65\x74\x20\x45\x78\x70\x6C\x6F\x72\x65\x72", "\x4D\x53\x49\x45\x38\x2E\x30", "\x4D\x53\x49\x45\x37\x2E\x30", "\x4D\x53\x49\x45\x36\x2E\x30", "\u89AA\u611B\u7684\u7528\u6236\u60A8\u597D\uFF0C\u70BA\u63D0\u5347\u7DB2\u7AD9\u7684\u7528\u6236\u9AD4\u9A57\uFF0C\u5EFA\u8B70\u60A8\u5C07\x49\x45\u700F\u89BD\u5668\u7248\u672C\u5347\u7D1A\u81F3\uFF0C\u6216\u4F7F\u7528\u5176\u4ED6\u700F\u89BD\u5668\x21", "\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x69\x6E\x64\x6F\x77\x73\x2E\x6D\x69\x63\x72\x6F\x73\x6F\x66\x74\x2E\x63\x6F\x6D\x2F\x7A\x68\x2D\x74\x77\x2F\x69\x6E\x74\x65\x72\x6E\x65\x74\x2D\x65\x78\x70\x6C\x6F\x72\x65\x72\x2F\x64\x6F\x77\x6E\x6C\x6F\x61\x64\x2D\x69\x65"];
var b_name = navigator[_0xb9d7[0]];
var b_version = navigator[_0xb9d7[1]];
var version = b_version[_0xb9d7[3]](_0xb9d7[2]);
var trim_version = version[1][_0xb9d7[5]](/[ ]/g, _0xb9d7[4]);
if (b_name == _0xb9d7[6]) {
	if (trim_version == _0xb9d7[7] || trim_version == _0xb9d7[8] || trim_version == _0xb9d7[9]) {
		if (confirm(_0xb9d7[10])) {
			window[_0xb9d7[12]][_0xb9d7[11]] = _0xb9d7[13]
		} else {}
	}
}






//------------ct-navbar.js--------------------------------

/*searchVisible = 0;
transparent = true;
hasTransparent = false;

$(document).ready(function () {
	if ($('nav[role="navigation"]').hasClass('navbar-transparent')) {
		hasTransparent = true;
	}
	$('[data-toggle="search"]').click(function () {
		if (searchVisible == 0) {
			searchVisible = 1;
			$(this).parent().addClass('active');
			$(this).children('p').html('Close');
			$('.navbar-search-form').fadeIn(function () {
				$('.navbar-search-form input').focus();
			});
		} else {
			searchVisible = 0;
			$(this).parent().removeClass('active');
			$(this).children('p').html('Search');
			$(this).blur();
			$('.navbar-search-form').fadeOut(function () {
				$('.navbar-search-form input').blur();
			});
		}
	});





});
$(document).scroll(function () {
	if (hasTransparent) {
		if ($(this).scrollTop() > 100) {
			if (transparent) {
				transparent = false;
				$('nav[role="navigation"]').removeClass('navbar-transparent');
			}
		} else {
			if (!transparent) {
				transparent = true;
				$('nav[role="navigation"]').addClass('navbar-transparent');
			}
		}
	}
});*/