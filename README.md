# three-demo
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

模仿 [three.js 官方示例](https://threejs.org/examples/)或者[文档](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)写的 demo，本项目也可以作为项目模板 clone 到本地帮助快速使用 ES6 编写 demo。

## 快速开始
```bash
# 安装依赖
npm i

# 本地预览
npm run serve

# 项目路径别名
# @libs - 工具库路径
# @fonts - 字体路径
# @models - 模型路径
```

## 如何添加 example
1. 在 examples 文件内创建子文件夹
2. 然后在子文件夹内创建 index.js 即可开始编写代码
3. 重新运行 npm run serve

## 项目已安装的库
### 核心部分
* 3D引擎: [three.js r98](https://threejs.org/)
* 变量 UI 调试组件: [dat.gui](https://github.com/dataarts/dat.gui)
* 帧率展示: [stats.js](https://github.com/mrdoob/stats.js)
* 缓动库: [tween.js](https://github.com/tweenjs/tween.js/blob/master/docs/user_guide.md)

### 加载器部分
* gltf 模型加载器: [GLTFLoader.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/loaders/GLTFLoader.js)
* obj 模型加载器: [OBJLoader.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/loaders/OBJLoader.js)
* obj 模型加载器: [OBJLoader2.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/loaders/OBJLoader2.js)

### 控制器部分
* 设备旋转控制器: [DeviceOrientationControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/DeviceOrientationControls.js)
* 拖拽控制器: [DragControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/DragControls.js)
* 编辑控制器: [EditorControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/EditorControls.js)
* 第一人称控制器: [FirstPersonControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/FirstPersonControls.js)
* 飞行控制器: [FlyControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/FlyControls.js)
* 触摸控制器: [MapControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/MapControls.js)
* 轨道控制器: [OrbitControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/OrbitControls.js)
* 锁定指针控制器: [PointerLockControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/PointerLockControls.js)
* 轨迹球控制器: [TrackballControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/TrackballControls.js)
* 物体控制器: [TransformControls.js](https://github.com/mrdoob/three.js/blob/dev/examples/js/controls/TransformControls.js)

## 其他资源
* [3D 模型编辑、查看工具 Blender](https://www.blender.org/download/)
* [gltf 查看工具](https://github.com/donmccurdy/three-gltf-viewer)
* [threejs 在线编辑器](https://threejs.org/editor/)
* [模型 glTF Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models)
* [模型 sketchfab](https://sketchfab.com/features/download)
* [模型 turbosquid](https://www.turbosquid.com/)

## TODO
### 基本示例
- [x] 创建场景、绘制简单几何体、模型旋转
- [x] 绘制线条
- [x] 加载字体、绘制文本
- [x] 加载 glTF 模型、使用轨道控制器

### 辅助工具示例
- [x] 使用 [stats.js](https://github.com/mrdoob/stats.js) 展示渲染性能
- [x] 使用 [dat-gui](https://github.com/dataarts/dat.gui) 辅助数值调试

### 辅助对象示例
- [x] 箭头与坐标轴 ArrowHelper、AxesHelper
- [x] 包围盒 BoxHelper、Box3Helper
- [x] 模拟相机视锥体 CameraHelper

### 几何体示例
- [ ] 立方几何体（BoxGeometry）
- [ ] 圆形几何体（CircleGeometry）
- [ ] 圆锥几何体（ConeGeometry）
- [ ] 十二面几何体（DodecahedronGeometry）
- [ ] 边缘几何体（EdgesGeometry）
- [ ] 挤压几何体（ExtrudeGeometry）
- [ ] 二十面几何体（IcosahedronGeometry）
- [ ] 车削几何体（LatheGeometry）
- [ ] 八面几何体（OctahedronGeometry）
- [ ] 多面几何体（PolyhedronGeometry）
- [ ] 八面几何体（OctahedronGeometry）

### 材质、光源示例
- [x] 粒子材质

### 粒子系统示例
### 交互示例
### 动画示例
