import * as THREE from 'three'
import Stats from '@libs/stats'
import '@libs/TrackballControls'
import '@libs/DragControls'
import * as myGUI from '@utils/myGUI'

// 其他工具 - 展示 fps
const stats = new Stats()
stats.showPanel(0)
document.body.appendChild(stats.dom)

// gui
const gui = myGUI.createGUI()

// 场景
const scene = new THREE.Scene()

// 渲染器
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.shadowMapEnabled = true
document.body.appendChild(renderer.domElement)

// 雾化
scene.fog = new THREE.Fog(0xffffff, 1, 90)

// 摄像机
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = -30
camera.position.y = 40
camera.position.z = 30
camera.lookAt(scene.position)
camera.name = 'camera'
myGUI.addPerspectiveCameraGUI(gui, camera)

// 添加一个平面
const planeGeometry = new THREE.PlaneGeometry(60, 40, 1, 1)
const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff })
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
plane.receiveShadow = true

plane.rotation.x = -0.5 * Math.PI
plane.position.x = 0
plane.position.y = 0
plane.position.z = 0

scene.add(plane)

// 生成方块
let object = []
const addCube = (scene) => {
    var cubeSize = Math.ceil((Math.random() * 3))
    var cubeGeometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize)
    var cubeMaterial = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff })
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.castShadow = true

    cube.position.x = -30 + Math.round((Math.random() * planeGeometry.parameters.width))
    cube.position.y = Math.round((Math.random() * 5))
    cube.position.z = -20 + Math.round((Math.random() * planeGeometry.parameters.height))

    object.push(cube)
    scene.add(cube)
}
const MAX_CUBE = 40
let cubeCount = 0
while (cubeCount++ < MAX_CUBE) {
    addCube(scene)
}

// 光源 - 环境光
const ambientLight = new THREE.AmbientLight(0x0c0c0c)
ambientLight.name = 'ambientLight'
scene.add(ambientLight)
myGUI.addLightGUI(gui, ambientLight)

// 光源 - 聚光灯
const spotLight = new THREE.SpotLight(0xffffff)
spotLight.name = 'spotLight'
spotLight.position.set(25, 25, 25)
scene.add(spotLight)
myGUI.addSpotLightGUI(gui, spotLight)

// 辅助线
const spotLightHelper = new THREE.SpotLightHelper(spotLight)
scene.add(spotLightHelper)

const axesHelper = new THREE.AxesHelper(100)
scene.add(axesHelper)

//
const render = () => renderer.render(scene, camera)
render()

//
const controls = new THREE.TrackballControls(camera)
controls.rotateSpeed = 1.0
controls.zoomSpeed = 1.2
controls.panSpeed = 0.8
controls.noZoom = false
controls.noPan = false
controls.staticMoving = true
controls.dynamicDampingFactor = 0.3
controls.keys = [ 65, 83, 68 ]
controls.addEventListener('change', render)

// 渲染动画
const animate = function () {
    window.requestAnimationFrame(animate)

    stats.begin()
    scene.traverse(e => {
        if (e instanceof THREE.Mesh && e !== plane) {
            e.rotation.x += 0.01
            e.rotation.y += 0.01
            e.rotation.z += 0.01
        }
    })

    controls.update()
    stats.end()
}
animate()

// 暴露给调试工具
window.THREE = THREE
window.scene = scene
