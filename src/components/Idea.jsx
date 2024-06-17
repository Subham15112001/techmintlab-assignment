import React, { useEffect,useRef,useState } from 'react'
import "../global.css"
function Idea() {

    const arrowRef = useRef(null);
    const [center, setCenter] = useState({ x: 0, y: 0 });
    const [angle, setAngle] = useState(0);
    const [rawAngle, setRawAngle] = useState(0);
  
    const updateCenter = () => {
      if (arrowRef.current) {
        const rect = arrowRef.current.getBoundingClientRect();
        setCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        });
      }
    };
  
    useEffect(() => {
      const handleResize = () => {
        updateCenter();
      };
  
      const handleMouseMove = (e) => {
        const dx = e.pageX - center.x;
        const dy = e.pageY - center.y;
        let currentRawAngle = Math.atan(dy / dx) * (180 / Math.PI);
        if ((dx > 0 && dy < 0) || (dx > 0 && dy > 0)) {
          currentRawAngle = 180 + currentRawAngle;
        } else if (dx < 0 && dy > 0) {
          currentRawAngle = 360 + currentRawAngle;
        }
  
        if (angle === 0) {
          setAngle(currentRawAngle);
        } else {
          let deltaAngle = currentRawAngle - rawAngle;
          let newAngle = angle + deltaAngle;
          if ((deltaAngle < 0 && Math.abs(deltaAngle) > 360 + deltaAngle) || deltaAngle > 180) {
            newAngle += deltaAngle > 180 ? -360 : 360;
          }
          setAngle(newAngle);
        }
  
        setRawAngle(currentRawAngle);
        arrowRef.current.style.transform = `rotate(${angle}deg)`;
      };
  
      updateCenter();
  
      window.addEventListener('resize', handleResize);
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, [center, angle, rawAngle]);
  return (
    <>
        <div data-w-id="1decefc2-814e-4c33-6bcb-61edb1670474" className="how-we-think">
            <div className="content1">
                <h4 className="heading-4">What defines us</h4>
                <div className="arrow-5">
                    <div 
                        className="arrow---inner">
                        <style>{`-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(45deg) skew(0, 0)`}</style>
                        <div className="arrow---line x-diagonal"></div>
                        <div className="arrow---line x-head xx-bottom"></div>
                        <div className="arrow---line x-head xx-top"></div>
                    </div>
                </div>
                <div className="html-embed-21 w-embed w-script">
                    <script>
                       
                    </script>
                </div>
            </div>
            <div className="content2 okmspomsp">
                <div className="main-hero_layout">
                    <h2 className="headingnew backtext hideit">We&#x27;re challengers at heart and<br />builders by nature.
                    </h2>
                    <h1 letters-fade-in="" text-split="" className="main-hero_heading-2 heading_first"><strong
                            className="bold-text-49">We’re brand builders at heart, creators by design, tech enthusiasts in
                            practice, and integrated at our core.</strong></h1>
                </div>
                <div className="main-hero_layout-2">
                    <h1 letters-fade-in="" text-split="" className="main-hero_heading-2">We&#x27;re on a mission to take the
                        very best of Indian creative talent to the world. Driven by a ferocious hunger to create
                        tangible impact for your business, we work with in-house specialists, industry partners and
                        technology leaders to push the boundaries of creativity and put your brand on the global stage.
                    </h1>
                </div>
                <div className="btn---wrap-3">
                    <div css-pointer-events="none" className="btn---bg-wrap-2">
                        <div className="btn---bg-circle-wrap">
                            <div className="btn---bg-circle-3"></div>
                        </div>
                    </div><a href="/about-us" className="btn-4 w-button">Dive into our culture <span
                            className="biggi">→</span></a>
                </div><a data-w-id="6fd54b99-f964-609d-617f-9bc6d41e1208" className="cta_btn sddff w-inline-block">
                    <div className="text-block-40">Dive into our Culture</div>
                    <div className="bg_colors"><img
                            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6475e19ecd1883887f45b5ea_Vector-arrow%20(1).svg"
                            loading="lazy" alt="" className="image-61 iconss" /></div>
                </a>
                <div className="button_wapper hidess"><a data-w-id="1decefc2-814e-4c33-6bcb-61edb1670484" href="/about-us"
                        className="link-block w-inline-block">
                        <div className="arrow_wapper">
                            <div className="left hpnop"><img
                                    src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/642ec7cce672167e826194fa_Rside.svg"
                                    loading="lazy" alt="" className="image" /></div>
                            <div className="left newarrow hpnop"><img
                                    src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/642ec7cce672167e826194fa_Rside.svg"
                                    loading="lazy" alt="" className="image" /></div>
                        </div>
                        <div className="div-block-2">
                            <div className="text-block div-block-2 onmob">Dive into our Culture</div>
                        </div>
                    </a></div>
            </div><img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01.png"
                loading="lazy" sizes="100vw"
                srcset="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-500.png 500w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-800.png 800w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-1080.png 1080w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-1600.png 1600w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-2000.png 2000w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-2600.png 2600w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01-p-3200.png 3200w, https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01.png 9860w"
                alt="" className="image-2" />
        </div>
    </>
  )
}

export default Idea