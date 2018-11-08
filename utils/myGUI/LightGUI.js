import * as THREE from 'three'
import { Object3DGUI, addObject3DGUI, genObject3DGUIParams } from './Object3DGUI'

export class LightGUI extends Object3DGUI {
    constructor ({
        x,
        y,
        z,
        rotationX,
        rotationY,
        rotationZ,
        color,
        intensity
    }) {
        super({ x, y, z, rotationX, rotationY, rotationZ })

        this.color = color
        this.intensity = intensity
    }
}

export const genLightGUIParams = () => ({
    ...genObject3DGUIParams(),
    color: { default: 0xffffff },
    intensity: { default: 1, min: 0, max: 50, step: 0.001 }
})

export const addLightGUI = (gui, light, params = genLightGUIParams()) => {
    const { object3DGUI, folder } = addObject3DGUI(gui, light, params)
    const lightGUI = new LightGUI({
        ...object3DGUI,
        color: params.color.default,
        intensity: params.intensity.default
    })

    const colorControl = folder.addColor(lightGUI, 'color')
    const intensityControl = folder.add(lightGUI, 'intensity', params.z.min, params.z.max, params.z.step)

    if (light) {
        colorControl.onChange(v => (light.color = new THREE.Color(v)))
        intensityControl.onChange(v => (light.intensity = v))
    }

    return { lightGUI, folder }
}
