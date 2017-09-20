//多个可以复用的样式

		$(function(){
			imgWrap($('#img1'))
			imgWrap($('#img2'))
			//绑定id为img2时候，图片有效果
			imgWrap($('#img3'))
			imgWrap($('#img4'))
			imgWrap($('#img5'))
			imgWrap($('#img6'))
			
		})

		function imgWrap(obj){
			obj.mouseover(function(){	//鼠标移入时候
				obj.find('.img_mask').css("visibility","inherit").css("opacity","1");// 显示遮盖层
				obj.find(".imgs").css({"transform":"scale(0.9)"});	//缩小图片
				obj.find(".img_span").stop(true).animate({width:"100%"},200);//描述标题以滚动的方式出来
				obj.find(".img_strong").stop(true).animate({opacity:"1"},"linear")//描述正文显示
			}).mouseout(function(){   //鼠标移出时候
				obj.find('.img_mask').css('visibility','hidden').css('opacity','0');//隐藏遮盖层
				obj.find(".imgs").css({"transform":"scale(1)"});//还原图片
				obj.find(".img_span").stop(true).animate({width:"0"});//描述标题以滚动的方式隐藏
				obj.find(".img_strong").stop(true).animate({opacity:"0"},"linear")//描述正文隐藏
			})
		}