import * as THREE from 'three'
import '@libs/OrbitControls'

// 字体加载器
const fontLoader = new THREE.FontLoader()

// 场景
const scene = new THREE.Scene()

// 摄像机
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 100

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 几何体
const geometry = new THREE.CubeGeometry(50, 50, 50, 20, 20, 20)

// 材质
const material = new THREE.PointsMaterial({ size: 0.2, color: 0xffffff })

// 物体 - 网格
const cube = new THREE.Points(geometry, material)
scene.add(cube)

// 渲染动画
const animate = function () {
    window.requestAnimationFrame(animate)

    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}
animate()

// 轨道控制器
const controls = new THREE.OrbitControls(camera)
controls.target.set(0, -0.2, -0.2)
controls.update()

// 暴露给调试工具
window.cube = cube
window.THREE = THREE
window.scene = scene
