import * as THREE from 'three'

// 字体加载器
const fontLoader = new THREE.FontLoader()

// 场景
const scene = new THREE.Scene()

// 摄像机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 50

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

fontLoader.load('assets/fonts/optimer_regular.typeface.json', (font) => {
    // 几何体
    const geometry = new THREE.TextGeometry('Hello world!', {
        font,
        size: 2,
        height: 0.5
    })
    // 材质
    const meterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

    // 物体 - 网格
    const textMesh = new THREE.Mesh(geometry, meterial)
    scene.add(textMesh)

    // 渲染
    const animate = function () {
        window.requestAnimationFrame(animate)
        textMesh.rotation.y += 0.01

        renderer.render(scene, camera)
    }
    animate()
})

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
