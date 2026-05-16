(function($){
	$(document).ready(function(){
		// 메인메뉴
		var menu, menuLi, menuLink;
		menu = $("#lnb");
		menuLi = $("#lnb > li");
		menuLink = $("#lnb > li > a");
		menuLink.on("click", function(){
			if($(this).parent("li:has(ul)").length > 0){
				menuLi.not($(this).parent("li")).removeClass("on");
				//menuLi.find("ul li").not($(this).parent("li").find("ul li.on")).removeClass("on");
				$(this).parent("li").addClass("on");
				//$(this).parent("li").find("ul").stop().slideDown(250);
				return false;
			}
		});

		function activeMenu(){
			var active = menuLi.find("ul li.on");
			active.parent().parent().addClass("on");
			$("#lnb > li.on").find("ul").show();
		}
		activeMenu();

		// [START] fadein & fadeout (author : KANG HEE CHANG)
		function fadeGallery(obj, timer){
			var $speed = 500;
			var $wrapper = "#" + obj;
			var $sel = 0;
			var flag = true

			$($wrapper).find(".gallery").children("li:gt(0)").hide();
			$($wrapper).find(".control").children("li:first-child").addClass("on");
			if($($wrapper).find(".gallery").children("li").length==1){
				return false;
			}
			function goNext(){
				if(flag == true){
					flag = false;
					$sel++;
					$($wrapper).find(".page").children(".t_point").text($sel+1);
					if($sel == $($wrapper).find(".gallery").children("li").size()){
						$sel = 0;
						$($wrapper).find(".page").children(".t_point").text($sel+1);
					}
					$($wrapper).find(".control").children("li").eq($sel).addClass("on");
					$($wrapper).find(".control").children("li").not($($wrapper).find(".control").children("li").eq($sel)).removeClass("on");
					$($wrapper).find(".gallery").children("li")
						.fadeOut()
						.eq($sel).fadeIn(function(){flag = true;});
				}
				return false;
			}
			$($wrapper).find(".links_next").click(goNext);

			function goPrev(){
				if(flag == true){
					flag = false;
					$sel--;
					$($wrapper).find(".page").children(".t_point").text($sel+1);
					if($sel == -1){
						$sel = $($wrapper).find(".gallery").children("li").size() - 1;
						$($wrapper).find(".page").children(".t_point").text($sel+1);
					}
					$($wrapper).find(".control").children("li").eq($sel).addClass("on");
					$($wrapper).find(".control").children("li").not($($wrapper).find(".control").children("li").eq($sel)).removeClass("on");
					$($wrapper).find(".gallery").children("li")
						.fadeOut()
						.eq($sel).fadeIn(function(){flag = true;});
				}
				return false;
			}
			$($wrapper).find(".links_prev").click(goPrev);

			// 바로가기
			function goDirect(){
				if(flag == true && !$(this).parent().hasClass("on")){
					flag = false;
					$sel = $(this).parent().index();
					$($wrapper).find(".page").children(".t_point").text($sel+1);
					$(this).parent("li").addClass("on");
					$($wrapper).find(".control").children("li").not($(this).parent("li")).removeClass("on");
					$($wrapper).find(".gallery").children("li")
						.fadeOut()
						.eq($sel).fadeIn(function(){flag = true;});
				}
				return false;
			}
			$($wrapper).find(".control a").click(goDirect);

			// 자동실행
			var autoPlay;
			function autoChange(){
				autoPlay = setInterval(goNext, timer);
			}
			autoChange();

			// 영역 오버시 멈춤
			$($wrapper).hover(
				function(){
					clearInterval(autoPlay);
				},
				function(){
					autoChange();
				}
			);

			// 컨트롤러
			$($wrapper).find(".links_stop").click(function(){
				clearInterval(autoPlay);
			});
			$($wrapper).find(".links_play").click(function(){
				autoChange();
			});
		}

		// 호출함수(아이디, 딜레이)
		if($("#mBytree").length>0){
			fadeGallery("mBytree", 4000);
		}
		if($("#mPromo").length>0){
			fadeGallery("mPromo", 4000);
		}
		if($("#mPromotion").length>0){
			fadeGallery("mPromotion", 4000);
		}
		if($("#mVisual").length>0){
			fadeGallery("mVisual", 4000);
		}
		// [END] fadein & fadeout

		// 목록 테이블 셀 디자인
		if($("table.cell_design").length>0){
			$("table.cell_design").each(function(){
				$(this).find("tbody").children("tr:odd").addClass("even");
			});
		}
		if($("table.cell_design").length>0){
			$("table.cell_design").each(function(){
				$(this).find("tbody").children("tr:odd").addClass("even");
			});
		}
		if($(".list_cell_design").length>0){
			$(".list_cell_design").each(function(){
				$(this).find("li:even").addClass("odd");
			});
		}

		// 공통탭
		$(".tab > li > a[href^=#tab]").on("click", function(){
			var view = $(this).attr("href");
			$(".tab_cont[id]").removeClass("on");
			$(view).addClass("on");
			$(this).parents(".tab").children("li").removeClass("on");
			$(this).parent().addClass("on");
			return false;
		});

		// Photo & Video
		$("#divProduct.pv_wrap .more").on("click", function(){
			if($("#divProduct.pv_wrap").children(".box_basic").hasClass("on")){
				$("#divProduct.pv_wrap").children(".box_basic").removeClass("on");
				$(this).text("전체보기").attr("title","관련 사진과 동영상 전체보기");
			}else{
				$("#divProduct.pv_wrap").children(".box_basic").addClass("on");
				$(this).text("닫기").attr("title","관련 사진과 동영상 닫기");
			}
			return false;
		});

		// select decoration
		if($(".select_wrap").length>0){
			$(".select_wrap").each(function(){
				$(this).find(".head a span").text($(this).find(".head input:hidden").val());
			});
		};
		$(".select_wrap .head a").on("click", function(){
			if($(this).parents(".select_wrap").hasClass("on")){
				$(this).parents(".select_wrap").removeClass("on");
			}else{
				$(this).parents(".select_wrap").addClass("on");
			}
			return false;
		});
		$(".select_wrap").find("li a").on("click", function(){
			$(this).parents(".select_wrap").find(".head input:hidden").val($(this).text());
			$(this).parents(".select_wrap").find(".head a span").text($(this).text());
			$(this).parents(".select_wrap").removeClass("on");
			return false;
		});
		$(".select_wrap").on("mouseleave", function(){
			$(".select_wrap").removeClass("on");
		});
	});
})(jQuery);