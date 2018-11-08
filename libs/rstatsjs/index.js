import './rStats'
import './rStats.extras'

/* eslint-disable */
export const initRs = (options = {}, renderer) => {
    let plugins = [new window.glStats()]
    let gls

    if (renderer) {
        gls = new threeStats(renderer)
        plugins.push(gls)
    }

    const rS = new window.rStats({
        ...{
            css: ['assets/styles/rStats.css'],
            values: {
                frame: { caption: 'Total frame time (ms)', over: 16 },
                raf: { caption: 'Time since last rAF (ms)' },
                fps: { caption: 'Framerate (FPS)', below: 30 },
                render: { caption: 'WebGL Render (ms)' }
            },
            groups: [
                { caption: 'Framerate', values: [ 'fps', 'raf' ] },
                { caption: 'Frame Budget', values: [ 'frame', 'render' ] }
            ],
            plugins
        },
        ...options
    })

    return {
        rS,
        gls
    }
}
