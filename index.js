const mainVideo=document.querySelector('.main-video video')
const VideoSection=document.querySelectorAll('.videoSection')
const title=document.querySelector('.title-video')
VideoSection.forEach(video=>{
    video.onclick=()=>{
        VideoSection.forEach(VideoSection=>VideoSection.classList.remove("open"))
        video.classList.add('open');
            if(video.classList.contains('open')){
                const source=video.children[0].getAttribute('src')
                mainVideo.src=source;
                const textor=video.children[1].innerHTML;
                title.innerHTML=textor;

            }
        }
    })