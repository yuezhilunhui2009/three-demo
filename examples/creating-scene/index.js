import * as THREE from 'three'

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

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
}
animate()

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
