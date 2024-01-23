const videos = [
    './assets/video/1.mov', 
    './assets/video/2.mov', 
    './assets/video/3.mp4', 
    './assets/video/4.mov', 
    './assets/video/5.mp4', 
    './assets/video/6.mov', 
    './assets/video/7.mov', 
    './assets/video/8.mp4', 
    './assets/video/9.mp4'
];

window.onload = () => {
    video_player.volume = 0;
    change_video();
    // let video_player_timer = setInterval(change_video, 1200000);
    video_player.onended = (event) => {
        change_video();
    };
    // video_player_src.src = videos[0];
    // video_player_timer.load();
    // video_player_timer.play();
};

function change_video(){
    video_player_src.src = videos[Math.floor(videos.length-1 * Math.random() * 10)];
    video_player.load();
    video_player.play();
};