import React, { useEffect } from 'react'
import "../global.css"
function Video_section() {

    var vid = document.getElementById("myVideo");
    var isFullScreen = false;

    function togglePlayPause() {
        if (vid.paused && !isFullScreen) {
            vid.play();
            vid.requestFullscreen();
            vid.muted = false;
            isFullScreen = true;
        } else if (vid.paused && isFullScreen) {
            vid.play();
            vid.muted = false;
        } else {
            vid.pause();
            document.exitFullscreen();
            isFullScreen = false;
        }
    }

    const divStyle = {
        display: 'none',
        opacity: 0
    };

    const divStylemyVideo = {
        height : '100%',
        width : '100%',
        objectFit: `fill`
    }

  return (
    <>
          <div data-w-id="af604a05-b93d-1590-d517-10cfcd6f622c" className="video_section">
            <div id="videoplay" className="section-video">
                <div className="video-embed w-embed w-script"><video id="myVideo" style={divStylemyVideo} autoPlay muted onClick={() => {togglePlayPause()}} >
                        <source
                            src="https://maniksandbox.tech/wp-content/uploads/2023/05/Schbang-Agency-Reel-2023-COMPRESSED.mp4"
                            type="video/mp4"/>
                    </video>

                </div>
                <div data-w-id="6fb6931f-7f0a-3a5c-78d2-e8c62a888611" style={divStyle}
                    className="play-button-wrapper is-mobile">
                    <div className="play-button-text">Play</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Video_section