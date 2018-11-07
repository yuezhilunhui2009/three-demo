// 官方案例：https://threejs.org/examples/webgl_loader_gltf.html

import * as THREE from 'three'
import '@libs/LoaderSupport'
import '@libs/MTLLoader'
import '@libs/OBJLoader'
import '@libs/OBJLoader2'
import '@libs/GLTFLoader'
import '@libs/OrbitControls'
import Stats from '@libs/stats'

// 其他工具
const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

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
// const MODEL_PATH = 'assets/models/versionOne_sketchfab/'

// 加载 obj 模型
// const objLoader = new THREE.OBJLoader2()
// objLoader.loadMtl(`${MODEL_PATH}Pony_cartoon.mtl`, null, (materials) => {
//     objLoader.setModelName('Pony_cartoon')
//     objLoader.setMaterials(materials)
//     objLoader.setLogging(true, true)
//     objLoader.load(`${MODEL_PATH}Pony_cartoon.obj`, (event) => {
//         scene.add(event.detail.loaderRootNode)
//     }, null, null, null, false)
// })

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
        console.log(box.getBoundingSphere())
        scene.add(object)
    })
})

// 加载 obj 模型
// const objLoader = new THREE.OBJLoader2()
// objLoader.loadMtl(`${MODEL_PATH}versionOne_sketchfab.mtl`, null, (materials) => {
//     objLoader.setModelName('versionOne_sketchfab')
//     objLoader.setMaterials(materials)
//     objLoader.setLogging(true, true)
//     objLoader.load(`${MODEL_PATH}versionOne_sketchfab.obj`, (event) => {
//         scene.add(event.detail.loaderRootNode)
//     }, null, null, null, false)
// })

// var mtlLoader = new THREE.MTLLoader()
// mtlLoader.setPath('assets/models/versionOne_sketchfab/')
// mtlLoader.load('versionOne_sketchfab.mtl', function (materials) {
//     materials.preload()
//     var objLoader = new THREE.OBJLoader()
//     objLoader.setMaterials(materials)
//     objLoader.setPath('assets/models/versionOne_sketchfab/')
//     objLoader.load('versionOne_sketchfab.obj', function (object) {
//         console.log(object)
//         object.traverse(child => {
//             console.log(child)
//             if (child.isMesh) {
//                 // child.material = new THREE.MeshLambertMaterial({ color: 0xff0000 })
//             }
//         })
//         object.position.set(0, 0, 0)
//         scene.add(object)
//     })
// })

// const gltfLoader = new THREE.GLTFLoader()
// gltfLoader.load('assets/models/car-gltf/scene.gltf', (gltfModel) => {
//     scene.add(gltfModel.scene)
// })

// 光源 - 环境光
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(ambientLight)

// 光源 - 聚光灯
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(0, 2000, 0)
scene.add(spotLight)

// 渲染动画
const animate = function () {
    window.requestAnimationFrame(animate)

    stats.begin()
    renderer.render(scene, camera)
    stats.end()
}
animate()

// 轨道控制器
const controls = new THREE.OrbitControls(camera)
controls.target.set(-0.2, -0.2, 0)
controls.update()

var axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
