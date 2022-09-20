import{_ as o,o as d,c as i,a as e,d as t,r as a}from"./app.d4c08878.js";const s={},l=t(`<h1 id="_6-\u642D\u5EFAminikube" tabindex="-1"><a class="header-anchor" href="#_6-\u642D\u5EFAminikube" aria-hidden="true">#</a> 6.\u642D\u5EFAMinikube</h1><h2 id="_6-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_6-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 6.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 6.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 6.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 6.3.minikube\u4ECB\u7ECD
 6.4.\u7248\u672C\u8BF4\u660E
 6.5.\u5F00\u542FVmware\u865A\u62DF\u5316
 6.6.\u5B89\u88C5kubectl
 6.7.\u5B89\u88C5minikube
 6.8.\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker hub
 6.9.\u542F\u52A8minikube(\u4E0B\u9762\u4E24\u79CD\u542F\u52A8\u65B9\u5F0F\u4EFB\u9009\u4E00\u79CD)
 6.10.\u5B89\u88C5dashboard
 6.12.\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F
 6.12.minikube\u5E38\u7528\u547D\u4EE4
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_6-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_6-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter6.html" target="_blank">6.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),p=t(`<h2 id="_6-3-minikube\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_6-3-minikube\u4ECB\u7ECD" aria-hidden="true">#</a> 6.3.minikube\u4ECB\u7ECD</h2><pre><code>Minikube\u8FD9\u4E2A\u5DE5\u5177\u652F\u6301\u5728\u865A\u62DF\u673A\u4E0A\u8FD0\u884C\u4E00\u5957\u5355\u8282\u70B9\u7684k8s\u96C6\u7FA4
</code></pre><h2 id="_6-4-\u7248\u672C\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_6-4-\u7248\u672C\u8BF4\u660E" aria-hidden="true">#</a> 6.4.\u7248\u672C\u8BF4\u660E</h2><pre><code>minikube:1.2.6 kubectl:1.18.0
</code></pre><h2 id="_6-5-\u5F00\u542Fvmware\u865A\u62DF\u5316" tabindex="-1"><a class="header-anchor" href="#_6-5-\u5F00\u542Fvmware\u865A\u62DF\u5316" aria-hidden="true">#</a> 6.5.\u5F00\u542FVmware\u865A\u62DF\u5316</h2><pre><code>\u67E5\u770B\u662F\u5426\u652F\u6301\u865A\u62DF\u5316\uFF0C\u5F00\u59CB\u5B89\u88C5\u524D\uFF0C\u5148\u67E5\u770B\u672C\u5730\u673A\u5668\u662F\u5426\u652F\u6301\u865A\u62DF\u5316\uFF0C\u6709\u8F93\u51FA\u5C31\u652F\u6301
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>grep -E --color &#39;vmx|svm&#39; /proc/cpuinfo
</code></pre></div><pre><code>\u5F00\u542F\u865A\u62DF\u5316
Vmware Workstation -&gt;Centos 64\u53F3\u952E\u83DC\u5355 \u2014&gt; \u8BBE\u7F6E-&gt; \u5904\u7406\u5668 -&gt;\u52FE\u9009 \u865A\u62DF\u5316IntelVT-x/EPT \u6216 ADM-V/RVI(V)

\u8BBE\u7F6E\u5904\u7406\u5668\u548C\u5185\u5B58
\u8BBE\u7F6E\u5904\u7406\u5668\u6570\u91CF\u8BBE\u7F6E\u4E3A\u5927\u4E8E\u7B49\u4E8E2,\u5185\u5B58\u5927\u4E8E\u7B49\u4E8E2G
</code></pre><h2 id="_6-6-\u5B89\u88C5kubectl" tabindex="-1"><a class="header-anchor" href="#_6-6-\u5B89\u88C5kubectl" aria-hidden="true">#</a> 6.6.\u5B89\u88C5kubectl</h2><pre><code>\u7B80\u4ECB
kubectl \u662F\u4E00\u4E2A\u7528\u6765\u8DDF K8S \u96C6\u7FA4\u8FDB\u884C\u4EA4\u4E92\u7684\u547D\u4EE4\u884C\u5DE5\u5177
</code></pre><p><a href="https://storage.googleapis.com/kubernetes-release/release/v1.18.0/bin/linux/amd64/kubectl" target="_blank">\u5B98\u65B9\u4E0B\u8F7D\u5730\u5740</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://storage.googleapis.com/kubernetes-release/release/v1.18.0/bin/linux/amd64/kubectl
</code></pre></div><pre><code>\u521B\u5EFA\u5B58\u653Ekubectl\u5B89\u88C5\u5305\u6587\u4EF6\u5939-&gt;\u8FDB\u5165\u8BE5\u6587\u4EF6\u5939-&gt;\u4E0B\u8F7Dkubectl-&gt;\u8D4B\u4E88\u53EF\u8FD0\u884C\u6743\u9650,\u5E76\u653E\u5165/usr/local/bin/\u76EE\u5F55\u4E0B
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1660952069446:7cd40c9384cc107052a8e14acc0c01c15bfa5f41 \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/kubectl?version=latest&quot; \\
-o kubectl &amp;&amp;
chmod +x ./kubectl &amp;&amp; cp ./kubectl /usr/local/bin/kubectl
</code></pre></div><pre><code>\u67E5\u770Bkubectl\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl version --client
</code></pre></div><h2 id="_6-7-\u5B89\u88C5minikube" tabindex="-1"><a class="header-anchor" href="#_6-7-\u5B89\u88C5minikube" aria-hidden="true">#</a> 6.7.\u5B89\u88C5minikube</h2><p><a href="https://github.com/kubernetes/minikube/releases" target="_blank">\u5B98\u65B9\u7F51\u5740</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://github.com/kubernetes/minikube/releases
</code></pre></div><pre><code>\u521B\u5EFA\u5B58\u653Eminikube\u5B89\u88C5\u5305\u6587\u4EF6\u5939-&gt;\u8FDB\u5165\u8BE5\u6587\u4EF6\u5939-&gt;\u4E0B\u8F7Dminikube-&gt;\u8D4B\u4E88\u8FD0\u884C\u6743\u9650\u5E76\u590D\u5236\u5230/usr/local/bin/minikube
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1660950689210:1711c0580b6468ff8099f7987884c6f0c9ca2650 \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/minikube-linux-amd64?version=latest&quot; \\
-o minikube-linux-amd64 &amp;&amp;
chmod +x ./minikube-linux-amd64 &amp;&amp; cp ./minikube-linux-amd64 /usr/local/bin/minikube
</code></pre></div><pre><code>\u67E5\u770Bminikube\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube version
</code></pre></div><h2 id="_6-8-\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker-hub" tabindex="-1"><a class="header-anchor" href="#_6-8-\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker-hub" aria-hidden="true">#</a> 6.8.\u4F7F\u7528\u963F\u91CC\u4E91\u52A0\u901Fdocker hub</h2><pre><code>\u767B\u5F55\u963F\u91CC\u4E91docker\u76F8\u5173\u9875\u9762
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
</code></pre></div><pre><code>\u767B\u9646-&gt;\u5DE6\u4FA7\u83DC\u5355\u9009\u4E2D\u955C\u50CF\u52A0\u901F\u5668-&gt;\u67E5\u770B\u52A0\u901F\u955C\u50CF\u5730\u5740
\u6211\u7684\u52A0\u901F\u5730\u5740\u662F\uFF1Ahttps://ngviu28h.mirror.aliyuncs.com
</code></pre><h2 id="_6-9-\u542F\u52A8minikube-\u4E0B\u9762\u4E24\u79CD\u542F\u52A8\u65B9\u5F0F\u4EFB\u9009\u4E00\u79CD" tabindex="-1"><a class="header-anchor" href="#_6-9-\u542F\u52A8minikube-\u4E0B\u9762\u4E24\u79CD\u542F\u52A8\u65B9\u5F0F\u4EFB\u9009\u4E00\u79CD" aria-hidden="true">#</a> 6.9.\u542F\u52A8minikube(\u4E0B\u9762\u4E24\u79CD\u542F\u52A8\u65B9\u5F0F\u4EFB\u9009\u4E00\u79CD)</h2><h3 id="_6-9-1-\u4F7F\u7528docker\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE-\u9700\u8981\u5148\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_6-9-1-\u4F7F\u7528docker\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE-\u9700\u8981\u5148\u5B89\u88C5docker" aria-hidden="true">#</a> 6.9.1.\u4F7F\u7528docker\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE(\u9700\u8981\u5148\u5B89\u88C5Docker)</h3><pre><code>\u6CE8\u610F\u4E8B\u9879
\u542F\u52A8minikube\u4E4B\u524D\u9700\u8981\u5148\u542F\u52A8docker\uFF0C\u5982\u65E0\u6CD5\u542F\u52A8\u52A0\u4E0A--kubernetes-version=v\u5177\u4F53\u7248\u672C\u53F7

\u542F\u52A8minikube
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube start --driver=docker --force \\
	--image-mirror-country=&#39;cn&#39; \\
	--image-repository=&#39;registry.cn-hangzhou.aliyuncs.com/google_containers&#39; \\
	--registry-mirror=&#39;https://ngviu28h.mirror.aliyuncs.com&#39; \\
	--kubernetes-version=v1.23.8
</code></pre></div><h3 id="_6-9-2-\u4F7F\u7528virtualbox\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE-\u9700\u8981\u5148\u5B89\u88C5virtualbox" tabindex="-1"><a class="header-anchor" href="#_6-9-2-\u4F7F\u7528virtualbox\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE-\u9700\u8981\u5148\u5B89\u88C5virtualbox" aria-hidden="true">#</a> 6.9.2.\u4F7F\u7528virtualbox\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE(\u9700\u8981\u5148\u5B89\u88C5Virtualbox)</h3><p><a href="https://www.virtualbox.org/wiki/Downloads" target="_blank">\u5B98\u65B9\u7F51\u7AD9</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://www.virtualbox.org/wiki/Downloads
</code></pre></div><pre><code>\u4E0B\u8F7DCentos7\u7248VirtualBox
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /opt/software/package &amp;&amp;
wget https://download.virtualbox.org/virtualbox/6.1.36/VirtualBox-6.1-6.1.36_152435_el7-1.x86_64.rpm
</code></pre></div><pre><code>\u5B89\u88C5\u95EE\u9898\u89E3\u51B3(virtualbox\u5185\u6838\u65E0\u6CD5\u7F16\u8BD1)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo yum install gcc kernel kernel-devel -y
</code></pre></div><pre><code>\u91CD\u542F\u673A\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl reboot
</code></pre></div><pre><code>\u5B89\u88C5VirtualBox
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum install VirtualBox-6.1-6.1.34_150636_el7-2.x86_64.rpm -y
</code></pre></div><pre><code>\u8865\u5145\u5185\u5BB9\uFF1ACentos\u7248VirtualBox\u64CD\u4F5C\u547D\u4EE4
VBoxManage list runningvms //\u67E5\u770B\u673A\u5668\u5217\u8868
VBoxHeadless -startvm &quot;\u865A\u62DF\u673A\u540D&quot; //\u542F\u52A8\u865A\u62DF\u673A
\u6D4B\u8BD5VirtualBox\u662F\u5426\u5B89\u88C5\u6210\u529F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>virtualbox
</code></pre></div><pre><code>\u4F7F\u7528virtualbox\u4F5C\u4E3A\u865A\u62DF\u5316\u5F15\u64CE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube start --driver=virtualbox --force \\
	--image-mirror-country=&#39;cn&#39; \\
	--image-repository=&#39;registry.cn-hangzhou.aliyuncs.com/google_containers&#39; \\
	--registry-mirror=&#39;https://ngviu28h.mirror.aliyuncs.com&#39; \\
	--kubernetes-version=v1.23.8
</code></pre></div><h2 id="_6-10-\u5B89\u88C5dashboard" tabindex="-1"><a class="header-anchor" href="#_6-10-\u5B89\u88C5dashboard" aria-hidden="true">#</a> 6.10.\u5B89\u88C5dashboard</h2><pre><code>\u5B89\u88C5dashboard
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube dashboard
</code></pre></div><pre><code>\u8BBE\u7F6E\u5176\u4ED6\u673A\u5668\u4E5F\u53EF\u4EE5\u8BBF\u95EEdashboard
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl proxy --port=8001 --address=&#39;192.168.0.4&#39; --accept-hosts=&#39;^.*&#39; &amp;
</code></pre></div><pre><code>\u5F00\u653E\u8BBF\u95EE\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=8001/tcp --permanent &amp;&amp;
firewall-cmd --reload
</code></pre></div><pre><code>\u8BBF\u95EEkubectl dashboard
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.4:8001/api/v1/namespaces/kubernetes-dashboard/services/http:kubernetes-dashboard:/proxy/
</code></pre></div><h2 id="_6-12-\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#_6-12-\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F" aria-hidden="true">#</a> 6.12.\u90E8\u7F72\u6D4B\u8BD5\u7A0B\u5E8F</h2><pre><code>\u5F00\u59CB\u8FD0\u884C guestbook
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl create deployment guestbook --image=ibmcom/guestbook:v1
</code></pre></div><pre><code>\u67E5\u8BE2pod\u8FD0\u884C\u72B6\u6001\uFF0C\u72B6\u6001\u5E94\u8BE5\u663E\u793A\u4E3ARunning\u8868\u793Apod\u8FD0\u884C\u6210\u529F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl get pods
</code></pre></div><pre><code>\u5BF9\u5916\u66B4\u9732\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl port-forward --address 0.0.0.0 pod/guestbook-5bccb95cd6-dk6zh 7080:3000
</code></pre></div><pre><code>\u5F00\u653E\u8BBF\u95EE\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=7080/tcp --permanent &amp;&amp;
firewall-cmd --reload
</code></pre></div><pre><code>\u8BBF\u95EE\u670D\u52A1\uFF08\u4E3B\u8282\u70B9\u548C\u4E24\u4E2A\u5DE5\u4F5C\u8282\u70B9\u90FD\u53EF\u8BBF\u95EE\u5230\u8FD9\u4E2A\u670D\u52A1\uFF09
http://192.168.0.4:7080
</code></pre><h2 id="_6-12-minikube\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_6-12-minikube\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> 6.12.minikube\u5E38\u7528\u547D\u4EE4</h2><pre><code>\u67E5\u770Bminikube\u65E5\u5FD7
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube logs
</code></pre></div><pre><code>\u67E5\u770Bminikube\u72B6\u6001
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube status
</code></pre></div><pre><code>\u67E5\u770Bnode
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl get nodes
</code></pre></div><pre><code>\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684pod
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube kubectl -- get po -A
</code></pre></div><pre><code>\u67E5\u770B\u6240\u6709\u547D\u540D\u7A7A\u95F4\u7684pod
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl get pods --all-namespaces
</code></pre></div><pre><code>\u505C\u6B62\u96C6\u7FA4
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube stop
</code></pre></div><pre><code>\u6E05\u7A7A\u96C6\u7FA4
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube delete --all
</code></pre></div><pre><code>\u5378\u8F7Dminikube
\u505C\u6B62\u8FD0\u884C-&gt;\u6267\u884C\u5378\u8F7D\u547D\u4EE4-&gt;\u5220\u9664 ~/.minikube \u76EE\u5F55\u7F13\u5B58\u7684\u6587\u4EF6
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube stop &amp;&amp;
minikube delete &amp;&amp;
rm -rf ~/.minikube
</code></pre></div>`,82);function u(g,x){const r=a("Markmap"),n=a("ScrollIntoPageView"),c=a("HideSideBar");return d(),i("div",null,[l,e(r,{localtion:"/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter6.html",height:"500rem"}),p,e(n),e(c)])}var m=o(s,[["render",u],["__file","centos7-chapter-6.\u642D\u5EFAMinikube.html.vue"]]);export{m as default};
