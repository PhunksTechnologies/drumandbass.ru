const tracks = [
   "http://dl.dropbox.com/scl/fi/mzvsec02b3nerpazam1rc/Hvat-2023.10.21-BASS-LOGIK.mp3?rlkey=zqwlhpxp3zrbxzr6civu74fp6&dl=0", 
   "http://dl.dropbox.com/scl/fi/shs7phkqhxyqr7kjgv0j2/Hvat-2023.08.05-BASS-LOGIK.mp3?rlkey=kw98lchmexgagh4uym5k19lh8&dl=0", 
   "http://dl.dropbox.com/scl/fi/hswjnjd32em0acvp11gtl/Hvat-2023.08.05-No-Lag.mp3?rlkey=gn89w0lg8j9mjqtfbhfsevkby&dl=0", 
   "http://dl.dropbox.com/scl/fi/s6usmueayhlx2hm49a89b/Phunky-Promo-2023-07-30.mp3?rlkey=cphgirgq0izsssex94fgl0emn&dl=0", 
   "radio"
]
function switch_track(track_el, number) {
    document.getElementById("audio_src").src = tracks[number];
    Array.from(document.getElementsByClassName('track')).forEach(el => el.classList.remove('nowplaying'));
    track_el.classList.add('nowplaying');
    document.getElementById("audio").load(); //call this to just preload the audio without playing
    document.getElementById("audio").play(); //call this to play the song right away
}


{/* <p class="track" onclick="switch_track(this, 1)">Basslogik live @Hvat-2023.08.05</p>
<p class="track" onclick="switch_track(this, 2)">No Lag live @Hvat-2023.08.05</p>
<p class="track" onclick="switch_track(this, 3)">Phunky Promo 202.07.30</p>
<p class="track" onclick="switch_track(this, 4)">DNB Radio</p> */}