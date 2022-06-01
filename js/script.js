document.onclick = function () {
    var video = document.getElementById('videotest');
    video.muted = false;
    setTimeout(()=>{
      video.controls=true;
    },5000)
  };