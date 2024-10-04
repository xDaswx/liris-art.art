let gatinhos = [];
let gatinhoToDelete = '';

async function loadGatinhos() {
    const response = await fetch('/canvas_pixels');
    gatinhos = await response.json();
    renderGatinhos();
}

function renderGatinhos() {
    const container = document.getElementById('gatinhosContainer');
    container.innerHTML = '';
    gatinhos.forEach(gatinho => {
        container.innerHTML += `
            <div class="card mb-3">
                <div class="card-body">
                    <h5 class="card-title">${gatinho.username}</h5>
                    <img src="${gatinho.image}" class="img-fluid" alt="${gatinho.username}" style="max-height: 150px;">
                    <p><strong>ID:</strong> ${gatinho._id}</p>
                    <button class="btn btn-warning" onclick="openEditModalGatin('${gatinho._id}')">Editar</button>
                    <button class="btn btn-danger" onclick="confirmDeleteGatin('${gatinho._id}', '${gatinho.username}')">Remover</button>
                </div>
            </div>
        `;
    });
}

function openAddModalGatin() {
    document.getElementById('gatinhoForm').reset();
    document.getElementById('gatinhoId').value = '';
    document.getElementById('gatinhoModalLabel').textContent = 'Adicionar Gatinho';
    new bootstrap.Modal(document.getElementById('gatinhoModal')).show();
}

function openEditModalGatin(id) {
    const gatinho = gatinhos.find(g => g._id === id);
    document.getElementById('gatinhoUsername').value = gatinho.username;
    document.getElementById('gatinhoImage').value = gatinho.image;
    document.getElementById('gatinhoX').value = gatinho.x;
    document.getElementById('gatinhoY').value = gatinho.y;
    document.getElementById('gatinhoSize').value = gatinho.size;
    document.getElementById('gatinhoSpeed').value = gatinho.speed;
    document.getElementById('gatinhoDirection').value = gatinho.direction;
    document.getElementById('gatinhoFrameIndex').value = gatinho.frameIndex;
    document.getElementById('gatinhoFramesPerRow').value = gatinho.framesPerRow;
    document.getElementById('gatinhoFrameRate').value = gatinho.frameRate;
    document.getElementById('gatinhoFrameCount').value = gatinho.frameCount;
    document.getElementById('gatinhoSpriteWidth').value = gatinho.spriteWidth;
    document.getElementById('gatinhoSpriteHeight').value = gatinho.spriteHeight;
    document.getElementById('gatinhoFacingRight').value = gatinho.facingRight.toString();
    document.getElementById('gatinhoId').value = gatinho._id;
    document.getElementById('gatinhoModalLabel').textContent = 'Editar Gatinho';
    new bootstrap.Modal(document.getElementById('gatinhoModal')).show();
}

document.getElementById('gatinhoForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const id = document.getElementById('gatinhoId').value;
    const username = document.getElementById('gatinhoUsername').value;
    const image = document.getElementById('gatinhoImage').value;

    if (id) {
        await fetch(`/canvas_pixels/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, image }),
        });
    } else {
        await fetch('/canvas_pixels', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, image }),
        });
    }

    new bootstrap.Modal(document.getElementById('gatinhoModal')).hide();
    loadGatinhos();
});

function confirmDeleteGatin(id, username) {
    gatinhoToDelete = id;
    document.getElementById('deleteGatinhoName').textContent = username;
    new bootstrap.Modal(document.getElementById('confirmDeleteModal')).show();
}

async function deleteGatinho() {
    await fetch(`/canvas_pixels/${gatinhoToDelete}`, { method: 'DELETE' });
    new bootstrap.Modal(document.getElementById('confirmDeleteModal')).hide();
    loadGatinhos();
}

window.onload = loadGatinhos;