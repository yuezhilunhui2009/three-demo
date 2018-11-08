import { Object3DGUI, addObject3DGUI, genObject3DGUIParams } from './Object3DGUI'

export class PerspectiveCameraGUI extends Object3DGUI {
    constructor ({
        x,
        y,
        z,
        rotationX,
        rotationY,
        rotationZ,
        fov,
        aspect,
        near,
        far
    }) {
        super({ x, y, z, rotationX, rotationY, rotationZ })

        this.fov = fov
        this.aspect = aspect
        this.near = near
        this.far = far
    }
}

export const genPerspectiveCameraGUIParams = () => ({
    ...genObject3DGUIParams(),
    fov: { default: 45, min: 0, max: 360, step: 0.001 },
    aspect: { default: window.innerWidth / window.innerHeight, min: 0, max: 5, step: 0.001 },
    near: { default: 0.01, min: 0, max: 10, step: 0.0001 },
    far: { default: 1000, min: 0, max: 10000, step: 10 }
})

export const addPerspectiveCameraGUI = (gui, perspectiveCamera, params = genPerspectiveCameraGUIParams()) => {
    const { object3DGUI, folder } = addObject3DGUI(gui, perspectiveCamera, params)
    const perspectiveCameraGUI = new PerspectiveCameraGUI({
        ...object3DGUI,
        fov: params.fov.default,
        aspect: params.aspect.default,
        near: params.near.default,
        far: params.far.default
    })

    const fovControl = folder.add(perspectiveCameraGUI, 'fov', params.fov.min, params.fov.max, params.fov.step)
    const aspectControl = folder.add(perspectiveCameraGUI, 'aspect', params.aspect.min, params.aspect.max, params.aspect.step)
    const nearControl = folder.add(perspectiveCameraGUI, 'near', params.near.min, params.near.max, params.near.step)
    const farControl = folder.add(perspectiveCameraGUI, 'far', params.far.min, params.far.max, params.far.step)

    if (perspectiveCamera) {
        fovControl.onChange(v => {
            perspectiveCamera.fov = v
            perspectiveCamera.updateProjectionMatrix()
        })
        aspectControl.onChange(v => {
            perspectiveCamera.aspect = v
            perspectiveCamera.updateProjectionMatrix()
        })
        nearControl.onChange(v => {
            perspectiveCamera.near = v
            perspectiveCamera.updateProjectionMatrix()
        })
        farControl.onChange(v => {
            perspectiveCamera.far = v
            perspectiveCamera.updateProjectionMatrix()
        })
    }

    return { perspectiveCameraGUI, folder }
}
