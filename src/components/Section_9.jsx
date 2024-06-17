import React from 'react'
import { v4 as uuidv4 } from "uuid";
function Section_9() {
  return (
        <>
            <div className="section-9">
                <h1 className="text-2xl">Our latest work</h1>
                <div className="div-block-3"><img
                    src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/640afa553c13564b7faf1d24_logo.png"
                    loading="lazy" width="130" alt="" className="image-3 img_hide" /></div>
                <div data-delay="3000" data-animation="outin" className="slider-2 w-slider" data-autoplay="true"
                    data-easing="ease-in" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="100"
                    data-nav-spacing="3" data-duration="500" data-infinite="true">
                    <div className="w-slider-mask">
                        <div className="slide s4 w-slide">
                            <div className="div-block-3 new"><img width="130" alt=""
                                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/640afa553c13564b7faf1d24_logo.png"
                                loading="lazy" className="image-3" />
                                <div className="project_name">
                                    <h2 className="heading-5">Project1</h2>
                                </div>
                            </div><a href="https://schbang1.webflow.io/casestudies/kotak811s-sleek-website-makeover"
                                className="link-block-17 w-inline-block">
                                <div className="play-button-wrapper is-mobile newchange">
                                    <div className="play-button-text">View</div>
                                </div><img sizes="100vw"
                                    srcSet="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207b06ce5fbc5688d0f_Kotak-CutforHP-min-p-500.jpg 500w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207b06ce5fbc5688d0f_Kotak-CutforHP-min-p-800.jpg 800w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207b06ce5fbc5688d0f_Kotak-CutforHP-min-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207b06ce5fbc5688d0f_Kotak-CutforHP-min-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207b06ce5fbc5688d0f_Kotak-CutforHP-min.jpg 1920w"
                                    src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207b06ce5fbc5688d0f_Kotak-CutforHP-min.jpg"
                                    loading="lazy" alt="" className="image-52" />
                            </a>
                        </div>
                        <div className="w-slide"><a
                            href="https://schbang1.webflow.io/casestudies/challenging-the-narrative-with-imagine-meats"
                            className="link-block-17 w-inline-block">
                            <div className="play-button-wrapper is-mobile newchange">
                                <div className="play-button-text">View</div>
                            </div><img sizes="100vw"
                                srcSet="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207f4032f4f3a81f8c1_ImagineMeats-CutforHP-min-p-500.jpg 500w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207f4032f4f3a81f8c1_ImagineMeats-CutforHP-min-p-800.jpg 800w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207f4032f4f3a81f8c1_ImagineMeats-CutforHP-min-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207f4032f4f3a81f8c1_ImagineMeats-CutforHP-min-p-1600.jpg 1600w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207f4032f4f3a81f8c1_ImagineMeats-CutforHP-min.jpg 1920w"
                                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646f7207f4032f4f3a81f8c1_ImagineMeats-CutforHP-min.jpg"
                                loading="lazy" alt="" className="image-52" />
                        </a></div>
                    </div>
                    <div data-w-id={uuidv4()} className="left-arrow-3 w-slider-arrow-left"><img
                        alt=""
                        src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/642ec7cccd275c29a863ed5e_Lside.svg"
                        loading="lazy" className="image-16" />
                        {/* <style>{`display:none;opacity:0`}</style> */}
                    </div>
                    <div data-w-id={uuidv4()} className="right-arrow-3 w-slider-arrow-right"><img
                        src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/642ec7cce672167e826194fa_Rside.svg"
                        loading="lazy" className="image-15" />

                        {/* <style>{`display:none;opacity:0`}</style> */}
                    </div>
                    <div className="slide-nav-3 w-slider-nav w-round"></div>
                </div>
            </div>
        </>
    )
}

export default Section_9