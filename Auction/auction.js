$(document).ready(function(){
    $(".bid-button").click(function (){
        var bid = parseInt(prompt("Please input your bid value:"));

        if(isNaN(bid)){
            alert("Input must be a number!");
        }else{
            var parentNode = $(this).parent();
            var price = parseInt(parentNode.children(".price").children("span").text())

            if(bid > price){
                var new_element = parentNode.children("#your-bid");
                new_element.children("span").text("$" + bid);
                new_element.css("color", "#32df52");

                parentNode.children(".price").children("span").text(bid);
            }else{
                alert("Your bid is too small compared to current bid.");
            }
        }
    });

    $(".icon").click(function (){
        
        //$("li").slideToggle();
        $(".toggler").toggleClass('responsive');

    })

    // $(window).on('resize', function(){
    //     //$(this).width()
    //     if($('li').css("display") == "none"){
    //         if($(this).width() > 600){
    //             $('li').css("display", "block");
    //         }
    //     }
    // })

})