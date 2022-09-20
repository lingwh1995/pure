import{_ as c}from"./springbootadmin-server9003.d42e7ae6.js";import{_ as l,o as u,c as k,a as n,d as s,r as a}from"./app.d4c08878.js";const i={},r=s(`<h1 id="_13-\u4F7F\u7528springbootadmin\u76D1\u63A7\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_13-\u4F7F\u7528springbootadmin\u76D1\u63A7\u670D\u52A1" aria-hidden="true">#</a> 13.\u4F7F\u7528SpringBootAdmin\u76D1\u63A7\u670D\u52A1</h1><h2 id="_13-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_13-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 13.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 13.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 13.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 13.3.SpringBootAdmin\u7B80\u4ECB
 13.4.\u642D\u5EFASpringBootAdmin\u7684Server\u7AEF
 13.5.\u642D\u5EFASpringBootAdmin\u7684Client\u7AEF
 13.6.\u6D4B\u8BD5\u4F7F\u7528SpringBootAdmin\u76D1\u63A7\u670D\u52A1
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_13-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_13-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter13.html" target="_blank">13.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),g=s(`<h2 id="_13-3-springbootadmin\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_13-3-springbootadmin\u7B80\u4ECB" aria-hidden="true">#</a> 13.3.SpringBootAdmin\u7B80\u4ECB</h2><pre><code>SpringBootAdmin\u662F\u5F00\u6E90\u793E\u533A\u5B75\u5316\u7684\u9879\u76EE,\u7528\u4E8E\u5BF9SpringBoot\u5E94\u7528\u7684\u7BA1\u7406\u548C\u76D1\u63A7\u3002SpringBootAdmin\u5206\u4E3A\u670D\u52A1\u7AEF\uFF09(spring-boot-admin-server)\u548C\u5BA2\u6237\u7AEF(spring-boot-admin-client),\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u4E4B\u95F4\u91C7\u7528http\u901A\u8BAF\u65B9\u5F0F\u5B9E\u73B0\u6570\u636E\u4EA4\u4E92,\u5355\u4F53\u9879\u76EE\u4E2D\u9700\u8981\u6574\u5408spring-boot-admin-client\u624D\u80FD\u8BA9\u5E94\u7528\u88AB\u76D1\u63A7\u3002\u5728SpringCloud\u9879\u76EE\u4E2D,spring-boot-admin-server\u662F\u76F4\u63A5\u4ECE\u6CE8\u518C\u4E2D\u5FC3\u6293\u53D6\u5E94\u7528\u4FE1\u606F,\u4E0D\u9700\u8981\u6BCF\u4E2A\u5FAE\u670D\u52A1\u5E94\u7528\u6574\u5408spring-boot-admin-client\u5C31\u53EF\u4EE5\u5B9E\u73B0\u5E94\u7528\u7684\u7BA1\u7406\u548C\u76D1\u63A7\u3002
</code></pre><p><a href="https://github.com/codecentric/spring-boot-admin" target="_blank">\u5B98\u65B9\u7F51\u7AD9(GITHUB)</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://github.com/codecentric/spring-boot-admin
</code></pre></div><h2 id="_13-4-\u642D\u5EFAspringbootadmin\u7684server\u7AEF" tabindex="-1"><a class="header-anchor" href="#_13-4-\u642D\u5EFAspringbootadmin\u7684server\u7AEF" aria-hidden="true">#</a> 13.4.\u642D\u5EFASpringBootAdmin\u7684Server\u7AEF</h2><h3 id="_13-4-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_13-4-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 13.4.1.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>SpringBootAdmin\u7684Server\u7AEF,\u542F\u52A8\u7AEF\u53E3: 9003
</code></pre><h3 id="_13-4-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_13-4-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 13.4.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-mointor-springboot-admin-server9003
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               |-- endpoint
|       |               |   \u2022-- CoustomEndpoint.java
|       |               \u2022-- MointorSpringBootAdmin9003.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h3 id="_13-4-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_13-4-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 13.4.3.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-mointor-springboot-admin-server9003\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_13-4-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_13-4-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 13.4.4.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-mointor-springboot-admin-server9003<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>de.codecentric<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-admin-starter-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--\u70ED\u90E8\u7F72\u9700\u8981\u52A0\u8FD9\u4E2A--&gt;</span>
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

</code></pre></div><h3 id="_13-4-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_13-4-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 13.4.5.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">9003</span> <span class="token comment">#\u8BBF\u95EE\u7AEF\u53E3</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>BASIC<span class="token punctuation">-</span>SAMPLE<span class="token punctuation">-</span>MOINTOR<span class="token punctuation">-</span>SPRINGBOOT<span class="token punctuation">-</span>ADMIN<span class="token punctuation">-</span>SERVER  <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span> <span class="token comment">#\u70ED\u90E8\u7F72\u5F00\u5173</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token key atrule">health</span><span class="token punctuation">:</span>
      <span class="token key atrule">show-details</span><span class="token punctuation">:</span> always
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
      <span class="token key atrule">enabled-by-default</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u8868\u793A\u662F\u5426\u5C06\u81EA\u5DF1\u6CE8\u518C\u8FDBEurekaServer\u9ED8\u8BA4\u4E3Atrue\u3002</span>
    <span class="token key atrule">fetchRegistry</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u662F\u5426\u4ECEEurekaServer\u6293\u53D6\u5DF2\u6709\u7684\u6CE8\u518C\u4FE1\u606F\uFF0C\u9ED8\u8BA4\u4E3Atrue\u3002\u5355\u8282\u70B9\u65E0\u6240\u8C13\uFF0C\u96C6\u7FA4\u5FC5\u987B\u8BBE\u7F6E\u4E3Atrue\u624D\u80FD\u914D\u5408ribbon\u4F7F\u7528\u8D1F\u8F7D\u5747\u8861</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token comment">#\u5355\u673A\u7248</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>7001/eureka
      <span class="token comment">#\u96C6\u7FA4\u7248</span>
      <span class="token comment">#defaultZone: http://eureka7002:7002/eureka,http://eureka7003:7003/eureka,http://eureka7004:7004/eureka</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>MOINTOR<span class="token punctuation">-</span>SPRINGBOOT<span class="token punctuation">-</span>ADMIN<span class="token punctuation">-</span>SERVER <span class="token comment">#Eureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>
    <span class="token key atrule">lease-renewal-interval-in-seconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment">#Eureka\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F30\u79D2)</span>
    <span class="token key atrule">lease-expiration-duration-in-seconds</span><span class="token punctuation">:</span> <span class="token number">90</span> <span class="token comment">#Eureka\u670D\u52A1\u7AEF\u5728\u6536\u5230\u6700\u540E\u4E00\u6B21\u5FC3\u8DF3\u540E\u7B49\u5F85\u65F6\u95F4\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F90\u79D2)\uFF0C\u8D85\u65F6\u5C06\u5254\u9664\u670D\u52A1</span>

</code></pre></div><h3 id="_13-4-6-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_13-4-6-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 13.4.6.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">de<span class="token punctuation">.</span>codecentric<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>admin<span class="token punctuation">.</span>server<span class="token punctuation">.</span>config<span class="token punctuation">.</span></span><span class="token class-name">EnableAdminServer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@EnableAdminServer</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MointorSpringBootAdmin9003</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">MointorSpringBootAdmin9003</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_13-5-\u642D\u5EFAspringbootadmin\u7684client\u7AEF" tabindex="-1"><a class="header-anchor" href="#_13-5-\u642D\u5EFAspringbootadmin\u7684client\u7AEF" aria-hidden="true">#</a> 13.5.\u642D\u5EFASpringBootAdmin\u7684Client\u7AEF</h2><h3 id="_13-5-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_13-5-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 13.5.1.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u96C6\u6210\u4E86SpringBootAdmin\u7684Client\u7AEF\u7684\u670D\u52A1\u6D88\u8D39\u7AEF,\u542F\u52A8\u7AEF\u53E3: 80
</code></pre><h3 id="_13-5-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_13-5-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 13.5.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-consumer-loadbalance-openfeign-springbootadmin-client-order80
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               |-- config
|       |               |   \u2022-- OpenFeignConfig.java
|       |               |-- controller
|       |               |   \u2022-- OrderConsumerController.java
|       |               |-- service
|       |               |   \u2022-- PaymentServiceOpenFeign.java
|       |               \u2022-- OrderServiceConsumerLoadBalanceOpenFeignSpringBootAdminClient80.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h3 id="_13-5-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_13-5-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 13.5.3.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-consumer-loadbalance-openfeign-springbootadmin-client-order80\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_13-5-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_13-5-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 13.5.4.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-consumer-loadbalance-openfeign-springbootadmin-client-order80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
        <span class="token comment">&lt;!--\u5F15\u5165\u516C\u5171\u7684\u5DE5\u7A0B--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>de.codecentric<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-admin-starter-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>plugins</span><span class="token punctuation">&gt;</span></span>
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

</code></pre></div><h3 id="_13-5-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_13-5-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 13.5.5.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>CONSUMER<span class="token punctuation">-</span>LOADBALANCE<span class="token punctuation">-</span>OPENFEIGN<span class="token punctuation">-</span>SPRINGBOOTADMIN<span class="token punctuation">-</span>CLIENT<span class="token punctuation">-</span>ORDER80 <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span> <span class="token comment">#Spring\u8FD0\u884C\u65E5\u5FD7\u914D\u7F6E</span>
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token comment"># \u5C06Client\u4F5C\u4E3A\u670D\u52A1\u6CE8\u518C\u5230SpringBootAdmin Server\u7AEF\uFF0C\u901A\u8FC7Server\u6765\u76D1\u542C\u9879\u76EE\u7684\u8FD0\u884C\u60C5\u51B5</span>
  <span class="token key atrule">boot</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">client</span><span class="token punctuation">:</span>
        <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>$<span class="token punctuation">{</span>server.port<span class="token punctuation">}</span>
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
    <span class="token comment">#\u5F53\u524D\u5FAE\u670D\u52A1\u6240\u5728\u90E8\u7F72\u673A\u5668ip</span>
    <span class="token key atrule">ip-address</span><span class="token punctuation">:</span> localhost
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>

<span class="token comment">#\u670D\u52A1\u63D0\u4F9B\u7AEF\u4FE1\u606F</span>
<span class="token key atrule">service</span><span class="token punctuation">:</span>
  <span class="token key atrule">provider</span><span class="token punctuation">:</span>
    <span class="token key atrule">provider-1</span><span class="token punctuation">:</span> <span class="token important">&amp;provider-1</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>PAYMENT<span class="token punctuation">-</span>SERVICE<span class="token punctuation">-</span>CLUSTER  <span class="token comment">#\u670D\u52A1\u63D0\u4F9B\u7AEF\u540D\u79F0</span>

<span class="token comment">#\u67D0\u4E2A/\u67D0\u4E9B\u670D\u52A1\u7684Ribbon\u914D\u7F6E</span>
<span class="token important">*provider-</span><span class="token key atrule">1</span><span class="token punctuation">:</span> <span class="token comment">#\u670D\u52A1\u63D0\u4F9B\u7AEF\u540D\u79F0</span>
  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.netflix.loadbalancer.RandomRule  <span class="token comment">#Ribbon\u8D1F\u8F7D\u5747\u8861\u89C4\u5219\u7C7B\u6240\u5728\u7684\u8DEF\u5F84,\u81EA\u5E26\u4E03\u79CD\u89C4\u5219,\u4E5F\u53EF\u4EE5\u662F\u81EA\u5B9A\u4F4D\u89C4\u5219\u7684\u7C7B\u6240\u5728\u7684\u8DEF\u5F84</span>
<span class="token comment">#\u5BF9OpenFeign\u8FDB\u884C\u5355\u72EC\u914D\u7F6E</span>
<span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token comment">#\u8FD9\u91CC\u586B\u5177\u4F53\u7684\u670D\u52A1\u540D\u79F0\uFF08\u4E5F\u53EF\u4EE5\u586Bdefault\uFF0C\u8868\u793A\u5BF9\u6240\u6709\u670D\u52A1\u751F\u6548\uFF09</span>
      <span class="token important">*provider-</span><span class="token key atrule">1</span><span class="token punctuation">:</span>  <span class="token comment">#\u670D\u52A1\u63D0\u4F9B\u7AEF\u540D\u79F0</span>
        <span class="token comment">#connectTimeout\u548CreadTimeout\u8FD9\u4E24\u4E2A\u5F97\u4E00\u8D77\u914D\u7F6E\u624D\u4F1A\u751F\u6548</span>
        <span class="token key atrule">connectTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>  <span class="token comment">#\u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4\uFF0C\u9002\u7528\u4E8E\u7F51\u7EDC\u72B6\u51B5\u6B63\u5E38\u7684\u60C5\u51B5\u4E0B,\u4E24\u7AEF\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4</span>
        <span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>   <span class="token comment">#\u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u540E\u4ECE\u670D\u52A1\u5668\u8BFB\u53D6\u5230\u53EF\u7528\u8D44\u6E90\u6240\u7528\u7684\u65F6\u95F4</span>

<span class="token comment">#----------------SpringBootAdmin\u76D1\u63A7\u4FE1\u606F\u5F00\u59CB----------------</span>
<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
    <span class="token key atrule">enabled-by-default</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token key atrule">health</span><span class="token punctuation">:</span>
      <span class="token key atrule">show-details</span><span class="token punctuation">:</span> always
<span class="token comment">#----------------SpringBootAdmin\u76D1\u63A7\u4FE1\u606F\u5F00\u59CB----------------</span>

</code></pre></div><h3 id="_13-5-6-\u7F16\u5199\u6A21\u5757config" tabindex="-1"><a class="header-anchor" href="#_13-5-6-\u7F16\u5199\u6A21\u5757config" aria-hidden="true">#</a> 13.5.6.\u7F16\u5199\u6A21\u5757config</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">feign<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OpenFeignConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * NONE\uFF1A\u9ED8\u8BA4\u7684\uFF0C\u4E0D\u663E\u793A\u4EFB\u4F55\u65E5\u5FD7;
     * BASIC\uFF1A\u4EC5\u8BB0\u5F55\u8BF7\u6C42\u65B9\u6CD5\u3001URL\u3001\u54CD\u5E94\u72B6\u6001\u7801\u53CA\u6267\u884C\u65F6\u95F4;
     * HEADERS\uFF1A\u9664\u4E86BASIC\u4E2D\u5B9A\u4E49\u7684\u4FE1\u606F\u4E4B\u5916\uFF0C\u8FD8\u6709\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u5934\u4FE1\u606F;
     * FULL\uFF1A\u9664\u4E86HEADERS\u4E2D\u5B9A\u4E49\u7684\u4FE1\u606F\u4E4B\u5916\uFF0C\u8FD8\u6709\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u6B63\u6587\u53CA\u5143\u6570\u636E\u3002
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span> <span class="token function">feignLoggerLevel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Logger<span class="token punctuation">.</span>Level</span><span class="token punctuation">.</span>FULL<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_13-5-7-\u7F16\u5199\u6A21\u5757service" tabindex="-1"><a class="header-anchor" href="#_13-5-7-\u7F16\u5199\u6A21\u5757service" aria-hidden="true">#</a> 13.5.7.\u7F16\u5199\u6A21\u5757service</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PostMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestBody</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4F7F\u7528\u7CFB\u7EDF\u81EA\u5E26\u7684OpenFeignClient\u53D1\u8D77\u8C03\u7528
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;SPRINGCLOUD-BASIC-SAMPLE-PROVIDER-PAYMENT-SERVICE-CLUSTER&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentServiceOpenFeign</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/create&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Payment</span> payment<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4F7F\u7528\u62E6\u622A\u5668\u66FF\u6362\u8DEF\u7531\u670D\u52A1\u63D0\u4F9B\u7AEFURL\u4E2D\u7684\u5360\u4F4D\u7B26
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/$evn/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdReplaceRouter</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/openfeign/timeout&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">String</span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_13-5-8-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_13-5-8-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 13.5.8.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">EnableFeignClients</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * 1.\u4F7F\u7528OpenFeign\u5B8C\u6210\u8FDC\u7A0B\u8C03\u7528,\u5982\u679C\u8981\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u7B56\u7565,\u548CRibbon\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u7B56\u7565\u65B9\u5F0F\u76F8\u540C
 *      \u672C\u5FAE\u670D\u52A1\u4E3B\u8981\u6D4B\u8BD5OpenFeign\u7684\u529F\u80FD,\u6240\u4EE5\u91C7\u7528YML\u6587\u4EF6\u914D\u7F6ERibbon\u7684\u8D1F\u8F7D\u5747\u8861\u7B56\u7565
 * 2.OpenFeign\u662F\u5BF9Ribbon\u548CRestTemplate\u7684\u5C01\u88C5,\u6240\u4EE5\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u65B9\u5F0F\u540CRibbon\u914D\u7F6E\u8D1F\u8F7D\u5747\u8861\u65B9\u5F0F,\u800C\u4E14\u4E0D\u9700\u8981\u5728\u5BB9\u5668\u4E2D\u624B\u52A8\u6CE8\u5165ResTemplate\u5BF9\u8C61
 * 3.OpenFeign YML\u6587\u4EF6\u914D\u7F6E\u5B9E\u73B0\u8FDC\u7A0B\u8C03\u7528,\u4F46\u4E0D\u662F\u5B8C\u5168\u5C06\u670D\u52A1\u4FE1\u606F\u914D\u7F6E\u5728YML\u4E2D,\u53EA\u662F\u5728YML\u4E2D\u5199\u4E00\u4E9B\u589E\u5F3A\u7684\u914D\u7F6E,\u76F8\u5173\u7684\u670D\u52A1\u4E2D\u4ECD\u7136\u8981\u5199\u670D\u52A1\u540D,@FeignClient(name=&quot;SPRING-CLOUD-PROVIDER-CONSUL-PAYMENT-SERVICE&quot;)
 * 4.\u5BF9\u6BCF\u4E2A\u5FAE\u670D\u52A1\u5355\u72EC\u8FDB\u884C\u914D\u7F6E,\u5982\u8FDE\u63A5\u8D85\u65F6\u65F6\u95F4\u914D\u7F6E\u3001\u8BFB\u53D6\u8D85\u65F6\u65F6\u95F4\u914D\u7F6E,YML\u6CA1\u6709\u628AOpenFegin\u7684\u914D\u7F6E\u548C\u5BF9Ribbon\u7684\u914D\u7F6E\u5199\u5728\u4E00\u8D77
 * 5.\u5F00\u542FOpenFeign\u589E\u5F3A\u65E5\u5FD7\u540E\u53EF\u4EE5\u770B\u5230Http\u8C03\u7528\u7684\u8BE6\u7EC6\u4FE1\u606F
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] &lt;--- HTTP/1.1 200 (59ms)
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] connection: keep-alive
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] content-type: application/json
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] date: Tue, 31 May 2022 19:51:37 GMT
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] keep-alive: timeout=60
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] transfer-encoding: chunked
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById]
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] <span class="token punctuation">{</span>&quot;code&quot;:200,&quot;message&quot;:&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  8006&quot;,&quot;data&quot;:<span class="token punctuation">{</span>&quot;id&quot;:1,&quot;serial&quot;:&quot;15646546546&quot;<span class="token punctuation">}</span><span class="token punctuation">}</span>
 *      2022-06-01 03:51:37.176 DEBUG 16792 --- [p-nio-80-exec-1] o.o.s.services.PaymentServiceOpenFeign   : [PaymentServiceOpenFeign#getPaymentById] &lt;--- END HTTP (94-byte body)
 */</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>  <span class="token comment">//\u6DFB\u52A0@EnableEurekaClient\u597D\u50CF\u6CA1\u4EC0\u4E48\u7528,\u4F46\u662F\u8FD8\u662F\u52A0\u4E0A</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableFeignClients</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderServiceConsumerLoadBalanceOpenFeignSpringBootAdminClient80</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">OrderServiceConsumerLoadBalanceOpenFeignSpringBootAdminClient80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_13-6-\u6D4B\u8BD5\u4F7F\u7528springbootadmin\u76D1\u63A7\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#_13-6-\u6D4B\u8BD5\u4F7F\u7528springbootadmin\u76D1\u63A7\u670D\u52A1" aria-hidden="true">#</a> 13.6.\u6D4B\u8BD5\u4F7F\u7528SpringBootAdmin\u76D1\u63A7\u670D\u52A1</h2><pre><code>\u542F\u52A8\u76F8\u5173\u670D\u52A1
</code></pre>`,36),d=s(`<pre><code>\u5728\u6D4F\u89C8\u5668\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:9003/
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+c+`" width="100%"></div></div><pre><code>\u53EF\u4EE5\u770B\u5230SpringbootAdminServer\u4E2D\u5DF2\u7ECF\u76D1\u63A7\u5230\u4E86\u76F8\u5173\u7684\u670D\u52A1,\u53EF\u4EE5\u70B9\u51FB\u5177\u4F53\u670D\u52A1\u67E5\u770B\u8BE6\u7EC6\u4FE1\u606F,\u8FD9\u91CC\u4E0D\u5728\u7EE7\u7EED\u505A\u5C55\u793A
</code></pre>`,4);function m(y,h){const t=a("Markmap"),p=a("Mermaid"),o=a("ScrollIntoPageView"),e=a("HideSideBar");return u(),k("div",null,[r,n(t,{localtion:"/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter13.html",height:"500rem"}),g,n(p,{id:"mermaid-382ee223",code:"flowchart%20LR%0A%20%20%20%20%E5%90%AF%E5%8A%A8Eureka%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%837001%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8SpringBootAdminServer%0A%09%E5%90%AF%E5%8A%A8SpringBootAdminServer--%3E%E5%90%AF%E5%8A%A8%E5%90%AF%E5%8A%A8SpringBootAdminClient%0A"}),d,n(o),n(e)])}var f=l(i,[["render",m],["__file","springcloud-eureka-chapter-13.\u4F7F\u7528SpringBootAdmin\u76D1\u63A7\u670D\u52A1.html.vue"]]);export{f as default};
