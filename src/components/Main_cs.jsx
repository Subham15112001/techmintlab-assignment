import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import "../global.css"

function Main_cs() {

    const data = [
        {
            left:`bg1 left`,
            right:`bg1 right`
        }, {
            left : `bg1 left is-2`,
            right : `bg1 right is-2`
        }, {
            left : `bg1 left is-3`,
            right : `bg1 right is-3`
        },
        {
            left:`bg1 left is-4`,
            right:`bg1 right is-4`
        },
        {
            left : `bg1 left is-5`,
            right : `bg1 right is-5`
        },
        {
            left : `bg1 left is-6`,
            right : `bg1 right is-6`
        },
        {
            left : `bg1 left is-7`,
            right : `bg1 right is-7`
        }
    ]
  return (
   <>
    <main className="main-cs">
            <div data-delay="4000" data-animation="over" className="slider-cs w-slider" data-autoplay="false"
                data-easing="ease" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0"
                data-nav-spacing="3" data-duration="0" data-infinite="true" id="slider">
                <div className="mask w-slider-mask">
                {data.map((value) => {
                    return (
                        <div data-w-id={uuidv4()} key={uuidv4()} className="slide-5 w-slide">
                            <div className="flex1">
                                <div
                                    className="flex-child1 col-1-1">
                                    <style>{`-webkit-transform:translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`}</style>
                                    <div className={`${value.left}`}></div>
                                </div>
                                <div
                                    className="flex-child1 col-2-1">
                                    <style>{`-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)`}</style>
                                    <div className={`${value.right}`}></div>
                                </div>
                            </div>
                        </div>    
                    )
                })}
                </div>
                <div id="arrow-right" className="arrow-6 right1 w-slider-arrow-left">
                    <div className="arrow_r is_cs">
                        <div className="div-block-81">
                            <div className="text-block-52 is-b">→</div>
                            <div className="text-block-57 is-b okayop">→</div>
                        </div>
                    </div>
                </div>
                <div id="arrow-left" className="arrow-6 left w-slider-arrow-right">
                    <div className="w-icon-slider-right"></div>
                </div>
                <div className="slide-nav w-slider-nav w-round"></div>
            </div>
    </main>            
   </>
  )
}

export default Main_cs