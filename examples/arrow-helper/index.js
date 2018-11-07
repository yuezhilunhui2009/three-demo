import * as THREE from 'three'
import Stats from '@libs/stats'
import * as dat from 'dat.gui'
import '@libs/OrbitControls'

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
camera.position.set(0, -0.8, 1)

// 几何体
const geometry = new THREE.PlaneGeometry(1, 1, 10)

// 材质
const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa, side: THREE.DoubleSide })

// 物体 - 网格
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// 箭头助手
var dir = new THREE.Vector3(1, 1.5, 0.5)
dir.normalize()
var origin = new THREE.Vector3(0, 0, 0)
var length = 1
var hex = 0x00ff00
var arrowHelper = new THREE.ArrowHelper(dir, origin, length, hex)
scene.add(arrowHelper)

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
