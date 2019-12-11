(function ($) {

  switch_style = {

    onReady: function () {      
      this.switch_style_click();
    },
    
    switch_style_click: function(){
    	$(".color").click(function(e){
        event.preventDefault();
    		var id = $(this).attr("id");
    		$("#color-switch").attr("href", "css/" + id + ".css");    		
    	});
    	
    },
  };

  $().ready(function () {
	  switch_style.onReady();
  });

})(jQuery);


/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
$(document).ready(function(){
  $("body").on("click",".toggle-color-menu",function(){
    if($(this).hasClass('open')){
      $(this).removeClass('open');
      $(".color-changer").animate({'left':'-260px'},400).fadeIn(500);
    }else{
      $(this).addClass('open');
      $(".color-changer").animate({'left':'0px'},400).fadeIn(500);
    }
  });

});