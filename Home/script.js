$(document).ready(function(){
    $(".icon").click(function (){
        //$("li").slideToggle();
        $(".toggler").toggleClass('responsive');
    })
})

var x = 1
$(document).ready(function(){
    $("#next").click(function(){
        var currImg = $('.active')
        var nextImg = currImg.next();
        if(nextImg.length>1){
            $("#teks"+x).hide();
            x += 1
            $("#teks"+x).show();
            console.log("#test"+x)
            $(".image-slider img.active").hide();
            currImg.removeClass('active');
            nextImg.addClass('active');
            $(".image-slider img.active").show();
        }
    })
})

$(document).ready(function(){
    $("#prev").click(function(){
        var currImg = $('.active')
        var prevImg = currImg.prev();
        if(prevImg.length>1){
            $("#teks"+x).hide();
            console.log(prevImg.length)
            x -= 1
            $("#teks"+x).show();
            console.log("#test"+x)
            $(".image-slider img.active").hide();
            currImg.removeClass('active');
            prevImg.addClass('active');
            $(".image-slider img.active").show();
        }
    })
})

$(document).ready(function(){
    $("#satu").mouseover(function(){
        $("#squid").show();
    }).mouseout(function(){
        $("#squid").hide();
    });
});
$(document).ready(function(){
    $("#dua").mouseover(function(){
        $("#mountain").show();
    }).mouseout(function(){
        $("#mountain").hide();
    });
});
$(document).ready(function(){
    $("#tiga").mouseover(function(){
        $("#celestial").show();
    }).mouseout(function(){
        $("#celestial").hide();
    });
});
$(document).ready(function(){
    $("#empat").mouseover(function(){
        $("#breath").show();
    }).mouseout(function(){
        $("#breath").hide();
    });
});

// var flag = 1;
// $(document).ready(function () {
//     $('p').hide();
//     $("div[class^='content-item").mouseover(function(){
//         $(this).find("[id^='detail-']").stop().fadeIn();
//         $(this).css(
//             "box-shadow" , "5px 5px 5px #888"
//         );
//     }).mouseout(function(){
//         $(this).find("[id^='detail-']").stop().fadeOut()
//         $(this).stop().css(
//             "box-shadow" , "0px 0px 0px #888"
//         );
//     })
//     $("div[class^='content-item").mouseover(function(){
//         $(this).find("[id^='detail-']").stop().fadeIn()
//     }).mouseout(function(){
//         $(this).find("img[id^='img-]").stop().fadeIn()
//         $(this).find("[id^='detail-']").stop().fadeOut()
//     })
// });

