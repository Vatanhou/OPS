$(document).ready(function(){
    //Slide
    $('.next').on('click',function(){
        var currentPg = $('.activePg');
        var nextPg = currentPg.next();

        if(nextPg.length){
            currentPg.removeClass('activePg').css('z-index',-10);
            nextPg.addClass('activePg').css('z-index', 10);
        }
    });

    $('.prev').on('click',function(){
        var currentPg = $('.activePg');
        var prevPg = currentPg.prev();

        if(prevPg.length){
            currentPg.removeClass('activePg').css('z-index',-10);
            prevPg.addClass('activePg').css('z-index', 10);
        }
    }); 

    // Fadein&out loop
    function animate() {
        function fadeTo(lis, duration, opacity, callback) {
            if (!lis.length) {
                callback();
            }
    
            var $lis = $(lis.shift());
            $lis.delay(1000).fadeTo(duration, opacity, function () {
                fadeTo(lis, duration, opacity, callback);
            })
        }
        fadeTo($('.image02').get(), 500, 1, function () {
            setTimeout(function () {
                fadeTo($('.image02').get(), 500, 0, function () {
                    setTimeout(animate, 5000);
                })
            }, 5000);
        })
    }
    
    animate();

    //Accordion
    $('.head').click(function(){
        $(this).toggleClass('active');
        $(this).parent().find('.open').toggleClass('close');
        $(this).parent().find('.content').slideToggle(280).css('z-index',100);
    });
})
