<!-- require MetingJS -->
<script src="https://unpkg.com/meting@2.0.1/dist/Meting.min.js"></script>
<!-- require APlayer -->
<link rel="stylesheet" href="https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.css">
<script src="https://unpkg.com/aplayer@1.10.1/dist/APlayer.min.js"></script>

<meting-js server="netease" type="song" id="1889184941">

# 概述 
Apodidae 现已推出 V2.0.0 本手册提供的任何信息都有在未来的某个时刻更改的可能  
# 兼容性指南
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
# 怎么用？
Apodidae 提供了两种使用方式：
- Magisk 模块
- Cutoolbox 配置文件

**两种使用方式只能选择一种，如果你非要一起用，打架别来找我**

**Magisk 模块切换模式需要在终端内使用`CuDaemon -R 【配置文件路径】【调度模式文件(cur_mode.txt)路径】【调度日志文件生成路径`**  
**如果你看不懂上面那句话里的任何一个词，请使用 cutoolbox**  

**Apodidae 基于 CuprumTurbo-Scheduler，但与 Cutoolbox 不同，Cutoolbox 基于 CuprumTurbo-Scheduler 实现并加入了一些扩展功能**  
**Apodidae 基于 CuprumTurbo-Scheduler, 但目前并未在源代码上做出任何更改，所以 Apodidae 与 CuprumTurbo-Scheduler 互相兼容**  

## 判断是否生效
导入与 SoC 型号匹配的配置文件后点击上方显示状态的部分即可重启调度  
**除了本网站标注的测试机型，Apodidae 不保证其他同 SoC 机型的可用性**
显示`调度正在运行中`即为生效

## 为什么我的监测数据表示调度未生效
按照兼容性指南排查所有不兼容的应用及其残留

## 为什么我的监测数据相对于其他人来说不够优秀
SoC 体质，系统版本等等一大堆东西都会影响监测数据  

## Uperf & Apodidae 为何选择我们？
![This-is-DJ](/uperf.jpg)  
![This-is-OP](/op.jpg)

<style lang="scss">
::-webkit-scrollbar {
  width: 0 !important;
}
::-webkit-scrollbar {
  width: 0 !important;height: 0;
}
</style>

