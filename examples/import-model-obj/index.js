import * as THREE from 'three'
import '@libs/MTLLoader'
import '@libs/OBJLoader'
import '@libs/OrbitControls'
import Stats from '@libs/stats'

// 场景
const scene = new THREE.Scene()

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setClearColor(0x6f6f6f)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.gammaOutput = true
document.body.appendChild(renderer.domElement)

// 摄像机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01)
camera.position.set(0, 0, 10)
camera.rotation.x = 0.1

// 加载贴图
const MODEL_PATH = 'assets/models/pony-cartoon/source/a3ff7fc6894b4be396d75e70294655b1/'

// 加载 obj 模型
var mtlLoader = new THREE.MTLLoader()
mtlLoader.setPath(MODEL_PATH)
mtlLoader.setResourcePath(MODEL_PATH)
mtlLoader.load('Pony_cartoon.mtl', function (materials) {
    materials.preload()
    var objLoader = new THREE.OBJLoader()
    objLoader.setMaterials(materials)
    objLoader.setPath(MODEL_PATH)
    objLoader.load('Pony_cartoon.obj', function (object) {
        const box = new THREE.Box3()

        // 通过传入的object3D对象来返回当前模型的最小大小，值可以使一个mesh也可以使group
        box.expandByObject(object)
        console.log('BoundingSphere:', box.getBoundingSphere())
        scene.add(object)
    })
})

// 光源 - 环境光
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

// 光源 - 聚光灯
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(0, 2000, 0)
scene.add(spotLight)

// 轨道控制器
const controls = new THREE.OrbitControls(camera)
controls.target.set(-0.2, -0.2, 0)
controls.update()

// 坐标轴
const axesHelper = new THREE.AxesHelper(2000)
scene.add(axesHelper)

// 其他工具
const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

// 暴露给调试工具
window.THREE = THREE
window.scene = scene

// main loop
const animate = function () {
    stats.begin()
    renderer.render(scene, camera)
    stats.end()
    window.requestAnimationFrame(animate)
}
animate()
