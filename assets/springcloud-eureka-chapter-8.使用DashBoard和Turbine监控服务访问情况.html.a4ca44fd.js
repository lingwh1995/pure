import{_ as c,a as l,b as u,c as i,d as r,e as k}from"./turbine_mointor_provider_allnode.e656a350.js";import{_ as g,o as d,c as m,a as n,d as a,r as t}from"./app.d4c08878.js";const y={},E=a(`<h1 id="_8-\u4F7F\u7528dashboard\u548Cturbine\u76D1\u63A7\u670D\u52A1\u8BBF\u95EE\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_8-\u4F7F\u7528dashboard\u548Cturbine\u76D1\u63A7\u670D\u52A1\u8BBF\u95EE\u60C5\u51B5" aria-hidden="true">#</a> 8.\u4F7F\u7528DashBoard\u548CTurbine\u76D1\u63A7\u670D\u52A1\u8BBF\u95EE\u60C5\u51B5</h1><h2 id="_8-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_8-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 8.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 8.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 8.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 8.3.\u4F7F\u7528Hystrix DashBoard\u76D1\u63A7\u670D\u52A1\u5355\u4E2A\u8282\u70B9\u8BBF\u95EE\u60C5\u51B5
 8.4.\u4F7F\u7528Turbine\u76D1\u63A7\u670D\u52A1\u591A\u4E2A\u8282\u70B9\u8BBF\u95EE\u60C5\u51B5
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_8-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_8-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter8.html" target="_blank">8.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),h=a(`<h2 id="_8-3-\u4F7F\u7528hystrix-dashboard\u76D1\u63A7\u670D\u52A1\u5355\u4E2A\u8282\u70B9\u8BBF\u95EE\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_8-3-\u4F7F\u7528hystrix-dashboard\u76D1\u63A7\u670D\u52A1\u5355\u4E2A\u8282\u70B9\u8BBF\u95EE\u60C5\u51B5" aria-hidden="true">#</a> 8.3.\u4F7F\u7528Hystrix DashBoard\u76D1\u63A7\u670D\u52A1\u5355\u4E2A\u8282\u70B9\u8BBF\u95EE\u60C5\u51B5</h2><h3 id="_8-3-1-hystrix-dashboard\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_8-3-1-hystrix-dashboard\u7B80\u4ECB" aria-hidden="true">#</a> 8.3.1.Hystrix DashBoard\u7B80\u4ECB</h3><pre><code>DashBoard\u5168\u79F0Hystrix Dashboard,\u662FSpring Cloud\u7684\u4EEA\u8868\u76D8\u7EC4\u4EF6,\u53EF\u4EE5\u67E5\u770BHystrix\u5B9E\u4F8B\u7684\u6267\u884C\u60C5\u51B5,\u652F\u6301\u67E5\u770B\u5355\u4E2A\u5B9E\u4F8B\u548C\u67E5\u770B\u96C6\u7FA4\u5B9E\u4F8B,\u4F46\u662F\u9700\u8981\u7ED3\u5408spring-boot-actuator\u4E00\u8D77\u4F7F\u7528\u3002Hystrix Dashboard\u4E3B\u8981\u7528\u6765\u5B9E\u65F6\u76D1\u63A7Hystrix\u7684\u5404\u9879\u6307\u6807\u4FE1\u606F\u3002Hystrix Dashboard\u53EF\u4EE5\u6709\u6548\u5730\u53CD\u6620\u51FA\u6BCF\u4E2AHystrix\u5B9E\u4F8B\u7684\u8FD0\u884C\u60C5\u51B5,\u53EF\u4EE5\u5728\u4EE5\u56FE\u5F62\u5316\u7684\u65B9\u5F0F\u5C55\u793A\u51FA\u5177\u4F53\u7684\u670D\u52A1\u7684\u8BBF\u95EE\u6570\u636E,\u5982\u67D0\u4E2A\u670D\u52A1\u88AB\u8BBF\u95EE\u4E86\u591A\u5C11\u6B21,\u8FD9\u5176\u4E2D\u5931\u8D25\u4E86\u51E0\u6B21,\u6210\u529F\u4E86\u51E0\u6B21\u7B49,\u5E2E\u52A9\u6211\u4EEC\u5FEB\u901F\u53D1\u73B0\u7CFB\u7EDF\u4E2D\u7684\u95EE\u9898\uFF0C\u4ECE\u800C\u91C7\u53D6\u5BF9\u5E94\u63AA\u65BD\u3002
</code></pre><h3 id="_8-3-2-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_8-3-2-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 8.3.2.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>Hystrix DashBoard,\u542F\u52A8\u7AEF\u53E3: 9001
</code></pre><h3 id="_8-3-3-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_8-3-3-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 8.3.3.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-mointor-hystrix-dashboard9001
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               \u2022-- MointorHystrixDashboard9001.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h3 id="_8-3-4-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-3-4-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 8.3.4.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-mointor-hystrix-dashboard9001\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_8-3-5-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_8-3-5-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 8.3.5.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-mointor-hystrix-dashboard9001<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
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
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-hystrix-dashboard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u5F15\u5165\u516C\u5171\u7684\u5DE5\u7A0B--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>    <span class="token comment">&lt;!--\u70ED\u90E8\u7F72\u9700\u8981\u52A0\u8FD9\u4E2A--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
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
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u6253\u5305\u591A\u73AF\u5883--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/resources/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u4E0D\u533A\u5206\u73AF\u5883:\u76F4\u63A5\u52A0\u8F7Dapplication.yml\u914D\u7F6E\u6587\u4EF6--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>application.yml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="_8-3-6-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_8-3-6-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 8.3.6.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9001</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>MOINTOR<span class="token punctuation">-</span>HYSTRIX<span class="token punctuation">-</span>DASHBOARD9001

</code></pre></div><h3 id="_8-3-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-3-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 8.3.7.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>dashboard<span class="token punctuation">.</span></span><span class="token class-name">EnableHystrixDashboard</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableHystrixDashboard</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MointorHystrixDashboard9001</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MointorHystrixDashboard9001</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_8-3-8-\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058003\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-3-8-\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058003\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 8.3.8.\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058003\u4E3B\u542F\u52A8\u7C7B</h3><pre><code>\u4F7F\u7528Hystrix Dashboard\u76D1\u63A7\u670D\u52A1,\u88AB\u76D1\u63A7\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u548C\u670D\u52A1\u6D88\u8D39\u8005\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6
pom.xml\u4E2D\u5F15\u5165\u5982\u4E0B\u4F9D\u8D56
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre></div><pre><code>\u5728\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6CE8\u518CServletRegistrationBean\u8FD9\u4E2ABean
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings(&quot;/hystrix.stream&quot;);
    registrationBean.setName(&quot;HystrixMetricsStreamServlet&quot;);
    return registrationBean;
}
</code></pre></div><pre><code>\u4FEE\u6539\u540E\u7684\u4E3B\u542F\u52A8\u7C7B\u5982\u4E0B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>eventstream<span class="token punctuation">.</span></span><span class="token class-name">HystrixMetricsStreamServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>circuitbreaker<span class="token punctuation">.</span></span><span class="token class-name">EnableCircuitBreaker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u652F\u4ED8\u63A5\u53E3\u63D0\u4F9B\u7AEF
 *  \u4F7F\u7528Eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3
 */</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCircuitBreaker</span><span class="token comment">//\u670D\u52A1\u63D0\u4F9B\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentServiceProviderHystrixClusterNode8003</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">PaymentServiceProviderHystrixClusterNode8003</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *\u6B64\u914D\u7F6E\u662F\u4E3A\u4E86\u670D\u52A1\u76D1\u63A7\u800C\u914D\u7F6E\uFF0C\u4E0E\u670D\u52A1\u5BB9\u9519\u672C\u8EAB\u65E0\u5173\uFF0Cspringcloud\u5347\u7EA7\u540E\u7684\u5751
     *ServletRegistrationBean\u56E0\u4E3Aspringboot\u7684\u9ED8\u8BA4\u8DEF\u5F84\u4E0D\u662F&quot;/hystrix.stream&quot;\uFF0C
     *\u53EA\u8981\u5728\u81EA\u5DF1\u7684\u9879\u76EE\u91CC\u914D\u7F6E\u4E0A\u4E0B\u9762\u7684servlet\u5C31\u53EF\u4EE5\u4E86
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HystrixMetricsStreamServlet</span> streamServlet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HystrixMetricsStreamServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletRegistrationBean</span> registrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span>streamServlet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setLoadOnStartup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">addUrlMappings</span><span class="token punctuation">(</span><span class="token string">&quot;/hystrix.stream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;HystrixMetricsStreamServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> registrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_8-3-9-\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058004\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-3-9-\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058004\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 8.3.9.\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058004\u4E3B\u542F\u52A8\u7C7B</h3><pre><code>\u4F7F\u7528Hystrix Dashboard\u76D1\u63A7\u670D\u52A1,\u88AB\u76D1\u63A7\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u548C\u670D\u52A1\u6D88\u8D39\u8005\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6
pom.xml\u4E2D\u5F15\u5165\u5982\u4E0B\u4F9D\u8D56
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre></div><pre><code>\u5728\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6CE8\u518CServletRegistrationBean\u8FD9\u4E2ABean
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings(&quot;/hystrix.stream&quot;);
    registrationBean.setName(&quot;HystrixMetricsStreamServlet&quot;);
    return registrationBean;
}
</code></pre></div><pre><code>\u4FEE\u6539\u540E\u7684\u4E3B\u542F\u52A8\u7C7B\u5982\u4E0B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>eventstream<span class="token punctuation">.</span></span><span class="token class-name">HystrixMetricsStreamServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>circuitbreaker<span class="token punctuation">.</span></span><span class="token class-name">EnableCircuitBreaker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u652F\u4ED8\u63A5\u53E3\u63D0\u4F9B\u7AEF
 *  \u4F7F\u7528Eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3
 */</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCircuitBreaker</span><span class="token comment">//\u670D\u52A1\u63D0\u4F9B\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentServiceProviderHystrixClusterNode8004</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">PaymentServiceProviderHystrixClusterNode8004</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *\u6B64\u914D\u7F6E\u662F\u4E3A\u4E86\u670D\u52A1\u76D1\u63A7\u800C\u914D\u7F6E\uFF0C\u4E0E\u670D\u52A1\u5BB9\u9519\u672C\u8EAB\u65E0\u5173\uFF0Cspringcloud\u5347\u7EA7\u540E\u7684\u5751
     *ServletRegistrationBean\u56E0\u4E3Aspringboot\u7684\u9ED8\u8BA4\u8DEF\u5F84\u4E0D\u662F&quot;/hystrix.stream&quot;\uFF0C
     *\u53EA\u8981\u5728\u81EA\u5DF1\u7684\u9879\u76EE\u91CC\u914D\u7F6E\u4E0A\u4E0B\u9762\u7684servlet\u5C31\u53EF\u4EE5\u4E86
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HystrixMetricsStreamServlet</span> streamServlet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HystrixMetricsStreamServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletRegistrationBean</span> registrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span>streamServlet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setLoadOnStartup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">addUrlMappings</span><span class="token punctuation">(</span><span class="token string">&quot;/hystrix.stream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;HystrixMetricsStreamServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> registrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_8-3-10-\u4FEE\u6539\u670D\u52A1\u6D88\u8D39\u800580\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-3-10-\u4FEE\u6539\u670D\u52A1\u6D88\u8D39\u800580\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 8.3.10.\u4FEE\u6539\u670D\u52A1\u6D88\u8D39\u800580\u4E3B\u542F\u52A8\u7C7B</h3><pre><code>\u4F7F\u7528Hystrix Dashboard\u76D1\u63A7\u670D\u52A1,\u88AB\u76D1\u63A7\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u548C\u670D\u52A1\u6D88\u8D39\u8005\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6
pom.xml\u4E2D\u5F15\u5165\u5982\u4E0B\u4F9D\u8D56
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre></div><pre><code>\u5728\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6CE8\u518CServletRegistrationBean\u8FD9\u4E2ABean
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings(&quot;/hystrix.stream&quot;);
    registrationBean.setName(&quot;HystrixMetricsStreamServlet&quot;);
    return registrationBean;
}
</code></pre></div><pre><code>\u4FEE\u6539\u540E\u7684\u4E3B\u542F\u52A8\u7C7B\u5982\u4E0B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>eventstream<span class="token punctuation">.</span></span><span class="token class-name">HystrixMetricsStreamServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span></span><span class="token class-name">EnableHystrix</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">EnableFeignClients</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@EnableEurekaClient</span>  <span class="token comment">//\u6DFB\u52A0@EnableEurekaClient\u597D\u50CF\u6CA1\u4EC0\u4E48\u7528,\u4F46\u662F\u8FD8\u662F\u52A0\u4E0A</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableFeignClients</span>
<span class="token annotation punctuation">@EnableHystrix</span> <span class="token comment">//\u6D88\u8D39\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *\u6B64\u914D\u7F6E\u662F\u4E3A\u4E86\u670D\u52A1\u76D1\u63A7\u800C\u914D\u7F6E\uFF0C\u4E0E\u670D\u52A1\u5BB9\u9519\u672C\u8EAB\u65E0\u5173\uFF0Cspringcloud\u5347\u7EA7\u540E\u7684\u5751
     *ServletRegistrationBean\u56E0\u4E3Aspringboot\u7684\u9ED8\u8BA4\u8DEF\u5F84\u4E0D\u662F&quot;/hystrix.stream&quot;\uFF0C
     *\u53EA\u8981\u5728\u81EA\u5DF1\u7684\u9879\u76EE\u91CC\u914D\u7F6E\u4E0A\u4E0B\u9762\u7684servlet\u5C31\u53EF\u4EE5\u4E86
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HystrixMetricsStreamServlet</span> streamServlet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HystrixMetricsStreamServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletRegistrationBean</span> registrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span>streamServlet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setLoadOnStartup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">addUrlMappings</span><span class="token punctuation">(</span><span class="token string">&quot;/hystrix.stream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;HystrixMetricsStreamServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> registrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_8-3-11-\u6D4B\u8BD5\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-3-11-\u6D4B\u8BD5\u6A21\u5757" aria-hidden="true">#</a> 8.3.11.\u6D4B\u8BD5\u6A21\u5757</h3><pre><code>\u542F\u52A8\u76F8\u5173\u670D\u52A1
</code></pre>`,38),x=a(`<pre><code>\u6CE8\u610F\u4E8B\u9879
Hystrix DashBoard\u53EA\u80FD\u76D1\u63A7\u8BBE\u7F6E\u4E86\u670D\u52A1\u964D\u7EA7\u6216\u670D\u52A1\u7194\u65AD\u7684\u65B9\u6CD5,\u672A\u8BBE\u7F6E\u964D\u7EA7\u6216\u8005\u7194\u65AD\u7684\u65B9\u6CD5\u662F\u65E0\u6CD5\u76D1\u63A7\u5230\u7684,\u4E5F\u662F\u8BF4\u672A\u8BBE\u7F6E\u964D\u7EA7\u548C\u7194\u65AD\u7684\u65B9\u6CD5\u8C03\u7528\u540E\u662F\u4E0D\u4F1A\u548CHystrix DashBoard\u4EA7\u751F\u4EFB\u4F55\u5173\u7CFB\u7684

\u6D4B\u8BD5\u4F7F\u7528Hystrix DashBoard\u5BF9\u5355\u4E2A\u670D\u52A1\u8FDB\u884C\u76D1\u63A7
</code></pre><p>\u8BBF\u95EEHystrix DashBoard</p><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:9001/hystrix
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+c+`" width="100%"></div></div><pre><code>\u76D1\u63A7\u670D\u52A1\u6D88\u8D39\u7AEF
</code></pre>`,5),B=a(`<pre><code>Hystrix DashBoard\u53C2\u6570
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/hystrix.stream
</code></pre></div><pre><code>\u793A\u4F8B\u670D\u52A1URL
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/circuitbreaker/get/1
</code></pre></div><pre><code>\u53EF\u4EE5\u770B\u5230\u754C\u9762\u81EA\u52A8\u7EDF\u8BA1\u51FA\u4E86\u6D88\u8D39\u7AEF\u67D0\u4E2A\u670D\u52A1\u7684\u8BBF\u95EE\u60C5\u51B5
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+l+`" width="100%"></div></div><pre><code>\u76D1\u63A7\u670D\u52A1\u63D0\u4F9B\u7AEF8003
</code></pre>`,7),v=a(`<pre><code>Hystrix DashBoard\u53C2\u6570
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:8003/hystrix.stream
</code></pre></div><pre><code>\u793A\u4F8B\u670D\u52A1URL(\u8BBF\u95EE\u8FD9\u4E2A\u670D\u52A1\u6D88\u8D39\u7AEF\u7684\u670D\u52A1,\u4F1A\u81EA\u52A8\u8C03\u7528\u670D\u52A1\u63D0\u4F9B\u7AEF8003\u7684\u670D\u52A1,\u4E0D\u662F\u6BCF\u6B21\u90FD\u8C03\u7528,\u6BCF\u6B21\u57288003\u548C8004\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u8C03\u7528)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/circuitbreaker/get/1
</code></pre></div><pre><code>\u53EF\u4EE5\u770B\u5230\u754C\u9762\u81EA\u52A8\u7EDF\u8BA1\u51FA\u4E86\u63D0\u4F9B\u7AEF8003\u67D0\u4E2A\u670D\u52A1\u7684\u8BBF\u95EE\u60C5\u51B5
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+u+`" width="100%"></div></div><pre><code>\u76D1\u63A7\u670D\u52A1\u63D0\u4F9B\u7AEF8004
</code></pre>`,7),A=a(`<pre><code>Hystrix DashBoard\u53C2\u6570
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:8004/hystrix.stream
</code></pre></div><pre><code>\u793A\u4F8B\u670D\u52A1URL(\u8BBF\u95EE\u8FD9\u4E2A\u670D\u52A1\u6D88\u8D39\u7AEF\u7684\u670D\u52A1,\u4F1A\u81EA\u52A8\u8C03\u7528\u670D\u52A1\u63D0\u4F9B\u7AEF8003\u7684\u670D\u52A1,\u4E0D\u662F\u6BCF\u6B21\u90FD\u8C03\u7528,\u6BCF\u6B21\u57288003\u548C8004\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u8C03\u7528)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/circuitbreaker/get/1
</code></pre></div><pre><code>\u53EF\u4EE5\u770B\u5230\u754C\u9762\u81EA\u52A8\u7EDF\u8BA1\u51FA\u4E86\u63D0\u4F9B\u7AEF8004\u67D0\u4E2A\u670D\u52A1\u7684\u8BBF\u95EE\u60C5\u51B5
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+i+`" width="100%"></div></div><h2 id="_8-4-\u4F7F\u7528turbine\u76D1\u63A7\u670D\u52A1\u591A\u4E2A\u8282\u70B9\u8BBF\u95EE\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#_8-4-\u4F7F\u7528turbine\u76D1\u63A7\u670D\u52A1\u591A\u4E2A\u8282\u70B9\u8BBF\u95EE\u60C5\u51B5" aria-hidden="true">#</a> 8.4.\u4F7F\u7528Turbine\u76D1\u63A7\u670D\u52A1\u591A\u4E2A\u8282\u70B9\u8BBF\u95EE\u60C5\u51B5</h2><h3 id="_8-4-1-turbine\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_8-4-1-turbine\u7B80\u4ECB" aria-hidden="true">#</a> 8.4.1.Turbine\u7B80\u4ECB</h3><pre><code>Turbine\u662F\u805A\u5408\u670D\u52A1\u5668\u53D1\u9001\u4E8B\u4EF6\u6D41\u6570\u636E\u7684\u4E00\u4E2A\u5DE5\u5177,Hystrix DashBoard\u7684\u76D1\u63A7\u4E2D,\u53EA\u80FD\u7EDF\u8BA1\u5206\u6790\u5355\u4E2A\u8282\u70B9\u8BBF\u95EE\u6D41\u91CF,\u5B9E\u9645\u751F\u4EA7\u4E2D\u90FD\u4E3A\u96C6\u7FA4,\u6BCF\u4E2A\u670D\u52A1\u90FD\u4F1A\u90E8\u7F72\u5728\u591A\u4E2A\u8282\u70B9\u4E0A,\u56E0\u6B64\u53EF\u4EE5\u901A\u8FC7Turbine\u6765\u7EDF\u8BA1\u5206\u6790\u591A\u4E2A\u8282\u70B9\u8BBF\u95EE\u6D41\u91CF,\u5C06Hystrix DashBoard\u6536\u96C6\u5230\u7684\u5355\u4E2A\u8282\u70B9\u7684\u670D\u52A1\u8BBF\u95EE\u6570\u636E\u7EDF\u8BA1\u6570\u636E\u6C47\u96C6\u5728\u4E00\u8D77\u5E76\u4EE5\u56FE\u5F62\u5316\u754C\u9762\u5C55\u793A\u51FA\u6765\u3002
</code></pre><h3 id="_8-4-2-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_8-4-2-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 8.4.2.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u4F7F\u7528Turbine\u6C47\u805AHystrix DashBoard\u76D1\u63A7\u5230\u7684\u6240\u6709\u8282\u70B9\u8BBF\u95EE\u7EDF\u8BA1\u6570\u636E,\u542F\u52A8\u7AEF\u53E3: 9002
</code></pre><h3 id="_8-4-3-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_8-4-3-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 8.4.3.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-mointor-hystrix-dashboard-turbine9002
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               \u2022-- MointorHystrixDashboardTurbine9002.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h3 id="_8-4-4-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-4-4-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 8.4.4.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-mointor-hystrix-dashboard-turbine9002\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_8-4-5-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_8-4-5-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 8.4.5.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-mointor-hystrix-dashboard-turbine9002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.source</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maven.compiler.target</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-hystrix-dashboard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-turbine<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>    <span class="token comment">&lt;!--\u70ED\u90E8\u7F72\u9700\u8981\u52A0\u8FD9\u4E2A--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugins</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>plugin</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-maven-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>executions</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
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
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u6253\u5305\u591A\u73AF\u5883--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resources</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resource</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>directory</span><span class="token punctuation">&gt;</span></span>src/main/resources/<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>directory</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>
                    <span class="token comment">&lt;!--\u4E0D\u533A\u5206\u73AF\u5883:\u76F4\u63A5\u52A0\u8F7Dapplication.yml\u914D\u7F6E\u6587\u4EF6--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>application.yml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="_8-4-6-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_8-4-6-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 8.4.6.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9002</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>MOINTOR<span class="token punctuation">-</span>HYSTRIX<span class="token punctuation">-</span>DASHBOARD<span class="token punctuation">-</span>TURBINE9002
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u8868\u793A\u662F\u5426\u5C06\u81EA\u5DF1\u6CE8\u518C\u8FDBEurekaServer\u9ED8\u8BA4\u4E3Atrue\u3002</span>
    <span class="token key atrule">fetchRegistry</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u662F\u5426\u4ECEEurekaServer\u6293\u53D6\u5DF2\u6709\u7684\u6CE8\u518C\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3Atrue\u3002\u670D\u52A1\u63D0\u4F9B\u7AEF\u662F\u5355\u8282\u70B9\u65E0\u6240\u8C13\uFF0C\u662F\u96C6\u7FA4\u5FC5\u987B\u8BBE\u7F6E\u4E3Atrue\u624D\u80FD\u914D\u5408ribbon\u4F7F\u7528\u8D1F\u8F7D\u5747\u8861\uFF0C\u5426\u5219\u62A5\u5F02\u5E38No instances available for SPRINGCLOUD-PROVIDER-PAYMENT-SERVICE-CLUSTER</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token comment">#\u5355\u673A\u7248</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>7001/eureka
      <span class="token comment">#\u96C6\u7FA4\u7248</span>
      <span class="token comment">#defaultZone: http://eureka7002:7002/eureka,http://eureka7003:7003/eureka,http://eureka7004:7004/eureka</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>spring.application.name<span class="token punctuation">}</span> <span class="token comment">#Eureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>
<span class="token key atrule">turbine</span><span class="token punctuation">:</span>
  <span class="token key atrule">instanceUrlSuffix</span><span class="token punctuation">:</span> /hystrix.stream
  <span class="token key atrule">app-config</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>HYSTRIX<span class="token punctuation">-</span>PAYMENT<span class="token punctuation">-</span>SERVICE<span class="token punctuation">-</span>CLUSTER   <span class="token comment"># \u6307\u5B9A\u8981\u76D1\u63A7\u7684\u5E94\u7528\u540D\u79F0,\u53EF\u4EE5\u5199\u591A\u4E2A,\u7528,\u9694\u5F00</span>
  <span class="token key atrule">clusterNameExpression</span><span class="token punctuation">:</span> <span class="token string">&quot;&#39;default&#39;&quot;</span> <span class="token comment">#\u8868\u793A\u96C6\u7FA4\u7684\u540D\u5B57\u4E3Adefault</span>
  <span class="token key atrule">combine-host-port</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment"># \u540C\u4E00\u4E3B\u673A\u4E0A\u7684\u670D\u52A1\u901A\u8FC7\u4E3B\u673A\u540D\u548C\u7AEF\u53E3\u53F7\u7684\u7EC4\u5408\u6765\u8FDB\u884C\u533A\u5206\uFF0C\u9ED8\u8BA4\u4EE5host\u6765\u533A\u5206,\u8FD9\u4E2A\u503C\u4E3Atrue\u8FD9\u4E2A\u540C\u4E00\u4E2Ahost\u4E0A\u90E8\u7F72\u4E86\u51E0\u4E2A\u76F8\u540C\u7684\u5FAE\u670D\u52A1,host\u503C\u5C31\u662F\u51E0,\u8FD9\u4E2A\u503C\u4E3Afasle,\u540C\u4E00\u4E2Ahost\u4E0A\u4E0D\u7BA1\u90E8\u7F72\u51E0\u4E2A\u5FAE\u670D\u52A1,\u503C\u90FD\u662F1</span>

</code></pre></div><h3 id="_8-4-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-4-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 8.4.7.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>dashboard<span class="token punctuation">.</span></span><span class="token class-name">EnableHystrixDashboard</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>turbine<span class="token punctuation">.</span></span><span class="token class-name">EnableTurbine</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@EnableTurbine</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableHystrixDashboard</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MointorHystrixDashboardTurbine9002</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MointorHystrixDashboardTurbine9002</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="_8-4-8-\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058003\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-4-8-\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058003\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 8.4.8.\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058003\u4E3B\u542F\u52A8\u7C7B</h3><pre><code>\u4F7F\u7528Turbine\u805A\u5408Hystrix Dashboard\u76D1\u63A7\u6570\u636E,\u88AB\u76D1\u63A7\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u548C\u670D\u52A1\u6D88\u8D39\u8005\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6
pom.xml\u4E2D\u5F15\u5165\u5982\u4E0B\u4F9D\u8D56
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre></div><pre><code>\u5728\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6CE8\u518CServletRegistrationBean\u8FD9\u4E2ABean
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings(&quot;/hystrix.stream&quot;);
    registrationBean.setName(&quot;HystrixMetricsStreamServlet&quot;);
    return registrationBean;
}
</code></pre></div><pre><code>\u4FEE\u6539\u540E\u7684\u4E3B\u542F\u52A8\u7C7B\u5982\u4E0B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>eventstream<span class="token punctuation">.</span></span><span class="token class-name">HystrixMetricsStreamServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>circuitbreaker<span class="token punctuation">.</span></span><span class="token class-name">EnableCircuitBreaker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u652F\u4ED8\u63A5\u53E3\u63D0\u4F9B\u7AEF
 *  \u4F7F\u7528Eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3
 */</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCircuitBreaker</span><span class="token comment">//\u670D\u52A1\u63D0\u4F9B\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentServiceProviderHystrixClusterNode8003</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">PaymentServiceProviderHystrixClusterNode8003</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *\u6B64\u914D\u7F6E\u662F\u4E3A\u4E86\u670D\u52A1\u76D1\u63A7\u800C\u914D\u7F6E\uFF0C\u4E0E\u670D\u52A1\u5BB9\u9519\u672C\u8EAB\u65E0\u5173\uFF0Cspringcloud\u5347\u7EA7\u540E\u7684\u5751
     *ServletRegistrationBean\u56E0\u4E3Aspringboot\u7684\u9ED8\u8BA4\u8DEF\u5F84\u4E0D\u662F&quot;/hystrix.stream&quot;\uFF0C
     *\u53EA\u8981\u5728\u81EA\u5DF1\u7684\u9879\u76EE\u91CC\u914D\u7F6E\u4E0A\u4E0B\u9762\u7684servlet\u5C31\u53EF\u4EE5\u4E86
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HystrixMetricsStreamServlet</span> streamServlet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HystrixMetricsStreamServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletRegistrationBean</span> registrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span>streamServlet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setLoadOnStartup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">addUrlMappings</span><span class="token punctuation">(</span><span class="token string">&quot;/hystrix.stream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;HystrixMetricsStreamServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> registrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_8-4-9-\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058004\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-4-9-\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058004\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 8.4.9.\u4FEE\u6539\u670D\u52A1\u63D0\u4F9B\u80058004\u4E3B\u542F\u52A8\u7C7B</h3><pre><code>\u4F7F\u7528Turbine\u805A\u5408Hystrix Dashboard\u76D1\u63A7\u6570\u636E,\u88AB\u76D1\u63A7\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u548C\u670D\u52A1\u6D88\u8D39\u8005\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6
pom.xml\u4E2D\u5F15\u5165\u5982\u4E0B\u4F9D\u8D56
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre></div><pre><code>\u5728\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6CE8\u518CServletRegistrationBean\u8FD9\u4E2ABean
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings(&quot;/hystrix.stream&quot;);
    registrationBean.setName(&quot;HystrixMetricsStreamServlet&quot;);
    return registrationBean;
}
</code></pre></div><pre><code>\u4FEE\u6539\u540E\u7684\u4E3B\u542F\u52A8\u7C7B\u5982\u4E0B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>eventstream<span class="token punctuation">.</span></span><span class="token class-name">HystrixMetricsStreamServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>circuitbreaker<span class="token punctuation">.</span></span><span class="token class-name">EnableCircuitBreaker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u652F\u4ED8\u63A5\u53E3\u63D0\u4F9B\u7AEF
 *  \u4F7F\u7528Eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3
 */</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCircuitBreaker</span><span class="token comment">//\u670D\u52A1\u63D0\u4F9B\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentServiceProviderHystrixClusterNode8004</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">PaymentServiceProviderHystrixClusterNode8004</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *\u6B64\u914D\u7F6E\u662F\u4E3A\u4E86\u670D\u52A1\u76D1\u63A7\u800C\u914D\u7F6E\uFF0C\u4E0E\u670D\u52A1\u5BB9\u9519\u672C\u8EAB\u65E0\u5173\uFF0Cspringcloud\u5347\u7EA7\u540E\u7684\u5751
     *ServletRegistrationBean\u56E0\u4E3Aspringboot\u7684\u9ED8\u8BA4\u8DEF\u5F84\u4E0D\u662F&quot;/hystrix.stream&quot;\uFF0C
     *\u53EA\u8981\u5728\u81EA\u5DF1\u7684\u9879\u76EE\u91CC\u914D\u7F6E\u4E0A\u4E0B\u9762\u7684servlet\u5C31\u53EF\u4EE5\u4E86
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HystrixMetricsStreamServlet</span> streamServlet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HystrixMetricsStreamServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletRegistrationBean</span> registrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span>streamServlet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setLoadOnStartup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">addUrlMappings</span><span class="token punctuation">(</span><span class="token string">&quot;/hystrix.stream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;HystrixMetricsStreamServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> registrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_8-4-10-\u4FEE\u6539\u670D\u52A1\u6D88\u8D39\u7AEF80\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_8-4-10-\u4FEE\u6539\u670D\u52A1\u6D88\u8D39\u7AEF80\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 8.4.10.\u4FEE\u6539\u670D\u52A1\u6D88\u8D39\u7AEF80\u4E3B\u542F\u52A8\u7C7B</h3><pre><code>\u4F7F\u7528Turbine\u805A\u5408Hystrix Dashboard\u76D1\u63A7\u6570\u636E,\u88AB\u76D1\u63A7\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u548C\u670D\u52A1\u6D88\u8D39\u8005\u5FC5\u987B\u6EE1\u8DB3\u4EE5\u4E0B\u6761\u4EF6
pom.xml\u4E2D\u5F15\u5165\u5982\u4E0B\u4F9D\u8D56
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;
    &lt;artifactId&gt;spring-boot-starter-actuator&lt;/artifactId&gt;
&lt;/dependency&gt;
&lt;dependency&gt;
    &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
    &lt;artifactId&gt;spring-cloud-starter-netflix-hystrix&lt;/artifactId&gt;
&lt;/dependency&gt;
</code></pre></div><pre><code>\u5728\u4E3B\u542F\u52A8\u7C7B\u4E2D\u6CE8\u518CServletRegistrationBean\u8FD9\u4E2ABean
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>@Bean
public ServletRegistrationBean getServlet() {
    HystrixMetricsStreamServlet streamServlet = new HystrixMetricsStreamServlet();
    ServletRegistrationBean registrationBean = new ServletRegistrationBean(streamServlet);
    registrationBean.setLoadOnStartup(1);
    registrationBean.addUrlMappings(&quot;/hystrix.stream&quot;);
    registrationBean.setName(&quot;HystrixMetricsStreamServlet&quot;);
    return registrationBean;
}
</code></pre></div><pre><code>\u4FEE\u6539\u540E\u7684\u4E3B\u542F\u52A8\u7C7B\u5982\u4E0B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>metrics<span class="token punctuation">.</span>eventstream<span class="token punctuation">.</span></span><span class="token class-name">HystrixMetricsStreamServlet</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span></span><span class="token class-name">ServletRegistrationBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span></span><span class="token class-name">EnableHystrix</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">EnableFeignClients</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@EnableEurekaClient</span>  <span class="token comment">//\u6DFB\u52A0@EnableEurekaClient\u597D\u50CF\u6CA1\u4EC0\u4E48\u7528,\u4F46\u662F\u8FD8\u662F\u52A0\u4E0A</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableFeignClients</span>
<span class="token annotation punctuation">@EnableHystrix</span> <span class="token comment">//\u6D88\u8D39\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *\u6B64\u914D\u7F6E\u662F\u4E3A\u4E86\u670D\u52A1\u76D1\u63A7\u800C\u914D\u7F6E\uFF0C\u4E0E\u670D\u52A1\u5BB9\u9519\u672C\u8EAB\u65E0\u5173\uFF0Cspringcloud\u5347\u7EA7\u540E\u7684\u5751
     *ServletRegistrationBean\u56E0\u4E3Aspringboot\u7684\u9ED8\u8BA4\u8DEF\u5F84\u4E0D\u662F&quot;/hystrix.stream&quot;\uFF0C
     *\u53EA\u8981\u5728\u81EA\u5DF1\u7684\u9879\u76EE\u91CC\u914D\u7F6E\u4E0A\u4E0B\u9762\u7684servlet\u5C31\u53EF\u4EE5\u4E86
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ServletRegistrationBean</span> <span class="token function">getServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">HystrixMetricsStreamServlet</span> streamServlet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HystrixMetricsStreamServlet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ServletRegistrationBean</span> registrationBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServletRegistrationBean</span><span class="token punctuation">(</span>streamServlet<span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setLoadOnStartup</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">addUrlMappings</span><span class="token punctuation">(</span><span class="token string">&quot;/hystrix.stream&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        registrationBean<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;HystrixMetricsStreamServlet&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> registrationBean<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_8-4-11-\u6D4B\u8BD5\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_8-4-11-\u6D4B\u8BD5\u6A21\u5757" aria-hidden="true">#</a> 8.4.11.\u6D4B\u8BD5\u6A21\u5757</h3><pre><code>\u542F\u52A8\u76F8\u5173\u670D\u52A1
</code></pre>`,44),b=a(`<pre><code>\u6CE8\u610F\u4E8B\u9879
Hystrix DashBoard\u53EA\u80FD\u76D1\u63A7\u8BBE\u7F6E\u4E86\u670D\u52A1\u964D\u7EA7\u6216\u670D\u52A1\u7194\u65AD\u7684\u65B9\u6CD5,\u672A\u8BBE\u7F6E\u964D\u7EA7\u6216\u8005\u7194\u65AD\u7684\u65B9\u6CD5\u662F\u65E0\u6CD5\u76D1\u63A7\u5230\u7684,\u4E5F\u662F\u8BF4\u672A\u8BBE\u7F6E\u964D\u7EA7\u548C\u7194\u65AD\u7684\u65B9\u6CD5\u8C03\u7528\u540E\u662F\u4E0D\u4F1A\u548CHystrix DashBoard\u4EA7\u751F\u4EFB\u4F55\u5173\u7CFB\u7684,\u56E0\u4E3ATunbine\u662F\u6C47\u805A\u6765\u81EAHystrix DashBoard\u7684\u6570\u636E,\u6240\u4EE5Tunbine\u4E5F\u53EA\u80FD\u6C47\u805AHystrix DashBoard\u53EF\u4EE5\u76D1\u63A7\u5230\u7684\u6570\u636E
\u96C6\u6210\u4E86Turbine\u7684\u9879\u76EE\u4FEE\u6539\u540E\u9700\u8981\u624B\u52A8\u91CD\u542F,\u76EE\u524D\u53D1\u73B0\u70ED\u52A0\u8F7D\u4F1A\u62A5\u9519

\u6D4B\u8BD5\u4F7F\u7528Turbine\u6C47\u805A\u670D\u52A1\u63D0\u4F9B\u7AEF\u591A\u4E2A\u8282\u70B9\u8BBF\u95EE\u7EDF\u8BA1\u6570\u636E
\u8BBF\u95EETurbine(Turbine\u4E3B\u9875\u9762\u548CHystrix DashBoard\u4E3B\u754C\u9762\u662F\u76F8\u540C\u7684,\u53EA\u662F\u586B\u5199\u7684\u53C2\u6570\u4E0D\u540C)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:9002/hystrix
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+r+`" width="100%"></div></div><pre><code>\u4F7F\u7528Turbine\u6C47\u805A\u670D\u52A1\u63D0\u4F9B\u7AEF\u591A\u4E2A\u8282\u70B9\u8BBF\u95EE\u7EDF\u8BA1\u6570\u636E(\u6C47\u805AHystrix DashBoard\u76D1\u63A7\u5230\u7684\u670D\u52A1\u63D0\u4F9B\u7AEF8003\u8282\u70B9\u7684\u6570\u636E\u548C\u670D\u52A1\u63D0\u4F9B\u7AEF8004\u8282\u70B9\u7684\u6570\u636E)
</code></pre>`,4),S=a(`<pre><code>Turbine\u53C2\u6570
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:9002/turbine.stream
</code></pre></div><pre><code>\u793A\u4F8B\u670D\u52A1URL(\u8BBF\u95EE\u8FD9\u4E2A\u670D\u52A1\u6D88\u8D39\u7AEF\u7684\u670D\u52A1,\u4F1A\u81EA\u52A8\u968F\u673A\u8C03\u7528\u670D\u52A1\u63D0\u4F9B\u7AEF\u670D\u52A1,\u6BCF\u6B21\u5728\u670D\u52A1\u63D0\u4F9B\u7AEF8003\u8282\u70B9\u548C\u670D\u52A1\u63D0\u4F9B\u7AEF8004\u8282\u70B9\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u8C03\u7528)
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/circuitbreaker/get/1
</code></pre></div><pre><code>\u53EF\u4EE5\u770B\u5230\u754C\u9762\u4E00\u6B21\u6027\u81EA\u52A8\u7EDF\u8BA1\u51FA\u4E86\u670D\u52A1\u63D0\u4F9B\u7AEF8003\u8282\u70B9\u548C\u670D\u52A1\u63D0\u4F9B\u7AEF8004\u8282\u70B9\u8BBF\u95EE\u7EDF\u8BA1\u6570\u636E
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+k+`" width="100%"></div></div><pre><code>\u4F7F\u7528Turbine\u524D
\u8FDE\u7EED\u8BBF\u95EEhttp://localhost/consumer/payment/circuitbreaker/get/1\u8FD9\u4E2A\u6D4B\u8BD5URL 10\u6B21,\u76D1\u63A7\u670D\u52A1\u63D0\u4F9B\u7AEF8003\u8282\u70B9\u7684Hystrix DashBoard\u4E2D\u53EF\u4EE5\u7EDF\u8BA1\u5230\u7684\u8BBF\u95EE\u6B21\u6570\u4E3A3,\u76D1\u63A7\u670D\u52A1\u63D0\u4F9B\u7AEF8004\u8282\u70B9\u7684Hystrix DashBoard\u4E2D\u7EDF\u8BA1\u5230\u7684\u8BBF\u95EE\u6B21\u6570\u503C\u4E3A7,\u56E0\u4E3A\u670D\u52A1\u6D88\u8D39\u7AEF\u4F1A\u968F\u673A\u9009\u62E9\u4E00\u4E2A\u8282\u70B9\u8FDB\u884C\u8C03\u7528,\u628A\u670D\u52A1\u63D0\u4F9B\u7AEF8003\u8282\u70B9\u548C\u670D\u52A1\u63D0\u4F9B\u7AEF8004\u8282\u70B9\u4E2D\u7EDF\u8BA1\u5230\u7684\u8BBF\u95EE\u6B21\u6570\u7684\u503C\u52A0\u8D77\u6765\u4E00\u5B9A\u662F10

\u4F7F\u7528Turbine\u540E
\u8FDE\u7EED\u8BBF\u95EEhttp://localhost/consumer/payment/circuitbreaker/get/1\u8FD9\u4E2A\u6D4B\u8BD5URL 10\u6B21,Turbine\u4E2D\u7EDF\u8BA1\u5230\u7684\u8BBF\u95EE\u6B21\u6570\u7684\u503C\u76F4\u63A5\u5C31\u662F10
</code></pre>`,7);function f(w,H){const p=t("Markmap"),s=t("Mermaid"),e=t("ScrollIntoPageView"),o=t("HideSideBar");return d(),m("div",null,[E,n(p,{localtion:"/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter8.html",height:"500rem"}),h,n(s,{id:"mermaid-382ee202",code:"flowchart%20LR%0A%20%20%20%20%E5%87%86%E5%A4%87%E5%A5%BD%E6%95%B0%E6%8D%AE%E5%BA%93%E7%8E%AF%E5%A2%83--%3E%E5%90%AF%E5%8A%A8Eureka%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%837001%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8Eureka%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%837001%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858003%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858003%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858004%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858004%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E4%BD%BF%E7%94%A8%E4%BA%86Hystrix%E5%8A%9F%E8%83%BD%E7%9A%84%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E8%80%85%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E4%BD%BF%E7%94%A8%E4%BA%86Hystrix%E5%8A%9F%E8%83%BD%E7%9A%84%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E8%80%85--%3E%E5%90%AF%E5%8A%A8Hystrix_Dashboard%E7%9B%91%E6%8E%A7%E6%A8%A1%E5%9D%97%0A"}),x,n(s,{id:"mermaid-382ee221",code:"flowchart%20LR%0A%20%20%20%20A(%22%E8%AE%BF%E9%97%AEHystrix%20DashBoard%22)--%3E%E5%A1%AB%E5%86%99http%3A%2F%2Flocalhost%2Fhystrix.stream%0A%20%20%20%20%E5%A1%AB%E5%86%99http%3A%2F%2Flocalhost%2Fhystrix.stream--%3EB(%22%E7%82%B9%E5%87%BBMonitor%20Stream%22)%0A%20%20%20%20B(%22%E7%82%B9%E5%87%BBMonitor%20Stream%22)--%3E%E8%AE%BF%E9%97%AE%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E7%AB%AF%E4%BB%BB%E4%BD%95%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%0A"}),B,n(s,{id:"mermaid-382ee240",code:"flowchart%20LR%0A%20%20%20%20A(%22%E8%AE%BF%E9%97%AEHystrix%20DashBoard%22)--%3E%E5%A1%AB%E5%86%99http%3A%2F%2Flocalhost%3A8003%2Fhystrix.stream%0A%20%20%20%20%E5%A1%AB%E5%86%99http%3A%2F%2Flocalhost%3A8003%2Fhystrix.stream--%3EB(%22%E7%82%B9%E5%87%BBMonitor%20Stream%22)%0A%20%20%20%20B(%22%E7%82%B9%E5%87%BBMonitor%20Stream%22)--%3E%E8%AE%BF%E9%97%AE%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E7%AB%AF8003%E4%BB%BB%E4%BD%95%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%0A"}),v,n(s,{id:"mermaid-64a570e4",code:"flowchart%20LR%0A%20%20%20%20A(%22%E8%AE%BF%E9%97%AEHystrix%20DashBoard-%22)-%3E%E5%A1%AB%E5%86%99http%3A%2F%2Flocalhost%3A8004%2Fhystrix.stream%0A%20%20%20%20%E5%A1%AB%E5%86%99http%3A%2F%2Flocalhost%3A8004%2Fhystrix.stream--%3EB(%22%E7%82%B9%E5%87%BBMonitor%20Stream%22)%0A%20%20%20%20B(%22%E7%82%B9%E5%87%BBMonitor%20Stream%22)--%3E%E8%AE%BF%E9%97%AE%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E7%AB%AF8003%E4%BB%BB%E6%84%8F%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%0A"}),A,n(s,{id:"mermaid-64a56f30",code:"flowchart%20LR%0A%20%20%20%20%E5%87%86%E5%A4%87%E5%A5%BD%E6%95%B0%E6%8D%AE%E5%BA%93%E7%8E%AF%E5%A2%83--%3E%E5%90%AF%E5%8A%A8Eureka%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%837001%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8Eureka%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%837001%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858003%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858003%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858004%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858004%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E4%BD%BF%E7%94%A8%E4%BA%86Hystrix%E5%8A%9F%E8%83%BD%E7%9A%84%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E8%80%85%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E4%BD%BF%E7%94%A8%E4%BA%86Hystrix%E5%8A%9F%E8%83%BD%E7%9A%84%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E8%80%85--%3E%E5%90%AF%E5%8A%A8Tunbine%E7%9B%91%E6%8E%A7%E6%A8%A1%E5%9D%97%0A"}),b,n(s,{id:"mermaid-64a56ef8",code:"flowchart%20LR%0A%20%20%20%20%E8%AE%BF%E9%97%AETurbine--%3E%E5%A1%AB%E5%86%99http%3A%2F%2Flocalhost%3A9002%2Fturbine.stream%0A%20%20%20%20%E5%A1%AB%E5%86%99http%3A%2F%2Flocalhost%3A9002%2Fturbine.stream--%3EA(%22%E7%82%B9%E5%87%BBMonitor%20Stream%22)%0A%20%20%20%20A(%22%E7%82%B9%E5%87%BBMonitor%20Stream%22)--%3E%E8%AE%BF%E9%97%AE%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E7%AB%AF%E4%BB%BB%E4%BD%95%E4%B8%80%E4%B8%AA%E6%9C%8D%E5%8A%A1%0A"}),S,n(e),n(o)])}var D=g(y,[["render",f],["__file","springcloud-eureka-chapter-8.\u4F7F\u7528DashBoard\u548CTurbine\u76D1\u63A7\u670D\u52A1\u8BBF\u95EE\u60C5\u51B5.html.vue"]]);export{D as default};
