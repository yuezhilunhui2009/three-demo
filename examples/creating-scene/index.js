import * as THREE from 'three'
import * as myGUI from '@utils/myGUI'
import Stats from '@libs/stats'

// gui
const gui = myGUI.createGUI()

// 其他工具 - 展示 fps
const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

// 场景
const scene = new THREE.Scene()

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.name = 'carmera'
camera.position.z = 5
myGUI.addPerspectiveCameraGUI(gui, camera)

// 几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 材质
const material = new THREE.MeshLambertMaterial({ color: 0xffffff })

// 物体 - 网格
const cube = new THREE.Mesh(geometry, material)
cube.name = 'cube'
scene.add(cube)
myGUI.addObject3DGUI(gui, cube)

// 光源 - 环境光
const ambientLight = new THREE.AmbientLight(0x666666)
ambientLight.name = 'ambientLight'
scene.add(ambientLight)
myGUI.addLightGUI(gui, ambientLight)

// 光源 - 聚光灯
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.name = 'spotLight'
spotLight.position.set(2, 2, 2)
scene.add(spotLight)
myGUI.addSpotLightGUI(gui, spotLight)

// 辅助线
const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)

const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

// 渲染动画
const animate = function () {
    window.requestAnimationFrame(animate)

    stats.begin()
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
    stats.end()
}
animate()

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
