xiang-client
============

xiang-client project

<pre>
chrome禁止本地浏览时加载本地其他文件，可以采用添加启动参数的方式来支持
添加参数为 --allow-file-access-from-files  或者　--disable-web-security
Google Chrome 浏览器默认安装路径是 %USERPROFILE%\AppData\Local\Google\Chrome，其中User Data文件夹存放cache、cookie、历史记录等。
–user-data-dir=”[PATH]“  自定义用户数据目录
–start-maximized                启动就最大化
–no-sandbox                         取消沙盒模式
–single-process                    单进程运行
–process-per-tab                 每个标签使用单独进程
–process-per-site                每个站点使用单独进程
–in-process-plugins            插件不启用单独进程
–disable-popup-blocking 禁用弹出拦截
–disable-javascript             禁用JavaScript
–disable-java                         禁用Java
–disable-plugins                   禁用插件
–disable-images                   禁用图像
-incognito                               启动进入隐身模式
–enable-udd-profiles        启用账户切换菜单
–proxy-pac-url                   使用pac代理 [via 1/2]
–lang=zh-CN                        设置语言为简体中文
–disk-cache-dir=”[PATH]“ 自定义缓存目录
–disk-cache-size=              自定义缓存最大值（单位byte）
–media-cache-size=         自定义多媒体缓存最大值（单位byte）
–bookmark-menu              在工具栏增加一个书签按钮
–enable-sync                       启用书签同步
将参数加在Chrome快捷方式的后面，加一个空格。像这样：C:\Users\zh\AppData\Local\Google\Chrome\Application\chrome.exe –user-data-dir=”D:\Chrome”
只有在加参数的快捷方式上启动Chrome，参数才起作用，外部调用chrome参数不起作用。
</pre>
