document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('background-video');
    const playButton = document.getElementById('play-button');
    const muteButton = document.getElementById('mute-button');
    const volumeSlider = document.getElementById('volume-slider');
    const container = document.getElementById('container');

    playButton.addEventListener('click', () => {
        video.play().then(() => {
            playButton.style.display = 'none';
            muteButton.style.display = 'block';
            volumeSlider.style.display = 'block';
        }).catch(error => {
            console.error('Error attempting to play video:', error);
        });
    });

    muteButton.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            muteButton.innerHTML = '<?xml version="1.0" ?><svg height="32" width="32" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M126,192H56a8,8,0,0,0-8,8V312a8,8,0,0,0,8,8h69.65a15.93,15.93,0,0,1,10.14,3.54l91.47,74.89A8,8,0,0,0,240,392V120a8,8,0,0,0-12.74-6.43l-91.47,74.89A15,15,0,0,1,126,192Z" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M320,320c9.74-19.38,16-40.84,16-64,0-23.48-6-44.42-16-64" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M368,368c19.48-33.92,32-64.06,32-112s-12-77.74-32-112" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/><path d="M416,416c30-46,48-91.43,48-160S446,143,416,96" style="fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"/></svg>';
            volumeSlider.style.opacity = "1";
            volumeSlider.style.pointerEvents = "all";
        } else {
            video.muted = true;
            muteButton.innerHTML = '<svg height="32" width="32" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M416 432 64 80" fill="none" stroke="#ff0000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32px" class="stroke-000000"></path><path d="M224 136.92v33.8a4 4 0 0 0 1.17 2.82l24 24a4 4 0 0 0 6.83-2.82v-74.15a24.53 24.53 0 0 0-12.67-21.72 23.91 23.91 0 0 0-25.55 1.83 8.27 8.27 0 0 0-.66.51l-31.94 26.15a4 4 0 0 0-.29 5.92l17.05 17.06a4 4 0 0 0 5.37.26ZM224 375.08l-78.07-63.92a32 32 0 0 0-20.28-7.16H64v-96h50.72a4 4 0 0 0 2.82-6.83l-24-24a4 4 0 0 0-2.82-1.17H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l91.36 74.8a8.27 8.27 0 0 0 .66.51 23.93 23.93 0 0 0 25.85 1.69A24.49 24.49 0 0 0 256 391.45v-50.17a4 4 0 0 0-1.17-2.82l-24-24a4 4 0 0 0-6.83 2.82ZM125.82 336ZM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 0 0-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l19.66 19.67a4 4 0 0 0 6.75-2A146.89 146.89 0 0 0 352 256ZM416 256c0-51.19-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26l16.77 16.76a4 4 0 0 0 6.52-1.27C410.09 315.88 416 289.91 416 256Z" fill="#ffffff" class="fill-000000"></path><path d="M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 0 0 .77 4.55L443 391.39a4 4 0 0 0 6.4-1C470.88 348.22 480 307 480 256Z" fill="#ffffff" class="fill-000000"></path></svg>';
            volumeSlider.style.opacity = "0";
            volumeSlider.style.pointerEvents = "none";
        }
    });

    volumeSlider.addEventListener('input', (event) => {
        video.volume = event.target.value;
    });
});