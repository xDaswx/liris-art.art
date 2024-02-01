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
        date:'01/22/2020',
        reference:'discord'
    },
    {
        title:'Dasw OC!',
        url:'https://github.com/xDaswx/xDaswx/assets/69166890/7bb9a2c7-d299-43f8-a751-e0253f7edea0',
        date:'Nov 29, 2023',
        reference:'discord'
    },
    {
        title:'Ovelha',
        url: location.origin+'/resources/arts/ovelha.png',
        date:'09/30/2021',
        reference:'discord'
    },
    {
        title:'Liris OC!',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/Liris%20OC.png?raw=true',
        date:'05/11/2023',
        reference:'discord'
    },
    {
        title:'Mayuri Shiina',
        url:'https://raw.githubusercontent.com/xDaswx/liris-art.art/main/resources/arts/Mayuri%20Shiina.png',
        date:'02/12/2020',
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
        date:'12/21/2022',
        reference:'discord'
    },
    {
        title:'Kikin',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/kikin.png?raw=true',
        date:'12/26/2022',
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
        date:'01/26/2023',
        reference:'discord'
    },
    {
        title:'Raram!',
        url:'https://github.com/xDaswx/liris-art.art/blob/main/resources/arts/ramram.png?raw=true',
        date:'01/31/2023',
        reference:'discord'
    },
    {
        title:'Hold it!',
        url:location.origin + '/resources/arts/hold_it.png',
        date:'01/31/2023',
        reference:'discord'
    },
    {
        title:'Liris and ikinuki',
        url:location.origin + '/resources/arts/asai.png',
        date:'01/19/2024',
        reference:'discord'
    },
    {
        title:'Feather',
        url:location.origin + '/resources/arts/feather.png',
        date:'12/08/2023',
        reference:'discord'
    },
    {
        title:'VRCHAT - Pink',
        url:location.origin + '/resources/arts/vrchat-pink.png',
        date:'01/24/2023',
        reference:'vrchat'
    }
    ,
    {
        title:'VRCHAT - White',
        url:location.origin + '/resources/arts/vrchat-white.png',
        date:'01/24/2023',
        reference:'vrchat'
    }
    ,
    {
        title:'VRCHAT - Blue',
        url:location.origin + '/resources/arts/vrchat-blue.png',
        date:'01/24/2023',
        reference:'vrchat'
    },
    {
        title:'VRCHAT - Blue Astro',
        url:location.origin + '/resources/arts/vrchat-blue-astro.png',
        date:'01/24/2023',
        reference:'vrchat'
    },
    {
        title:'Liris OC 2',
        url:location.origin + '/resources/arts/2-design-oc.png',
        date:'10/15/2022',
        reference:'oc'
    },
    {
        title:'Liris OC 1',
        url:location.origin + '/resources/arts/1-design-oc.png',
        date:'01/22/2020',
        reference:'oc'
    },
    {
        title:'Wink Psync',
        url:location.origin + '/resources/arts/tama2.png',
        date:'04/22/2023',
        reference:'discord'
    },
    {
        title:'Purple Flower Girl v1',
        url:location.origin + '/resources/arts/purple-girl.png',
        date:'01/05/2020',
        reference:'oc'
    },
    {
        title:'Purple Flower Girl v2',
        url:location.origin + '/resources/arts/purple-girl-v2.png',
        date:'05/16/2022',
        reference:'oc'
    },
    {
        title:'Kohane',
        url:location.origin + '/resources/arts/Kohane.png',
        date:'07/27/2022',
        reference:'discord'
    }
]


function convertToDate(dateString) {
    if (dateString === 'Unknown') {
        return new Date(0); // desconhecida
    }
    return new Date(dateString.replace(',', ''));
}

// ordenando a lista com base na data, ordem crescente
lirisArts.sort((a, b) => convertToDate(b.date) - convertToDate(a.date));

lirisArts.forEach((art) => {
    let div = document.createElement('div');
    div.classList.add('art-panel');
    let date = art.date;

    if (art.date !== 'Unknown') {
        const dataEntrada = new Date(art.date);
        const dateFormat = { year: 'numeric', month: 'short', day: 'numeric' };
        date = dataEntrada.toLocaleDateString('en-US', dateFormat);
    }

    div.innerHTML = `
        <div class="art-image">
            <img style=" 
                background-image: url('${art.url}');
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 5px;" alt="" class="img-source">
        </div>
        <div class="art-title">${art.title}</div>
        <div class="art-desc">${date}</div>
        <a style="margin-top: 10%; scale: 0.9; width: 115px;" class="button art-button" target="_blank" style="font-size:15px">Open</a>
    `;

    arts.appendChild(div);
});

let allArtButtons = document.querySelectorAll('.art-button')

function showImageViewer(element) {
    let drawInfo = document.querySelector('.draw-info')
    drawInfo.style.display = "flex"
    let img = element.querySelector('img').style.backgroundImage.replace('url("','').replace('")','')
    drawInfo.querySelector('img').src = img
    drawInfo.addEventListener('click', ()=> {
        drawInfo.style.display = "none"
    })
}

allArtButtons.forEach((el)=> {
    el.addEventListener('click', () =>{
        showImageViewer(el.parentElement)
    })
})



//
const imgsSourceArt = document.querySelectorAll(".art-panel .img-source");
imgsSourceArt.forEach((el)=>{
    el.addEventListener("mousemove", (e) => {
    el.style.backgroundPosition = `${-e.offsetX}px ${-e.offsetY}px`
    el.addEventListener("mouseleave", (e) => {
        el.style.backgroundPosition = 'center'
})});
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
