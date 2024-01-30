# 概述 
![GitHub release (latest by date)](https://img.shields.io/github/v/release/naranyinyun/Apodidae?color=%23773bf9&label=Apodidae&style=flat-square)   
本手册提供的任何信息都有在未来的某个时刻更改的可能  

# 重要信息
Apodidae 不是 Uperf (YC) 的二改，也与 Uperf 没有任何关联，您无法使用 Scene 等可管理 Uperf 的应用管理 Apodidae，如果您不想使用模块，则应使用 Cutoolbox 来实现对 Apodidae 的调控

# 兼容性指南
## Cutoolbox Version
您必须使用 Cutoolbox 的最新版本

![GitHub release (latest by date)](https://img.shields.io/github/v/release/chenzyyzd/CuprumTurbo-Scheduler?color=%23773bf9&label=Cutoolbox&style=flat-square)
## CPU Controller 
不兼容其他任何形式的 CPU 调控器，功能冲突   
清单：包括但不限于    
- Scene 调度
- Uperf


## Thread Scheduler
不兼容任何形式的线程优化/调度，功能冲突  
清单：包括但不限于
- A-SOUL


## GPU Controller
不兼容任何形式的 GPU 控制器，功能冲突     
清单：包括但不限于  
- Scene MTK 专属功能内的 GPU 相关选项
- 带有 GPU 调控功能的 Uperf
- 天玑 GPU 调速器


## Voltage Optimization
兼容 CPU/GPU 的降压应用    
清单：包括但不限于  
- 自由电子 e 天玑降压
- 嘟嘟 ski ＆ 秋秋 CPUhvfs

**降压带来的风险和问题与 Apodidae 没有任何间接或直接关系**


## Unofficial Kernel
可能不兼容部分第三方内核   
内核中无或修改了所需的调度器  
清单：包括但不限于
- Pandora Kernel



# 怎么用？
Apodidae 提供了两种使用方式：
- Magisk 模块
- Cutoolbox 配置文件

::: danger
Magisk 模块和 Cutoolbox 只能使用其中一种
:::

::: tip
Magisk 模块切换模式需要在终端内输入 `CuDaemon -R [配置文件路径] [调度模式文件(cur_mode.txt)路径] [调度日志文件生成路径]`  
如需获得更多信息, 请参照上游仓库用法
:::


## 判断是否生效
导入与 SoC 型号匹配的配置文件后点击上方显示状态的部分即可重启调度  
**除了本网站标注的测试机型，Apodidae 不保证其他同 SoC 机型的可用性**
显示`调度正在运行中`即为生效

## 为什么我的监测数据表示调度未生效
按照兼容性指南排查所有不兼容的应用及其残留

## 为什么我的监测数据相对于其他人来说不够优秀
SoC 体质，系统版本等等一大堆东西都会影响监测数据  

## 免费动物园展出
![This is DJ](/uperf.jpg)  
![This is OP](/OP.jpg)  
![This is Monkey](/Screenshot_2024-01-30-15-45-22-465_com.tencent.mobileqq-edit.jpg)  

<style lang="scss">
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
</style>

