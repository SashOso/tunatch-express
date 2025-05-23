import playlistService from "./api/playlist.service.js";

const video = document.getElementById("video");
const table_data = document.getElementById("table_data");


let song_index=-1;
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
    //----------estilo de los td-------------//
    table_data.querySelectorAll('tr').forEach(tr => {
        tr.classList.remove('active');
    });

    const selectedRow = table_data.querySelector(`tr[data-index="${index}"]`);
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
    //------------cambiar el index con los tr------------//
    table_data.querySelectorAll("tr").forEach((tr, index) => {
        tr.addEventListener("click", () => {
            setSongIndex(index);
        });
    });
    //-----------------------------------------------------//
});
video.addEventListener("ended", () => {
    let siguiente = song_index + 1;
    if (siguiente >= songs.length) {
        siguiente = 0;
    }
    setSongIndex(siguiente);
});
