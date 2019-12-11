(function($){
	"use strict";


    /**
     * ----------------------------------------------
     * counter up
     * ----------------------------------------------
     */
    $('.counter').each(function() {
      var $this = $(this),
          countTo = $this.attr('data-count');
      
      $({ countNum: $this.text()}).animate({
        countNum: countTo
      },
      {
        duration: 2000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }
      });  
    });

    /**
     * ----------------------------------------------
     * Nav Scroll
     * ----------------------------------------------
     */
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >=20) {
             $(".navbar").addClass("nav2");
         } else {
             $(".navbar").removeClass("nav2");
         }
    });

    /**
     * ----------------------------------------------
     * Nav Scroll active class
     * ----------------------------------------------
     */
    $(".scroll").click(function(event){   
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });

    $(document).on("scroll", onScroll);
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('.nav li .menu-item').each(function () {
            var currLink = $(this);
              var refElement = $(currLink.attr("href"));
              if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                  $('.nav li .menu-item').removeClass("active");
                  currLink.addClass("active");
              }
              else{
                  currLink.removeClass("active");
              }
        });
    }



    

    /**
    * ----------------------------------------------
    * owl-carousel custom-slider
    * ----------------------------------------------
    */
    $(".custom-slider").owlCarousel({
        items:1,
        dots:true,       
        autoplay: true,        
        nav:true,
        navSpeed: 800,
        dotsSpeed: 800,
        autoplaySpeed: 800,
        navText:["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        loop: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                dots:false,
                nav:false,
                autoplay: false
            },
            // breakpoint from 480 up
              480 : {
                dots:false,
                nav:false,
                autoplay: true
              },
            // breakpoint from 768 up
            768 : {
                dots:true,
                nav:true,
                autoplay: false
            }
        },
    });

    /**
     * ----------------------------------------------
     * mixitup
     * ----------------------------------------------
     */
    var containerEl = document.querySelector('.work-list');
    var mixer = mixitup(containerEl);
    mixer.filter('.all');

	/**
    * ----------------------------------------------
    * owl-carousel sponsor-carousel
    * ----------------------------------------------
    */
    $(".sponsor-carousel").owlCarousel({
       	items:4,
        dots:false,       
        autoplay: true,        
        nav:false,
        navSpeed: 800,
        dotsSpeed: 800,
        autoplaySpeed: 800,
        margin: 50,
        loop: true,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items:2
            },
            // breakpoint from 480 up
              480 : {
                items:3
              },
            // breakpoint from 768 up
            768 : {
                items:4
            }
        },
    });


    /**
     * ----------------------------------------------
     * CONTACT FORM VALIDATION WITH AJAX
     * ----------------------------------------------
     */ 
    $('#form-submit').on("click",function (e) {
         // prevent default action and bubbling
         e.preventDefault();
         e.stopPropagation();

         var contactform=$(this).closest('form');

         // variables for input field values
         var name = $('.name');
         var email = $('.email');
         var mobile = $('.mobile');
         var message = $('.message'); 
         var result = contactform.find('.result'); 
         var error = 0;
         var invalid_email = false;
        
         
         //name validation
         if(name.val()===""){
            name.closest(".form-group").addClass('has-error');
            error=1;
         }else{
            name.closest(".form-group").removeClass('has-error');
         }

         //email validation
         if(email.val()===""){
            email.closest(".form-group").addClass('has-error');
            error=1;
         } else if(!isValidEmail(email.val())){
            // if email is invalid... *
            email.closest(".form-group").addClass('has-error');
            error=1;
            invalid_email=true;
            
         }else{
            email.closest(".form-group").removeClass('has-error');
         } 
         //mobile validation
         if(mobile.val()===""){
            mobile.closest(".form-group").addClass('has-error');
            error=1;
         }else{
            mobile.closest(".form-group").removeClass('has-error');
         } 
         //message validation
         if(message.val()===""){
            message.closest(".form-group").addClass('has-error');
            error=1;
         }else{
            message.closest(".form-group").removeClass('has-error');
         }

         if(error===1){
            var error_message="Something is missing !";
            error_message+="<br>*Please Check and fill all feilds.";
            if(invalid_email){
                error_message+="<br>*Your Email address is not Valid !";
            }
            var error_alert = make_alert('danger',error_message);
            result.html(error_alert);

         }else{
            var formURL = contactform.attr('action');
            // * post data to "mail.mf" file
            var postData = {
                name:name.val(),
                email:email.val(),
                mobile:mobile.val(),
                message:message.val()

            };
            // * ajax form submission handler
            $.ajax({
                type: 'POST',
                url: formURL,
                data: postData,
                success: function (data, responseText) {

                    // reset original field values
                    contactform[0].reset();
                    // show success message and hide others
                    var success_message="Your Massage has been sent !";
                    success_message+="<br>Thank You.";
                    
                    var success_alert = make_alert('success',success_message);
                    result.html(success_alert);
            
                },
                error: function (errorThrown) {
                    // show error message and hide others
                    var error_message="Something went wrong!<br>Try again later!";
                    var error_alert = make_alert('danger',error_message);
                    result.html(error_alert);
                     
                     
                }
             });
         }
         return false;

    });

    $('body').on("click","#quote-submit",function (e) {
         // prevent default action and bubbling
         e.preventDefault();
         e.stopPropagation();

         var quoteform=$(this).closest('form');

         // variables for input field values
         var name = $('.qname');
         var email = $('.qemail');
         var message = $('.qmessage'); 
         var result = quoteform.find('.result'); 
         var error = 0;
         var invalid_email = false;
         
         //name validation
         if(name.val()===""){
            name.closest(".form-group").addClass('has-error');
            error=1;
         }else{
            name.closest(".form-group").removeClass('has-error');
         }

         //email validation
         if(email.val()===""){
            email.closest(".form-group").addClass('has-error');
            error=1;
         } else if(!isValidEmail(email.val())){
            // if email is invalid... *
            email.closest(".form-group").addClass('has-error');
            error=1;
            invalid_email=true;
            
         }else{
            email.closest(".form-group").removeClass('has-error');
         }
         //message validation
         if(message.val()===""){
            message.closest(".form-group").addClass('has-error');
            error=1;
         }else{
            message.closest(".form-group").removeClass('has-error');
         }

         if(error===1){
            var error_message="Something is missing !";
            error_message+="<br>*Please Check and fill all feilds.";
            if(invalid_email){
                error_message+="<br>*Your Email address is not Valid !";
            }
            var error_alert = make_alert('danger',error_message);
            result.html(error_alert);

         }else{
            var formURL = quoteform.attr('action');
            // * post data to "mail.mf" file
            var postData = {
                name:name.val(),
                email:email.val(),
                message:message.val()

            };
            // * ajax form submission handler
            $.ajax({
                type: 'POST',
                url: formURL,
                data: postData,
                success: function (data, responseText) {

                    // reset original field values
                    quoteform[0].reset();
                    // show success message and hide others
                    var success_message="Your Massage has been sent !";
                    success_message+="<br>Thank You.";
                    
                    var success_alert = make_alert('success',success_message);
                    result.html(success_alert);
            
                },
                error: function (errorThrown) {
                    // show error message and hide others
                    var error_message="Something went wrong!<br>Try again later!";
                    var error_alert = make_alert('danger',error_message);
                    result.html(error_alert);
                     
                     
                }
             });
         } 
        

    });
    // clear default input field values and return on blur event
    $('input, textarea')
    $(this).val('');

    /******************** AJAX SUBSCRIBE ********************/
    var $subscribe=$("#subscribe");
    $subscribe.ajaxChimp({
        callback: mailchimpCallback,
        url: "https://frndzit.us17.list-manage.com/subscribe/post?u=20f1e1fef716bd68305c719d5&id=4eb56d996b" // Replace your mailchimp post url inside double quote "".  
    });

    function mailchimpCallback(resp) {
        var result=$('.subscribe-result');
        if(resp.result === 'success') {
            $subscribe[0].reset();
            result.addClass('text-success');
            result.removeClass('text-danger');
        } else if(resp.result === 'error') {
            result.addClass('text-danger');
            result.removeClass('text-success');
        }
        result
            .html(resp.msg)
            .fadeIn(1000)
            .delay(1000)
            .fadeOut(500); 
    }; 

    /**
     * ----------------------------------------------
     * background video
     * ----------------------------------------------
     */
    var video = $('.my-video');
    if (video){
        video.bgVideo({
            fullScreen: true, // Sets the video to be fixed to the full window - your <video> and it's container should be direct descendents of the <body> tag
            fadeIn: 500, // Milliseconds to fade video in/out (0 for no fade)
            pauseAfter: 0, // Seconds to play before pausing (0 for forever)
            fadeOnPause: false, // For all (including manual) pauses
            fadeOnEnd: true, // When we've reached the pauseAfter time
            showPausePlay: false, // Show pause/play button
            pausePlayXPos: 'right', // left|right|center
            pausePlayYPos: 'top', // top|bottom|center
            pausePlayXOffset: '15px', // pixels or percent from side - ignored if positioned center
            pausePlayYOffset: '15px' // pixels or percent from top/bottom - ignored if positioned center
        });
    }

})(jQuery);


// Function for email address validation
function isValidEmail(emailAddress) {

var filter =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return filter.test(emailAddress);

};
// Alert generate Function
function make_alert(type,message){
    var alert='<div class="alert alert-'+type+' alert-dismissible fade in">';
        alert+='<a href="#" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></a>';
        alert+=message;
        alert+="</div>";
        return alert;
} 