const arts = document.querySelector('.arts')
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



let lirisArts = [
    {
        title:'Sketched a #ニーゴ #MEIKO',
        url:'https://pbs.twimg.com/media/GEf4A-VW8AA7gjh?format=jpg&name=large',
        date:'Jan 23, 2024',
        reference:'https://pbs.twimg.com/media/GEf4A-VW8AA7gjh?format=jpg&name=large'
    },
    {
        title:'zero drakengard will show project sekai kohane how the world really is',
        url:'https://pbs.twimg.com/media/GBRkaVSWsAAEejn?format=jpg&name=large',
        date:'Dec 13, 2023',
        reference:'https://twitter.com/Liris_Sings/status/1735122545559351514/photo/1'
    },
    {
        title:'"Mine!" #ELPHELTNATION #BridgetBrigade #GuiltyGearStrive #GGST',
        url:'https://pbs.twimg.com/media/GBQsp1HXcAA9Pe_?format=jpg&name=large',
        date:'Dec 13, 2023',
        reference:'https://twitter.com/Liris_Sings/status/1735061399527665848/photo/1'
    },
    {
        title:'Drew I-No !! #GGST #guiltygearfanart #ギルティギア',
        url:'https://pbs.twimg.com/media/F9ZVHTwXAAAzyaB?format=png&name=900x900',
        date:'Oct 26, 2023',
        reference:'https://twitter.com/Liris_Sings/status/1717655097792958506/photo/1'
    },
    {
        title:'the sweetest #おとお絵',
        url:'https://pbs.twimg.com/media/FxeMVidWABQQ8xm?format=jpg&name=large',
        date:'May 31, 2023',
        reference:'https://twitter.com/Liris_Sings/status/1663955598587600896/photo/1'
    },
    {
        title:'Ravena Pixel ✨',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/pixel-purple.png?raw=true',
        date:'Unknown',
        reference:'discord'
    },
    {
        title:'Dasw OC!',
        url:'https://github.com/xDaswx/xDaswx/assets/69166890/7bb9a2c7-d299-43f8-a751-e0253f7edea0',
        date:'Nov 29, 2023',
        reference:'discord'
    },
    {
        title:'Beach episode',
        url:'https://raw.githubusercontent.com/xDaswx/liris-art.art/main/resources/arts/Beach%20ep.png',
        date:'Dec 07 2020',
        reference:'discord'
    },
    {
        title:'Liris OC!',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/Liris%20OC.png?raw=true',
        date:'Unknown',
        reference:'discord'
    },
    {
        title:'Mayuri Shiina',
        url:'https://raw.githubusercontent.com/xDaswx/liris-art.art/main/resources/arts/Mayuri%20Shiina.png',
        date:'07/01/2021',
        reference:'discord'
    },
    {
        title:'Pyon',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/Pyon%20Pyon.png?raw=true',
        date:'01/11/2021',
        reference:'discord'
    },
    {
        title:'Cool cat',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/cool-cat.png?raw=true',
        date:'Unknown',
        reference:'discord'
    },
    {
        title:'Kikin',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/kikin.png?raw=true',
        date:'Unknown',
        reference:'discord'
    },
    {
        title:'King!',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/king.png?raw=true',
        date:'06/01/2021',
        reference:'discord'
    },
    {
        title:'Montain',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/montain.png?raw=true',
        date:'07/01/2021',
        reference:'discord'
    },
    {
        title:'Nature 🌱',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/nature.png?raw=true',
        date:'01/26/2021',
        reference:'discord'
    },
    {
        title:'Oi!! Hi!!',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/oi.png?raw=true',
        date:'07/27/2021',
        reference:'discord'
    },
    {
        title:'Potan!',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/potan.png?raw=true',
        date:'Unknown',
        reference:'discord'
    },
    {
        title:'Raram!',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/ramram.png?raw=true',
        date:'Unknown',
        reference:'discord'
    }
]



lirisArts.forEach((art) =>{
    let div = document.createElement('div')
    div.classList.add('art-panel')
    let date = art.date
    if (art.date != 'Unknown') {
        const dataEntrada = new Date(art.date);
        const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        date = dataEntrada.toLocaleDateString('en-US', dateFormat);
    }
    div.innerHTML = `
    <div class="art-image">
    <img src="${art.url}" alt="" class="img-source">
    </div>
    <div class="art-title">${art.title}</div>
    <div class="art-desc">${date}</div>
    `

    arts.appendChild(div)
})





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
