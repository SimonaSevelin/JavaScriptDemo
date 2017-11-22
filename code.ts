import {movieData} from "./data";
import * as $ from "jquery";


function renderMovie(movie){
    document.getElementById("poster").src = movie.img;
    document.getElementById("title").innerText = movie.title;
    document.getElementById("text").innerText = movie.text;
    

    var html="";

    for (let i = 0; i < movie.actors.length; i++) {
        
        html += "<li>" + movie.actors[i] + "</li>";
        
    }
document.getElementById("actors").innerHTML = html;

}

function changeStarRating(rating){
    
    $(".filled").removeClass("filled");
      
    for (let i = 1; i <= rating ; i++) {
    
    $("[data-rating-id=" + i + "]").addClass("filled");

    }     
  
}


$(".stars").on("click", "span", function(e){

let star = $(e.target);
let rating = parseInt(star.attr("data-rating-id"));

changeStarRating(rating);

});


renderMovie(movieData);

