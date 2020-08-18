import React from 'react';
import venom_1 from "../img/venom-1.jpg";
import venom_2 from "../img/venom-2.jpg";
import hulk_1 from "../img/hulk-1.jpg"

const Wallpaper = () => {
    return (
        
            <div className="sample-wallpaper">
                <article className="wallpaper">
                    <img src={venom_1} alt="Wallpaper #1" className="wallpaper" />
                </article>
                <article className="wallpaper">
                    <img src={hulk_1} alt="Wallpaper #1" className="wallpaper" />
                </article>
                <article className="wallpaper">
                    <img src={venom_2} alt="Wallpaper #1" className="wallpaper" />
                </article>
            </div>
        
    );
}

export default Wallpaper;
