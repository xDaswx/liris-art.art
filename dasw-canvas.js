const canvas = document.getElementById('gameCanvas');

const ctx = canvas.getContext('2d');


let npcs = [];

let debug = false;
if (debug) {
    canvas.addEventListener('click', (event) => {
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
      
        const mouseX = (event.clientX - rect.left) * scaleX;
        const mouseY = (event.clientY - rect.top) * scaleY;
      
        selectedNPC = npcs.find((npc) => {
          const npcLeft = npc.facingRight ? npc.x : npc.x - npc.size;
          const npcRight = npcLeft + npc.size;
          const npcTop = npc.y;
          const npcBottom = npcTop + npc.size;
      
          return mouseX >= npcLeft && mouseX <= npcRight && mouseY >= npcTop && mouseY <= npcBottom;
        });
      
        updatePropertiesMenu();
      });
      
      function createPropertiesTable() {
          propertiesTable = document.createElement('table');
          propertiesTable.id = 'propertiesTable';
        
          const propertiesDiv = document.getElementById('npcProperties');
          propertiesDiv.appendChild(propertiesTable);
      }
        
      function updatePropertiesMenu() {
          const propertiesDiv = document.getElementById('npcProperties');
        
          if (!propertiesTable) {
            createPropertiesTable();
          }
        
          if (selectedNPC) {
            if (!initialNPCValues) {
              initialNPCValues = { ...selectedNPC };
              createTableRows();
            }
              updateInputValues();
        
            // Exibe o menu
            propertiesDiv.style.display = 'flex';
          } else {
            propertiesDiv.style.display = 'none';
            initialNPCValues = null;
          }
        }
        
      function createTableRows() {
          while (propertiesTable.rows.length > 0) {
            propertiesTable.deleteRow(0);
          }
        
          for (const key in initialNPCValues) {
            if (initialNPCValues.hasOwnProperty(key)) {
              const row = propertiesTable.insertRow();
              const cell1 = row.insertCell(0);
              const cell2 = row.insertCell(1);
              cell1.innerHTML = key + ":";
              cell2.innerHTML = `<input type="text" id="edit${key}" value="${initialNPCValues[key]}">`;
            }
          }
        }
        
      function updateInputValues() {
          for (const key in initialNPCValues) {
            if (initialNPCValues.hasOwnProperty(key)) {
              const inputElement = document.getElementById(`edit${key}`);
              if (inputElement) {
                inputElement.value = selectedNPC[key];
              }
            }
          }
      }
}
let selectedNPC = null;
let initialNPCValues = null;
let propertiesTable;
const chatImg = new Image();
chatImg.src = 'resources/imgs/chat.png';


function drawNpcs() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  npcs.forEach((npc) => {
    ctx.save();

    const frameX = npc.frameIndex % npc.framesPerRow;

    const scaleX = npc.facingRight ? 1 : -1;
    const textX = npc.x + npc.size / 2;
    ctx.scale(scaleX, 1);

    
    // Imagem do personagem
    ctx.drawImage(
        npc.image,
        frameX * npc.spriteWidth,
        0,
        npc.spriteWidth,
        npc.spriteHeight,
        npc.facingRight ? npc.x : -npc.x - npc.size,
        npc.y,
        npc.size,
        npc.size
      );
    
    if (npc.boost) {
        
        // const chatBalloonAlpha = Math.sin(Math.PI * npc.frameCount / 300); // Ajuste o número para a velocidade do fade
        // ctx.globalAlpha = chatBalloonAlpha;
    
        // ctx.drawImage(
        //   chatImg,
        //   0,
        //   0,
        //   npc.spriteWidth,
        //   npc.spriteHeight,
        //   npc.facingRight ? npc.x : -npc.x - npc.size,
        //   npc.y + -200,
        //   npc.size,
        //   npc.size
        // );
        // ctx.restore();
    
        //ctx.globalAlpha = 1;
        
        // fade in fade out
        const boostTextAlpha = Math.sin(Math.PI * npc.frameCount / 1); // velocidade fade
        ctx.globalAlpha = boostTextAlpha;
            
        ctx.font = '40px "Dinomouse"';
            
        ctx.shadowColor = "black";
        ctx.shadowBlur = 10;
        ctx.lineWidth = 5;
        ctx.strokeStyle = "black";
        ctx.strokeText('Boost!', textX, npc.y - 130);
            
        //ctx.shadowBlur = 0;
            
        ctx.fillText('Boost!', textX, npc.y - 130);
            
        // Resetando o valor globalAlpha para outros elementos
        ctx.globalAlpha = 0;
        setTimeout(()=> {
            npc.boost = false
        }, 1000)
        
    }


  


    npc.frameCount++;

    if (npc.frameCount % npc.frameRate === 0) {
      npc.frameIndex = (npc.frameIndex + 1) % npc.framesPerRow;
    }

    npc.x += npc.speed * npc.direction;

    if (npc.x + npc.size > canvas.width || npc.x < 0) {
      npc.direction *= -1;
      npc.facingRight = !npc.facingRight;
    }
    
    ctx.restore();

    // Resetando o valor globalAlpha para outros elementos
    ctx.globalAlpha = 1;



    ctx.fillStyle = 'white';
    ctx.font = '70px "Dinomouse"';
    ctx.textAlign = 'center';
    //- - - - - - - - sombra
    ctx.shadowColor="black";
    ctx.shadowBlur=10;
    ctx.lineWidth=5;
    ctx.strokeStyle = "black";
    ctx.strokeText(npc.username,textX, npc.y - 20); // posição vertical da shadow atualmente é 20
    //ctx.shadowBlur=0;
    //- - - - - - - - sombra
    

    ctx.fillText(npc.username, textX, npc.y - 20); // posição vertical do texto atualmente é 20

  });
  if (debug) {
    updatePropertiesMenu()
  }
  requestAnimationFrame(drawNpcs);
  
}


//Dummie p testes
// const img = new Image();
// img.src = 'resources/imgs/gato.png';
// for (let i = 0; i < 2; i++) {
//   npcs.push(
//     {
//       x: Math.random() * 1500, 
//       y: 650,
//       size: 200,
//       speed: 1.4,
//       direction: Math.random() < 0.5 ? 1 : -1,
//       frameIndex: 0,
//       framesPerRow: 4,
//       frameRate: 11,
//       frameCount: 4,
//       spriteWidth: 500,
//       spriteHeight: 500,
//       facingRight: false,
//       image: img,
//       username: 'Dummie Default', 
//     }
//   );
// }

const dasw = new Image();
dasw.src = 'resources/imgs/gato-dasw-b.png';
npcs.push(
    {
      x: Math.random() * 1500, // espaço quando nasce
      y: 650,
      size: Math.floor(Math.random() * (400 - 175 + 1) + 175), // default é 200
      speed: 1.4,
      direction: Math.random() < 0.5 ? 1 : -1,
      frameIndex: 0,
      framesPerRow: 4,
      frameRate: 11,
      frameCount: 4,
      spriteWidth: 500,
      spriteHeight: 500,
      facingRight: false,
      image: dasw,
      username: 'Dasw',
      boost: true
    }
);


const iki = new Image();
iki.src = 'resources/imgs/gato-iki-2.png';
npcs.push(
    {
      x: Math.random() * 1500, // espaço quando nasce
      y: 650,
      size: Math.floor(Math.random() * (400 - 175 + 1) + 175),
      speed: 1.4,
      direction: Math.random() < 0.5 ? 1 : -1,
      frameIndex: 0,
      framesPerRow: 4,
      frameRate: 11,
      frameCount: 4,
      spriteWidth: 500,
      spriteHeight: 500,
      facingRight: false,
      image: iki,
      username: 'ikinuki', 
    }
);

const pon = new Image();
pon.src = 'resources/imgs/gato-pon.png';
npcs.push(
    {
      x: Math.random() * 1500, // espaço quando nasce
      y: 650,
      size: Math.floor(Math.random() * (400 - 175 + 1) + 175),
      speed: 1.4,
      direction: Math.random() < 0.5 ? 1 : -1,
      frameIndex: 0,
      framesPerRow: 4,
      frameRate: 11,
      frameCount: 4,
      spriteWidth: 500,
      spriteHeight: 500,
      facingRight: false,
      image: pon,
      username: 'PonPon', 
    }
);

const azu = new Image();
azu.src = 'resources/imgs/gato-azu.png';
npcs.push(
    {
      x: Math.random() * 1500, // espaço quando nasce
      y: 650,
      size: Math.floor(Math.random() * (400 - 175 + 1) + 175),
      speed: 1.4,
      direction: Math.random() < 0.5 ? 1 : -1,
      frameIndex: 0,
      framesPerRow: 4,
      frameRate: 11,
      frameCount: 4,
      spriteWidth: 500,
      spriteHeight: 500,
      facingRight: false,
      image: azu,
      username: 'Azury', 
    }
);


const dasj = new Image();
dasj.src = 'resources/imgs/gato-dasj.png';
npcs.push(
    {
      x: Math.random() * 1500, // espaço quando nasce
      y: 650,
      size: Math.floor(Math.random() * (400 - 175 + 1) + 175),
      speed: 1.4,
      direction: Math.random() < 0.5 ? 1 : -1,
      frameIndex: 0,
      framesPerRow: 4,
      frameRate: 11,
      frameCount: 4,
      spriteWidth: 500,
      spriteHeight: 500,
      facingRight: false,
      image: dasj,
      username: 'Dasjw', 
    }
);

const ayak = new Image();
ayak.src = 'resources/imgs/gato-ay.png';
npcs.push(
    {
      x: Math.random() * 1500, // espaço quando nasce
      y: 650,
      size: Math.floor(Math.random() * (400 - 175 + 1) + 175),
      speed: 1.4,
      direction: Math.random() < 0.5 ? 1 : -1,
      frameIndex: 0,
      framesPerRow: 4,
      frameRate: 11,
      frameCount: 4,
      spriteWidth: 500,
      spriteHeight: 500,
      facingRight: false,
      image: ayak,
      username: 'Ayaka', 
    }
);

function luckytSpeed (user) {
    let x = Math.floor((Math.random() * 6) + 1);
    if (x == 2) {
        user.speed = 1.5
        user.frameRate = 20
    }

    if (x == 3) {
        user.speed = 2
        user.frameRate = 7
    }
    if (x == 4) {
        user.speed = 2.3
        user.frameRate = 7
    }
    if (x == 5) {
        user.speed = 4
        user.frameRate = 5
        user.boost = true
    }
}


setInterval(() => {
    let luckyt_guy = npcs[Math.floor((Math.random() * (npcs.length - 1)) + 1)]
    luckytSpeed(luckyt_guy)
}, 1500);

// bug fix para facing right
for (let i = 0; i < npcs.length; i++) {
    luckytSpeed(npcs[i])

    if (npcs[i].direction === -1) {
          npcs[i].facingRight = true 
    }
    console.log(npcs[0])
  }


const listaOrdenada = npcs.sort((a, b) => a.size - b.size);

npcs = listaOrdenada

drawNpcs();




function saveChanges() {
    const editNameInput = document.getElementById('editName');
    const editSpeedInput = document.getElementById('editSpeed');
  
    if (selectedNPC) {
      selectedNPC.username = editNameInput.value;
      selectedNPC.speed = parseFloat(editSpeedInput.value) || 0; 
    }
      updatePropertiesMenu();
}



function createCat() {

    const img = new Image();
    img.src = 'resources/imgs/gato.png';

    npcs.push(
        {
            x: Math.random() * 1500, 
            y: document.querySelectorAll('#edity')[1].value,
            size: document.querySelectorAll('#editsize')[1].value,
            speed: document.querySelectorAll('#editspeed')[1].value,
            direction: document.querySelectorAll('#editdirection')[1].value,
            frameIndex: 0,
            framesPerRow: 4,
            frameRate: 11,
            frameCount: 4,
            spriteWidth: 500,
            spriteHeight: 500,
            facingRight: false,
            image: img,
            username:  document.querySelectorAll('#editusername')[1].value
        });
    console.log('Criado:', npcs[npcs.length - 1])

}


