//  返回顶部功能函数封装
// 当页面加载完成
// imgUrl：图片地址（必选）
// bottom:按钮距底部（必选）
$(function(){
    // 把函数 挂载到window上 暴露出去
   window.gotoTop=function(options){
    //    默认参数
       var defaults={
           bottom:'100px'
       }
    //    参数合并
       var params = $.extend({},defaults,options)
    //    console.log(options)
    //    console.log(options.bottom)
         // 准备结构
    var $gotoTopHtml =$(' <div class="backToTop"><img src="../img/gototop_05.jpg" alt=""></div> ');
    // 写样式定位
    $gotoTopHtml.css({
        width: '30px',
			height: '50px',
			position: 'fixed',
			bottom:params.bottom,
			left: '610px',
			marginLeft: '50%',
			/*默认隐藏*/
			display: 'none',
    });
    // 返回顶部的js代码
    $(document).scroll(function(){
		//获取距离顶部的位置
		var topDistance = $('html,body').scrollTop();
		//判断
		 if (topDistance > 500){
		   $('.backToTop').fadeIn();
		 }else{
			$('.backToTop').fadeOut();
		 }
	})
    //返回顶部功能(动态添加的元素 需要使用事件委托 才能绑定事件)
    $('body').on('click','.backToTop',function(){
        $('html,body').animate({
            scrollTop:0
        },300)
        
    })
	// $('.backToTop').click(function(){
	// 	$('html,body').animate({
	// 		scrollTop:0
	// 	},300)
	// })
    //    追加到页面的尾部
$('body').append($gotoTopHtml)
    }

})