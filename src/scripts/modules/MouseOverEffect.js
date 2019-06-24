import * as PIXI from "pixi.js";
import imgb from "../../media/Images/boxer-landing.jpg";
import displacementMapImg from "../../media/Images/displacement-map-1.jpg";

class MouseMoveEffect{
    constructor(){

        let heroSection = document.querySelector(".hero__bg-img");

        let app = new PIXI.Application({
            width:  heroSection.clientWidth, 
            height: heroSection.clientHeight
        });

        heroSection.appendChild(app.view);

        let img = new PIXI.Sprite.from(imgb);
        img.width = heroSection.clientWidth;
        img.height = heroSection.clientHeight;
        app.stage.addChild(img);

        let depthMap = new PIXI.Sprite.from(displacementMapImg);
        app.stage.addChild(depthMap);

        let displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
        app.stage.filters = [displacementFilter];

        window.onmousemove = function(e){
            displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 20;
            displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 20;
        };
    }
}

export default MouseMoveEffect;