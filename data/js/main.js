/*
var vid_n = Math.floor((Math.random() * 10) +1);
var vid_el = document.createElement("video");
var preload = document.getElementById("preload");
var element = document.getElementById("video_d");
element.appendChild(vid_el);
var video = document.getElementsByTagName("video")[0];

video.onended = function(e){
    element.removeChild(video);
}

vid_el.setAttribute("src", "data/vd/bg" + vid_n + ".mp4");
vid_el.setAttribute("id", "video");
vid_el.setAttribute("autoplay", null);

setTimeout(function(){
    preload.setAttribute("class", "preload-end");
}, 2000);

document.querySelector(".rel").onclick = function(){
    preload.setAttribute("class", ".preload");
}

document.querySelector(".button").onclick = function() {
  var mute = document.getElementById("video").muted;
  document.querySelector(".button").classList.toggle(".button-active");

  if(mute) {
    document.getElementById("video").muted = false;
  }else{
    document.getElementById("video").muted = true;
  }
}
*/

var preload = document.getElementById("preload");
var bg = document.getElementById("bg_im");
var bg_n = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

bg.style.backgroundImage = "url(data/img/bg/bg" + bg_n + ".jpg"
document.addEventListener("DOMContentLoaded", ready);

function ready() {
    preload.style.display = "none";
}
