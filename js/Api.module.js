
export let ShownMovies=[];
export  async function getMovies(apiUrl){
    let apiResponse= await fetch(apiUrl);
    let moviesJson=await apiResponse.json();
    let movies= moviesJson.results;
    console.log(typeof(movies));
    ShownMovies=movies;
    displayMovies(ShownMovies);

}

export function displayMovies(Movies ,containerId="moviesContainer"){
    let moviesContainer=document.getElementById(`${containerId}`);
    console.log(`Hello ${containerId}` );
let container="";
    for(let i=0;i<Movies.length ;i++){
    const {original_title,poster_path ,overview ,vote_average,release_date}=Movies[i];
    container+=`<div class="col-md-4 my-2 p-3">
    <div class="movie overflow-hidden position-relative">
        <img src="https://image.tmdb.org/t/p/w500/${poster_path}"
            class="w-100 rounded-2" alt="">
        <div class="imgDetails position-absolute  d-flex   align-items-center start-0 end-0 bottom-0">
           <div class="text-center"> 
            <h3>${original_title}</h3>
            <p>${overview}</p>
            <p>rate: ${vote_average}</p>
            <p>${release_date}</p>
        </div></div>
    </div>
</div>`;

}
moviesContainer.innerHTML=container;
}