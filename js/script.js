
import {getMovies ,ShownMovies,displayMovies} from './Api.module.js'
import submitForm  from './Valdation.module.js'
import * as sidNavbar from './SideNavBar.module.js'
 
getMovies("https://api.themoviedb.org/3/movie/now_playing?api_key=88aa63dadeb31196c2c990505fbc33db&language=en-US&page=1");

$(document).ready(function () {
    $("#serachbyMovies").keyup(function (e) { 
    getMovies(`https://api.themoviedb.org/3/search/movie?api_key=88aa63dadeb31196c2c990505fbc33db&language=en-US&query=${this.value}&page=1&include_adult=false`);
});

$("#searchInShownMovies").keyup(function (e) { 
    let matchedMovies=[];
    for(let i=0;i<ShownMovies.length;i++){
        let {original_title}=ShownMovies[i];
        if(original_title.toLowerCase().includes(this.value.toLowerCase()))
            matchedMovies.push(ShownMovies[i]);

    }
    displayMovies(matchedMovies,"matchMoviesContainer");
 });



$("#reloadBtn").click(function (e) { 
    // to get the now playing movies again .
    getMovies("https://api.themoviedb.org/3/movie/now_playing?api_key=88aa63dadeb31196c2c990505fbc33db&language=en-US&page=1");
    
});

$("#loadingScreen").fadeOut(1000,()=>{
    $("body").css("overflow","auto");
});
});


// if(submitForm){
//     $("#SubmitContactForm").removeAttr("disabled");
// }





///// sida NavBar Part
// let sideNavBarWidth=$("#movingSlideNav").outerWidth();
// $(".mySideNav").css("left",`-${sideNavBarWidth}px`);


// $("#sideNavGate").click(()=>{
//     // let sideNavBarWidth=$("#movingSlideNav").outerWidth();

    
//     let leftValue=$(".mySideNav").css("left");console.log( leftValue);
//     if(leftValue!='0px'){ 
//     $(".mySideNav").css("left",`0px`);
//     $("#sideNavGate i").addClass("fa-times");
//     $("#sideNavGate i").removeClass("fa-align-justify");
//     }
//     else {
//         console.log("Hello");
//     $(".mySideNav").css("left",`-${sideNavBarWidth}px`);
//     $("#sideNavGate i").addClass("fa-align-justify");
//     $("#sideNavGate i").removeClass("fa-times");
// }
// })


///////////////// Api Part
// let moviesContainer=document.getElementById("moviesContainer");
// async function getMovies(apiUrl){
//     let apiResponse= await fetch(apiUrl);
//     let moviesJson=await apiResponse.json();
//     let movies= moviesJson.results;
//     console.log(typeof(movies));
//     displayMovies(movies);

// }

// function displayMovies(Movies){
//     // console.log(Movies)
// let container="";
//     for(let i=0;i<Movies.length ;i++){
//     const {original_title,poster_path ,overview ,vote_average,release_date}=Movies[i];
//     container+=`<div class="col-md-4 my-2 p-3">
//     <div class="movie overflow-hidden position-relative">
//         <img src="https://image.tmdb.org/t/p/w500/${poster_path}"
//             class="w-100 rounded-2" alt="">
//         <div class="imgDetails position-absolute  d-flex   align-items-center start-0 end-0 bottom-0">
//            <div class="text-center"> 
//             <h3>${original_title}</h3>
//             <p>${overview}</p>
//             <p>rate: ${vote_average}</p>
//             <p>${release_date}</p>
//         </div></div>
//     </div>
// </div>`;

    
// }
// moviesContainer.innerHTML=container;

// }