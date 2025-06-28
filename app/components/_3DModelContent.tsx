'use client';

import { _3dModelUrl } from "../data/menus";

export default function _3DModelComponent() {
    return (
        <>
            <div className="item iframe-model-container">
                <div id="iframeLoading">
                    <i className="fa fa-spinner fa-spin"></i>
                </div>
                <div className="iframe-model">
                    <iframe
                        id="modelIframe"
                        src={_3dModelUrl}
                        allowFullScreen
                        loading="lazy"
                        allow="encrypted-media"
                        style={{
                            border: '0px solid white',
                            background: 'transparent',
                            outline: 'none',
                        }}
                        frameBorder="0"
                        scrolling="no"
                    />
                </div>
            </div>
        </>
    )
}