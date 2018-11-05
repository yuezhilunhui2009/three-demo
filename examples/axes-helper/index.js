import * as THREE from 'three'
import Stats from '@libs/stats'
import * as dat from 'dat.gui'
import '@libs/OrbitControls'

// 其他工具 - 展示 fps
const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

// 其他工具 - 提供 UI 进行变量调整
const guiControl = { rotationSpeed: 0.01 }
const gui = new dat.GUI()
gui.domElement.style.position = 'absolute'
gui.domElement.style.right = '0'
gui.add(guiControl, 'rotationSpeed', 0.001, 0.1)
document.body.appendChild(gui.domElement)

// 场景
const scene = new THREE.Scene()

// 摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 材质
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })

// 物体 - 网格
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// 渲染动画
const animate = function () {
    window.requestAnimationFrame(animate)

    stats.begin()
    cube.rotation.x += guiControl.rotationSpeed
    cube.rotation.y += guiControl.rotationSpeed

    renderer.render(scene, camera)
    stats.end()
}
animate()

var axesHelper = new THREE.AxesHelper(5)
scene.add(axesHelper)

// 轨道控制器
const controls = new THREE.OrbitControls(camera)
controls.target.set(0, -0.2, -0.2)
controls.update()

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
