// 官方案例：https://threejs.org/examples/webgl_loader_gltf.html

import * as THREE from 'three'
import '@libs/GLTFLoader'
import '@libs/OrbitControls'

// 场景
const scene = new THREE.Scene()

// 摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 100000)
camera.position.set(0, 0, 0)

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.gammaOutput = true
document.body.appendChild(renderer.domElement)

// 加载 gltf 模型
const gltfLoader = new THREE.GLTFLoader()
gltfLoader.load('assets/models/tiki_treasure/scene.gltf', (gltfModel) => {
    scene.add(gltfModel.scene)
})

// 渲染动画
const animate = function () {
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()

// 轨道控制器
const controls = new THREE.OrbitControls(camera)
controls.target.set(0, -15000, 0)
controls.update()

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
