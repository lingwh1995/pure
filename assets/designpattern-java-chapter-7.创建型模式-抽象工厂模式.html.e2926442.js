import{_ as u,o as r,c as l,a,d as o,b as t,r as s}from"./app.d4c08878.js";const k={},i=o(`<h1 id="_7-\u521B\u5EFA\u578B\u6A21\u5F0F-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-\u521B\u5EFA\u578B\u6A21\u5F0F-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 7.\u521B\u5EFA\u578B\u6A21\u5F0F-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</h1><h2 id="_7-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_7-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 7.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 7.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 7.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 7.3.\u7B80\u4ECB
 7.4.\u5E94\u7528\u573A\u666F
 7.5.\u4F18\u7F3A\u70B9
 7.6.\u89D2\u8272\u53CA\u5176\u804C\u8D23
 7.7.\u6A21\u578B
 7.8.\u793A\u4F8B
 7.9.\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_7-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_7-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/general/designpattern/designpattern-java/chapter/designpattern-java-outline5-chapter7.html" target="_blank">7.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),d=o(`<h2 id="_7-3-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_7-3-\u7B80\u4ECB" aria-hidden="true">#</a> 7.3.\u7B80\u4ECB</h2><pre><code>\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F(Abstract Factory Pattern)\u662F\u4E00\u79CD\u521B\u5EFA\u578B\u8BBE\u8BA1\u6A21\u5F0F,\u662F\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u7684\u5347\u7EA7\u7248\u672C,\u89E3\u51B3\u4E86\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u4E2D\u5DE5\u5382\u7C7B\u804C\u8D23\u592A\u91CD\u7684\u95EE\u9898,\u62BD\u8C61\u5DE5\u5382\u4E2D\u63D0\u4F9B\u4E00\u4E2A\u521B\u5EFA\u4E00\u7CFB\u5217\u76F8\u5173\u6216\u76F8\u4E92\u4F9D\u8D56\u5BF9\u8C61\u7684\u63A5\u53E3,\u8FD9\u4E2A\u63A5\u53E3\u4E2D\u5B9A\u4E49\u4E86\u521B\u5EFA\u591A\u4E2A\u4E0D\u540C\u7684\u5BF9\u8C61\u65B9\u6CD5,\u4F46\u662F\u8BA9\u8BE5\u63A5\u53E3\u7684\u5B50\u7C7B\u53BB\u5B9E\u4F8B\u5316\u5177\u4F53\u7684\u7C7B,\u628A\u5B9E\u4F8B\u5316\u5177\u4F53\u5BF9\u8C61\u7684\u8FC7\u7A0B\u5EF6\u8FDF\u5230\u4E86\u5B50\u7C7B\u4E2D\u53BB\u5B9E\u73B0\u3002\u4E0E\u5DE5\u5382\u65B9\u6CD5\u6A21\u5F0F\u4E0D\u540C\u7684\u662F,\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u4E2D\u7684\u5177\u4F53\u5DE5\u5382\u4E0D\u518D\u662F\u53EA\u80FD\u521B\u5EFA\u4E00\u79CD\u4EA7\u54C1,\u4E00\u4E2A\u5177\u4F53\u7684\u5DE5\u5382\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A\u4EA7\u54C1\u65CF\u7684\u4EA7\u54C1\u3002
</code></pre><h2 id="_7-4-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_7-4-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 7.4.\u5E94\u7528\u573A\u666F</h2><pre><code>a.\u5BA2\u6237\u7AEF(\u5E94\u7528\u5C42)\u4E0D\u4F9D\u8D56\u4E8E\u4EA7\u54C1\u7C7B\u5B9E\u4F8B\u5982\u4F55\u88AB\u521B\u5EFA\u3001\u5B9E\u73B0\u7B49\u7EC6\u8282
b.\u5F3A\u8C03\u4E00\u7CFB\u5217\u76F8\u5173\u7684\u4EA7\u54C1\u5BF9\u8C61(\u5C5E\u4E8E\u540C\u4E00\u4EA7\u54C1\u65CF)\u4E00\u8D77\u4F7F\u7528\u521B\u5EFA\u5BF9\u8C61\u9700\u8981\u5927\u91CF\u91CD\u590D\u7684\u4EE3\u7801
c.\u63D0\u4F9B\u4E00\u4E2A\u4EA7\u54C1\u7C7B\u7684\u5E93\uFF0C\u6240\u6709\u7684\u4EA7\u54C1\u4EE5\u540C\u6837\u7684\u63A5\u53E3\u51FA\u73B0\uFF0C\u4ECE\u800C\u4F7F\u5F97\u5BA2\u6237\u7AEF\u4E0D\u4F9D\u8D56\u4E8E\u5177\u4F53\u7684\u5B9E\u73B0
</code></pre><h2 id="_7-5-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_7-5-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 7.5.\u4F18\u7F3A\u70B9</h2><h3 id="_7-5-1-\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_7-5-1-\u4F18\u70B9" aria-hidden="true">#</a> 7.5.1.\u4F18\u70B9</h3><pre><code>a.\u5177\u4F53\u4EA7\u54C1\u5728\u5E94\u7528\u5C42\u7684\u4EE3\u7801\u9694\u79BB,\u65E0\u9700\u5173\u5FC3\u521B\u5EFA\u7684\u7EC6\u8282
b.\u5C06\u4E00\u4E2A\u7CFB\u5217\u7684\u4EA7\u54C1\u7EDF\u4E00\u5230\u4E00\u8D77\u521B\u5EFA
</code></pre><h3 id="_7-5-2-\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_7-5-2-\u7F3A\u70B9" aria-hidden="true">#</a> 7.5.2.\u7F3A\u70B9</h3><pre><code>a.\u5177\u4F53\u4EA7\u54C1\u5728\u5E94\u7528\u5C42\u7684\u4EE3\u7801\u9694\u79BB\uFF0C\u65E0\u9700\u5173\u7CFB\u521B\u5EFA\u7684\u7EC6\u8282
b.\u5C06\u4E00\u4E2A\u7CFB\u5217\u7684\u4EA7\u54C1\u7EDF\u4E00\u5230\u4E00\u8D77\u521B\u5EFA
</code></pre><h2 id="_7-6-\u89D2\u8272\u53CA\u5176\u804C\u8D23" tabindex="-1"><a class="header-anchor" href="#_7-6-\u89D2\u8272\u53CA\u5176\u804C\u8D23" aria-hidden="true">#</a> 7.6.\u89D2\u8272\u53CA\u5176\u804C\u8D23</h2><pre><code>AbstractFactory
\u63D0\u4F9B\u4E86\u521B\u5EFA\u4EA7\u54C1\u7684\u63A5\u53E3,\u5B83\u5305\u542B\u591A\u4E2A\u521B\u5EFA\u4EA7\u54C1\u7684\u65B9\u6CD5,\u53EF\u4EE5\u521B\u5EFA\u591A\u4E2A\u4E0D\u540C\u7B49\u7EA7\u7684\u4EA7\u54C1
ConcreteFactory
\u4E3B\u8981\u662F\u5B9E\u73B0\u62BD\u8C61\u5DE5\u5382\u4E2D\u7684\u591A\u4E2A\u62BD\u8C61\u65B9\u6CD5,\u5B8C\u6210\u5177\u4F53\u4EA7\u54C1\u7684\u521B\u5EFA
AbstractProduct
\u5B9A\u4E49\u4E86\u4EA7\u54C1\u7684\u89C4\u8303,\u63CF\u8FF0\u4E86\u4EA7\u54C1\u7684\u4E3B\u8981\u7279\u6027\u548C\u529F\u80FD,\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F\u6709\u591A\u4E2A\u62BD\u8C61\u4EA7\u54C1
ConcreteProduct
\u5B9E\u73B0\u4E86\u62BD\u8C61\u4EA7\u54C1\u89D2\u8272\u6240\u5B9A\u4E49\u7684\u63A5\u53E3,\u7531\u5177\u4F53\u5DE5\u5382\u6765\u521B\u5EFA,\u5B83\u540C\u5177\u4F53\u5DE5\u5382\u4E4B\u95F4\u662F\u591A\u5BF9\u4E00\u7684\u5173\u7CFB
</code></pre><h2 id="_7-7-\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_7-7-\u6A21\u578B" aria-hidden="true">#</a> 7.7.\u6A21\u578B</h2><h3 id="_7-7-1-\u6A21\u578B\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#_7-7-1-\u6A21\u578B\u7C7B\u56FE" aria-hidden="true">#</a> 7.7.1.\u6A21\u578B\u7C7B\u56FE</h3><pre><code>\u6A21\u578B\u7C7B\u56FE(\u6709Client)
</code></pre>`,14),P=t("pre",null,[t("code",null,`\u6A21\u578B\u7C7B\u56FE(\u65E0Client)
`)],-1),A=o(`<h3 id="_7-7-2-\u6A21\u578B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_7-7-2-\u6A21\u578B\u4EE3\u7801" aria-hidden="true">#</a> 7.7.2.\u6A21\u578B\u4EE3\u7801</h3><pre><code>ProductPart1.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part1\u90E8\u5206\u63A5\u53E3
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ProductPart1</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart1LevelA.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part1\u90E8\u5206 A\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart1LevelA</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart1</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart1-LevelA&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart1LevelB.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part1\u90E8\u5206 B\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart1LevelB</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart1</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart1-LevelB&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart1LevelC.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part1\u90E8\u5206 C\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart1LevelC</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart1</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart1-LevelC&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart2.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part2\u90E8\u5206\u63A5\u53E3
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ProductPart2</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart2LevelA.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part2\u90E8\u5206 A\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart2LevelA</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart2</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart2-LevelA&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart2LevelB.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part2\u90E8\u5206 B\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart2LevelB</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart2</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart2-LevelB&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart2LevelC.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part2\u90E8\u5206 C\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart2LevelC</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart2</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart2-LevelC&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart3.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part3\u90E8\u5206\u63A5\u53E3
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ProductPart3</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart3LevelA.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part3\u90E8\u5206 A\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart3LevelA</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart3</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart3-LevelA&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart3LevelB.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part3\u90E8\u5206 B\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart3LevelB</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart3</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart3-LevelB&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ProductPart3LevelC.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4EA7\u54C1\u7684Part3\u90E8\u5206 C\u7EA7\u522B
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductPart3LevelC</span> <span class="token keyword">implements</span> <span class="token class-name">ProductPart3</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;ProductPart3-LevelC&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>AbstractFactory.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * AbstractFactory(\u62BD\u8C61\u5DE5\u5382:\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u4EA7\u54C1\u65CF\u7684\u4EA7\u54C1)
 * ProductPart1,ProductPart2,ProductPart3\u662F\u4E00\u4E2A\u4EA7\u54C1\u65CF\u4E2D\u7684\u4E0D\u540C\u4EA7\u54C1,\u53EF\u4EE5\u7406\u89E3\u4E3A\u5982\u4E0B\u60C5\u51B5
 * a.\u6C7D\u8F66\u6848\u4F8B
 *  Product                     : \u6C7D\u8F66
 *  \u4EA7\u54C1\u65CF: \u8F6E\u80CE\u3001\u5EA7\u6905\u3001\u65B9\u5411\u76D8
 *  ProductPart1                : \u8F6E\u80CE
 *      ProductPart1LevelA      : \u7279\u65AF\u62C9\u8F6E\u80CE
 *      ProductPart1LevelB      : \u4E30\u7530\u8F6E\u80CE
 *      ProductPart1LevelC      : \u4E94\u83F1\u8F6E\u80CE
 *  ProductPart2                : \u5EA7\u6905
 *      ProductPart2LevelA      : \u7279\u65AF\u62C9\u5EA7\u6905
 *      ProductPart2LevelB      : \u4E30\u7530\u5EA7\u6905
 *      ProductPart2LevelC      : \u4E94\u83F1\u5EA7\u6905
 *  ProductPart3                : \u65B9\u5411\u76D8
 *      ProductPart3LevelA      : \u7279\u65AF\u62C9\u65B9\u5411\u76D8
 *      ProductPart3LevelB      : \u4E30\u7530\u65B9\u5411\u76D8
 *      ProductPart3LevelC      : \u4E94\u83F1\u65B9\u5411\u76D8
 * b.\u8FD0\u52A8\u670D\u88C5\u6848\u4F8B
 *  Product                     : \u4E00\u6574\u5957\u8FD0\u52A8\u670D\u88C5
 *  \u4EA7\u54C1\u65CF: \u4E0A\u8863\u3001\u88E4\u5B50\u3001\u978B\u5B50
 *  ProductPart1                : \u4E0A\u8863
 *      ProductPart1LevelA      : \u8010\u514B\u4E0A\u8863
 *      ProductPart1LevelB      : \u5B89\u8E0F\u4E0A\u8863
 *      ProductPart1LevelC      : \u7279\u4EF7\u4E0A\u8863
 *  ProductPart2                : \u88E4\u5B50
 *      ProductPart2LevelA      : \u8010\u514B\u88E4\u5B50
 *      ProductPart2LevelB      : \u5B89\u8E0F\u88E4\u5B50
 *      ProductPart2LevelC      : \u7279\u4EF7\u88E4\u5B50
 *  ProductPart3                : \u978B\u5B50
 *      ProductPart3LevelA      : \u8010\u514B\u978B\u5B50
 *      ProductPart3LevelB      : \u8010\u514B\u978B\u5B50
 *      ProductPart3LevelC      : \u8010\u514B\u978B\u5B50
 * c.\u5DE5\u5382\u6848\u4F8B
 *  Product                     : \u5DE5\u5382
 *  \u4EA7\u54C1\u65CF: \u6C7D\u8F66\u3001\u81EA\u884C\u8F66\u3001\u6469\u6258\u8F66
 *  ProductPart1                : \u6C7D\u8F66
 *      ProductPart1LevelA      : \u7279\u65AF\u62C9\u6C7D\u8F66
 *      ProductPart1LevelB      : \u957F\u5B89\u6C7D\u8F66
 *      ProductPart1LevelC      : \u5947\u745E\u6C7D\u8F66
 *  ProductPart2                : \u81EA\u884C\u8F66
 *      ProductPart2LevelA      : \u7279\u65AF\u81EA\u884C\u8F66
 *      ProductPart2LevelB      : \u957F\u5B89\u81EA\u884C\u8F66
 *      ProductPart2LevelC      : \u5947\u745E\u81EA\u884C\u8F66
 *  ProductPart3                : \u6469\u6258\u8F66
 *      ProductPart3LevelA      : \u7279\u65AF\u6469\u6258\u8F66
 *      ProductPart3LevelB      : \u957F\u5B89\u6469\u6258\u8F66
 *      ProductPart3LevelC      : \u5947\u745E\u6469\u6258\u8F66
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u901A\u8FC7\u5DE5\u5382\u65B9\u6CD5\u751F\u4EA7\u4EA7\u54C1\u7684Part1\u90E8\u5206
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">ProductPart1</span> <span class="token function">factoryMethod4ProductPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u901A\u8FC7\u5DE5\u5382\u65B9\u6CD5\u751F\u4EA7\u4EA7\u54C1\u7684Part2\u90E8\u5206
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">ProductPart2</span> <span class="token function">factoryMethod4ProductPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * \u901A\u8FC7\u5DE5\u5382\u65B9\u6CD5\u751F\u4EA7\u4EA7\u54C1\u7684Part3\u90E8\u5206
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">ProductPart3</span> <span class="token function">factoryMethod4ProductPart3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>ConcreteFactoryLevelA.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ConcreteFactoryLevelA(\u751F\u4EA7A\u7EA7\u522BProduct\u7684\u5DE5\u5382)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactoryLevelA</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart1</span> <span class="token function">factoryMethod4ProductPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart1LevelA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart2</span> <span class="token function">factoryMethod4ProductPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart2LevelA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart3</span> <span class="token function">factoryMethod4ProductPart3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart3LevelA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ConcreteFactoryLevelB.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ConcreteFactoryLevelB(\u751F\u4EA7B\u7EA7\u522BProduct\u7684\u5DE5\u5382)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactoryLevelB</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart1</span> <span class="token function">factoryMethod4ProductPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart1LevelB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart2</span> <span class="token function">factoryMethod4ProductPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart2LevelB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart3</span> <span class="token function">factoryMethod4ProductPart3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart3LevelB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ConcreteFactoryLevelC.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ConcreteFactoryLevelC(\u751F\u4EA7C\u7EA7\u522BProduct\u7684\u5DE5\u5382)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteFactoryLevelC</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractFactory</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart1</span> <span class="token function">factoryMethod4ProductPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart1LevelC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart2</span> <span class="token function">factoryMethod4ProductPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart2LevelC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">ProductPart3</span> <span class="token function">factoryMethod4ProductPart3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ProductPart3LevelC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>Client.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u5BA2\u6237\u7AEF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AbstractFactory</span> concreteFactoryLevelA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFactoryLevelA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart1</span> productPart1LevelA <span class="token operator">=</span> concreteFactoryLevelA<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart2</span> productPart2LevelA <span class="token operator">=</span> concreteFactoryLevelA<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart3</span> productPart3LevelA <span class="token operator">=</span> concreteFactoryLevelA<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;productLevelA: &quot;</span> <span class="token operator">+</span> productPart1LevelA <span class="token operator">+</span><span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> productPart2LevelA <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> productPart3LevelA<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AbstractFactory</span> concreteFactoryLevelB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFactoryLevelB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart1</span> productPart1LevelB <span class="token operator">=</span> concreteFactoryLevelB<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart2</span> productPart2LevelB <span class="token operator">=</span> concreteFactoryLevelB<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart3</span> productPart3LevelB <span class="token operator">=</span> concreteFactoryLevelB<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;productLevelB: &quot;</span> <span class="token operator">+</span> productPart1LevelB <span class="token operator">+</span><span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> productPart2LevelB <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> productPart3LevelB<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AbstractFactory</span> concreteFactoryLevelC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteFactoryLevelC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart1</span> productPart1LevelC <span class="token operator">=</span> concreteFactoryLevelC<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart2</span> productPart2LevelC <span class="token operator">=</span> concreteFactoryLevelC<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ProductPart3</span> productPart3LevelC <span class="token operator">=</span> concreteFactoryLevelC<span class="token punctuation">.</span><span class="token function">factoryMethod4ProductPart3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;productLevelC: &quot;</span> <span class="token operator">+</span> productPart1LevelC <span class="token operator">+</span><span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> productPart2LevelC <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> productPart3LevelC<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_7-8-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_7-8-\u793A\u4F8B" aria-hidden="true">#</a> 7.8.\u793A\u4F8B</h2><h3 id="_7-8-1-\u4E0D\u4F7F\u7528\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-8-1-\u4E0D\u4F7F\u7528\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 7.8.1.\u4E0D\u4F7F\u7528\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</h3><h3 id="_7-8-2-\u4F7F\u7528\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_7-8-2-\u4F7F\u7528\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 7.8.2.\u4F7F\u7528\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F</h3><pre><code>\u7C7B\u56FE(\u6709Client)
</code></pre>`,39),y=t("pre",null,[t("code",null,`\u7C7B\u56FE(\u65E0Client)
`)],-1),v=o(`<pre><code>\u4EE3\u7801
AbstractClothesProduceFactory.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u670D\u88C5\u5DE5\u5382
 * <span class="token keyword">@author</span> lingwh
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractClothesProduceFactory</span> <span class="token punctuation">{</span>
	
	<span class="token comment">//\u751F\u4EA7\u5E3D\u5B50</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">AbstractHat</span> <span class="token function">produceHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//\u751F\u4EA7\u5939\u514B\u886B</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">AbstractJacket</span> <span class="token function">produceJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//\u751F\u4EA7\u88E4\u5B50</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">AbstractTrousers</span> <span class="token function">produceTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">//\u751F\u4EA7\u978B\u5B50</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token class-name">AbstractShoes</span> <span class="token function">produceShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>AdidasClothesProduceFactory.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdidasClothesProduceFactory</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractClothesProduceFactory</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractHat</span> <span class="token function">produceHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AdidasHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractJacket</span> <span class="token function">produceJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AdidasJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractTrousers</span> <span class="token function">produceTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AdidasTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractShoes</span> <span class="token function">produceShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">AdidasShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>NikeClothesProduceFactory.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NikeClothesProduceFactory</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractClothesProduceFactory</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractHat</span> <span class="token function">produceHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NikeHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractJacket</span> <span class="token function">produceJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NikeJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractTrousers</span> <span class="token function">produceTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NikeTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractShoes</span> <span class="token function">produceShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">NikeShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>PumaClothesProduceFactory.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PumaClothesProduceFactory</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractClothesProduceFactory</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractHat</span> <span class="token function">produceHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PumaHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractJacket</span> <span class="token function">produceJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PumaJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractTrousers</span> <span class="token function">produceTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PumaTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">AbstractShoes</span> <span class="token function">produceShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PumaShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>AbstractHat.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractHat</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>AdidasHat.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdidasHat</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHat</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adidas Hat produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>NikeHat.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NikeHat</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHat</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Nike Hat produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>PumaHat.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PumaHat</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHat</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Puma Hat produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>AbstractJacket.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractJacket</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>AdidasJacket.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdidasJacket</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractJacket</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adidas Jacket produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>NikeJacket.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NikeJacket</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractJacket</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Nike Jacket produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>PumaJacket.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PumaJacket</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractJacket</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Puma Jacket produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>AbstractShoes.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractShoes</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>AdidasShoes.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdidasShoes</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractShoes</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adidas Shoes produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>NikeShoes.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NikeShoes</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractShoes</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Nike Shoes produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>PumaShoes.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PumaShoes</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractShoes</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Puma Shoes produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>AbstractTrousers.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractTrousers</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>AdidasTrousers.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AdidasTrousers</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTrousers</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Adidas Trousers produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>NikeTrousers.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NikeTrousers</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTrousers</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Nike Trousers produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>PumaTrousers.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PumaTrousers</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractTrousers</span> <span class="token punctuation">{</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Puma Trousers produce ok...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><pre><code>Client.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>abstractfactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
	
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">//Adidas\u5DE5\u5382</span>
		<span class="token class-name">AbstractClothesProduceFactory</span> adidasClothesFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdidasClothesProduceFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractHat</span> adidasHat <span class="token operator">=</span> adidasClothesFactory<span class="token punctuation">.</span><span class="token function">produceHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractJacket</span> adidasJacket <span class="token operator">=</span> adidasClothesFactory<span class="token punctuation">.</span><span class="token function">produceJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractTrousers</span> adidasTrousers <span class="token operator">=</span> adidasClothesFactory<span class="token punctuation">.</span><span class="token function">produceTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractShoes</span> adidasShoes <span class="token operator">=</span> adidasClothesFactory<span class="token punctuation">.</span><span class="token function">produceShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		adidasHat<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		adidasJacket<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		adidasTrousers<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		adidasShoes<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//Nike\u5DE5\u5382</span>
		<span class="token class-name">AbstractClothesProduceFactory</span> nikeClothesFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NikeClothesProduceFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractHat</span> nikeHat <span class="token operator">=</span> nikeClothesFactory<span class="token punctuation">.</span><span class="token function">produceHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractJacket</span> nikeJacket <span class="token operator">=</span> nikeClothesFactory<span class="token punctuation">.</span><span class="token function">produceJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractTrousers</span> nikeTrousers <span class="token operator">=</span> nikeClothesFactory<span class="token punctuation">.</span><span class="token function">produceTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractShoes</span> nikeShoes <span class="token operator">=</span> nikeClothesFactory<span class="token punctuation">.</span><span class="token function">produceShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		nikeHat<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		nikeJacket<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		nikeTrousers<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		nikeShoes<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;-------------------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//Puma\u5DE5\u5382</span>
		<span class="token class-name">AbstractClothesProduceFactory</span> pumaClothesFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PumaClothesProduceFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractHat</span> pumaHat <span class="token operator">=</span> pumaClothesFactory<span class="token punctuation">.</span><span class="token function">produceHat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractJacket</span> pumaJacket <span class="token operator">=</span> pumaClothesFactory<span class="token punctuation">.</span><span class="token function">produceJacket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractTrousers</span> pumaTrousers <span class="token operator">=</span> pumaClothesFactory<span class="token punctuation">.</span><span class="token function">produceTrousers</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">AbstractShoes</span> pumaShoes <span class="token operator">=</span> pumaClothesFactory<span class="token punctuation">.</span><span class="token function">produceShoes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pumaHat<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pumaJacket<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pumaTrousers<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pumaShoes<span class="token punctuation">.</span><span class="token function">produce</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_7-9-\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_7-9-\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> 7.9.\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528</h2>`,43);function m(C,b){const p=s("Markmap"),n=s("Mermaid"),c=s("ScrollIntoPageView"),e=s("HideSideBar");return r(),l("div",null,[i,a(p,{localtion:"/enhance/markmap/general/designpattern/designpattern-java/chapter/designpattern-java-outline5-chapter7.html",height:"500rem"}),d,a(n,{id:"mermaid-382ee1a3",code:"classDiagram%0A%20%20%20%20Client%20..%3E%20ProductPart1LevelA%0A%20%20%20%20Client%20..%3E%20ProductPart1LevelB%0A%20%20%20%20Client%20..%3E%20ProductPart1LevelC%0A%20%20%20%20Client%20..%3E%20ProductPart2LevelA%0A%20%20%20%20Client%20..%3E%20ProductPart2LevelB%0A%20%20%20%20Client%20..%3E%20ProductPart2LevelC%0A%20%20%20%20Client%20..%3E%20ProductPart3LevelA%0A%20%20%20%20Client%20..%3E%20ProductPart3LevelB%0A%20%20%20%20Client%20..%3E%20ProductPart3LevelC%0A%20%20%20%20Client%20..%3E%20ConcreteFactoryLevelA%0A%20%20%20%20Client%20..%3E%20ConcreteFactoryLevelB%0A%20%20%20%20Client%20..%3E%20ConcreteFactoryLevelC%0A%20%20%20%20ProductPart1%20%3C%7C..%20ProductPart1LevelA%0A%20%20%20%20ProductPart1%20%3C%7C..%20ProductPart1LevelB%0A%20%20%20%20ProductPart1%20%3C%7C..%20ProductPart1LevelC%0A%20%20%20%20ProductPart2%20%3C%7C..%20ProductPart2LevelA%0A%20%20%20%20ProductPart2%20%3C%7C..%20ProductPart2LevelB%0A%20%20%20%20ProductPart2%20%3C%7C..%20ProductPart2LevelC%0A%20%20%20%20ProductPart3%20%3C%7C..%20ProductPart3LevelA%0A%20%20%20%20ProductPart3%20%3C%7C..%20ProductPart3LevelB%0A%20%20%20%20ProductPart3%20%3C%7C..%20ProductPart3LevelC%0A%20%20%20%20AbstractFactory%20%3C%7C..%20ConcreteFactoryLevelA%0A%20%20%20%20AbstractFactory%20%3C%7C..%20ConcreteFactoryLevelB%0A%20%20%20%20AbstractFactory%20%3C%7C..%20ConcreteFactoryLevelC%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart1%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart2%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart3%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart1LevelA%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart2LevelA%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart3LevelA%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart1%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart2%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart3%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart1LevelB%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart2LevelB%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart3LevelB%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart1%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart2%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart3%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart1LevelC%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart2LevelC%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart3LevelC%0A%20%20%20%20class%20ProductPart1%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart1LevelA%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart1LevelB%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart1LevelC%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart2%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart2LevelA%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart2LevelB%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart2LevelC%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart3%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart3LevelA%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart3LevelB%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart3LevelC%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractFactory%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart1()*%20ProductPart1%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart2()*%20ProductPart2%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart3()*%20ProductPart3%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteFactoryLevelA%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart1()%20ProductPart1%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart2()%20ProductPart2%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart3()%20ProductPart3%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteFactoryLevelB%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart1()%20ProductPart1%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart2()%20ProductPart2%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart3()%20ProductPart3%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteFactoryLevelC%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart1()%20ProductPart1%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart2()%20ProductPart2%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart3()%20ProductPart3%0A%20%20%20%20%7D%0A%20%20%20%20class%20Client%20%7B%0A%20%20%20%20%20%20%20%20%2Bfun%20void%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cinterface%3E%3E%20ProductPart1%0A%20%20%20%20%3C%3Cinterface%3E%3E%20ProductPart2%0A%20%20%20%20%3C%3Cinterface%3E%3E%20ProductPart3%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractFactory%0A"}),P,a(n,{id:"mermaid-382ee1a5",code:"classDiagram%0A%20%20%20%20ProductPart1%20%3C%7C..%20ProductPart1LevelA%0A%20%20%20%20ProductPart1%20%3C%7C..%20ProductPart1LevelB%0A%20%20%20%20ProductPart1%20%3C%7C..%20ProductPart1LevelC%0A%20%20%20%20ProductPart2%20%3C%7C..%20ProductPart2LevelA%0A%20%20%20%20ProductPart2%20%3C%7C..%20ProductPart2LevelB%0A%20%20%20%20ProductPart2%20%3C%7C..%20ProductPart2LevelC%0A%20%20%20%20ProductPart3%20%3C%7C..%20ProductPart3LevelA%0A%20%20%20%20ProductPart3%20%3C%7C..%20ProductPart3LevelB%0A%20%20%20%20ProductPart3%20%3C%7C..%20ProductPart3LevelC%0A%20%20%20%20AbstractFactory%20%3C%7C..%20ConcreteFactoryLevelA%0A%20%20%20%20AbstractFactory%20%3C%7C..%20ConcreteFactoryLevelB%0A%20%20%20%20AbstractFactory%20%3C%7C..%20ConcreteFactoryLevelC%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart1%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart2%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart3%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart1LevelA%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart2LevelA%0A%20%20%20%20ConcreteFactoryLevelA%20..%3E%20ProductPart3LevelA%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart1%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart2%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart3%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart1LevelB%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart2LevelB%0A%20%20%20%20ConcreteFactoryLevelB%20..%3E%20ProductPart3LevelB%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart1%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart2%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart3%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart1LevelC%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart2LevelC%0A%20%20%20%20ConcreteFactoryLevelC%20..%3E%20ProductPart3LevelC%0A%20%20%20%20class%20ProductPart1%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart1LevelA%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart1LevelB%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart1LevelC%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart2%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart2LevelA%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart2LevelB%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart2LevelC%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart3%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart3LevelA%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart3LevelB%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ProductPart3LevelC%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractFactory%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart1()*%20ProductPart1%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart2()*%20ProductPart2%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart3()*%20ProductPart3%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteFactoryLevelA%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart1()%20ProductPart1%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart2()%20ProductPart2%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart3()%20ProductPart3%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteFactoryLevelB%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart1()%20ProductPart1%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart2()%20ProductPart2%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart3()%20ProductPart3%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteFactoryLevelC%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart1()%20ProductPart1%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart2()%20ProductPart2%0A%20%20%20%20%20%20%20%20%2BfactoryMethod4ProductPart3()%20ProductPart3%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cinterface%3E%3E%20ProductPart1%0A%20%20%20%20%3C%3Cinterface%3E%3E%20ProductPart2%0A%20%20%20%20%3C%3Cinterface%3E%3E%20ProductPart3%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractFactory%0A"}),A,a(n,{id:"mermaid-382ee23e",code:"classDiagram%0A%20%20%20%20Client%20..%3E%20AbstractClothesProduceFactory%0A%20%20%20%20Client%20..%3E%20AdidasClothesProduceFactory%0A%20%20%20%20Client%20..%3E%20NikeClothesProduceFactory%0A%20%20%20%20Client%20..%3E%20PumaClothesProduceFactory%0A%20%20%20%20Client%20..%3E%20AbstractHat%0A%20%20%20%20Client%20..%3E%20AdidasHat%0A%20%20%20%20Client%20..%3E%20NikeHat%0A%20%20%20%20Client%20..%3E%20PumaHat%0A%20%20%20%20Client%20..%3E%20AbstractJacket%0A%20%20%20%20Client%20..%3E%20AdidasJacket%0A%20%20%20%20Client%20..%3E%20NikeJacket%0A%20%20%20%20Client%20..%3E%20PumaJacket%0A%20%20%20%20Client%20..%3E%20AbstractShoes%0A%20%20%20%20Client%20..%3E%20AdidasShoes%0A%20%20%20%20Client%20..%3E%20NikeShoes%0A%20%20%20%20Client%20..%3E%20PumaShoes%0A%20%20%20%20Client%20..%3E%20AbstractTrousers%0A%20%20%20%20Client%20..%3E%20AdidasTrousers%0A%20%20%20%20Client%20..%3E%20NikeTrousers%0A%20%20%20%20Client%20..%3E%20PumaTrousers%0A%20%20%20%20AbstractHat%20%3C%7C..%20AdidasHat%0A%20%20%20%20AbstractHat%20%3C%7C..%20NikeHat%0A%20%20%20%20AbstractHat%20%3C%7C..%20PumaHat%0A%20%20%20%20AbstractJacket%20%3C%7C..%20AdidasJacket%0A%20%20%20%20AbstractJacket%20%3C%7C..%20NikeJacket%0A%20%20%20%20AbstractJacket%20%3C%7C..%20PumaJacket%0A%20%20%20%20AbstractShoes%20%3C%7C..%20AdidasShoes%0A%20%20%20%20AbstractShoes%20%3C%7C..%20NikeShoes%0A%20%20%20%20AbstractShoes%20%3C%7C..%20PumaShoes%0A%20%20%20%20AbstractTrousers%20%3C%7C..%20AdidasTrousers%0A%20%20%20%20AbstractTrousers%20%3C%7C..%20NikeTrousers%0A%20%20%20%20AbstractTrousers%20%3C%7C..%20PumaTrousers%0A%20%20%20%20AbstractClothesProduceFactory%20%3C%7C..%20AdidasClothesProduceFactory%0A%20%20%20%20AbstractClothesProduceFactory%20%3C%7C..%20NikeClothesProduceFactory%0A%20%20%20%20AbstractClothesProduceFactory%20%3C%7C..%20PumaClothesProduceFactory%0A%20%20%20%20AdidasClothesProduceFactory%20..%3E%20AdidasHat%0A%20%20%20%20AdidasClothesProduceFactory%20..%3E%20AdidasJacket%0A%20%20%20%20AdidasClothesProduceFactory%20..%3E%20AdidasShoes%0A%20%20%20%20AdidasClothesProduceFactory%20..%3E%20AdidasTrousers%0A%20%20%20%20NikeClothesProduceFactory%20..%3E%20NikeHat%0A%20%20%20%20NikeClothesProduceFactory%20..%3E%20NikeJacket%0A%20%20%20%20NikeClothesProduceFactory%20..%3E%20NikeShoes%0A%20%20%20%20NikeClothesProduceFactory%20..%3E%20NikeTrousers%0A%20%20%20%20PumaClothesProduceFactory%20..%3E%20PumaHat%0A%20%20%20%20PumaClothesProduceFactory%20..%3E%20PumaJacket%0A%20%20%20%20PumaClothesProduceFactory%20..%3E%20PumaShoes%0A%20%20%20%20PumaClothesProduceFactory%20..%3E%20PumaTrousers%0A%20%20%20%20class%20AbstractHat%20%7B%0A%09%20%20%20%20%2Bproduce()*%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasHat%20%7B%0A%20%20%20%20%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeHat%20%7B%0A%20%20%20%20%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaHat%20%7B%0A%20%20%20%20%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractJacket%20%7B%0A%09%20%20%20%20%2Bproduce()*%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasJacket%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeJacket%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaJacket%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractShoes%20%7B%0A%09%20%20%20%20%2Bproduce()*%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasShoes%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeShoes%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaShoes%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractTrousers%20%7B%0A%09%20%20%20%20%2Bproduce()*%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasTrousers%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeTrousers%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaTrousers%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractClothesProduceFactory%20%7B%0A%09%20%20%20%20%2BproduceHat()*%20AbstractHat%0A%09%20%20%20%20%2BproduceJacket()*%20AbstractJacket%0A%09%20%20%20%20%2BproduceTrousers()*%20AbstractTrousers%0A%09%20%20%20%20%2BproduceShoes()*%20AbstractShoes%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasClothesProduceFactory%20%7B%0A%09%20%20%20%20%2BproduceHat()%20AbstractHat%0A%09%20%20%20%20%2BproduceJacket()%20AbstractJacket%0A%09%20%20%20%20%2BproduceTrousers()%20AbstractTrousers%0A%09%20%20%20%20%2BproduceShoes()%20AbstractShoes%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeClothesProduceFactory%20%7B%0A%09%20%20%20%20%2BproduceHat()%20AbstractHat%0A%09%20%20%20%20%2BproduceJacket()%20AbstractJacket%0A%09%20%20%20%20%2BproduceTrousers()%20AbstractTrousers%0A%09%20%20%20%20%2BproduceShoes()%20AbstractShoes%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaClothesProduceFactory%20%7B%0A%09%20%20%20%20%2BproduceHat()%20AbstractHat%0A%09%20%20%20%20%2BproduceJacket()%20AbstractJacket%0A%09%20%20%20%20%2BproduceTrousers()%20AbstractTrousers%0A%09%20%20%20%20%2BproduceShoes()%20AbstractShoes%0A%20%20%20%20%7D%0A%20%20%20%20class%20Client%20%7B%0A%20%20%20%20%20%20%20%20%2Bfun()%20void%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractHat%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractJacket%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractShoes%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractTrousers%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractClothesProduceFactory%0A"}),y,a(n,{id:"mermaid-382ee240",code:"classDiagram%0A%20%20%20%20AbstractHat%20%3C%7C..%20AdidasHat%0A%20%20%20%20AbstractHat%20%3C%7C..%20NikeHat%0A%20%20%20%20AbstractHat%20%3C%7C..%20PumaHat%0A%20%20%20%20AbstractJacket%20%3C%7C..%20AdidasJacket%0A%20%20%20%20AbstractJacket%20%3C%7C..%20NikeJacket%0A%20%20%20%20AbstractJacket%20%3C%7C..%20PumaJacket%0A%20%20%20%20AbstractShoes%20%3C%7C..%20AdidasShoes%0A%20%20%20%20AbstractShoes%20%3C%7C..%20NikeShoes%0A%20%20%20%20AbstractShoes%20%3C%7C..%20PumaShoes%0A%20%20%20%20AbstractTrousers%20%3C%7C..%20AdidasTrousers%0A%20%20%20%20AbstractTrousers%20%3C%7C..%20NikeTrousers%0A%20%20%20%20AbstractTrousers%20%3C%7C..%20PumaTrousers%0A%20%20%20%20AbstractClothesProduceFactory%20%3C%7C..%20AdidasClothesProduceFactory%0A%20%20%20%20AbstractClothesProduceFactory%20%3C%7C..%20NikeClothesProduceFactory%0A%20%20%20%20AbstractClothesProduceFactory%20%3C%7C..%20PumaClothesProduceFactory%0A%20%20%20%20AdidasClothesProduceFactory%20..%3E%20AdidasHat%0A%20%20%20%20AdidasClothesProduceFactory%20..%3E%20AdidasJacket%0A%20%20%20%20AdidasClothesProduceFactory%20..%3E%20AdidasShoes%0A%20%20%20%20AdidasClothesProduceFactory%20..%3E%20AdidasTrousers%0A%20%20%20%20NikeClothesProduceFactory%20..%3E%20NikeHat%0A%20%20%20%20NikeClothesProduceFactory%20..%3E%20NikeJacket%0A%20%20%20%20NikeClothesProduceFactory%20..%3E%20NikeShoes%0A%20%20%20%20NikeClothesProduceFactory%20..%3E%20NikeTrousers%0A%20%20%20%20PumaClothesProduceFactory%20..%3E%20PumaHat%0A%20%20%20%20PumaClothesProduceFactory%20..%3E%20PumaJacket%0A%20%20%20%20PumaClothesProduceFactory%20..%3E%20PumaShoes%0A%20%20%20%20PumaClothesProduceFactory%20..%3E%20PumaTrousers%0A%20%20%20%20class%20AbstractHat%20%7B%0A%09%20%20%20%20%2Bproduce()*%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasHat%20%7B%0A%20%20%20%20%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeHat%20%7B%0A%20%20%20%20%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaHat%20%7B%0A%20%20%20%20%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractJacket%20%7B%0A%09%20%20%20%20%2Bproduce()*%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasJacket%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeJacket%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaJacket%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractShoes%20%7B%0A%09%20%20%20%20%2Bproduce()*%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasShoes%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeShoes%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaShoes%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractTrousers%20%7B%0A%09%20%20%20%20%2Bproduce()*%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasTrousers%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeTrousers%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaTrousers%20%7B%0A%09%20%20%20%20%2Bproduce()%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20AbstractClothesProduceFactory%20%7B%0A%09%20%20%20%20%2BproduceHat()*%20AbstractHat%0A%09%20%20%20%20%2BproduceJacket()*%20AbstractJacket%0A%09%20%20%20%20%2BproduceTrousers()*%20AbstractTrousers%0A%09%20%20%20%20%2BproduceShoes()*%20AbstractShoes%0A%20%20%20%20%7D%0A%20%20%20%20class%20AdidasClothesProduceFactory%20%7B%0A%09%20%20%20%20%2BproduceHat()%20AbstractHat%0A%09%20%20%20%20%2BproduceJacket()%20AbstractJacket%0A%09%20%20%20%20%2BproduceTrousers()%20AbstractTrousers%0A%09%20%20%20%20%2BproduceShoes()%20AbstractShoes%0A%20%20%20%20%7D%0A%20%20%20%20class%20NikeClothesProduceFactory%20%7B%0A%09%20%20%20%20%2BproduceHat()%20AbstractHat%0A%09%20%20%20%20%2BproduceJacket()%20AbstractJacket%0A%09%20%20%20%20%2BproduceTrousers()%20AbstractTrousers%0A%09%20%20%20%20%2BproduceShoes()%20AbstractShoes%0A%20%20%20%20%7D%0A%20%20%20%20class%20PumaClothesProduceFactory%20%7B%0A%09%20%20%20%20%2BproduceHat()%20AbstractHat%0A%09%20%20%20%20%2BproduceJacket()%20AbstractJacket%0A%09%20%20%20%20%2BproduceTrousers()%20AbstractTrousers%0A%09%20%20%20%20%2BproduceShoes()%20AbstractShoes%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractHat%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractJacket%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractShoes%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractTrousers%0A%20%20%20%20%3C%3Cabstract%3E%3E%20AbstractClothesProduceFactory%0A"}),v,a(c),a(e)])}var h=u(k,[["render",m],["__file","designpattern-java-chapter-7.\u521B\u5EFA\u578B\u6A21\u5F0F-\u62BD\u8C61\u5DE5\u5382\u6A21\u5F0F.html.vue"]]);export{h as default};
