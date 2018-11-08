import * as dat from 'dat.gui'
import { addObject3DGUI } from './Object3DGUI'
import { addLightGUI } from './LightGUI'

const addGUI = () => {
    const gui = new dat.GUI()
    gui.domElement.style.position = 'absolute'
    gui.domElement.style.right = '0'
    document.body.appendChild(gui.domElement)

    return gui
}

export {
    addGUI,
    addObject3DGUI,
    addLightGUI
}
