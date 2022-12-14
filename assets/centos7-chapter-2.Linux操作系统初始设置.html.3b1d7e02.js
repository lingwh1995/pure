import{_ as d,o as s,c as o,a as e,d as a,r as t}from"./app.d4c08878.js";const l={},i=a(`<h1 id="_2-linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E" aria-hidden="true">#</a> 2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E</h1><h2 id="_2-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 2.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 2.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 2.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 2.3.\u914D\u7F6E\u9759\u6001IP\u5730\u5740
 2.4.\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898
 2.5.\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF
 2.6.\u5B89\u88C5curl
 2.7.\u914D\u7F6Eyml\u6E90
 2.7.\u540C\u6B65\u65F6\u95F4
 2.8.\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_2-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_2-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter2.html" target="_blank">2.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),p=a(`<h2 id="_2-3-\u914D\u7F6E\u9759\u6001ip\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#_2-3-\u914D\u7F6E\u9759\u6001ip\u5730\u5740" aria-hidden="true">#</a> 2.3.\u914D\u7F6E\u9759\u6001IP\u5730\u5740</h2><pre><code>\u4FEE\u6539\u7F51\u7EDC\u914D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vi /etc/sysconfig/network-scripts/ifcfg-ens32(\u6700\u540E\u4E00\u4E2A\u4E3A\u7F51\u5361\u540D\u79F0)
</code></pre></div><pre><code>\u4FEE\u6539\u540E\u5185\u5BB9\u5982\u4E0B
bootproto=static
onboot=yes
#\u5728\u6700\u540E\u52A0\u4E0A\u51E0\u884C\uFF0CIP\u5730\u5740\u3001\u5B50\u7F51\u63A9\u7801\u3001\u7F51\u5173\u3001dns\u670D\u52A1\u5668\uFF0C\u6CE8\u610F\uFF1A\u548C\u7F51\u5173IP\u5904\u4E8E\u540C\u4E00\u4E2A\u7F51\u6BB5
IPADDR=192.168.0.4
NETMASK=255.255.255.0
#\u548C\u4E0A\u9762\u7F51\u5173IP\u4FDD\u6301 \u4E00\u81F4
GATEWAY=192.168.0.2
DNS1=8.8.8.8
DNS2=8.8.4.4

\u91CD\u542F\u7F51\u7EDC
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl restart network
</code></pre></div><h2 id="_2-4-\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-4-\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898" aria-hidden="true">#</a> 2.4.\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898</h2><pre><code>\u4FEE\u6539sshd\u914D\u7F6E\u6587\u4EF6
\u8BF4\u660E\uFF1Asshd_config\u91CC\u9762\u7684UseDNS=no\u3010\u539F\u672C\u4E3Ayes\u3011
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim /etc/ssh/sshd_config
</code></pre></div><pre><code>\u91CD\u542Fssh\u670D\u52A1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl restart sshd.service
</code></pre></div><h2 id="_2-5-\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#_2-5-\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> 2.5.\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF</h2><div class="language-text ext-text"><pre class="language-text"><code>echo &quot;export LC_ALL=en_US.UTF-8&quot;  &gt;&gt;  /etc/profile &amp;&amp;
source /etc/profile
</code></pre></div><h2 id="_2-6-\u5B89\u88C5curl" tabindex="-1"><a class="header-anchor" href="#_2-6-\u5B89\u88C5curl" aria-hidden="true">#</a> 2.6.\u5B89\u88C5curl</h2><pre><code>\u540E\u9762\u7684\u64CD\u4F5C\u9700\u8981curl\uFF0C\u6240\u4EE5\u9996\u5148\u5B89\u88C5curl
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install curl
</code></pre></div><h2 id="_2-7-\u914D\u7F6Eyml\u6E90" tabindex="-1"><a class="header-anchor" href="#_2-7-\u914D\u7F6Eyml\u6E90" aria-hidden="true">#</a> 2.7.\u914D\u7F6Eyml\u6E90</h2><pre><code>\u4E0B\u8F7D\u963F\u91CC\u6E90\uFF0C\u5E76\u4E0A\u4F20\u5230/opt/software/package
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>curl http://mirrors.aliyun.com/repo/Centos-7.repo -o Centos-7.repo
</code></pre></div><pre><code>\u8FDB\u5165/etc/yum.repos.d\u76EE\u5F55\u4E2D\uFF0C\u5907\u4EFDCentOS-Base.repo
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /etc/yum.repos.d &amp;&amp; cp CentOS-Base.repo CentOS-Base.repo.bak
</code></pre></div><pre><code>\u590D\u5236/opt/software/package/Centos-7.repo\u5230\u5F53\u524D\u76EE\u5F55\u5E76\u91CD\u547D\u540D\u4E3ACentOS-Base.repo
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cp /opt/software/package/Centos-7.repo /CentOS-Base.repo
</code></pre></div><pre><code>\u751F\u6210yum\u6E90\u7F13\u5B58\u5E76\u66F4\u65B0yum\u6E90
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum makecache &amp;&amp; yum update
</code></pre></div><p>\u6267\u884C\u4E0B\u9762\u7684\u547D\u4EE4\u8BBE\u7F6E\u65F6\u533A</p><h2 id="_2-7-\u540C\u6B65\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_2-7-\u540C\u6B65\u65F6\u95F4" aria-hidden="true">#</a> 2.7.\u540C\u6B65\u65F6\u95F4</h2><pre><code>\u8BBE\u7F6E\u786C\u4EF6\u65F6\u949F\u8C03\u6574\u4E3A\u4E0E\u672C\u5730\u65F6\u949F\u4E00\u81F4\u5E76\u8BBE\u7F6E\u65F6\u533A\u4E3A\u4E0A\u6D77
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>timedatectl set-local-rtc 1 &amp;&amp;
timedatectl set-timezone Asia/Shanghai
</code></pre></div><pre><code>\u4F7F\u7528ntpdate\u540C\u6B65\u65F6\u95F4
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install ntpdate &amp;&amp;
ntpdate -u  pool.ntp.org
</code></pre></div><h2 id="_2-8-\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-8-\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6" aria-hidden="true">#</a> 2.8.\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6</h2><h3 id="_2-8-1-\u624B\u52A8\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-8-1-\u624B\u52A8\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u8F6F\u4EF6" aria-hidden="true">#</a> 2.8.1.\u624B\u52A8\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u8F6F\u4EF6</h3><pre><code>\u5B89\u88C5vim
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install vim*
</code></pre></div><pre><code>\u914D\u7F6Evim
set nu         # \u8BBE\u7F6E\u663E\u793A\u884C\u53F7
set showmode   #\u8BBE\u7F6E\u5728\u547D\u4EE4\u884C\u754C\u9762\u6700\u4E0B\u9762\u663E\u793A\u5F53\u524D\u6A21\u5F0F\u7B49
set ruler      #\u5728\u53F3\u4E0B\u89D2\u663E\u793A\u5149\u6807\u6240\u5728\u7684\u884C\u6570\u7B49\u4FE1\u606F
set autoindent #\u8BBE\u7F6E\u6BCF\u6B21\u5355\u51FBEnter\u952E\u540E\uFF0C\u5149\u6807\u79FB\u52A8\u5230\u4E0B\u4E00\u884C\u65F6\u4E0E\u4E0A\u4E00\u884C\u7684\u8D77\u59CB\u5B57\u7B26\u5BF9\u9F50
syntax on      #\u5373\u8BBE\u7F6E\u8BED\u6CD5\u68C0\u6D4B\uFF0C\u5F53\u7F16\u8F91C\u6216\u8005Shell\u811A\u672C\u65F6\uFF0C\u5173\u952E\u5B57\u4F1A\u7528\u7279\u6B8A\u989C\u8272\u663E\u793A

wget
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install wget
</code></pre></div><pre><code>telnet
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install telnet
yum -y install telnet-server
</code></pre></div><h3 id="_2-8-2-\u4F7F\u7528\u811A\u672C\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-8-2-\u4F7F\u7528\u811A\u672C\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" aria-hidden="true">#</a> 2.8.2.\u4F7F\u7528\u811A\u672C\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6</h3><pre><code>\u811A\u672C\u4ECB\u7ECD
\u8FD9\u4E2A\u811A\u672C\u4E2D\u5305\u542B\u4E86centos\u8BBE\u7F6Eyum\u6E90\u5E76\u4E14\u5B89\u88C5\u4E86\u4E00\u4E9B\u7684\u5E38\u7528\u8F6F\u4EF6\uFF0C\u5982vim\u3001git\u3001wget\u3001curl\u3001\u7B49\uFF0C\u4F1A\u5B9A\u65F6\u66F4\u65B0

\u5B89\u88C5curl
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install curl
</code></pre></div><pre><code>\u4E0B\u8F7D\u811A\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>curl https://gitee.com/lingwh1995/config-center/raw/master/centos/centos7/centos7-init.sh -o centos7-init.sh
</code></pre></div><pre><code>\u8D4B\u4E88\u53EF\u8FD0\u884C\u6743\u9650\u5E76\u8FD0\u884C\u8BE5\u811A\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>chmod +x centos7-init.sh &amp;&amp;
./centos7-init.sh
</code></pre></div>`,45);function h(u,x){const n=t("Markmap"),c=t("ScrollIntoPageView"),r=t("HideSideBar");return s(),o("div",null,[i,e(n,{localtion:"/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter2.html",height:"500rem"}),p,e(c),e(r)])}var m=d(l,[["render",h],["__file","centos7-chapter-2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E.html.vue"]]);export{m as default};
