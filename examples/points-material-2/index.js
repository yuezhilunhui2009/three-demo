import * as THREE from 'three'
import '@libs/OrbitControls'
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
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 100

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// 几何体
const geometry = new THREE.Geometry()
for (var i = 0; i < 10000; i++) {
    let star = new THREE.Vector3()
    star.x = THREE.Math.randFloatSpread(1000)
    star.y = THREE.Math.randFloatSpread(1000)
    star.z = THREE.Math.randFloatSpread(1000)

    geometry.vertices.push(star)
}

// 材质
const material = new THREE.PointsMaterial({
    size: 3,
    transparent: true,
    opacity: true,
    map: THREE.ImageUtils.loadTexture('assets/images/snow.jpg'),
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
    color: 0xffffff
})

// 物体 - 网格
const cube = new THREE.Points(geometry, material)
scene.add(cube)

// 渲染动画
const animate = function () {
    window.requestAnimationFrame(animate)

    stats.begin()
    geometry.vertices.forEach(v => {
        v.y = v.y - 1

        if (v.y < -500) v.y = 500
    })
    geometry.verticesNeedUpdate = true
    renderer.render(scene, camera)
    stats.end()
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
