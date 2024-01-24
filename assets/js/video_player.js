const videos = [
    './assets/video/1.mov', 
    './assets/video/2.mov', 
    './assets/video/3.mp4', 
    './assets/video/4.mov', 
    './assets/video/5.mp4', 
    './assets/video/6.mov', 
    './assets/video/7.mov', 
    './assets/video/8.mp4', 
    './assets/video/9.mp4', 
    './assets/video/10.mp4'
];

window.onload = () => {
    console.log('executed onload');
    video_player.volume = 0;
    // change_video();

    // let video_player_timer = setInterval(change_video, 1200000);
    video_player.onended = (event) => {
        change_video();
    };
    // video_player_src.src = videos[0];
    // video_player_timer.load();
    // video_player_timer.play();
};

async function change_video(){
    video_player_src.src = videos[Math.floor(Math.random() * videos.length)];
    // video_closer.style.marginLeft = await video_player.offsetWidth + 50 + 'px';
    await video_player.load();
    video_player.play();    
};

function show_video(element) {
    // video_closer.style.marginLeft = video_player.offsetWidth + 50 + 'px';
    element.style.display='none';
    setTimeout(() => video_closer.style.display='block', 500);
    setTimeout(() => video_player.style.display='block', 500);
}

function hide_video(element) {
    video_player.style.display='none';
    element.style.display='none';
    video_closer.style.display='none';
    video_placeholder.style.display='block';
}