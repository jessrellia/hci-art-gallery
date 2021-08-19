$(document).ready(function(){
    $('p').hide();
    var flag = 1;
    $("div[class^='content-item").mouseover(function(){
        $(this).find("[id^='detail-']").stop().fadeIn();
        $(this).css(
            "box-shadow" , "5px 5px 5px #888"
        );
    }).mouseout(function(){
        $(this).find("[id^='detail-']").stop().fadeOut()
        $(this).stop().css(
            "box-shadow" , "0px 0px 0px #888"
        );
    })
    $("div[class^='content-item").mouseover(function(){
        $(this).find("[id^='detail-']").stop().fadeIn()
    }).mouseout(function(){
        $(this).find("img[id^='img-]").stop().fadeIn()
        $(this).find("[id^='detail-']").stop().fadeOut()
    })

    $('.modal').hide()

    $("div[class^='content-item").click(function(){
        $(this).find('#modal-1').stop().fadeIn().css(
            "display", "block"
        )
        $(this).find('p').stop().fadeIn().css(
            "display", "block"
        )
    })

    $('.close').click(function(){
        $('.modal').stop().fadeOut()
        return false;
    })

    $(".icon").click(function (){
        console.log("clicked");
        $(".toggler").toggleClass('responsive');

    })

})