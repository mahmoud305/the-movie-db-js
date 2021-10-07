import { getMovies } from './Api.module.js'

let sideNavBarWidth = $("#movingSlideNav").outerWidth();
$(".mySideNav").css("left", `-${sideNavBarWidth}px`);

$("#sideNavGate").click(() => {
    // let sideNavBarWidth=$("#movingSlideNav").outerWidth();


    let leftValue = $(".mySideNav").css("left"); console.log(leftValue);
    if (leftValue != '0px') {
        $(".mySideNav").css("left", `0px`);
        $("#sideNavGate i").addClass("fa-times");
        $("#sideNavGate i").removeClass("fa-align-justify");
       
        $(".sideNavLinks").animate({top: '5%'},1000);
    }
    else {
        console.log("Hello");
        $(".mySideNav").css("left", `-${sideNavBarWidth}px`);
        $("#sideNavGate i").addClass("fa-align-justify");
        $("#sideNavGate i").removeClass("fa-times");
        $(".sideNavLinks").animate({top: '50%'},1000);    }
});

$(".sideNavLinks p").on("click", function () {
    let catagory=$(this).attr('id')
    if ( catagory== "trending") {
        getMovies("https://api.themoviedb.org/3/trending/all/week?api_key=88aa63dadeb31196c2c990505fbc33db");
    }
    else {
getMovies(`https://api.themoviedb.org/3/movie/${catagory}?api_key=88aa63dadeb31196c2c990505fbc33db&language=en-US&page=1`);
    }

});
 
