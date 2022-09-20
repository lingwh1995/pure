import{_ as c,o as l,c as u,a as n,d as s,r as a}from"./app.d4c08878.js";const k={},i=s(`<h1 id="_7-\u4F7F\u7528hystrix\u5B9E\u73B0\u670D\u52A1\u964D\u7EA7\u548C\u7194\u65AD" tabindex="-1"><a class="header-anchor" href="#_7-\u4F7F\u7528hystrix\u5B9E\u73B0\u670D\u52A1\u964D\u7EA7\u548C\u7194\u65AD" aria-hidden="true">#</a> 7.\u4F7F\u7528Hystrix\u5B9E\u73B0\u670D\u52A1\u964D\u7EA7\u548C\u7194\u65AD</h1><h2 id="_7-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_7-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 7.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 7.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 7.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 7.3.Hystrix\u7B80\u4ECB
 7.4.\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\u7B2C\u4E00\u4E2A\u8282\u70B9(Hystrix)
 7.5.\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\u7B2C\u4E8C\u4E2A\u8282\u70B9(Hystrix)
 7.6.\u642D\u5EFA\u670D\u52A1\u6D88\u8D39\u8005(Hystrix)
 7.7.\u6D4B\u8BD5\u670D\u52A1\u964D\u7EA7\u548C\u670D\u52A1\u7194\u65AD(Hystrix)
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_7-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_7-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter7.html" target="_blank">7.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),r=s(`<h2 id="_7-3-hystrix\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_7-3-hystrix\u7B80\u4ECB" aria-hidden="true">#</a> 7.3.Hystrix\u7B80\u4ECB</h2><pre><code>Hystrix\u662F\u7531Netflix\u5F00\u6E90\u7684\u4E00\u4E2A\u670D\u52A1\u9694\u79BB\u7EC4\u4EF6,\u901A\u8FC7\u670D\u52A1\u9694\u79BB\u6765\u907F\u514D\u7531\u4E8E\u4F9D\u8D56\u5EF6\u8FDF\u3001\u5F02\u5E38,\u5F15\u8D77\u8D44\u6E90\u8017\u5C3D\u5BFC\u81F4\u7CFB\u7EDF\u4E0D\u53EF\u7528\u7684\u89E3\u51B3\u65B9\u6848\u3002\u8FD9\u8BF4\u7684\u6709\u70B9\u513F\u592A\u5B98\u65B9\u4E86,\u5B83\u7684\u529F\u80FD\u4E3B\u8981\u6709\u4EE5\u4E0B\u4E09\u4E2A:
\u670D\u52A1\u964D\u7EA7
\u5F53\u670D\u52A1\u8C03\u7528\u53D1\u751F\u5F02\u5E38\u65F6\uFF0C\u5FEB\u901F\u8FD4\u56DE\u4E00\u4E2A\u4E8B\u5148\u8BBE\u7F6E\u597D\u7684\u503C,\u9488\u5BF9\u7CFB\u7EDF\u5168\u5C40\u7A33\u5B9A\u6027\u8003\u8651,\u6D88\u8D39\u7AEF\u548C\u670D\u52A1\u7AEF\u90FD\u53EF\u4EE5\u505A

\u670D\u52A1\u7194\u65AD
\u5F53\u8C03\u7528\u670D\u52A1\u53D1\u751F\u591A\u6B21\u5F02\u5E38\u65F6\u670D\u52A1\u4F1A\u4F1A\u7194\u65AD,\u5982\u6570\u636E\u5E93\u8FDE\u63A5\u6545\u969C,\u5F53\u6545\u969C\u4FEE\u590D\u65F6\u670D\u52A1\u53C8\u4F1A\u6062\u590D\u5230\u6B63\u5E38\u72B6\u6001,\u9488\u5BF9\u670D\u52A1\u63D0\u4F9B\u7AEF\u7A33\u5B9A\u6027\u8003\u8651

\u670D\u52A1\u9650\u6D41
\u5BF9\u8BBF\u95EE\u7684\u6D41\u91CF\u8FDB\u884C\u9650\u5236
</code></pre><p><a href="https://github.com/Netflix/Hystrix" target="_blank">\u5B98\u65B9\u7F51\u7AD9</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://github.com/Netflix/Hystrix
</code></pre></div><h2 id="_7-4-\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\u7B2C\u4E00\u4E2A\u8282\u70B9-hystrix" tabindex="-1"><a class="header-anchor" href="#_7-4-\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\u7B2C\u4E00\u4E2A\u8282\u70B9-hystrix" aria-hidden="true">#</a> 7.4.\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\u7B2C\u4E00\u4E2A\u8282\u70B9(Hystrix)</h2><h3 id="_7-4-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_7-4-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 7.4.1.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u5177\u6709\u670D\u52A1\u7194\u65AD\u548C\u670D\u52A1\u964D\u7EA7\u529F\u80FD\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9,\u542F\u52A8\u7AEF\u53E3: 8003
</code></pre><h3 id="_7-4-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_7-4-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 7.4.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-provider-hystrix-cluster-node-payment8003
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               |-- controller
|       |               |   \u2022-- PaymentHystrixController.java
|       |               |-- dao
|       |               |   \u2022-- PaymentHystrixDao.java
|       |               |-- service
|       |               |   |-- impl
|       |               |   |   \u2022-- PaymentHystrixServiceImpl.java
|       |               |   \u2022-- PaymentHystrixService.java
|       |               \u2022-- PaymentServiceProviderHystrixClusterNode8003.java
|       \u2022-- resources
|           |-- mapper
|           |   \u2022-- PaymentMapper.xml
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h3 id="_7-4-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_7-4-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 7.4.3.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-provider-hystrix-cluster-node-payment8003\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_7-4-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_7-4-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 7.4.4.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-provider-hystrix-cluster-node-payment8003<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-hystrix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
                    <span class="token comment">&lt;!--\u4E0D\u533A\u5206\u73AF\u5883:\u76F4\u63A5\u52A0\u8F7Dmapper\u4E0B*.xml\u914D\u7F6E\u6587\u4EF6--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>mapper/*.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="_7-4-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_7-4-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 7.4.5.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8003</span> <span class="token comment">#\u8BBF\u95EE\u7AEF\u53E3</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>HYSTRIX<span class="token punctuation">-</span>PAYMENT<span class="token punctuation">-</span>SERVICE<span class="token punctuation">-</span>CLUSTER <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span> <span class="token comment">#\u70ED\u90E8\u7F72\u5F00\u5173</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span>
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource            <span class="token comment"># \u5F53\u524D\u6570\u636E\u6E90\u64CD\u4F5C\u7C7B\u578B</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver              <span class="token comment"># mysql\u9A71\u52A8\u5305</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.0.5<span class="token punctuation">:</span>3306/payment<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf-8&amp;useSSL=false</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> Mysql123456_


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
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>PAYMENT<span class="token punctuation">-</span>SERVICE<span class="token punctuation">-</span>CLUSTER<span class="token punctuation">-</span>NODE<span class="token punctuation">-</span>PAYMENT8003 <span class="token comment">#Eureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>
    <span class="token key atrule">lease-renewal-interval-in-seconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment">#Eureka\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F30\u79D2)</span>
    <span class="token key atrule">lease-expiration-duration-in-seconds</span><span class="token punctuation">:</span> <span class="token number">90</span> <span class="token comment">#Eureka\u670D\u52A1\u7AEF\u5728\u6536\u5230\u6700\u540E\u4E00\u6B21\u5FC3\u8DF3\u540E\u7B49\u5F85\u65F6\u95F4\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F90\u79D2)\uFF0C\u8D85\u65F6\u5C06\u5254\u9664\u670D\u52A1</span>

<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapperLocations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> org.openatom.springcloud.entities    <span class="token comment"># \u6240\u6709Entity\u522B\u540D\u7C7B\u6240\u5728\u5305</span>



</code></pre></div><h3 id="_7-4-6-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-4-6-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 7.4.6.\u7F16\u5199\u6A21\u5757Mybatis\u914D\u7F6E\u6587\u4EF6</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span> <span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.openatom.springcloud.dao.PaymentHystrixDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--\u7B2C\u4E00\u79CD\u5199\u6CD5:parameterType\u4E0D\u5199\u5168\u8DEF\u5F84--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>create<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Payment<span class="token punctuation">&quot;</span></span> <span class="token attr-name">useGeneratedKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        insert into payment(serial)  values(#{serial});
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Payment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serial<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serial<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VARCHAR<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPaymentById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Long<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from payment where id=#{id};
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--\u7B2C\u4E8C\u79CD\u5199\u6CD5:parameterType\u7684\u5199\u6CD5\u4E0E\u7B2C\u4E00\u79CD\u6709\u533A\u522B--&gt;</span>
    <span class="token comment">&lt;!--
    &lt;insert id=&quot;create&quot; parameterType=&quot;org.openatom.springcloud.entities.Payment&quot; useGeneratedKeys=&quot;true&quot; keyProperty=&quot;id&quot;&gt;
        insert into payment(serial)  values(#{serial});
    &lt;/insert&gt;

    &lt;resultMap id=&quot;BaseResultMap&quot; type=&quot;org.openatom.springcloud.entities.Payment&quot;&gt;
        &lt;id column=&quot;id&quot; property=&quot;id&quot; jdbcType=&quot;BIGINT&quot;/&gt;
        &lt;id column=&quot;serial&quot; property=&quot;serial&quot; jdbcType=&quot;VARCHAR&quot;/&gt;
    &lt;/resultMap&gt;
    &lt;select id=&quot;getPaymentById&quot; parameterType=&quot;Long&quot; resultMap=&quot;BaseResultMap&quot;&gt;
        select * from payment where id=#{id};
    &lt;/select&gt;
    --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>



</code></pre></div><h3 id="_7-4-7-\u7F16\u5199\u6A21\u5757dao" tabindex="-1"><a class="header-anchor" href="#_7-4-7-\u7F16\u5199\u6A21\u5757dao" aria-hidden="true">#</a> 7.4.7.\u7F16\u5199\u6A21\u5757dao</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD5Hystrix
 */</span>
<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentHystrixDao</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Payment</span> <span class="token function">getPaymentById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-4-8-\u7F16\u5199\u6A21\u5757service" tabindex="-1"><a class="header-anchor" href="#_7-4-8-\u7F16\u5199\u6A21\u5757service" aria-hidden="true">#</a> 7.4.8.\u7F16\u5199\u6A21\u5757service</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD5Hystrix
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentHystrixService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u672A\u8BBE\u7F6E\u964D\u7EA7\u548C\u7194\u65AD\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">payment</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u672A\u8BBE\u7F6E\u964D\u7EA7\u548C\u7194\u65AD\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u672A\u8BBE\u7F6E\u964D\u7EA7\u548C\u7194\u65AD\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u964D\u7EA7\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u7194\u65AD\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-4-9-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" tabindex="-1"><a class="header-anchor" href="#_7-4-9-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" aria-hidden="true">#</a> 7.4.9.\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">HystrixCommand</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">HystrixProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">PaymentHystrixDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">PaymentHystrixService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD5Hystrix
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentHystrixServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentHystrixService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">PaymentHystrixDao</span> paymentHystrixDao<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u7761\u77203\u79D2</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 1.\u5F53\u670D\u52A1\u8C03\u7528\u8D85\u65F6\u65F6\u4F7F\u7528Hystrix\u5BF9\u670D\u52A1\u8FDB\u884C\u964D\u7EA7
     * 2.\u5F53\u670D\u52A1\u8C03\u7528\u51FA\u73B0\u5F02\u5E38\u65F6\u4F7F\u7528Hystrix\u5BF9\u670D\u52A1\u8FDB\u884C\u964D\u7EA7,\u5982\u4EE3\u7801\u4E2D\u542B\u6709 int i = 1/0;
     *      \u4E0B\u9762\u7684\u6CE8\u89E3\u8868\u793A:\u8BE5\u65B9\u6CD53000ms\u5185\u6CA1\u6709\u6267\u884C\u5B8C\u6210,\u5219\u8BA4\u4E3A\u8BE5\u65B9\u6CD5\u6267\u884C\u4E0D\u6210\u529F
     * 3.\u67E5\u770B\u5C5E\u6027name\u503C\u5230HystrixCommandProperties\u8FD9\u4E2A\u7C7B\u4E2D\u53BB\u770B
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;getPaymentByIdUseHystrixDegradationFallback&quot;</span><span class="token punctuation">,</span>
            commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;execution.isolation.thread.timeoutInMilliseconds&quot;</span><span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">&quot;3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u7761\u77205\u79D2</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u65B9\u6CD5getPaymentByIdTimeOut()\u6267\u884C\u5931\u8D25\u65F6,\u6267\u884C\u4E0B\u9762\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixDegradationFallback</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Payment</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span><span class="token string">&quot;\u670D\u52A1\u63D0\u4F9B\u7AEF:\u670D\u52A1\u964D\u7EA7\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u4E0B\u6E38\u670D\u52A1(\u670D\u52A1\u63D0\u4F9B\u7AEF)\u53D1\u751F\u6545\u969C\u65F6\u5BF9\u670D\u52A1\u4E0B\u6E38\u670D\u52A1(\u670D\u52A1\u63D0\u4F9B\u7AEF)\u8FDB\u884C\u964D\u7EA7
     *  10\u5185\u8BF7\u6C42\u5931\u8D25,\u5931\u8D25\u7387\u4E3A60%\u65F6\u7194\u65AD\u670D\u52A1
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;getPaymentByIdUseHystrixCircuitBreakerFallback&quot;</span><span class="token punctuation">,</span>commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.enabled&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// \u662F\u5426\u5F00\u542F\u65AD\u8DEF\u5668</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.requestVolumeThreshold&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// \u8BF7\u6C42\u6B21\u6570</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.sleepWindowInMilliseconds&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;10000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u65F6\u95F4\u7A97\u53E3\u671F</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.errorThresholdPercentage&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// \u5931\u8D25\u7387\u8FBE\u5230\u591A\u5C11\u540E\u8DF3\u95F8</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5F53ID\u5C0F\u4E8E0\u65F6,\u6D88\u8D39\u7AEF\u4F7F\u7528\u4E0D\u5408\u7406\u7684\u53C2\u6570\u591A\u6B21\u8C03\u7528\u6B64\u670D\u52A1,\u5219\u670D\u52A1\u7194\u65AD</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;id\u4E0D\u80FD\u5C0F\u4E8E0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u65B9\u6CD5getPaymentByIdUseHystrixCircuitBreaker()\u6267\u884C\u5931\u8D25\u65F6,\u6267\u884C\u4E0B\u9762\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixCircuitBreakerFallback</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Payment</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span><span class="token string">&quot;\u670D\u52A1\u63D0\u4F9B\u7AEF:\u6D4B\u8BD5\u670D\u52A1\u7194\u65AD\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-4-10-\u7F16\u5199\u6A21\u5757controller" tabindex="-1"><a class="header-anchor" href="#_7-4-10-\u7F16\u5199\u6A21\u5757controller" aria-hidden="true">#</a> 7.4.10.\u7F16\u5199\u6A21\u5757controller</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">PaymentHystrixService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">ServiceInstance</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>discovery<span class="token punctuation">.</span></span><span class="token class-name">DiscoveryClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD5Hystrix
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentHystrixController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">PaymentHystrixService</span> paymentHystrixService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${server.port}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> serverPort<span class="token punctuation">;</span>

    <span class="token comment">//\u4ECE\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A8\u6001\u83B7\u53D6\u670D\u52A1\u540D\u79F0</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.application.name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> APPLICATION_NAME<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">DiscoveryClient</span> discoveryClient<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/create&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;*****\u63D2\u5165\u7ED3\u679C\uFF1A&quot;</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u5E93\u6210\u529F,serverPort: &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u5E93\u5931\u8D25&quot;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6B63\u5E38\u83B7\u53D6Payment
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/ok/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>APPLICATION_NAME <span class="token operator">+</span> serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u8BB0\u5F55,\u67E5\u8BE2ID: &quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5EF6\u65F6\u83B7\u53D6Payment
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/timeout/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>APPLICATION_NAME <span class="token operator">+</span> serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u8BB0\u5F55,\u67E5\u8BE2ID: &quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u63D0\u4F9B\u7AEF\u670D\u52A1\u964D\u7EA7
     * \u8BBF\u95EE\u8DEF\u5F84:http://localhost:8003/provider/payment/degradation_in_provider/get/1
     * \u5F53\u5927\u91CF\u7EBF\u7A0B\u8BBF\u95EE\u8FD9\u4E2A\u63A5\u53E3\u7684\u65F6\u5019,\u670D\u52A1\u8C03\u7528\u8005\u8BBF\u95EE\u4E0A\u9762\u7684\u63A5\u53E3getPaymentById()\u4E5F\u4F1A\u53D7\u5230\u5F71\u54CD,\u56E0\u4E3ATomcat\u7684\u7EBF\u7A0B\u6C60\u4E2D\u7684\u5904\u7406\u7EBF\u7A0B\u90FD\u88AB\u8BBF\u95EE\u5F53\u524D
     *      \u63A5\u53E3\u7684\u591A\u4E2A\u8BF7\u6C42\u5360\u636E\u4E86,\u5BFC\u81F4\u8BBF\u95EE\u672C\u5FAE\u670D\u52A1\u4E2D\u7684\u5176\u4ED6\u63A5\u53E3\u5730\u5740\u4E5F\u4F1A\u53D8\u5F97\u5361\u987F,\u4F7F\u7528Hystrix\u7684\u5728\u6D88\u8D39\u7AEF\u5BF9\u672C\u5FAE\u670D\u52A1\u4E2D\u7684\u8FD9\u4E2A\u63A5\u53E3\u8FDB\u884C\u964D\u7EA7
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/degradation_in_provider/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>APPLICATION_NAME <span class="token operator">+</span> serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u8BB0\u5F55,\u67E5\u8BE2ID: &quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u670D\u52A1\u7194\u65AD\u6D4B\u8BD5\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/circuitbreaker/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>APPLICATION_NAME <span class="token operator">+</span> serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">getPaymentByIdUseHystrixCircuitBreaker</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u8BB0\u5F55,\u67E5\u8BE2ID: &quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-4-11-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_7-4-11-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 7.4.11.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>circuitbreaker<span class="token punctuation">.</span></span><span class="token class-name">EnableCircuitBreaker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u652F\u4ED8\u63A5\u53E3\u63D0\u4F9B\u8005
 *  \u4F7F\u7528Eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3
 */</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCircuitBreaker</span><span class="token comment">//\u670D\u52A1\u63D0\u4F9B\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentServiceProviderHystrixClusterNode8003</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">PaymentServiceProviderHystrixClusterNode8003</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="_7-5-\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\u7B2C\u4E8C\u4E2A\u8282\u70B9-hystrix" tabindex="-1"><a class="header-anchor" href="#_7-5-\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\u7B2C\u4E8C\u4E2A\u8282\u70B9-hystrix" aria-hidden="true">#</a> 7.5.\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005\u7B2C\u4E8C\u4E2A\u8282\u70B9(Hystrix)</h2><h3 id="_7-5-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_7-5-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 7.5.1.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u5177\u6709\u670D\u52A1\u7194\u65AD\u548C\u670D\u52A1\u964D\u7EA7\u529F\u80FD\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9,\u542F\u52A8\u7AEF\u53E3: 8004
</code></pre><h3 id="_7-5-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_7-5-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 7.5.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-provider-hystrix-cluster-node-payment8004
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               |-- controller
|       |               |   \u2022-- PaymentHystrixController.java
|       |               |-- dao
|       |               |   \u2022-- PaymentHystrixDao.java
|       |               |-- service
|       |               |   |-- impl
|       |               |   |   \u2022-- PaymentHystrixServiceImpl.java
|       |               |   \u2022-- PaymentHystrixService.java
|       |               \u2022-- PaymentServiceProviderHystrixClusterNode8004.java
|       \u2022-- resources
|           |-- mapper
|           |   \u2022-- PaymentMapper.xml
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h3 id="_7-5-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_7-5-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 7.5.3.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-provider-hystrix-cluster-node-payment8004\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_7-5-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_7-5-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 7.5.4.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-provider-hystrix-cluster-node-payment8004<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>druid-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.spring.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-jdbc<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-hystrix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
                    <span class="token comment">&lt;!--\u4E0D\u533A\u5206\u73AF\u5883:\u76F4\u63A5\u52A0\u8F7Dmapper\u4E0B*.xml\u914D\u7F6E\u6587\u4EF6--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>mapper/*.xml<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="_7-5-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_7-5-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 7.5.5.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8004</span> <span class="token comment">#\u8BBF\u95EE\u7AEF\u53E3</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>HYSTRIX<span class="token punctuation">-</span>PAYMENT<span class="token punctuation">-</span>SERVICE<span class="token punctuation">-</span>CLUSTER <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span> <span class="token comment">#\u70ED\u90E8\u7F72\u5F00\u5173</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span>
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource            <span class="token comment"># \u5F53\u524D\u6570\u636E\u6E90\u64CD\u4F5C\u7C7B\u578B</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver              <span class="token comment"># mysql\u9A71\u52A8\u5305</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.0.5<span class="token punctuation">:</span>3306/payment<span class="token punctuation">?</span>useUnicode=true<span class="token important">&amp;characterEncoding=utf-8&amp;useSSL=false</span>
    <span class="token key atrule">username</span><span class="token punctuation">:</span> root
    <span class="token key atrule">password</span><span class="token punctuation">:</span> Mysql123456_


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
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>PAYMENT<span class="token punctuation">-</span>SERVICE<span class="token punctuation">-</span>CLUSTER<span class="token punctuation">-</span>NODE<span class="token punctuation">-</span>PAYMENT8004 <span class="token comment">#Eureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>
    <span class="token key atrule">lease-renewal-interval-in-seconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment">#Eureka\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F30\u79D2)</span>
    <span class="token key atrule">lease-expiration-duration-in-seconds</span><span class="token punctuation">:</span> <span class="token number">90</span> <span class="token comment">#Eureka\u670D\u52A1\u7AEF\u5728\u6536\u5230\u6700\u540E\u4E00\u6B21\u5FC3\u8DF3\u540E\u7B49\u5F85\u65F6\u95F4\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F90\u79D2)\uFF0C\u8D85\u65F6\u5C06\u5254\u9664\u670D\u52A1</span>

<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapperLocations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> org.openatom.springcloud.entities    <span class="token comment"># \u6240\u6709Entity\u522B\u540D\u7C7B\u6240\u5728\u5305</span>



</code></pre></div><h3 id="_7-5-6-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_7-5-6-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 7.5.6.\u7F16\u5199\u6A21\u5757Mybatis\u914D\u7F6E\u6587\u4EF6</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span> <span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.openatom.springcloud.dao.PaymentHystrixDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--\u7B2C\u4E00\u79CD\u5199\u6CD5:parameterType\u4E0D\u5199\u5168\u8DEF\u5F84--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>create<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Payment<span class="token punctuation">&quot;</span></span> <span class="token attr-name">useGeneratedKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        insert into payment(serial)  values(#{serial});
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Payment<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serial<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serial<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>VARCHAR<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPaymentById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Long<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultMap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from payment where id=#{id};
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--\u7B2C\u4E8C\u79CD\u5199\u6CD5:parameterType\u7684\u5199\u6CD5\u4E0E\u7B2C\u4E00\u79CD\u6709\u533A\u522B--&gt;</span>
    <span class="token comment">&lt;!--
    &lt;insert id=&quot;create&quot; parameterType=&quot;org.openatom.springcloud.entities.Payment&quot; useGeneratedKeys=&quot;true&quot; keyProperty=&quot;id&quot;&gt;
        insert into payment(serial)  values(#{serial});
    &lt;/insert&gt;

    &lt;resultMap id=&quot;BaseResultMap&quot; type=&quot;org.openatom.springcloud.entities.Payment&quot;&gt;
        &lt;id column=&quot;id&quot; property=&quot;id&quot; jdbcType=&quot;BIGINT&quot;/&gt;
        &lt;id column=&quot;serial&quot; property=&quot;serial&quot; jdbcType=&quot;VARCHAR&quot;/&gt;
    &lt;/resultMap&gt;
    &lt;select id=&quot;getPaymentById&quot; parameterType=&quot;Long&quot; resultMap=&quot;BaseResultMap&quot;&gt;
        select * from payment where id=#{id};
    &lt;/select&gt;
    --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>



</code></pre></div><h3 id="_7-5-7-\u7F16\u5199\u6A21\u5757dao" tabindex="-1"><a class="header-anchor" href="#_7-5-7-\u7F16\u5199\u6A21\u5757dao" aria-hidden="true">#</a> 7.5.7.\u7F16\u5199\u6A21\u5757dao</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD5Hystrix
 */</span>
<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentHystrixDao</span> <span class="token punctuation">{</span>

    <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Payment</span> <span class="token function">getPaymentById</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-5-8-\u7F16\u5199\u6A21\u5757service" tabindex="-1"><a class="header-anchor" href="#_7-5-8-\u7F16\u5199\u6A21\u5757service" aria-hidden="true">#</a> 7.5.8.\u7F16\u5199\u6A21\u5757service</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD5Hystrix
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentHystrixService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u672A\u8BBE\u7F6E\u964D\u7EA7\u548C\u7194\u65AD\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">payment</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u672A\u8BBE\u7F6E\u964D\u7EA7\u548C\u7194\u65AD\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u672A\u8BBE\u7F6E\u964D\u7EA7\u548C\u7194\u65AD\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u964D\u7EA7\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u7194\u65AD\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-5-9-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" tabindex="-1"><a class="header-anchor" href="#_7-5-9-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" aria-hidden="true">#</a> 7.5.9.\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">HystrixCommand</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">HystrixProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">PaymentHystrixDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">PaymentHystrixService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD5Hystrix
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentHystrixServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentHystrixService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">PaymentHystrixDao</span> paymentHystrixDao<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u7761\u77203\u79D2</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 1.\u5F53\u670D\u52A1\u8C03\u7528\u8D85\u65F6\u65F6\u4F7F\u7528Hystrix\u5BF9\u670D\u52A1\u8FDB\u884C\u964D\u7EA7
     * 2.\u5F53\u670D\u52A1\u8C03\u7528\u51FA\u73B0\u5F02\u5E38\u65F6\u4F7F\u7528Hystrix\u5BF9\u670D\u52A1\u8FDB\u884C\u964D\u7EA7,\u5982\u4EE3\u7801\u4E2D\u542B\u6709 int i = 1/0;
     *      \u4E0B\u9762\u7684\u6CE8\u89E3\u8868\u793A:\u8BE5\u65B9\u6CD53000ms\u5185\u6CA1\u6709\u6267\u884C\u5B8C\u6210,\u5219\u8BA4\u4E3A\u8BE5\u65B9\u6CD5\u6267\u884C\u4E0D\u6210\u529F
     * 3.\u67E5\u770B\u5C5E\u6027name\u503C\u5230HystrixCommandProperties\u8FD9\u4E2A\u7C7B\u4E2D\u53BB\u770B
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;getPaymentByIdUseHystrixDegradationFallback&quot;</span><span class="token punctuation">,</span>
            commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;execution.isolation.thread.timeoutInMilliseconds&quot;</span><span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">&quot;3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u7761\u77205\u79D2</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span>SECONDS<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u65B9\u6CD5getPaymentByIdTimeOut()\u6267\u884C\u5931\u8D25\u65F6,\u6267\u884C\u4E0B\u9762\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixDegradationFallback</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Payment</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span><span class="token string">&quot;\u670D\u52A1\u63D0\u4F9B\u7AEF:\u670D\u52A1\u964D\u7EA7\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u4E0B\u6E38\u670D\u52A1(\u670D\u52A1\u63D0\u4F9B\u7AEF)\u53D1\u751F\u6545\u969C\u65F6\u5BF9\u670D\u52A1\u4E0B\u6E38\u670D\u52A1(\u670D\u52A1\u63D0\u4F9B\u7AEF)\u8FDB\u884C\u964D\u7EA7
     *  10\u5185\u8BF7\u6C42\u5931\u8D25,\u5931\u8D25\u7387\u4E3A60%\u65F6\u7194\u65AD\u670D\u52A1
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;getPaymentByIdUseHystrixCircuitBreakerFallback&quot;</span><span class="token punctuation">,</span>commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.enabled&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// \u662F\u5426\u5F00\u542F\u65AD\u8DEF\u5668</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.requestVolumeThreshold&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// \u8BF7\u6C42\u6B21\u6570</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.sleepWindowInMilliseconds&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;10000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// \u65F6\u95F4\u7A97\u53E3\u671F</span>
            <span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;circuitBreaker.errorThresholdPercentage&quot;</span><span class="token punctuation">,</span>value <span class="token operator">=</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token comment">// \u5931\u8D25\u7387\u8FBE\u5230\u591A\u5C11\u540E\u8DF3\u95F8</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u5F53ID\u5C0F\u4E8E0\u65F6,\u6D88\u8D39\u7AEF\u4F7F\u7528\u4E0D\u5408\u7406\u7684\u53C2\u6570\u591A\u6B21\u8C03\u7528\u6B64\u670D\u52A1,\u5219\u670D\u52A1\u7194\u65AD</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>id<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">RuntimeException</span><span class="token punctuation">(</span><span class="token string">&quot;id\u4E0D\u80FD\u5C0F\u4E8E0&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> paymentHystrixDao<span class="token punctuation">.</span><span class="token function">getPaymentById</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5F53\u65B9\u6CD5getPaymentByIdUseHystrixCircuitBreaker()\u6267\u884C\u5931\u8D25\u65F6,\u6267\u884C\u4E0B\u9762\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Payment</span> <span class="token function">getPaymentByIdUseHystrixCircuitBreakerFallback</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Payment</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span><span class="token string">&quot;\u670D\u52A1\u63D0\u4F9B\u7AEF:\u6D4B\u8BD5\u670D\u52A1\u7194\u65AD\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-5-10-\u7F16\u5199\u6A21\u5757controller" tabindex="-1"><a class="header-anchor" href="#_7-5-10-\u7F16\u5199\u6A21\u5757controller" aria-hidden="true">#</a> 7.5.10.\u7F16\u5199\u6A21\u5757controller</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">PaymentHystrixService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">ServiceInstance</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>discovery<span class="token punctuation">.</span></span><span class="token class-name">DiscoveryClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD5Hystrix
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentHystrixController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">PaymentHystrixService</span> paymentHystrixService<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${server.port}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> serverPort<span class="token punctuation">;</span>

    <span class="token comment">//\u4ECE\u914D\u7F6E\u6587\u4EF6\u4E2D\u52A8\u6001\u83B7\u53D6\u670D\u52A1\u540D\u79F0</span>
    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.application.name}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> APPLICATION_NAME<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">DiscoveryClient</span> discoveryClient<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/create&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> result <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;*****\u63D2\u5165\u7ED3\u679C\uFF1A&quot;</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>result <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u5E93\u6210\u529F,serverPort: &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u63D2\u5165\u6570\u636E\u5E93\u5931\u8D25&quot;</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6B63\u5E38\u83B7\u53D6Payment
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/ok/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>APPLICATION_NAME <span class="token operator">+</span> serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u8BB0\u5F55,\u67E5\u8BE2ID: &quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5EF6\u65F6\u83B7\u53D6Payment
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/timeout/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>APPLICATION_NAME <span class="token operator">+</span> serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u8BB0\u5F55,\u67E5\u8BE2ID: &quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u63D0\u4F9B\u7AEF\u670D\u52A1\u964D\u7EA7
     * \u8BBF\u95EE\u8DEF\u5F84:http://localhost:8003/provider/payment/degradation_in_provider/get/1
     * \u5F53\u5927\u91CF\u7EBF\u7A0B\u8BBF\u95EE\u8FD9\u4E2A\u63A5\u53E3\u7684\u65F6\u5019,\u670D\u52A1\u8C03\u7528\u8005\u8BBF\u95EE\u4E0A\u9762\u7684\u63A5\u53E3getPaymentById()\u4E5F\u4F1A\u53D7\u5230\u5F71\u54CD,\u56E0\u4E3ATomcat\u7684\u7EBF\u7A0B\u6C60\u4E2D\u7684\u5904\u7406\u7EBF\u7A0B\u90FD\u88AB\u8BBF\u95EE\u5F53\u524D
     *      \u63A5\u53E3\u7684\u591A\u4E2A\u8BF7\u6C42\u5360\u636E\u4E86,\u5BFC\u81F4\u8BBF\u95EE\u672C\u5FAE\u670D\u52A1\u4E2D\u7684\u5176\u4ED6\u63A5\u53E3\u5730\u5740\u4E5F\u4F1A\u53D8\u5F97\u5361\u987F,\u4F7F\u7528Hystrix\u7684\u5728\u6D88\u8D39\u7AEF\u5BF9\u672C\u5FAE\u670D\u52A1\u4E2D\u7684\u8FD9\u4E2A\u63A5\u53E3\u8FDB\u884C\u964D\u7EA7
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/degradation_in_provider/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>APPLICATION_NAME <span class="token operator">+</span> serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u8BB0\u5F55,\u67E5\u8BE2ID: &quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u670D\u52A1\u7194\u65AD\u6D4B\u8BD5\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/circuitbreaker/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>APPLICATION_NAME <span class="token operator">+</span> serverPort<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> paymentHystrixService<span class="token punctuation">.</span><span class="token function">getPaymentByIdUseHystrixCircuitBreaker</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>payment <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  &quot;</span><span class="token operator">+</span>serverPort<span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">444</span><span class="token punctuation">,</span><span class="token string">&quot;\u6CA1\u6709\u5BF9\u5E94\u8BB0\u5F55,\u67E5\u8BE2ID: &quot;</span><span class="token operator">+</span>id<span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-5-11-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_7-5-11-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 7.5.11.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>client<span class="token punctuation">.</span>circuitbreaker<span class="token punctuation">.</span></span><span class="token class-name">EnableCircuitBreaker</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u652F\u4ED8\u63A5\u53E3\u63D0\u4F9B\u8005
 *  \u4F7F\u7528Eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3
 */</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableCircuitBreaker</span><span class="token comment">//\u670D\u52A1\u63D0\u4F9B\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentServiceProviderHystrixClusterNode8004</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">PaymentServiceProviderHystrixClusterNode8004</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="_7-6-\u642D\u5EFA\u670D\u52A1\u6D88\u8D39\u8005-hystrix" tabindex="-1"><a class="header-anchor" href="#_7-6-\u642D\u5EFA\u670D\u52A1\u6D88\u8D39\u8005-hystrix" aria-hidden="true">#</a> 7.6.\u642D\u5EFA\u670D\u52A1\u6D88\u8D39\u8005(Hystrix)</h2><h3 id="_7-6-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_7-6-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 7.6.1.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u5177\u6709\u670D\u52A1\u7194\u65AD\u548C\u670D\u52A1\u964D\u7EA7\u529F\u80FD\u7684\u670D\u52A1\u6D88\u8D39\u8005,\u542F\u52A8\u7AEF\u53E3: 80
</code></pre><h3 id="_7-6-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_7-6-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 7.6.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               |-- config
|       |               |   \u2022-- FeignConfig.java
|       |               |-- controller
|       |               |   \u2022-- OrderConsumerHystrixController.java
|       |               |-- service
|       |               |   |-- impl
|       |               |   |   \u2022-- PaymentServiceHystrixOpenFeignImpl.java
|       |               |   \u2022-- PaymentServiceHystrixOpenFeign.java
|       |               \u2022-- OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h3 id="_7-6-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_7-6-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 7.6.3.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_7-6-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_7-6-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 7.6.4.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-consumer-hystrix-loadbalance-openfeign-configuration-order80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-hystrix<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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

</code></pre></div><h3 id="_7-6-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_7-6-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 7.6.5.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>CONSUMER<span class="token punctuation">-</span>HYSTRIX<span class="token punctuation">-</span>LOADBALANCE<span class="token punctuation">-</span>OPENFEIGN<span class="token punctuation">-</span>CONFIGURATION<span class="token punctuation">-</span>ORDER80 <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span> <span class="token comment">#Spring\u8FD0\u884C\u65E5\u5FD7\u914D\u7F6E</span>
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info

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
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>

<span class="token comment">#\u901A\u8FC7\u5BF9Ribbon\u7684\u914D\u7F6E\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E</span>
<span class="token key atrule">SPRINGCLOUD-PROVIDER-HYSTRIX-PAYMENT-SERVICE-CLUSTER</span><span class="token punctuation">:</span> <span class="token comment">#\u670D\u52A1\u63D0\u4F9B\u7AEF\u540D\u79F0</span>
  <span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
    <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.netflix.loadbalancer.RandomRule  <span class="token comment">#Ribbon\u8D1F\u8F7D\u5747\u8861\u89C4\u5219\u7C7B\u6240\u5728\u7684\u8DEF\u5F84,\u81EA\u5E26\u4E03\u79CD\u89C4\u5219,\u4E5F\u53EF\u4EE5\u662F\u81EA\u5B9A\u4F4D\u89C4\u5219\u7684\u7C7B\u6240\u5728\u7684\u8DEF\u5F84</span>
<span class="token comment">#\u5BF9OpenFeign\u8FDB\u884C\u5355\u72EC\u914D\u7F6E</span>
<span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token comment">#\u8FD9\u91CC\u586B\u5177\u4F53\u7684\u670D\u52A1\u540D\u79F0\uFF08\u4E5F\u53EF\u4EE5\u586Bdefault\uFF0C\u8868\u793A\u5BF9\u6240\u6709\u670D\u52A1\u751F\u6548\uFF09</span>
      <span class="token key atrule">SPRINGCLOUD-PROVIDER-HYSTRIX-PAYMENT-SERVICE-CLUSTER</span><span class="token punctuation">:</span>  <span class="token comment">#\u670D\u52A1\u63D0\u4F9B\u7AEF\u540D\u79F0</span>
        <span class="token comment">#connectTimeout\u548CreadTimeout\u8FD9\u4E24\u4E2A\u5F97\u4E00\u8D77\u914D\u7F6E\u624D\u4F1A\u751F\u6548</span>
        <span class="token key atrule">connectTimeout</span><span class="token punctuation">:</span> <span class="token number">10000</span>  <span class="token comment">#\u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4\uFF0C\u9002\u7528\u4E8E\u7F51\u7EDC\u72B6\u51B5\u6B63\u5E38\u7684\u60C5\u51B5\u4E0B,\u4E24\u7AEF\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4</span>
        <span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> <span class="token number">10000</span>   <span class="token comment">#\u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u540E\u4ECE\u670D\u52A1\u5668\u8BFB\u53D6\u5230\u53EF\u7528\u8D44\u6E90\u6240\u7528\u7684\u65F6\u95F4</span>
  <span class="token key atrule">hystrix</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>   <span class="token comment">#\u662F\u5426\u5168\u5C40\u542F\u52A8hystrix</span>
<span class="token key atrule">hystrix</span><span class="token punctuation">:</span>
  <span class="token key atrule">command</span><span class="token punctuation">:</span>
    <span class="token key atrule">default</span><span class="token punctuation">:</span>
      <span class="token key atrule">execution</span><span class="token punctuation">:</span>
        <span class="token key atrule">isolation</span><span class="token punctuation">:</span>
          <span class="token key atrule">thread</span><span class="token punctuation">:</span>
            <span class="token key atrule">timeoutInMilliseconds</span><span class="token punctuation">:</span> <span class="token number">10000</span> <span class="token comment"># \u8BBE\u7F6Ehystrix\u7684\u9ED8\u8BA4\u7194\u65AD\u8D85\u65F6\u65F6\u95F4\u4E3A10000ms</span>
<span class="token key atrule">logging</span><span class="token punctuation">:</span> <span class="token comment">#OpenFeign\u589E\u5F3A\u65E5\u5FD7\u914D\u7F6E</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">org.openatom.springcloud.services.PaymentServiceHystrixOpenFeign</span><span class="token punctuation">:</span> debug  <span class="token comment">#OpenFeign\u65E5\u5FD7\u4EE5\u4EC0\u4E48\u7EA7\u522B\u76D1\u63A7\u54EA\u4E2A\u63A5\u53E3</span>

</code></pre></div><h3 id="_7-6-6-\u7F16\u5199\u6A21\u5757config" tabindex="-1"><a class="header-anchor" href="#_7-6-6-\u7F16\u5199\u6A21\u5757config" aria-hidden="true">#</a> 7.6.6.\u7F16\u5199\u6A21\u5757config</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">feign<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">feign<span class="token punctuation">.</span></span><span class="token class-name">Retryer</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">FeignConfig</span> <span class="token punctuation">{</span>
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

</code></pre></div><h3 id="_7-6-7-\u7F16\u5199\u6A21\u5757service" tabindex="-1"><a class="header-anchor" href="#_7-6-7-\u7F16\u5199\u6A21\u5757service" aria-hidden="true">#</a> 7.6.7.\u7F16\u5199\u6A21\u5757service</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl<span class="token punctuation">.</span></span><span class="token class-name">PaymentServiceHystrixOpenFeignImpl</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PostMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestBody</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD58003\u8FD9\u4E2A\u8282\u70B9\u4E2D\u7684\u670D\u52A1\u7194\u65AD\u3001\u670D\u52A1\u964D\u7EA7\u529F\u80FD
 */</span>
<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;SPRINGCLOUD-PROVIDER-HYSTRIX-PAYMENT-SERVICE-CLUSTER&quot;</span><span class="token punctuation">,</span>fallback <span class="token operator">=</span> <span class="token class-name">PaymentServiceHystrixOpenFeignImpl</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">PaymentServiceHystrixOpenFeign</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/create&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestBody</span> <span class="token class-name">Payment</span> payment<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/ok/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/timeout/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u964D\u7EA7
     *  @FeignClient\u4E2D:fallback = PaymentServiceHystrixOpenFeign.class
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/degradation_in_provider/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u7194\u65AD
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/provider/payment/circuitbreaker/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOkHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-6-8-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" tabindex="-1"><a class="header-anchor" href="#_7-6-8-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" aria-hidden="true">#</a> 7.6.8.\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">PaymentServiceHystrixOpenFeign</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PaymentServiceHystrixOpenFeignImpl</span> <span class="token keyword">implements</span> <span class="token class-name">PaymentServiceHystrixOpenFeign</span> <span class="token punctuation">{</span>
    <span class="token comment">//\u4E0D\u7528\u8FD9\u4E2A\u6D4B\u8BD5\u65B9\u6CD5,\u6240\u4EE5\u4EE3\u7801\u4E0D\u505A\u4FEE\u6539</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u4E0D\u7528\u8FD9\u4E2A\u6D4B\u8BD5\u65B9\u6CD5,\u6240\u4EE5\u4EE3\u7801\u4E0D\u505A\u4FEE\u6539</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//\u4E0D\u7528\u8FD9\u4E2A\u6D4B\u8BD5\u65B9\u6CD5,\u6240\u4EE5\u4EE3\u7801\u4E0D\u505A\u4FEE\u6539</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5Hystrix\u5728Service\u5C42\u8FDB\u884C\u670D\u52A1\u964D\u7EA7
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Payment</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&quot;\u670D\u52A1\u6D88\u8D39\u7AEF:\u670D\u52A1\u63D0\u4F9B\u7AEF\u5B95\u673A\u4E86,\u5728\u670D\u52A1\u6D88\u8D39\u7AEF\u4E2DService\u5C42\u5BF9\u8FD9\u4E2A\u670D\u52A1\u8FDB\u884C\u670D\u52A1\u964D\u7EA7\u5904\u7406....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token string">&quot;\u53D1\u751F\u4E86\u9519\u8BEF&quot;</span><span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">//\u4E0D\u7528\u8FD9\u4E2A\u6D4B\u8BD5\u65B9\u6CD5,\u6240\u4EE5\u4EE3\u7801\u4E0D\u505A\u4FEE\u6539</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOkHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-6-9-\u7F16\u5199\u6A21\u5757controller" tabindex="-1"><a class="header-anchor" href="#_7-6-9-\u7F16\u5199\u6A21\u5757controller" aria-hidden="true">#</a> 7.6.9.\u7F16\u5199\u6A21\u5757controller</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">DefaultProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">HystrixCommand</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span>contrib<span class="token punctuation">.</span>javanica<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">HystrixProperty</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">PaymentServiceHystrixOpenFeign</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PathVariable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Payment</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u6D4B\u8BD58003\u8FD9\u4E2A\u8282\u70B9\u4E2D\u7684\u670D\u52A1\u7194\u65AD\u3001\u670D\u52A1\u964D\u7EA7\u529F\u80FD
 */</span>
<span class="token annotation punctuation">@RestController</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@DefaultProperties</span><span class="token punctuation">(</span>defaultFallback <span class="token operator">=</span> <span class="token string">&quot;defaultGlobalFallback&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderConsumerHystrixController</span> <span class="token punctuation">{</span>

    <span class="token comment">//\u5355\u673A\u7248</span>
<span class="token comment">//    public static final String PAYMENT_URL = &quot;http://localhost:8001&quot;;</span>
<span class="token comment">//    public static final String PAYMENT_URL = &quot;http://localhost:8002&quot;;</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">PaymentServiceHystrixOpenFeign</span> paymentServiceHystrixOpenFeign<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/consumer/payment/create&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Payment</span> payment<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentServiceHystrixOpenFeign<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6B63\u5E38\u83B7\u53D6Payment
     * \u8BBF\u95EE\u5730\u5740:
     *      http://localhost:/consumer/payment/ok/get/1
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/consumer/payment/ok/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentServiceHystrixOpenFeign<span class="token punctuation">.</span><span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5EF6\u65F6\u83B7\u53D6Payment
     * \u8BBF\u95EE\u5730\u5740:
     *      http://localhost/consumer/payment/timeout/get/1
     * \u5F53\u5927\u91CF\u7EBF\u7A0B\u8BBF\u95EE\u8FD9\u4E2A\u63A5\u53E3\u7684\u65F6\u5019,\u670D\u52A1\u8C03\u7528\u8005\u8BBF\u95EE\u4E0A\u9762\u7684\u63A5\u53E3getPaymentById()\u4E5F\u4F1A\u53D7\u5230\u5F71\u54CD,\u56E0\u4E3ATomcat\u7684\u7EBF\u7A0B\u6C60\u4E2D\u7684\u5904\u7406
     * \u7EBF\u7A0B\u90FD\u88AB\u8BBF\u95EE\u5F53\u524D\u63A5\u53E3\u7684\u591A\u4E2A\u8BF7\u6C42\u5360\u636E\u4E86
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/consumer/payment/timeout/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentServiceHystrixOpenFeign<span class="token punctuation">.</span><span class="token function">getPaymentByIdTimeout</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u63D0\u4F9B\u7AEF\u670D\u52A1\u964D\u7EA7,\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u8BBF\u95EE\u670D\u52A1\u63D0\u4F9B\u7AEF\u63A5\u53E3\u8FDB\u884C\u6D4B\u8BD5,\u8FD9\u91CC\u662F\u4E3A\u4E86\u65B9\u4FBF\u6D4B\u8BD5,\u76F4\u63A5\u4ECE\u670D\u52A1\u6D88\u8D39\u7AEF\u53D1\u8D77\u8C03\u7528
     * \u8BBF\u95EE\u5730\u5740:
     *      http://localhost/consumer/payment/degradation_in_provider/get/1
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/consumer/payment/degradation_in_provider/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixDegradationInProvider</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentServiceHystrixOpenFeign<span class="token punctuation">.</span><span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u6D88\u8D39\u7AEF\u670D\u52A1\u964D\u7EA7
     * \u8BBF\u95EE\u5730\u5740:
     *      http://localhost/consumer/payment/degradation_in_consumer/get/1
     * 1.\u5F53\u670D\u52A1\u8C03\u7528\u8D85\u65F6\u65F6\u4F7F\u7528Hystrix\u5BF9\u670D\u52A1\u8FDB\u884C\u964D\u7EA7
     * 2.\u5F53\u670D\u52A1\u8C03\u7528\u51FA\u73B0\u5F02\u5E38\u65F6\u4F7F\u7528Hystrix\u5BF9\u670D\u52A1\u8FDB\u884C\u964D\u7EA7,\u5982\u4EE3\u7801\u4E2D\u542B\u6709 int i = 1/0;
     *      \u4E0B\u9762\u7684\u6CE8\u89E3\u8868\u793A:\u8BE5\u65B9\u6CD52000ms\u5185\u6CA1\u6709\u6267\u884C\u5B8C\u6210,\u5219\u8BA4\u4E3A\u8BE5\u65B9\u6CD5\u6267\u884C\u4E0D\u6210\u529F
     * 3.\u67E5\u770B\u5C5E\u6027name\u503C\u5230HystrixCommandProperties\u8FD9\u4E2A\u7C7B\u4E2D\u53BB\u770B
     * 4.\u6CE8\u610F\uFF1A\u670D\u52A1\u6D88\u8D39\u7AEF\u53EF\u4EE5\u5728yml\u914D\u7F6E\u662F\u5426\u5168\u5C40\u542F\u7528Hystrix,\u670D\u52A1\u63D0\u4F9B\u7AEF\u4E0D\u53EF\u4EE5,\u56E0\u4E3A\u8FD9\u4E2A\u914D\u7F6E\u4F9D\u8D56\u4E8EOpenFeign\u8FD9\u4E2A\u7EC4\u4EF6
     *
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@HystrixCommand</span><span class="token punctuation">(</span>fallbackMethod <span class="token operator">=</span> <span class="token string">&quot;getPaymentByIdUseHystrixDegradationInConsumerFallback&quot;</span><span class="token punctuation">,</span>
            <span class="token comment">//\u4FEE\u6539value\u503C\u6765\u5206\u522B\u6D4B\u8BD5\u63D0\u4F9B\u7AEF\u670D\u52A1\u964D\u7EA7\u548C\u6D88\u8D39\u7AEF\u670D\u52A1\u964D\u7EA7,\u8981\u6D4B\u8BD5\u63D0\u4F9B\u7AEF\u670D\u52A1\u964D\u7EA7\u5C06value\u503C\u8BBE\u7F6E\u4E3A\u5927\u4E8E5s,\u8981\u6D4B\u8BD5\u6D88\u8D39\u7AEF\u670D\u52A1\u964D\u7EA7\u5C06value\u8BBE\u7F6E\u4E3A\u5C0F\u4E8E5s,\u7406\u8BBA\u662F\u8FD9\u6837,\u6700\u597D\u662F\u8BBE\u7F6E\u4E3A1s\u62162\u79D2</span>
            commandProperties <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token annotation punctuation">@HystrixProperty</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;execution.isolation.thread.timeoutInMilliseconds&quot;</span><span class="token punctuation">,</span>value<span class="token operator">=</span><span class="token string">&quot;2000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/consumer/payment/degradation_in_consumer/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixDegradationInConsumer</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentServiceHystrixOpenFeign<span class="token punctuation">.</span><span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u9488\u5BF9\u4E8EgetPaymentByIdUseHystrixDegradationInConsumer()\u65B9\u6CD5\u7684\u964D\u7EA7\u65B9\u6CD5:\u5F53\u65B9\u6CD5getPaymentByIdTimeOut()\u6267\u884C\u5931\u8D25\u65F6,\u6267\u884C\u4E0B\u9762\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixDegradationInConsumerFallback</span><span class="token punctuation">(</span><span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Payment</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span><span class="token string">&quot;\u670D\u52A1\u6D88\u8D39\u7AEF:\u964D\u7EA7\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token string">&quot;\u6211\u662F\u670D\u52A1\u6D88\u8D39\u7AEF&quot;</span><span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u5168\u5C40\u8303\u56F4\u5185\u9ED8\u8BA4\u7684\u964D\u7EA7\u56DE\u8C03\u65B9\u6CD5
     * \u8BBF\u95EE\u5730\u5740:
     *      http://localhost:/consumer/payment/degradation_in_consumer_default/get/1
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@HystrixCommand</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/consumer/payment/degradation_in_consumer_default/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOkTestDefaultGlobalCallback</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6A21\u62DF\u53D1\u751F\u4E86\u5F02\u5E38</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> paymentServiceHystrixOpenFeign<span class="token punctuation">.</span><span class="token function">getPaymentByIdOk</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u5168\u5C40\u8303\u56F4\u5185\u9ED8\u8BA4\u7684\u964D\u7EA7\u56DE\u8C03\u65B9\u6CD5,\u53EA\u6DFB\u52A0\u4E86@HystrixCommand,\u672A\u505A\u5173\u4E8E@HystrixCommand\u8BE6\u7EC6\u914D\u7F6E\u7684\u65B9\u6CD5\u5931\u8D25\u540E\u90FD\u4F1A\u627E\u8FD9\u4E2A\u65B9\u6CD5
     *      \u7528\u5904:\u53EF\u4EE5\u5728\u8FD9\u91CC\u8BBE\u7F6E\u53D1\u751F\u4E86\u5F02\u5E38\u540E,\u8DF3\u8F6C\u5230\u4E00\u4E2A\u7EDF\u4E00\u7684\u7528\u6237\u754C\u9762
     *  \u7279\u522B\u6CE8\u610F:\u8FD9\u4E2A\u4E3A\u5168\u5C40\u670D\u52A1\u964D\u7EA7\u515C\u5E95\u7684\u65B9\u6CD5\u4E0D\u8981\u6709\u4EFB\u4F55\u53C2\u6570,\u5426\u5219\u4F1A\u62A5\u9519
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">defaultGlobalFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Payment</span> payment <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Payment</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token string">&quot;\u670D\u52A1\u6D88\u8D39\u7AEF:\u5168\u5C40\u8303\u56F4\u5185\u9ED8\u8BA4\u7684\u964D\u7EA7\u56DE\u8C03\u65B9\u6CD5....&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token string">&quot;\u6211\u662F\u670D\u52A1\u6D88\u8D39\u7AEF&quot;</span><span class="token punctuation">,</span>payment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u5728\u670D\u52A1\u63D0\u4F9B\u7AEFService\u5C42\u5B9E\u73B0\u670D\u52A1\u964D\u7EA7
     * \u8BBF\u95EE\u5730\u5740:
     *      http://localhost:/consumer/payment/degradation_in_consumer_service/get/1
     * \u6D4B\u8BD5\u5728Service\u5C42\u5B9E\u73B0\u670D\u52A1\u964D\u7EA7,\u9996\u5148\u5173\u95ED8003\u670D\u52A1,\u6A21\u62DF8003\u670D\u52A1\u5B95\u673A,\u8BBF\u95EE\u4E0B\u9762\u7684\u5730\u5740
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/consumer/payment/degradation_in_consumer_service/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdUseHystrixDegradationInConsumerService</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u6D4B\u8BD5\u5728Service\u5C42\u8FDB\u884C\u670D\u52A1\u964D\u7EA7\u5904\u7406</span>
        <span class="token keyword">return</span> paymentServiceHystrixOpenFeign<span class="token punctuation">.</span><span class="token function">getPaymentByIdUseHystrixDegradation</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u670D\u52A1\u7194\u65AD:
     *      1.\u6A21\u62DF\u53D1\u751F\u5F02\u5E38\u7194\u65AD\u670D\u52A1:
     *          http://localhost/consumer/payment/circuitbreaker/get/-1
     *      2.\u6A21\u62DF\u4E0D\u53D1\u751F\u5F02\u5E38\u8BA9\u670D\u52A1\u81EA\u52A8\u6062\u590D:
     *          http://localhost/consumer/payment/circuitbreaker/get/1
     *  \u6D4B\u8BD5\u65B9\u5F0F:\u5148\u591A\u6B21\u8BBF\u95EE\u8DEF\u5F841\uFF0C\u5C06\u670D\u52A1\u7194\u65AD,\u518D\u591A\u6B21\u8BBF\u95EE\u8DEF\u5F842,\u521A\u5F00\u59CB\u8BBF\u95EE\u4F9D\u7136\u8FD4\u56DE\u7684\u662F\u5F02\u5E38\u4FE1\u606F,\u591A\u6B21\u8BBF\u95EE\u540E\u53EF\u4EE5\u770B\u5230\u670D\u52A1\u6062\u590D\u6B63\u5E38
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/consumer/payment/circuitbreaker/get/{id}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Payment</span><span class="token punctuation">&gt;</span></span> <span class="token function">getPaymentByIdOkHystrixCircuitBreaker</span><span class="token punctuation">(</span><span class="token annotation punctuation">@PathVariable</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> paymentServiceHystrixOpenFeign<span class="token punctuation">.</span><span class="token function">getPaymentByIdOkHystrixCircuitBreaker</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_7-6-10-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_7-6-10-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 7.6.10.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>hystrix<span class="token punctuation">.</span></span><span class="token class-name">EnableHystrix</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">EnableFeignClients</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableFeignClients</span>
<span class="token annotation punctuation">@EnableHystrix</span> <span class="token comment">//\u6D88\u8D39\u8005\u7AEF\u542F\u7528Hystrix</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">OrderServiceConsumerHystrixLoadBalanceOpenFeignConfiguration80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><h2 id="_7-7-\u6D4B\u8BD5\u670D\u52A1\u964D\u7EA7\u548C\u670D\u52A1\u7194\u65AD-hystrix" tabindex="-1"><a class="header-anchor" href="#_7-7-\u6D4B\u8BD5\u670D\u52A1\u964D\u7EA7\u548C\u670D\u52A1\u7194\u65AD-hystrix" aria-hidden="true">#</a> 7.7.\u6D4B\u8BD5\u670D\u52A1\u964D\u7EA7\u548C\u670D\u52A1\u7194\u65AD(Hystrix)</h2><pre><code>\u542F\u52A8\u76F8\u5173\u670D\u52A1
</code></pre>`,73),m=s(`<pre><code>\u6D4B\u8BD5\u672A\u505A\u964D\u7EA7\u548C\u7194\u65AD\u7684\u670D\u52A1
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/ok/get/1
</code></pre></div><pre><code>\u7B2C\u4E00\u6B21\u8BBF\u95EE\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  8001&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;serial&quot;</span><span class="token operator">:</span><span class="token string">&quot;15646546546&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><pre><code>\u7B2C\u4E8C\u6B21\u8BBF\u95EE\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  8002&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;serial&quot;</span><span class="token operator">:</span><span class="token string">&quot;15646546546&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><pre><code>\u7B2C\u4E09\u6B21\u8BBF\u95EE\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  8002&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;serial&quot;</span><span class="token operator">:</span><span class="token string">&quot;15646546546&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><pre><code>\u7B2C\u56DB\u6B21\u8BBF\u95EE\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  8001&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;serial&quot;</span><span class="token operator">:</span><span class="token string">&quot;15646546546&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><pre><code>\u53EF\u4EE5\u770B\u5230\u56DB\u6B21\u8BBF\u95EE\u8FD4\u56DE\u7684\u7ED3\u679C\u4E2D,\u56DB\u6B21\u8FD4\u56DE\u7ED3\u679C\u662F\u6CA1\u6709\u89C4\u5F8B\u7684,\u56E0\u4E3A\u91C7\u7528\u7684MyRoundRobinRule(\u81EA\u5B9A\u4E49\u7B56\u7565,\u8FD9\u4E2A\u7B56\u7565\u7684\u6548\u679C\u4E5F\u662F\u968F\u673A\u8C03\u7528),\u5B9E\u9645\u8FD4\u56DE\u7ED3\u679C\u53EF\u80FD\u4E0D\u662F\u4E0A\u9762\u7684\u60C5\u51B5,\u4F46\u662F\u4E00\u5B9A\u662F\u968F\u673A\u8FDB\u884C\u670D\u52A1\u8C03\u7528\u7684

\u6D4B\u8BD5\u5728\u670D\u52A1\u63D0\u4F9B\u7AEF\u5BF9\u670D\u52A1\u8FDB\u884C\u964D\u7EA7
\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/degradation_in_provider/get/1
</code></pre></div><pre><code>\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u67E5\u8BE2\u6210\u529F,serverPort:  8003&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;serial&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u670D\u52A1\u63D0\u4F9B\u7AEF:\u670D\u52A1\u964D\u7EA7\u6210\u529F&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><pre><code>\u5177\u4F53\u964D\u7EA7\u8FC7\u7A0B,\u8BF7\u6839\u636E\u8BBF\u95EE\u5730\u5740\u8FFD\u8E2A\u4EE3\u7801,\u67E5\u770B\u5177\u4F53\u964D\u7EA7\u662F\u5982\u4F55\u5904\u7406\u7684,\u4EE3\u7801\u4E2D\u6709\u8BE6\u7EC6\u7684\u6CE8\u91CA

\u6D4B\u8BD5\u5728\u670D\u52A1\u6D88\u8D39\u7AEF\u5BF9\u670D\u52A1\u8FDB\u884C\u964D\u7EA7
\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/degradation_in_consumer/get/1
</code></pre></div><pre><code>\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6211\u662F\u670D\u52A1\u6D88\u8D39\u7AEF&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token property">&quot;serial&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u670D\u52A1\u6D88\u8D39\u7AEF:\u964D\u7EA7\u6210\u529F&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><pre><code>\u5177\u4F53\u964D\u7EA7\u8FC7\u7A0B,\u8BF7\u6839\u636E\u8BBF\u95EE\u5730\u5740\u8FFD\u8E2A\u4EE3\u7801,\u67E5\u770B\u5177\u4F53\u964D\u7EA7\u662F\u5982\u4F55\u5904\u7406\u7684,\u4EE3\u7801\u4E2D\u6709\u8BE6\u7EC6\u7684\u6CE8\u91CA

\u6D4B\u8BD5\u5168\u5C40\u8303\u56F4\u5185\u9ED8\u8BA4\u7684\u964D\u7EA7\u56DE\u8C03\u65B9\u6CD5(\u8FD9\u79CD\u5904\u7406\u65B9\u5F0F\u53EF\u4EE5\u5E94\u7528\u4E8E\u670D\u52A1\u63D0\u4F9B\u7AEF\u548C\u670D\u52A1\u6D88\u8D39\u7AEF,\u8FD9\u91CC\u6F14\u793A\u7684\u662F\u5728\u670D\u52A1\u6D88\u8D39\u7AEF\u8FDB\u884C\u5904\u7406)
\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:/consumer/payment/degradation_in_consumer_default/get/1
</code></pre></div><pre><code>\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u6211\u662F\u670D\u52A1\u6D88\u8D39\u7AEF &quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span><span class="token property">&quot;serial&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u670D\u52A1\u6D88\u8D39\u7AEF:\u5168\u5C40\u8303\u56F4\u5185\u9ED8\u8BA4\u7684\u964D\u7EA7\u56DE\u8C03\u65B9\u6CD5....&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><pre><code>\u5177\u4F53\u964D\u7EA7\u8FC7\u7A0B,\u8BF7\u6839\u636E\u8BBF\u95EE\u5730\u5740\u8FFD\u8E2A\u4EE3\u7801,\u67E5\u770B\u5177\u4F53\u964D\u7EA7\u662F\u5982\u4F55\u5904\u7406\u7684,\u4EE3\u7801\u4E2D\u6709\u8BE6\u7EC6\u7684\u6CE8\u91CA

\u6D4B\u8BD5\u5728\u670D\u52A1\u63D0\u4F9B\u7AEFService\u5C42\u5B9E\u73B0\u670D\u52A1\u964D\u7EA7
\u672C\u6B21\u6D4B\u8BD5\u8F83\u4E3A\u7279\u6B8A,\u9996\u5148\u5173\u95ED\u670D\u52A1\u63D0\u4F9B\u80058003\u548C\u670D\u52A1\u63D0\u4F9B\u80058004,\u6A21\u62DF\u670D\u52A1\u63D0\u4F9B\u80058003\u548C\u670D\u52A1\u63D0\u4F9B\u80058004\u53D1\u751F\u4E86\u5B95\u673A
\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:/consumer/payment/degradation_in_consumer_service/get/1
</code></pre></div><pre><code>\u8FD4\u56DE\u7ED3\u679C
</code></pre><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;code&quot;</span><span class="token operator">:</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token property">&quot;message&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u53D1\u751F\u4E86\u9519\u8BEF&quot;</span><span class="token punctuation">,</span><span class="token property">&quot;data&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token null keyword">null</span><span class="token punctuation">,</span><span class="token property">&quot;serial&quot;</span><span class="token operator">:</span><span class="token string">&quot;\u670D\u52A1\u6D88\u8D39\u7AEF:\u670D\u52A1\u63D0\u4F9B\u8005\u5B95\u673A\u4E86,\u5728\u670D\u52A1\u6D88\u8D39\u7AEF\u4E2DService\u5C42\u5BF9\u8FD9\u4E2A\u670D\u52A1\u8FDB\u884C\u670D\u52A1\u964D\u7EA7\u5904\u7406....&quot;</span><span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre></div><pre><code>\u5177\u4F53\u964D\u7EA7\u8FC7\u7A0B,\u8BF7\u6839\u636E\u8BBF\u95EE\u5730\u5740\u8FFD\u8E2A\u4EE3\u7801,\u67E5\u770B\u5177\u4F53\u964D\u7EA7\u662F\u5982\u4F55\u5904\u7406\u7684,\u4EE3\u7801\u4E2D\u6709\u8BE6\u7EC6\u7684\u6CE8\u91CA

\u6D4B\u8BD5\u5728\u670D\u52A1\u63D0\u4F9B\u7AEF\u5B9E\u73B0\u670D\u52A1\u7194\u65AD
\u6A21\u62DF\u53D1\u751F\u5F02\u5E38\u7194\u65AD\u670D\u52A1,\u8DEF\u5F841
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/circuitbreaker/get/-1
</code></pre></div><pre><code>\u6A21\u62DF\u4E0D\u53D1\u751F\u5F02\u5E38\u8BA9\u670D\u52A1\u81EA\u52A8\u6062\u590D,\u8DEF\u5F842
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/consumer/payment/circuitbreaker/get/1
</code></pre></div><pre><code>\u6D4B\u8BD5\u65B9\u5F0F:\u5148\u591A\u6B21\u8BBF\u95EE\u8DEF\u5F841\uFF0C\u5C06\u670D\u52A1\u7194\u65AD,\u518D\u591A\u6B21\u8BBF\u95EE\u8DEF\u5F842,\u521A\u5F00\u59CB\u8BBF\u95EE\u4F9D\u7136\u8FD4\u56DE\u7684\u662F\u5F02\u5E38\u4FE1\u606F,\u591A\u6B21\u8BBF\u95EE\u540E\u53EF\u4EE5\u770B\u5230\u670D\u52A1\u6062\u590D\u6B63\u5E38

\u670D\u52A1\u7194\u65AD(\u4E0B\u6E38\u670D\u52A1\u53D1\u751F\u4E86\u5F02\u5E38)-&gt;\u65AD\u8DEF\u5668\u534A\u5F00(\u653E\u5F00\u4E00\u5B9A\u7684\u8BBF\u95EE\u6D41\u91CF,\u63A2\u6D4B\u4E00\u4E0B\u670D\u52A1\u662F\u5426\u6062\u590D\u6B63\u5E38)-&gt;\u65AD\u8DEF\u5668\u5168\u5F00(\u653E\u5F00\u5168\u90E8\u8BBF\u95EE\u6D41\u91CF)-&gt;\u670D\u52A1\u6062\u590D\u6B63\u5E38
</code></pre>`,31);function g(d,y){const t=a("Markmap"),p=a("Mermaid"),o=a("ScrollIntoPageView"),e=a("HideSideBar");return l(),u("div",null,[i,n(t,{localtion:"/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter7.html",height:"500rem"}),r,n(p,{id:"mermaid-64a56f76",code:"flowchart%20LR%0A%20%20%20%20%E5%87%86%E5%A4%87%E5%A5%BD%E6%95%B0%E6%8D%AE%E5%BA%93%E7%8E%AF%E5%A2%83--%3E%E5%90%AF%E5%8A%A8Eureka%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%837001%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8Eureka%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%837001%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858003%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858003%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858004%E8%8A%82%E7%82%B9%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%858004%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8%E5%BD%93%E5%89%8D%E6%A8%A1%E5%9D%97%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E8%80%85%0A"}),m,n(o),n(e)])}var w=c(k,[["render",g],["__file","springcloud-eureka-chapter-7.\u4F7F\u7528Hystrix\u5B9E\u73B0\u670D\u52A1\u964D\u7EA7\u548C\u7194\u65AD.html.vue"]]);export{w as default};
