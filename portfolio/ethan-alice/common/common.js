(function($){
	$(document).ready(function(){
		if($("#wrap").length > 0){
			$("#wrap").prepend("<span class='before'></span>");
		};

		$(window).bind("load", function(){
			if($(".list_dev li").length > 0){
				$(".list_dev li").each(function(){
					$(this).find(".thumb img").addClass("moveObj"+Math.floor((Math.random() * 5) + 1));
				});
				$(".list_dev .thumb img").css({"visibility":"visible"});

				$("img.moveObj1, img.moveObj5").css({"left":"100%"});
				$("img.moveObj1, img.moveObj5").animate({
					left : 0
				},250);
				$("img.moveObj2").css({"right":"100%"});
				$("img.moveObj2").animate({
					right : 0
				},250);
				$("img.moveObj3").css({"top":"100%"});
				$("img.moveObj3").animate({
					top : 0
				},250);
				$("img.moveObj4").css({"bottom":"100%"});
				$("img.moveObj4").animate({
					bottom : 0
				},250);
			};
		});

		$(window).bind("load resize", function(){
			if($("#mRight").length > 0){
				//$("#mRight").css("height", $("#mLeft").outerHeight()+"px");
				//$("#wrap").css("height", $("#mLeft").outerHeight()+"px");
			}else{
				//$("#wrap").css("height", $(document).height());
			};
			
			//$("body").prepend($("#wrap").css("min-height"));
			if($(window).height() <= $("#wrap").css("min-height").replace("px","")){
				$("#footer").css("position","absolute");
			}else{
				$("#footer").css("position","fixed");
			};
		});

		$(window).bind("scroll", function(){
			if($(window).scrollTop() >= $(document).height() - $(window).height() - $("#footer").outerHeight() && $("#modeCheck").is(":visible")){
				$("#moreScroll").stop().fadeOut();
			}else{
				$("#moreScroll").stop().fadeIn();
			};
		});
		
		// GNB
		$("#gnb > ul > li > a").bind("click", function(){
			if($(this).parent().find(".sub").length > 0){
				if(!$("#container").is(":animated")){
					var currenMenu = $(this);
					if(!currenMenu.parent().hasClass("on")){
						$("#container").animate({
							marginLeft : 330
						},250, function(){
							$("#wrap").addClass("on");
							if($("#header .util_wrap").is(":hidden")){ // PC
								$("#gnb > ul > li").not(currenMenu.parent()).removeClass("on");
								$("#gnb .sub").not(currenMenu.parent().find(".sub")).hide();
								currenMenu.parent().find(".sub").show();
								currenMenu.parent().addClass("on");
								$.each(currenMenu.parent().find(".sub li"), function(i, el){
									$(el).css({
										'opacity':0,
										'top':'10px'
									});
									setTimeout(function(){
									   $(el).animate({
										'opacity':1.0,
										'top':0
									   }, 250);
									},100 + ( i * 100 ));
								});
							}else{ // Mobile
								$("#gnb .sub").not(currenMenu.parent().find(".sub")).slideUp(250, function(){
									$("#gnb > ul > li").not(currenMenu.parent()).removeClass("on");
								});
								currenMenu.parent().find(".sub").slideDown(250, function(){
									currenMenu.parent().addClass("on");
								});
							}
						});
					}else{
						if($("#header .util_wrap").is(":hidden")){ // PC
							currenMenu.parent().find(".sub").hide();
							currenMenu.parent().removeClass("on");
						}else{ // Mobile
							currenMenu.parent().find(".sub").slideUp(250, function(){
								currenMenu.parent().removeClass("on");
							});
						}
						$("#container").animate({
							marginLeft : 197
						},250, function(){
							$("#wrap").removeClass("on");
						});
					};
				};
				return false;
			};
		});
		if($("#gnb > ul > li.on").length > 0){
			$("#wrap").addClass("on");
			if($("#header .util_wrap").is(":hidden")){ // PC
				$.each($("#gnb > ul > li.on").find(".sub li"), function(i, el){
					$(el).css({
						'opacity':0,
						'top':'10px'
					});
					setTimeout(function(){
					   $(el).animate({
						'opacity':1.0,
						'top':0
					   }, 250);
					},100 + ( i * 100 ));
				});
			};
		};

		$("#header .util_wrap .menu").bind("click", function(){
			if(!$("#gnb").is(":animated")){
				$("#gnb").toggle();
				$(this).toggleClass("active");
			}
		});

		// Main
		$("#mNotice button").bind("click", function(){
			if($("#mNotice.on").length == 0){
				$("#mNotice .inner").show();
				var objHeight = $("#mNotice > .outer").outerHeight();
				$("#mNotice").css("margin-top", objHeight*-1+"px");
				$("#mNotice").animate({
					marginTop : 0
				}, "fast", function(){
					$(this).addClass("on");
				});
			}else{
				var objHeight = $("#mNotice > .outer").outerHeight();
				$("#mNotice").animate({
					marginTop : objHeight*-1
				}, "fast", function(){
					$("#mNotice .inner").hide();
					$("#mNotice").css("margin-top", "0")
					$(this).removeClass("on");
				});
			};

		});
		viewRequest = function(obj){
			if($("#modeCheck").is(":hidden")){ // PC일 경우
				//$("#mRight").css("height", $("#mLeft").outerHeight()+"px");
				$("#mRight").css("height", "100%");
				$("#mProject").show();
				$("#mRight").animate({
						marginTop : $("#mLeft").outerHeight()*-1
				}, "fast", function(){
					$("#mRight .group").hide();			
					$(this).css("margin-top","0");	
				});
			}else{
				location.href = obj.attr("href");
			};
		}
		closeRequest = function(){
			$("#mRight .group").show();	
			$("#mRight").css("margin-top",$("#mRight").outerHeight()*-1+"px");
			$("#mRight").animate({
				marginTop : 0
			}, "fast", function(){
				//$("#mRight").css("height", "auto");
				$("#mRight").css("height", "100%");
				$("#mProject").hide();	
			});
		}
		viewLocation = function(){
			if($("#modeCheck").is(":hidden")){ // PC일 경우
				$("#mContact").css({
					"position":"relative",
					"left":"auto"
				});
				$("#mBody > .outer").animate({
					marginLeft : -100 + "%"
				}, 500);
			}else{
				location.href = obj.attr("href");
			};
		}
		closeLocation = function(){
			$("#mBody > .outer").animate({
				marginLeft : 0
			}, "fast", function(){
				$("#mContact").css({
					"position":"fixed",
					"left":"-9999px"
				});
			});
		}

		if($(".fullContents").length > 0){
			$("#contents").addClass("full");
		}

		if($(".list_photo .thumb").length > 0){
			$(".list_photo li").eq(0).find(".thumb").addClass("ov");
		};
		$(".list_photo .thumb").bind("mouseenter", function(){
			$(".list_photo .thumb").removeClass("ov");
			$(this).addClass("ov");
		});
	})
})(jQuery)