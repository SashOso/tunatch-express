import playlistService from "./api/playlist.service.js";

const video = document.getElementById("video");
const list_body = document.getElementById("playlist-songs");


let song_index=-1;
let songs=[];
const formatTime=(seconds)=>{
    if (!seconds && seconds !== 0) return '--:--';

    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);

    const hh = h > 0 ? `${h.toString().padStart(2, '0')}:` : '';
    const mm = m.toString().padStart(2, '0');
    const ss = s.toString().padStart(2, '0');

    return `${hh}${mm}:${ss}`;
}


function setSongIndex(index) {
    song_index = index;
    //----------estilo-------------//
    list_body.querySelectorAll('tr').forEach(tr => {
        tr.classList.remove('active');
    });

    const selectedRow = list_body.querySelector(`tr[data-index="${index}"]`);
    if (selectedRow) {
        selectedRow.classList.add('active');
    }
    //----------cambiar el video-------------//
    video.src=songs[index].file_path;
    video.play().catch(err => {
        console.error("Error al reproducir el video:", err);
    });
}


document.addEventListener("DOMContentLoaded", async () => {
    const data = await playlistService.getById(1);
    if(data){
        songs=data.songs
        
        //------------songs------------//
        const songs_html = songs.map((song, index) => `
            <tr data-index="${index}">
                <td>${index + 1}</td>
                <td class="title-item">
                    <img src="${song?.image_path ?? '/img/song.png'}" alt="${song?.title ?? '-'}">
                    <span class="title">${song?.title ?? '-'}</span>
                    <span class="artist">${song?.artist?.name ?? '-'}</span>
                </td>
                <td>${song?.album?.title ?? '-'}</td>
                <td>${formatTime(song?.duration ?? 0)}</td>
            </tr>
        `).join('');
        list_body.innerHTML = songs_html;
        list_body.querySelectorAll("tr").forEach((tr, index) => {
            tr.addEventListener("click", () => {
                setSongIndex(index);
            });
        });
        //-------------------------------------------//
    }
});
video.addEventListener("ended", () => {
    let siguiente = song_index + 1;
    if (siguiente >= songs.length) {
        siguiente = 0; // volver al inicio
    }
    setSongIndex(siguiente);
});
