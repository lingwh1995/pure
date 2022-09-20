import{_ as u,o as l,c as i,a as n,d as t,b as s,r as p}from"./app.d4c08878.js";const k={},r=t(`<h1 id="_5-\u521B\u5EFA\u578B\u6A21\u5F0F-\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F-gof\u4E4B\u5916" tabindex="-1"><a class="header-anchor" href="#_5-\u521B\u5EFA\u578B\u6A21\u5F0F-\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F-gof\u4E4B\u5916" aria-hidden="true">#</a> 5.\u521B\u5EFA\u578B\u6A21\u5F0F-\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F(Gof\u4E4B\u5916)</h1><h2 id="_5-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_5-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 5.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 5.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 5.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 5.3.\u7B80\u4ECB
 5.4.\u5E94\u7528\u573A\u666F
 5.5.\u4F18\u7F3A\u70B9
 5.6.\u89D2\u8272\u53CA\u5176\u804C\u8D23
 5.7.\u6A21\u578B
 5.8.\u793A\u4F8B
 5.9.\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528
 5.9.1.\u5728JDK\u4E2D\u7684\u5E94\u7528
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_5-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_5-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/general/designpattern/designpattern-java/chapter/designpattern-java-outline5-chapter5.html" target="_blank">5.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),d=t(`<h2 id="_5-3-\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_5-3-\u7B80\u4ECB" aria-hidden="true">#</a> 5.3.\u7B80\u4ECB</h2><pre><code>\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F(SimpleFactory Pattern)\u662F\u4E00\u79CD\u521B\u5EFA\u578B\u8BBE\u8BA1\u6A21\u5F0F,\u662F\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u6700\u4E3A\u5E38\u89C1\u7684\u6A21\u5F0F\u4E4B\u4E00,\u4F46\u662F\u4E0D\u662FGof\u63D0\u51FA\u768423\u4E2D\u8BBE\u8BA1\u6A21\u5F0F\u4E2D\u7684\u4E00\u79CD,\u66F4\u50CF\u662F\u4E00\u79CD\u7F16\u7A0B\u4E60\u60EF\u3002\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u662F\u9690\u85CF\u5BF9\u8C61\u7684\u5B9E\u4F8B\u5316\u8FC7\u7A0B,\u5BF9\u5916\u90E8\u63D0\u4F9B\u4E00\u4E2A\u83B7\u53D6\u5BF9\u8C61\u7684\u65B9\u6CD5,\u53EF\u4EE5\u6839\u636E\u53C2\u6570\u83B7\u53D6\u4E0D\u540C\u7C7B\u578B\u7684\u5BF9\u8C61,\u662F\u5DE5\u5382\u6A21\u5F0F\u5BB6\u65CF\u4E2D\u6700\u7B80\u5355\u5B9E\u7528\u7684\u6A21\u5F0F,\u53EF\u4EE5\u7406\u89E3\u4E3A\u662F\u4E0D\u540C\u5DE5\u5382\u6A21\u5F0F\u7684\u4E00\u4E2A\u7279\u6B8A\u5B9E\u73B0\u3002
</code></pre><h2 id="_5-4-\u5E94\u7528\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#_5-4-\u5E94\u7528\u573A\u666F" aria-hidden="true">#</a> 5.4.\u5E94\u7528\u573A\u666F</h2><pre><code>a.\u5BA2\u6237\u7AEF\u5982\u679C\u53EA\u77E5\u9053\u4F20\u5165\u5DE5\u5382\u7C7B\u5F97\u53C2\u6570,\u5BF9\u4E8E\u5982\u4F55\u521B\u5EFA\u5BF9\u8C61\u5F97\u903B\u8F91\u4E0D\u5173\u5FC3\u65F6
b.\u5BA2\u6237\u7AEF\u65E2\u4E0D\u9700\u8981\u5173\u5FC3\u521B\u5EFA\u7EC6\u8282,\u751A\u81F3\u8FDE\u7C7B\u540D\u90FD\u4E0D\u9700\u8981\u8BB0\u4F4F,\u53EA\u9700\u8981\u77E5\u9053\u7C7B\u578B\u6240\u5BF9\u5E94\u5F97\u53C2\u6570
c.\u5DE5\u5382\u8D1F\u8D23\u521B\u5EFA\u7684\u7C7B\u5C11,\u540C\u65F6\u7CFB\u7EDF\u4E2D\u9700\u8981\u7684new\u5BF9\u8C61\u8F83\u591A\u800C\u4E14\u590D\u6742\u65F6\u53EF\u4EE5\u4F7F\u7528,\u8FD9\u6837\u4E00\u65B9\u9762\u4E0D\u4F1A\u9020\u6210\u5DE5\u5382\u65B9\u6CD5\u4E2D\u5F97\u4E1A\u52A1\u903B\u8F91\u592A\u8FC7\u590D\u6742,\u53E6\u4E00\u65B9\u9762\u5728\u4F7F\u7528\u65F6\u4E0D\u7528\u4E00\u76F4new,\u76F4\u63A5\u4ECE\u5DE5\u5382\u4E2D\u83B7\u53D6\u5373\u53EF
</code></pre><h2 id="_5-5-\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_5-5-\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> 5.5.\u4F18\u7F3A\u70B9</h2><h3 id="_5-5-1-\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#_5-5-1-\u4F18\u70B9" aria-hidden="true">#</a> 5.5.1.\u4F18\u70B9</h3><pre><code>a.\u5C4F\u853D\u4E86\u5177\u4F53\u7684\u521B\u5EFA\u903B\u8F91,\u5BA2\u6237\u7AEF\u53EA\u9700\u8981\u8981\u4F20\u5165\u4E00\u4E2A\u53C2\u6570\u5373\u53EF\u83B7\u53D6\u76F8\u5E94\u7684\u7ED3\u679C,\u5728\u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7B80\u5316\u4E86\u5BF9\u8C61\u7684\u521B\u5EFA\u8FC7\u7A0B
b.\u5C06\u5B9E\u4F8B\u521B\u5EFA\u8FC7\u7A0B\u548C\u4F7F\u7528\u8FC7\u7A0B\u5206\u79BB\u5F00\u6765,\u5B9E\u73B0\u4E86\u89E3\u8026
</code></pre><h3 id="_5-5-2-\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#_5-5-2-\u7F3A\u70B9" aria-hidden="true">#</a> 5.5.2.\u7F3A\u70B9</h3><pre><code>a.\u5DE5\u5382\u7C7B\u96C6\u4E2D\u4E86\u6240\u6709\u5B9E\u4F8B(\u4EA7\u54C1)\u7684\u521B\u5EFA\u903B\u8F91,\u4E00\u65E6\u8FD9\u4E2A\u5DE5\u5382\u4E0D\u80FD\u6B63\u5E38\u5DE5\u4F5C,\u6574\u4E2A\u7CFB\u7EDF\u90FD\u4F1A\u53D7\u5230\u5F71\u54CD
b.\u8FDD\u80CCOCP\u539F\u5219,\u4E00\u65E6\u6DFB\u52A0\u65B0\u4EA7\u54C1\u5C31\u4E0D\u5F97\u4E0D\u4FEE\u6539\u5DE5\u5382\u7C7B\u5F97\u903B\u8F91,\u8FD9\u6837\u5C31\u4F1A\u9020\u6210\u5DE5\u5382\u903B\u8F91\u8FC7\u4E8E\u590D\u6742
c.\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u7531\u4E8E\u4F7F\u7528\u4E86\u9759\u6001\u5DE5\u5382\u65B9\u6CD5,\u9759\u6001\u65B9\u6CD5\u4E0D\u80FD\u88AB\u7EE7\u627F\u548C\u91CD\u5199,\u4F1A\u9020\u6210\u5DE5\u5382\u89D2\u8272\u65E0\u6CD5\u5F62\u6210\u57FA\u4E8E\u7EE7\u627F\u7684\u7B49\u7EA7\u7ED3\u6784
</code></pre><h2 id="_5-6-\u89D2\u8272\u53CA\u5176\u804C\u8D23" tabindex="-1"><a class="header-anchor" href="#_5-6-\u89D2\u8272\u53CA\u5176\u804C\u8D23" aria-hidden="true">#</a> 5.6.\u89D2\u8272\u53CA\u5176\u804C\u8D23</h2><pre><code>Factory(\u5DE5\u5382)
\u6838\u5FC3\u90E8\u5206,\u8D1F\u8D23\u5B9E\u73B0\u521B\u5EFA\u6240\u6709\u4EA7\u54C1\u7684\u5185\u90E8\u903B\u8F91,\u5DE5\u5382\u7C7B\u53EF\u4EE5\u88AB\u5916\u754C\u76F4\u63A5\u8C03\u7528,\u521B\u5EFA\u6240\u9700\u5BF9\u8C61
Product(\u62BD\u8C61\u7C7B\u4EA7\u54C1)
\u5DE5\u5382\u7C7B\u6240\u521B\u5EFA\u7684\u6240\u6709\u5BF9\u8C61\u7684\u7236\u7C7B,\u5C01\u88C5\u4E86\u4EA7\u54C1\u5BF9\u8C61\u7684\u516C\u5171\u65B9\u6CD5,\u6240\u6709\u7684\u5177\u4F53\u4EA7\u54C1\u4E3A\u5176\u5B50\u7C7B\u5BF9\u8C61
ConcreteProduct(\u5177\u4F53\u4EA7\u54C1)
\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u7684\u521B\u5EFA\u76EE\u6807,\u6240\u6709\u88AB\u521B\u5EFA\u7684\u5BF9\u8C61\u90FD\u662F\u67D0\u4E2A\u5177\u4F53\u7C7B\u7684\u5B9E\u4F8B,\u5B83\u8981\u5B9E\u73B0\u62BD\u8C61\u4EA7\u54C1\u4E2D\u58F0\u660E\u7684\u62BD\u8C61\u65B9\u6CD5(\u6709\u5173\u62BD\u8C61\u7C7B)
</code></pre><h2 id="_5-7-\u6A21\u578B" tabindex="-1"><a class="header-anchor" href="#_5-7-\u6A21\u578B" aria-hidden="true">#</a> 5.7.\u6A21\u578B</h2><h3 id="_5-7-1-\u6A21\u578B\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#_5-7-1-\u6A21\u578B\u7C7B\u56FE" aria-hidden="true">#</a> 5.7.1.\u6A21\u578B\u7C7B\u56FE</h3><pre><code>\u6A21\u578B\u7C7B\u56FE(\u6709Client)
</code></pre>`,14),z=s("pre",null,[s("code",null,`\u6A21\u578B\u7C7B\u56FE(\u65E0Client)
`)],-1),m=t(`<h3 id="_5-7-2-\u6A21\u578B\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_5-7-2-\u6A21\u578B\u4EE3\u7801" aria-hidden="true">#</a> 5.7.2.\u6A21\u578B\u4EE3\u7801</h3><pre><code>Product.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Product(\u62BD\u8C61\u4EA7\u54C1)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ConcreteProductA.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ConcreteProductA(\u5177\u4F53\u4EA7\u54C1A)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductA</span> <span class="token keyword">extends</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ConcreteProductB.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ConcreteProductB(\u5177\u4F53\u4EA7\u54C1B)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductB</span> <span class="token keyword">extends</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ConcreteProductC.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * ConcreteProductC(\u5177\u4F53\u4EA7\u54C1C)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConcreteProductC</span> <span class="token keyword">extends</span> <span class="token class-name">Product</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>Factory.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Factory(\u7B80\u5355\u5DE5\u5382)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Factory</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u901A\u8FC7\u5DE5\u5382\u65B9\u6CD5\u751F\u4EA7\u4EA7\u54C1
     * <span class="token keyword">@param</span> <span class="token parameter">productType</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Product</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token class-name">String</span> productType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>productType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;productA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>productType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;productB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>productType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;productC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            product <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConcreteProductC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> product<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8C03\u7528\u5DE5\u5382\u65B9\u6CD5\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">productType</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operate</span><span class="token punctuation">(</span><span class="token class-name">String</span> productType<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Product</span> product <span class="token operator">=</span> <span class="token function">factoryMethod</span><span class="token punctuation">(</span>productType<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>Client.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>model</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Client(\u5BA2\u6237\u7AEF)
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Factory</span> factory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Factory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u751F\u4EA7\u4EA7\u54C1A</span>
        <span class="token class-name">Product</span> productA <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token string">&quot;productA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>productA<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5728\u5DE5\u5382\u4E2D\u76F4\u63A5\u8C03\u7528\u5DE5\u5382\u65B9\u6CD5</span>
        factory<span class="token punctuation">.</span><span class="token function">operate</span><span class="token punctuation">(</span><span class="token string">&quot;productA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u751F\u4EA7\u4EA7\u54C1B</span>
        <span class="token class-name">Product</span> productB <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token string">&quot;productB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>productB<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5728\u5DE5\u5382\u4E2D\u76F4\u63A5\u8C03\u7528\u5DE5\u5382\u65B9\u6CD5</span>
        factory<span class="token punctuation">.</span><span class="token function">operate</span><span class="token punctuation">(</span><span class="token string">&quot;productB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u751F\u4EA7\u4EA7\u54C1C</span>
        <span class="token class-name">Product</span> productC <span class="token operator">=</span> factory<span class="token punctuation">.</span><span class="token function">factoryMethod</span><span class="token punctuation">(</span><span class="token string">&quot;productC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>productC<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5728\u5DE5\u5382\u4E2D\u76F4\u63A5\u8C03\u7528\u5DE5\u5382\u65B9\u6CD5</span>
        factory<span class="token punctuation">.</span><span class="token function">operate</span><span class="token punctuation">(</span><span class="token string">&quot;productC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_5-8-\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#_5-8-\u793A\u4F8B" aria-hidden="true">#</a> 5.8.\u793A\u4F8B</h2><h3 id="_5-8-1-\u4E0D\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-8-1-\u4E0D\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 5.8.1.\u4E0D\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</h3><h4 id="_5-8-1-1-\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#_5-8-1-1-\u7C7B\u56FE" aria-hidden="true">#</a> 5.8.1.1.\u7C7B\u56FE</h4><pre><code>\u7C7B\u56FE(\u6709Client)
</code></pre>`,17),g=s("pre",null,[s("code",null,`\u7C7B\u56FE(\u65E0Client)
`)],-1),y=t(`<h4 id="_5-8-1-2-\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_5-8-1-2-\u4EE3\u7801" aria-hidden="true">#</a> 5.8.1.2.\u4EE3\u7801</h4><pre><code>Pizza.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>nouse</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>
	<span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">protected</span> <span class="token class-name">String</span> dough<span class="token punctuation">;</span>
	<span class="token keyword">protected</span> <span class="token class-name">String</span> sauce<span class="token punctuation">;</span>
	<span class="token keyword">protected</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toppings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;preparing...&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;baking...&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cutting...&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;boxing...&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">StringBuilder</span> pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;------&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;dough:&quot;</span> <span class="token operator">+</span> dough <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;sauce:&quot;</span> <span class="token operator">+</span> sauce <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;toppings:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> topping<span class="token operator">:</span>toppings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>topping<span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>pizza<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

</code></pre></div><pre><code>CheesePizza.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>nouse</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		name <span class="token operator">=</span> <span class="token string">&quot;Cheese Pizza&quot;</span><span class="token punctuation">;</span>
		dough <span class="token operator">=</span> <span class="token string">&quot;Regular Crust&quot;</span><span class="token punctuation">;</span>
		sauce <span class="token operator">=</span> <span class="token string">&quot;Marinara Pizza Sauce&quot;</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Fresh Mozzarella&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Parmesan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ClamPizza.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>nouse</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClamPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">ClamPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		name <span class="token operator">=</span> <span class="token string">&quot;Clam Pizza&quot;</span><span class="token punctuation">;</span>
		dough <span class="token operator">=</span> <span class="token string">&quot;Thin crust&quot;</span><span class="token punctuation">;</span>
		sauce <span class="token operator">=</span> <span class="token string">&quot;White garlic sauce&quot;</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Clams&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Grated parmesan cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>PepperoniPizza.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>nouse</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PepperoniPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">PepperoniPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		name <span class="token operator">=</span> <span class="token string">&quot;Pepperoni Pizza&quot;</span><span class="token punctuation">;</span>
		dough <span class="token operator">=</span> <span class="token string">&quot;Crust&quot;</span><span class="token punctuation">;</span>
		sauce <span class="token operator">=</span> <span class="token string">&quot;Marinara sauce&quot;</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Sliced Pepperoni&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Sliced Onion&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Grated parmesan cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>PizzaStore.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>nouse</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStore</span> <span class="token punctuation">{</span>

	<span class="token keyword">public</span> <span class="token class-name">Pizza</span> <span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token class-name">Pizza</span> pizza<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>Client.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>nouse</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
	
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">PizzaStore</span> pizzaStore <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PizzaStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Pizza</span> cheesePizza <span class="token operator">=</span> pizzaStore<span class="token punctuation">.</span><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cheesePizza<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Pizza</span> pepperoniPizza <span class="token operator">=</span> pizzaStore<span class="token punctuation">.</span><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PepperoniPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pepperoniPizza<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Pizza</span> clamPizza <span class="token operator">=</span> pizzaStore<span class="token punctuation">.</span><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ClamPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clamPizza<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h3 id="_5-8-2-\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#_5-8-2-\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F" aria-hidden="true">#</a> 5.8.2.\u4F7F\u7528\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F</h3><h4 id="_5-8-2-1-\u7C7B\u56FE" tabindex="-1"><a class="header-anchor" href="#_5-8-2-1-\u7C7B\u56FE" aria-hidden="true">#</a> 5.8.2.1.\u7C7B\u56FE</h4><pre><code>\u7C7B\u56FE(\u6709Client)
</code></pre>`,16),P=s("pre",null,[s("code",null,`\u7C7B\u56FE(\u65E0Client)
`)],-1),C=t(`<h4 id="_5-8-2-2-\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_5-8-2-2-\u4EE3\u7801" aria-hidden="true">#</a> 5.8.2.2.\u4EE3\u7801</h4><pre><code>Pizza.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Pizza</span> <span class="token punctuation">{</span>
	<span class="token keyword">protected</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
	<span class="token keyword">protected</span> <span class="token class-name">String</span> dough<span class="token punctuation">;</span>
	<span class="token keyword">protected</span> <span class="token class-name">String</span> sauce<span class="token punctuation">;</span>
	<span class="token keyword">protected</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> toppings <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;preparing...&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;baking...&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;cutting...&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;boxing...&quot;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token annotation punctuation">@Override</span>
	<span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">StringBuilder</span> pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;------&quot;</span> <span class="token operator">+</span> name <span class="token operator">+</span> <span class="token string">&quot;------\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;dough:&quot;</span> <span class="token operator">+</span> dough <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;sauce:&quot;</span> <span class="token operator">+</span> sauce <span class="token operator">+</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;toppings:\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">String</span> topping<span class="token operator">:</span>toppings<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pizza<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>topping<span class="token operator">+</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>pizza<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	
<span class="token punctuation">}</span>

</code></pre></div><pre><code>CheesePizza.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CheesePizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		name <span class="token operator">=</span> <span class="token string">&quot;Cheese Pizza&quot;</span><span class="token punctuation">;</span>
		dough <span class="token operator">=</span> <span class="token string">&quot;Regular Crust&quot;</span><span class="token punctuation">;</span>
		sauce <span class="token operator">=</span> <span class="token string">&quot;Marinara Pizza Sauce&quot;</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Fresh Mozzarella&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Parmesan&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>ClamPizza.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ClamPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">ClamPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		name <span class="token operator">=</span> <span class="token string">&quot;Clam Pizza&quot;</span><span class="token punctuation">;</span>
		dough <span class="token operator">=</span> <span class="token string">&quot;Thin crust&quot;</span><span class="token punctuation">;</span>
		sauce <span class="token operator">=</span> <span class="token string">&quot;White garlic sauce&quot;</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Clams&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Grated parmesan cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>PepperoniPizza.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PepperoniPizza</span> <span class="token keyword">extends</span> <span class="token class-name">Pizza</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token class-name">PepperoniPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		name <span class="token operator">=</span> <span class="token string">&quot;Pepperoni Pizza&quot;</span><span class="token punctuation">;</span>
		dough <span class="token operator">=</span> <span class="token string">&quot;Crust&quot;</span><span class="token punctuation">;</span>
		sauce <span class="token operator">=</span> <span class="token string">&quot;Marinara sauce&quot;</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Sliced Pepperoni&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Sliced Onion&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		toppings<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;Grated parmesan cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>PizzaStoreFactory.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PizzaStoreFactory</span> <span class="token punctuation">{</span>

	<span class="token doc-comment comment">/**
	 * \u901A\u8FC7\u5DE5\u5382\u65B9\u6CD5\u751F\u4EA7\u4EA7\u54C1
	 * <span class="token keyword">@param</span> <span class="token parameter">pizzaType</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">Pizza</span> <span class="token function">createPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> pizzaType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>pizzaType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CheesePizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pizzaType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;pepperoni&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PepperoniPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>pizzaType<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token string">&quot;clam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			pizza <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ClamPizza</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> 
		<span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * \u8C03\u7528\u5DE5\u5382\u65B9\u6CD5\u7684\u65B9\u6CD5
	 * <span class="token keyword">@param</span> <span class="token parameter">pizzaType</span>
	 * <span class="token keyword">@return</span>
	 */</span>
	<span class="token keyword">public</span> <span class="token class-name">Pizza</span> <span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token class-name">String</span> pizzaType<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">Pizza</span> pizza <span class="token operator">=</span> <span class="token function">createPizza</span><span class="token punctuation">(</span>pizzaType<span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">prepare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">bake</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">cut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		pizza<span class="token punctuation">.</span><span class="token function">box</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> pizza<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>Client.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>create<span class="token punctuation">.</span>factory<span class="token punctuation">.</span>simplefactory<span class="token punctuation">.</span>use</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
	
	<span class="token annotation punctuation">@Test</span>
	<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token class-name">PizzaStoreFactory</span> pizzaFactory <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PizzaStoreFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Pizza</span> cheesePizza <span class="token operator">=</span> pizzaFactory<span class="token punctuation">.</span><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token string">&quot;cheese&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>cheesePizza<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Pizza</span> pepperoniPizza <span class="token operator">=</span> pizzaFactory<span class="token punctuation">.</span><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token string">&quot;pepperoni&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>pepperoniPizza<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">Pizza</span> clamPizza <span class="token operator">=</span> pizzaFactory<span class="token punctuation">.</span><span class="token function">orderPizza</span><span class="token punctuation">(</span><span class="token string">&quot;clam&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>clamPizza<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

</code></pre></div><h2 id="_5-9-\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_5-9-\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> 5.9.\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528</h2><h2 id="_5-9-1-\u5728jdk\u4E2D\u7684\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#_5-9-1-\u5728jdk\u4E2D\u7684\u5E94\u7528" aria-hidden="true">#</a> 5.9.1.\u5728JDK\u4E2D\u7684\u5E94\u7528</h2><pre><code>JDK8#java.util.Calendar
\u8BF4\u660E
\u5176\u4E2D\u7684createCalendar()\u65B9\u6CD5\u6839\u636E\u4F20\u5165\u53C2\u6570\u7684\u4E0D\u540C\u521B\u5EFA\u51FA\u4E0D\u540C\u7684Calendar\u62BD\u8C61\u7C7B\u7684\u5B50\u7C7B,\u4E5F\u5C31\u662F\u6839\u636E\u4F20\u5165\u53C2\u6570\u7684\u4E0D\u540C\u521B\u5EFA\u51FA\u4E86\u4E0D\u540C\u7684\u5BF9\u8C61,\u5BF9\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u7684\u65B9\u6CD5\u800C\u8A00,\u5C4F\u853D\u4E86\u5177\u4F53\u7684\u521B\u5EFA\u8FC7\u7A0B,\u53EA\u9700\u8981\u4F20\u5165\u53C2\u6570\u5373\u53EF\u83B7\u53D6\u5BF9\u8C61,\u7B26\u5408\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F\u8981\u6C42

\u7C7B\u56FE
</code></pre>`,16),f=t(`<pre><code>\u4EE3\u7801
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Calendar</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token class-name">Locale<span class="token punctuation">.</span>Category</span><span class="token punctuation">.</span>FORMAT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span> zone<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> <span class="token class-name">Locale</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token class-name">Locale<span class="token punctuation">.</span>Category</span><span class="token punctuation">.</span>FORMAT<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">Locale</span> aLocale<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span><span class="token punctuation">.</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span> zone<span class="token punctuation">,</span>
                                       <span class="token class-name">Locale</span> aLocale<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Calendar</span> <span class="token function">createCalendar</span><span class="token punctuation">(</span><span class="token class-name">TimeZone</span> zone<span class="token punctuation">,</span>
                                           <span class="token class-name">Locale</span> aLocale<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">CalendarProvider</span> provider <span class="token operator">=</span>
            <span class="token class-name">LocaleProviderAdapter</span><span class="token punctuation">.</span><span class="token function">getAdapter</span><span class="token punctuation">(</span><span class="token class-name">CalendarProvider</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">getCalendarProvider</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>provider <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> provider<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IllegalArgumentException</span> iae<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// fall back to the default instantiation</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">Calendar</span> cal <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>aLocale<span class="token punctuation">.</span><span class="token function">hasExtensions</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> caltype <span class="token operator">=</span> aLocale<span class="token punctuation">.</span><span class="token function">getUnicodeLocaleType</span><span class="token punctuation">(</span><span class="token string">&quot;ca&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>caltype <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">switch</span> <span class="token punctuation">(</span>caltype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">case</span> <span class="token string">&quot;buddhist&quot;</span><span class="token operator">:</span>
                cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuddhistCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&quot;japanese&quot;</span><span class="token operator">:</span>
                    cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JapaneseImperialCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> <span class="token string">&quot;gregory&quot;</span><span class="token operator">:</span>
                    cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>cal <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// If no known calendar type is explicitly specified,</span>
            <span class="token comment">// perform the traditional way to create a Calendar:</span>
            <span class="token comment">// create a BuddhistCalendar for th_TH locale,</span>
            <span class="token comment">// a JapaneseImperialCalendar for ja_JP_JP locale, or</span>
            <span class="token comment">// a GregorianCalendar for any other locales.</span>
            <span class="token comment">// NOTE: The language, country and variant strings are interned.</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>aLocale<span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;th&quot;</span> <span class="token operator">&amp;&amp;</span> aLocale<span class="token punctuation">.</span><span class="token function">getCountry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;TH&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BuddhistCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>aLocale<span class="token punctuation">.</span><span class="token function">getVariant</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;JP&quot;</span> <span class="token operator">&amp;&amp;</span> aLocale<span class="token punctuation">.</span><span class="token function">getLanguage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;ja&quot;</span>
                       <span class="token operator">&amp;&amp;</span> aLocale<span class="token punctuation">.</span><span class="token function">getCountry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;JP&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JapaneseImperialCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                cal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">GregorianCalendar</span><span class="token punctuation">(</span>zone<span class="token punctuation">,</span> aLocale<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> cal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span>
</code></pre></div><pre><code>\u53EF\u4EE5\u770B\u51FA,\u5728getInstance()\u65B9\u6CD5\u4E2D\u8C03\u7528\u4E86createCalendar()\u65B9\u6CD5,\u53EA\u9700\u8981\u4F20\u5165zone, aLocale,\u5C31\u53EF\u4EE5\u83B7\u5F97\u4E00\u4E2ACalendar\u5BF9\u8C61
</code></pre>`,3);function h(w,A){const o=p("Markmap"),a=p("Mermaid"),e=p("ScrollIntoPageView"),c=p("HideSideBar");return l(),i("div",null,[r,n(o,{localtion:"/enhance/markmap/general/designpattern/designpattern-java/chapter/designpattern-java-outline5-chapter5.html",height:"500rem"}),d,n(a,{id:"mermaid-382ee1a3",code:"classDiagram%0A%20%20%20%20Client%20..%3E%20Factory%0A%20%20%20%20Product%20%3C%7C--%20ConcreteProductA%0A%20%20%20%20Product%20%3C%7C--%20ConcreteProductB%0A%20%20%20%20Product%20%3C%7C--%20ConcreteProductC%0A%20%20%20%20Factory%20..%3E%20Product%0A%20%20%20%20Factory%20..%3E%20ConcreteProductA%0A%20%20%20%20Factory%20..%3E%20ConcreteProductB%0A%20%20%20%20Factory%20..%3E%20ConcreteProductC%0A%20%20%20%20class%20ConcreteProductA%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteProductB%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteProductC%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20Factory%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod(String%20productType)%20Product%0A%20%20%20%20%20%20%20%20%2Boperate(String%20productType)%20void%0A%20%20%20%20%7D%0A%20%20%20%20class%20Client%20%7B%0A%20%20%20%20%20%20%20%20%2Bfun()%20void%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20Product%0A"}),z,n(a,{id:"mermaid-382ee1a5",code:"classDiagram%0A%20%20%20%20Product%20%3C%7C--%20ConcreteProductA%0A%20%20%20%20Product%20%3C%7C--%20ConcreteProductB%0A%20%20%20%20Product%20%3C%7C--%20ConcreteProductC%0A%20%20%20%20Factory%20..%3E%20Product%0A%20%20%20%20Factory%20..%3E%20ConcreteProductA%0A%20%20%20%20Factory%20..%3E%20ConcreteProductB%0A%20%20%20%20Factory%20..%3E%20ConcreteProductC%0A%20%20%20%20class%20ConcreteProductA%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteProductB%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20ConcreteProductC%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20Factory%20%7B%0A%20%20%20%20%20%20%20%20%2BfactoryMethod(String%20productType)%20Product%0A%20%20%20%20%20%20%20%20%2Boperate(String%20productType)%20void%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20Product%0A"}),m,n(a,{id:"mermaid-382ee1e9",code:"classDiagram%0A%20%20%20%20Client%20..%3E%20PizzaStore%0A%20%20%20%20Client%20..%3E%20Pizza%0A%20%20%20%20Client%20..%3E%20CheesePizza%0A%20%20%20%20Client%20..%3E%20ClamPizza%0A%20%20%20%20Client%20..%3E%20PepperoniPizza%0A%20%20%20%20Pizza%20%3C%7C--%20CheesePizza%0A%20%20%20%20Pizza%20%3C%7C--%20ClamPizza%0A%20%20%20%20Pizza%20%3C%7C--%20PepperoniPizza%0A%20%20%20%20PizzaStore%20..%3E%20Pizza%0A%20%20%20%20PizzaStore%20..%3E%20CheesePizza%0A%20%20%20%20PizzaStore%20..%3E%20ClamPizza%0A%20%20%20%20PizzaStore%20..%3E%20PepperoniPizza%0A%20%20%20%20class%20Pizza%20%7B%0A%20%20%20%20%20%20%20%20%23String%20name%0A%09%20%20%20%20%23String%20dough%0A%09%20%20%20%20%23String%20sauce%0A%09%20%20%20%20%23ArrayList%3CString%3E%20toppings%0A%09%20%20%20%20%2Bprepare()%20void%0A%09%20%20%20%20%2Bbake()%20void%0A%09%20%20%20%20%2Bcut()%20void%0A%09%20%20%20%20%2Bbox()%20void%0A%09%20%20%20%20%2BtoString()%20String%0A%20%20%20%20%7D%0A%20%20%20%20class%20CheesePizza%7B%0A%20%20%20%20%20%20%20%20%2BCheesePizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20ClamPizza%7B%0A%20%20%20%20%20%20%20%20%2BClamPizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20PepperoniPizza%20%7B%0A%20%20%20%20%20%20%20%20%2BPepperoniPizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20PizzaStore%20%7B%0A%20%20%20%20%20%20%20%20%2BorderPizza(String%20pizzaType)%20Pizza%0A%20%20%20%20%7D%0A%20%20%20%20class%20Client%20%7B%0A%20%20%20%20%20%20%20%20%2Bfun()%20void%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20Pizza%0A"}),g,n(a,{id:"mermaid-382ee200",code:"classDiagram%0A%20%20%20%20Pizza%20%3C%7C--%20CheesePizza%0A%20%20%20%20Pizza%20%3C%7C--%20ClamPizza%0A%20%20%20%20Pizza%20%3C%7C--%20PepperoniPizza%0A%20%20%20%20PizzaStore%20..%3E%20Pizza%0A%20%20%20%20PizzaStore%20..%3E%20CheesePizza%0A%20%20%20%20PizzaStore%20..%3E%20ClamPizza%0A%20%20%20%20PizzaStore%20..%3E%20PepperoniPizza%0A%20%20%20%20class%20Pizza%20%7B%0A%20%20%20%20%20%20%20%20%23String%20name%0A%09%20%20%20%20%23String%20dough%0A%09%20%20%20%20%23String%20sauce%0A%09%20%20%20%20%23ArrayList%3CString%3E%20toppings%0A%09%20%20%20%20%2Bprepare()%20void%0A%09%20%20%20%20%2Bbake()%20void%0A%09%20%20%20%20%2Bcut()%20void%0A%09%20%20%20%20%2Bbox()%20void%0A%09%20%20%20%20%2BtoString()%20String%0A%20%20%20%20%7D%0A%20%20%20%20class%20CheesePizza%7B%0A%20%20%20%20%20%20%20%20%2BCheesePizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20ClamPizza%7B%0A%20%20%20%20%20%20%20%20%2BClamPizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20PepperoniPizza%20%7B%0A%20%20%20%20%20%20%20%20%2BPepperoniPizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20PizzaStore%20%7B%0A%20%20%20%20%20%20%20%20%2BorderPizza(String%20pizzaType)%20Pizza%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20Pizza%0A"}),y,n(a,{id:"mermaid-382ee241",code:"classDiagram%0A%20%20%20%20Client%20..%3E%20PizzaSotreFactory%0A%20%20%20%20Client%20..%3E%20Pizza%0A%20%20%20%20Client%20..%3E%20CheesePizza%0A%20%20%20%20Client%20..%3E%20ClamPizza%0A%20%20%20%20Client%20..%3E%20PepperoniPizza%0A%20%20%20%20Pizza%20%3C%7C--%20CheesePizza%0A%20%20%20%20Pizza%20%3C%7C--%20ClamPizza%0A%20%20%20%20Pizza%20%3C%7C--%20PepperoniPizza%0A%20%20%20%20PizzaSotreFactory%20..%3E%20Pizza%0A%20%20%20%20PizzaSotreFactory%20..%3E%20CheesePizza%0A%20%20%20%20PizzaSotreFactory%20..%3E%20ClamPizza%0A%20%20%20%20PizzaSotreFactory%20..%3E%20PepperoniPizza%0A%20%20%20%20class%20Pizza%20%7B%0A%20%20%20%20%20%20%20%20%23String%20name%0A%09%20%20%20%20%23String%20dough%0A%09%20%20%20%20%23String%20sauce%0A%09%20%20%20%20%23ArrayList%3CString%3E%20toppings%0A%09%20%20%20%20%2Bprepare()%20void%0A%09%20%20%20%20%2Bbake()%20void%0A%09%20%20%20%20%2Bcut()%20void%0A%09%20%20%20%20%2Bbox()%20void%0A%09%20%20%20%20%2BtoString()%20String%0A%20%20%20%20%7D%0A%20%20%20%20class%20CheesePizza%7B%0A%20%20%20%20%20%20%20%20%2BCheesePizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20ClamPizza%7B%0A%20%20%20%20%20%20%20%20%2BClamPizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20PepperoniPizza%20%7B%0A%20%20%20%20%20%20%20%20%2BPepperoniPizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20PizzaSotreFactory%20%7B%0A%20%20%20%20%20%20%20%20%2BcreatePizza(String%20pizzaType)%20Pizza%0A%20%20%20%20%20%20%20%20%2BorderPizza(String%20pizzaType)%20Pizza%0A%20%20%20%20%7D%0A%20%20%20%20class%20Client%20%7B%0A%20%20%20%20%20%20%20%20%2Bfun()%20void%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20Pizza%0A"}),P,n(a,{id:"mermaid-382ee243",code:"classDiagram%0A%20%20%20%20Pizza%20%3C%7C--%20CheesePizza%0A%20%20%20%20Pizza%20%3C%7C--%20ClamPizza%0A%20%20%20%20Pizza%20%3C%7C--%20PepperoniPizza%0A%20%20%20%20PizzaSotreFactory%20..%3E%20Pizza%0A%20%20%20%20PizzaSotreFactory%20..%3E%20CheesePizza%0A%20%20%20%20PizzaSotreFactory%20..%3E%20ClamPizza%0A%20%20%20%20PizzaSotreFactory%20..%3E%20PepperoniPizza%0A%20%20%20%20class%20Pizza%20%7B%0A%20%20%20%20%20%20%20%20%23String%20name%0A%09%20%20%20%20%23String%20dough%0A%09%20%20%20%20%23String%20sauce%0A%09%20%20%20%20%23ArrayList%3CString%3E%20toppings%0A%09%20%20%20%20%2Bprepare()%20void%0A%09%20%20%20%20%2Bbake()%20void%0A%09%20%20%20%20%2Bcut()%20void%0A%09%20%20%20%20%2Bbox()%20void%0A%09%20%20%20%20%2BtoString()%20String%0A%20%20%20%20%7D%0A%20%20%20%20class%20CheesePizza%7B%0A%20%20%20%20%20%20%20%20%2BCheesePizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20ClamPizza%7B%0A%20%20%20%20%20%20%20%20%2BClamPizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20PepperoniPizza%20%7B%0A%20%20%20%20%20%20%20%20%2BPepperoniPizza()%0A%20%20%20%20%7D%0A%20%20%20%20class%20PizzaSotreFactory%20%7B%0A%20%20%20%20%20%20%20%20%2BcreatePizza(String%20pizzaType)%20Pizza%0A%20%20%20%20%20%20%20%20%2BorderPizza(String%20pizzaType)%20Pizza%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20Pizza%0A"}),C,n(a,{id:"mermaid-64a5709a",code:"classDiagram%0A%20%20%20%20Calendar%20%3C%7C--%20GregorianCalendar%0A%20%20%20%20Calendar%20%3C%7C--%20JapaneseImperialCalendar%0A%20%20%20%20GregorianCalendar%20%3C%7C--%20BuddhistCalendar%0A%20%20%20%20Calendar%20..%3E%20GregorianCalendar%0A%20%20%20%20Calendar%20..%3E%20JapaneseImperialCalendar%0A%20%20%20%20Calendar%20..%3E%20BuddhistCalendar%0A%20%20%20%20class%20Calendar%20%7B%0A%20%20%20%20%20%20%20%20%2BgetInstance()%24%20Calendar%0A%20%20%20%20%20%20%20%20%2BgetInstance(TimeZone%20zone)%24%20Calendar%0A%20%20%20%20%20%20%20%20%2BgetInstance(Locale%20aLocale)%24%20Calendar%0A%20%20%20%20%20%20%20%20%2BgetInstance(TimeZone%20zone%2CLocale%20aLocale)%24%20Calendar%0A%20%20%20%20%20%20%20%20-createCalendar(TimeZone%20zone%2CLocale%20aLocale)%24%20Calendar%0A%20%20%20%20%7D%0A%20%20%20%20class%20BuddhistCalendar%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20JapaneseImperialCalendar%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20class%20GregorianCalendar%20%7B%0A%20%20%20%20%7D%0A%20%20%20%20%3C%3Cabstract%3E%3E%20Calendar%0A"}),f,n(e),n(c)])}var q=u(k,[["render",h],["__file","designpattern-java-chapter-5.\u521B\u5EFA\u578B\u6A21\u5F0F-\u7B80\u5355\u5DE5\u5382\u6A21\u5F0F(Gof\u4E4B\u5916).html.vue"]]);export{q as default};
