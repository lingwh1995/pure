import{_ as c}from"./seate-server-console.4736af40.js";import{_ as l,o as u,c as k,a as n,d as s,r as a}from"./app.d4c08878.js";const i={},r=s(`<h1 id="_12-\u4F7F\u7528seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_12-\u4F7F\u7528seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236" aria-hidden="true">#</a> 12.\u4F7F\u7528Seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236</h1><h2 id="_12-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_12-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 12.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 12.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 12.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 12.3.Seata\u7B80\u4ECB
 12.4.\u642D\u5EFASeata Server
 12.5.\u51C6\u5907\u6570\u636E\u5E93\u73AF\u5883
 12.6.\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005Account\u670D\u52A1(Seata)
 12.6.\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005Storage\u670D\u52A1(Seata)
 12.8.\u642D\u5EFA\u670D\u52A1\u6D88\u8D39\u8005
 12.8.\u6D4B\u8BD5\u4F7F\u7528Seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236
 12.9.\u6CE8\u610F\u4E8B\u9879
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_12-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_12-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter12.html" target="_blank">12.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),g=s(`<h2 id="_12-3-seata\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_12-3-seata\u7B80\u4ECB" aria-hidden="true">#</a> 12.3.Seata\u7B80\u4ECB</h2><pre><code>Seata \u662F\u4E00\u6B3E\u5F00\u6E90\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u9AD8\u6027\u80FD\u548C\u7B80\u5355\u6613\u7528\u7684\u5206\u5E03\u5F0F\u4E8B\u52A1\u670D\u52A1\u3002Seata \u5C06\u4E3A\u7528\u6237\u63D0\u4F9B\u4E86 AT\u3001TCC\u3001SAGA \u548C XA \u4E8B\u52A1\u6A21\u5F0F\uFF0C\u4E3A\u7528\u6237\u6253\u9020\u4E00\u7AD9\u5F0F\u7684\u5206\u5E03\u5F0F\u89E3\u51B3\u65B9\u6848\u3002
</code></pre><p><a href="https://seata.io/zh-cn/" target="_blank">\u5B98\u65B9\u7F51\u5740</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://seata.io/zh-cn/
</code></pre></div><h2 id="_12-4-\u642D\u5EFAseata-server" tabindex="-1"><a class="header-anchor" href="#_12-4-\u642D\u5EFAseata-server" aria-hidden="true">#</a> 12.4.\u642D\u5EFASeata Server</h2><pre><code>\u5728localhost\u4E0A\u642D\u5EFASeata Server
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-12.\u642D\u5EFASpringCloud\u6280\u672F\u6808\u6240\u9700\u7EC4\u4EF6.html#_12-3-\u642D\u5EFAzipkin" target="_blank">\u642D\u5EFASeate-Server(Windows\u7248)</a></p><h2 id="_12-5-\u51C6\u5907\u6570\u636E\u5E93\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_12-5-\u51C6\u5907\u6570\u636E\u5E93\u73AF\u5883" aria-hidden="true">#</a> 12.5.\u51C6\u5907\u6570\u636E\u5E93\u73AF\u5883</h2><pre><code>\u5BFC\u5165\u6570\u636E\u5E93\u811A\u672C(application.yml\u4E2D\u6570\u636E\u5E93\u914D\u7F6E\u548Cmysql\u90E8\u7F72\u673A\u5668\u4FE1\u606F\u4FDD\u6301\u4E00\u81F4)
</code></pre><div class="language-sql ext-sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">DATABASE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>payment<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> <span class="token identifier"><span class="token punctuation">\`</span>payment<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">USE</span> <span class="token identifier"><span class="token punctuation">\`</span>payment<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>

<span class="token keyword">DROP</span> <span class="token keyword">TABLE</span> <span class="token keyword">IF</span> <span class="token keyword">EXISTS</span> <span class="token identifier"><span class="token punctuation">\`</span>payment<span class="token punctuation">\`</span></span><span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>payment<span class="token punctuation">\`</span></span> <span class="token punctuation">(</span>
  <span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">bigint</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span> <span class="token keyword">COMMENT</span> <span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>
  <span class="token identifier"><span class="token punctuation">\`</span>serial<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
  <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
<span class="token punctuation">)</span> <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">2</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>

<span class="token keyword">LOCK</span> <span class="token keyword">TABLES</span> <span class="token identifier"><span class="token punctuation">\`</span>payment<span class="token punctuation">\`</span></span> <span class="token keyword">WRITE</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> <span class="token identifier"><span class="token punctuation">\`</span>payment<span class="token punctuation">\`</span></span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string">&#39;15646546546&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">UNLOCK</span> <span class="token keyword">TABLES</span><span class="token punctuation">;</span>

</code></pre></div><h2 id="_12-6-\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005account\u670D\u52A1-seata" tabindex="-1"><a class="header-anchor" href="#_12-6-\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005account\u670D\u52A1-seata" aria-hidden="true">#</a> 12.6.\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005Account\u670D\u52A1(Seata)</h2><h3 id="_12-6-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_12-6-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 12.6.1.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u5177\u6709\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236\u529F\u80FD\u7684\u670D\u52A1\u63D0\u4F9B\u8005Account\u670D\u52A1,\u542F\u52A8\u7AEF\u53E3: 8007
</code></pre><h3 id="_12-6-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_12-6-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 12.6.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><p>@import &quot;./projects/springcloud-provider-seata-account8007/tree.md&quot;</p><h3 id="_12-6-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_12-6-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 12.6.3.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-provider-seata-account8007\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_12-6-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_12-6-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 12.6.4.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-provider-seata-account8007<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Apollo\u5BA2\u6237\u7AEF--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.ctrip.framework.apollo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>apollo-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--\u662F\u5426\u4F9D\u8D56\u4F20\u9012:true,\u4F9D\u8D56\u4E0D\u4F20\u9012,false:\u4F9D\u8D56\u4F20\u9012,\u8FD9\u662Fmaven\u7684\u7279\u6027--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Apollo\u5BA2\u6237\u7AEF--&gt;</span>
        <span class="token comment">&lt;!-- seata --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- seata --&gt;</span>
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
                    <span class="token comment">&lt;!--\u4E0D\u533A\u5206\u73AF\u5883:\u76F4\u63A5\u52A0\u8F7D*.properties\u914D\u7F6E\u6587\u4EF6--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>*.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="_12-6-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_12-6-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 12.6.5.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8007</span>
  <span class="token key atrule">tomcat</span><span class="token punctuation">:</span>
    <span class="token key atrule">mbeanregistry</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>SEATA<span class="token punctuation">-</span>ACCOUNT8007 <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span> <span class="token comment">#Spring\u8FD0\u884C\u65E5\u5FD7\u914D\u7F6E</span>
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource            <span class="token comment"># \u5F53\u524D\u6570\u636E\u6E90\u64CD\u4F5C\u7C7B\u578B</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver             <span class="token comment"># mysql\u9A71\u52A8\u5305</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.0.5<span class="token punctuation">:</span>3306/seata_account
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
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>SEATA<span class="token punctuation">-</span>ACCOUNT <span class="token comment">#Eureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>
    <span class="token key atrule">lease-renewal-interval-in-seconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment">#Eureka\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F30\u79D2)</span>
    <span class="token key atrule">lease-expiration-duration-in-seconds</span><span class="token punctuation">:</span> <span class="token number">90</span> <span class="token comment">#Eureka\u670D\u52A1\u7AEF\u5728\u6536\u5230\u6700\u540E\u4E00\u6B21\u5FC3\u8DF3\u540E\u7B49\u5F85\u65F6\u95F4\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F90\u79D2)\uFF0C\u8D85\u65F6\u5C06\u5254\u9664\u670D\u52A1</span>

<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">io</span><span class="token punctuation">:</span>
      <span class="token key atrule">seata</span><span class="token punctuation">:</span> info

<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapperLocations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> org.openatom.springcloud.entities    <span class="token comment"># \u6240\u6709Entity\u522B\u540D\u7C7B\u6240\u5728\u5305</span>

<span class="token key atrule">app</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> springcloud<span class="token punctuation">-</span>eureka<span class="token punctuation">-</span>seata
<span class="token key atrule">apollo</span><span class="token punctuation">:</span>
  <span class="token key atrule">bootstrap</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">namespaces</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>account <span class="token comment">#\u591A\u4E2Anamespaces\u4E4B\u95F4\u4F7F\u7528,\u9694\u5F00</span>

<span class="token comment">#\u6240\u6709\u670D\u52A1\u4FE1\u606F:\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8282\u70B9,\u548Cseata\u548C\u9879\u76EE\u65E0\u5173</span>
<span class="token key atrule">service</span><span class="token punctuation">:</span>
  <span class="token key atrule">seata-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
<span class="token comment">#\u6240\u6709\u670D\u52A1\u4FE1\u606F:\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8282\u70B9,\u548Cseata\u548C\u9879\u76EE\u65E0\u5173</span>
<span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">application-id</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>account
  <span class="token comment"># \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u7EC4</span>
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> my_test_tx_group
  <span class="token comment"># \u4E8B\u52A1\u7FA4\u7EC4,\u914D\u7F6E\u9879\u503C\u4E3ATC\u96C6\u7FA4\u540D,\u9700\u8981\u4E0E\u670D\u52A1\u7AEF\u5728Eureka\u4E2D\u6CE8\u518C\u65F6\u4F7F\u7528\u7684\u5E94\u7528\u540D\u79F0\u4FDD\u6301\u4E00\u81F4</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">vgroup-mapping.my_test_tx_group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> apollo
    <span class="token key atrule">apollo</span><span class="token punctuation">:</span>
      <span class="token key atrule">seata</span><span class="token punctuation">:</span> default
      <span class="token key atrule">cluster</span><span class="token punctuation">:</span> default
      <span class="token key atrule">appId</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>app.id<span class="token punctuation">}</span>
      <span class="token key atrule">apolloMeta</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token key atrule">apolloConfigService</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> eureka
    <span class="token key atrule">eureka</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>7001/eureka
      <span class="token key atrule">application</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">1</span>


</code></pre></div><h3 id="_12-6-6-\u7F16\u5199apollo\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_12-6-6-\u7F16\u5199apollo\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 12.6.6.\u7F16\u5199Apollo\u914D\u7F6E\u6587\u4EF6</h3><div class="language-sql ext-sql"><pre class="language-sql"><code>dev<span class="token punctuation">.</span>meta<span class="token operator">=</span>http:<span class="token comment">//localhost:8080</span>
pro<span class="token punctuation">.</span>meta<span class="token operator">=</span>http:<span class="token comment">//localhost:8081</span>

</code></pre></div><h3 id="_12-6-7-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_12-6-7-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 12.6.7.\u7F16\u5199\u6A21\u5757Mybatis\u914D\u7F6E\u6587\u4EF6</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span> <span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.openatom.springcloud.dao.AccountDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.openatom.springcloud.entities.Account<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DECIMAL<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>used<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>used<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DECIMAL<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>residue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>residue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DECIMAL<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>decrease<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        UPDATE t_account
        SET
          residue = residue - #{money},used = used + #{money}
        WHERE
          user_id = #{userId};
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>




</code></pre></div><h3 id="_12-6-8-\u7F16\u5199\u6A21\u5757dao" tabindex="-1"><a class="header-anchor" href="#_12-6-8-\u7F16\u5199\u6A21\u5757dao" aria-hidden="true">#</a> 12.6.8.\u7F16\u5199\u6A21\u5757dao</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AccountDao</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6263\u51CF\u8D26\u6237\u4F59\u989D
     */</span>
    <span class="token keyword">void</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span> <span class="token class-name">BigDecimal</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-6-9-\u7F16\u5199\u6A21\u5757service" tabindex="-1"><a class="header-anchor" href="#_12-6-9-\u7F16\u5199\u6A21\u5757service" aria-hidden="true">#</a> 12.6.9.\u7F16\u5199\u6A21\u5757service</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestParam</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AccountService</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6263\u51CF\u8D26\u6237\u4F59\u989D
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span> \u7528\u6237id
     * <span class="token keyword">@param</span> <span class="token parameter">money</span> \u91D1\u989D
     */</span>
    <span class="token keyword">void</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span> <span class="token class-name">BigDecimal</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-6-10-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" tabindex="-1"><a class="header-anchor" href="#_12-6-10-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" aria-hidden="true">#</a> 12.6.10.\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">AccountDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">AccountService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token class-name">TimeUnit</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u8D26\u6237\u4E1A\u52A1\u5B9E\u73B0\u7C7B
 */</span>
<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">AccountService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">AccountDao</span> accountDao<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6263\u51CF\u8D26\u6237\u4F59\u989D
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token class-name">Long</span> userId<span class="token punctuation">,</span> <span class="token class-name">BigDecimal</span> money<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-------&gt;account-service\u4E2D\u6263\u51CF\u8D26\u6237\u4F59\u989D\u5F00\u59CB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6A21\u62DF\u8D85\u65F6\u5F02\u5E38\uFF0C\u5168\u5C40\u4E8B\u52A1\u56DE\u6EDA</span>
        <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token operator">/</span><span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token comment">//\u6682\u505C\u51E0\u79D2\u949F\u7EBF\u7A0B</span>
<span class="token comment">//        try {</span>
<span class="token comment">//            TimeUnit.SECONDS.sleep(20);</span>
<span class="token comment">//        } catch (InterruptedException e) {</span>
<span class="token comment">//            e.printStackTrace();</span>
<span class="token comment">//        }</span>
        accountDao<span class="token punctuation">.</span><span class="token function">decrease</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-------&gt;account-service\u4E2D\u6263\u51CF\u8D26\u6237\u4F59\u989D\u7ED3\u675F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-6-11-\u7F16\u5199\u6A21\u5757listener" tabindex="-1"><a class="header-anchor" href="#_12-6-11-\u7F16\u5199\u6A21\u5757listener" aria-hidden="true">#</a> 12.6.11.\u7F16\u5199\u6A21\u5757listener</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>listener</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">ConfigChange</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">ConfigChangeEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ApolloConfigChangeListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>context<span class="token punctuation">.</span>environment<span class="token punctuation">.</span></span><span class="token class-name">EnvironmentChangeEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>context<span class="token punctuation">.</span>restart<span class="token punctuation">.</span></span><span class="token class-name">RestartEndpoint</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContextAware</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApolloPropertiesChangedListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RestartEndpoint</span> restartEndpoint<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u610F,\u8981\u76D1\u542C\u975Eapplication\u547D\u540D\u7A7A\u95F4\u7684 \u914D\u7F6E\u6587\u4EF6\u53D8\u5316\u65F6,\u8981@ApolloConfigChangeListener\u8BF4\u660E\u65F6\u5177\u4F53\u65F6\u662F\u54EA\u4E2A\u547D\u540D\u7A7A\u95F4
     * <span class="token keyword">@param</span> <span class="token parameter">changeEvent</span>
     */</span>
    <span class="token annotation punctuation">@ApolloConfigChangeListener</span><span class="token punctuation">(</span><span class="token string">&quot;seata-account&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">someChangeHandler</span><span class="token punctuation">(</span><span class="token class-name">ConfigChangeEvent</span> changeEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> changeEvent<span class="token punctuation">.</span><span class="token function">changedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ConfigChange</span> change <span class="token operator">=</span> changeEvent<span class="token punctuation">.</span><span class="token function">getChange</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            log.info(&quot;Found change - {}&quot;, change.toString());</span>
            <span class="token comment">//\u5982\u679Ckey\u7B26\u5408\u7279\u5B9A\u60C5\u51B5,\u5219\u91CD\u542F\u5E94\u7528\u7A0B\u5E8F</span>
            <span class="token function">isRestartApplication</span><span class="token punctuation">(</span>change<span class="token punctuation">.</span><span class="token function">getPropertyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u66F4\u65B0\u76F8\u5E94\u7684bean\u7684\u5C5E\u6027\u503C\uFF0C\u4E3B\u8981\u662F\u5B58\u5728@ConfigurationProperties\u6CE8\u89E3\u7684bean</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EnvironmentChangeEvent</span><span class="token punctuation">(</span>changeEvent<span class="token punctuation">.</span><span class="token function">changedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u91CD\u542FSpringBoot\u9879\u76EE
     */</span>
    <span class="token doc-comment comment">/**
     * \u91CD\u542FSpringBoot\u9879\u76EE
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">isRestartApplication</span><span class="token punctuation">(</span><span class="token class-name">String</span> propertyName<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> propertyNames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * \u91CD\u542F\u903B\u8F911:\u4FEE\u6539\u4E86\u6307\u5B9A\u7684key\u7684\u503C
         */</span>
        propertyNames<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;spring.application.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>propertyNames<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            restartEndpoint<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/**
         * \u91CD\u542F\u903B\u8F912:key\u5305\u542Bseata
         */</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;seata&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            restartEndpoint<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-6-12-\u7F16\u5199\u6A21\u5757config" tabindex="-1"><a class="header-anchor" href="#_12-6-12-\u7F16\u5199\u6A21\u5757config" aria-hidden="true">#</a> 12.6.12.\u7F16\u5199\u6A21\u5757config</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>seata<span class="token punctuation">.</span>rm<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span></span><span class="token class-name">DataSourceProxy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactoryBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span></span><span class="token class-name">SpringManagedTransactionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>io<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">PathMatchingResourcePatternResolver</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * \u4F7F\u7528Seata\u5BF9\u6570\u636E\u6E90\u8FDB\u884C\u4EE3\u7406
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceProxyConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${mybatis.mapperLocations}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mapperLocations<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSourceProxy</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceProxy</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SqlSessionFactory</span> <span class="token function">sqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSourceProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">SqlSessionFactoryBean</span> sqlSessionFactoryBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSourceProxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setMapperLocations</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PathMatchingResourcePatternResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span>mapperLocations<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setTransactionFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SpringManagedTransactionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-6-13-\u7F16\u5199\u6A21\u5757controller" tabindex="-1"><a class="header-anchor" href="#_12-6-13-\u7F16\u5199\u6A21\u5757controller" aria-hidden="true">#</a> 12.6.13.\u7F16\u5199\u6A21\u5757controller</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">AccountService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestParam</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token class-name">AccountService</span> accountService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6263\u51CF\u8D26\u6237\u4F59\u989D
     */</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/account/decrease&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span> <span class="token class-name">BigDecimal</span> money<span class="token punctuation">)</span><span class="token punctuation">{</span>
        accountService<span class="token punctuation">.</span><span class="token function">decrease</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span>money<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u6263\u51CF\u8D26\u6237\u4F59\u989D\u6210\u529F\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-6-14-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_12-6-14-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 12.6.14.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableApolloConfig</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span><span class="token class-name">DataSourceAutoConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@EnableApolloConfig</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//\u53D6\u6D88\u6570\u636E\u6E90\u7684\u81EA\u52A8\u521B\u5EFA</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AccountServiceProviderSeatal8007</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * \u6CE8\u610F:
         *  1.\u4E0B\u9762\u7684\u542F\u52A8\u53C2\u6570\u8981\u4EE5seata-server\u4E2D\u7684registry.conf\u4E2Dconfig.apollo<span class="token punctuation">{</span><span class="token punctuation">}</span>\u7684\u914D\u7F6E\u4E3A\u51C6
         *  2.\u8FD9\u91CC\u7684\u914D\u7F6E\u5176\u5B9E\u548Cyml\u4E2D\u4EE5\u53CAseata-server\u4E2D\u7684registry.conf\u4E2Dconfig.apollo<span class="token punctuation">{</span><span class="token punctuation">}</span>\u7684\u914D\u7F6E\u662F\u4E00\u81F4\u7684
         */</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;seata&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;apollo.cluster&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;seata.config.apollo.namespace&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;seata-server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;apolloConfigService&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;dafult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">AccountServiceProviderSeatal8007</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_12-6-\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005storage\u670D\u52A1-seata" tabindex="-1"><a class="header-anchor" href="#_12-6-\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005storage\u670D\u52A1-seata" aria-hidden="true">#</a> 12.6.\u642D\u5EFA\u670D\u52A1\u63D0\u4F9B\u8005Storage\u670D\u52A1(Seata)</h2><h3 id="_12-7-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_12-7-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 12.7.1.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u5177\u6709\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236\u529F\u80FD\u7684\u670D\u52A1\u63D0\u4F9B\u8005Storage\u670D\u52A1,\u542F\u52A8\u7AEF\u53E3: 8008
</code></pre><h3 id="_12-7-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_12-7-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 12.7.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><p>@import &quot;./projects/springcloud-provider-seata-storage8008/tree.md&quot;</p><h3 id="_12-7-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_12-7-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 12.7.3.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-provider-seata-storage8008\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_12-7-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_12-7-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 12.7.4.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-provider-seata-storage8008<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Apollo\u5BA2\u6237\u7AEF--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.ctrip.framework.apollo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>apollo-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--\u662F\u5426\u4F9D\u8D56\u4F20\u9012:true,\u4F9D\u8D56\u4E0D\u4F20\u9012,false:\u4F9D\u8D56\u4F20\u9012,\u8FD9\u662Fmaven\u7684\u7279\u6027--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- seata --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
                    <span class="token comment">&lt;!--\u4E0D\u533A\u5206\u73AF\u5883:\u76F4\u63A5\u52A0\u8F7D*.properties\u914D\u7F6E\u6587\u4EF6--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>*.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="_12-7-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_12-7-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 12.7.5.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8008</span>
  <span class="token key atrule">tomcat</span><span class="token punctuation">:</span>
    <span class="token key atrule">mbeanregistry</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>SEATA<span class="token punctuation">-</span>STORAGE8008 <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span> <span class="token comment">#Spring\u8FD0\u884C\u65E5\u5FD7\u914D\u7F6E</span>
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource            <span class="token comment"># \u5F53\u524D\u6570\u636E\u6E90\u64CD\u4F5C\u7C7B\u578B</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver             <span class="token comment"># mysql\u9A71\u52A8\u5305</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.0.5<span class="token punctuation">:</span>3306/seata_storage
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
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>PROVIDER<span class="token punctuation">-</span>SEATA<span class="token punctuation">-</span>STORAGE <span class="token comment">#Eureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>
    <span class="token key atrule">lease-renewal-interval-in-seconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment">#Eureka\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F30\u79D2)</span>
    <span class="token key atrule">lease-expiration-duration-in-seconds</span><span class="token punctuation">:</span> <span class="token number">90</span> <span class="token comment">#Eureka\u670D\u52A1\u7AEF\u5728\u6536\u5230\u6700\u540E\u4E00\u6B21\u5FC3\u8DF3\u540E\u7B49\u5F85\u65F6\u95F4\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F90\u79D2)\uFF0C\u8D85\u65F6\u5C06\u5254\u9664\u670D\u52A1</span>

<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">io</span><span class="token punctuation">:</span>
      <span class="token key atrule">seata</span><span class="token punctuation">:</span> info
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapperLocations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> org.openatom.springcloud.entities    <span class="token comment"># \u6240\u6709Entity\u522B\u540D\u7C7B\u6240\u5728\u5305</span>

<span class="token key atrule">app</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> springcloud<span class="token punctuation">-</span>eureka<span class="token punctuation">-</span>seata
<span class="token key atrule">apollo</span><span class="token punctuation">:</span>
  <span class="token key atrule">bootstrap</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">namespaces</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>storage <span class="token comment">#\u591A\u4E2Anamespaces\u4E4B\u95F4\u4F7F\u7528,\u9694\u5F00</span>

<span class="token comment">#\u6240\u6709\u670D\u52A1\u4FE1\u606F:\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8282\u70B9,\u548Cseata\u548C\u9879\u76EE\u65E0\u5173</span>
<span class="token key atrule">service</span><span class="token punctuation">:</span>
  <span class="token key atrule">seata-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
<span class="token comment">#\u6240\u6709\u670D\u52A1\u4FE1\u606F:\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8282\u70B9,\u548Cseata\u548C\u9879\u76EE\u65E0\u5173</span>
<span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">application-id</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>storge
  <span class="token comment"># \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u7EC4</span>
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> my_test_tx_group
  <span class="token comment"># \u4E8B\u52A1\u7FA4\u7EC4,\u914D\u7F6E\u9879\u503C\u4E3ATC\u96C6\u7FA4\u540D,\u9700\u8981\u4E0E\u670D\u52A1\u7AEF\u5728Eureka\u4E2D\u6CE8\u518C\u65F6\u4F7F\u7528\u7684\u5E94\u7528\u540D\u79F0\u4FDD\u6301\u4E00\u81F4</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">vgroup-mapping.my_test_tx_group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> apollo
    <span class="token key atrule">apollo</span><span class="token punctuation">:</span>
      <span class="token key atrule">seata</span><span class="token punctuation">:</span> default
      <span class="token key atrule">cluster</span><span class="token punctuation">:</span> default
      <span class="token key atrule">appId</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>app.id<span class="token punctuation">}</span>
      <span class="token key atrule">apolloMeta</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token key atrule">apolloConfigService</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> eureka
    <span class="token key atrule">eureka</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>7001/eureka
      <span class="token key atrule">application</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">1</span>

</code></pre></div><h3 id="_12-7-6-\u7F16\u5199apollo\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_12-7-6-\u7F16\u5199apollo\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 12.7.6.\u7F16\u5199Apollo\u914D\u7F6E\u6587\u4EF6</h3><div class="language-sql ext-sql"><pre class="language-sql"><code>dev<span class="token punctuation">.</span>meta<span class="token operator">=</span>http:<span class="token comment">//localhost:8080</span>
pro<span class="token punctuation">.</span>meta<span class="token operator">=</span>http:<span class="token comment">//localhost:8081</span>

</code></pre></div><h3 id="_12-7-7-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_12-7-7-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 12.7.7.\u7F16\u5199\u6A21\u5757Mybatis\u914D\u7F6E\u6587\u4EF6</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span> <span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.openatom.springcloud.dao.StorageDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.openatom.springcloud.entities.Storage<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>product_id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>productId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>total<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INTEGER<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>used<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>used<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INTEGER<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>residue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>residue<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INTEGER<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>decrease<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        UPDATE
            t_storage
        SET
            used = used + #{count},residue = residue - #{count}
        WHERE
            product_id = #{productId}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>




</code></pre></div><h3 id="_12-7-8-\u7F16\u5199\u6A21\u5757dao" tabindex="-1"><a class="header-anchor" href="#_12-7-8-\u7F16\u5199\u6A21\u5757dao" aria-hidden="true">#</a> 12.7.8.\u7F16\u5199\u6A21\u5757dao</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StorageDao</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u6263\u51CF\u5E93\u5B58
     * <span class="token keyword">@param</span> <span class="token parameter">productId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">count</span>
     */</span>
    <span class="token keyword">void</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;productId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> productId<span class="token punctuation">,</span> <span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-7-9-\u7F16\u5199\u6A21\u5757service" tabindex="-1"><a class="header-anchor" href="#_12-7-9-\u7F16\u5199\u6A21\u5757service" aria-hidden="true">#</a> 12.7.9.\u7F16\u5199\u6A21\u5757service</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StorageService</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u6263\u51CF\u5E93\u5B58
     */</span>
    <span class="token keyword">void</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token class-name">Long</span> productId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-7-10-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" tabindex="-1"><a class="header-anchor" href="#_12-7-10-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" aria-hidden="true">#</a> 12.7.10.\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">StorageDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StorageService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">LoggerFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StorageServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">StorageService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">StorageDao</span> storageDao<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6263\u51CF\u5E93\u5B58
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token class-name">Long</span> productId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-------&gt;storage-service\u4E2D\u6263\u51CF\u5E93\u5B58\u5F00\u59CB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        storageDao<span class="token punctuation">.</span><span class="token function">decrease</span><span class="token punctuation">(</span>productId<span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-------&gt;storage-service\u4E2D\u6263\u51CF\u5E93\u5B58\u7ED3\u675F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-7-11-\u7F16\u5199\u6A21\u5757listener" tabindex="-1"><a class="header-anchor" href="#_12-7-11-\u7F16\u5199\u6A21\u5757listener" aria-hidden="true">#</a> 12.7.11.\u7F16\u5199\u6A21\u5757listener</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>listener</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">ConfigChange</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">ConfigChangeEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ApolloConfigChangeListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>context<span class="token punctuation">.</span>environment<span class="token punctuation">.</span></span><span class="token class-name">EnvironmentChangeEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>context<span class="token punctuation">.</span>restart<span class="token punctuation">.</span></span><span class="token class-name">RestartEndpoint</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContextAware</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApolloPropertiesChangedListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RestartEndpoint</span> restartEndpoint<span class="token punctuation">;</span>


    <span class="token doc-comment comment">/**
     * \u6CE8\u610F,\u8981\u76D1\u542C\u975Eapplication\u547D\u540D\u7A7A\u95F4\u7684 \u914D\u7F6E\u6587\u4EF6\u53D8\u5316\u65F6,\u8981@ApolloConfigChangeListener\u8BF4\u660E\u65F6\u5177\u4F53\u65F6\u662F\u54EA\u4E2A\u547D\u540D\u7A7A\u95F4
     * <span class="token keyword">@param</span> <span class="token parameter">changeEvent</span>
     */</span>
    <span class="token annotation punctuation">@ApolloConfigChangeListener</span><span class="token punctuation">(</span><span class="token string">&quot;seata-storage&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">someChangeHandler</span><span class="token punctuation">(</span><span class="token class-name">ConfigChangeEvent</span> changeEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> changeEvent<span class="token punctuation">.</span><span class="token function">changedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ConfigChange</span> change <span class="token operator">=</span> changeEvent<span class="token punctuation">.</span><span class="token function">getChange</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            log.info(&quot;Found change - {}&quot;, change.toString());</span>
            <span class="token comment">//\u5982\u679Ckey\u7B26\u5408\u7279\u5B9A\u60C5\u51B5,\u5219\u91CD\u542F\u5E94\u7528\u7A0B\u5E8F</span>
            <span class="token function">isRestartApplication</span><span class="token punctuation">(</span>change<span class="token punctuation">.</span><span class="token function">getPropertyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u66F4\u65B0\u76F8\u5E94\u7684bean\u7684\u5C5E\u6027\u503C\uFF0C\u4E3B\u8981\u662F\u5B58\u5728@ConfigurationProperties\u6CE8\u89E3\u7684bean</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EnvironmentChangeEvent</span><span class="token punctuation">(</span>changeEvent<span class="token punctuation">.</span><span class="token function">changedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u91CD\u542FSpringBoot\u9879\u76EE
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">isRestartApplication</span><span class="token punctuation">(</span><span class="token class-name">String</span> propertyName<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> propertyNames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * \u91CD\u542F\u903B\u8F911:\u4FEE\u6539\u4E86\u6307\u5B9A\u7684key\u7684\u503C
         */</span>
        propertyNames<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;spring.application.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>propertyNames<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            restartEndpoint<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/**
         * \u91CD\u542F\u903B\u8F912:key\u5305\u542Bseata
         */</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;seata&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            restartEndpoint<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-7-12-\u7F16\u5199\u6A21\u5757config" tabindex="-1"><a class="header-anchor" href="#_12-7-12-\u7F16\u5199\u6A21\u5757config" aria-hidden="true">#</a> 12.7.12.\u7F16\u5199\u6A21\u5757config</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>seata<span class="token punctuation">.</span>rm<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span></span><span class="token class-name">DataSourceProxy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactoryBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span></span><span class="token class-name">SpringManagedTransactionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>io<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">PathMatchingResourcePatternResolver</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * \u4F7F\u7528Seata\u5BF9\u6570\u636E\u6E90\u8FDB\u884C\u4EE3\u7406
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceProxyConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${mybatis.mapperLocations}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mapperLocations<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSourceProxy</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceProxy</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SqlSessionFactory</span> <span class="token function">sqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSourceProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">SqlSessionFactoryBean</span> sqlSessionFactoryBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSourceProxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setMapperLocations</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PathMatchingResourcePatternResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span>mapperLocations<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setTransactionFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SpringManagedTransactionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-7-13-\u7F16\u5199\u6A21\u5757controller" tabindex="-1"><a class="header-anchor" href="#_12-7-13-\u7F16\u5199\u6A21\u5757controller" aria-hidden="true">#</a> 12.7.13.\u7F16\u5199\u6A21\u5757controller</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StorageService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StorageController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">StorageService</span> storageService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6263\u51CF\u5E93\u5B58
     */</span>
    <span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/storage/decrease&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token class-name">Long</span> productId<span class="token punctuation">,</span> <span class="token class-name">Integer</span> count<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        storageService<span class="token punctuation">.</span><span class="token function">decrease</span><span class="token punctuation">(</span>productId<span class="token punctuation">,</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u6263\u51CF\u5E93\u5B58\u6210\u529F\uFF01&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-7-14-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_12-7-14-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 12.7.14.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableApolloConfig</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span><span class="token class-name">DataSourceAutoConfiguration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaClient</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@EnableApolloConfig</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//\u53D6\u6D88\u6570\u636E\u6E90\u7684\u81EA\u52A8\u521B\u5EFA</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">StorageServiceProviderSeatal8008</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * \u6CE8\u610F:
         *  1.\u4E0B\u9762\u7684\u542F\u52A8\u53C2\u6570\u8981\u4EE5seata-server\u4E2D\u7684registry.conf\u4E2Dconfig.apollo<span class="token punctuation">{</span><span class="token punctuation">}</span>\u7684\u914D\u7F6E\u4E3A\u51C6
         *  2.\u8FD9\u91CC\u7684\u914D\u7F6E\u5176\u5B9E\u548Cyml\u4E2D\u4EE5\u53CAseata-server\u4E2D\u7684registry.conf\u4E2Dconfig.apollo<span class="token punctuation">{</span><span class="token punctuation">}</span>\u7684\u914D\u7F6E\u662F\u4E00\u81F4\u7684
          */</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;seata&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;apollo.cluster&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;seata.config.apollo.namespace&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;seata-server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;apolloConfigService&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;dafult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">StorageServiceProviderSeatal8008</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_12-8-\u642D\u5EFA\u670D\u52A1\u6D88\u8D39\u8005" tabindex="-1"><a class="header-anchor" href="#_12-8-\u642D\u5EFA\u670D\u52A1\u6D88\u8D39\u8005" aria-hidden="true">#</a> 12.8.\u642D\u5EFA\u670D\u52A1\u6D88\u8D39\u8005</h2><h3 id="_12-8-1-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_12-8-1-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 12.8.1.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u5177\u6709\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236\u529F\u80FD\u7684\u670D\u52A1\u6D88\u8D39\u8005Order\u670D\u52A1,\u542F\u52A8\u7AEF\u53E3: 80
</code></pre><h3 id="_12-8-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_12-8-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 12.8.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><p>@import &quot;./projects/springcloud-consumer-seata-loadbalance-openfeign-configuration-order80/tree.md&quot;</p><h3 id="_12-8-3-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_12-8-3-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 12.8.3.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-consumer-seata-loadbalance-openfeign-configuration-order80\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_12-8-4-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_12-8-4-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 12.8.4.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-consumer-seata-loadbalance-openfeign-configuration-order80<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>mysql<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mysql-connector-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--Apollo\u5BA2\u6237\u7AEF--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.ctrip.framework.apollo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>apollo-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token comment">&lt;!--\u662F\u5426\u4F9D\u8D56\u4F20\u9012:true,\u4F9D\u8D56\u4E0D\u4F20\u9012,false:\u4F9D\u8D56\u4F20\u9012,\u8FD9\u662Fmaven\u7684\u7279\u6027--&gt;</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>optional</span><span class="token punctuation">&gt;</span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>optional</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!-- seata --&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.seata<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>seata-spring-boot-starter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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
                    <span class="token comment">&lt;!--\u4E0D\u533A\u5206\u73AF\u5883:\u76F4\u63A5\u52A0\u8F7D*.properties\u914D\u7F6E\u6587\u4EF6--&gt;</span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span><span class="token punctuation">&gt;</span></span>*.properties<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>include</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resource</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resources</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>

</code></pre></div><h3 id="_12-8-5-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_12-8-5-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 12.8.5.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>
  <span class="token key atrule">tomcat</span><span class="token punctuation">:</span>
    <span class="token key atrule">mbeanregistry</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>CONSUMER<span class="token punctuation">-</span>SEATA<span class="token punctuation">-</span>LOADBALANCE<span class="token punctuation">-</span>OPENFEIGN<span class="token punctuation">-</span>CONFIGURATION<span class="token punctuation">-</span>ORDER80 <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">logging</span><span class="token punctuation">:</span> <span class="token comment">#Spring\u8FD0\u884C\u65E5\u5FD7\u914D\u7F6E</span>
    <span class="token key atrule">level</span><span class="token punctuation">:</span> info
  <span class="token key atrule">datasource</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> com.alibaba.druid.pool.DruidDataSource            <span class="token comment"># \u5F53\u524D\u6570\u636E\u6E90\u64CD\u4F5C\u7C7B\u578B</span>
    <span class="token key atrule">driver-class-name</span><span class="token punctuation">:</span> com.mysql.cj.jdbc.Driver             <span class="token comment"># mysql\u9A71\u52A8\u5305</span>
    <span class="token key atrule">url</span><span class="token punctuation">:</span> jdbc<span class="token punctuation">:</span>mysql<span class="token punctuation">:</span>//192.168.0.5<span class="token punctuation">:</span>3306/seata_order
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
    <span class="token key atrule">instance-id</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>CONSUMER<span class="token punctuation">-</span>SEATA<span class="token punctuation">-</span>LOADBALANCE<span class="token punctuation">-</span>OPENFEIGN<span class="token punctuation">-</span>CONFIGURATION<span class="token punctuation">-</span>ORDER <span class="token comment">#Eureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9</span>
    <span class="token key atrule">prefer-ip-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>  <span class="token comment">#\u8BBF\u95EE\u8DEF\u5F84\u53EF\u4EE5\u663E\u793AIP\u5730\u5740\uFF0C\u70B9\u51FBEureka\u4EEA\u8868\u76D8\u4E2DInstances currently registered with Eureka.Status\u663E\u793A\u7684\u5185\u5BB9\u5730\u5740\u680F\u662F\u5426\u663E\u793AIP\u5730\u5740</span>
    <span class="token key atrule">lease-renewal-interval-in-seconds</span><span class="token punctuation">:</span> <span class="token number">30</span> <span class="token comment">#Eureka\u5BA2\u6237\u7AEF\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F30\u79D2)</span>
    <span class="token key atrule">lease-expiration-duration-in-seconds</span><span class="token punctuation">:</span> <span class="token number">90</span> <span class="token comment">#Eureka\u670D\u52A1\u7AEF\u5728\u6536\u5230\u6700\u540E\u4E00\u6B21\u5FC3\u8DF3\u540E\u7B49\u5F85\u65F6\u95F4\u4E0A\u9650\uFF0C\u5355\u4F4D\u4E3A\u79D2(\u9ED8\u8BA4\u662F90\u79D2)\uFF0C\u8D85\u65F6\u5C06\u5254\u9664\u670D\u52A1</span>

<span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&#39;*&#39;</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment">#\u5BF9OpenFeign\u8FDB\u884C\u5355\u72EC\u914D\u7F6E</span>
<span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">config</span><span class="token punctuation">:</span>
      <span class="token key atrule">default</span><span class="token punctuation">:</span>
        <span class="token comment">#connectTimeout\u548CreadTimeout\u8FD9\u4E24\u4E2A\u5F97\u4E00\u8D77\u914D\u7F6E\u624D\u4F1A\u751F\u6548</span>
        <span class="token key atrule">connectTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>  <span class="token comment">#\u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4\uFF0C\u9002\u7528\u4E8E\u7F51\u7EDC\u72B6\u51B5\u6B63\u5E38\u7684\u60C5\u51B5\u4E0B,\u4E24\u7AEF\u8FDE\u63A5\u6240\u7528\u7684\u65F6\u95F4</span>
        <span class="token key atrule">readTimeout</span><span class="token punctuation">:</span> <span class="token number">5000</span>   <span class="token comment">#\u6307\u7684\u662F\u5EFA\u7ACB\u8FDE\u63A5\u540E\u4ECE\u670D\u52A1\u5668\u8BFB\u53D6\u5230\u53EF\u7528\u8D44\u6E90\u6240\u7528\u7684\u65F6\u95F4</span>

<span class="token key atrule">ribbon</span><span class="token punctuation">:</span>
  <span class="token key atrule">NFLoadBalancerRuleClassName</span><span class="token punctuation">:</span> com.netflix.loadbalancer.RandomRule  <span class="token comment">#Ribbon\u8D1F\u8F7D\u5747\u8861\u89C4\u5219\u7C7B\u6240\u5728\u7684\u8DEF\u5F84,\u81EA\u5E26\u4E03\u79CD\u89C4\u5219,\u4E5F\u53EF\u4EE5\u662F\u81EA\u5B9A\u4F4D\u89C4\u5219\u7684\u7C7B\u6240\u5728\u7684\u8DEF\u5F84</span>

<span class="token key atrule">logging</span><span class="token punctuation">:</span> <span class="token comment">#OpenFeign\u589E\u5F3A\u65E5\u5FD7\u914D\u7F6E</span>
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">org.openatom.springcloud.services.AccountService</span><span class="token punctuation">:</span> debug  <span class="token comment">#OpenFeign\u65E5\u5FD7\u4EE5\u4EC0\u4E48\u7EA7\u522B\u76D1\u63A7\u54EA\u4E2A\u63A5\u53E3</span>
    <span class="token key atrule">org.openatom.springcloud.services.StorageService</span><span class="token punctuation">:</span> debug  <span class="token comment">#OpenFeign\u65E5\u5FD7\u4EE5\u4EC0\u4E48\u7EA7\u522B\u76D1\u63A7\u54EA\u4E2A\u63A5\u53E3</span>
    <span class="token key atrule">io</span><span class="token punctuation">:</span>
      <span class="token key atrule">seata</span><span class="token punctuation">:</span> info
<span class="token key atrule">mybatis</span><span class="token punctuation">:</span>
  <span class="token key atrule">mapperLocations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> org.openatom.springcloud.entities    <span class="token comment"># \u6240\u6709Entity\u522B\u540D\u7C7B\u6240\u5728\u5305</span>

<span class="token key atrule">app</span><span class="token punctuation">:</span>
  <span class="token key atrule">id</span><span class="token punctuation">:</span> springcloud<span class="token punctuation">-</span>eureka<span class="token punctuation">-</span>seata
<span class="token key atrule">apollo</span><span class="token punctuation">:</span>
  <span class="token key atrule">bootstrap</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
    <span class="token key atrule">namespaces</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>order <span class="token comment">#\u591A\u4E2Anamespaces\u4E4B\u95F4\u4F7F\u7528,\u9694\u5F00</span>

<span class="token comment">#\u6240\u6709\u670D\u52A1\u4FE1\u606F:\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8282\u70B9,\u548Cseata\u548C\u9879\u76EE\u65E0\u5173</span>
<span class="token key atrule">service</span><span class="token punctuation">:</span>
  <span class="token key atrule">seata-server</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server
<span class="token comment">#\u6240\u6709\u670D\u52A1\u4FE1\u606F:\u8FD9\u662F\u81EA\u5B9A\u4E49\u7684\u8282\u70B9,\u548Cseata\u548C\u9879\u76EE\u65E0\u5173</span>
<span class="token key atrule">seata</span><span class="token punctuation">:</span>
  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token key atrule">application-id</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>order
  <span class="token comment"># \u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u5728\u540C\u4E00\u4E2A\u4E8B\u52A1\u7EC4</span>
  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> my_test_tx_group
  <span class="token comment"># \u4E8B\u52A1\u7FA4\u7EC4,\u914D\u7F6E\u9879\u503C\u4E3ATC\u96C6\u7FA4\u540D,\u9700\u8981\u4E0E\u670D\u52A1\u7AEF\u5728Eureka\u4E2D\u6CE8\u518C\u65F6\u4F7F\u7528\u7684\u5E94\u7528\u540D\u79F0\u4FDD\u6301\u4E00\u81F4</span>
  <span class="token key atrule">service</span><span class="token punctuation">:</span>
    <span class="token key atrule">vgroup-mapping.my_test_tx_group</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
  <span class="token key atrule">config</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> apollo
    <span class="token key atrule">apollo</span><span class="token punctuation">:</span>
      <span class="token key atrule">seata</span><span class="token punctuation">:</span> default
      <span class="token key atrule">cluster</span><span class="token punctuation">:</span> default
      <span class="token key atrule">appId</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>app.id<span class="token punctuation">}</span>
      <span class="token key atrule">apolloMeta</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token key atrule">apolloConfigService</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
  <span class="token key atrule">registry</span><span class="token punctuation">:</span>
    <span class="token key atrule">type</span><span class="token punctuation">:</span> eureka
    <span class="token key atrule">eureka</span><span class="token punctuation">:</span>
      <span class="token key atrule">serviceUrl</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>7001/eureka
      <span class="token key atrule">application</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>service.seata<span class="token punctuation">-</span>server.name<span class="token punctuation">}</span>
      <span class="token key atrule">weight</span><span class="token punctuation">:</span> <span class="token number">1</span>

</code></pre></div><h3 id="_12-8-6-\u7F16\u5199apollo\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_12-8-6-\u7F16\u5199apollo\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 12.8.6.\u7F16\u5199Apollo\u914D\u7F6E\u6587\u4EF6</h3><div class="language-sql ext-sql"><pre class="language-sql"><code>dev<span class="token punctuation">.</span>meta<span class="token operator">=</span>http:<span class="token comment">//localhost:8080</span>
pro<span class="token punctuation">.</span>meta<span class="token operator">=</span>http:<span class="token comment">//localhost:8081</span>

</code></pre></div><h3 id="_12-8-7-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#_12-8-7-\u7F16\u5199\u6A21\u5757mybatis\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> 12.8.7.\u7F16\u5199\u6A21\u5757Mybatis\u914D\u7F6E\u6587\u4EF6</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span> <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span> <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span> <span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.openatom.springcloud.dao.OrderDao<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>resultMap</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BaseResultMap<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.openatom.springcloud.entities.Order<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>user_id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>product_id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>productId<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>BIGINT<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>count<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INTEGER<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>money<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>money<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>DECIMAL<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>result</span> <span class="token attr-name">column</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>status<span class="token punctuation">&quot;</span></span> <span class="token attr-name">jdbcType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INTEGER<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>resultMap</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>create<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        insert into t_order (id,user_id,product_id,count,money,status)
        values (null,#{userId},#{productId},#{count},#{money},0);
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>


    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>update<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        update t_order set status = 1
        where user_id=#{userId} and status = #{status};
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>



</code></pre></div><h3 id="_12-8-8-\u7F16\u5199\u6A21\u5757dao" tabindex="-1"><a class="header-anchor" href="#_12-8-8-\u7F16\u5199\u6A21\u5757dao" aria-hidden="true">#</a> 12.8.8.\u7F16\u5199\u6A21\u5757dao</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Mapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>annotations<span class="token punctuation">.</span></span><span class="token class-name">Param</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Order</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Mapper</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderDao</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u65B0\u5EFA\u8BA2\u5355
     * <span class="token keyword">@param</span> <span class="token parameter">order</span>
     */</span>
    <span class="token keyword">void</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Order</span> order<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u4FEE\u6539\u8BA2\u5355\u72B6\u6001\uFF0C\u4ECE0\u6539\u4E3A1
     * <span class="token keyword">@param</span> <span class="token parameter">userId</span>
     * <span class="token keyword">@param</span> <span class="token parameter">status</span>
     */</span>
    <span class="token keyword">void</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span><span class="token annotation punctuation">@Param</span><span class="token punctuation">(</span><span class="token string">&quot;status&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> status<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-8-9-\u7F16\u5199\u6A21\u5757service" tabindex="-1"><a class="header-anchor" href="#_12-8-9-\u7F16\u5199\u6A21\u5757service" aria-hidden="true">#</a> 12.8.9.\u7F16\u5199\u6A21\u5757service</h3><pre><code>AccountService.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PostMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestParam</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>math<span class="token punctuation">.</span></span><span class="token class-name">BigDecimal</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;SPRINGCLOUD-PROVIDER-SEATA-ACCOUNT8007&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">AccountService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/account/decrease&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;userId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> userId<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;money&quot;</span><span class="token punctuation">)</span> <span class="token class-name">BigDecimal</span> money<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>OrderService.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>


<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Order</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>

    <span class="token keyword">void</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Order</span> order<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>StorageService.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>openfeign<span class="token punctuation">.</span></span><span class="token class-name">FeignClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">PostMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RequestParam</span></span><span class="token punctuation">;</span>


<span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;SPRINGCLOUD-PROVIDER-SEATA-STORAGE8008&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">StorageService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@PostMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/storage/decrease&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">CommonResult</span> <span class="token function">decrease</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;productId&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Long</span> productId<span class="token punctuation">,</span> <span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;count&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Integer</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-8-10-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" tabindex="-1"><a class="header-anchor" href="#_12-8-10-\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B" aria-hidden="true">#</a> 12.8.10.\u7F16\u5199\u6A21\u5757service\u5B9E\u73B0\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span>impl</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>seata<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GlobalTransactional</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span><span class="token class-name">OrderDao</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Order</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">AccountService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">OrderService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">StorageService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Service</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Service</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderServiceImpl</span> <span class="token keyword">implements</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">OrderDao</span> orderDao<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">StorageService</span> storageService<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">AccountService</span> accountService<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u521B\u5EFA\u8BA2\u5355-&gt;\u8C03\u7528\u5E93\u5B58\u670D\u52A1\u6263\u51CF\u5E93\u5B58-&gt;\u8C03\u7528\u8D26\u6237\u670D\u52A1\u6263\u51CF\u8D26\u6237\u4F59\u989D-&gt;\u4FEE\u6539\u8BA2\u5355\u72B6\u6001
     * \u7B80\u5355\u8BF4\uFF1A\u4E0B\u8BA2\u5355-&gt;\u6263\u5E93\u5B58-&gt;\u51CF\u4F59\u989D-&gt;\u6539\u72B6\u6001
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token annotation punctuation">@GlobalTransactional</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Order</span> order<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;\u5F00\u59CB\u4E0B\u8BA2\u5355&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//1 \u65B0\u5EFA\u8BA2\u5355</span>
        orderDao<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//2 \u6263\u51CF\u5E93\u5B58</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u8C03\u7528\u5E93\u5B58\uFF0C\u505A\u6263\u51CFCount&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        storageService<span class="token punctuation">.</span><span class="token function">decrease</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getProductId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>order<span class="token punctuation">.</span><span class="token function">getCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u8C03\u7528\u5E93\u5B58\uFF0C\u505A\u6263\u51CFend&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//3 \u6263\u51CF\u8D26\u6237</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u8C03\u7528\u8D26\u6237\uFF0C\u505A\u6263\u51CFMoney&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        accountService<span class="token punctuation">.</span><span class="token function">decrease</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>order<span class="token punctuation">.</span><span class="token function">getMoney</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;\u8BA2\u5355\u5FAE\u670D\u52A1\u5F00\u59CB\u8C03\u7528\u8D26\u6237\uFF0C\u505A\u6263\u51CFend&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//4 \u4FEE\u6539\u8BA2\u5355\u72B6\u6001\uFF0C\u4ECE\u96F6\u52301,1\u4EE3\u8868\u5DF2\u7ECF\u5B8C\u6210</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;\u4FEE\u6539\u8BA2\u5355\u72B6\u6001\u5F00\u59CB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        orderDao<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>order<span class="token punctuation">.</span><span class="token function">getUserId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;\u4FEE\u6539\u8BA2\u5355\u72B6\u6001\u7ED3\u675F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;-----&gt;\u5B8C\u6210\u4E0B\u8BA2\u5355&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-8-11-\u7F16\u5199\u6A21\u5757listener" tabindex="-1"><a class="header-anchor" href="#_12-8-11-\u7F16\u5199\u6A21\u5757listener" aria-hidden="true">#</a> 12.8.11.\u7F16\u5199\u6A21\u5757listener</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>listener</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">ConfigChange</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>model<span class="token punctuation">.</span></span><span class="token class-name">ConfigChangeEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">ApolloConfigChangeListener</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span></span><span class="token class-name">BeansException</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Autowired</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>context<span class="token punctuation">.</span>environment<span class="token punctuation">.</span></span><span class="token class-name">EnvironmentChangeEvent</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>context<span class="token punctuation">.</span>restart<span class="token punctuation">.</span></span><span class="token class-name">RestartEndpoint</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContext</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">ApplicationContextAware</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApolloPropertiesChangedListener</span> <span class="token keyword">implements</span> <span class="token class-name">ApplicationContextAware</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RestartEndpoint</span> restartEndpoint<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u6CE8\u610F,\u8981\u76D1\u542C\u975Eapplication\u547D\u540D\u7A7A\u95F4\u7684 \u914D\u7F6E\u6587\u4EF6\u53D8\u5316\u65F6,\u8981@ApolloConfigChangeListener\u8BF4\u660E\u65F6\u5177\u4F53\u65F6\u662F\u54EA\u4E2A\u547D\u540D\u7A7A\u95F4
     * <span class="token keyword">@param</span> <span class="token parameter">changeEvent</span>
     */</span>
    <span class="token annotation punctuation">@ApolloConfigChangeListener</span><span class="token punctuation">(</span><span class="token string">&quot;seata-order&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">someChangeHandler</span><span class="token punctuation">(</span><span class="token class-name">ConfigChangeEvent</span> changeEvent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> key <span class="token operator">:</span> changeEvent<span class="token punctuation">.</span><span class="token function">changedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">ConfigChange</span> change <span class="token operator">=</span> changeEvent<span class="token punctuation">.</span><span class="token function">getChange</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            log.info(&quot;Found change - {}&quot;, change.toString());</span>
            <span class="token comment">//\u5982\u679Ckey\u7B26\u5408\u7279\u5B9A\u60C5\u51B5,\u5219\u91CD\u542F\u5E94\u7528\u7A0B\u5E8F</span>
            <span class="token function">isRestartApplication</span><span class="token punctuation">(</span>change<span class="token punctuation">.</span><span class="token function">getPropertyName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// \u66F4\u65B0\u76F8\u5E94\u7684bean\u7684\u5C5E\u6027\u503C\uFF0C\u4E3B\u8981\u662F\u5B58\u5728@ConfigurationProperties\u6CE8\u89E3\u7684bean</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext<span class="token punctuation">.</span><span class="token function">publishEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EnvironmentChangeEvent</span><span class="token punctuation">(</span>changeEvent<span class="token punctuation">.</span><span class="token function">changedKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setApplicationContext</span><span class="token punctuation">(</span><span class="token class-name">ApplicationContext</span> applicationContext<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>applicationContext <span class="token operator">=</span> applicationContext<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u91CD\u542FSpringBoot\u9879\u76EE
     */</span>
    <span class="token doc-comment comment">/**
     * \u91CD\u542FSpringBoot\u9879\u76EE
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">isRestartApplication</span><span class="token punctuation">(</span><span class="token class-name">String</span> propertyName<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> propertyNames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * \u91CD\u542F\u903B\u8F911:\u4FEE\u6539\u4E86\u6307\u5B9A\u7684key\u7684\u503C
         */</span>
        propertyNames<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;spring.application.name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>propertyNames<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            restartEndpoint<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token doc-comment comment">/**
         * \u91CD\u542F\u903B\u8F912:key\u5305\u542Bseata
         */</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>propertyName<span class="token punctuation">.</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string">&quot;seata&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            restartEndpoint<span class="token punctuation">.</span><span class="token function">restart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-8-12-\u7F16\u5199\u6A21\u5757config" tabindex="-1"><a class="header-anchor" href="#_12-8-12-\u7F16\u5199\u6A21\u5757config" aria-hidden="true">#</a> 12.8.12.\u7F16\u5199\u6A21\u5757config</h3><pre><code>DataSourceProxyConfig.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>alibaba<span class="token punctuation">.</span>druid<span class="token punctuation">.</span>pool<span class="token punctuation">.</span></span><span class="token class-name">DruidDataSource</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>seata<span class="token punctuation">.</span>rm<span class="token punctuation">.</span>datasource<span class="token punctuation">.</span></span><span class="token class-name">DataSourceProxy</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>session<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span></span><span class="token class-name">SqlSessionFactoryBean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>transaction<span class="token punctuation">.</span></span><span class="token class-name">SpringManagedTransactionFactory</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>context<span class="token punctuation">.</span>properties<span class="token punctuation">.</span></span><span class="token class-name">ConfigurationProperties</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>core<span class="token punctuation">.</span>io<span class="token punctuation">.</span>support<span class="token punctuation">.</span></span><span class="token class-name">PathMatchingResourcePatternResolver</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span><span class="token class-name">DataSource</span></span><span class="token punctuation">;</span>


<span class="token doc-comment comment">/**
 * \u4F7F\u7528Seata\u5BF9\u6570\u636E\u6E90\u8FDB\u884C\u4EE3\u7406
 */</span>
<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DataSourceProxyConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${mybatis.mapperLocations}&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> mapperLocations<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@ConfigurationProperties</span><span class="token punctuation">(</span>prefix <span class="token operator">=</span> <span class="token string">&quot;spring.datasource&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">druidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DruidDataSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">DataSource</span> <span class="token function">dataSourceProxy</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSource<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">DataSourceProxy</span><span class="token punctuation">(</span>dataSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SqlSessionFactory</span> <span class="token function">sqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token class-name">DataSource</span> dataSourceProxy<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">SqlSessionFactoryBean</span> sqlSessionFactoryBean <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SqlSessionFactoryBean</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setDataSource</span><span class="token punctuation">(</span>dataSourceProxy<span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setMapperLocations</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PathMatchingResourcePatternResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getResources</span><span class="token punctuation">(</span>mapperLocations<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">setTransactionFactory</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SpringManagedTransactionFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> sqlSessionFactoryBean<span class="token punctuation">.</span><span class="token function">getObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>FeignConfig.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>config</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">feign<span class="token punctuation">.</span></span><span class="token class-name">Logger</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>


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

</code></pre></div><h3 id="_12-8-13-\u7F16\u5199\u6A21\u5757controller" tabindex="-1"><a class="header-anchor" href="#_12-8-13-\u7F16\u5199\u6A21\u5757controller" aria-hidden="true">#</a> 12.8.13.\u7F16\u5199\u6A21\u5757controller</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>controller</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">CommonResult</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>entities<span class="token punctuation">.</span></span><span class="token class-name">Order</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud<span class="token punctuation">.</span>service<span class="token punctuation">.</span></span><span class="token class-name">OrderService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>beans<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Value</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">GetMapping</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>bind<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">RestController</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Resource</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Resource</span>
    <span class="token keyword">private</span> <span class="token class-name">OrderService</span> orderService<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5\u5730\u5740:
     *      http://localhost/order/create?userId=1&amp;productId=1&amp;count=10&amp;money=100
     * <span class="token keyword">@param</span> <span class="token parameter">order</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/order/create&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">CommonResult</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Order</span> order<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        orderService<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>order<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">CommonResult</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span><span class="token string">&quot;\u8BA2\u5355\u521B\u5EFA\u6210\u529F&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_12-8-14-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_12-8-14-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 12.8.14.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>ctrip<span class="token punctuation">.</span>framework<span class="token punctuation">.</span>apollo<span class="token punctuation">.</span>spring<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">EnableApolloConfig</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span><span class="token class-name">DataSourceAutoConfiguration</span></span><span class="token punctuation">;</span>
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
<span class="token annotation punctuation">@EnableApolloConfig</span>
<span class="token annotation punctuation">@EnableEurekaClient</span>
<span class="token annotation punctuation">@SpringBootApplication</span><span class="token punctuation">(</span>exclude <span class="token operator">=</span> <span class="token class-name">DataSourceAutoConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token comment">//\u53D6\u6D88\u6570\u636E\u6E90\u7684\u81EA\u52A8\u521B\u5EFA</span>
<span class="token annotation punctuation">@EnableFeignClients</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OrderServiceConsumerSeatalLoadBalanceOpenFeignConfiguration80</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * \u6CE8\u610F:
         *  1.\u4E0B\u9762\u7684\u542F\u52A8\u53C2\u6570\u8981\u4EE5seata-server\u4E2D\u7684registry.conf\u4E2Dconfig.apollo<span class="token punctuation">{</span><span class="token punctuation">}</span>\u7684\u914D\u7F6E\u4E3A\u51C6
         *  2.\u8FD9\u91CC\u7684\u914D\u7F6E\u5176\u5B9E\u548Cyml\u4E2D\u4EE5\u53CAseata-server\u4E2D\u7684registry.conf\u4E2Dconfig.apollo<span class="token punctuation">{</span><span class="token punctuation">}</span>\u7684\u914D\u7F6E\u662F\u4E00\u81F4\u7684
         */</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;env&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;dev&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;seata&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;apollo.cluster&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;seata.config.apollo.namespace&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;seata-server&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">setProperty</span><span class="token punctuation">(</span><span class="token string">&quot;apolloConfigService&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;dafult&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">OrderServiceConsumerSeatalLoadBalanceOpenFeignConfiguration80</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_12-8-\u6D4B\u8BD5\u4F7F\u7528seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#_12-8-\u6D4B\u8BD5\u4F7F\u7528seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236" aria-hidden="true">#</a> 12.8.\u6D4B\u8BD5\u4F7F\u7528Seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236</h2><pre><code>\u542F\u52A8\u76F8\u5173\u670D\u52A1
</code></pre>`,107),m=s(`<pre><code>\u5728seate-server\u63A7\u5236\u53F0\u67E5\u770B,\u4E09\u4E2A\u670D\u52A1\u5DF2\u7ECF\u88AB\u6210\u529F\u6CE8\u518C
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+c+`" width="100%"></div></div><pre><code>\u6D4B\u8BD5\u4F7F\u7528Seata\u63A7\u5236\u5B9E\u73B0\u5206\u5E03\u5F0F\u4E8B\u52A1\u56DE\u6EDA
\u8C03\u7528\u63A5\u53E3\u524D\u67E5\u770B\u6570\u636E\u5E93\u4E2D\u6570\u636E
a.t_account\u8868
mysql&gt; SELECT * FROM seata_account.t_account;
+----+---------+-------+------+---------+
| id | user_id | total | used | residue |
+----+---------+-------+------+---------+
|  1 |       1 |  1000 |    0 |    1000 |
+----+---------+-------+------+---------+
1 row in set (0.00 sec)

b.t_storage\u8868
mysql&gt; SELECT * FROM seata_storage.t_storage;
+----+------------+-------+------+---------+
| id | product_id | total | used | residue |
+----+------------+-------+------+---------+
|  1 |          1 |   100 |    0 |     100 |
+----+------------+-------+------+---------+
1 row in set (0.00 sec)

c.t_order\u8868
mysql&gt; SELECT * FROM seata_order.t_order;
Empty set (0.00 sec)

\u5728\u6D4F\u89C8\u5668\u8BBF\u95EE\u5F15\u53D1\u5F02\u5E38\u7684\u63A5\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost/order/create?userId=1&amp;productId=1&amp;count=10&amp;money=100
</code></pre></div><pre><code>\u7531\u4E8E\u5728\u8C03\u7528Account\u670D\u52A1\u65F6\u4F1A\u62A5\u5F02\u5E38,\u6D4F\u89C8\u5668\u9875\u9762\u4F1A\u76F4\u63A5\u62A5\u9519,seata\u4F1A\u81EA\u52A8\u8FDB\u884C\u56DE\u6EDA

\u8C03\u7528\u63A5\u53E3\u524D\u67E5\u770B\u6570\u636E\u5E93\u4E2D\u6570\u636E
a.t_account\u8868
mysql&gt; SELECT * FROM seata_account.t_account;
+----+---------+-------+------+---------+
| id | user_id | total | used | residue |
+----+---------+-------+------+---------+
|  1 |       1 |  1000 |    0 |    1000 |
+----+---------+-------+------+---------+
1 row in set (0.00 sec)

b.t_storage\u8868
mysql&gt; SELECT * FROM seata_storage.t_storage;
+----+------------+-------+------+---------+
| id | product_id | total | used | residue |
+----+------------+-------+------+---------+
|  1 |          1 |   100 |    0 |     100 |
+----+------------+-------+------+---------+
1 row in set (0.00 sec)

c.t_order\u8868
mysql&gt; SELECT * FROM seata_order.t_order;
Empty set (0.00 sec)

\u5982\u679C\u60F3\u8981\u66F4\u660E\u663E\u7684\u67E5\u770BSeata\u5728\u9879\u76EE\u4E2D\u8D77\u7684\u4F5C\u7528,\u53EF\u4F7F\u7528\u5982\u4E0B\u65B9\u5F0F
a.\u5173\u95EDseata-server,\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE\u670D\u52A1,\u518D\u53BB\u6570\u636E\u5E93\u4E2D\u67E5\u770B,\u53EF\u4EE5\u53D1\u73B0\u8868\u4E2D\u7684\u6570\u636E\u53D1\u751F\u4E86\u6539\u53D8
b.\u5728\u8C03\u7528\u7684\u65F6\u5019\u6253\u7AEF\u70B9,\u53EF\u4EE5\u89C2\u5BDF\u5230\u8868\u4E2D\u7684\u6570\u636E\u4F1A\u5148\u53D1\u751F\u53D8\u5316,\u653E\u5F00\u65AD\u70B9\u540E,\u53C8\u4F1A\u56E0\u4E3A\u53D1\u751F\u5F02\u5E38\u89E6\u53D1\u56DE\u6EDA\u5BFC\u81F4\u8868\u4E2D\u7684\u6570\u636E\u6062\u590D\u5230\u521D\u59CB\u72B6\u6001
</code></pre><h2 id="_12-9-\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#_12-9-\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> 12.9.\u6CE8\u610F\u4E8B\u9879</h2><pre><code>\u5728\u8FD9\u4E2A\u6848\u4F8B\u4E2D,\u4E09\u4E2A\u670D\u52A1\u548Cseata-server\u5728Apollo\u6CE8\u518C\u4E2D\u63A5\u5165\u5728\u540C\u4E00\u4E2A\u9879\u76EE\u4E2D,\u4F9D\u9760namespace\u7684\u503C\u533A\u5206\u4E09\u4E2A\u4E0D\u540C\u670D\u52A1\u548Cseata-server,\u8FD9\u6837\u5C31\u53EF\u4EE5\u8BA9\u4E09\u4E2A\u4E0D\u540C\u7684\u670D\u52A1\u548Cseata-server\u540C\u65F6\u4F7F\u7528apollo,\u56E0\u4E3Aapplication.yml\u4E2Dapp.id\u8FD9\u4E2A\u914D\u7F6E\u9879\u53EA\u80FD\u914D\u7F6E\u4E00\u4E2A\u503C,\u5982\u679C\u4E0D\u8FD9\u6837\u5904\u7406,\u4E09\u4E2A\u670D\u52A1\u53EA\u80FD\u4F7F\u7528seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236,\u5E76\u4E0D\u80FD\u4F7F\u7528apollo\u7BA1\u7406\u914D\u7F6E
</code></pre>`,7);function d(y,v){const t=a("Markmap"),p=a("Mermaid"),o=a("ScrollIntoPageView"),e=a("HideSideBar");return u(),k("div",null,[r,n(t,{localtion:"/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter12.html",height:"500rem"}),g,n(p,{id:"mermaid-64a568e0",code:"flowchart%20LR%0A%20%20%20%20%E5%90%AF%E5%8A%A8Eureka%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%837001%E8%8A%82%E7%82%B9--%3E%E5%90%AF%E5%8A%A8Apollo%0A%09%E5%90%AF%E5%8A%A8Apollo--%3E%E5%90%AF%E5%8A%A8Seata-Server%0A%20%20%20%20%E5%90%AF%E5%8A%A8Seata-Server--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%85Account%E6%9C%8D%E5%8A%A18007%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%85Account%E6%9C%8D%E5%8A%A18007--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%85Storage%E6%9C%8D%E5%8A%A18008%0A%20%20%20%20%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%8F%90%E4%BE%9B%E8%80%85Storage%E6%9C%8D%E5%8A%A18008--%3E%E5%90%AF%E5%8A%A8%E6%9C%8D%E5%8A%A1%E6%B6%88%E8%B4%B9%E8%80%85Order%E6%9C%8D%E5%8A%A1%0A"}),m,n(o),n(e)])}var h=l(i,[["render",d],["__file","springcloud-eureka-chapter-12.\u4F7F\u7528Seata\u8FDB\u884C\u5206\u5E03\u5F0F\u4E8B\u52A1\u63A7\u5236.html.vue"]]);export{h as default};
