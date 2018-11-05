import * as THREE from 'three'
import Stats from '@libs/stats'

// 其他工具
const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

// 字体加载器
const fontLoader = new THREE.FontLoader()

// 场景
const scene = new THREE.Scene()

// 摄像机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 20

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 光源 - 环境光
const ambientLight = new THREE.AmbientLight(0x666666)
scene.add(ambientLight)

// 光源 - 聚光灯
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.position.set(2, 2, 2)
scene.add(spotLight)

fontLoader.load('assets/fonts/optimer_regular.typeface.json', (font) => {
    // 几何体
    const geometry = new THREE.TextGeometry('Hello world!', {
        font,
        size: 1,
        height: 0.5
    })
    // 材质
    const material = new THREE.MeshLambertMaterial({ color: 0xff0000 })

    // 物体 - 网格
    const textMesh = new THREE.Mesh(geometry, material)
    scene.add(textMesh)

    // 渲染
    const animate = function () {
        window.requestAnimationFrame(animate)

        stats.begin()
        textMesh.rotation.y += 0.01
        renderer.render(scene, camera)
        stats.end()
    }
    animate()
})

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
