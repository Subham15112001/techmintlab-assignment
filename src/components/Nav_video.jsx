import React from 'react'
import "../global.css"
function Nav_video() {

    const videoStyle = {
        backgroundImage: 'url(https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6486b24a0f59bc3a9c9d39ba_Desktop%20transition%203_1-poster-00001.jpg)',
        objectFit: 'cover', // Add any additional styles you need here
    };

    return (
        <>
            <div className="trasition">
                <div data-w-id="42c5be2f-396b-6f4d-0641-5a27b6cf5deb" className="trans_tigger"></div>
                <div data-poster-url="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6486b24a0f59bc3a9c9d39ba_Desktop transition 3_1-poster-00001.jpg"
                    data-video-urls="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6486b24a0f59bc3a9c9d39ba_Desktop transition 3_1-transcode.mp4,https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6486b24a0f59bc3a9c9d39ba_Desktop transition 3_1-transcode.webm"
                    data-autoplay="true" data-loop="false" data-wf-ignore="true"
                    className="new-videos w-background-video w-background-video-atom">
                    <video
                        id="42c5be2f-396b-6f4d-0641-5a27b6cf5dec-video"
                        autoPlay
                        muted
                        playsInline
                        data-wf-ignore="true"
                        style={videoStyle}
                    >
                        <source
                            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6486b24a0f59bc3a9c9d39ba_Desktop%20transition%203_1-transcode.mp4"
                            data-wf-ignore="true"
                        />
                        <source
                            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6486b24a0f59bc3a9c9d39ba_Desktop%20transition%203_1-transcode.webm"
                            data-wf-ignore="true"
                        />
                    </video>
                </div>
            </div>
            <div className="cursor_all">
                <div no-click="true" className="cursor-4">
                    <div className="cursor_move">
                        <div className="cursor_tag text-animation is-diff1 animated-text">
                            <div className="div-block-82">
                                <p className="cursor_text text">Cursor Text</p>
                                <p className="cursor_text text">Cursor Text</p>
                                <p className="cursor_text text">Cursor Text</p>
                                <p className="cursor_text text">Cursor Text</p>
                                <p className="cursor_text text">Cursor Text</p>
                                <p className="cursor_text text">Cursor Text</p>
                                <p className="cursor_text text">Cursor Text</p>
                                <p className="cursor_text text">Cursor Text</p>
                                <p className="cursor_text text">Cursor Text</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav_video