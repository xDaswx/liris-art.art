const arts = document.querySelector('.arts');
const shorts = document.querySelector('.youtube-shorts');
const videos = document.querySelector('.youtube-videos');

let lirisArts = [];

function convertToDate(dateString) {
    if (dateString === 'Unknown') {
        return new Date(0); // desconhecida
    }
    return new Date(dateString.replace(',', ''));
}

function renderArts() {
    lirisArts.sort((a, b) => convertToDate(b.date) - convertToDate(a.date));

    arts.innerHTML = '';

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

    let allArtButtons = document.querySelectorAll('.art-button');
    allArtButtons.forEach((el) => {
        el.addEventListener('click', () => {
            showImageViewer(el.parentElement);
        });
    });

    const imgsSourceArt = document.querySelectorAll(".art-panel .img-source");
    imgsSourceArt.forEach((el) => {
        el.addEventListener("mousemove", (e) => {
            el.style.backgroundPosition = `${-e.offsetX}px ${-e.offsetY}px`;
            el.addEventListener("mouseleave", (e) => {
                el.style.backgroundPosition = 'center';
            });
        });
    });
}

function showImageViewer(element) {
    let drawInfo = document.querySelector('.draw-info');
    drawInfo.style.display = "flex";
    let img = element.querySelector('img').style.backgroundImage.replace('url("','').replace('")','');
    drawInfo.querySelector('img').src = img;
    drawInfo.addEventListener('click', () => {
        drawInfo.style.display = "none";
    });
}

let getDrawings = async () => {
    try {
        const response = await fetch('https://api.liris-art.art/drawings');
        const data = await response.json();
        console.log(data);
        lirisArts = data;
        renderArts();
    } catch (error) {
        console.error('Error fetching drawings:', error);
    }
};

getDrawings();

// Fetch de vídeos
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UULF1kDmTcLneGiNBfHbkiw9WQ&key=AIzaSyCaa-oULZ3jZ0rXCPXb3kWYqiUHySoaRx0')
.then(res => res.json())
.then(data => {
    data.items.forEach(el => {
        let div = document.createElement('div');
        div.classList.add('shorts-yt-panel');
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
                <div class="shorts-yt-title" style="text-align: center; font-size: 15px;">${el.snippet.title}</div>
                <div class="shorts-yt-desc" style="font-size: 14px;">${date}</div>
            </div>
        `;
        videos.appendChild(div);
    });
});

// Fetch de shorts
fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=UUSH1kDmTcLneGiNBfHbkiw9WQ&key=AIzaSyCaa-oULZ3jZ0rXCPXb3kWYqiUHySoaRx0')
.then(res => res.json())
.then(data => {
    data.items.forEach(el => {
        let div = document.createElement('div');
        div.classList.add('shorts-yt-panel');
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
            <div class="shorts-yt-title" style="text-align: center; font-size: 15px;">${postText}</div>
            <div class="shorts-yt-desc" style="font-size: 14px;">${date}</div>
            </div>
        `;
        shorts.appendChild(div);
    });
});