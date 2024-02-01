// referencia e creditos https://codepen.io/snowleo208/pen/zJMqog

const localhost = location.origin;


(function IIFE() {
    let list = [
    {
      id: 1,
      url: localhost+"/resources/sounds/cover-idsmile-aideisumairu-toa.mp3",
      author: "Liris",
      title: "Cover - Idsmile Aideisumairu Toa",
      cover:location.origin + "/resources/imgs/icon-mplayer.png"
    },
    {
      id: 2,
      url:localhost+"/resources/sounds/cover-melty-land.mp3",
      author: "Liris",
      title: "Cover - Melty Land",
      cover:location.origin + "/resources/imgs/icon-mplayer.png"
    },
    {
      id: 3,
      url:localhost+"/resources/sounds/cover-muddy-cloud-nio-p.mp3",
      author: "Liris",
      title: "Cover - Muddy Cloud",
      cover:location.origin + "/resources/imgs/icon-mplayer.png"
    },
    {
      id: 4,
      url:localhost+"/resources/sounds/cover-music-music-toa.mp3",
      author: "Liris",
      title: "Cover - Music Music Toa",
      cover:location.origin + "/resources/imgs/icon-mplayer.png"
    },
    {
      id: 5,
      url:localhost+"/resources/sounds/cover-patchwork-staccato-tsugihagisutatsukato-toa.mp3",
      author: "Liris",
      title: "Cover - Patchwork Staccato",
      cover:location.origin + "/resources/imgs/icon-mplayer.png"
    },
    {
      id: 6,
      url:localhost+"/resources/sounds/cover-pt-br-relations-the-idolmatster.mp3",
      author: "Liris",
      title: "Cover[PTBR] - Relations",
      cover:location.origin + "/resources/imgs/icon-mplayer.png"
    },
    {
      id: 7,
      url:localhost+"/resources/sounds/duet-zai-sheng-picon.mp3",
      author: "Liris ft. Ikinuki",
      title: "Duet - Zai Shend Picon",
      cover:location.origin + "/resources/imgs/icon-mplayer.png"
    }
    ];
  

    function embaralharLista(lista) {
      for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
      }
      return lista;
    }
    
    list = embaralharLista(list);
    
  
  
    let currentId = 0;
    let isPlaying = false;
    let isLoop = true;
    let isShuffle = false;
    let currentAudio = "music1";
    let timer = null;
    let loopOne = false;
  
    const currentTimeIndicator = document.querySelector(".music-time__current");
    const leftTimeIndicator = document.querySelector(".music-time__last");
    const progressBar = document.getElementById("length");

    var VolumeSlider = document.querySelector('.volume-input');


    const playBtn = document.querySelector(".play");
    const cover = document.querySelector(".cover");
    const title = document.querySelector(".music-player__title");
    const author = document.querySelector(".music-player__author");
  
    const loopBtn = document.getElementById("loop");
    // const shuffleBtn = document.getElementById("shuffle");


    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const progressDiv = document.getElementById("progress");
  
    function play(e) {
      if (!isPlaying) {
        console.log('play');
        e.target.src =location.origin + "/resources/svgs/pause.svg";;
        e.target.alt = "Pause";
        isPlaying = true;
        document.getElementById(currentAudio).play();
        showTime();
      } else {
        console.log('pause');
        e.target.src = location.origin + "/resources/svgs/pause.svg";;
        e.target.alt = "Play";
        document.getElementById(currentAudio).pause();
        isPlaying = false;
        clearInterval(timer);
      }
    }
  
    function changeBar() {
      const audio = document.getElementById(currentAudio);
      const percentage = (audio.currentTime / audio.duration).toFixed(3);
      progressBar.style.transition = "";
      // console.log(audio.currentTime);
  
      //set current time
      const minute = Math.floor(audio.currentTime / 60);
      const second = Math.floor(audio.currentTime % 60);
      const leftTime = audio.duration - audio.currentTime;
      currentTimeIndicator.innerHTML =
      ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);
  
      //set left time
      const leftMinute = Math.floor(leftTime / 60);
      const leftSecond = Math.floor(leftTime % 60);
  
      leftTimeIndicator.innerHTML =
      ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
  
      //set time bar
      progressBar.style.width = percentage * 100 + "%";
    }
  
    function showTime() {
      timer = setInterval(() => changeBar(), 500);
    }
  
    function nextMusic(mode) {

      playBtn.src =
      location.origin + "/resources/svgs/pause.svg";;
      playBtn.alt = "Play";
      document.getElementById(currentAudio).pause();
      isPlaying = false;
      clearInterval(timer);
  
      if (mode === "next") {
        currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
        init();
      } else {
        currentId = currentId - 1 < 0 ? list.length - 1 : currentId - 1;
        init();
      }
    }
  
    function shuffle(e) {
      isShuffle = !isShuffle;
      if (isShuffle) {
        e.target.parentNode.classList.add("is-loop");
      } else {
        e.target.parentNode.classList.remove("is-loop");
      }
    }
  
    function backward() {
      const audio = document.getElementById(currentAudio);
      audio.currentTime -= 5;
      if (!isPlaying) {
        changeBar();
      }
    }
  
    function forward() {
      const audio = document.getElementById(currentAudio);
      audio.currentTime += 5;
      if (!isPlaying) {
        changeBar();
      }
    }
  
    function stopMusic() {
      playBtn.src = location.origin + "/resources/svgs/pause.svg";;
      playBtn.alt = "Play";
      isPlaying = false;
    }
  
    function goToNextMusic() {
      let newId = currentId;
      while (isShuffle && !loopOne && newId === currentId) {
        newId = Math.floor(Math.random() * Math.floor(list.length - 1));
      }
  
      if (!isShuffle && !loopOne) {
        currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
      }
      if (!isShuffle && loopOne) {
        currentId = currentId;
      }
  
      if (isShuffle) {
        currentId = newId;
      }
      init();
    }
  
    function loop(e) {
      const audio = document.getElementById(currentAudio);
  
      if (!isLoop && !loopOne) {
        isLoop = true;
        loopOne = false;
        // console.log('is loop');
        e.target.parentNode.classList.add("is-loop");
        e.target.src = location.origin + "/resources/svgs/loop.svg";;
        audio.loop = false;
        audio.onended = e => goToNextMusic();
        console.log(isLoop, loopOne);
      } else if (isLoop && !loopOne) {
        // console.log('is loop one');
        isLoop = true;
        loopOne = true;
        e.target.parentNode.classList.add("is-loop");
        e.target.src = location.origin + "/resources/svgs/loopone.svg";;
        audio.loop = true;
        audio.onended = e => goToNextMusic();
        console.log(isLoop, loopOne);
      } else {
        // console.log('not loop');
        isLoop = false;
        loopOne = false;
        e.target.parentNode.classList.remove("is-loop");
        e.target.src = location.origin + "/resources/svgs/loop.svg";;
        audio.loop = false;
        audio.onended = e => stopMusic();
        console.log(isLoop, loopOne);
      }
    }
  
    function progress(e) {
      const audio = document.getElementById(currentAudio);
      //get current position and minus progress bar's x position to get current position in progress bar
      const pos =  (e.pageX - progressDiv.getClientRects()[0].x) / progressDiv.getClientRects()[0].width;
      console.log(pos)
      audio.currentTime = pos * audio.duration;
      changeBar();
    }


    VolumeSlider.addEventListener('input', function(){
      const audio = document.getElementById(currentAudio);
      audio.volume= parseInt(this.value)/10;
      step=.01;
      min=0;
      max=1;
      value=1;
    }, false);
  
    function init() {
      //reset music duration and setup audio
      const audio =document.getElementById(currentAudio) === null ? new Audio() : document.getElementById(currentAudio);
      audio.src = list[currentId].url;
      audio.id = currentAudio;
      document.getElementById(currentAudio) === null ?
      document.body.appendChild(audio) :
      "";
  
      progressBar.style.transition = "none";
      progressBar.style.width = "0%";
      document.getElementById(currentAudio).currentTime = 0;
  
      title.innerHTML = list[currentId].title;
      author.innerHTML = list[currentId].author;
      cover.src = list[currentId].cover;
  
      //set current time
      
      audio.addEventListener("loadedmetadata", function () {
        const leftMinute = Math.floor(audio.duration / 60);
        const leftSecond = Math.floor(audio.duration % 60);
        currentTimeIndicator.innerHTML = "00:00";
        leftTimeIndicator.innerHTML =
        ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
        progressBar.style.transition = "";
      });
      audio.volume = '0.1'
      
      //set loop
      document.getElementById(currentAudio).onended = e => goToNextMusic(e);

      document.getElementById(currentAudio).play();
      showTime();
      playBtn.src = location.origin + "/resources/svgs/pause.svg";
      playBtn.alt = "Pause";
      isPlaying = true;
    }
  
    playBtn.addEventListener("click", play);
    loopBtn.addEventListener("click", loop);
  
    // não em uso, está lagando
    // shuffleBtn.addEventListener("click", shuffle);
  
    prevBtn.addEventListener("click", e => nextMusic("prev"));
    nextBtn.addEventListener("click", e => nextMusic("next"));
    progressDiv.addEventListener("click", e => {
      progress(e);
    });

  
    window.addEventListener('load', function() {
      setTimeout(() => {
        init();
      }, 5000);
  });
  })();