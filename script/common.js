$(function() {
	contentsPrint();
});

//tab
function tab () {
	var aBtn = $(".tab > li > .tab_btn");

	aBtn.on("click", function() {
		var sectionEx = $(this).closest("section").hasClass("planner_zone");
		if (sectionEx == true){
			$(this).closest(".tab").find("> li").removeClass("on").removeClass("active").children('.tab_cnt').hide();
			$(this).closest("li").addClass("on").children('.tab_cnt').show();
			$(this).closest("li").siblings("li").addClass("active");
		} else {
			$(this).closest(".tab").find("> li").removeClass("on").children('.tab_cnt').hide();
			$(this).closest("li").addClass("on").children('.tab_cnt').show();
		}
	});
}

//checkbox reset
function resetCheckbox(){
	var survey_box = $(".survey_box");

	survey_box.each(function(){
		$(this).find("label:first").on("click",function(){
			if($(this).siblings("input").is(":checked") == false){
				$(this).closest("dd").find("input").attr("checked",false);
			}
		});
		$(this).find("label:not(:first)").on("click",function(){
			if($(this).find("label:not(:first)").is(":checked") == false){
				$(this).closest("dd").find("input:first").attr("checked",false);
			}
		});
	});
}

//layer map
function layerMap(){
	var targetLocation = $(".layer_map").find("a");
	targetLocation.on("focus mouseenter",function(){
		className = $(this).attr("class");
		$(this).closest("ul").attr("class","");
		$(this).closest("ul").attr("class",className);
	});
}

/*change list type*/
function chageListType(){
	var sortBtn = $(".sort_type").find("button");
	sortBtn.on("click",function(){
		var sortType = $(this).attr("data-filter-value");
		$(this).addClass("on");
		$(this).siblings("button").removeClass("on");
		$(".item_list").attr("class","item_list on clear");
		$(".item_list").addClass("type_"+sortType);
	});
}

/*badge info*/
function infoBoxView(){
	var boxBtn = $(".take_tit2 .btn_info");
	var target = boxBtn.next(".btn_info_box");
	if(target.is(":visible")){
		target.hide();
	} else {
		target.show();
	}
}

/*contents_print*/
function contentsPrint(e){
	$(".btn_pr").on("click",function(e){
		e.preventDefault();
		window.print();
	})
}
