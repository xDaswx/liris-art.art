const art = document.querySelector('.arts')
const shorts = document.querySelector('.youtube-shorts')
const videos = document.querySelector('.youtube-videos')

// liris channel id UC1kDmTcLneGiNBfHbkiw9WQ
// liris ALL uploads id UU1kDmTcLneGiNBfHbkiw9WQ
// liris shorts uploads id UUSH1kDmTcLneGiNBfHbkiw9WQ
// liris videos uploads id UULF1kDmTcLneGiNBfHbkiw9WQ

// prefix	contents
// UULF	     Videos
// UULP	     Popular videos
// UULV	     Live streams
// UUMF	     Members-only videos
// UUMO	     Members-only contents (videos, short videos and live streams)
// UUMS	     Members-only short videos
// UUMV	     Members-only live streams
// UUPS	     Popular short videos
// UUPV	     Popular live streams
// UUSH	     Short videos



let html = `
<div class="art-image">
  <img src="https://pbs.twimg.com/media/GEf4A-VW8AA7gjh?format=jpg&name=large" alt="" class="img-source">
</div>
<div class="art-title">Sketched a #ニーゴ #MEIKO</div>
<div class="art-desc">Jan 23, 2024</div>
`

for (let i = 0; i < 10; i++){
    let div = document.createElement('div')
    div.classList.add('art-panel')
    div.innerHTML = html

    art.appendChild(div)
}



// videos
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UULF1kDmTcLneGiNBfHbkiw9WQ&key=AIzaSyCaa-oULZ3jZ0rXCPXb3kWYqiUHySoaRx0')
.then(res => res.json()).then(data => {
    data.items.forEach(el => {
        console.log(el)
        let div = document.createElement('div')
        div.classList.add('shorts-yt-panel')
        let desc = el.snippet.description.substring(0,80);
        const dataEntrada = new Date(el.snippet.publishedAt);
        const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = dataEntrada.toLocaleDateString('en-US', dateFormat);
        div.innerHTML = `
        <div class="yt-content-information">
        <img class="flower" src="https://cdn130.picsart.com/287898924016211.png?r1024x1024">
        <p>${desc}...<br><br><a class="button" target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" style="font-size:15px">Click to watch</a></p>        
        </div>
        <div class="youtube-yt-image">
        <img src="${el.snippet.thumbnails.high.url}" alt="" class="img-source">
      </div>
      
      <div class="shorts-texts">
      <div class="shorts-yt-title" style="
text-align: center;
font-size: 15px;
">${el.snippet.title}</div>
      <div class="shorts-yt-desc" style="
font-size: 14px;
">${date}</div>
<div>
`
    
        videos.appendChild(div)
    });
})


// shorts
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUSH1kDmTcLneGiNBfHbkiw9WQ&key=AIzaSyCaa-oULZ3jZ0rXCPXb3kWYqiUHySoaRx0')
.then(res => res.json()).then(data => {
    data.items.forEach(el => {
        let div = document.createElement('div')
        div.classList.add('shorts-yt-panel')
        var regexp = /#\S+/g;
        postText = el.snippet.title.replace(regexp, '');
        let desc = el.snippet.description.substring(0,80);

        const dataEntrada = new Date(el.snippet.publishedAt);
        const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        const date = dataEntrada.toLocaleDateString('en-US', dateFormat);
        


        div.innerHTML = `<div class="yt-content-information">
        <img class="flower" src="https://cdn130.picsart.com/287898924016211.png?r1024x1024">
        <p>${desc}...<br><br><a target="_blank" href="https://www.youtube.com/watch?v=${el.snippet.resourceId.videoId}" class="button" style="font-size:15px">Click to watch</a></p>
        </div>
        <div class="shorts-yt-image">
        <img src="${el.snippet.thumbnails.standard.url}" alt="" class="img-source">
      </div>
      
      <div class="shorts-texts">
      <div class="shorts-yt-title" style="
text-align: center;
font-size: 15px;
">${postText}</div>
<div>
<div class="shorts-yt-desc" style="
font-size: 14px;
">${date}</div>
`
    
        shorts.appendChild(div)
    });
})
