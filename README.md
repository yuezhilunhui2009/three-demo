# three-demo
学习 threejs。

## 快速开始
```bash
# 安装依赖
npm i

# 本地预览
npm run serve
```

## Three.js 术语
* [场景（Scene）](https://threejs.org/docs/index.html#api/zh/scenes/Scene)
* [摄像机（Camera）](https://threejs.org/docs/index.html#api/zh/cameras/Camera)
* [WebGL渲染器（WebGLRenderer）](https://threejs.org/docs/index.html#api/zh/renderers/WebGLRenderer)
* [几何体（Geometry）](https://threejs.org/docs/index.html#api/zh/core/Geometry)
    * [立方几何体（BoxGeometry）](https://threejs.org/docs/index.html#api/zh/geometries/BoxGeometry)
    * [圆形几何体（CircleGeometry）](https://threejs.org/docs/index.html#api/zh/geometries/CircleGeometry)
* [材质(Material)](https://threejs.org/docs/index.html#api/zh/materials/Material)
* [网格（Mesh）](https://threejs.org/docs/index.html#api/zh/objects/Mesh)
* [着色器（Shader）](https://zh.wikipedia.org/wiki/%E7%9D%80%E8%89%B2%E5%99%A8)

## 工具
* [3D 模型编辑、查看工具 Blender](https://www.blender.org/download/)
* [gltf 查看工具](https://github.com/donmccurdy/three-gltf-viewer)

## 3D 模型资源
* [glTF Sample Models](https://github.com/KhronosGroup/glTF-Sample-Models)
* [sketchfab](https://sketchfab.com/features/download)

## TODO
### 基本示例
- [x] 创建场景、绘制简单几何体、模型旋转
- [x] 绘制线条
- [x] 加载字体、绘制文本
- [x] 加载 glTF 模型、使用轨道控制器

### 辅助工具示例
- [] 使用 [stats.js](https://github.com/mrdoob/stats.js) 展示渲染性能
- [] 使用 [dat-gui](https://github.com/dataarts/dat.gui) 辅助数值调试

### 辅助对象示例
- [] 箭头与坐标轴 ArrowHelper、AxesHelper
- [] 包围盒 BoxHelper、Box3Helper
- [] 模拟相机视锥体 CameraHelper

### 几何体示例
### 材质、光源示例
### 粒子系统示例
### 动画示例
