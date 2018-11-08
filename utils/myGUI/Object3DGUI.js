import * as THREE from 'three'

export class Object3DGUI {
    constructor ({
        x,
        y,
        z,
        rotationX,
        rotationY,
        rotationZ,
        scaleX,
        scaleY,
        scaleZ
    }) {
        this.x = x
        this.y = y
        this.z = z
        this.rotationX = rotationX
        this.rotationY = rotationY
        this.rotationZ = rotationZ
        this.scaleX = scaleX
        this.scaleY = scaleY
        this.scaleZ = scaleZ
    }
}

export const genObject3DGUIParams = () => ({
    x: { default: 0, min: -50, max: 50, step: 0.01 },
    y: { default: 0, min: -50, max: 50, step: 0.01 },
    z: { default: 0, min: -50, max: 50, step: 0.01 },
    rotationX: { default: 0, min: -2 * Math.PI, max: 2 * Math.PI, step: 0.001 },
    rotationY: { default: 0, min: -2 * Math.PI, max: 2 * Math.PI, step: 0.001 },
    rotationZ: { default: 0, min: -2 * Math.PI, max: 2 * Math.PI, step: 0.001 },
    scaleX: { default: 1, min: 0, max: 100, step: 0.01 },
    scaleY: { default: 1, min: 0, max: 100, step: 0.01 },
    scaleZ: { default: 1, min: 0, max: 100, step: 0.01 }
})

export const addObject3DGUI = (gui, object3D, params = genObject3DGUIParams()) => {
    const object3DGUI = new Object3DGUI({
        x: params.x.default,
        y: params.y.default,
        z: params.z.default,
        rotationX: params.rotationX.default,
        rotationY: params.rotationY.default,
        rotationZ: params.rotationZ.default,
        scaleX: params.scaleX.default,
        scaleY: params.scaleY.default,
        scaleZ: params.scaleZ.default
    })

    const folder = gui.addFolder(object3D.name)
    const xControl = folder.add(object3DGUI, 'x', params.x.min, params.x.max, params.x.step)
    const yControl = folder.add(object3DGUI, 'y', params.y.min, params.y.max, params.y.step)
    const zControl = folder.add(object3DGUI, 'z', params.z.min, params.z.max, params.z.step)

    const rotationXControl = folder.add(object3DGUI, 'rotationX', params.rotationX.min, params.rotationX.max, params.rotationX.step)
    const rotationYControl = folder.add(object3DGUI, 'rotationY', params.rotationY.min, params.rotationY.max, params.rotationY.step)
    const rotationZControl = folder.add(object3DGUI, 'rotationZ', params.rotationZ.min, params.rotationZ.max, params.rotationZ.step)

    const scaleXControl = folder.add(object3DGUI, 'scaleX', params.scaleX.min, params.scaleX.max, params.scaleX.step)
    const scaleYControl = folder.add(object3DGUI, 'scaleY', params.scaleY.min, params.scaleY.max, params.scaleY.step)
    const scaleZControl = folder.add(object3DGUI, 'scaleZ', params.scaleZ.min, params.scaleZ.max, params.x.step)

    if (object3D) {
        xControl.onChange(v => (object3D.position.x = v))
        yControl.onChange(v => (object3D.position.y = v))
        zControl.onChange(v => (object3D.position.z = v))
        rotationXControl.onChange(v => (object3D.rotation.x = v))
        rotationYControl.onChange(v => (object3D.rotation.y = v))
        rotationZControl.onChange(v => (object3D.rotation.z = v))
        scaleXControl.onChange(v => (object3D.scale.x = v))
        scaleYControl.onChange(v => (object3D.scale.y = v))
        scaleZControl.onChange(v => (object3D.scale.z = v))
    }

    return { object3DGUI, folder }
}
