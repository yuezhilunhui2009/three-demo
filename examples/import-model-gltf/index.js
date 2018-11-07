// 官方案例：https://threejs.org/examples/webgl_loader_gltf.html

import * as THREE from 'three'
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
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.gammaOutput = true
document.body.appendChild(renderer.domElement)

// 摄像机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20)
camera.position.set(-1.8, 0.9, 2.7)

// 光源
const light = new THREE.HemisphereLight(0xbbbbff, 0x444422)
light.position.set(0, 1, 0)
scene.add(light)

// 加载背景贴图
const envMap = new THREE.CubeTextureLoader()
    .setPath('assets/models/DamagedHelmet/')
    .load([
        'posx.jpg',
        'negx.jpg',
        'posy.jpg',
        'negy.jpg',
        'posz.jpg',
        'negz.jpg'
    ])
scene.background = envMap

// 加载 gltf 模型
const gltfLoader = new THREE.GLTFLoader()
gltfLoader.load('assets/models/DamagedHelmet/DamagedHelmet.gltf', (gltfModel) => {
    gltfModel.scene.traverse(function (child) {
        if (child.isMesh) {
            child.material.envMap = envMap
        }
    })
    scene.add(gltfModel.scene)
})

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
controls.target.set(0, -0.2, -0.2)
controls.update()

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
