$(function(){

    $(".lottery-one").on("mouseenter",function(){
        $(this).find(".lottery-text").fadeIn(200)
        $(this).find(".lottery-btn").animate({"bottom":44},200)
    }).on("mouseleave",function(){
        $(this).find(".lottery-text").fadeOut(200)
        $(this).find(".lottery-btn").animate({"bottom":-20},200)
    })
})