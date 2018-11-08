import * as dat from 'dat.gui'
import { addObject3DGUI } from './Object3DGUI'
import { addLightGUI } from './LightGUI'
import { addSpotLightGUI } from './SpotLightGUI'
import { addPerspectiveCameraGUI } from './PerspectiveCameraGUI'

// 添加 GUI
const createGUI = () => {
    const gui = new dat.GUI()
    gui.domElement.style.position = 'absolute'
    gui.domElement.style.right = '0'
    document.body.appendChild(gui.domElement)

    return gui
}

export {
    createGUI,
    addObject3DGUI,
    addLightGUI,
    addSpotLightGUI,
    addPerspectiveCameraGUI
}
