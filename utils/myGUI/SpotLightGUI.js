import { LightGUI, addLightGUI, genLightGUIParams } from './LightGUI'

export class SpotLightGUI extends LightGUI {
    constructor ({
        x,
        y,
        z,
        rotationX,
        rotationY,
        rotationZ,
        color,
        intensity,
        distance,
        angle,
        penumbra,
        decay
    }) {
        super({ x, y, z, rotationX, rotationY, rotationZ, color, intensity })

        this.distance = distance
        this.angle = angle
        this.penumbra = penumbra
        this.decay = decay
    }
}

export const genSpotLightGUIParams = () => ({
    ...genLightGUIParams(),
    distance: { default: 200, min: 0, max: 1000, step: 0.01 },
    angle: { default: Math.PI / 4, min: 0, max: Math.PI / 2, step: 0.001 },
    penumbra: { default: 0, min: 0, max: 1, step: 0.001 },
    decay: { default: 1, min: 0, max: 2, step: 0.001 }
})

export const addSpotLightGUI = (gui, spotLight, params = genSpotLightGUIParams()) => {
    const { object3DGUI, folder } = addLightGUI(gui, spotLight, params)
    const spotLightGUI = new SpotLightGUI({
        ...object3DGUI,
        distance: params.distance.default,
        angle: params.angle.default,
        penumbra: params.penumbra.default,
        decay: params.decay.default
    })

    const distanceControl = folder.add(spotLightGUI, 'distance', params.distance.min, params.distance.max, params.distance.step)
    const angleControl = folder.add(spotLightGUI, 'angle', params.angle.min, params.angle.max, params.angle.step)
    const penumbraControl = folder.add(spotLightGUI, 'penumbra', params.penumbra.min, params.penumbra.max, params.penumbra.step)
    const decayControl = folder.add(spotLightGUI, 'decay', params.decay.min, params.decay.max, params.decay.step)

    if (spotLight) {
        distanceControl.onChange(v => (spotLight.distance = v))
        angleControl.onChange(v => (spotLight.angle = v))
        penumbraControl.onChange(v => (spotLight.penumbra = v))
        decayControl.onChange(v => (spotLight.decay = v))
    }

    return spotLightGUI
}
