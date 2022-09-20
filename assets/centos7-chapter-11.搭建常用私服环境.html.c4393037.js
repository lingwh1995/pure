import{_ as s,o,c as p,a as e,d as t,r as a}from"./app.d4c08878.js";const d={},l=t(`<h1 id="_11-\u642D\u5EFA\u5E38\u7528\u79C1\u670D\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_11-\u642D\u5EFA\u5E38\u7528\u79C1\u670D\u73AF\u5883" aria-hidden="true">#</a> 11.\u642D\u5EFA\u5E38\u7528\u79C1\u670D\u73AF\u5883</h1><h2 id="_11-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_11-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 11.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 11.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 11.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 11.3.\u642D\u5EFAyum\u79C1\u670D
 11.3.1.\u5B89\u88C5httpd
 11.3.2.\u5B89\u88C5yum\u76F8\u5173\u5DE5\u5177
 11.3.3.\u914D\u7F6E\u5207\u6362\u4F7F\u7528\u7684\u6E90\u4E3A\u79C1\u670D\u7684\u6E90
 11.3.4.\u91CD\u65B0\u751F\u6210\u6D4B\u8BD5\u673Ayum\u7F13\u5B58\u914D\u7F6E
 11.3.5.\u4F7F\u7528yum\u79C1\u670D\u6765\u4E0B\u8F7D\u8F6F\u4EF6
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_11-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_11-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter11.html" target="_blank">11.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),i=t(`<h2 id="_11-3-\u642D\u5EFAyum\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_11-3-\u642D\u5EFAyum\u79C1\u670D" aria-hidden="true">#</a> 11.3.\u642D\u5EFAyum\u79C1\u670D</h2><h2 id="_11-3-1-\u5B89\u88C5httpd" tabindex="-1"><a class="header-anchor" href="#_11-3-1-\u5B89\u88C5httpd" aria-hidden="true">#</a> 11.3.1.\u5B89\u88C5httpd</h2><pre><code>\u914D\u7F6E\u963F\u91CC\u4E91\u6E90
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E.html#_2-7-\u914D\u7F6Eyml\u6E90" target="_blank">\u914D\u7F6Eyml\u6E90</a></p><pre><code>\u5B89\u88C5nginx\u6216apache\uFF0C\u6B64\u5904\u4EE5apache\u4E3A\u4F8B
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum install httpd
</code></pre></div><pre><code>\u68C0\u6D4B\u662F\u5426\u5B89\u88C5\u6210\u529F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>rpm -ql httpd
</code></pre></div><pre><code>\u6216
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>curl http://127.0.0.1
</code></pre></div><pre><code>\u542F\u52A8apache
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>/bin/systemctl start httpd.service
</code></pre></div><pre><code>\u914D\u7F6E\u670D\u52A1\u81EA\u542F\u52A8
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>chkconfig httpd on
</code></pre></div><pre><code>\u8BBF\u95EEapache
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.9
</code></pre></div><pre><code>\u8BBF\u95EE\u5931\u8D25\u89E3\u51B3
\u5982\u65E0\u6CD5\u8BBF\u95EE\u6210\u529F\uFF0C\u53EF\u5F00\u653E\u7AEF\u53E3\u6216\u5173\u95ED\u9632\u706B\u5899
\u67E5\u8BE2\u670D\u52A1\u5668\u7684\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>find / -name httpd.conf
</code></pre></div><pre><code>\u5378\u8F7Dhttpd
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y remove httpd
</code></pre></div><h2 id="_11-3-2-\u5B89\u88C5yum\u76F8\u5173\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_11-3-2-\u5B89\u88C5yum\u76F8\u5173\u5DE5\u5177" aria-hidden="true">#</a> 11.3.2.\u5B89\u88C5yum\u76F8\u5173\u5DE5\u5177</h2><pre><code>\u5B89\u88C5createrepo \u548C reposync
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install createrepo reposync
</code></pre></div><pre><code>\u5B89\u88C5 yum-utils
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum install yum-utils
</code></pre></div><pre><code>\u4E0B\u8F7Drpm\u5305
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>reposync --repoid=base &amp;&amp;
reposync --repoid=updates &amp;&amp;
reposync --repoid=extras &amp;&amp;
reposync --repoid=epel
</code></pre></div><pre><code>\u521B\u5EFA\u5B58\u653E\u5305\u7684\u76EE\u5F55
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /var/www/html/base/ &amp;&amp;
mkdir -p /var/www/html/updates/ &amp;&amp;
mkdir -p /var/www/html/extras/ &amp;&amp;
mkdir -p /var/www/html/epel/
</code></pre></div><pre><code>\u751F\u6210\u5305\u5BF9\u5E94\u7684\u6E90\u6570\u636E\uFF0C\u5BF9\u4E0B\u8F7D\u7684\u5404\u4E2A\u76EE\u5F55\uFF0C\u9700\u8981\u751F\u6210\u5305\u7684\u6E90\u6570\u636E\uFF0C\u6BD4\u5982 base \u76EE\u5F55\u6E90\u6570\u636E\u751F\u6210\u547D\u4EE4\u5982\u4E0B
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>createrepo --update /var/www/html/base/ &amp;&amp;
createrepo --update /var/www/html/updates/ &amp;&amp;
createrepo --update /var/www/html/extras/ &amp;&amp;
createrepo --update /var/www/html/epel/
</code></pre></div><h2 id="_11-3-3-\u914D\u7F6E\u5207\u6362\u4F7F\u7528\u7684\u6E90\u4E3A\u79C1\u670D\u7684\u6E90" tabindex="-1"><a class="header-anchor" href="#_11-3-3-\u914D\u7F6E\u5207\u6362\u4F7F\u7528\u7684\u6E90\u4E3A\u79C1\u670D\u7684\u6E90" aria-hidden="true">#</a> 11.3.3.\u914D\u7F6E\u5207\u6362\u4F7F\u7528\u7684\u6E90\u4E3A\u79C1\u670D\u7684\u6E90</h2><div class="language-text ext-text"><pre class="language-text"><code>cd /etc/yum.repos.d/ &amp;&amp;
cp CentOS-Base.repo CentOS-Base.bak.2022
</code></pre></div><p>\u4FEE\u6539\u963F\u91CC\u6E90\u4E3A\u672C\u5730\u6E90</p><div class="language-text ext-text"><pre class="language-text"><code>vi CentOS-Base.repo
</code></pre></div><pre><code>\u6CE8\u91CA\u6389\u539F\u6709\u7684\u914D\u7F6E\uFF0C\u6DFB\u52A0\u79C1\u670D\u914D\u7F6E\uFF0C\u53C2\u8003\u5982\u4E0B\uFF1A

[base]
name=CentOS-$releasever - Base - mirrors.aliyun.com
failovermethod=priority
baseurl=http://192.168.220.100/base/
#baseurl=http://mirrors.aliyun.com/centos/$releasever/os/$basearch/
#        http://mirrors.aliyuncs.com/centos/$releasever/os/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&amp;arch=$basearch&amp;repo=os
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-6

#released updates 
[updates]
name=CentOS-$releasever - Updates - mirrors.aliyun.com
failovermethod=priority
baseurl=http://192.168.220.100/updates/
#baseurl=http://mirrors.aliyun.com/centos/$releasever/updates/$basearch/
#        http://mirrors.aliyuncs.com/centos/$releasever/updates/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&amp;arch=$basearch&amp;repo=updates
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-6

#additional packages that may be useful
[extras]
name=CentOS-$releasever - Extras - mirrors.aliyun.com
failovermethod=priority
baseurl=http://192.168.220.100/extras/
#baseurl=http://mirrors.aliyun.com/centos/$releasever/extras/$basearch/
#        http://mirrors.aliyuncs.com/centos/$releasever/extras/$basearch/
#mirrorlist=http://mirrorlist.centos.org/?release=$releasever&amp;arch=$basearch&amp;repo=extras
gpgcheck=1
gpgkey=http://mirrors.aliyun.com/centos/RPM-GPG-KEY-CentOS-6
</code></pre><h2 id="_11-3-4-\u91CD\u65B0\u751F\u6210\u6D4B\u8BD5\u673Ayum\u7F13\u5B58\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_11-3-4-\u91CD\u65B0\u751F\u6210\u6D4B\u8BD5\u673Ayum\u7F13\u5B58\u914D\u7F6E" aria-hidden="true">#</a> 11.3.4.\u91CD\u65B0\u751F\u6210\u6D4B\u8BD5\u673Ayum\u7F13\u5B58\u914D\u7F6E</h2><pre><code>\u5728\u6D4B\u8BD5\u673A\u5668\u4E0A\uFF0C\u5148\u6E05\u7406\u5DF2\u6709\u7F13\u5B58\uFF0C\u518D\u91CD\u65B0\u751F\u6210 yum \u6E90\u7F13\u5B58\u914D\u7F6E\uFF0C\u5C06\u8F6F\u4EF6\u5305\u4FE1\u606F\u7F13\u5B58\u672C\u673A\uFF0C\u63D0\u9AD8\u641C\u7D22\u5B89\u88C5\u6548\u7387\u3002
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum clean all &amp;&amp;
yum makecache
</code></pre></div><h2 id="_11-3-5-\u4F7F\u7528yum\u79C1\u670D\u6765\u4E0B\u8F7D\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_11-3-5-\u4F7F\u7528yum\u79C1\u670D\u6765\u4E0B\u8F7D\u8F6F\u4EF6" aria-hidden="true">#</a> 11.3.5.\u4F7F\u7528yum\u79C1\u670D\u6765\u4E0B\u8F7D\u8F6F\u4EF6</h2><pre><code>\u5728\u6D4B\u8BD5\u673A\u4E0A\u4F7F\u7528yum install xxx\u6765\u5B89\u88C5\u5305
</code></pre>`,41);function h(m,u){const r=a("Markmap"),n=a("ScrollIntoPageView"),c=a("HideSideBar");return o(),p("div",null,[l,e(r,{localtion:"/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter11.html",height:"500rem"}),i,e(n),e(c)])}var x=s(d,[["render",h],["__file","centos7-chapter-11.\u642D\u5EFA\u5E38\u7528\u79C1\u670D\u73AF\u5883.html.vue"]]);export{x as default};
