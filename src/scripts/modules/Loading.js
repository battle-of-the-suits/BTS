import TweenLite from "gsap";

class Loading{
    constructor(){
        this.smokeVideo = document.querySelector("#js-loading-video");
        // this.smokeVideo.addEventListener("ended", () => this.removeLoadingSection());
        
        this.AnimationEffects();
            
    }

    textAnimation(){
        let textContent = document.querySelector("#js-loading-text-content");
        let that = this; 
        TweenLite.to(textContent, 0.7, {
            opacity: 0,
            delay: 2.5,
            onComplete: function(){
                console.log(that)
                that.playVideo()
            }
        });
    }

    AnimationEffects(){
        this.textAnimation();
    }

    playVideo(){
        
        this.smokeVideo.play();
        this.smokeVideo.playbackRate = 1.5;

    }

    removeLoadingSection(){
        TweenLite.set(document.querySelector("#js-loading"), {display: "none"});
    }

}

export default Loading;