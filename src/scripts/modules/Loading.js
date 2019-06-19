import TweenLite from "gsap";

class Loading{
    constructor(){
        this.smokeVideo = document.querySelector("#js-loading-video");
        // this.smokeVideo.addEventListener("ended", function(){
        //     alert('hi');
        // });
        this.AnimationEffects(this.smokeVideo);
            
    }

    textAnimation(video){
        let textContent = document.querySelector("#js-loading-text-content");
        TweenLite.to(textContent, 0.7, {
            opacity: 0,
            delay: 2.5,
            onComplete: () => this.playVideo(video)
        });
    }

    AnimationEffects(video){
        this.textAnimation(video);
    }

    playVideo(video){
        
        video.play();
        video.playbackRate = 1.5;
    }

    removeLoadingSection(){
        TweenLite.set(document.querySelector("#js-loading-video"), {display: "none"});
    }


}

export default Loading;