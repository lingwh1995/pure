import{_ as i,a as r,b as e,c as g,d,e as m}from"./harbor-springcloud-eureka-cik8s80.49effc29.js";import{_ as o}from"./harbor-springcloud-eureka.4fb26289.js";import{_ as h,o as x,c as b,a as n,d as a,b as p,e as c,r as t}from"./app.d4c08878.js";const v={},f=a(`<h1 id="_16-\u4F7F\u7528\u6301\u7EED\u96C6\u6210\u5FEB\u6377\u90E8\u7F72\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_16-\u4F7F\u7528\u6301\u7EED\u96C6\u6210\u5FEB\u6377\u90E8\u7F72\u670D\u52A1" aria-hidden="true">#</a> 16.\u4F7F\u7528\u6301\u7EED\u96C6\u6210\u5FEB\u6377\u90E8\u7F72\u670D\u52A1</h1><h2 id="_16-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_16-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 16.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 16.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 16.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 16.3.\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230Docker\u4E2D
 16.4.\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230k8s\u4E2D
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_16-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_16-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter16.html" target="_blank">16.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),E=p("h2",{id:"_16-3-\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230docker\u4E2D",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#_16-3-\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230docker\u4E2D","aria-hidden":"true"},"#"),c(" 16.3.\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230Docker\u4E2D")],-1),_=p("h3",{id:"_16-3-1-\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230docker\u4E2D\u6D41\u7A0B\u8BF4\u660E",tabindex:"-1"},[p("a",{class:"header-anchor",href:"#_16-3-1-\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230docker\u4E2D\u6D41\u7A0B\u8BF4\u660E","aria-hidden":"true"},"#"),c(" 16.3.1.\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230Docker\u4E2D\u6D41\u7A0B\u8BF4\u660E")],-1),A=a(`<h3 id="_16-3-2-\u642D\u5EFAdocker" tabindex="-1"><a class="header-anchor" href="#_16-3-2-\u642D\u5EFAdocker" aria-hidden="true">#</a> 16.3.2.\u642D\u5EFADocker</h3><pre><code>\u5728192.168.0.4\u4E0A\u642D\u5EFAdocker
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-4.\u642D\u5EFAdocker\u6280\u672F\u6808.html#_4-3-1-\u5728\u7EBF\u5B89\u88C5docker" target="_blank">\u642D\u5EFAdocker</a> \u5F00\u542F192.168.0.4\u4E0A\u7684docker\u76842375\u7AEF\u53E3(\u4E3A\u4F7F\u7528docker\u7684maven\u63D2\u4EF6\u505A\u51C6\u5907)</p><div class="language-text ext-text"><pre class="language-text"><code>vim /lib/systemd/system/docker.service
</code></pre></div><pre><code>\u5176\u4E2DExecStart=\u540E\u6DFB\u52A0\u914D\u7F6E-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
\u5F00\u653E\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=2375/tcp --permanent &amp;&amp;
firewall-cmd --reload
</code></pre></div><pre><code>\u5237\u65B0daemon.json\u5E76\u91CD\u542F\u52A8docker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre></div><h3 id="_16-3-3-\u642D\u5EFAharbor" tabindex="-1"><a class="header-anchor" href="#_16-3-3-\u642D\u5EFAharbor" aria-hidden="true">#</a> 16.3.3.\u642D\u5EFAHarbor</h3><pre><code>\u5728192.168.0.5\u4E0A\u642D\u5EFAharbor
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-4.\u642D\u5EFAdocker\u6280\u672F\u6808.html#_4-6-3-\u642D\u5EFAharbor\u79C1\u670D" target="_blank">\u642D\u5EFAHarbor</a> \u914D\u7F6E192.168.0.4\u4E0A\u7684Docker\u4FE1\u4EFB192.168.0.5\u4E0A\u7684harbor\u79C1\u670D</p><div class="language-text ext-text"><pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{
    &quot;insecure-registries&quot;:[&quot;192.168.0.5:5000&quot;]
}
</code></pre></div><pre><code>\u5237\u65B0daemon\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre></div><h3 id="_16-3-4-\u642D\u5EFAjenkins" tabindex="-1"><a class="header-anchor" href="#_16-3-4-\u642D\u5EFAjenkins" aria-hidden="true">#</a> 16.3.4.\u642D\u5EFAJenkins</h3><pre><code>\u5728192.168.0.5\u4E0A\u642D\u5EFAJenkins
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-9.\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u73AF\u5883.html#_9-3-\u4F7F\u7528\u672C\u5730\u5185\u7F51\u7A7F\u900F\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u73AF\u5883" target="_blank">\u642D\u5EFAJenkins</a></p><pre><code>\u5728Jenkins\u4E2D\u5B89\u88C5\u914D\u7F6EPublish Over SSH\u63D2\u4EF6(\u9700\u8981\u5148\u5B89\u88C5\u8BE5\u63D2\u4EF6)
\u914D\u7F6EJenkins\u6240\u5728\u670D\u52A1\u5668\u5230docker\u6240\u5728\u670D\u52A1\u5668\u7684\u514D\u5BC6\u767B\u5F55

\u8FDB\u5165Publish over SSH\u914D\u7F6E\u9762\u677F
DASHBOARD-&gt;Manage Jenkins/\u7CFB\u7EDF\u7BA1\u7406-&gt;Configure System(System Configuration\u4E0B)/\u7CFB\u7EDF\u914D\u7F6E(\u7CFB\u7EDF\u914D\u7F6E)-&gt;Publish over SSH

\u914D\u7F6E\u5982\u4E0B\u5B57\u6BB5
Publish over SSH
a.Passphrase(\u53EF\u4EE5\u914D\u7F6E\u4E5F\u53EF\u4EE5\u4E0D\u914D\u7F6E,\u4E0B\u9762\u7684\u914D\u7F6E\u4E2D\u4F1A\u8986\u76D6\u8FD9\u4E2A\u914D\u7F6E)
192.168.0.4\u673A\u5668\u7684\u5BC6\u7801

Publish over SSH-&gt;SSH Servers-&gt;\u65B0\u589E
a.Name(\u548CJenkinsfile\u4E2DsshPublisherDesc.configName\u4FDD\u6301\u4E00\u81F4)
cidocker
b.Hostname
192.168.0.4
c.Username
root
d.Remote Directory
/

Publish over SSH-&gt;SSH Servers-&gt;\u52FE\u9009Use password authentication, or use a different key
a.Passphrase / Password(\u6CE8\u610F:\u8FD9\u4E2A\u914D\u7F6E\u4F1A\u8986\u76D6Publish over SSH\u4E0Ba.\u4E2D\u7684\u914D\u7F6E)
192.168.0.4\u673A\u5668\u7684\u5BC6\u7801

\u6D4B\u8BD5\u8FDE\u901A\u6027(\u6210\u529F\u8FD4\u56DESuccess)
Publish over SSH-&gt;SSH Servers-&gt;Test Configuration

\u4FDD\u5B58\u914D\u7F6E
Publish over SSH-&gt;\u4FDD\u5B58
</code></pre><h3 id="_16-3-5-\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u4F7F\u7528\u7684\u5FAE\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_16-3-5-\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u4F7F\u7528\u7684\u5FAE\u670D\u52A1" aria-hidden="true">#</a> 16.3.5.\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u4F7F\u7528\u7684\u5FAE\u670D\u52A1</h3><h4 id="_16-3-5-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_16-3-5-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 16.3.5.1.\u6A21\u5757\u7B80\u4ECB</h4><pre><code>\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230docker\u4E2D\u4F7F\u7528\u5230\u7684\u5FAE\u670D\u52A1
</code></pre><h4 id="_16-3-5-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_16-3-5-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 16.3.5.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h4><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-ci-docker80
|-- docker
|   \u2022-- Dockerfile
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               |-- controller
|       |               |   \u2022-- CiDockerController.java
|       |               \u2022-- CiDocker80.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h4 id="_16-3-5-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_16-3-5-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 16.3.5.3.\u521B\u5EFA\u6A21\u5757</h4><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-ci-docker80\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h4 id="_16-3-5-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_16-3-5-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 16.3.5.4.\u7F16\u5199\u6A21\u5757pom.xml</h4><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-ci-docker80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.registry.uri</span><span class="token punctuation">&gt;</span></span>192.168.0.5:5000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.registry.uri</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.registry.username</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.registry.username</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.registry.password</span><span class="token punctuation">&gt;</span></span>123456<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.registry.password</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.host</span><span class="token punctuation">&gt;</span></span>tcp://192.168.0.4:2375<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.host</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u8BBE\u7F6E\u5F53\u524D\u670D\u52A1\u7AEF\u53E3--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.container.port</span><span class="token punctuation">&gt;</span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.container.port</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--docker\u5BB9\u5668\u7AEF\u53E3\u6620\u5C04--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.port.mapping</span><span class="token punctuation">&gt;</span></span>\${docker.container.port}:\${docker.container.port}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.port.mapping</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u5F15\u5165\u516C\u5171\u7684\u5DE5\u7A0B--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--\u70ED\u90E8\u7F72\u9700\u8981\u52A0\u8FD9\u4E2A--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>finalName</span><span class="token punctuation">&gt;</span></span>\${project.artifactId}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>finalName</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--\u628A\u5F53\u524D\u63D2\u4EF6repackage\u547D\u4EE4\u548Cmaven\u7684package\u7ED1\u5B9A--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>repackage-original<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>repackage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fork</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fork</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>addResources</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>addResources</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-antrun-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>del-jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>clean<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tasks</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!-- \u8FD9\u662F\u5C06\u5F53\u524D\u6A21\u5757\u4E0B\u7684target\u4E0B\u7684jar\u5305\u5220\u9664--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>docker/\${build.finalName}.jar<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tasks</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>run<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>copy-jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tasks</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!-- \u8FD9\u662F\u5C06\u5F53\u524D\u6A21\u5757\u4E0B\u7684target\u4E0B\u7684jar\u5305copy\u5230\u5F53\u524D\u6A21\u5757\u6839\u76EE\u5F55\u4E0Bdocker\u76EE\u5F55\u4E2D--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>copy</span> <span class="token attr-name">todir</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>docker<span class="token punctuation">&quot;</span></span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target/\${build.finalName}.jar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>copy</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tasks</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>run<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.fabric8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>docker-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dockerHost</span><span class="token punctuation">&gt;</span></span>\${docker.host}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dockerHost</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>removeMode</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>removeMode</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        harbor\u955C\u50CF\u4ED3\u5E93\u8BA4\u8BC1\u914D\u7F6E
                        \u6CE8\u610F:\u4E0D\u7BA1\u662Fharbor\u4E2D\u662F\u516C\u5F00\u9879\u76EE\u8FD8\u662F\u79C1\u5BC6\u9879\u76EE\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u90FD\u8981\u52A0\uFF0C\u4E0D\u52A0\u65E0\u6CD5push\u6210\u529F
                    --&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>authConfig</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>\${docker.registry.username}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>\${docker.registry.password}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>authConfig</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>images</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!--\u663E\u793A\u65E5\u5FD7\u7684\u65F6\u5019--&gt;</span>
                            <span class="token comment">&lt;!--&lt;alias&gt;spring-cloud-eureka&lt;/alias&gt;--&gt;</span>
                            <span class="token comment">&lt;!--\u5982\u679C\u53EA\u7ED9docker\u672C\u5730\u955C\u50CF\u5E93\u4E2D\u63A8\u9001,\u683C\u5F0F\u4E3A \u547D\u540D\u7A7A\u95F4/\u9879\u76EE\u540D\u79F0:tags\u540D\u79F0,\u793A\u4F8B:\u9879\u76EEartifactId/\u6A21\u5757artifactId--&gt;</span>
                            <span class="token comment">&lt;!--&lt;name&gt;\${project.parent.artifactId}/\${project.name}&lt;/name&gt;--&gt;</span>
                            <span class="token comment">&lt;!--
                                \u5982\u679C\u8981\u540C\u65F6\u7ED9\u79C1\u670D\u4E2D\u63A8\u9001,\u683C\u5F0F\u4E3A registry\u7684ip:\u547D\u540D\u7A7A\u95F4/\u9879\u76EE\u540D\u79F0:tags\u540D\u79F0,\u793A\u4F8B:\u79C1\u670D\u7684ip:\u9879\u76EEartifactId/\u6A21\u5757artifactId
                                \u4E5F\u53EF\u5C06registry\u5355\u72EC\u5199\u5728\u4E0B\u9762
                            --&gt;</span>
                            <span class="token comment">&lt;!--&lt;name&gt;\u955C\u50CF\u540D\u79F0:\${docker.registry}/\${project.parent.artifactId}/\${project.name}&lt;/name&gt;--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>\${project.parent.artifactId}/\${project.name}:latest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>registry</span><span class="token punctuation">&gt;</span></span>\${docker.registry.uri}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>registry</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!--\u5B9A\u4E49\u955C\u50CF\u6784\u5EFA\u884C\u4E3A--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!-- \u6307\u5B9Adockerfile\u6587\u4EF6\u7684\u4F4D\u7F6E--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dockerFile</span><span class="token punctuation">&gt;</span></span>\${project.basedir}/docker/Dockerfile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dockerFile</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!-- \u5B9A\u4E49\u5BB9\u5668\u542F\u52A8\u884C\u4E3A--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>run</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!--\u8BBE\u7F6E\u5BB9\u5668\u540D\uFF0C\u53EF\u91C7\u7528\u901A\u914D\u7B26--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>containerNamePattern</span><span class="token punctuation">&gt;</span></span>\${project.parent.artifactId}_\${project.build.finalName}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>containerNamePattern</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!--\u8BBE\u7F6E\u7AEF\u53E3\u6620\u5C04--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ports</span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">&gt;</span></span>\${docker.port.mapping}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ports</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>run</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>images</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>buildArgs</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--docker\u79C1\u670D\u5730\u5740--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DOCKER_REGISTRY_URL</span><span class="token punctuation">&gt;</span></span>\${docker.registry.uri}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DOCKER_REGISTRY_URL</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>buildArgs</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u5982\u679C\u60F3\u5728\u9879\u76EEinstall\u65F6\u6784\u5EFA\u955C\u50CF\u6DFB\u52A0--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>build-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>build<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u5982\u679C\u60F3\u5728\u9879\u76EEinstall\u65F6\u6784\u5EFA\u955C\u50CF\u6DFB\u52A0--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>tag-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u5982\u679C\u60F3\u5728\u9879\u76EEinstall\u65F6\u63A8\u9001\u955C\u50CF\u5230\u79C1\u670D\u6DFB\u52A0--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>push-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>push<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u5982\u679C\u60F3\u5728\u9879\u76EEinstall\u65F6\u63A8\u9001\u955C\u50CF\u5230\u79C1\u670D\u540E\u5220\u9664\u5E76docker\u4E2D\u672C\u5730build\u7684\u955C\u50CF\u6DFB\u52A0--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>remove-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>remove<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u6253\u5305\u591A\u73AF\u5883--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>application.yml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h4 id="_16-3-5-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_16-3-5-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 16.3.5.5.\u7F16\u5199\u6A21\u5757application.yml</h4><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>

</code></pre></div><h4 id="_16-3-5-6-\u7F16\u5199\u6A21\u5757controller" tabindex="-1"><a class="header-anchor" href="#_16-3-5-6-\u7F16\u5199\u6A21\u5757controller" aria-hidden="true">#</a> 16.3.5.6.\u7F16\u5199\u6A21\u5757controller</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CiDockerController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/ci/docker&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u6301\u7EED\u96C6\u6210&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230Docker+\u6D4B\u8BD5WebHook&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h4 id="_16-3-5-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_16-3-5-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 16.3.5.7.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CiDocker80</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">CiDocker80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h4 id="_16-3-5-8-\u7F16\u5199\u6A21\u5757dockerfile" tabindex="-1"><a class="header-anchor" href="#_16-3-5-8-\u7F16\u5199\u6A21\u5757dockerfile" aria-hidden="true">#</a> 16.3.5.8.\u7F16\u5199\u6A21\u5757Dockerfile</h4><pre><code>\u6CE8\u610F:\u9700\u8981\u5148\u5728 \u9879\u76EE\u6839\u76EE\u5F55/springcloud-ci-docker80\u4E0B\u521B\u5EFAdocker\u6587\u4EF6\u5939
</code></pre><p>FROM java:8 VOLUME /software MAINTAINER lingwh COPY \${project.build.finalName}.jar app.jar ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/app.jar&quot;]</p><div class="language-text ext-text"><pre class="language-text"><code>#### 16.3.5.9.\u672C\u5730\u6D4B\u8BD5\u6A21\u5757
    \u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre></div><p>http://localhost/ci/docker</p><div class="language-text ext-text"><pre class="language-text"><code>    \u8FD4\u56DE\u6570\u636E
\`\`\`json
{&quot;code&quot;:200,&quot;message&quot;:&quot;\u6301\u7EED\u96C6\u6210&quot;,&quot;data&quot;:&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230Docker&quot;}
</code></pre></div><h3 id="_16-3-6-\u6D4B\u8BD5docker\u7684maven\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_16-3-6-\u6D4B\u8BD5docker\u7684maven\u63D2\u4EF6" aria-hidden="true">#</a> 16.3.6.\u6D4B\u8BD5docker\u7684maven\u63D2\u4EF6</h3><pre><code>\u542F\u52A8\u76F8\u5173\u670D\u52A1
</code></pre>`,43),y=a(`<pre><code>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C\u6253\u5305\u547D\u4EE4
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mvn clean install
</code></pre></div><pre><code>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C\u590D\u5236\u751F\u6210\u7684jar\u5305\u5230\u6307\u5B9A\u4F4D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cp springcloud-ci-docker80/target/springcloud-ci-docker80.jar springcloud-ci-docker80/docker
</code></pre></div><pre><code>\u5728idea\u4E2D\u6253\u5F00docker\u7684maven\u63D2\u4EF6\u64CD\u4F5C\u9762\u677F
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+i+`" width="100%"></div></div><pre><code>\u5236\u4F5CDocker\u955C\u50CF\u5E76\u4E0A\u4F20\u955C\u50CF\u5230docker
\u70B9\u51FBdocker:build

\u4E0A\u4F20\u955C\u50CF\u5230docker\u540E\u5728docker\u4E2D\u4E3A\u8BE5\u955C\u50CF\u521B\u5EFA\u5BB9\u5668\u5E76\u542F\u52A8docker\u4E2D\u7684\u5BB9\u5668
\u70B9\u51FBdocker:build-&gt;\u70B9\u51FBdocker:run

\u6D4B\u8BD5\u90E8\u7F72\u5230docker\u4E2D\u7684\u670D\u52A1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.4/ci/docker
</code></pre></div><pre><code>\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{&quot;code&quot;:200,&quot;message&quot;:&quot;\u6301\u7EED\u96C6\u6210&quot;,&quot;data&quot;:&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230Docker&quot;}
</code></pre></div><pre><code>\u5728harbor\u79C1\u670D\u4E2D\u521B\u5EFAspringcloud-eureka\u9879\u76EE
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+o+`" width="100%"></div></div><pre><code>\u63A8\u9001\u5230harbor\u79C1\u670D
\u70B9\u51FBdocker:build-&gt;\u70B9\u51FBdocker:push
\u767B\u5F55harbor\u79C1\u670D\u67E5\u770B\u521A\u624D\u63A8\u9001\u4E0A\u53BB\u7684\u7684\u670D\u52A1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.5:5000/harbor/projects
</code></pre></div><pre><code>\u70B9\u51FBspringcloud-eureka\u8FD9\u4E2A\u9879\u76EE
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+r+`" width="100%"></div></div><pre><code>\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u6A21\u5757\u5FAE\u670D\u52A1\u5DF2\u7ECF\u88AB\u63A8\u9001\u5230\u4E86harbor\u79C1\u670D\u4E2D
</code></pre><h3 id="_16-3-7-\u6301\u7EED\u96C6\u6210jekins\u76F8\u5173\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_16-3-7-\u6301\u7EED\u96C6\u6210jekins\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a> 16.3.7.\u6301\u7EED\u96C6\u6210Jekins\u76F8\u5173\u914D\u7F6E</h3><h4 id="_16-3-7-1-\u7F16\u5199jenkinsfile" tabindex="-1"><a class="header-anchor" href="#_16-3-7-1-\u7F16\u5199jenkinsfile" aria-hidden="true">#</a> 16.3.7.1.\u7F16\u5199Jenkinsfile</h4><pre><code>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAscript\u6587\u4EF6\u5939,\u5728script\u4E2D\u65B0\u5EFAJenkinsfileCiDocker,\u5185\u5BB9\u5982\u4E0B
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>//\u5B9A\u4E49\u8FDC\u7A0Bgit\u4ED3\u5E93\u4E2D\u9879\u76EE\u7684\u5730\u5740
def project_url=&#39;https://gitee.com/lingwh1995/springcloud-eureka.git&#39;

def jenkins_ip=&#39;192.168.0.5&#39;

node {
    echo &#39;\u5F00\u59CB\u6267\u884C\u81EA\u52A8\u5316...&#39;
    /*\u6307\u5B9A\u5728\u90A3\u53F0Jenkins\u8282\u70B9\u4E0A\u8FD0\u884C*/
    agent { label &#39;\${jenkins_ip}&#39;}

    /*\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u68C0\u51FA\u4EE3\u7801*/
    stage(&#39;\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u68C0\u51FA\u4EE3\u7801&#39;) {
        echo &#39;\u5F00\u59CB \u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u68C0\u51FA\u4EE3\u7801...&#39;
        checkout([
            $class: &#39;GitSCM&#39;,
            branches: [[name: &#39;*/master&#39;]], extensions: [],
            userRemoteConfigs: [[url: &quot;\${project_url}&quot;]]
        ])
        echo &#39;\u5B8C\u6210 \u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u68C0\u51FA\u4EE3\u7801...&#39;
    }

    /**
     * maven\u547D\u4EE4\u6269\u5C55:\u5B9E\u73B0\u591A\u6A21\u5757\u60C5\u51B5\u4E0B\u53EA\u9488\u5BF9\u67D0\u4E00\u4E2A\u6A21\u5757\u6253\u5305
     * -pl, --projects
     *      Build specified reactor projects instead of all projects
     *      \u6307\u5B9A\u9879\u76EE\u5176\u4E2D\u7684\u4E00\u4E2A\u6A21\u5757\u53CA\u5176\u4F9D\u8D56
     *  -am, --also-make
     *      If project list is specified, also build projects required by the list
     *      \u81EA\u52A8\u6784\u5EFA\u8BE5\u6A21\u5757\u6240\u4F9D\u8D56\u7684\u5176\u4ED6\u6A21\u5757
     *
     */
    stage(&#39;\u6253\u5305-&gt;\u5B89\u88C5-&gt;\u6784\u5EFA\u955C\u50CF-&gt;\u63A8\u9001\u5230\u79C1\u670D-&gt;\u5220\u9664docker\u4E2D\u672C\u5730\u955C\u50CF&#39;) {
        echo &#39;\u5F00\u59CB \u6253\u5305-&gt;\u5B89\u88C5-&gt;\u6784\u5EFA\u955C\u50CF-&gt;\u63A8\u9001\u5230\u79C1\u670D-&gt;\u5220\u9664docker\u4E2D\u672C\u5730\u955C\u50CF...&#39;
        //\u5982\u679Cinstall\u7684\u662F\u4E00\u4E2A\u6A21\u5757\u6216\u8005\u662F\u591A\u4E2A\u6A21\u5757
            //\u6267\u884C\u904D\u5386\u4F9D\u6B21\u6B21\u6253\u5305\u6D89\u53CA\u7684\u6A21\u5757
        //\u5982\u679C\u662Finstall\u7684\u662F\u6574\u4E2A\u9879\u76EE
            //\u4E00\u6B21\u6027\u6253\u5305\u6574\u4E2A\u9879\u76EE
        sh &quot;mvn clean install -T 1C -Dmaven.test.skip=true -Dmaven.compile.fork=true -pl springcloud-ci-docker80 -am&quot;
        echo &#39;\u5B8C\u6210 \u6253\u5305-&gt;\u5B89\u88C5-&gt;\u6784\u5EFA\u955C\u50CF-&gt;\u63A8\u9001\u5230\u79C1\u670D-&gt;\u5220\u9664docker\u4E2D\u672C\u5730\u955C\u50CF...&#39;
    }

    /**
     *\u5B89\u88C5Publish Over SSH\u63D2\u4EF6\uFF0C\u4F7F\u7528\u63D2\u4EF6\u7684\u529F\u80FD\u89E6\u53D1\u8FDC\u7A0B\u7684shell\u811A\u672C\u7684\u6267\u884C
     */
    stage(&#39;\u81EA\u52A8\u90E8\u7F72\u4E0A\u4F20\u5230\u79C1\u670D\u4E2D\u7684\u6240\u6709\u955C\u50CF\u5230docker&#39;) {
        echo &#39;\u5F00\u59CB \u81EA\u52A8\u90E8\u7F72\u4E0A\u4F20\u5230\u79C1\u670D\u4E2D\u7684\u6240\u6709\u955C\u50CF\u5230docker...&#39;
        sshPublisher(
            publishers:
                [
                    sshPublisherDesc(
                        configName: &#39;cidocker&#39;,
                        transfers: [
                            sshTransfer(
                                cleanRemote: false,
                                excludes: &#39;&#39;,
                                execCommand: &quot;cd / &amp;&amp; ./springcloud-ci-docker.sh&quot;,
                                execTimeout: 600000,
                                flatten: false,
                                makeEmptyDirs: false,
                                noDefaultExcludes: false,
                                patternSeparator: &#39;[, ]+&#39;,
                                remoteDirectory: &#39;&#39;,
                                remoteDirectorySDF: false,
                                removePrefix: &#39;&#39;,
                                sourceFiles: &#39;&#39;
                            )
                        ],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: false
                    )
                ]
       )
       echo &#39;\u7ED3\u675F \u81EA\u52A8\u90E8\u7F72\u4E0A\u4F20\u5230\u79C1\u670D\u4E2D\u7684\u6240\u6709\u955C\u50CF\u5230docker...&#39;
    }

    echo &#39;\u5B8C\u6210\u6267\u884C\u81EA\u52A8\u5316...&#39;
}
</code></pre></div><pre><code>\u6CE8\u610F\u4E8B\u9879
\u6267\u884CJenkinsfile\u4E2D\u6267\u884C\u4E86mvn install\u547D\u4EE4\u540E,\u5C31\u4F1A\u89E6\u53D1 \u5C06\u751F\u6210\u7684jar\u62F7\u8D1D\u5230docker\u6587\u4EF6\u5939\u4E2D-&gt;build\u955C\u50CF-&gt;tag\u955C\u50CF-&gt;push\u955C\u50CF \u8FD9\u4E9B\u64CD\u4F5C,\u8FD9\u662F\u7531\u4E8E\u5728pom.xml\u4E2D\u628A\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u548Cinstall\u547D\u4EE4\u7ED1\u5B9A\u5728\u4E86\u4E00\u8D77,\u6240\u4EE5\u624D\u4F1A\u6709\u8FD9\u6837\u7684\u6548\u679C
</code></pre><h4 id="_16-3-7-2-\u5728jekins\u4E2D\u914D\u7F6E\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_16-3-7-2-\u5728jekins\u4E2D\u914D\u7F6E\u9879\u76EE" aria-hidden="true">#</a> 16.3.7.2.\u5728Jekins\u4E2D\u914D\u7F6E\u9879\u76EE</h4><pre><code>\u65B0\u5EFA\u4EFB\u52A1
DashBoard-&gt;\u65B0\u5EFA\u4EFB\u52A1-&gt;\u8F93\u5165\u4EFB\u52A1\u540D\u79F0(springcloud-eureka)-&gt;\u6D41\u6C34\u7EBF-&gt;\u786E\u5B9A
\u6216
DashBoard-&gt;\u70B9\u51FBspringcloud-eureka-&gt;\u914D\u7F6E

\u914D\u7F6E\u5982\u4E0B\u5B57\u6BB5
\u914D\u7F6E\u6D41\u6C34\u7EBF
a.\u5B9A\u4E49
Pipeline script from SCM(\u70B9\u51FB\u4E0B\u62C9\u6846\u9009\u62E9)
b.\u5B9A\u4E49-&gt;SCM
Git(\u70B9\u51FB\u4E0B\u62C9\u6846\u9009\u62E9)
c.\u5B9A\u4E49-&gt;SCM-&gt;Repositories(\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u4FE1\u606F\u8FDB\u884C\u914D\u7F6E)
Repository URL
https://gitee.com/lingwh1995/springcloud-eureka.git
d.\u5B9A\u4E49-&gt;SCM-&gt;\u811A\u672C\u8DEF\u5F84(\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u4FE1\u606F\u8FDB\u884C\u914D\u7F6E)
script/JenkinsfileCiDocker
</code></pre><h4 id="_16-3-7-3-\u7F16\u5199\u6301\u7EED\u96C6\u6210\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_16-3-7-3-\u7F16\u5199\u6301\u7EED\u96C6\u6210\u811A\u672C" aria-hidden="true">#</a> 16.3.7.3.\u7F16\u5199\u6301\u7EED\u96C6\u6210\u811A\u672C</h4><pre><code>\u5728192.168.0.4\u4E0A\u7F16\u5199\u6301\u7EED\u96C6\u6210\u811A\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd / &amp;&amp;
cat &gt; springcloud-ci-docker.sh &lt;&lt; EOF
docker login 192.168.0.5:5000 -uadmin -p123456
docker rmi -f 192.168.0.5:5000/springcloud-eureka/springcloud-ci-docker80
docker rm -f springcloud-ci-docker80
docker pull 192.168.0.5:5000/springcloud-eureka/springcloud-ci-docker80:latest
docker run -di --name=springcloud-ci-docker80 -p80:80 192.168.0.5:5000/springcloud-eureka/springcloud-ci-docker80
EOF
</code></pre></div><pre><code>\u8D4B\u4E88\u53EF\u6267\u884C\u6743\u9650
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>chmod +x springcloud-ci-docker.sh
</code></pre></div><h3 id="_16-3-8-\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230docker\u4E2D" tabindex="-1"><a class="header-anchor" href="#_16-3-8-\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230docker\u4E2D" aria-hidden="true">#</a> 16.3.8.\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230docker\u4E2D</h3><pre><code>\u4E3A\u4E86\u66F4\u660E\u663E\u7684\u67E5\u770B\u672C\u6B21\u6D4B\u8BD5\u6548\u679C,\u9996\u5148\u5220\u9664192.168.0.4\u4E2Ddocker\u4E2D\u5728\u524D\u9762\u73AF\u8282\u4EA7\u751F\u7684\u955C\u50CF\u548C\u5BB9\u5668

\u8BBF\u95EE\u9879\u76EE\u4E3B\u9875,\u70B9\u51FB\u6784\u5EFA\u6309\u94AE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.5:8080/jenkins/
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+e+`" width="100%"></div></div><pre><code>\u8BBF\u95EE\u670D\u52A1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.4/ci/docker
</code></pre></div><pre><code>\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{&quot;code&quot;:200,&quot;message&quot;:&quot;\u6301\u7EED\u96C6\u6210&quot;,&quot;data&quot;:&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230Docker&quot;}
</code></pre></div><h3 id="_16-3-9-\u4F7F\u7528webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_16-3-9-\u4F7F\u7528webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210" aria-hidden="true">#</a> 16.3.9.\u4F7F\u7528Webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210</h3><h4 id="_16-3-9-1-webhook\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_16-3-9-1-webhook\u7684\u4F5C\u7528" aria-hidden="true">#</a> 16.3.9.1.webhook\u7684\u4F5C\u7528</h4><pre><code>\u5728\u524D\u9762\u7684\u73AF\u8282\u4E2D,\u8BBF\u95EE\u9879\u76EE\u4E3B\u9875,\u70B9\u51FB\u6784\u5EFA\u6309\u94AE\u540E\u624D\u80FD\u89E6\u53D1\u6301\u7EED\u96C6\u6210,\u4F7F\u7528webhook\u53EF\u4EE5\u66F4\u65B9\u4FBF\u7684\u89E6\u53D1\u6301\u7EED\u96C6\u6210,\u914D\u7F6E\u597Dwebhook\u65F6,\u5F53\u63D0\u4EA4\u4EE3\u7801\u65F6\u5C31\u4F1A\u89E6\u53D1\u6301\u7EED\u96C6\u6210
</code></pre><h4 id="_16-3-9-2-\u4F7F\u7528webhook\u524D\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_16-3-9-2-\u4F7F\u7528webhook\u524D\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 16.3.9.2.\u4F7F\u7528webhook\u524D\u51C6\u5907\u5DE5\u4F5C</h4><pre><code>jenkins\u5B89\u88C5Gitee\u63D2\u4EF6
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-9.\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u73AF\u5883.html#_9-3-7-\u5B89\u88C5\u914D\u7F6Ejenkins\u7528\u5230\u7684\u63D2\u4EF6" target="_blank">jenkins\u5B89\u88C5Gitee\u63D2\u4EF6</a></p><pre><code>\u642D\u5EFA\u5185\u7F51\u7A7F\u900F
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-9.\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u73AF\u5883.html#_9-3-8-\u642D\u5EFA\u5185\u7F51\u7A7F\u900F" target="_blank">\u642D\u5EFA\u5185\u7F51\u7A7F\u900F</a> \u642D\u5EFA\u597D\u4E86\u5185\u7F51\u7A7F\u900F\u540E,\u53EF\u4EE5\u4F7F\u7528\u65B0\u7684\u5730\u5740\u6765\u8BBF\u95EEjenkins \u4E0D\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u8BBF\u95EEjenkins\u7684\u5730\u5740\u662F</p><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.5:8080/jenkins/
</code></pre></div><pre><code>\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u8BBF\u95EEjenkins\u7684\u5730\u5740\u662F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://8sybmw.natappfree.cc/jenkins
</code></pre></div><h4 id="_16-3-9-3-\u914D\u7F6E\u4F7F\u7528webhook" tabindex="-1"><a class="header-anchor" href="#_16-3-9-3-\u914D\u7F6E\u4F7F\u7528webhook" aria-hidden="true">#</a> 16.3.9.3.\u914D\u7F6E\u4F7F\u7528webhook</h4><pre><code>\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u8BBF\u95EEjenkins\u7684\u5730\u5740\u662F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://8sybmw.natappfree.cc/jenkins
</code></pre></div><pre><code>\u5728jenkins\u4E2D\u914D\u7F6Ejob
jenkins\u5177\u4F53\u9879\u76EE-&gt;\u914D\u7F6E-&gt;\u6784\u5EFA\u89E6\u53D1\u5668-&gt;Gitee webhook \u89E6\u53D1\u6784\u5EFA-&gt;Gitee WebHook \u5BC6\u7801\u2014&gt;\u5F97\u5230\u5BC6\u7801 0d71d48f211af16c477cf9c817ac612d

\u914D\u7F6Egitee\u7684webhook
\u8FDB\u5165gitee\u7684webhook\u914D\u7F6E\u754C\u9762(\u8FD9\u91CC\u7684url\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u8FDB\u884C\u4FEE\u6539)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>https://gitee.com/lingwh1995/springcloud-eureka/hooks
</code></pre></div><pre><code>\u70B9\u51FB\u6DFB\u52A0webHook-&gt;\u586B\u5199URL\u548CWebHook \u5BC6\u7801/\u7B7E\u540D\u5BC6\u94A5
URL
http://8sybmw.natappfree.cc/jenkins/gitee-project/springcloud-eureka
WebHook \u5BC6\u7801/\u7B7E\u540D\u5BC6\u94A5(\u4E0A\u9762\u5728jenkins\u4E2D\u751F\u6210\u7684)
0d71d48f211af16c477cf9c817ac612d

\u6D4B\u8BD5webhook\u662F\u5426\u914D\u7F6E\u6210\u529F(\u53EF\u4EE5\u6D4B\u8BD5,\u4E5F\u53EF\u4EE5\u4E0D\u6D4B\u8BD5)
\u70B9\u51FB\u6D4B\u8BD5-&gt;\u67E5\u770B\u66F4\u591A
</code></pre><h4 id="_16-3-9-4-\u914D\u7F6E\u4F7F\u7528\u7684jenkinsfile" tabindex="-1"><a class="header-anchor" href="#_16-3-9-4-\u914D\u7F6E\u4F7F\u7528\u7684jenkinsfile" aria-hidden="true">#</a> 16.3.9.4.\u914D\u7F6E\u4F7F\u7528\u7684Jenkinsfile</h4><pre><code>DashBoard-&gt;\u70B9\u51FBspringcloud-eureka-&gt;\u914D\u7F6E-&gt;\u6D41\u6C34\u7EBF-&gt;\u811A\u672C\u8DEF\u5F84-&gt;\u8F93\u5165 script/JenkinsfileCiDocker
</code></pre><h4 id="_16-3-9-5-\u6D4B\u8BD5\u4F7F\u7528webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_16-3-9-5-\u6D4B\u8BD5\u4F7F\u7528webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210" aria-hidden="true">#</a> 16.3.9.5.\u6D4B\u8BD5\u4F7F\u7528Webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210</h4><pre><code>\u4FEE\u6539springcloud-eureka/springcloud-ci-docker80/src/main/java/org/openatom/springcloud/controller/CiK8sController.java\u4E2D\u4EE3\u7801\u4E3A
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CiDockerController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/ci/docker&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u6301\u7EED\u96C6\u6210&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230Docker+\u6D4B\u8BD5WebHook&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><pre><code>\u5728git\u4E2D\u63D0\u4EA4\u4EE3\u7801

\u67E5\u770Bwebhook\u89E6\u53D1jenkins\u6784\u5EFA
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://8sybmw.natappfree.cc/jenkins/job/springcloud-eureka/
</code></pre></div><pre><code>\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.4/ci/docker
</code></pre></div><pre><code>\u8FD4\u56DE\u6570\u636E
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6301\u7EED\u96C6\u6210&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230Docker+\u6D4B\u8BD5WebHook&quot;</span><span class="token punctuation">}</span>
</code></pre></div><h2 id="_16-4-\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230k8s\u4E2D" tabindex="-1"><a class="header-anchor" href="#_16-4-\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230k8s\u4E2D" aria-hidden="true">#</a> 16.4.\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230k8s\u4E2D</h2><h3 id="_16-4-1-\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230k8s\u4E2D\u6D41\u7A0B\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_16-4-1-\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230k8s\u4E2D\u6D41\u7A0B\u8BF4\u660E" aria-hidden="true">#</a> 16.4.1.\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230k8s\u4E2D\u6D41\u7A0B\u8BF4\u660E</h3>`,67),w=a(`<h3 id="_16-4-2-\u642D\u5EFAdocker" tabindex="-1"><a class="header-anchor" href="#_16-4-2-\u642D\u5EFAdocker" aria-hidden="true">#</a> 16.4.2.\u642D\u5EFADocker</h3><pre><code>    \u5728192.168.0.4\u4E0A\u642D\u5EFAdocker
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-4.\u642D\u5EFAdocker\u6280\u672F\u6808.html#_4-3-1-\u5728\u7EBF\u5B89\u88C5docker" target="_blank">\u642D\u5EFAdocker</a></p><pre><code>\u5F00\u542Fminikube\u90E8\u7F72\u673A\u5668(192.168.0.4)\u4E0A\u7684docker2375\u7AEF\u53E3(\u4E3A\u4F7F\u7528docker\u7684maven\u63D2\u4EF6\u505A\u51C6\u5907)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim /lib/systemd/system/docker.service
</code></pre></div><pre><code>\u5176\u4E2DExecStart=\u540E\u6DFB\u52A0\u914D\u7F6E-H tcp://0.0.0.0:2375 -H unix:///var/run/docker.sock
\u5F00\u653E\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=2375/tcp --permanent &amp;&amp;
firewall-cmd --reload
</code></pre></div><pre><code>\u5237\u65B0daemon.json\u5E76\u91CD\u542F\u52A8docker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre></div><h3 id="_16-4-3-\u642D\u5EFAharbor" tabindex="-1"><a class="header-anchor" href="#_16-4-3-\u642D\u5EFAharbor" aria-hidden="true">#</a> 16.4.3.\u642D\u5EFAHarbor</h3><pre><code>\u5728192.168.0.5\u4E0A\u642D\u5EFAHarbor
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-4.\u642D\u5EFAdocker\u6280\u672F\u6808.html#_4-6-3-\u642D\u5EFAharbor\u79C1\u670D" target="_blank">\u642D\u5EFAharbor</a> \u914D\u7F6E192.168.0.4\u4E0A\u7684docker\u4FE1\u4EFB192.168.0.5\u4E0A\u7684harbor\u79C1\u670D</p><div class="language-text ext-text"><pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{
    &quot;insecure-registries&quot;:[&quot;192.168.0.5:5000&quot;]
}
</code></pre></div><pre><code>\u5237\u65B0daemon\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre></div><h3 id="_16-4-4-\u642D\u5EFAjenkins" tabindex="-1"><a class="header-anchor" href="#_16-4-4-\u642D\u5EFAjenkins" aria-hidden="true">#</a> 16.4.4.\u642D\u5EFAJenkins</h3><pre><code>\u5728192.168.0.5\u4E0A\u642D\u5EFAJenkins
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-9.\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u73AF\u5883.html#_9-3-\u4F7F\u7528\u672C\u5730\u5185\u7F51\u7A7F\u900F\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u73AF\u5883" target="_blank">\u642D\u5EFAJenkins</a></p><pre><code>\u5728Jenkins\u4E2D\u5B89\u88C5\u914D\u7F6EPublish Over SSH\u63D2\u4EF6(\u9700\u8981\u5148\u5B89\u88C5\u8BE5\u63D2\u4EF6)
\u914D\u7F6EJenkins\u6240\u5728\u670D\u52A1\u5668\u5230docker\u6240\u5728\u670D\u52A1\u5668\u7684\u514D\u5BC6\u767B\u5F55

\u8FDB\u5165Publish over SSH\u914D\u7F6E\u9762\u677F
DASHBOARD-&gt;Manage Jenkins/\u7CFB\u7EDF\u7BA1\u7406-&gt;Configure System(System Configuration\u4E0B)/\u7CFB\u7EDF\u914D\u7F6E(\u7CFB\u7EDF\u914D\u7F6E)-&gt;Publish over SSH

\u914D\u7F6E\u5982\u4E0B\u5B57\u6BB5
Publish over SSH
a.Passphrase(\u53EF\u4EE5\u914D\u7F6E\u4E5F\u53EF\u4EE5\u4E0D\u914D\u7F6E,\u4E0B\u9762\u7684\u914D\u7F6E\u4E2D\u4F1A\u8986\u76D6\u8FD9\u4E2A\u914D\u7F6E)
192.168.0.4\u673A\u5668\u7684\u5BC6\u7801

Publish over SSH-&gt;SSH Servers-&gt;\u65B0\u589E
a.Name(\u548CJenkinsfile\u4E2DsshPublisherDesc.configName\u4FDD\u6301\u4E00\u81F4)
cidocker
b.Hostname
192.168.0.4
c.Username
root
d.Remote Directory
/

Publish over SSH-&gt;SSH Servers-&gt;\u52FE\u9009Use password authentication, or use a different key
a.Passphrase / Password(\u6CE8\u610F:\u8FD9\u4E2A\u914D\u7F6E\u4F1A\u8986\u76D6Publish over SSH\u4E0Ba.\u4E2D\u7684\u914D\u7F6E)
192.168.0.4\u673A\u5668\u7684\u5BC6\u7801

\u6D4B\u8BD5\u8FDE\u901A\u6027(\u6210\u529F\u8FD4\u56DESuccess)
Publish over SSH-&gt;SSH Servers-&gt;Test Configuration

\u4FDD\u5B58\u914D\u7F6E
Publish over SSH-&gt;\u4FDD\u5B58
</code></pre><h3 id="_16-4-5-\u642D\u5EFAminikube\u6216k8s" tabindex="-1"><a class="header-anchor" href="#_16-4-5-\u642D\u5EFAminikube\u6216k8s" aria-hidden="true">#</a> 16.4.5.\u642D\u5EFAMinikube\u6216K8s</h3><pre><code>\u5728192.168.0.4\u4E0A\u642D\u5EFAminikube
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-6.\u642D\u5EFAMinikube.html#_6-\u642D\u5EFAminikube" target="_blank">\u642D\u5EFAminikube</a></p><pre><code>\u8FD9\u91CC\u4F7F\u7528minikube\u4F5C\u4E3Ak8s\u7684\u6F14\u793A\u73AF\u5883,\u5982\u8981\u642D\u5EFA\u9002\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u7684k8s\u73AF\u5883,\u8BF7\u53C2\u8003
kubeadm\u642D\u5EFAkubernetes
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-7.kubeadm\u642D\u5EFAKubernetes.html" target="_blank">minikube</a> \u4E8C\u8FDB\u5236\u5305\u642D\u5EFAkubernetes \u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-8.\u4E8C\u8FDB\u5236\u5305\u642D\u5EFAKubernetes.html" target="_blank">minikube</a></p><h3 id="_16-4-6-\u914D\u7F6Eminikube\u6216kubernetes" tabindex="-1"><a class="header-anchor" href="#_16-4-6-\u914D\u7F6Eminikube\u6216kubernetes" aria-hidden="true">#</a> 16.4.6.\u914D\u7F6EMinikube\u6216Kubernetes</h3><h4 id="_16-4-6-1-\u914D\u7F6Eminikube" tabindex="-1"><a class="header-anchor" href="#_16-4-6-1-\u914D\u7F6Eminikube" aria-hidden="true">#</a> 16.4.6.1.\u914D\u7F6Eminikube</h4><h5 id="_16-4-6-1-1-\u534F\u8BAE\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_16-4-6-1-1-\u534F\u8BAE\u7C7B\u578B" aria-hidden="true">#</a> 16.4.6.1.1.\u534F\u8BAE\u7C7B\u578B</h5><pre><code>docker: tcp
harbor: http
</code></pre><h5 id="_16-4-6-1-2-\u914D\u7F6E\u914D\u7F6Eminikube\u7684\u6240\u6709\u5DE5\u4F5C\u8282\u70B9\u4E0A\u7684\u4F7F\u7528\u7684docker" tabindex="-1"><a class="header-anchor" href="#_16-4-6-1-2-\u914D\u7F6E\u914D\u7F6Eminikube\u7684\u6240\u6709\u5DE5\u4F5C\u8282\u70B9\u4E0A\u7684\u4F7F\u7528\u7684docker" aria-hidden="true">#</a> 16.4.6.1.2.\u914D\u7F6E\u914D\u7F6Eminikube\u7684\u6240\u6709\u5DE5\u4F5C\u8282\u70B9\u4E0A\u7684\u4F7F\u7528\u7684docker</h5><pre><code>\u914D\u7F6Eminikube\u6216kubernetes\u7684\u6240\u6709\u5DE5\u4F5C\u8282\u70B9\u4E0A\u7684docker\u4FE1\u4EFBharbor\u79C1\u670D
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim /etc/docker/daemon.json
</code></pre></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{
    &quot;insecure-registries&quot;:[&quot;192.168.0.5:5000&quot;]
}
</code></pre></div><pre><code>\u5237\u65B0daemon\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl daemon-reload &amp;&amp;
systemctl restart docker
</code></pre></div><h5 id="_16-4-6-1-3-\u914D\u7F6Edocker\u4E2Dminikube\u5BB9\u5668\u5185\u90E8\u4F7F\u7528\u7684docker" tabindex="-1"><a class="header-anchor" href="#_16-4-6-1-3-\u914D\u7F6Edocker\u4E2Dminikube\u5BB9\u5668\u5185\u90E8\u4F7F\u7528\u7684docker" aria-hidden="true">#</a> 16.4.6.1.3.\u914D\u7F6Edocker\u4E2Dminikube\u5BB9\u5668\u5185\u90E8\u4F7F\u7528\u7684docker</h5><pre><code>\u8FDB\u5165minikube\u7EC8\u7AEF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>minikube ssh
</code></pre></div><pre><code>\u914D\u7F6E/usr/lib/systemd/system/docker.service
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo vi /usr/lib/systemd/system/docker.service
</code></pre></div><pre><code>ExecStart=/usr/bin/dockerd\u540E\u6DFB\u52A0insecure-registry\u914D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>--insecure-registry=192.168.0.5:5000
</code></pre></div><pre><code>\u5237\u65B0daemon\u5E76\u91CD\u542Fdocker
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo systemctl daemon-reload &amp;&amp;
sudo systemctl restart docker
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+g+`" width="100%"></div></div><h5 id="_16-4-6-1-4-\u914D\u7F6Eminikube\u4ECEharbor\u62C9\u53D6\u955C\u50CF\u65F6\u4F7F\u7528\u7684\u79D8\u94A5" tabindex="-1"><a class="header-anchor" href="#_16-4-6-1-4-\u914D\u7F6Eminikube\u4ECEharbor\u62C9\u53D6\u955C\u50CF\u65F6\u4F7F\u7528\u7684\u79D8\u94A5" aria-hidden="true">#</a> 16.4.6.1.4.\u914D\u7F6EMinikube\u4ECEharbor\u62C9\u53D6\u955C\u50CF\u65F6\u4F7F\u7528\u7684\u79D8\u94A5</h5><pre><code>a.\u6839\u636Edocker\u7528\u6237\u540D\u5BC6\u7801\u521B\u5EFA\u79D8\u94A5
\u521B\u5EFA\u79D8\u94A5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl create secret docker-registry harbor-login \\
--docker-server=192.168.0.5:5000 \\
--docker-username=admin \\
--docker-password=123456
</code></pre></div><pre><code>\u67E5\u770B\u521B\u5EFA\u7684\u79D8\u94A5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl get secret
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>kubectl get secret regcred --output=yaml
</code></pre></div><pre><code>b.\u57FA\u4E8E\u73B0\u6709docker\u767B\u5F55\u51ED\u8BC1\u4F7F\u7528yaml\u521B\u5EFA\u79D8\u94A5
\u767B\u5F55docker\u955C\u50CF\u4ED3\u5E93
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker login 192.168.0.4:5000 --username docker -password 123456
</code></pre></div><pre><code>\u67E5\u770B\u751F\u6210\u7684docker\u767B\u5F55\u51ED\u8BC1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat ~/.docker/config.json
</code></pre></div><pre><code>\u4EE5base64\u7F16\u7801\u683C\u5F0F\u67E5\u770Bdocker\u767B\u5F55\u51ED\u8BC1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat ~/.docker/config.json | base64 -w 0
</code></pre></div><pre><code>\u521B\u5EFA\u7528\u4E8E\u521B\u5EFA\u79D8\u94A5\u7684yaml
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat &gt; harbor_secret.yaml &lt;&lt; EOF
apiVersion: v1
kind: Secret
metadata:
  name: harbor-login
type: kubernetes.io/dockerconfigjson
data:
  .dockerconfigjson: ewoJImF1dGhzIjogewoJCSIxOTIuMTY4LjAuNTo1MDAwIjogewoJCQkiYXV0aCI6ICJZV1J0YVc0Nk1USXpORFUyIgoJCX0KCX0KfQ==
EOF
</code></pre></div><pre><code>\u521B\u5EFA\u79D8\u94A5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl create -f harbor_secret.yaml
</code></pre></div><pre><code>\u67E5\u770B\u521B\u5EFA\u7684\u79D8\u94A5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl get secret
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>kubectl get secret regcred --output=yaml
</code></pre></div><pre><code>c.\u57FA\u4E8E\u73B0\u6709docker\u767B\u5F55\u51ED\u8BC1\u5F15\u7528config.json\u521B\u5EFA\u79D8\u94A5
\u767B\u5F55docker\u955C\u50CF\u4ED3\u5E93
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker login 192.168.0.4:5000 --username docker -password 123456
</code></pre></div><pre><code>\u67E5\u770B\u751F\u6210\u7684docker\u767B\u5F55\u4FE1\u606F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat ~/.docker/config.json
</code></pre></div><pre><code>\u6839\u636E\u751F\u6210\u7684docker\u767B\u5F55\u4FE1\u606F\u521B\u5EFA\u79D8\u94A5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl create secret generic harbor-login \\
    --from-file=.dockerconfigjson=/root/.docker/config.json \\
    --type=kubernetes.io/dockerconfigjson
</code></pre></div><pre><code>\u67E5\u770B\u521B\u5EFA\u7684\u79D8\u94A5
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>kubectl get secret
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>kubectl get secret regcred --output=yaml
</code></pre></div><h4 id="_16-4-6-2-\u914D\u7F6Ekubernetes" tabindex="-1"><a class="header-anchor" href="#_16-4-6-2-\u914D\u7F6Ekubernetes" aria-hidden="true">#</a> 16.4.6.2.\u914D\u7F6Ekubernetes</h4><h5 id="_16-4-6-2-1-\u534F\u8BAE\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_16-4-6-2-1-\u534F\u8BAE\u7C7B\u578B" aria-hidden="true">#</a> 16.4.6.2.1.\u534F\u8BAE\u7C7B\u578B</h5><pre><code>docker: tcp
harbor: http
</code></pre><h4 id="_16-4-6-3-\u914D\u7F6Eminikube" tabindex="-1"><a class="header-anchor" href="#_16-4-6-3-\u914D\u7F6Eminikube" aria-hidden="true">#</a> 16.4.6.3.\u914D\u7F6Eminikube</h4><h5 id="_16-4-6-3-1-\u534F\u8BAE\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_16-4-6-3-1-\u534F\u8BAE\u7C7B\u578B" aria-hidden="true">#</a> 16.4.6.3.1.\u534F\u8BAE\u7C7B\u578B</h5><pre><code>docker: tcp
harbor: https
</code></pre><h4 id="_16-4-6-4-\u914D\u7F6Ekubernetes" tabindex="-1"><a class="header-anchor" href="#_16-4-6-4-\u914D\u7F6Ekubernetes" aria-hidden="true">#</a> 16.4.6.4.\u914D\u7F6EKubernetes</h4><h5 id="_16-4-6-4-1-\u534F\u8BAE\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#_16-4-6-4-1-\u534F\u8BAE\u7C7B\u578B" aria-hidden="true">#</a> 16.4.6.4.1.\u534F\u8BAE\u7C7B\u578B</h5><pre><code>docker: tcp
harbor: https
</code></pre><h3 id="_16-4-7-\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u4F7F\u7528\u7684\u5FAE\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_16-4-7-\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u4F7F\u7528\u7684\u5FAE\u670D\u52A1" aria-hidden="true">#</a> 16.4.7.\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u4F7F\u7528\u7684\u5FAE\u670D\u52A1</h3><h4 id="_16-4-7-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_16-4-7-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 16.4.7.1.\u6A21\u5757\u7B80\u4ECB</h4><pre><code>\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230k8s\u4E2D\u4F7F\u7528\u5230\u7684\u5FAE\u670D\u52A1
</code></pre><h4 id="_16-4-7-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_16-4-7-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 16.4.7.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h4><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-ci-k8s80
|-- docker
|   \u2022-- Dockerfile
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               |-- controller
|       |               |   \u2022-- CiK8sController.java
|       |               \u2022-- CiK8s80.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h4 id="_16-4-7-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_16-4-7-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 16.4.7.3.\u521B\u5EFA\u6A21\u5757</h4><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-ci-k8s80\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h4 id="_16-4-7-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_16-4-7-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 16.4.7.4.\u7F16\u5199\u6A21\u5757pom.xml</h4><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-ci-k8s80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.registry.uri</span><span class="token punctuation">&gt;</span></span>192.168.0.5:5000<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.registry.uri</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.registry.username</span><span class="token punctuation">&gt;</span></span>admin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.registry.username</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.registry.password</span><span class="token punctuation">&gt;</span></span>123456<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.registry.password</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.host</span><span class="token punctuation">&gt;</span></span>tcp://192.168.0.4:2375<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.host</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u8BBE\u7F6E\u5F53\u524D\u670D\u52A1\u7AEF\u53E3--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.container.port</span><span class="token punctuation">&gt;</span></span>80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.container.port</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--docker\u5BB9\u5668\u7AEF\u53E3\u6620\u5C04--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>docker.port.mapping</span><span class="token punctuation">&gt;</span></span>\${docker.container.port}:\${docker.container.port}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>docker.port.mapping</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-actuator<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u5F15\u5165\u516C\u5171\u7684\u5DE5\u7A0B--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--\u70ED\u90E8\u7F72\u9700\u8981\u52A0\u8FD9\u4E2A--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>finalName</span><span class="token punctuation">&gt;</span></span>\${project.artifactId}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>finalName</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--\u628A\u5F53\u524D\u63D2\u4EF6repackage\u547D\u4EE4\u548Cmaven\u7684package\u7ED1\u5B9A--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>repackage-original<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>package<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>repackage<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fork</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fork</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>addResources</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>addResources</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.maven.plugins<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>maven-antrun-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>del-jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>clean<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tasks</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!-- \u8FD9\u662F\u5C06\u5F53\u524D\u6A21\u5757\u4E0B\u7684target\u4E0B\u7684jar\u5305\u5220\u9664--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>docker/\${build.finalName}.jar<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tasks</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>run<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>copy-jar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tasks</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!-- \u8FD9\u662F\u5C06\u5F53\u524D\u6A21\u5757\u4E0B\u7684target\u4E0B\u7684jar\u5305copy\u5230\u5F53\u524D\u6A21\u5757\u6839\u76EE\u5F55\u4E0Bdocker\u76EE\u5F55\u4E2D--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>copy</span> <span class="token attr-name">todir</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>docker<span class="token punctuation">&quot;</span></span> <span class="token attr-name">file</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>target/\${build.finalName}.jar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>copy</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tasks</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>run<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.fabric8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>docker-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dockerHost</span><span class="token punctuation">&gt;</span></span>\${docker.host}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dockerHost</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>removeMode</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>removeMode</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--
                        harbor\u955C\u50CF\u4ED3\u5E93\u8BA4\u8BC1\u914D\u7F6E
                        \u6CE8\u610F:\u4E0D\u7BA1\u662Fharbor\u4E2D\u662F\u516C\u5F00\u9879\u76EE\u8FD8\u662F\u79C1\u5BC6\u9879\u76EE\uFF0C\u8FD9\u4E2A\u914D\u7F6E\u90FD\u8981\u52A0\uFF0C\u4E0D\u52A0\u65E0\u6CD5push\u6210\u529F
                    --&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>authConfig</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>username</span><span class="token punctuation">&gt;</span></span>\${docker.registry.username}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>username</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>password</span><span class="token punctuation">&gt;</span></span>\${docker.registry.password}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>password</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>authConfig</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>images</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!--\u663E\u793A\u65E5\u5FD7\u7684\u65F6\u5019--&gt;</span>
                            <span class="token comment">&lt;!--&lt;alias&gt;spring-cloud-eureka&lt;/alias&gt;--&gt;</span>
                            <span class="token comment">&lt;!--\u5982\u679C\u53EA\u7ED9docker\u672C\u5730\u955C\u50CF\u5E93\u4E2D\u63A8\u9001,\u683C\u5F0F\u4E3A \u547D\u540D\u7A7A\u95F4/\u9879\u76EE\u540D\u79F0:tags\u540D\u79F0,\u793A\u4F8B:\u9879\u76EEartifactId/\u6A21\u5757artifactId--&gt;</span>
                            <span class="token comment">&lt;!--&lt;name&gt;\${project.parent.artifactId}/\${project.name}&lt;/name&gt;--&gt;</span>
                            <span class="token comment">&lt;!--
                                \u5982\u679C\u8981\u540C\u65F6\u7ED9\u79C1\u670D\u4E2D\u63A8\u9001,\u683C\u5F0F\u4E3A registry\u7684ip:\u547D\u540D\u7A7A\u95F4/\u9879\u76EE\u540D\u79F0:tags\u540D\u79F0,\u793A\u4F8B:\u79C1\u670D\u7684ip:\u9879\u76EEartifactId/\u6A21\u5757artifactId
                                \u4E5F\u53EF\u5C06registry\u5355\u72EC\u5199\u5728\u4E0B\u9762
                            --&gt;</span>
                            <span class="token comment">&lt;!--&lt;name&gt;\u955C\u50CF\u540D\u79F0:\${docker.registry}/\${project.parent.artifactId}/\${project.name}&lt;/name&gt;--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>\${project.parent.artifactId}/\${project.name}:latest<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>registry</span><span class="token punctuation">&gt;</span></span>\${docker.registry.uri}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>registry</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!--\u5B9A\u4E49\u955C\u50CF\u6784\u5EFA\u884C\u4E3A--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!-- \u6307\u5B9Adockerfile\u6587\u4EF6\u7684\u4F4D\u7F6E--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dockerFile</span><span class="token punctuation">&gt;</span></span>\${project.basedir}/docker/Dockerfile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dockerFile</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
                            <span class="token comment">&lt;!-- \u5B9A\u4E49\u5BB9\u5668\u542F\u52A8\u884C\u4E3A--&gt;</span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>run</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!--\u8BBE\u7F6E\u5BB9\u5668\u540D\uFF0C\u53EF\u91C7\u7528\u901A\u914D\u7B26--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>containerNamePattern</span><span class="token punctuation">&gt;</span></span>\${project.parent.artifactId}_\${project.build.finalName}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>containerNamePattern</span><span class="token punctuation">&gt;</span></span>
                                <span class="token comment">&lt;!--\u8BBE\u7F6E\u7AEF\u53E3\u6620\u5C04--&gt;</span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ports</span><span class="token punctuation">&gt;</span></span>
                                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>port</span><span class="token punctuation">&gt;</span></span>\${docker.port.mapping}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>port</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ports</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>run</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>images</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>buildArgs</span><span class="token punctuation">&gt;</span></span>
                        <span class="token comment">&lt;!--docker\u79C1\u670D\u5730\u5740--&gt;</span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DOCKER_REGISTRY_URL</span><span class="token punctuation">&gt;</span></span>\${docker.registry.uri}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DOCKER_REGISTRY_URL</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>buildArgs</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u5982\u679C\u60F3\u5728\u9879\u76EEinstall\u65F6\u6784\u5EFA\u955C\u50CF\u6DFB\u52A0--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>build-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>build<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u5982\u679C\u60F3\u5728\u9879\u76EEinstall\u65F6\u6784\u5EFA\u955C\u50CF\u6DFB\u52A0--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>tag-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>tag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u5982\u679C\u60F3\u5728\u9879\u76EEinstall\u65F6\u63A8\u9001\u955C\u50CF\u5230\u79C1\u670D\u6DFB\u52A0--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>push-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>push<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u5982\u679C\u60F3\u5728\u9879\u76EEinstall\u65F6\u63A8\u9001\u955C\u50CF\u5230\u79C1\u670D\u540E\u5220\u9664\u5E76docker\u4E2D\u672C\u5730build\u7684\u955C\u50CF\u6DFB\u52A0--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>remove-image<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>install<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>remove<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>executions</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugin</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u6253\u5305\u591A\u73AF\u5883--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/resources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>application.yml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h4 id="_16-4-7-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_16-4-7-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 16.4.7.5.\u7F16\u5199\u6A21\u5757application.yml</h4><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>

</code></pre></div><h4 id="_16-4-7-6-\u7F16\u5199\u6A21\u5757controller" tabindex="-1"><a class="header-anchor" href="#_16-4-7-6-\u7F16\u5199\u6A21\u5757controller" aria-hidden="true">#</a> 16.4.7.6.\u7F16\u5199\u6A21\u5757controller</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CiK8sController</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/ci/k8s&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u6301\u7EED\u96C6\u6210&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230K8s+\u6D4B\u8BD5WebHook&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h4 id="_16-4-7-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_16-4-7-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 16.4.7.7.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CiK8s80</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">CiK8s80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h4 id="_16-4-7-8-\u7F16\u5199\u6A21\u5757dockerfile" tabindex="-1"><a class="header-anchor" href="#_16-4-7-8-\u7F16\u5199\u6A21\u5757dockerfile" aria-hidden="true">#</a> 16.4.7.8.\u7F16\u5199\u6A21\u5757Dockerfile</h4><pre><code>\u6CE8\u610F:\u9700\u8981\u5148\u5728 \u9879\u76EE\u6839\u76EE\u5F55/springcloud-ci-k8s80\u4E0B\u521B\u5EFAdocker\u6587\u4EF6\u5939
</code></pre><p>FROM java:8 VOLUME /software MAINTAINER lingwh COPY \${project.build.finalName}.jar app.jar ENTRYPOINT [&quot;java&quot;,&quot;-jar&quot;,&quot;/app.jar&quot;]</p><div class="language-text ext-text"><pre class="language-text"><code>#### 16.4.7.9.\u672C\u5730\u6D4B\u8BD5\u6A21\u5757
    \u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre></div><p>http://localhost/ci/k8s</p><div class="language-text ext-text"><pre class="language-text"><code>    \u8FD4\u56DE\u6570\u636E
\`\`\`json
{&quot;code&quot;:200,&quot;message&quot;:&quot;\u6301\u7EED\u96C6\u6210&quot;,&quot;data&quot;:&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230K8s&quot;}
</code></pre></div><h3 id="_16-4-8-\u6D4B\u8BD5docker\u7684maven\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_16-4-8-\u6D4B\u8BD5docker\u7684maven\u63D2\u4EF6" aria-hidden="true">#</a> 16.4.8.\u6D4B\u8BD5docker\u7684maven\u63D2\u4EF6</h3><pre><code>\u542F\u52A8\u76F8\u5173\u670D\u52A1
</code></pre>`,107),j=a(`<pre><code>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C\u6253\u5305\u547D\u4EE4
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mvn clean install
</code></pre></div><pre><code>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u6267\u884C\u590D\u5236\u751F\u6210\u7684jar\u5305\u5230\u6307\u5B9A\u4F4D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cp springcloud-ci-k8s80/target/springcloud-ci-k8s80.jar springcloud-ci-k8s80/docker
</code></pre></div><pre><code>\u5728idea\u4E2D\u6253\u5F00docker\u7684maven\u63D2\u4EF6\u64CD\u4F5C\u9762\u677F
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+d+`" width="100%"></div></div><pre><code>\u5236\u4F5CDocker\u955C\u50CF\u5E76\u4E0A\u4F20\u955C\u50CF\u5230docker\u5236\u4F5CDocker\u955C\u50CF
\u70B9\u51FBdocker:build

\u4E0A\u4F20\u955C\u50CF\u5230docker\u540E\u5728docker\u4E2D\u4E3A\u8BE5\u955C\u50CF\u521B\u5EFA\u5BB9\u5668\u5E76\u542F\u52A8docker\u4E2D\u7684\u5BB9\u5668
\u70B9\u51FBdocker:build-&gt;\u70B9\u51FBdocker:run

\u6D4B\u8BD5\u90E8\u7F72\u5230docker\u4E2D\u7684\u670D\u52A1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.4/ci/k8s
</code></pre></div><pre><code>\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{&quot;code&quot;:200,&quot;message&quot;:&quot;\u6301\u7EED\u96C6\u6210&quot;,&quot;data&quot;:&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230K8s&quot;}
</code></pre></div><pre><code>\u5728harbor\u79C1\u670D\u4E2D\u521B\u5EFAspringcloud-eureka\u9879\u76EE
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+o+`" width="100%"></div></div><pre><code>\u63A8\u9001\u5230harbor\u79C1\u670D
\u70B9\u51FBdocker:build-&gt;\u70B9\u51FBdocker:push
\u767B\u5F55harbor\u79C1\u670D\u67E5\u770B\u521A\u624D\u63A8\u9001\u4E0A\u53BB\u7684\u7684\u670D\u52A1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.5:5000/harbor/projects
</code></pre></div><pre><code>\u70B9\u51FBspringcloud-eureka\u8FD9\u4E2A\u9879\u76EE
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+m+`" width="100%"></div></div><pre><code>\u53EF\u4EE5\u770B\u5230\u5F53\u524D\u6A21\u5757\u5FAE\u670D\u52A1\u5DF2\u7ECF\u88AB\u63A8\u9001\u5230\u4E86harbor\u79C1\u670D\u4E2D
</code></pre><h3 id="_16-4-9-\u6301\u7EED\u96C6\u6210jekins\u76F8\u5173\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_16-4-9-\u6301\u7EED\u96C6\u6210jekins\u76F8\u5173\u914D\u7F6E" aria-hidden="true">#</a> 16.4.9.\u6301\u7EED\u96C6\u6210Jekins\u76F8\u5173\u914D\u7F6E</h3><h4 id="_16-4-9-1-\u7F16\u5199jenkinsfile" tabindex="-1"><a class="header-anchor" href="#_16-4-9-1-\u7F16\u5199jenkinsfile" aria-hidden="true">#</a> 16.4.9.1.\u7F16\u5199Jenkinsfile</h4><pre><code>\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u65B0\u5EFAscript\u6587\u4EF6\u5939,\u5728script\u4E2D\u65B0\u5EFAJenkinsfileCiK8s,\u5185\u5BB9\u5982\u4E0B
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>//\u5B9A\u4E49\u8FDC\u7A0Bgit\u4ED3\u5E93\u4E2D\u9879\u76EE\u7684\u5730\u5740
def project_url=&#39;https://gitee.com/lingwh1995/springcloud-eureka.git&#39;

def jenkins_ip=&#39;192.168.0.5&#39;

node {
    echo &#39;\u5F00\u59CB\u6267\u884C\u81EA\u52A8\u5316...&#39;
    /*\u6307\u5B9A\u5728\u90A3\u53F0Jenkins\u8282\u70B9\u4E0A\u8FD0\u884C*/
    agent { label &#39;\${jenkins_ip}&#39;}

    /*\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u68C0\u51FA\u4EE3\u7801*/
    stage(&#39;\u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u68C0\u51FA\u4EE3\u7801&#39;) {
        echo &#39;\u5F00\u59CB \u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u68C0\u51FA\u4EE3\u7801...&#39;
        checkout([
            $class: &#39;GitSCM&#39;,
            branches: [[name: &#39;*/master&#39;]], extensions: [],
            userRemoteConfigs: [[url: &quot;\${project_url}&quot;]]
        ])
        echo &#39;\u5B8C\u6210 \u4ECE\u8FDC\u7A0B\u4ED3\u5E93\u68C0\u51FA\u4EE3\u7801...&#39;
    }

    /**
     * maven\u547D\u4EE4\u6269\u5C55:\u5B9E\u73B0\u591A\u6A21\u5757\u60C5\u51B5\u4E0B\u53EA\u9488\u5BF9\u67D0\u4E00\u4E2A\u6A21\u5757\u6253\u5305
     * -pl, --projects
     *      Build specified reactor projects instead of all projects
     *      \u6307\u5B9A\u9879\u76EE\u5176\u4E2D\u7684\u4E00\u4E2A\u6A21\u5757\u53CA\u5176\u4F9D\u8D56
     *  -am, --also-make
     *      If project list is specified, also build projects required by the list
     *      \u81EA\u52A8\u6784\u5EFA\u8BE5\u6A21\u5757\u6240\u4F9D\u8D56\u7684\u5176\u4ED6\u6A21\u5757
     *
     */
    stage(&#39;\u6253\u5305-&gt;\u5B89\u88C5-&gt;\u6784\u5EFA\u955C\u50CF-&gt;\u63A8\u9001\u5230\u79C1\u670D-&gt;\u5220\u9664docker\u4E2D\u672C\u5730\u955C\u50CF&#39;) {
        echo &#39;\u5F00\u59CB \u6253\u5305-&gt;\u5B89\u88C5-&gt;\u6784\u5EFA\u955C\u50CF-&gt;\u63A8\u9001\u5230\u79C1\u670D-&gt;\u5220\u9664docker\u4E2D\u672C\u5730\u955C\u50CF...&#39;
        //\u5982\u679Cinstall\u7684\u662F\u4E00\u4E2A\u6A21\u5757\u6216\u8005\u662F\u591A\u4E2A\u6A21\u5757
            //\u6267\u884C\u904D\u5386\u4F9D\u6B21\u6B21\u6253\u5305\u6D89\u53CA\u7684\u6A21\u5757
        //\u5982\u679C\u662Finstall\u7684\u662F\u6574\u4E2A\u9879\u76EE
            //\u4E00\u6B21\u6027\u6253\u5305\u6574\u4E2A\u9879\u76EE
        sh &quot;mvn clean install -T 1C -Dmaven.test.skip=true -Dmaven.compile.fork=true -pl springcloud-ci-docker80 -am&quot;
        echo &#39;\u5B8C\u6210 \u6253\u5305-&gt;\u5B89\u88C5-&gt;\u6784\u5EFA\u955C\u50CF-&gt;\u63A8\u9001\u5230\u79C1\u670D-&gt;\u5220\u9664docker\u4E2D\u672C\u5730\u955C\u50CF...&#39;
    }

    /**
     *\u5B89\u88C5Publish Over SSH\u63D2\u4EF6\uFF0C\u4F7F\u7528\u63D2\u4EF6\u7684\u529F\u80FD\u89E6\u53D1\u8FDC\u7A0B\u7684shell\u811A\u672C\u7684\u6267\u884C
     */
    stage(&#39;\u81EA\u52A8\u90E8\u7F72\u4E0A\u4F20\u5230\u79C1\u670D\u4E2D\u7684\u6240\u6709\u955C\u50CF\u5230docker&#39;) {
        echo &#39;\u5F00\u59CB \u81EA\u52A8\u90E8\u7F72\u4E0A\u4F20\u5230\u79C1\u670D\u4E2D\u7684\u6240\u6709\u955C\u50CF\u5230k8s...&#39;
        sshPublisher(
            publishers:
                [
                    sshPublisherDesc(
                        configName: &#39;cik8s&#39;,
                        transfers: [
                            sshTransfer(
                                cleanRemote: false,
                                excludes: &#39;&#39;,
                                execCommand: &quot;cd / &amp;&amp; ./springcloud-ci-k8s.sh&quot;,
                                execTimeout: 600000,
                                flatten: false,
                                makeEmptyDirs: false,
                                noDefaultExcludes: false,
                                patternSeparator: &#39;[, ]+&#39;,
                                remoteDirectory: &#39;&#39;,
                                remoteDirectorySDF: false,
                                removePrefix: &#39;&#39;,
                                sourceFiles: &#39;&#39;
                            )
                        ],
                        usePromotionTimestamp: false,
                        useWorkspaceInPromotion: false,
                        verbose: false
                    )
                ]
       )
       echo &#39;\u7ED3\u675F \u81EA\u52A8\u90E8\u7F72\u4E0A\u4F20\u5230\u79C1\u670D\u4E2D\u7684\u6240\u6709\u955C\u50CF\u5230k8s...&#39;
    }

    echo &#39;\u5B8C\u6210\u6267\u884C\u81EA\u52A8\u5316...&#39;
}
</code></pre></div><pre><code>\u6CE8\u610F\u4E8B\u9879
\u6267\u884CJenkinsfile\u4E2D\u6267\u884C\u4E86mvn install\u547D\u4EE4\u540E,\u5C31\u4F1A\u89E6\u53D1 \u5C06\u751F\u6210\u7684jar\u62F7\u8D1D\u5230docker\u6587\u4EF6\u5939\u4E2D-&gt;build\u955C\u50CF-&gt;tag\u955C\u50CF-&gt;push\u955C\u50CF \u8FD9\u4E9B\u64CD\u4F5C,\u8FD9\u662F\u7531\u4E8E\u5728pom.xml\u4E2D\u628A\u8FD9\u4E9B\u64CD\u4F5C\u90FD\u548Cinstall\u547D\u4EE4\u7ED1\u5B9A\u5728\u4E86\u4E00\u8D77,\u6240\u4EE5\u624D\u4F1A\u6709\u8FD9\u6837\u7684\u6548\u679C
</code></pre><h4 id="_16-4-9-2-\u5728jekins\u4E2D\u914D\u7F6E\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#_16-4-9-2-\u5728jekins\u4E2D\u914D\u7F6E\u9879\u76EE" aria-hidden="true">#</a> 16.4.9.2.\u5728Jekins\u4E2D\u914D\u7F6E\u9879\u76EE</h4><pre><code>\u65B0\u5EFA\u4EFB\u52A1
DashBoard-&gt;\u65B0\u5EFA\u4EFB\u52A1-&gt;\u8F93\u5165\u4EFB\u52A1\u540D\u79F0(springcloud-eureka)-&gt;\u6D41\u6C34\u7EBF-&gt;\u786E\u5B9A

\u914D\u7F6E\u5982\u4E0B\u5B57\u6BB5
\u914D\u7F6E\u6D41\u6C34\u7EBF
a.\u5B9A\u4E49
Pipeline script from SCM(\u70B9\u51FB\u4E0B\u62C9\u6846\u9009\u62E9)
b.\u5B9A\u4E49-&gt;SCM
Git(\u70B9\u51FB\u4E0B\u62C9\u6846\u9009\u62E9)
c.\u5B9A\u4E49-&gt;SCM-&gt;Repositories(\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u4FE1\u606F\u8FDB\u884C\u914D\u7F6E)
Repository URL
https://gitee.com/lingwh1995/springcloud-eureka.git
d.\u5B9A\u4E49-&gt;SCM-&gt;\u811A\u672C\u8DEF\u5F84(\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u4FE1\u606F\u8FDB\u884C\u914D\u7F6E)
script/JenkinsfileCiK8s
</code></pre><h4 id="_16-4-9-3-\u7F16\u5199yaml\u548C\u6301\u7EED\u96C6\u6210\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_16-4-9-3-\u7F16\u5199yaml\u548C\u6301\u7EED\u96C6\u6210\u811A\u672C" aria-hidden="true">#</a> 16.4.9.3.\u7F16\u5199yaml\u548C\u6301\u7EED\u96C6\u6210\u811A\u672C</h4><pre><code>\u5728192.168.0.4\u7F16\u5199springcloud-ci-k8s.yaml
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat &gt; springcloud-ci-k8s.yaml &lt;&lt; EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: springcloud-ci-k8s80
spec:
  replicas: 1
  selector:
    matchLabels:
      app: springcloud-ci-k8s80
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 0
  template:
    metadata:
      labels:
        app: springcloud-ci-k8s80
    spec:
      imagePullSecrets:
      - name: harbor-login
      containers:
      - name: springcloud-ci-k8s80
        image: 192.168.0.5:5000/springcloud-eureka/springcloud-ci-k8s80:latest
        imagePullPolicy: Always
        ports:
        - containerPort: 80    #containerPort\u662F\u5728pod\u63A7\u5236\u5668\u4E2D\u5B9A\u4E49\u7684\u3001pod\u4E2D\u7684\u5BB9\u5668\u9700\u8981\u66B4\u9732\u7684\u7AEF\u53E3

---
apiVersion: v1
kind: Service
metadata:
  labels:
    app: springcloud-ci-k8s80
  name: springcloud-ci-k8s80
  namespace: default
spec:
  ports:
  - name: springcloud-ci-k8s80
    protocol: TCP
    targetPort: 80
    nodePort: 30090
    port: 80
  selector:
    app: springcloud-ci-k8s80
  type: NodePort
EOF
</code></pre></div><pre><code>\u5728192.168.0.4\u4E0A\u7F16\u5199\u6301\u7EED\u96C6\u6210\u811A\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd / &amp;&amp;
cat &gt; springcloud-ci-k8s.sh &lt;&lt; EOF
kubectl apply -f springcloud-ci-k8s.yaml
EOF
</code></pre></div><pre><code>\u8D4B\u4E88\u53EF\u6267\u884C\u6743\u9650
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>chmod +x springcloud-ci-k8s.sh
</code></pre></div><h3 id="_16-4-10-\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230minikube\u4E2D\u6216k8s\u4E2D" tabindex="-1"><a class="header-anchor" href="#_16-4-10-\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230minikube\u4E2D\u6216k8s\u4E2D" aria-hidden="true">#</a> 16.4.10.\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230minikube\u4E2D\u6216k8s\u4E2D</h3><h4 id="_16-4-10-1-\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230minikube\u4E2D" tabindex="-1"><a class="header-anchor" href="#_16-4-10-1-\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230minikube\u4E2D" aria-hidden="true">#</a> 16.4.10.1.\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5FAE\u670D\u52A1\u5230minikube\u4E2D</h4><p>\u4E0D\u7528\u5220\u9664192.168.0.4\u4E2Ddocker\u4E2D\u5728\u524D\u9762\u73AF\u8282\u4EA7\u751F\u7684\u955C\u50CF\u548C\u5BB9\u5668,\u56E0\u4E3Aminikube\u4F7F\u7528\u7684\u662Fminikube\u5185\u90E8\u7684docker\u62C9\u53D6\u955C\u50CF</p><pre><code>\u8BBF\u95EE\u9879\u76EE\u4E3B\u9875,\u70B9\u51FB\u6784\u5EFA\u6309\u94AE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.5:8080/jenkins/
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+e+`" width="100%"></div></div><pre><code>\u8BBF\u95EE\u4E4B\u524D\u9700\u8981\u5148\u5728192.168.0.4\u4E0A\u5F00\u653E\u76F8\u5173\u7AEF\u53E3\u5E76\u5F00\u542F\u7AEF\u53E3\u8F6C\u53D1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=9080/tcp --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
kubectl port-forward --address 0.0.0.0 service/springcloud-ci-k8s80 9080:80
</code></pre></div><pre><code>\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.4:9080/ci/k8s
</code></pre></div><pre><code>\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>{&quot;code&quot;:200,&quot;message&quot;:&quot;\u6301\u7EED\u96C6\u6210&quot;,&quot;data&quot;:&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230K8s&quot;}
</code></pre></div><h3 id="_16-4-10-\u4F7F\u7528webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_16-4-10-\u4F7F\u7528webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210" aria-hidden="true">#</a> 16.4.10.\u4F7F\u7528Webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210</h3><h4 id="_16-4-10-1-webhook\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_16-4-10-1-webhook\u7684\u4F5C\u7528" aria-hidden="true">#</a> 16.4.10.1.webhook\u7684\u4F5C\u7528</h4><pre><code>\u5728\u524D\u9762\u7684\u73AF\u8282\u4E2D,\u8BBF\u95EE\u9879\u76EE\u4E3B\u9875,\u70B9\u51FB\u6784\u5EFA\u6309\u94AE\u540E\u624D\u80FD\u89E6\u53D1\u6301\u7EED\u96C6\u6210,\u4F7F\u7528webhook\u53EF\u4EE5\u66F4\u65B9\u4FBF\u7684\u89E6\u53D1\u6301\u7EED\u96C6\u6210,\u914D\u7F6E\u597Dwebhook\u65F6,\u5F53\u63D0\u4EA4\u4EE3\u7801\u65F6\u5C31\u4F1A\u89E6\u53D1\u6301\u7EED\u96C6\u6210
</code></pre><h4 id="_16-4-10-2-\u4F7F\u7528webhook\u524D\u51C6\u5907\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#_16-4-10-2-\u4F7F\u7528webhook\u524D\u51C6\u5907\u5DE5\u4F5C" aria-hidden="true">#</a> 16.4.10.2.\u4F7F\u7528webhook\u524D\u51C6\u5907\u5DE5\u4F5C</h4><pre><code>jenkins\u5B89\u88C5Gitee\u63D2\u4EF6
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-9.\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u73AF\u5883.html#_9-3-7-\u5B89\u88C5\u914D\u7F6Ejenkins\u7528\u5230\u7684\u63D2\u4EF6" target="_blank">jenkins\u5B89\u88C5Gitee\u63D2\u4EF6</a></p><pre><code>\u642D\u5EFA\u5185\u7F51\u7A7F\u900F
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-9.\u642D\u5EFA\u6301\u7EED\u96C6\u6210\u73AF\u5883.html#_9-3-8-\u642D\u5EFA\u5185\u7F51\u7A7F\u900F" target="_blank">\u642D\u5EFA\u5185\u7F51\u7A7F\u900F</a> \u642D\u5EFA\u597D\u4E86\u5185\u7F51\u7A7F\u900F\u540E,\u53EF\u4EE5\u4F7F\u7528\u65B0\u7684\u5730\u5740\u6765\u8BBF\u95EEjenkins \u4E0D\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u8BBF\u95EEjenkins\u7684\u5730\u5740\u662F</p><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.5:8080/jenkins/
</code></pre></div><pre><code>\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u8BBF\u95EEjenkins\u7684\u5730\u5740\u662F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://8sybmw.natappfree.cc/jenkins
</code></pre></div><h4 id="_16-4-10-3-\u914D\u7F6E\u4F7F\u7528webhook" tabindex="-1"><a class="header-anchor" href="#_16-4-10-3-\u914D\u7F6E\u4F7F\u7528webhook" aria-hidden="true">#</a> 16.4.10.3.\u914D\u7F6E\u4F7F\u7528webhook</h4><pre><code>\u4F7F\u7528\u5185\u7F51\u7A7F\u900F\u8BBF\u95EEjenkins\u7684\u5730\u5740\u662F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://8sybmw.natappfree.cc/jenkins
</code></pre></div><pre><code>\u5728jenkins\u4E2D\u914D\u7F6Ejob
jenkins\u5177\u4F53\u9879\u76EE-&gt;\u914D\u7F6E-&gt;\u6784\u5EFA\u89E6\u53D1\u5668-&gt;Gitee webhook \u89E6\u53D1\u6784\u5EFA-&gt;Gitee WebHook \u5BC6\u7801\u2014&gt;\u5F97\u5230\u5BC6\u7801 0d71d48f211af16c477cf9c817ac612d

\u914D\u7F6Egitee\u7684webhook
\u8FDB\u5165gitee\u7684webhook\u914D\u7F6E\u754C\u9762(\u8FD9\u91CC\u7684url\u6839\u636E\u81EA\u5DF1\u7684\u9879\u76EE\u8FDB\u884C\u4FEE\u6539)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>https://gitee.com/lingwh1995/springcloud-eureka/hooks
</code></pre></div><pre><code>\u70B9\u51FB\u6DFB\u52A0webHook-&gt;\u586B\u5199URL\u548CWebHook \u5BC6\u7801/\u7B7E\u540D\u5BC6\u94A5
URL
http://8sybmw.natappfree.cc/jenkins/gitee-project/springcloud-eureka
WebHook \u5BC6\u7801/\u7B7E\u540D\u5BC6\u94A5(\u4E0A\u9762\u5728jenkins\u4E2D\u751F\u6210\u7684)
0d71d48f211af16c477cf9c817ac612d

\u6D4B\u8BD5webhook\u662F\u5426\u914D\u7F6E\u6210\u529F(\u53EF\u4EE5\u6D4B\u8BD5,\u4E5F\u53EF\u4EE5\u4E0D\u6D4B\u8BD5)
\u70B9\u51FB\u6D4B\u8BD5-&gt;\u67E5\u770B\u66F4\u591A
</code></pre><h4 id="_16-4-10-4-\u914D\u7F6E\u4F7F\u7528\u7684jenkinsfile" tabindex="-1"><a class="header-anchor" href="#_16-4-10-4-\u914D\u7F6E\u4F7F\u7528\u7684jenkinsfile" aria-hidden="true">#</a> 16.4.10.4.\u914D\u7F6E\u4F7F\u7528\u7684Jenkinsfile</h4><pre><code>DashBoard-&gt;\u70B9\u51FBspringcloud-eureka-&gt;\u914D\u7F6E-&gt;\u6D41\u6C34\u7EBF-&gt;\u811A\u672C\u8DEF\u5F84-&gt;\u8F93\u5165 script/JenkinsfileCiK8s
</code></pre><h4 id="_16-4-10-5-\u6D4B\u8BD5\u4F7F\u7528webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#_16-4-10-5-\u6D4B\u8BD5\u4F7F\u7528webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210" aria-hidden="true">#</a> 16.4.10.5.\u6D4B\u8BD5\u4F7F\u7528Webhook\u89E6\u53D1\u6301\u7EED\u96C6\u6210</h4><pre><code>\u4FEE\u6539springcloud-eureka/springcloud-ci-k8s80/src/main/java/org/openatom/springcloud/controller/CiK8sController.java\u4E2D\u4EE3\u7801\u4E3A
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CiK8sController</span> <span class="token punctuation">{</span>


    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/ci/k8s&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u6301\u7EED\u96C6\u6210&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230K8s+\u6D4B\u8BD5WebHook&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><pre><code>\u5728git\u4E2D\u63D0\u4EA4\u4EE3\u7801

\u67E5\u770Bwebhook\u89E6\u53D1jenkins\u6784\u5EFA
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://8sybmw.natappfree.cc/jenkins/job/springcloud-eureka/
</code></pre></div><pre><code>\u8BBF\u95EE\u4E4B\u524D\u9700\u8981\u5148\u5728192.168.0.4\u4E0A\u5F00\u653E\u76F8\u5173\u7AEF\u53E3\u5E76\u5F00\u542F\u7AEF\u53E3\u8F6C\u53D1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=9080/tcp --permanent &amp;&amp;
firewall-cmd --reload &amp;&amp;
kubectl port-forward --address 0.0.0.0 service/springcloud-ci-k8s80 9080:80
</code></pre></div><pre><code>\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://192.168.0.4:9080/ci/k8s
</code></pre></div><pre><code>\u8FD4\u56DE\u6570\u636E
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6301\u7EED\u96C6\u6210&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6D4B\u8BD5\u6301\u7EED\u96C6\u6210\u5230K8s+\u6D4B\u8BD5WebHook&quot;</span><span class="token punctuation">}</span>
</code></pre></div>`,73);function q(C,S){const l=t("Markmap"),s=t("Mermaid"),u=t("ScrollIntoPageView"),k=t("HideSideBar");return x(),b("div",null,[f,n(l,{localtion:"/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter16.html",height:"500rem"}),E,_,n(s,{id:"mermaid-382ee14c",code:"flowchart%20LR%0A%20%20%20%20GITEE%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81--%3E%E8%A7%A6%E5%8F%91WebHooks%0A%20%20%20%20%E8%A7%A6%E5%8F%91WebHooks--%3E%E8%A7%A6%E5%8F%91Jenkins%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE%0A%20%20%20%20%E8%A7%A6%E5%8F%91Jenkins%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE--%3EJenkins%E6%89%A7%E8%A1%8C%E5%AF%B9%E5%BA%94%E7%9A%84Jenkinsfile%0A%20%20%20%20Jenkins%E6%89%A7%E8%A1%8C%E5%AF%B9%E5%BA%94%E7%9A%84Jenkinsfile--%3E%E8%A7%A6%E5%8F%91build%E9%95%9C%E5%83%8F-%3Etag%E9%95%9C%E5%83%8F-%3Epush%E9%95%9C%E5%83%8F%E5%88%B0%E7%A7%81%E6%9C%8D%0A%20%20%20%20%E8%A7%A6%E5%8F%91build%E9%95%9C%E5%83%8F-%3Etag%E9%95%9C%E5%83%8F-%3Epush%E9%95%9C%E5%83%8F%E5%88%B0%E7%A7%81%E6%9C%8D--%3E%E6%89%A7%E8%A1%8C%E8%BF%9C%E7%A8%8B%E8%84%9A%E6%9C%AC%0A%20%20%20%20%E6%89%A7%E8%A1%8C%E8%BF%9C%E7%A8%8B%E8%84%9A%E6%9C%AC--%3E%E8%87%AA%E5%8A%A8%E4%BB%8E%E7%A7%81%E6%9C%8D%E4%B8%AD%E6%8B%89%E5%8F%96%E9%95%9C%E5%83%8F%E5%88%9B%E5%BB%BA%E5%AE%B9%E5%99%A8%E5%B9%B6%E5%90%AF%E5%8A%A8%E5%AE%B9%E5%99%A8%0A"}),A,n(s,{id:"mermaid-382ee244",code:"flowchart%20LR%0A%20%20%20%20%E5%90%AF%E5%8A%A8192.168.0.4%E4%B8%8A%E7%9A%84docker--%3E%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84docker%0A%20%20%20%20%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84docker--%3E%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84harbor%0A%20%20%20%20%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84harbor--%3E%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84jenkins%0A"}),y,n(s,{id:"mermaid-64a56962",code:"flowchart%20LR%0A%20%20%20%20GITEE%E6%8F%90%E4%BA%A4%E4%BB%A3%E7%A0%81--%3E%E8%A7%A6%E5%8F%91WebHooks%0A%20%20%20%20%E8%A7%A6%E5%8F%91WebHooks--%3E%E8%A7%A6%E5%8F%91Jenkins%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE%0A%20%20%20%20%E8%A7%A6%E5%8F%91Jenkins%E6%9E%84%E5%BB%BA%E9%A1%B9%E7%9B%AE--%3EJenkins%E6%89%A7%E8%A1%8C%E5%AF%B9%E5%BA%94%E7%9A%84Jenkinsfile%0A%20%20%20%20Jenkins%E6%89%A7%E8%A1%8C%E5%AF%B9%E5%BA%94%E7%9A%84Jenkinsfile--%3E%E8%A7%A6%E5%8F%91build%E9%95%9C%E5%83%8F-%3Etag%E9%95%9C%E5%83%8F-%3Epush%E9%95%9C%E5%83%8F%E5%88%B0%E7%A7%81%E6%9C%8D%0A%20%20%20%20%E8%A7%A6%E5%8F%91build%E9%95%9C%E5%83%8F-%3Etag%E9%95%9C%E5%83%8F-%3Epush%E9%95%9C%E5%83%8F%E5%88%B0%E7%A7%81%E6%9C%8D--%3E%E6%89%A7%E8%A1%8C%E8%BF%9C%E7%A8%8B%E8%84%9A%E6%9C%AC%0A%20%20%20%20%E6%89%A7%E8%A1%8C%E8%BF%9C%E7%A8%8B%E8%84%9A%E6%9C%AC--%3E%E8%87%AA%E5%8A%A8%E4%BB%8E%E7%A7%81%E6%9C%8D%E4%B8%AD%E6%8B%89%E5%8F%96%E9%95%9C%E5%83%8F%E5%88%9B%E5%BB%BA%E5%AE%B9%E5%99%A8%E5%B9%B6%E5%90%AF%E5%8A%A8%E5%AE%B9%E5%99%A8%0A"}),w,n(s,{id:"mermaid-64a55ff6",code:"flowchart%20LR%0A%20%20%20%20%E5%90%AF%E5%8A%A8192.168.0.4%E4%B8%8A%E7%9A%84docker--%3E%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84docker%0A%20%20%20%20%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84docker--%3E%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84harbor%0A%20%20%20%20%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84harbor--%3E%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84jenkins%0A%20%20%20%20%E5%90%AF%E5%8A%A8192.168.0.5%E4%B8%8A%E7%9A%84jenkins--%3E%E5%90%AF%E5%8A%A8192.168.0.4%E4%B8%8A%E7%9A%84minikube%0A"}),j,n(u),n(k)])}var D=h(v,[["render",q],["__file","springcloud-eureka-chapter-16.\u4F7F\u7528\u6301\u7EED\u96C6\u6210\u5FEB\u6377\u90E8\u7F72\u670D\u52A1.html.vue"]]);export{D as default};
