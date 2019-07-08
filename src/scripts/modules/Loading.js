import TweenLite, { Power0, Power4, TimelineLite, TimelineMax } from "gsap";

class Loading{
    constructor(){
    }

    loadingSectionAnimations(){
         let elLoadingHeading = document.querySelector("#js-loading-heading"),
            elLoadingSection = document.querySelector("#js-loading-section"),
            elAnimateUp = document.querySelectorAll(".animate-up"),
            elAnimateDown = document.querySelectorAll(".animate-down"),
            loadingTl = new TimelineLite();

        loadingTl
            .to(elLoadingHeading, 1.2, { delay: 0.2, opacity: 1, ease: Power4.easeIn })
            .addLabel("text-gone", '+=1.3')
            .to(elAnimateUp, 0.55, {opacity: 0, y: -120, skewY: 60, ease: Power4.easeIn}, "text-gone")
            .to(elAnimateDown, 0.55, {opacity: 0, y: 120, skewY: 60, ease: Power4.easeIn}, "text-gone")
            .set(elLoadingSection, {autoAlpha: 0});

            return loadingTl;
    }

    landingSectionAnimations(){
        let elNavigation = document.querySelector("#js-navigation"),
            landingTl = new TimelineLite();

        landingTl
            .to(elNavigation, 0.7, {opacity: 1, autoAlpha: 1, ease: Power4.easeIn});
            
        return landingTl;    
    }

    animationEffects(){
       let masterTimeline = new TimelineMax();
       masterTimeline
            .add(this.loadingSectionAnimations)
            .add(this.landingSectionAnimations, '+=2.9')
    }
}

export default Loading;