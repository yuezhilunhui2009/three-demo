import * as THREE from 'three'

// 场景
const scene = new THREE.Scene()

// 摄像机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500)
camera.position.set(0, 0, 50)
camera.lookAt(0, 0, 0)

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 几何体
const geometry = new THREE.Geometry()
geometry.vertices.push(new THREE.Vector3(-10, 0, 0))
geometry.vertices.push(new THREE.Vector3(0, 10, 0))
geometry.vertices.push(new THREE.Vector3(10, 0, 0))
geometry.vertices.push(new THREE.Vector3(0, -10, 0))
geometry.vertices.push(new THREE.Vector3(-10, 0, 0))

// 材质
const material = new THREE.LineBasicMaterial({ color: 0x55ff55 })

// 物体 - 线
const line = new THREE.Line(geometry, material)
const line2 = new THREE.Line(geometry, material)
const line3 = new THREE.Line(geometry, material)

line2.rotation.x += 0.04
line2.rotation.y += 0.04

line3.rotation.x += 0.08
line3.rotation.y += 0.08

scene.add(line)
scene.add(line2)
scene.add(line3)

// 渲染动画
const animate = () => {
    window.requestAnimationFrame(animate)

    line.rotation.x += 0.01
    line.rotation.y += 0.01

    line2.rotation.x += 0.01
    line2.rotation.y += 0.01

    line3.rotation.x += 0.01
    line3.rotation.y += 0.01

    renderer.render(scene, camera)
}
animate()

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
