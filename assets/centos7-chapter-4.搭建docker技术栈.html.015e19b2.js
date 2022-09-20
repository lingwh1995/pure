import{_ as d,o as n,c as s,a as e,d as r,r as t}from"./app.d4c08878.js";const l={},p=r(`<h1 id="_4-\u642D\u5EFAdocker\u6280\u672F\u6808" tabindex="-1"><a class="header-anchor" href="#_4-\u642D\u5EFAdocker\u6280\u672F\u6808" aria-hidden="true">#</a> 4.\u642D\u5EFAdocker\u6280\u672F\u6808</h1><h2 id="_4-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_4-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 4.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 4.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 4.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 4.3.\u5B89\u88C5docker
 4.4.docker\u542F\u52A8\u6545\u969C\u89E3\u51B3
 4.5.docker\u5BB9\u5668\u53EF\u89C6\u5316
 4.6.\u642D\u5EFAdocke\u79C1\u670D
 4.7.docker\u5B98\u65B9\u79C1\u670D\u53EF\u89C6\u5316
 4.8.\u5236\u4F5Cdocker\u955C\u50CF\u5E76\u4E0A\u4F20\u5230\u79C1\u670D
 4.9.Docker\u4E2D\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_4-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_4-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter4.html" target="_blank">4.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),i=r(`<h2 id="_4-3-\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_4-3-\u5B89\u88C5docker" aria-hidden="true">#</a> 4.3.\u5B89\u88C5docker</h2><h3 id="_4-3-1-\u5728\u7EBF\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_4-3-1-\u5728\u7EBF\u5B89\u88C5docker" aria-hidden="true">#</a> 4.3.1.\u5728\u7EBF\u5B89\u88C5docker</h3><pre><code>\u4EE5root\u8EAB\u4EFD\u66F4\u65B0yum\uFF0C\u5C06yum\u5305\u66F4\u65B0\u5230\u6700\u65B0
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y update
</code></pre></div><pre><code>\u67E5\u770B\u5F53\u524D\u5B89\u88C5\u7684docker\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum list installed | grep docker
</code></pre></div><pre><code>containerd.io.x86_64 	           1.6.6-3.1.el7                  @docker-ce-stable
docker-ce.x86_64                   3:20.10.17-3.el7               @docker-ce-stable
docker-ce-cli.x86_64               1:20.10.17-3.el7               @docker-ce-stable
docker-ce-rootless-extras.x86_64   20.10.17-3.el7                 @docker-ce-stable
docker-scan-plugin.x86_64          0.17.0-3.el7                   @docker-ce-stable

\u5378\u8F7D\u65E7\u7248\u672Cdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y remove docker-ce.x86_64
yum -y remove docker-scan-plugin.x86_64
yum -y remove docker-ce-cli.x86_64
yum -y remove docker-ce-rootless-extras.x86_64_64
yum -y remove containerd.io.x86_64
</code></pre></div><pre><code>\u5B89\u88C5\u9700\u8981\u7684\u8F6F\u4EF6\u5305
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum install -y yum-utils device-mapper-persistent-data lvm2
</code></pre></div><pre><code>\u914D\u7F6E\u4F7F\u7528\u963F\u91CC\u7684yum\u6E90
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre></div><pre><code>\u67E5\u770B\u963F\u91CC\u4E91\u4ED3\u5E93\u4E2D\u6240\u6709docker\u7248\u672C\uFF0C\u5E76\u9009\u62E9\u7279\u5B9A\u7248\u672C\u5B89\u88C5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum list docker-ce --showduplicates | sort -r
</code></pre></div><pre><code>\u5B89\u88C5\u6700\u65B0\u7248\u672Cdocker-ce(docker\u793E\u533A\u3001ee\u4F01\u4E1A\u7248 ce\u4E3A\u793E\u533A\u7248)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install docker-ce
</code></pre></div><pre><code>\u67E5\u770B\u5B89\u88C5\u7684docker\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker version
</code></pre></div><pre><code>\u7ED9docker\u914D\u7F6E\u56FD\u5185\u955C\u50CF\u6E90
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
    &quot;registry-mirrors&quot;: [
        &quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://registry.docker-cn.com&quot;
    ]
}
EOF
</code></pre></div><pre><code>daemon.json\u914D\u7F6E\u8BF4\u660E
registry-mirrors\uFF1Adocker\u56FD\u5185\u955C\u50CF\u6E90\u5730\u5740

\u5237\u65B0daemon.json\u914D\u7F6E\u542F\u52A8docker\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u81EA\u542F\u52A8
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl status docker
</code></pre></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl status docker
</code></pre></div><pre><code>\u6D4B\u8BD5docker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run hello-world
</code></pre></div><pre><code>\u5B89\u88C5\u6210\u529F\u5219\u8FD4\u56DE\u4E0B\u9762\u4FE1\u606F
[root@localhost ~]# docker run hello-world
Unable to find image &#39;hello-world:latest&#39; locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:2498fce14358aa50ead0cc6c19990fc6ff866ce72aeb5546e1d59caac3d0d60f
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
	(amd64)
3. The Docker daemon created a new container from that image which runs the
	executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
	to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
https://hub.docker.com/

For more examples and ideas, visit:
https://docs.docker.com/get-started/
</code></pre><h3 id="_4-3-2-\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5docker" tabindex="-1"><a class="header-anchor" href="#_4-3-2-\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5docker" aria-hidden="true">#</a> 4.3.2.\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5docker</h3><pre><code>\u521B\u5EFA\u5B58\u653Edocker\u5B89\u88C5\u5305\u7684\u76EE\u5F55-&gt;\u5207\u6362\u76EE\u5F55-&gt;\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Ddocker\u4E8C\u8FDB\u5236\u5B89\u88C5\u5305-&gt;\u89E3\u538B\u5230/usr/bin/
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p  /opt/software/package/ &amp;&amp;
cd /opt/software/package/ &amp;&amp;
curl -fL -u software-1659095503164:3316a6a052e6f17880d37a00d38454342aceffdf \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/docker-20.10.9.tgz?version=latest&quot; \\
-o docker-20.10.9.tgz &amp;&amp;
tar -xf docker-20.10.9.tgz &amp;&amp; mv docker/* /usr/bin/
</code></pre></div><pre><code>\u914D\u7F6Edocker\u79C1\u6709\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
    &quot;registry-mirrors&quot;: [
        &quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://registry.docker-cn.com&quot;
    ]
}
EOF
</code></pre></div><pre><code>\u914D\u7F6Edocker.service\u6587\u4EF6
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat &gt; /usr/lib/systemd/system/docker.service &lt;&lt; EOF
[Unit]
Description=Docker Application Container Engine
Documentation=https://docs.docker.com
After=network-online.target firewalld.service
Wants=network-online.target

[Service]
Type=notify
ExecStart=/usr/bin/dockerd
ExecReload=/bin/kill -s HUP $MAINPID
LimitNOFILE=infinity
LimitNPROC=infinity
TimeoutStartSec=0
Delegate=yes
KillMode=process
Restart=on-failure
StartLimitBurst=3
StartLimitInterval=60s

[Install]
WantedBy=multi-user.target
EOF
</code></pre></div><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6\u540E\u542F\u52A8\u4E09\u53F0\u673A\u5668\u4E0A\u7684docker\u5E76\u8BBE\u7F6E\u4E3A\u5F00\u673A\u542F\u52A8
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl start docker &amp;&amp;
systemctl enable docker
</code></pre></div><pre><code>\u67E5\u770B\u542F\u52A8\u72B6\u6001
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl status docker
</code></pre></div><pre><code>\u542F\u52A8\u6545\u969C\u6392\u67E5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl status docker
</code></pre></div><pre><code>\u6D4B\u8BD5docker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run hello-world
</code></pre></div><pre><code>\u5B89\u88C5\u6210\u529F\u5219\u8FD4\u56DE\u4E0B\u9762\u4FE1\u606F
[root@localhost ~]# docker run hello-world
Unable to find image &#39;hello-world:latest&#39; locally
latest: Pulling from library/hello-world
2db29710123e: Pull complete
Digest: sha256:2498fce14358aa50ead0cc6c19990fc6ff866ce72aeb5546e1d59caac3d0d60f
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
1. The Docker client contacted the Docker daemon.
2. The Docker daemon pulled the &quot;hello-world&quot; image from the Docker Hub.
	(amd64)
3. The Docker daemon created a new container from that image which runs the
	executable that produces the output you are currently reading.
4. The Docker daemon streamed that output to the Docker client, which sent it
	to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
$ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
https://hub.docker.com/

For more examples and ideas, visit:
https://docs.docker.com/get-started/
</code></pre><h2 id="_4-4-docker\u542F\u52A8\u6545\u969C\u89E3\u51B3" tabindex="-1"><a class="header-anchor" href="#_4-4-docker\u542F\u52A8\u6545\u969C\u89E3\u51B3" aria-hidden="true">#</a> 4.4.docker\u542F\u52A8\u6545\u969C\u89E3\u51B3</h2><pre><code>\u9519\u8BEF\u4FE1\u606F
Job for docker.service failed because the control process exited with error code. 
See &quot;systemctl status docker.service&quot; and &quot;journalctl -xe&quot; for details.

\u89E3\u51B3\u65B9\u5F0F1\uFF1A\u4F7Fdocker\u4E0Efirewall\u5171\u5B58
\u5173\u95EDdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl stop docker
</code></pre></div><pre><code>\u8BBE\u7F6Efirewall\u4E0D\u62E6\u622Adocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=trusted --remove-interface=docker0 --permanent
</code></pre></div><pre><code>\u91CD\u65B0\u52A0\u8F7D\u9632\u706B\u5899\u914D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --reload
</code></pre></div><pre><code>\u91CD\u65B0\u542F\u52A8\u9632\u706B\u5899
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl restart firewalld
</code></pre></div><pre><code>\u91CD\u65B0\u542F\u52A8docker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl restart docker
</code></pre></div><pre><code>\u89E3\u51B3\u65B9\u5F0F2\uFF1A\u68C0\u67E5daemon.json\u914D\u7F6E\u662F\u5426\u6B63\u786E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat /etc/docker/daemon.json
</code></pre></div><pre><code>\u770B\u914D\u7F6E\u7684registry-mirrors\u662F\u5426\u6B63\u786E\uFF0C\u5982\u79C1\u670D\u524D\u662F\u5426\u5FD8\u8BB0\u4E86\u52A0http://
</code></pre><h2 id="_4-5-docker\u5BB9\u5668\u53EF\u89C6\u5316" tabindex="-1"><a class="header-anchor" href="#_4-5-docker\u5BB9\u5668\u53EF\u89C6\u5316" aria-hidden="true">#</a> 4.5.docker\u5BB9\u5668\u53EF\u89C6\u5316</h2><pre><code>\u67E5\u8BE2\u5F53\u524D\u6709\u54EA\u4E9Bportainer\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker search portainer
</code></pre></div><pre><code>\u4E0B\u8F7Dportainer\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker pull portainer/portainer:1.24.2
</code></pre></div><pre><code>\u542F\u52A8\u5355\u673A\u7248portainer(\u9488\u5BF9\u5355\u673A\u7248docker)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -d --name portainer \\
	-p 9000:9000 \\
	--restart=always \\
	-v /var/run/docker.sock:/var/run/docker.sock \\
	--privileged=true \\
	portainer/portainer:1.24.2
</code></pre></div><pre><code>\u767B\u5F55portainer
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.4:9000/
</code></pre></div><pre><code>\u7528\u6237\u540D/\u5BC6\u7801\uFF1Aadmin/portainer
\u5355\u673A\u7248\u9009\u62E9local\u5373\u53EF
</code></pre><h2 id="_4-6-\u642D\u5EFAdocke\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_4-6-\u642D\u5EFAdocke\u79C1\u670D" aria-hidden="true">#</a> 4.6.\u642D\u5EFAdocke\u79C1\u670D</h2><h3 id="_4-6-1-\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D-\u4E0D\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#_4-6-1-\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D-\u4E0D\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C" aria-hidden="true">#</a> 4.6.1.\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D\uFF08\u4E0D\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C\uFF09</h3><pre><code>\u62C9\u53D6\u4ED3\u5E93\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker pull registry
</code></pre></div><pre><code>\u542F\u52A8\u6CE8\u518C\u4ED3\u5E93\u670D\u52A1\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -d --name registry_official \\
	-p 5000:5000 \\
	--restart=always \\
	-v /registry/public/repos:/var/lib/registry \\
	--privileged=true \\
	registry
</code></pre></div><pre><code>\u914D\u7F6E\u79C1\u670D\u5730\u5740\u548C\u955C\u50CF\u6E90\u5730\u5740\u5E76\u4E14\u5C06\u79C1\u670D\u5730\u5740\u52A0\u5165\u5230\u955C\u50CF\u6E90\u5217\u8868\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u4ECE\u79C1\u670D\u4E2D\u62C9\u53D6\u955C\u50CF\u4E86

\u7ED9docker\u914D\u7F6E\u79C1\u670D
\u5177\u4F53\u7684\u79C1\u670D\u8BBF\u95EE\u5730\u5740\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u90E8\u7F72,\u8FD9\u91CC\u914D\u7F6E\u7684\u662Fhttp://192.168.0.4:5000
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{
    &quot;insecure-registries&quot;:[&quot;192.168.0.4:5000&quot;,&quot;192.168.0.4:5001&quot;],
    &quot;registry-mirrors&quot;: [
        &quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://registry.docker-cn.com&quot;
    ]
}
</code></pre></div><pre><code>\u6216
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo mkdir -p /etc/docker &amp;&amp;
sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;
{
    &quot;insecure-registries&quot;:[&quot;192.168.0.4:5000&quot;,&quot;192.168.0.4:5001&quot;],
    &quot;registry-mirrors&quot;: [
        &quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://registry.docker-cn.com&quot;
    ]
}
EOF
</code></pre></div><pre><code>daemon.json\u914D\u7F6E\u8BF4\u660E
insecure-registries\uFF1Adocker\u4FE1\u4EFB\u7684\u79C1\u670D\u5730\u5740
registry-mirrors\uFF1Adocker\u56FD\u5185\u955C\u50CF\u6E90\u5730\u5740

daemon.json\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879\uFF1A\u628A\u79C1\u670D\u914D\u7F6E\u5230registry-mirrors\u65F6\uFF0C\u4E00\u5B9A\u8981\u6B63\u786E\u7684\u52A0\u4E0A http://\u524D\u7F00\uFF1A
\u6B63\u786E\u683C\u5F0F: http://192.168.0.4:5000
\u9519\u8BEF\u683C\u5F0F: 192.168.0.4:5001

\u653E\u884C5000\u7AEF\u53E3\u5E76\u4FDD\u8BC15000\u7AEF\u53E3\u786E\u5B9E\u88AB\u653E\u5F00
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --permanent --add-port=5000/tcp &amp;&amp;
firewall-cmd --reload
</code></pre></div><pre><code>\u5237\u65B0daemon\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre></div><pre><code>\u9A8C\u8BC1\u4ED3\u5E93\u662F\u5426\u642D\u5EFA\u6210\u529F
\u8BBF\u95EE:http://192.168.0.4:5000/v2/_catalog\uFF0C\u770B\u5230{&quot;repositories&quot;:[]}\u8868\u793A\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA\u6210\u529F\u4E14\u5185\u5BB9\u4E3A\u7A7A

\u5F7B\u5E95\u5220\u9664\u79C1\u670D\u4E2D\u7684\u955C\u50CF:\u6CE8\u610F\u8FD9\u4E2A\u8DEF\u5F84\u662F\u8981\u770Bregistry\u5177\u4F53\u6302\u8F7D\u5230linux\u4E0A\u4EC0\u4E48\u4F4D\u7F6E\u7684
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
</code></pre></div><h3 id="_4-6-2-\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D-\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C" tabindex="-1"><a class="header-anchor" href="#_4-6-2-\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D-\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C" aria-hidden="true">#</a> 4.6.2.\u642D\u5EFAdocke\u5B98\u65B9\u79C1\u670D(\u5E26\u6709\u7528\u6237\u540D\u548C\u5BC6\u7801\u6821\u9A8C)</h3><pre><code>\u62C9\u53D6\u4ED3\u5E93\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker pull registry
</code></pre></div><pre><code>\u52A0\u5BC6\u8BA4\u8BC1\u914D\u7F6E
\u521B\u5EFA\u5B58\u653E\u52A0\u5BC6\u540E\u7528\u6237\u4FE1\u606F\u7684\u7528\u6237\u540D\u5BC6\u7801
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /opt/docker/auth/
</code></pre></div><pre><code>\u5B89\u88C5httpd\u5DE5\u5177
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install httpd
</code></pre></div><pre><code>\u751F\u6210\u5E26\u6709\u52A0\u5BC6\u540E\u7528\u6237\u4FE1\u606F\u7684\u7528\u6237\u540D\u5BC6\u7801
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>htpasswd -Bbn docker 123456  &gt;/opt/docker/auth/htpasswd
</code></pre></div><pre><code>\u542F\u52A8\u6CE8\u518C\u4ED3\u5E93\u670D\u52A1\u5668(-p:\u7B2C\u4E00\u4E2A5000\u662F\u672C\u5730\u673A\u5668\u7AEF\u53E3,\u7B2C\u4E8C\u4E2A5000\u662Fdocker\u5BB9\u5668\u4E2D\u7AEF\u53E3)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -d --name registry_official_auth  \\
	-p 5000:5000 --restart=always \\
	-v \`pwd\`/opt/docker/auth:/opt/docker/auth  \\
	-v /opt/docker/registry:/var/lib/registry  \\
	-e &quot;REGISTRY_AUTH=htpasswd&quot;  \\
	-e &quot;REGISTRY_AUTH_HTPASSWD_REALM=Registry Realm&quot;  \\
	-e REGISTRY_AUTH_HTPASSWD_PATH=/opt/docker/auth/htpasswd \\
	registry:latest
</code></pre></div><pre><code>\u7ED9docker\u914D\u7F6E\u79C1\u670D
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre></div><pre><code>\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{
    &quot;insecure-registries&quot;:[&quot;192.168.0.4:5000&quot;,&quot;192.168.0.4:5001&quot;],
    &quot;registry-mirrors&quot;: [
        &quot;https://5pfmrxk8.mirror.aliyuncs.com&quot;,
        &quot;http://hub-mirror.c.163.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://registry.docker-cn.com&quot;
    ]
}
</code></pre></div><pre><code>daemon.json\u914D\u7F6E\u8BF4\u660E
insecure-registries\uFF1Adocker\u4FE1\u4EFB\u7684\u79C1\u670D\u5730\u5740
registry-mirrors\uFF1Adocker\u56FD\u5185\u955C\u50CF\u6E90\u5730\u5740

daemon.json\u914D\u7F6E\u6CE8\u610F\u4E8B\u9879\uFF1A\u628A\u79C1\u670D\u914D\u7F6E\u5230registry-mirrors\u65F6\uFF0C\u4E00\u5B9A\u8981\u6B63\u786E\u7684\u52A0\u4E0A http://\u524D\u7F00\uFF1A
\u6B63\u786E\u683C\u5F0F: http://192.168.0.4:5000
\u9519\u8BEF\u683C\u5F0F: 192.168.0.4:5001
\u653E\u884C5000\u7AEF\u53E3\u5E76\u4FDD\u8BC15000\u7AEF\u53E3\u786E\u5B9E\u88AB\u653E\u5F00
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --permanent --add-port=5000/tcp &amp;&amp;
firewall-cmd --reload
</code></pre></div><pre><code>\u5237\u65B0docker daemon\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre></div><pre><code>\u9A8C\u8BC1\u4ED3\u5E93\u662F\u5426\u642D\u5EFA\u6210\u529F
\u8BBF\u95EE:http://192.168.0.4:5000/v2/_catalog\uFF0C\u770B\u5230{&quot;repositories&quot;:[]}\u8868\u793A\u79C1\u6709\u4ED3\u5E93\u642D\u5EFA\u6210\u529F\u4E14\u5185\u5BB9\u4E3A\u7A7A

\u5F7B\u5E95\u5220\u9664\u79C1\u670D\u4E2D\u7684\u955C\u50CF:\u6CE8\u610F\u8FD9\u4E2A\u8DEF\u5F84\u662F\u8981\u770Bregistry\u5177\u4F53\u6302\u8F7D\u5230linux\u4E0A\u4EC0\u4E48\u4F4D\u7F6E\u7684
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>rm -rf /registry/public/repos/docker/registry/v2/repositories/springcloud-eureka/
</code></pre></div><h3 id="_4-6-3-\u642D\u5EFAharbor\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_4-6-3-\u642D\u5EFAharbor\u79C1\u670D" aria-hidden="true">#</a> 4.6.3.\u642D\u5EFAharbor\u79C1\u670D</h3><h4 id="_4-6-3-1-harbor\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_4-6-3-1-harbor\u7B80\u4ECB" aria-hidden="true">#</a> 4.6.3.1.harbor\u7B80\u4ECB</h4><pre><code>Harbor\u662F\u4E00\u4E2A\u7528\u4E8E\u5B58\u50A8\u548C\u5206\u53D1Docker\u955C\u50CF\u7684\u4F01\u4E1A\u7EA7Registry\u670D\u52A1\u5668\uFF0C\u867D\u7136Docker\u5B98\u65B9\u4E5F\u63D0\u4F9B\u4E86\u516C\u5171\u7684\u955C\u50CF\u4ED3\u5E93\uFF0C\u4F46\u662F
\u4ECE\u5B89\u5168\u548C\u6548\u7387\u7B49\u65B9\u9762\u8003\u8651\uFF0C\u90E8\u7F72\u4F01\u4E1A\u5185\u90E8\u7684\u79C1\u6709\u73AF\u5883Registry\u662F\u975E\u5E38\u5FC5\u8981\u7684\uFF0Charbor\u548Cdocker\u4E2D\u592E\u4ED3\u5E93\u7684\u5173\u7CFB\u5C31\u7C7B\u4F3C\u4E8E
nexus\u548CMaven\u4E2D\u592E\u4ED3\u5E93\u7684\u5173\u7CFB\uFF0Charbor\u9664\u4E86\u5B58\u50A8\u548C\u5206\u53D1\u955C\u50CF\u5916\u8FD8\u5177\u6709\u7528\u6237\u7BA1\u7406\uFF0C\u9879\u76EE\u7BA1\u7406\uFF0C\u914D\u7F6E\u7BA1\u7406\u548C\u65E5\u5FD7\u67E5\u8BE2\uFF0C\u9AD8\u53EF
\u7528\u90E8\u7F72\u7B49\u4E3B\u8981\u529F\u80FD\u3002
</code></pre><h4 id="_4-6-3-2-\u642D\u5EFAdocker-compose" tabindex="-1"><a class="header-anchor" href="#_4-6-3-2-\u642D\u5EFAdocker-compose" aria-hidden="true">#</a> 4.6.3.2.\u642D\u5EFAdocker-compose</h4><pre><code>\u7248\u672C\u8BF4\u660E
\u672C\u6B21\u4F7F\u7528\u7684docker-compose\u7248\u672C\u4E3A2.6.1
</code></pre><p><a href="https://github.com/docker/compose/" target="_blank">\u5B98\u65B9\u7F51\u5740</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://github.com/docker/compose/
</code></pre></div><pre><code>\u521B\u5EFA\u8FD0\u884C\u6587\u4EF6\u5939-&gt;\u4E0B\u8F7Ddocker-compose-&gt;\u89E3\u538B\u5E76\u91CD\u547D\u540Ddocker-compose-&gt;\u8D4B\u4E88\u8FD0\u884C\u6743\u9650\u5E76\u590D\u5236\u5230/usr/local/bin/docker-compose
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1660487881889:0c063752f28333a6e3bfb5e4e0e983835640aa5c \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/docker-compose-2.6-linux-x86_64?version=latest&quot; \\
-o docker-compose-2.6-linux-x86_64 &amp;&amp;
sudo chmod +x docker-compose-2.6-linux-x86_64 &amp;&amp;
cp docker-compose-2.6-linux-x86_64 /usr/local/bin/docker-compose
</code></pre></div><pre><code>\u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker-compose --version
</code></pre></div><h4 id="_4-6-3-3-\u5B89\u88C5harbor" tabindex="-1"><a class="header-anchor" href="#_4-6-3-3-\u5B89\u88C5harbor" aria-hidden="true">#</a> 4.6.3.3.\u5B89\u88C5harbor</h4><pre><code>\u7248\u672C\u8BF4\u660E
\u672C\u6B21\u4F7F\u7528\u7684harbor\u7248\u672C\u4E3A2.5.2

\u7279\u522B\u6CE8\u610F
\u6CE8\u610Fdocker\u7684\u7248\u672C,\u4F4E\u7248\u672C\u7684docker\u4E0D\u80FD\u8FD0\u884Charbor2.5
</code></pre><p><a href="https://github.com/goharbor/harbor" target="_blank">\u5B98\u65B9\u7F51\u5740</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://github.com/goharbor/harbor
</code></pre></div><pre><code>\u521B\u5EFA\u5B58\u653E\u4E0B\u8F7D\u6587\u4EF6\u5939-&gt;\u4E0B\u8F7Dharbor-&gt;\u521B\u5EFA\u8FD0\u884C\u6587\u4EF6\u5939-&gt;\u89E3\u538B\u5230\u8FD0\u884C\u6587\u4EF6\u5939
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1660737546177:da4715201c1e37859c2473112e90af4d1615abb4 \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/harbor-offline-installer-v2.5.2.tgz?version=latest&quot; \\
-o harbor-offline-installer-v2.5.2.tgz &amp;&amp;
mkdir -p /opt/software/install &amp;&amp;
tar -zxvf harbor-offline-installer-v2.5.2.tgz -C /opt/software/install
</code></pre></div><pre><code>\u590D\u5236\u4E00\u4EFDharbor.yml.tmpl\uFF0C\u91CD\u547D\u540D\u4E3Aharbor.yml\u5E76\u4FEE\u6539harbor.yml
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /opt/software/install/harbor &amp;&amp;
cp harbor.yml.tmpl harbor.yml
</code></pre></div><pre><code>\u4FEE\u6539harbor.yml\u914D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim harbor.yml
</code></pre></div><pre><code>\u4FEE\u6539hostname\u4E3A\u90E8\u7F72harbor\u7684\u673A\u5668\u7684IP
hostname: 192.168.0.4
\u4FEE\u6539\u7AEF\u53E3\u4E3A\u53EF\u8FDE\u901A\u7684\u7AEF\u53E3
port:5001
\u6CE8\u91CA\u6389https\u76F8\u5173\u90E8\u5206
#https:
  #https port for harbor, default is 443
  #port: 443
  #The path of cert and key files for nginx
  #certificate: /your/certificate/path
  #private_key: /your/private/key/path
\u4FEE\u6539\u5BC6\u7801
  harbor_admin_password: 123456

\u5B89\u88C5harbor
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>./install.sh
</code></pre></div><pre><code>\u653E\u884C\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --permanent --add-port=5000/tcp &amp;&amp;
firewall-cmd --reload
</code></pre></div><pre><code>\u4F7F\u7528docker-compose\u542F\u52A8harbor
\u4E00\u6B21\u6027\u542F\u52A8\u6240\u6709harbor\u76F8\u5173\u7684\u5BB9\u5668,\u4E00\u822C\u6267\u884C\u5B8C./install.sh\u5C31\u5DF2\u7ECF\u542F\u52A8\u4E86\u76F8\u5173\u7684\u5BB9\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker-compose up -d
</code></pre></div><pre><code>\u914D\u7F6Edocker\u4F7F\u7528harbor\u79C1\u670D
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre></div><pre><code>\u914D\u7F6EDocker(Register)\u6CE8\u518C\u4ED3\u5E93\u670D\u52A1\u5668\u4FE1\u4EFB192.168.0.4:5001
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{&quot;insecure-registries&quot;:[&quot;192.168.0.4:5001&quot;]}
</code></pre></div><pre><code>\u91CD\u65B0\u52A0\u8F7Ddocker daemon\u914D\u7F6E\u6587\u4EF6\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre></div><pre><code>\u767B\u5F55harbor\u9996\u9875(\u5BC6\u7801\u53EF\u4EE5\u53BBharbor.yml\u4E2D\u67E5\u770B)
\u8BBF\u95EE\u5730\u5740\uFF1Ahttp://192.168.0.4:5001/
\u7528\u6237\u540D/\u5BC6\u7801\uFF1Aadmin/123456

\u5728Harbor\u4E2D\u521B\u5EFA\u9879\u76EE,\u63A8\u9001\u7684\u65F6\u5019\u53EF\u4EE5\u7528
\u5982:springcloud-eureka
</code></pre><h2 id="_4-7-docker\u5B98\u65B9\u79C1\u670D\u53EF\u89C6\u5316" tabindex="-1"><a class="header-anchor" href="#_4-7-docker\u5B98\u65B9\u79C1\u670D\u53EF\u89C6\u5316" aria-hidden="true">#</a> 4.7.docker\u5B98\u65B9\u79C1\u670D\u53EF\u89C6\u5316</h2><h3 id="_4-7-1-docker-registry-web\u65B9\u6848" tabindex="-1"><a class="header-anchor" href="#_4-7-1-docker-registry-web\u65B9\u6848" aria-hidden="true">#</a> 4.7.1.docker-registry-web\u65B9\u6848</h3><pre><code>\u4E0B\u8F7Ddocker pull hyper/docker-registry-web\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker pull hyper/docker-registry-web
</code></pre></div><pre><code>\u542F\u52A8docker-registry-web
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -d --restart=always \\
	-p 9002:8080 \\
	--name registry-web \\
	--link registry_default \\
	-e REGISTRY_URL=http://192.168.0.4:5000/v2 \\
	-e REGISTRY_NAME=192.168.0.4:5000 \\
	hyper/docker-registry-web:latest
</code></pre></div><h2 id="_4-8-\u5236\u4F5Cdocker\u955C\u50CF\u5E76\u4E0A\u4F20\u5230\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_4-8-\u5236\u4F5Cdocker\u955C\u50CF\u5E76\u4E0A\u4F20\u5230\u79C1\u670D" aria-hidden="true">#</a> 4.8.\u5236\u4F5Cdocker\u955C\u50CF\u5E76\u4E0A\u4F20\u5230\u79C1\u670D</h2><h3 id="_4-8-1-\u5236\u4F5Cdokcer\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#_4-8-1-\u5236\u4F5Cdokcer\u955C\u50CF" aria-hidden="true">#</a> 4.8.1.\u5236\u4F5CDokcer\u955C\u50CF</h3><pre><code>\u4E0B\u8F7D\u5730\u5740
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>https://repo.huaweicloud.com/java/jdk/
</code></pre></div><pre><code>\u521B\u5EFA\u5B58\u653Edocker\u955C\u50CF\u7684\u6587\u4EF6\u5939-&gt;\u5728\u8FD9\u4E2A\u76EE\u5F55\u4E2D\u4E0B\u8F7Djdk
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /opt/software/docker/images &amp;&amp;
cd /opt/software/docker/images &amp;&amp;
wget https://repo.huaweicloud.com/java/jdk/8u181-b13/jdk-8u181-linux-x64.tar.gz
</code></pre></div><pre><code>\u7F16\u5199Dockerfile(Dockerfile\u5185\u5BB9\u5982\u4E0B)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat &lt;&lt;EOF &gt; Dockerfile
#\u57FA\u4E8Ecentos\u57FA\u7840\u955C\u50CF\u6784\u5EFA
FROM centos
#\u4F5C\u8005
MAINTAINER lingwh
#\u5C06jdk\u6DFB\u52A0\u5230\u57FA\u7840\u955C\u50CF\u4E2D
ADD jdk-8u181-linux-x64.tar.gz /usr/local
#\u8BBE\u7F6Ejava\u76F8\u5173\u7684\u73AF\u5883\u53D8\u91CF
ENV JAVA_HOME /usr/local/jdk1.8.0_181
ENV JRE_HOME \${JAVA_HOME}/jre
ENV CLASSPATH .:\${JAVA_HOME}/lib:\${JRE_HOME}/lib
ENV PATH \${JAVA_HOME}/bin:$PATH
#\u8F93\u51FAJava\u7248\u672C\u4FE1\u606F
CMD [&quot;java&quot;,&quot;-version&quot;]
EOF
</code></pre></div><pre><code>\u5728\u5F53\u524D\u76EE\u5F55\u4E2D\u6267\u884C\u6784\u5EFA\u955C\u50CF\u7684\u547D\u4EE4
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker build -t=&#39;jdk/jdk1.8.0_181&#39; .
</code></pre></div><pre><code>\u67E5\u770B\u5230\u521A\u624D\u5236\u4F5C\u597D\u7684\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker images
</code></pre></div><pre><code>\u521B\u5EFA\u5BB9\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -it --name=myjdk8 \u955C\u50CFid /bin/bash
</code></pre></div><h3 id="_4-8-2-\u4E0A\u4F20\u672C\u5730jdk\u955C\u50CF\u5230\u79C1\u670D" tabindex="-1"><a class="header-anchor" href="#_4-8-2-\u4E0A\u4F20\u672C\u5730jdk\u955C\u50CF\u5230\u79C1\u670D" aria-hidden="true">#</a> 4.8.2.\u4E0A\u4F20\u672C\u5730jdk\u955C\u50CF\u5230\u79C1\u670D</h3><pre><code>\u7ED9\u955C\u50CF\u6253\u6807\u7B7E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker tag jdk/jdk1.8.0_181 192.168.0.4:5000/jdk/jdk1.8.0_181:latest
</code></pre></div><pre><code>\u4E0A\u4F20\u6807\u8BB0\u7684\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker push 192.168.0.4:5000/jdk/jdk1.8.0_181:latest
</code></pre></div><pre><code>\u67E5\u770B\u63A8\u9001\u5230\u79C1\u670D\u4E2D\u7684\u955C\u50CF
\u8BBF\u95EE:http://192.168.0.4:5000/v2/_catalog,\u770B\u5230:{&quot;repositories&quot;:[&quot;jdk/jdk1.8.0_181&quot;]}
</code></pre><h2 id="_4-9-docker\u4E2D\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_4-9-docker\u4E2D\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6" aria-hidden="true">#</a> 4.9.Docker\u4E2D\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6</h2><h3 id="_4-9-1-\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#_4-9-1-\u5B89\u88C5mysql" aria-hidden="true">#</a> 4.9.1.\u5B89\u88C5mysql</h3><pre><code>\u4E0B\u8F7Dmysql\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker pull mysql
</code></pre></div><pre><code>\u542F\u52A8mysql\u5BB9\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -di --name mysql -p 3306:3306 --restart=always -e MYSQL_ROOT_PASSWORD=123456 mysql
</code></pre></div><pre><code>\u5173\u95EDdocker\u4E2D\u7684mysql\u5BB9\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>myqldocker exec -it mysql bash
</code></pre></div><h3 id="_4-9-2-\u5B89\u88C5consul" tabindex="-1"><a class="header-anchor" href="#_4-9-2-\u5B89\u88C5consul" aria-hidden="true">#</a> 4.9.2.\u5B89\u88C5consul</h3><pre><code>\u4E0B\u8F7Dconsul\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker pull consul
</code></pre></div><pre><code>\u542F\u52A8consul\u5BB9\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -d --name=consul \\
	-p 8500:8500 \\
	--restart=always \\
	agent -server -bootstrap -ui -node=1 -client=&#39;0.0.0.0&#39; \\
	consul:latest
</code></pre></div><h3 id="_4-9-3-\u5B89\u88C5vim" tabindex="-1"><a class="header-anchor" href="#_4-9-3-\u5B89\u88C5vim" aria-hidden="true">#</a> 4.9.3.\u5B89\u88C5vim</h3><pre><code>\u8FDB\u5165\u5BB9\u5668\u5185\u90E8
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker exec -it \u5BB9\u5668id /bin/bash
</code></pre></div><pre><code>\u5907\u4EFD\u65E7\u7684\u6E90
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mv /etc/apt/sources.list /etc/apt/sources.list.bak
</code></pre></div><pre><code>\u5199\u5165\u65B0\u7684\u6E90
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>echo &quot;deb http://mirrors.163.com/debian/ jessie main non-free contrib&quot; \\
	&gt;&gt; 	/etc/apt/sources.list &amp;&amp;
echo &quot;deb http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib&quot; \\
	&gt;&gt;/etc/apt/sources.list &amp;&amp;
echo &quot;deb-src http://mirrors.163.com/debian/ jessie main non-free contrib&quot; \\
	&gt;&gt;/etc/apt/sources.list &amp;&amp;
echo &quot;deb-src http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib&quot; \\
	&gt;&gt;/etc/apt/sources.list
</code></pre></div><pre><code>\u66F4\u65B0\u6E90
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>apt update
</code></pre></div><pre><code>\u5B89\u88C5vim
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>apt-get install vim
</code></pre></div><h3 id="_4-9-3-\u5B89\u88C5elk" tabindex="-1"><a class="header-anchor" href="#_4-9-3-\u5B89\u88C5elk" aria-hidden="true">#</a> 4.9.3.\u5B89\u88C5elk</h3><pre><code>\u540C\u6B65\u65F6\u95F4
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E.html#_2-7-\u540C\u6B65\u65F6\u95F4" target="_blank">\u540C\u6B65\u65F6\u95F4</a></p><pre><code>\u4E0B\u8F7Delk\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker pull sebp/elk:6.8.22
</code></pre></div><pre><code>\u542F\u52A8ELK\u5BB9\u5668\uFF0C\u6307\u5B9A\u6700\u5C0F\u5185\u5B58\u548C\u6700\u5927\u5185\u5B58\uFF0C\u5E76\u6620\u5C04\u76F8\u5173\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -d --name elk \\
	--restart always \\
	-p 5601:5601 \\
	-p 9200:9200 \\
	-p 5044:5044 \\
	-e ES_MIN_MEM=1024m \\
	-e ES_MAX_MEM=2048 \\
	sebp/elk:6.8.22
</code></pre></div><pre><code>\u5F00\u653Eelk\u9700\u8981\u7528\u7684\u7AEF\u53E3,\u5E76\u4E14\u91CD\u65B0\u8F7D\u5165\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --add-port=5601/tcp --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
firewall-cmd --add-port=9200/tcp --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
firewall-cmd --add-port=5044/tcp --permanent &amp;&amp;
firewall-cmd --reload
</code></pre></div><pre><code>\u67E5\u770B\u542F\u52A8\u65E5\u5FD7
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker logs \`docker ps | grep elk | cut -d&#39; &#39; -f1\`
</code></pre></div><pre><code>\u8BBF\u95EEKibana(\u6CE8\u610F\u4FEE\u6539ip\u4E3A\u5B9E\u9645\u90E8\u7F72ip)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>192.168.0.4:5601
</code></pre></div><pre><code>\u8FDB\u5165ELK\u4E2D\u8FDB\u884C\u914D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker exec -it elk /bin/bash
</code></pre></div><pre><code>\u4FEE\u6539logstash\u914D\u7F6E,\u628A\u4E0B\u9762\u5185\u5BB9\u7C98\u8D34\u8FDB\u53BB(\u6CE8\u610F\u4FEE\u6539ip\u4E3A\u5B9E\u9645\u90E8\u7F72ip)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat &gt; /etc/logstash/conf.d/02-beats-input.conf &lt;&lt; EOF
input{
    tcp{
        host =&gt; &quot;0.0.0.0&quot;
        port =&gt; 5044
        codec=&gt; json_lines
    }
}
output{
    elasticsearch{
        hosts =&gt; [&quot;192.168.0.4:9200&quot;]
        action =&gt; &quot;index&quot;
        index =&gt; &quot;%{[appName]}-%{+YYYY.MM.dd}&quot;
    }
}
EOF
</code></pre></div><pre><code>\u914D\u7F6E\u8BF4\u660E:
input\u4EE3\u8868\u6570\u636E\u8F93\u5165\u914D\u7F6E \uFF0C logstatsh\u7684\u5F00\u653E\u7AEF\u53E3\u662F 5044
output\u4EE3\u8868\u6570\u636E\u8F93\u51FA\u914D\u7F6E\uFF0C\u8F93\u51FA\u5230elasticsearch, hosts\u662Fes\u7684\u5730\u5740192.168.0.4:9200

\u9000\u51FA\u5BB9\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>exit
</code></pre></div><pre><code>\u91CD\u542FELK\u5BB9\u5668
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker restart elk
</code></pre></div><pre><code>\u6CE8\u610F\u4E8B\u9879
\u5F53\u628Adocker\u548Ccentos7\u7684\u51B2\u7A81\u89E3\u51B3\u540E,\u9700\u8981\u8BA9centos\u653E\u884Celk(\u5177\u4F53\u662Fes)\u7684\u90E8\u7F72\u5730\u5740

\u67E5\u770B\u5BB9\u5668\u8BE6\u7EC6\u4FE1\u606F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker inspect \u5BB9\u5668id
</code></pre></div><pre><code>\u67E5\u627E\u5230elk(\u5177\u4F53\u662Fes)\u5BB9\u5668\u7684ip,\u5047\u8BBE\u4E3A172.17.0.2

\u6267\u884C\u653E\u884C\u64CD\u4F5C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=trusted --add-source=172.17.0.2/16 --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
systemctl restart firewalld
</code></pre></div><pre><code>docker\u542F\u52A8elk\u62A5\u9519/\u6216\u4E00\u76F4\u91CD\u542F\u6545\u969C\u89E3\u51B3
\u9519\u8BEF\u65E5\u5FD7\uFF1A
max virtual memory areas vm.max_map_count [65530] is too low, increase to at least
\u89E3\u51B3\u65B9\u5F0F\uFF0C\u5728\u5BBF\u4E3B\u673A\u6267\u884C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo sysctl -w vm.max_map_count=262144
</code></pre></div>`,219);function u(g,x){const a=t("Markmap"),o=t("ScrollIntoPageView"),c=t("HideSideBar");return n(),s("div",null,[p,e(a,{localtion:"/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter4.html",height:"500rem"}),i,e(o),e(c)])}var h=d(l,[["render",u],["__file","centos7-chapter-4.\u642D\u5EFAdocker\u6280\u672F\u6808.html.vue"]]);export{h as default};
