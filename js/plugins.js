/*global $, JQuery , alert*/
$(document).ready(function () {
    "use strict";
 
    $(window).scroll(function(){

        // window.console.log($('.navbar').height());
        // window.console.log($(window).scrollTop());

        if ($(window).scrollTop() >= $('.navbar').height() ){
            if (!$('.navbar').hasClass('scrolled')){ 
                $('.navbar').addClass('scrolled');
            }
        }else{
            $('.navbar').removeClass('scrolled');
        }
    });

    //tabs 
    $('.tabs .tabs-switch li').click(function () {
    var myID = $(this).attr('id');

     $(this).addClass('selected').siblings().removeClass('selected');
     $('.tabs .tabs-contents > div').hide();
     
     $('#' +myID +'-content').fadeIn(500);

     
    });

    // scroll down navbar

    $('.navbar-nav > li').on('click', function () {

       $(this).addClass('active1').siblings().removeClass('active1');
       
       $('html , body').animate({

        scrollTop: $('#'+ $(this).data('value')).offset().top 
        
        },1000);

    });

    // syn navbar 

    $(window).scroll(function () {

        $('section').each(function() {

            if ( $(window).scrollTop() > $(this).offset().top ) {


            var sectionID = $(this).attr('id');

            console.log($('.navbar-nav > li[data-value="'+ sectionID +'"]'));
             $('.navbar-nav > li').removeClass('active1');

            $('.navbar-nav > li[data-value="'+ sectionID +'"]').addClass('active1'); 
    
            }   
        });
        
    });

});


    
