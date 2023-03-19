import{_ as a,o as e,c as o,N as r}from"./chunks/framework.f5290017.js";const t="/uperf.jpg",l="/OP.jpg";const g=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"guide.md"}'),i={name:"guide.md"},d=r('<h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><p>Apodidae 现已推出 V2.0.0 本手册提供的任何信息都有在未来的某个时刻更改的可能</p><h1 id="兼容性指南" tabindex="-1">兼容性指南 <a class="header-anchor" href="#兼容性指南" aria-label="Permalink to &quot;兼容性指南&quot;">​</a></h1><h2 id="cpu-controller" tabindex="-1">CPU Controller <a class="header-anchor" href="#cpu-controller" aria-label="Permalink to &quot;CPU Controller&quot;">​</a></h2><p>不兼容其他任何形式的 CPU 调控器，功能冲突<br> 清单：包括但不限于</p><ul><li>Scene 调度</li><li>Uperf</li></ul><h2 id="thread-scheduler" tabindex="-1">Thread Scheduler <a class="header-anchor" href="#thread-scheduler" aria-label="Permalink to &quot;Thread Scheduler&quot;">​</a></h2><p>不兼容任何形式的线程优化/调度，功能冲突<br> 清单：包括但不限于</p><ul><li>A-SOUL</li></ul><h2 id="gpu-controller" tabindex="-1">GPU Controller <a class="header-anchor" href="#gpu-controller" aria-label="Permalink to &quot;GPU Controller&quot;">​</a></h2><p>不兼容任何形式的 GPU 控制器，功能冲突<br> 清单：包括但不限于</p><ul><li>Scene MTK 专属功能内的 GPU 相关选项</li><li>带有 GPU 调控功能的 Uperf</li><li>天玑 GPU 调速器</li></ul><h2 id="voltage-optimization" tabindex="-1">Voltage Optimization <a class="header-anchor" href="#voltage-optimization" aria-label="Permalink to &quot;Voltage Optimization&quot;">​</a></h2><p>兼容 CPU/GPU 的降压应用<br> 清单：包括但不限于</p><ul><li>自由电子 e 天玑降压</li><li>嘟嘟 ski ＆ 秋秋 CPUhvfs</li></ul><p><strong>降压带来的风险和问题与 Apodidae 没有任何间接或直接关系</strong></p><h1 id="怎么用" tabindex="-1">怎么用？ <a class="header-anchor" href="#怎么用" aria-label="Permalink to &quot;怎么用？&quot;">​</a></h1><p>Apodidae 提供了两种使用方式：</p><ul><li>Magisk 模块</li><li>Cutoolbox 配置文件</li></ul><p><strong>两种使用方式只能选择一种，如果你非要一起用，打架别来找我</strong></p><p><strong>Magisk 模块切换模式需要在终端内使用<code>CuDaemon -R 【配置文件路径】【调度模式文件(cur_mode.txt)路径】【调度日志文件生成路径</code></strong><br><strong>如果你看不懂上面那句话里的任何一个词，请使用 cutoolbox</strong></p><p><strong>Apodidae 基于 CuprumTurbo-Scheduler，但与 Cutoolbox 不同，Cutoolbox 基于 CuprumTurbo-Scheduler 实现并加入了一些扩展功能</strong><br><strong>Apodidae 基于 CuprumTurbo-Scheduler, 但目前并未在源代码上做出任何更改，所以 Apodidae 与 CuprumTurbo-Scheduler 互相兼容</strong></p><h2 id="判断是否生效" tabindex="-1">判断是否生效 <a class="header-anchor" href="#判断是否生效" aria-label="Permalink to &quot;判断是否生效&quot;">​</a></h2><p>导入与 SoC 型号匹配的配置文件后点击上方显示状态的部分即可重启调度<br><strong>除了本网站标注的测试机型，Apodidae 不保证其他同 SoC 机型的可用性</strong> 显示<code>调度正在运行中</code>即为生效</p><h2 id="为什么我的监测数据表示调度未生效" tabindex="-1">为什么我的监测数据表示调度未生效 <a class="header-anchor" href="#为什么我的监测数据表示调度未生效" aria-label="Permalink to &quot;为什么我的监测数据表示调度未生效&quot;">​</a></h2><p>按照兼容性指南排查所有不兼容的应用及其残留</p><h2 id="为什么我的监测数据相对于其他人来说不够优秀" tabindex="-1">为什么我的监测数据相对于其他人来说不够优秀 <a class="header-anchor" href="#为什么我的监测数据相对于其他人来说不够优秀" aria-label="Permalink to &quot;为什么我的监测数据相对于其他人来说不够优秀&quot;">​</a></h2><p>SoC 体质，系统版本等等一大堆东西都会影响监测数据</p><h2 id="uperf-apodidae-为何选择我们" tabindex="-1">Uperf &amp; Apodidae 为何选择我们？ <a class="header-anchor" href="#uperf-apodidae-为何选择我们" aria-label="Permalink to &quot;Uperf &amp; Apodidae 为何选择我们？&quot;">​</a></h2><p><img src="'+t+'" alt="This is DJ"><br><img src="'+l+'" alt="This is OP"></p>',30),n=[d];function p(h,s,u,c,_,b){return e(),o("div",null,n)}const P=a(i,[["render",p]]);export{g as __pageData,P as default};
