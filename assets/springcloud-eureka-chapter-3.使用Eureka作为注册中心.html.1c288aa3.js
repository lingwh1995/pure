import{_ as e,a as c,b as l,c as u}from"./eureka7004.5ffd5945.js";import{_ as k}from"./eureka7001.14688a2f.js";import{_ as i,o as g,c as r,a as n,d as s,r as a}from"./app.d4c08878.js";const d={},m=s(`<h1 id="_3-\u4F7F\u7528eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#_3-\u4F7F\u7528eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3" aria-hidden="true">#</a> 3.\u4F7F\u7528Eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3</h1><h2 id="_3-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 3.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 3.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 3.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 3.3.Eureka\u6CE8\u518C\u4E2D\u5FC3\u7B80\u4ECB
 3.4.\u642D\u5EFA\u5355\u8282\u70B9\u7248EUREKA\u6CE8\u518C\u4E2D\u5FC3
 3.5.\u642D\u5EFA\u96C6\u7FA4(\u9AD8\u53EF\u7528)\u7248EUREKA\u6CE8\u518C\u4E2D\u5FC3
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_3-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter3.html" target="_blank">3.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),h=s(`<h2 id="_3-3-eureka\u6CE8\u518C\u4E2D\u5FC3\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_3-3-eureka\u6CE8\u518C\u4E2D\u5FC3\u7B80\u4ECB" aria-hidden="true">#</a> 3.3.Eureka\u6CE8\u518C\u4E2D\u5FC3\u7B80\u4ECB</h2><pre><code>Eureka\u662FNetflix\u516C\u53F8\u5F00\u53D1\u7684\u670D\u52A1\u53D1\u73B0\u6846\u67B6,Spring Cloud\u5BF9\u5B83\u63D0\u4F9B\u4E86\u652F\u6301,\u5C06\u5B83\u96C6\u6210\u5728\u4E86\u81EA\u5DF1spring-cloud-netflix\u5B50\u9879\u76EE\u4E2D,\u7528\u6765\u5B9E\u73B0Spring Cloud\u7684\u670D\u52A1\u53D1\u73B0\u529F\u80FD,\u6838\u5FC3\u529F\u80FD\u662F\u4E3A\u5B9E\u73B0\u670D\u52A1\u53D1\u73B0\u63D0\u4F9B\u4E86\u57FA\u7840\u652F\u6301\u3002\u672C\u6B21\u5C06\u642D\u5EFA\u4E00\u4E2A\u5355\u8282\u70B9\u7248\u7684Eureka\u6CE8\u518C\u4E2D\u5FC3\u548C\u4E00\u4E2A\u96C6\u7FA4(\u9AD8\u53EF\u7528)\u7248\u7684Eureka\u6CE8\u518C\u4E2D\u5FC3,\u7528\u6765\u5B9E\u73B0\u670D\u52A1\u53D1\u73B0\u529F\u80FD\u3002
</code></pre><p><a href="https://github.com/Netflix/eureka" target="_blank">\u5B98\u65B9\u7F51\u7AD9(GITHUB)</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://github.com/Netflix/eureka
</code></pre></div><p><a href="https://spring.io/projects/spring-cloud-netflix" target="_blank">\u5B98\u65B9\u7F51\u7AD9(SPRING.IO)</a></p><div class="language-text ext-text"><pre class="language-text"><code>https://spring.io/projects/spring-cloud-netflix
</code></pre></div><pre><code>EUREKA\u67B6\u6784\u56FE
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+e+`" width="80%"></div></div><pre><code>Eureka\u7684\u57FA\u7840\u7EC4\u4EF6
\u670D\u52A1\u63D0\u4F9B\u8005(Service Provide): \u670D\u52A1\u63D0\u4F9B\u7AEF\u5C06\u81EA\u8EAB\u670D\u52A1\u6CE8\u518C\u5230Eureka,\u4ECE\u800C\u4F7F\u670D\u52A1\u6D88\u8D39\u7AEF\u80FD\u591F\u627E\u5230
\u670D\u52A1\u6D88\u8D39\u8005(Service Consumer): \u670D\u52A1\u6D88\u8D39\u7AEF\u4ECEEureka\u83B7\u53D6\u6CE8\u518C\u670D\u52A1\u5217\u8868,\u4ECE\u800C\u80FD\u591F\u6D88\u8D39\u670D\u52A1
\u670D\u52A1\u4E2D\u4ECB(Eureka Server): \u662F\u670D\u52A1\u63D0\u4F9B\u8005\u548C\u670D\u52A1\u6D88\u8D39\u8005\u4E4B\u95F4\u7684\u6865\u6881\uFF0C\u670D\u52A1\u63D0\u4F9B\u8005\u53EF\u4EE5\u628A\u81EA\u5DF1\u6CE8\u518C\u5230\u670D\u52A1\u4E2D\u4ECB\u90A3\u91CC\uFF0C\u800C\u670D\u52A1\u6D88\u8D39\u8005\u5982\u9700\u8981\u6D88\u8D39\u4E00\u4E9B\u670D\u52A1(\u4F7F\u7528\u4E00\u4E9B\u529F\u80FD)\u5C31\u53EF\u4EE5\u5728\u670D\u52A1\u4E2D\u4ECB\u4E2D\u5BFB\u627E\u6CE8\u518C\u5728\u670D\u52A1\u4E2D\u4ECB\u7684\u670D\u52A1\u63D0\u4F9B\u8005\u3002

Eureka\u7684\u63D0\u4F9B\u4E86\u54EA\u4E9B\u529F\u80FD?
\u670D\u52A1\u6CE8\u518C(Service Register)
\u5F53Eureka\u5BA2\u6237\u7AEF\u5411Eureka Server\u6CE8\u518C\u65F6,\u5B83\u63D0\u4F9B\u81EA\u8EAB\u7684\u5143\u6570\u636E,\u6BD4\u5982IP\u5730\u5740\u3001\u7AEF\u53E3,\u8FD0\u884C\u72B6\u51B5\u6307\u793A\u7B26URL\u7B49
\u670D\u52A1\u7EED\u7EA6(Service Renew)
Eureka\u5BA2\u6237\u4F1A\u6BCF\u969430\u79D2(\u9ED8\u8BA4\u60C5\u51B5\u4E0B)\u53D1\u9001\u4E00\u6B21\u5FC3\u8DF3\u6765\u7EED\u7EA6\u3002\u901A\u8FC7\u7EED\u7EA6\u6765\u544A\u77E5 Eureka Server\u8BE5Eureka\u5BA2\u6237\u4ECD\u7136\u5B58\u5728,\u6CA1\u6709\u51FA\u73B0\u95EE\u9898\u3002\u6B63\u5E38\u60C5\u51B5\u4E0B,\u5982\u679C Eureka Server\u572890\u79D2\u6CA1\u6709\u6536\u5230Eureka\u5BA2\u6237\u7684\u7EED\u7EA6,\u5B83\u4F1A\u5C06\u5B9E\u4F8B\u4ECE\u5176\u6CE8\u518C\u8868\u4E2D\u5220\u9664
\u83B7\u53D6\u6CE8\u518C\u5217\u8868\u4FE1\u606F(Service Fetch Registries)
Eureka \u5BA2\u6237\u7AEF\u4ECE\u670D\u52A1\u5668\u83B7\u53D6\u6CE8\u518C\u8868\u4FE1\u606F,\u5E76\u5C06\u5176\u7F13\u5B58\u5728\u672C\u5730\u3002\u5BA2\u6237\u7AEF\u4F1A\u4F7F\u7528\u8BE5\u4FE1\u606F\u67E5\u627E\u5176\u4ED6\u670D\u52A1,\u4ECE\u800C\u8FDB\u884C\u8FDC\u7A0B\u8C03\u7528\u3002\u8BE5\u6CE8\u518C\u5217\u8868\u4FE1\u606F\u5B9A\u671F(\u6BCF30 \u79D2\u949F)\u66F4\u65B0\u4E00\u6B21\u3002\u6BCF\u6B21\u8FD4\u56DE\u6CE8\u518C\u5217\u8868\u4FE1\u606F\u53EF\u80FD\u4E0EEureka\u5BA2\u6237\u7AEF\u7684\u7F13\u5B58\u4FE1\u606F\u4E0D\u540C,Eureka\u5BA2\u6237\u7AEF\u81EA\u52A8\u5904\u7406\u3002\u5982\u679C\u7531\u4E8E\u67D0\u79CD\u539F\u56E0\u5BFC\u81F4\u6CE8\u518C\u5217\u8868\u4FE1\u606F\u4E0D\u80FD\u53CA\u65F6\u5339\u914D,Eureka \u5BA2\u6237\u7AEF\u5219\u4F1A\u91CD\u65B0\u83B7\u53D6\u6574\u4E2A\u6CE8\u518C\u8868\u4FE1\u606F\u3002Eureka \u670D\u52A1\u5668\u7F13\u5B58\u6CE8\u518C\u5217\u8868\u4FE1\u606F,\u6574\u4E2A\u6CE8\u518C\u8868\u4EE5\u53CA\u6BCF\u4E2A\u5E94\u7528\u7A0B\u5E8F\u7684\u4FE1\u606F\u8FDB\u884C\u4E86\u538B\u7F29,\u538B\u7F29\u5185\u5BB9\u548C\u6CA1\u6709\u538B\u7F29\u7684\u5185\u5BB9\u5B8C\u5168\u76F8\u540C\u3002Eureka\u5BA2\u6237\u7AEF\u548CEureka\u670D\u52A1\u5668\u53EF\u4EE5\u4F7F\u7528JSON/XML\u683C\u5F0F\u8FDB\u884C\u901A\u8BAF\u3002\u5728\u9ED8\u8BA4\u7684\u60C5\u51B5\u4E0B Eureka\u5BA2\u6237\u7AEF\u4F7F\u7528\u538B\u7F29JSON \u683C\u5F0F\u6765\u83B7\u53D6\u6CE8\u518C\u5217\u8868\u7684\u4FE1\u606F\u3002
\u670D\u52A1\u4E0B\u7EBF(Service Cancel)
Eureka \u5BA2\u6237\u7AEF\u5728\u7A0B\u5E8F\u5173\u95ED\u65F6\u5411 Eureka \u670D\u52A1\u5668\u53D1\u9001\u53D6\u6D88\u8BF7\u6C42\u3002\u53D1\u9001\u8BF7\u6C42\u540E,\u8BE5\u5BA2\u6237\u7AEF\u5B9E\u4F8B\u4FE1\u606F\u5C06\u4ECE\u670D\u52A1\u5668\u7684\u5B9E\u4F8B\u6CE8\u518C\u8868\u4E2D\u5220\u9664\u3002\u8BE5\u4E0B\u7EBF\u8BF7\u6C42\u4E0D\u4F1A\u81EA\u52A8\u5B8C\u6210,\u5B83\u9700\u8981\u8C03\u7528\u4EE5\u4E0B\u5185\u5BB9:DiscoveryManager.getInstance().shutdownComponent();
\u670D\u52A1\u5254\u9664(Service Eviction)
\u5728\u9ED8\u8BA4\u7684\u60C5\u51B5\u4E0B,\u5F53Eureka\u5BA2\u6237\u7AEF\u8FDE\u7EED90\u79D2(3\u4E2A\u7EED\u7EA6\u5468\u671F)\u6CA1\u6709\u5411Eureka\u670D\u52A1\u5668\u53D1\u9001\u670D\u52A1\u7EED\u7EA6,\u5373\u5FC3\u8DF3,Eureka \u670D\u52A1\u5668\u4F1A\u5C06\u8BE5\u670D\u52A1\u5B9E\u4F8B\u4ECE\u670D\u52A1\u6CE8\u518C\u5217\u8868\u5220\u9664,\u5373\u670D\u52A1\u5254\u9664\u3002
</code></pre><h2 id="_3-4-\u642D\u5EFA\u5355\u8282\u70B9\u7248eureka\u6CE8\u518C\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#_3-4-\u642D\u5EFA\u5355\u8282\u70B9\u7248eureka\u6CE8\u518C\u4E2D\u5FC3" aria-hidden="true">#</a> 3.4.\u642D\u5EFA\u5355\u8282\u70B9\u7248EUREKA\u6CE8\u518C\u4E2D\u5FC3</h2><h3 id="_3-4-1-\u7AE0\u8282\u5185\u5BB9\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_3-4-1-\u7AE0\u8282\u5185\u5BB9\u7B80\u4ECB" aria-hidden="true">#</a> 3.4.1.\u7AE0\u8282\u5185\u5BB9\u7B80\u4ECB</h3><pre><code>\u642D\u5EFA\u4E00\u4E2A\u5355\u8282\u70B9\u7248\u7684Eureka\u6CE8\u518C\u4E2D\u5FC3
</code></pre><h3 id="_3-4-2-\u6A21\u5757\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_3-4-2-\u6A21\u5757\u7B80\u4ECB" aria-hidden="true">#</a> 3.4.2.\u6A21\u5757\u7B80\u4ECB</h3><pre><code>\u5355\u8282\u70B9\u7248Eureka\u6CE8\u518C\u4E2D\u5FC3,\u542F\u52A8\u7AEF\u53E3: 7001
</code></pre><h3 id="_3-4-3-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#_3-4-3-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> 3.4.3.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784</h3><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-register-center-single-node7001
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               \u2022-- RegisterCcenterSingleNode7001.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><h3 id="_3-4-4-\u521B\u5EFA\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_3-4-4-\u521B\u5EFA\u6A21\u5757" aria-hidden="true">#</a> 3.4.4.\u521B\u5EFA\u6A21\u5757</h3><pre><code>\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-register-center-single-node7001\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F
</code></pre><h3 id="_3-4-5-\u7F16\u5199\u6A21\u5757pom-xml" tabindex="-1"><a class="header-anchor" href="#_3-4-5-\u7F16\u5199\u6A21\u5757pom-xml" aria-hidden="true">#</a> 3.4.5.\u7F16\u5199\u6A21\u5757pom.xml</h3><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-register-center-single-node7001<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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

</code></pre></div><h3 id="_3-4-6-\u7F16\u5199\u6A21\u5757application-yml" tabindex="-1"><a class="header-anchor" href="#_3-4-6-\u7F16\u5199\u6A21\u5757application-yml" aria-hidden="true">#</a> 3.4.6.\u7F16\u5199\u6A21\u5757application.yml</h3><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7001</span> <span class="token comment">#\u8BBF\u95EE\u7AEF\u53E3</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>REGISTER<span class="token punctuation">-</span>CENTER<span class="token punctuation">-</span>SINGLE<span class="token punctuation">-</span>NODE7001  <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span> <span class="token comment">#\u70ED\u90E8\u7F72\u5F00\u5173</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> localhost
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#\u4E0D\u5411\u6CE8\u518C\u4E2D\u5FC3\u6CE8\u518C\u81EA\u5DF1</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u8868\u793A\u81EA\u5DF1\u5C31\u662F\u6CE8\u518C\u4E2D\u5FC3,\u6211\u7684\u804C\u8D23\u5C31\u662F\u7EF4\u62A4\u5B9E\u4F8B,\u4E0D\u9700\u8981\u53BB\u68C0\u7D22\u670D\u52A1</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//localhost<span class="token punctuation">:</span>7001/eureka
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable-self-preservation</span><span class="token punctuation">:</span> <span class="token boolean important">true</span> <span class="token comment">#\u662F\u5426\u5F00\u542F\u81EA\u6211\u4FDD\u62A4,true:\u670D\u52A1\u5931\u6548\u4E0D\u76F4\u63A5\u5254\u9664,false:\u670D\u52A1\u5931\u6548\u76F4\u63A5\u5254\u9664</span>
    <span class="token key atrule">eviction-interval-timer-in-ms</span><span class="token punctuation">:</span> <span class="token number">2000</span> <span class="token comment">#\u9ED8\u8BA4\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694,\u5355\u4F4D\u4E3Ams</span>

</code></pre></div><h3 id="_3-4-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" tabindex="-1"><a class="header-anchor" href="#_3-4-7-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B" aria-hidden="true">#</a> 3.4.7.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B</h3><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaServer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegisterCcenterSingleNode7001</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RegisterCcenterSingleNode7001</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_3-4-8-\u6D4B\u8BD5\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_3-4-8-\u6D4B\u8BD5\u6A21\u5757" aria-hidden="true">#</a> 3.4.8.\u6D4B\u8BD5\u6A21\u5757</h3><pre><code>\u5728\u6D4F\u89C8\u5668\u4E2D\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://localhost:7001/
</code></pre></div><pre><code>\u770B\u5230\u5982\u4E0B\u754C\u9762\u4EE3\u8868\u642D\u5EFA\u6210\u529F
</code></pre><div style="text-align:center;"><div class="imgbg-customer"><img src="`+k+`" width="100%"></div></div><h2 id="_3-5-\u642D\u5EFA\u96C6\u7FA4-\u9AD8\u53EF\u7528-\u7248eureka\u6CE8\u518C\u4E2D\u5FC3" tabindex="-1"><a class="header-anchor" href="#_3-5-\u642D\u5EFA\u96C6\u7FA4-\u9AD8\u53EF\u7528-\u7248eureka\u6CE8\u518C\u4E2D\u5FC3" aria-hidden="true">#</a> 3.5.\u642D\u5EFA\u96C6\u7FA4(\u9AD8\u53EF\u7528)\u7248EUREKA\u6CE8\u518C\u4E2D\u5FC3</h2><h3 id="_3-5-1-\u7AE0\u8282\u5185\u5BB9\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_3-5-1-\u7AE0\u8282\u5185\u5BB9\u7B80\u4ECB" aria-hidden="true">#</a> 3.5.1.\u7AE0\u8282\u5185\u5BB9\u7B80\u4ECB</h3><pre><code>\u672C\u7AE0\u8282\u4F1A\u5C55\u793A\u5982\u4F55\u642D\u5EFA\u4E00\u4E2A\u96C6\u7FA4(\u9AD8\u53EF\u7528)\u7248\u7684Eureka\u6CE8\u518C\u4E2D\u5FC3,\u5171\u6709\u4E09\u4E2A\u8282\u70B9,Eureka\u6CE8\u518C\u4E2D\u5FC3\u96C6\u7FA4\u7684\u539F\u7406\u662F\u591A\u4E2AEureka Server\u4E4B\u95F4\u76F8\u4E92\u6CE8\u518C,\u4ECE\u800C\u7EC4\u6210\u4E00\u4E2A\u96C6\u7FA4\u3002
</code></pre><h3 id="_3-5-2-\u642D\u5EFAeureka\u96C6\u7FA4\u4E2D\u7B2C\u4E00\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-5-2-\u642D\u5EFAeureka\u96C6\u7FA4\u4E2D\u7B2C\u4E00\u4E2A\u8282\u70B9" aria-hidden="true">#</a> 3.5.2.\u642D\u5EFAEureka\u96C6\u7FA4\u4E2D\u7B2C\u4E00\u4E2A\u8282\u70B9</h3><pre><code>\u6A21\u5757\u7B80\u4ECB
\u96C6\u7FA4(\u9AD8\u53EF\u7528)\u7248Eureka\u6CE8\u518C\u4E2D\u5FC3\u4E2D\u7B2C\u4E00\u4E2A\u8282\u70B9,\u542F\u52A8\u7AEF\u53E3: 7002

\u6A21\u5757\u76EE\u5F55\u7ED3\u6784
</code></pre><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-register-center-cluster-node7002
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               \u2022-- RegisterCcenterClusterNode7002.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><pre><code>\u521B\u5EFA\u6A21\u5757
\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-register-center-cluster-node7002\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F

\u7F16\u5199\u6A21\u5757pom.xml
</code></pre><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-register-center-cluster-node7002<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u5F15\u5165\u516C\u5171\u7684\u5DE5\u7A0B--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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

</code></pre></div><pre><code>\u7F16\u5199\u6A21\u5757application.yml
</code></pre><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7002</span> <span class="token comment">#\u8BBF\u95EE\u7AEF\u53E3</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>REGISTER<span class="token punctuation">-</span>CENTER<span class="token punctuation">-</span>CLUSTER<span class="token punctuation">-</span>NODE7002  <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span> <span class="token comment">#\u70ED\u90E8\u7F72\u5DE5\u5177</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> eureka7002
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u4E0D\u5411\u6CE8\u518C\u4E2D\u5FC3\u6CE8\u518C\u81EA\u5DF1</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u8868\u793A\u81EA\u5DF1\u5C31\u662F\u6CE8\u518C\u4E2D\u5FC3,\u6211\u7684\u804C\u8D23\u5C31\u662F\u7EF4\u62A4\u5B9E\u4F8B,\u4E0D\u9700\u8981\u53BB\u68C0\u7D22\u670D\u52A1</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span> <span class="token comment">#\u628A\u5F53\u524Deureka7003\u6CE8\u518C\u5230\u5176\u4ED6\u4E24\u4E2A\u6CE8\u518C\u4E2D\u5FC3eureka7002\u3001eureka7004\u4E2D</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7003<span class="token punctuation">:</span>7003/eureka<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7004<span class="token punctuation">:</span>7004/eureka
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable-self-preservation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u662F\u5426\u5F00\u542F\u81EA\u6211\u4FDD\u62A4,true:\u670D\u52A1\u5931\u6548\u4E0D\u76F4\u63A5\u5254\u9664,false:\u670D\u52A1\u5931\u6548\u76F4\u63A5\u5254\u9664</span>
    <span class="token key atrule">eviction-interval-timer-in-ms</span><span class="token punctuation">:</span> <span class="token number">2000</span> <span class="token comment">#\u9ED8\u8BA4\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694,\u5355\u4F4D\u4E3Ams</span>

</code></pre></div><pre><code>\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaServer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegisterCcenterClusterNode7002</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RegisterCcenterClusterNode7002</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_3-5-3-\u642D\u5EFAeureka\u96C6\u7FA4\u4E2D\u7B2C\u4E8C\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-5-3-\u642D\u5EFAeureka\u96C6\u7FA4\u4E2D\u7B2C\u4E8C\u4E2A\u8282\u70B9" aria-hidden="true">#</a> 3.5.3.\u642D\u5EFAEureka\u96C6\u7FA4\u4E2D\u7B2C\u4E8C\u4E2A\u8282\u70B9</h3><pre><code>\u6A21\u5757\u7B80\u4ECB
\u96C6\u7FA4(\u9AD8\u53EF\u7528)\u7248Eureka\u6CE8\u518C\u4E2D\u5FC3\u4E2D\u7B2C\u4E8C\u4E2A\u8282\u70B9,\u542F\u52A8\u7AEF\u53E3: 7003

\u6A21\u5757\u76EE\u5F55\u7ED3\u6784
</code></pre><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-register-center-cluster-node7003
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               \u2022-- RegisterCcenterClusterNode7003.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><pre><code>\u521B\u5EFA\u6A21\u5757
\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-register-center-cluster-node7003\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F

\u7F16\u5199\u6A21\u5757pom.xml
</code></pre><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-register-center-cluster-node7003<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u5F15\u5165\u516C\u5171\u7684\u5DE5\u7A0B--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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

</code></pre></div><pre><code>\u7F16\u5199\u6A21\u5757application.yml
</code></pre><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7003</span> <span class="token comment">#\u8BBF\u95EE\u7AEF\u53E3</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>REGISTER<span class="token punctuation">-</span>CENTER<span class="token punctuation">-</span>CLUSTER<span class="token punctuation">-</span>NODE7003  <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span> <span class="token comment">#\u70ED\u90E8\u7F72\u5DE5\u5177</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> eureka7003
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u4E0D\u5411\u6CE8\u518C\u4E2D\u5FC3\u6CE8\u518C\u81EA\u5DF1</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u8868\u793A\u81EA\u5DF1\u5C31\u662F\u6CE8\u518C\u4E2D\u5FC3,\u6211\u7684\u804C\u8D23\u5C31\u662F\u7EF4\u62A4\u5B9E\u4F8B,\u4E0D\u9700\u8981\u53BB\u68C0\u7D22\u670D\u52A1</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span> <span class="token comment">#\u628A\u5F53\u524Deureka7003\u6CE8\u518C\u5230\u5176\u4ED6\u4E24\u4E2A\u6CE8\u518C\u4E2D\u5FC3eureka7002\u3001eureka7004\u4E2D</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7002<span class="token punctuation">:</span>7002/eureka<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7004<span class="token punctuation">:</span>7004/eureka
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable-self-preservation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u662F\u5426\u5F00\u542F\u81EA\u6211\u4FDD\u62A4,true:\u670D\u52A1\u5931\u6548\u4E0D\u76F4\u63A5\u5254\u9664,false:\u670D\u52A1\u5931\u6548\u76F4\u63A5\u5254\u9664</span>
    <span class="token key atrule">eviction-interval-timer-in-ms</span><span class="token punctuation">:</span> <span class="token number">2000</span> <span class="token comment">#\u9ED8\u8BA4\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694,\u5355\u4F4D\u4E3Ams</span>

</code></pre></div><pre><code>\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaServer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegisterCcenterClusterNode7003</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RegisterCcenterClusterNode7003</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_3-5-4-\u642D\u5EFAeureka\u96C6\u7FA4\u4E2D\u7B2C\u4E09\u4E2A\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_3-5-4-\u642D\u5EFAeureka\u96C6\u7FA4\u4E2D\u7B2C\u4E09\u4E2A\u8282\u70B9" aria-hidden="true">#</a> 3.5.4.\u642D\u5EFAEureka\u96C6\u7FA4\u4E2D\u7B2C\u4E09\u4E2A\u8282\u70B9</h3><pre><code>\u6A21\u5757\u7B80\u4ECB
\u96C6\u7FA4(\u9AD8\u53EF\u7528)\u7248Eureka\u6CE8\u518C\u4E2D\u5FC3\u4E2D\u7B2C\u4E09\u4E2A\u8282\u70B9,\u542F\u52A8\u7AEF\u53E3: 7004

\u6A21\u5757\u76EE\u5F55\u7ED3\u6784
</code></pre><div class="language-markdown ext-md"><pre class="language-markdown"><code>springcloud-register-center-cluster-node7004
|-- src
|   \u2022-- main
|       |-- java
|       |   \u2022-- org
|       |       \u2022-- openatom
|       |           \u2022-- springcloud
|       |               \u2022-- RegisterCcenterClusterNode7004.java
|       \u2022-- resources
|           \u2022-- application.yml
\u2022-- pom.xml

</code></pre></div><pre><code>\u521B\u5EFA\u6A21\u5757
\u5728\u7236\u5DE5\u7A0B(springcloud-eureka)\u4E2D\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3Aspringcloud-register-center-cluster-node7004\u7684maven\u6A21\u5757,\u6CE8\u610F:\u5F53\u524D\u6A21\u5757\u521B\u5EFA\u6210\u529F\u540E,\u5728\u7236\u5DE5\u7A0Bpom.xml\u4E2D&lt;modules&gt;&lt;/modules&gt;\u4E2D\u4F1A\u81EA\u52A8\u751F\u6210\u6709\u5173\u5F53\u524D\u6A21\u5757\u7684\u4FE1\u606F

\u7F16\u5199\u6A21\u5757pom.xml
</code></pre><div class="language-xml ext-xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-eureka<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.0-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-register-center-cluster-node7004<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>

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
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-netflix-eureka-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--\u5F15\u5165\u516C\u5171\u7684\u5DE5\u7A0B--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.openatom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>springcloud-api-commons<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
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

</code></pre></div><pre><code>\u7F16\u5199\u6A21\u5757application.yml
</code></pre><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>
  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7004</span> <span class="token comment">#\u8BBF\u95EE\u7AEF\u53E3</span>
<span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> SPRINGCLOUD<span class="token punctuation">-</span>REGISTER<span class="token punctuation">-</span>CENTER<span class="token punctuation">-</span>CLUSTER<span class="token punctuation">-</span>NODE7004   <span class="token comment">#\u6CE8\u610F:\u670D\u52A1\u540D\u4E0D\u8981\u51FA\u73B0_</span>
  <span class="token key atrule">devtools</span><span class="token punctuation">:</span> <span class="token comment">#\u70ED\u90E8\u7F72\u5DE5\u5177</span>
    <span class="token key atrule">restart</span><span class="token punctuation">:</span>
      <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token key atrule">eureka</span><span class="token punctuation">:</span>
  <span class="token key atrule">instance</span><span class="token punctuation">:</span>
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> eureka7004
  <span class="token key atrule">client</span><span class="token punctuation">:</span>
    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u4E0D\u5411\u6CE8\u518C\u4E2D\u5FC3\u6CE8\u518C\u81EA\u5DF1</span>
    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u8868\u793A\u81EA\u5DF1\u5C31\u662F\u6CE8\u518C\u4E2D\u5FC3,\u6211\u7684\u804C\u8D23\u5C31\u662F\u7EF4\u62A4\u5B9E\u4F8B,\u4E0D\u9700\u8981\u53BB\u68C0\u7D22\u670D\u52A1</span>
    <span class="token key atrule">service-url</span><span class="token punctuation">:</span> <span class="token comment">#\u628A\u5F53\u524Deureka7004\u6CE8\u518C\u5230\u5176\u4ED6\u4E24\u4E2A\u6CE8\u518C\u4E2D\u5FC3eureka7002\u3001eureka7003\u4E2D</span>
      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7002<span class="token punctuation">:</span>7002/eureka<span class="token punctuation">,</span>http<span class="token punctuation">:</span>//eureka7003<span class="token punctuation">:</span>7003/eureka
  <span class="token key atrule">server</span><span class="token punctuation">:</span>
    <span class="token key atrule">enable-self-preservation</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#\u662F\u5426\u5F00\u542F\u81EA\u6211\u4FDD\u62A4,true:\u670D\u52A1\u5931\u6548\u4E0D\u76F4\u63A5\u5254\u9664,false:\u670D\u52A1\u5931\u6548\u76F4\u63A5\u5254\u9664</span>
    <span class="token key atrule">eviction-interval-timer-in-ms</span><span class="token punctuation">:</span> <span class="token number">10000</span> <span class="token comment">#\u9ED8\u8BA4\u53D1\u9001\u5FC3\u8DF3\u7684\u65F6\u95F4\u95F4\u9694,\u5355\u4F4D\u4E3Ams</span>

</code></pre></div><pre><code>\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>openatom<span class="token punctuation">.</span>springcloud</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span></span><span class="token class-name">SpringApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>autoconfigure<span class="token punctuation">.</span></span><span class="token class-name">SpringBootApplication</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>cloud<span class="token punctuation">.</span>netflix<span class="token punctuation">.</span>eureka<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">EnableEurekaServer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token annotation punctuation">@EnableEurekaServer</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegisterCcenterClusterNode7004</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">RegisterCcenterClusterNode7004</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h3 id="_3-5-5-\u914D\u7F6Ehost" tabindex="-1"><a class="header-anchor" href="#_3-5-5-\u914D\u7F6Ehost" aria-hidden="true">#</a> 3.5.5.\u914D\u7F6Ehost</h3><pre><code>\u4FEE\u6539host\u6587\u4EF6,C:\\Windows\\System32\\drivers\\etc\\host
\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9:
127.0.0.1		eureka7002
127.0.0.1		eureka7003
127.0.0.1		eureka7004
</code></pre><h3 id="_3-5-6-\u6D4B\u8BD5\u96C6\u7FA4\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_3-5-6-\u6D4B\u8BD5\u96C6\u7FA4\u6A21\u5757" aria-hidden="true">#</a> 3.5.6.\u6D4B\u8BD5\u96C6\u7FA4\u6A21\u5757</h3><pre><code>\u6D4B\u8BD5\u96C6\u7FA4\u4E2D\u7684\u7B2C\u4E00\u4E2A\u8282\u70B9(7002),\u6D4F\u89C8\u5668\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://eureka7002:7002/
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+c+`" width="100%"></div></div><pre><code>\u6D4B\u8BD5\u96C6\u7FA4\u4E2D\u7684\u7B2C\u4E8C\u4E2A\u8282\u70B9(7003),\u6D4F\u89C8\u5668\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://eureka7003:7003/
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+l+`" width="100%"></div></div><pre><code>\u6D4B\u8BD5\u96C6\u7FA4\u4E2D\u7684\u7B2C\u4E09\u4E2A\u8282\u70B9(7004),\u6D4F\u89C8\u5668\u8BBF\u95EE
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>http://eureka7004:7004/
</code></pre></div><div style="text-align:center;"><div class="imgbg-customer"><img src="`+u+`" width="100%"></div></div><pre><code>\u53EF\u4EE5\u770B\u5230,\u5728\u6BCF\u4E2A\u8282\u70B9\u548C\u90FD\u548C\u5176\u4ED6\u4E24\u4E2A\u8282\u70B9\u76F8\u4E92\u6CE8\u518C,\u8FD9\u4EE3\u8868\u96C6\u7FA4\u642D\u5EFA\u6210\u529F
</code></pre>`,72);function v(y,f){const t=a("Markmap"),p=a("ScrollIntoPageView"),o=a("HideSideBar");return g(),r("div",null,[m,n(t,{localtion:"/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter3.html",height:"500rem"}),h,n(p),n(o)])}var w=i(d,[["render",v],["__file","springcloud-eureka-chapter-3.\u4F7F\u7528Eureka\u4F5C\u4E3A\u6CE8\u518C\u4E2D\u5FC3.html.vue"]]);export{w as default};
