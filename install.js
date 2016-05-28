var sast = document.createElement("link");
sast.setAttribute("href", "https://rawgit.com/Iwotastic/Scratch-Boost/master/src/sweetalert.css");
sast.setAttribute("rel", "stylesheet");
sast.setAttribute("type", "text/css");
document.head.appendChild(sast);
var sasc = document.createElement("script");
sasc.setAttribute("src", "https://rawgit.com/Iwotastic/Scratch-Boost/master/src/sweetalert.min.js");
document.body.appendChild(sasc);
/* load TV */
ScratchExtensions.loadExternalJS("https://rawgit.com/Oskartblcrrzzka/TVAPI-for-scratch/livetv.js");
ScratchExtensions.loadExternalJS("https://rawgit.com/Oskartblcrrzzka/TVAPI-for-scratch/livesound");
ScratchExtensions.loadExternalJS("https://rawgit.com/Oskartblcrrzzka/TVAPI-for-scratch/livevideo.js");
ScratchExtensions.loadExternalJS("https://rawgit.com/Oskartblcrrzzka/TVAPI-for-scratch/filmplayer.js");
ScratchExtensions.loadExternalJS("https://rawgit.com/Oskartblcrrzzka/TVAPI-for-scratch/filmsound.js");
ScratchExtensions.loadExternalJS("https://rawgit.com/Oskartblcrrzzka/TVAPI-for-scratch/filmvideo.js");
ScratchExtensions.loadExternalJS("https://rawgit.com/Oskartblcrrzzka/TVAPI-for-scratch/channel.js");
document.querySelector(".box-head > .buttons").innerHTML = document.querySelector(".box-head > .buttons").innerHTML + "<div class=\"button\" onclick=\"info()\"><span class=\"white\">Scratch Boost</span></div>";
function info() {
}
