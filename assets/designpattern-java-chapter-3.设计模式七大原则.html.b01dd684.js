import{_ as c,o as e,c as l,a as n,d as a,r as s}from"./app.d4c08878.js";const u={},k=a(`<h1 id="_3-\u8BBE\u8BA1\u6A21\u5F0F\u4E03\u5927\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#_3-\u8BBE\u8BA1\u6A21\u5F0F\u4E03\u5927\u539F\u5219" aria-hidden="true">#</a> 3.\u8BBE\u8BA1\u6A21\u5F0F\u4E03\u5927\u539F\u5219</h1><h2 id="_3-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 3.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 3.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 3.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 3.3.\u5355\u4E00\u804C\u8D23\u539F\u5219SRP
 3.4.\u63A5\u53E3\u9694\u79BB\u539F\u5219ISP
 3.5.\u4F9D\u8D56\u5012\u8F6C\u539F\u5219DIP
 3.6.\u91CC\u6C0F\u66FF\u6362\u539F\u5219LSP
 3.7.\u5F00\u95ED\u539F\u5219OCP
 3.8.\u8FEA\u7C73\u7279\u539F\u5219LoD
 3.9.\u5408\u6210\u590D\u7528\u539F\u5219CARP
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_3-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/general/designpattern/designpattern-java/chapter/designpattern-java-outline5-chapter3.html" target="_blank">3.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),i=a(`<h2 id="_3-3-\u5355\u4E00\u804C\u8D23\u539F\u5219srp" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5355\u4E00\u804C\u8D23\u539F\u5219srp" aria-hidden="true">#</a> 3.3.\u5355\u4E00\u804C\u8D23\u539F\u5219SRP</h2><h3 id="_3-3-1-\u5355\u4E00\u804C\u8D23\u539F\u5219\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-3-1-\u5355\u4E00\u804C\u8D23\u539F\u5219\u4ECB\u7ECD" aria-hidden="true">#</a> 3.3.1.\u5355\u4E00\u804C\u8D23\u539F\u5219\u4ECB\u7ECD</h3><pre><code>\u6982\u8FF0
\u4E00\u4E2A\u7C7B\u5E94\u8BE5\u53EA\u8D1F\u8D23\u4E00\u9879\u804C\u8D23

\u4E3A\u4EC0\u4E48\u8981\u9075\u5FAA\u5355\u4E00\u804C\u8D23\u539F\u5219
\u5982\u7C7BA\u8D1F\u8D23\u4E24\u4E2A\u4E0D\u540C\u804C\u8D23: \u804C\u8D231,\u804C\u8D232\u3002\u5F53\u804C\u8D231\u9700\u6C42\u53D8\u66F4\u800C\u6539\u53D8A\u65F6,\u53EF\u80FD\u9020\u6210\u804C\u8D232\u6267\u884C\u9519\u8BEF,\u6240\u4EE5\u9700\u8981\u5C06\u7C7BA\u7684\u7C92\u5EA6\u5206\u89E3\u4E3AA1,A2\u3002

\u6CE8\u610F\u4E8B\u9879
a.\u964D\u4F4E\u7C7B\u7684\u590D\u6742\u5EA6,\u4E00\u4E2A\u7C7B\u53EA\u8D1F\u8D23\u4E00\u9879\u804C\u8D23
b.\u63D0\u9AD8\u7C7B\u7684\u53EF\u8BFB\u6027,\u53EF\u7EF4\u62A4\u6027
c.\u964D\u4F4E\u53D8\u66F4\u5F15\u8D77\u7684\u98CE\u9669
d.\u901A\u5E38\u60C5\u51B5\u4E0B,\u6211\u4EEC\u5E94\u5F53\u9075\u5B88\u5355\u4E00\u804C\u8D23\u539F\u5219,\u53EA\u6709\u903B\u8F91\u8DB3\u591F\u7B80\u5355,\u624D\u53EF\u4EE5\u5728\u4EE3\u7801\u7EA7\u8FDD\u53CD\u5355\u4E00\u804C\u8D23\u539F\u5219,\u53EA\u6709\u7C7B\u4E2D\u65B9\u6CD5\u6570\u91CF\u8DB3\u591F\u5C11,\u53EF\u4EE5\u5728\u65B9\u6CD5\u7EA7\u522B\u4FDD\u6301\u5355\u4E00\u804C\u8D23\u539F\u5219,\u4F46\u662F\u901A\u5E38\u4E0D\u8981\u8FDD\u53CD,\u56E0\u4E3A\u5F88\u96BE\u786E\u5B9A\u4EE3\u7801\u4EE5\u540E\u662F\u5426\u4F1A\u53D1\u751F\u66F4\u6539
</code></pre><h3 id="_3-3-2-\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-3-2-\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.3.2.\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801</h3><h4 id="_3-3-2-1-\u4E0D\u4F7F\u7528\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-3-2-1-\u4E0D\u4F7F\u7528\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.3.2.1.\u4E0D\u4F7F\u7528\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>single_reponsibility</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4E0D\u4F7F\u7528\u5355\u4E00\u804C\u80FD\u539F\u5219
 *      Vehicle1.run()\u65B9\u6CD5\u8FDD\u53CD\u4E86\u5355\u4E00\u804C\u80FD\u539F\u5219
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingleReponsibility1</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Vehicle1</span> vehicle1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vehicle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vehicle1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C7D\u8F66&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vehicle1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;\u706B\u8F66&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        vehicle1<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;\u98DE\u673A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Vehicle1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span> vehicle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>vehicle <span class="token operator">+</span> <span class="token string">&quot;\u5728\u516C\u8DEF\u4E0A\u8DD1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="_3-3-2-2-\u4F7F\u7528\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-3-2-2-\u4F7F\u7528\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.3.2.2.\u4F7F\u7528\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801</h4><h5 id="_3-3-2-2-1-\u7C7B\u7EA7\u522B\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-3-2-2-1-\u7C7B\u7EA7\u522B\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.3.2.2.1.\u7C7B\u7EA7\u522B\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801</h5><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>single_reponsibility</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u7C7B\u7EA7\u522B\u7684\u5355\u4E00\u804C\u80FD\u539F\u5219\uFF1A\u4E25\u683C\u9075\u5B88\u4E86\u5355\u4E00\u804C\u8D23\u539F\u5219
 * \u9075\u5B88\u4E86\u5355\u4E00\u804C\u8D23\u539F\u5219:\u4F46\u662F\u4F1A\u5BFC\u81F4\u7C7B\u5927\u7206\u70B8
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingleResponsibility2</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">RoadVehicle</span> roadVehicle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RoadVehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        roadVehicle<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C7D\u8F66&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AirVehicle</span> airVehicle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AirVehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        airVehicle<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;\u98DE\u673A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">WaterVehicle</span> waterVehicle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WaterVehicle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        waterVehicle<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F6E\u8239&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">RoadVehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span> vehicle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>vehicle<span class="token operator">+</span><span class="token string">&quot;\u5728\u8DEF\u4E0A\u8DD1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">WaterVehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span> vehicle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>vehicle<span class="token operator">+</span><span class="token string">&quot;\u5728\u6C34\u91CC\u8DD1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">AirVehicle</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">String</span> vehicle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>vehicle<span class="token operator">+</span><span class="token string">&quot;\u5728\u5929\u4E0A\u98DE...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h5 id="_3-3-2-2-2-\u65B9\u6CD5\u522B\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-3-2-2-2-\u65B9\u6CD5\u522B\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.3.2.2.2.\u65B9\u6CD5\u522B\u5355\u4E00\u804C\u8D23\u539F\u5219\u4EE3\u7801</h5><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>single_reponsibility</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u65B9\u6CD5\u7EA7\u522B\u7684\u5355\u4E00\u804C\u80FD\u539F\u5219\uFF0C\u4F1A\u5BFC\u81F4\u7C7B\u4E2D\u65B9\u6CD5\u5927\u7206\u70B8
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SingleResponsibility3</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">Veicle3</span> veicle3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Veicle3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        veicle3<span class="token punctuation">.</span><span class="token function">runRoad</span><span class="token punctuation">(</span><span class="token string">&quot;\u6C7D\u8F66&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        veicle3<span class="token punctuation">.</span><span class="token function">runAir</span><span class="token punctuation">(</span><span class="token string">&quot;\u98DE\u673A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        veicle3<span class="token punctuation">.</span><span class="token function">runWater</span><span class="token punctuation">(</span><span class="token string">&quot;\u8F6E\u8239&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Veicle3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">runRoad</span><span class="token punctuation">(</span><span class="token class-name">String</span> vehicle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>vehicle<span class="token operator">+</span><span class="token string">&quot;\u5728\u8DEF\u4E0A\u8DD1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">runAir</span><span class="token punctuation">(</span><span class="token class-name">String</span> vehicle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>vehicle<span class="token operator">+</span><span class="token string">&quot;\u5728\u5929\u4E0A\u98DE...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">runWater</span><span class="token punctuation">(</span><span class="token class-name">String</span> vehicle<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>vehicle<span class="token operator">+</span><span class="token string">&quot;\u5728\u6C34\u91CC\u8DD1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_3-4-\u63A5\u53E3\u9694\u79BB\u539F\u5219isp" tabindex="-1"><a class="header-anchor" href="#_3-4-\u63A5\u53E3\u9694\u79BB\u539F\u5219isp" aria-hidden="true">#</a> 3.4.\u63A5\u53E3\u9694\u79BB\u539F\u5219ISP</h2><h3 id="_3-4-1-\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-4-1-\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4ECB\u7ECD" aria-hidden="true">#</a> 3.4.1.\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4ECB\u7ECD</h3><pre><code>\u5BA2\u6237\u7AEF\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u5B83\u4E0D\u9700\u8981\u7684\u63A5\u53E3\uFF0C\u5373\u4E00\u4E2A\u7C7B\u5BF9\u53E6\u4E00\u4E2A\u7C7B\u7684\u4F9D\u8D56\u5E94\u8BE5\u5EFA\u7ACB\u5728\u6700\u5C0F\u7684\u63A5\u53E3\u4E0A
</code></pre><h3 id="_3-4-2-\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-4-2-\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.4.2.\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801</h3><h4 id="_3-4-2-1-\u4E0D\u4F7F\u7528\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-4-2-1-\u4E0D\u4F7F\u7528\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.4.2.1.\u4E0D\u4F7F\u7528\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801</h4><pre><code>Interface1.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>interface_segregation</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4E0D\u9075\u5B88\u63A5\u53E3\u9694\u79BB\u539F\u5219
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">operator2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">operator3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">operator4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">operator5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * A1\u901A\u8FC7Interface1\u4F9D\u8D56B\u7C7B\uFF0C\u4F46\u53EA\u4F1A\u7528\u52301\u30012\u30013\u65B9\u6CD5
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> interface1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface1<span class="token punctuation">.</span><span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5982\u679C\u4E0D\u8FDB\u884C\u63A5\u53E3\u9694\u79BB\uFF0Cinterface1\u4ECD\u7136\u53EF\u4EE5\u8C03\u7528\u63A5\u53E3\u4E2D\u7684operator2()\u3001operator3()\u3001operator4()\u548Coperator5()\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u9645\u6839\u672C\u4E0D\u9700\u8981\u8FD9\u56DB\u4E2A\u65B9\u6CD5</span>
        <span class="token comment">//interface1.operator2();</span>
        <span class="token comment">//interface1.operator3();</span>
        <span class="token comment">//interface1.operator4();</span>
        <span class="token comment">//interface1.operator5();</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend2</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> interface1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface1<span class="token punctuation">.</span><span class="token function">operator2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5982\u679C\u4E0D\u8FDB\u884C\u63A5\u53E3\u9694\u79BB\uFF0Cinterface1\u4ECD\u7136\u53EF\u4EE5\u8C03\u7528\u63A5\u53E3\u4E2D\u7684operator1()\u3001operator3()\u3001operator4()\u548Coperator5()\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u9645\u6839\u672C\u4E0D\u9700\u8981\u8FD9\u4E24\u4E2A\u65B9\u6CD5</span>
        <span class="token comment">//interface1.operator1();</span>
        <span class="token comment">//interface1.operator3();</span>
        <span class="token comment">//interface1.operator4();</span>
        <span class="token comment">//interface1.operator5();</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend3</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> interface1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface1<span class="token punctuation">.</span><span class="token function">operator3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u5982\u679C\u4E0D\u8FDB\u884C\u63A5\u53E3\u9694\u79BB\uFF0Cinterface1\u4ECD\u7136\u53EF\u4EE5\u8C03\u7528\u63A5\u53E3\u4E2D\u7684operator1()\u3001operator2()\u3001operator4()\u548Coperator5()\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u9645\u6839\u672C\u4E0D\u9700\u8981\u8FD9\u4E24\u4E2A\u65B9\u6CD5</span>
        <span class="token comment">//interface1.operator1();</span>
        <span class="token comment">//interface1.operator2();</span>
        <span class="token comment">//interface1.operator4();</span>
        <span class="token comment">//interface1.operator5();</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * C1\u901A\u8FC7Interface1\u4F9D\u8D56D\u7C7B\uFF0C\u4F46\u53EA\u4F1A\u7528\u52301\u30014\u30015\u65B9\u6CD5
 */</span>
<span class="token keyword">class</span> <span class="token class-name">C1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> interface1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface1<span class="token punctuation">.</span><span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5982\u679C\u4E0D\u8FDB\u884C\u63A5\u53E3\u9694\u79BB\uFF0Cinterface1\u4ECD\u7136\u53EF\u4EE5\u8C03\u7528\u63A5\u53E3\u4E2D\u7684operator2()\u3001operator3()\u3001operator4()\u548Coperator5()\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u9645\u6839\u672C\u4E0D\u9700\u8981\u8FD9\u56DB\u4E2A\u65B9\u6CD5</span>
        <span class="token comment">//interface1.operator2();</span>
        <span class="token comment">//interface1.operator3();</span>
        <span class="token comment">//interface1.operator4();</span>
        <span class="token comment">//interface1.operator5();</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend4</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> interface1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface1<span class="token punctuation">.</span><span class="token function">operator4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5982\u679C\u4E0D\u8FDB\u884C\u63A5\u53E3\u9694\u79BB\uFF0Cinterface1\u4ECD\u7136\u53EF\u4EE5\u8C03\u7528\u63A5\u53E3\u4E2D\u7684operator1()\u3001operator2()\u3001operator3()\u548Coperator5()\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u9645\u6839\u672C\u4E0D\u9700\u8981\u8FD9\u56DB\u4E2A\u65B9\u6CD5</span>
        <span class="token comment">//interface1.operator1();</span>
        <span class="token comment">//interface1.operator2();</span>
        <span class="token comment">//interface1.operator3();</span>
        <span class="token comment">//interface1.operator5();</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend5</span><span class="token punctuation">(</span><span class="token class-name">Interface1</span> interface1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface1<span class="token punctuation">.</span><span class="token function">operator5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u5982\u679C\u4E0D\u8FDB\u884C\u63A5\u53E3\u9694\u79BB\uFF0Cinterface1\u4ECD\u7136\u53EF\u4EE5\u8C03\u7528\u63A5\u53E3\u4E2D\u7684operator1()\u3001operator2()\u3001operator3()\u548Coperator4()\u4E24\u4E2A\u65B9\u6CD5\uFF0C\u5B9E\u9645\u6839\u672C\u4E0D\u9700\u8981\u8FD9\u56DB\u4E2A\u65B9\u6CD5</span>
        <span class="token comment">//interface1.operator1();</span>
        <span class="token comment">//interface1.operator2();</span>
        <span class="token comment">//interface1.operator3();</span>
        <span class="token comment">//interface1.operator4();</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B1</span> <span class="token keyword">implements</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B1\u5B9E\u73B0\u4E86\u64CD\u4F5C1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B1\u5B9E\u73B0\u4E86\u64CD\u4F5C2...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B1\u5B9E\u73B0\u4E86\u64CD\u4F5C3...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B1\u5B9E\u73B0\u4E86\u64CD\u4F5C4...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B1\u5B9E\u73B0\u4E86\u64CD\u4F5C5...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">D1</span> <span class="token keyword">implements</span> <span class="token class-name">Interface1</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D1\u5B9E\u73B0\u4E86\u64CD\u4F5C1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D1\u5B9E\u73B0\u4E86\u64CD\u4F5C2...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D1\u5B9E\u73B0\u4E86\u64CD\u4F5C3...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D1\u5B9E\u73B0\u4E86\u64CD\u4F5C4...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D1\u5B9E\u73B0\u4E86\u64CD\u4F5C5...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><pre><code>Interface1Client.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>interface_segregation</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u8C03\u7528Interface1\u7684\u5BA2\u6237\u7AEF
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Interface1Client</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5A1\u901A\u8FC7Interface1\u4F9D\u8D56B1\uFF0C\u4F46\u662F\u53EA\u8C03\u75281\u30012\u30013\u65B9\u6CD5
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testA1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A1</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u672C\u6765\u8981\u4F20\u5165\u63A5\u53E3Interface1\u7684\uFF0C\u73B0\u5728\u6839\u636E\u9762\u5411\u63A5\u53E3\u7F16\u7A0B\u539F\u5219\uFF0C\u4F20\u5165Interface1\u7684\u5B9E\u73B0B1</span>
        a1<span class="token punctuation">.</span><span class="token function">depend1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a1<span class="token punctuation">.</span><span class="token function">depend2</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a1<span class="token punctuation">.</span><span class="token function">depend3</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5C1\u901A\u8FC7Interface1\u4F9D\u8D56D1
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testC1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">C1</span> c1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u672C\u6765\u8981\u4F20\u5165\u63A5\u53E3Interface1\u7684\uFF0C\u73B0\u5728\u6839\u636E\u9762\u5411\u63A5\u53E3\u7F16\u7A0B\u539F\u5219\uFF0C\u4F20\u5165Interface1\u7684\u5B9E\u73B0D1</span>
        c1<span class="token punctuation">.</span><span class="token function">depend1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c1<span class="token punctuation">.</span><span class="token function">depend4</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c1<span class="token punctuation">.</span><span class="token function">depend5</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="_3-4-2-2-\u4F7F\u7528\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-4-2-2-\u4F7F\u7528\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.4.2.2.\u4F7F\u7528\u63A5\u53E3\u9694\u79BB\u539F\u5219\u4EE3\u7801</h4><pre><code>Interface2.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>interface_segregation</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Interface2</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * \u9075\u5FAA\u63A5\u53E3\u9694\u79BB\u539F\u5219
 *      \u628A\u63A5\u53E31\u5DEE\u5206\u4E3A3\u4E2A\u63A5\u53E3
 */</span>
<span class="token comment">//public interface Interface1 {</span>
<span class="token comment">//    void operator1();</span>
<span class="token comment">//    void operator2();</span>
<span class="token comment">//    void operator3();</span>
<span class="token comment">//    void operator4();</span>
<span class="token comment">//    void operator5();</span>
<span class="token comment">//}</span>
<span class="token keyword">interface</span> <span class="token class-name">Interface2A</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Interface2B</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">operator2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">operator3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Interface2C</span> <span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">operator4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">void</span> <span class="token function">operator5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5BA2\u6237\u7AEF\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u5B83\u4E0D\u9700\u8981\u7684\u63A5\u53E3\uFF0C\u5373\u4E00\u4E2A\u7C7B\u5BF9\u53E6\u4E00\u4E2A\u7C7B\u7684\u4F9D\u8D56\u5E94\u8BE5\u5EFA\u7ACB\u5728\u6700\u5C0F\u7684\u63A5\u53E3\u4E0A
 * A2\u5C31\u662F\u5BA2\u6237\u7AEF
 * A2\u901A\u8FC7Interface1A,InterfaceC\u4F9D\u8D56B2\u7C7B
 * \u63A5\u53E3\u9694\u79BB\u540E\uFF0Cinterface2A\u53EA\u80FD\u8C03\u7528operator1()
 *           interface2B\u53EA\u80FD\u8C03\u7528operator2()\u548Coperator3()
 *           interface2C\u53EA\u80FD\u8C03\u7528operator4()\u548Coperator5()
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface2A</span> interface2A<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface2A<span class="token punctuation">.</span><span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend2</span><span class="token punctuation">(</span><span class="token class-name">Interface2B</span> interface2B<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface2B<span class="token punctuation">.</span><span class="token function">operator2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend3</span><span class="token punctuation">(</span><span class="token class-name">Interface2B</span> interface2B<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface2B<span class="token punctuation">.</span><span class="token function">operator3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5BA2\u6237\u7AEF\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u5B83\u4E0D\u9700\u8981\u7684\u63A5\u53E3\uFF0C\u5373\u4E00\u4E2A\u7C7B\u5BF9\u53E6\u4E00\u4E2A\u7C7B\u7684\u4F9D\u8D56\u5E94\u8BE5\u5EFA\u7ACB\u5728\u6700\u5C0F\u7684\u63A5\u53E3\u4E0A
 * C2\u5C31\u662F\u5BA2\u6237\u7AEF
 * C2\u901A\u8FC7Interface2A,Interface2B\u4F9D\u8D56D2\u7C7B
 * \u63A5\u53E3\u9694\u79BB\u540E\uFF0Cinterface2A\u53EA\u80FD\u8C03\u7528operator1()
 *            interface2B\u53EA\u80FD\u8C03\u7528operator2()\u548Coperator3()
 *            interface2C\u53EA\u80FD\u8C03\u7528operator4()\u548Coperator5()
 */</span>
<span class="token keyword">class</span> <span class="token class-name">C2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend1</span><span class="token punctuation">(</span><span class="token class-name">Interface2A</span> interface2A<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface2A<span class="token punctuation">.</span><span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend4</span><span class="token punctuation">(</span><span class="token class-name">Interface2C</span> interface2C<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface2C<span class="token punctuation">.</span><span class="token function">operator4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">depend5</span><span class="token punctuation">(</span><span class="token class-name">Interface2C</span> interface2C<span class="token punctuation">)</span><span class="token punctuation">{</span>
        interface2C<span class="token punctuation">.</span><span class="token function">operator5</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B2</span> <span class="token keyword">implements</span> <span class="token class-name">Interface2A</span><span class="token punctuation">,</span><span class="token class-name">Interface2B</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B2\u5B9E\u73B0\u4E86\u64CD\u4F5C1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B2\u5B9E\u73B0\u4E86\u64CD\u4F5C2...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;B2\u5B9E\u73B0\u4E86\u64CD\u4F5C3...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">D2</span> <span class="token keyword">implements</span> <span class="token class-name">Interface2A</span><span class="token punctuation">,</span><span class="token class-name">Interface2C</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D2\u5B9E\u73B0\u4E86\u64CD\u4F5C1...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator4</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D2\u5B9E\u73B0\u4E86\u64CD\u4F5C4...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">operator5</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;D2\u5B9E\u73B0\u4E86\u64CD\u4F5C5...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre></div><pre><code>Interface2Client.java
</code></pre><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>interface_segregation</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Interface2Client</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5A2\u901A\u8FC7\u63A5\u53E3Interface2A,Interface2B\u4F9D\u8D56B2
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testA2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A2</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a2<span class="token punctuation">.</span><span class="token function">depend1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a2<span class="token punctuation">.</span><span class="token function">depend2</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        a2<span class="token punctuation">.</span><span class="token function">depend3</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">B2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u6D4B\u8BD5C2\u901A\u8FC7\u63A5\u53E3Interface2B,Interface2C\u4F9D\u8D56D2
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">testC2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">C2</span> c2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">C2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c2<span class="token punctuation">.</span><span class="token function">depend1</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c2<span class="token punctuation">.</span><span class="token function">depend4</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        c2<span class="token punctuation">.</span><span class="token function">depend5</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">D2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_3-5-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219dip" tabindex="-1"><a class="header-anchor" href="#_3-5-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219dip" aria-hidden="true">#</a> 3.5.\u4F9D\u8D56\u5012\u8F6C\u539F\u5219DIP</h2><h3 id="_3-5-1-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-5-1-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4ECB\u7ECD" aria-hidden="true">#</a> 3.5.1.\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4ECB\u7ECD</h3><pre><code>\u6982\u8FF0
a.\u9AD8\u5C42\u6A21\u5757\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u5E95\u5C42\u6A21\u5757,\u4E8C\u8005\u90FD\u5E94\u8BE5\u4F9D\u8D56\u5176\u62BD\u8C61
b.\u62BD\u8C61\u4E0D\u5E94\u8BE5\u4F9D\u8D56\u7EC6\u8282\uFF0C\u7EC6\u8282\u5E94\u8BE5\u4F9D\u8D56\u62BD\u8C61
c.\u4F9D\u8D56\u53CD\u8F6C\u7684\u4E2D\u5FC3\u601D\u60F3\u662F\u9762\u5411\u7ED3\u6784\u7F16\u7A0B
d.\u4F9D\u8D56\u53CD\u8F6C\u7684\u601D\u60F3\u662F\u57FA\u4E8E\u8FD9\u6837\u7684\u7406\u5FF5:\u76F8\u5BF9\u4E8E\u7EC6\u8282\u7684\u591A\u53D8\u6027\uFF0C\u62BD\u8C61\u7684\u4E1C\u897F\u8981\u7A33\u5B9A\u7684\u591A,\u4EE5\u62BD\u8C61\u4E3A\u57FA\u7840\u7684\u67B6\u6784\u6BD4\u4EE5\u7EC6\u8282\u4E3A\u57FA\u7840\u7684\u67B6\u6784\u8981\u7A33\u5B9A\u7684\u591A,\u5728java\u4E2D,\u62BD\u8C61\u7684\u591A\u6307\u63A5\u53E3\u548C\u62BD\u8C61\u7C7B,\u7EC6\u8282\u5C31\u662F\u5177\u4F53\u7684\u5B9E\u73B0\u7C7B
e.\u4F7F\u7528\u7C7B\u6216\u8005\u63A5\u53E3\u7684\u76EE\u7684\u662F\u5236\u5B9A\u89C4\u8303,\u800C\u4E0D\u6D89\u53CA\u4EFB\u4F55\u5177\u4F53\u7684\u5B50\u7C7B\u64CD\u4F5C,\u628A\u5C55\u73B0\u7EC6\u8282\u7684\u4EFB\u52A1\u4EA4\u7ED9\u4ED6\u4EEC\u7684\u5B9E\u73B0\u7C7B\u53BB\u505A

\u4F9D\u8D56\u5173\u7CFB\u4F20\u9012\u7684\u4E09\u79CD\u65B9\u5F0F
a.\u63A5\u53E3\u4F20\u9012
b.\u6784\u9020\u65B9\u6CD5\u4F20\u9012
c.setter\u65B9\u6CD5\u4F20\u9012

\u6CE8\u610F\u4E8B\u9879
a.\u5E95\u5C42\u6A21\u5757\u5C3D\u91CF\u90FD\u8981\u6709\u62BD\u8C61\u7C7B\u6216\u63A5\u53E3,\u6216\u8005\u4E24\u8005\u90FD\u6709\uFF0C\u7A0B\u5E8F\u7A33\u5B9A\u6027\u66F4\u597D
b.\u53D8\u91CF\u7684\u58F0\u660E\u7C7B\u578B\u5C3D\u91CF\u90FD\u662F\u62BD\u8C61\u7C7B\u6216\u8005\u63A5\u53E3,\u8FD9\u6837\u6211\u4EEC\u7684\u53D8\u91CF\u5F15\u7528\u548C\u5B9E\u9645\u5BF9\u8C61\u4E4B\u95F4,\u5C31\u5B58\u5728\u4E00\u4E2A\u7F13\u51B2\u5C42,\u6709\u5229\u4E8E\u7A0B\u5E8F\u7684\u4F18\u5316\u548C\u6269\u5C55
c.\u7EE7\u627F\u662F\u9075\u5FAA\u91CC\u6C0F\u66FF\u6362\u539F\u5219
</code></pre><h3 id="_3-5-2-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-5-2-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.5.2.\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801</h3><h4 id="_3-5-2-1-\u4E0D\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-5-2-1-\u4E0D\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.5.2.1.\u4E0D\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>dependenceinversion</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4E0D\u4F7F\u7528\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">NoUseDependenceDeliverTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Person1</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person1<span class="token punctuation">.</span><span class="token function">receviceEmail</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Email1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person1<span class="token punctuation">.</span><span class="token function">receviceQQ</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QQ1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person1<span class="token punctuation">.</span><span class="token function">receviceWeChat</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WeChat1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u901A\u8FC7Person1\u5B9E\u73B0\u63A5\u53E3\u6D88\u606F\u7684\u529F\u80FD
 *      \u7F3A\u70B9:\u63A5\u53D7QQ\u8981\u5199\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u63A5\u6536\u90AE\u4EF6\u8981\u5199\u4E00\u4E2A\u65B9\u6CD5
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Person1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receviceEmail</span><span class="token punctuation">(</span><span class="token class-name">Email1</span> email1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>email1<span class="token punctuation">.</span><span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receviceQQ</span><span class="token punctuation">(</span><span class="token class-name">QQ1</span> qq1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>qq1<span class="token punctuation">.</span><span class="token function">getQQ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receviceWeChat</span><span class="token punctuation">(</span><span class="token class-name">WeChat1</span> weChat<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>weChat<span class="token punctuation">.</span><span class="token function">getWeChat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Email1</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getEmail</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u7535\u5B50\u90AE\u4EF6\u4FE1\u606F:HelloWorld&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">QQ1</span> <span class="token punctuation">{</span>
   <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getQQ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;QQ\u4FE1\u606F:\u6536\u5230\u4E86QQ\u6D88\u606F&quot;</span><span class="token punctuation">;</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">WeChat1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getWeChat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u5FAE\u4FE1\u4FE1\u606F:\u6536\u5230\u4E86\u5FAE\u4FE1\u6D88\u606F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre></div><h4 id="_3-5-2-2-\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-5-2-2-\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.5.2.2.\u4F7F\u7528\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u4EE3\u7801</h4><h5 id="_3-5-2-2-1-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u7B80\u5355\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#_3-5-2-2-1-\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u7B80\u5355\u6848\u4F8B" aria-hidden="true">#</a> 3.5.2.2.1.\u4F9D\u8D56\u5012\u8F6C\u539F\u5219\u7B80\u5355\u6848\u4F8B</h5><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>dependenceinversion</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u9075\u5FAA\u4F9D\u8D56\u53CD\u8F6C\u539F\u5219
 * \u9762\u5411\u63A5\u53E3\u7F16\u7A0B
 *      \u57FA\u4E8E\u63A5\u53E3\u4F20\u9012\u5B9E\u73B0\u4F9D\u8D56
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">UseDependenceDeliverTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//\u9762\u5411\u63A5\u53E3\u7F16\u7A0B</span>
        <span class="token class-name">Person2</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person2<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Email2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person2<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">QQ2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        person2<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WeChat2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Person2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token class-name">MessageInterface</span> messageInterface<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>messageInterface<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">MessageInterface</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Email2</span> <span class="token keyword">implements</span> <span class="token class-name">MessageInterface</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span>  <span class="token string">&quot;\u7535\u5B50\u90AE\u4EF6\u4FE1\u606F:HelloWorld&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">QQ2</span> <span class="token keyword">implements</span> <span class="token class-name">MessageInterface</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;QQ\u4FE1\u606F:\u6536\u5230\u4E86QQ\u6D88\u606F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">WeChat2</span> <span class="token keyword">implements</span> <span class="token class-name">MessageInterface</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&quot;\u5FAE\u4FE1\u4FE1\u606F:\u6536\u5230\u4E86\u5FAE\u4FE1\u6D88\u606F&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h5 id="_3-5-2-2-2-\u901A\u8FC7\u63A5\u53E3\u4F20\u9012\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_3-5-2-2-2-\u901A\u8FC7\u63A5\u53E3\u4F20\u9012\u4F9D\u8D56" aria-hidden="true">#</a> 3.5.2.2.2.\u901A\u8FC7\u63A5\u53E3\u4F20\u9012\u4F9D\u8D56</h5><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>dependenceinversion</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4F9D\u8D56\u5173\u7CFB\u4F20\u9012\u7684\u4E09\u79CD\u65B9\u5F0F
 *  \u7B2C\u4E00\u79CD\u65B9\u5F0F\uFF1A\u901A\u8FC7\u63A5\u53E3\u4F20\u9012\u4F9D\u8D56
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependenceDeliver1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OpenAndClose1</span> openAndClose1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenAndClose1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose1<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ITV1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ITV1\u64AD\u653E......&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ITV1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">IOpenAndClose1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token class-name">ITV1</span> iTv1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">OpenAndClose1</span> <span class="token keyword">implements</span> <span class="token class-name">IOpenAndClose1</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token class-name">ITV1</span> iTv1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        iTv1<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h5 id="_3-5-2-2-3-\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u4F20\u9012\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_3-5-2-2-3-\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u4F20\u9012\u4F9D\u8D56" aria-hidden="true">#</a> 3.5.2.2.3.\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u4F20\u9012\u4F9D\u8D56</h5><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>dependenceinversion</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4F9D\u8D56\u5173\u7CFB\u4F20\u9012\u7684\u4E09\u79CD\u65B9\u5F0F
 *  \u7B2C\u4E8C\u79CD\u65B9\u5F0F\uFF1A\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u4F20\u9012\u4F9D\u8D56
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependenceDeliver2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OpenAndClose2</span> openAndClose2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenAndClose2</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ITV2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ITV2\u64AD\u653E......&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose2<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ITV2</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IOpenAndClose2</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OpenAndClose2</span> <span class="token keyword">implements</span> <span class="token class-name">IOpenAndClose2</span><span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token class-name">ITV2</span> iTv2<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">OpenAndClose2</span><span class="token punctuation">(</span><span class="token class-name">ITV2</span> iTv2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>iTv2 <span class="token operator">=</span> iTv2<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>iTv2<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h5 id="_3-5-2-2-4-\u901A\u8FC7setter-\u65B9\u6CD5\u4F20\u9012\u4F9D\u8D56" tabindex="-1"><a class="header-anchor" href="#_3-5-2-2-4-\u901A\u8FC7setter-\u65B9\u6CD5\u4F20\u9012\u4F9D\u8D56" aria-hidden="true">#</a> 3.5.2.2.4.\u901A\u8FC7setter()\u65B9\u6CD5\u4F20\u9012\u4F9D\u8D56</h5><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>dependenceinversion</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4F9D\u8D56\u5173\u7CFB\u4F20\u9012\u7684\u4E09\u79CD\u65B9\u5F0F
 *  \u7B2C\u4E09\u79CD\u65B9\u5F0F\uFF1A\u901A\u8FC7setter()\u65B9\u6CD5\u4F20\u9012\u4F9D\u8D56
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DependenceDeliver3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">OpenAndClose3</span> openAndClose3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenAndClose3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose3<span class="token punctuation">.</span><span class="token function">setItv3</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ITV3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ITV3\u64AD\u653E......&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        openAndClose3<span class="token punctuation">.</span><span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">ITV3</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">IOpenAndClose3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">OpenAndClose3</span> <span class="token keyword">implements</span> <span class="token class-name">IOpenAndClose3</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">ITV3</span> itv3<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setItv3</span><span class="token punctuation">(</span><span class="token class-name">ITV3</span> itv3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>itv3 <span class="token operator">=</span> itv3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token keyword">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>itv3<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_3-6-\u91CC\u6C0F\u66FF\u6362\u539F\u5219lsp" tabindex="-1"><a class="header-anchor" href="#_3-6-\u91CC\u6C0F\u66FF\u6362\u539F\u5219lsp" aria-hidden="true">#</a> 3.6.\u91CC\u6C0F\u66FF\u6362\u539F\u5219LSP</h2><h3 id="_3-6-1-\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-6-1-\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4ECB\u7ECD" aria-hidden="true">#</a> 3.6.1.\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4ECB\u7ECD</h3><pre><code>\u6982\u8FF0
\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u544A\u8BC9\u6211\u4EEC,\u7EE7\u627F\u5B9E\u9645\u4E0A\u8BA9\u4E24\u4E2A\u7C7B\u8026\u5408\u6027\u589E\u5F3A\u4E86,\u5728\u9002\u5F53\u7684\u60C5\u51B5\u4E0B,\u53EF\u4EE5\u901A\u8FC7\u805A\u5408\u3001\u7EC4\u5408\u3001\u4F9D\u8D56\u6765\u89E3\u51B3\u95EE\u9898

\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u662F\u4E3A\u4E86\u89E3\u51B3\u4E86\u4EC0\u4E48\u95EE\u9898
a.\u6B63\u786E\u7684\u4F7F\u7528\u7EE7\u627F
b.\u5C06\u539F\u6765\u7684\u7EE7\u627F\u5173\u7CFB\u8F6C\u6362\u4E3A\u7EE7\u627F\u57FA\u7C7B+\u805A\u5408/\u7EC4\u5408/\u4F9D\u8D56\u5173\u7CFB

\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u8BE6\u7EC6\u8BF4\u660E
a.\u6240\u6709\u80FD\u4F7F\u7528\u7236\u7C7B\u7684\u5730\u65B9,\u90FD\u80FD\u900F\u660E\u7684\u4F7F\u7528\u8BE5\u7236\u7C7B\u7684\u5B50\u7C7B\u5BF9\u8C61
\u5373\u7EE7\u627F\u65F6,\u5B50\u7C7B\u5C3D\u91CF\u4E0D\u8981\u91CD\u5199\u7236\u7C7B\u7684\u65B9\u6CD5,\u9664\u975E\u8FEB\u4E0D\u5F97\u5DF2,\u5982\u679C\u975E\u8981\u91CD\u5199,\u5C31\u518D\u5199\u4E00\u4E2A\u66F4\u57FA\u7840\u7684\u7C7B,\u628A\u8FD9\u4E2A\u8981\u91CD\u5199\u7684\u65B9\u6CD5\u63D0\u5230\u57FA\u7C7B\u91CC\u9762\u53BB
b.\u9075\u5FAA\u91CC\u6C0F\u66FF\u6362\u539F\u5219,\u628A\u7EE7\u627F\u8FD9\u79CD\u9AD8\u8026\u5408\u7684\u5173\u7CFB\u8F6C\u6362\u4E3A\u805A\u5408\u3001\u7EC4\u5408\u3001\u4F9D\u8D56\u8FD9\u51E0\u79CD\u4F4E\u8026\u5408\u7684\u5173\u7CFB
</code></pre><h3 id="_3-6-2-\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-6-2-\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.6.2.\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801</h3><h4 id="_3-6-2-1-\u4E0D\u4F7F\u7528\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-6-2-1-\u4E0D\u4F7F\u7528\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.6.2.1.\u4E0D\u4F7F\u7528\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>liskov_substitution</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u672A\u4F7F\u7528\u91CC\u6C0F\u66FF\u6362\u539F\u5219
 * B1\u7C7B\u7EE7\u627F\u4E86A1\u7C7B\uFF0C\u5728\u4E0D\u77E5\u9053\u7684\u60C5\u51B5\u4E0B\u91CD\u4E0B\u4E86\u7236\u7C7BA1\u7684fun1()\u65B9\u6CD5\uFF0C\u5916\u90E8\u8C03\u7528\u5B50\u7C7BB1\u7C7B\u4E2D\u4E2Dfun1()\u7684\u65F6\u5019\u4EE5\u4E3A
 *      \u91CC\u9762\u7684\u903B\u8F91\u8FD8\u662Fa-b\uFF0C\u5176\u5B9E\u903B\u8F91\u5DF2\u7ECF\u5728\u4E0D\u77E5\u9053\u7684\u60C5\u51B5\u4E0B\u88AB\u91CD\u5199\u6210a+b\u4E86\uFF0C\u5BFC\u81F4\u8BA1\u7B97\u7ED3\u679C\u51FA\u4E86\u95EE\u9898
 *
 * \u7F3A\u70B9\uFF1AA1\u548CB1\u7684\u8026\u5408\u6027\u592A\u9AD8\u4E86\uFF0C\u4FEE\u6539B\u5F88\u5BB9\u6613\u5BF9A\u9020\u6210\u5F71\u54CD
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Liskov1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">A1</span> a1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;11-3 = &quot;</span><span class="token operator">+</span>a1<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;1-8 = &quot;</span><span class="token operator">+</span>a1<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">A1</span> b1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;11-3 = &quot;</span><span class="token operator">+</span>b1<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;1-8 = &quot;</span><span class="token operator">+</span>b1<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">A1</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE a\u4E0Eb\u7684\u5DEE
     * <span class="token keyword">@param</span> <span class="token parameter">a</span>
     * <span class="token keyword">@param</span> <span class="token parameter">b</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printHelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * B1\u7C7B\u7EE7\u627F\u4E86A1\u7C7B\uFF0C\u5728\u4E0D\u77E5\u9053\u7684\u60C5\u51B5\u4E0B\u91CD\u4E0B\u4E86\u7236\u7C7BA\u7684fun1()\u65B9\u6CD5
 */</span>
<span class="token keyword">class</span> <span class="token class-name">B1</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE a\u4E0Eb\u7684\u548C
     * <span class="token keyword">@param</span> <span class="token parameter">a</span>
     * <span class="token keyword">@param</span> <span class="token parameter">b</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * B1\u72EC\u6709\u65B9\u6CD5\uFF0C\u975E\u7EE7\u627F\u81EAA1
     * \u8FD4\u56DE a\u4E0Eb\u7684\u548C\u52A0\u4E0A9
     * <span class="token keyword">@param</span> <span class="token parameter">a</span>
     * <span class="token keyword">@param</span> <span class="token parameter">b</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">fun1</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">9</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printHelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="_3-6-2-2-\u4F7F\u7528\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-6-2-2-\u4F7F\u7528\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.6.2.2.\u4F7F\u7528\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>liskov_substitution</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4F7F\u7528\u91CC\u6C0F\u66FF\u6362\u539F\u5219\uFF1A
 *  1.B2\u7C7B\u4E0D\u518D\u7EE7\u627FA2\u7C7B\uFF0C\u6539\u4E3AA2\u7C7B\u548CB2\u7C7B\u90FD\u7EE7\u627F\u4E00\u4E2A\u57FA\u7C7BBase
 *  2.\u8FD9\u6837\u8C03\u7528\u8005\u901A\u8FC7\u67E5\u770B\u7EE7\u627F\u5173\u7CFB\uFF0C\u660E\u663E\u7684\u5C31\u77E5\u9053\u4E86B2\u7C7B\u4E2D\u7684fun1()\u91CC\u9762\u7684\u903B\u8F91\u662Fa+b\uFF0C\u800C\u4E0D\u662Fa-b
 *  3.\u628AA2\u548CB2\u4E2D\u7684\u516C\u7528\u65B9\u6CD5printHelloWorld()\u62BD\u53D6\u5230\u4E86Base\u4E2D
 *
 *  \u6CE8\u610F\uFF1A\u672C\u6765B2\u7EE7\u627F\u4E86A2\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8C03\u7528\u7236\u7C7BA2\u4E2D\u7684\u65B9\u6CD5\uFF0C\u91CC\u6C0F\u66FF\u6362\u539F\u5219\u4FEE\u6539\u4EE3\u7801\u540E\uFF0CB2\u4E0D\u518D\u7EE7\u627FA2\uFF0CB2\u60F3\u8981\u8C03\u7528A2\u4E2D\u7684\u65B9\u6CD5\u5219\u53EF\u4EE5\u901A\u8FC7\u4F9D\u8D56A2\u6765\u5B9E\u73B0\u8C03\u7528
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Liskov2</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u5C06A2\u548CB2\u4E2D\u7684\u516C\u7528\u65B9\u6CD5printHelloWorld()\u62BD\u53D6\u5230\u4E86Base\u4E2D
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printHelloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">class</span> <span class="token class-name">Base</span><span class="token punctuation">{</span>
    <span class="token comment">//\u628A\u66F4\u52A0\u57FA\u7840\u7684\u65B9\u6CD5\u548C\u6210\u5458\u5199\u5230Base\u7C7B\u4E2D</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">A2</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE a\u4E0Eb\u7684\u5DEE
     * <span class="token keyword">@param</span> <span class="token parameter">a</span>
     * <span class="token keyword">@param</span> <span class="token parameter">b</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">-</span>b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B2</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span>

    <span class="token comment">//B\u901A\u8FC7\u8FD9\u4E2A\u65B9\u5F0F\u4F9D\u8D56A</span>
    <span class="token keyword">private</span> <span class="token class-name">A2</span> a2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * \u8FD4\u56DE a\u4E0Eb\u7684\u548C
     * <span class="token keyword">@param</span> <span class="token parameter">a</span>
     * <span class="token keyword">@param</span> <span class="token parameter">b</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token operator">+</span>b<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * B2\u72EC\u6709\u65B9\u6CD5\uFF0C\u975E\u7EE7\u627F\u81EAA2
     * \u8FD4\u56DE a\u4E0Eb\u7684\u548C\u52A0\u4E0A9
     * <span class="token keyword">@param</span> <span class="token parameter">a</span>
     * <span class="token keyword">@param</span> <span class="token parameter">b</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">fun1</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">9</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u91CC\u6C0F\u66FF\u6362\u539F\u5219\uFF0C\u5982\u679CB2\u548CA2\u540C\u65F6\u7EE7\u627F\u4E86\u57FA\u7C7BBase\uFF0C\u90A3\u4E48\u5F53B2\u60F3\u8981\u4F7F\u7528A2\u7C7B\u4E2D\u7684\u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4F9D\u8D56\u7684\u65B9\u5F0F\u6765\u8C03\u7528A\u7C7B2\u4E2D\u7684\u65B9\u6CD5
     * <span class="token keyword">@param</span> <span class="token parameter">a</span>
     * <span class="token keyword">@param</span> <span class="token parameter">b</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">public</span>  <span class="token keyword">int</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span><span class="token keyword">int</span> b<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a2<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_3-7-\u5F00\u95ED\u539F\u5219ocp" tabindex="-1"><a class="header-anchor" href="#_3-7-\u5F00\u95ED\u539F\u5219ocp" aria-hidden="true">#</a> 3.7.\u5F00\u95ED\u539F\u5219OCP</h2><h3 id="_3-7-1-\u5F00\u95ED\u539F\u5219\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-7-1-\u5F00\u95ED\u539F\u5219\u4ECB\u7ECD" aria-hidden="true">#</a> 3.7.1.\u5F00\u95ED\u539F\u5219\u4ECB\u7ECD</h3><pre><code>\u6982\u8FF0
\u5BF9\u4FEE\u6539\u5173\u95ED,\u5BF9\u6269\u5C55\u5F00\u653E

\u5F00\u95ED\u539F\u5219\u8BE6\u7EC6\u8BF4\u660E
a.\u5F00\u95ED\u539F\u5219\u662F\u7F16\u7A0B\u4E2D\u6700\u57FA\u7840\uFF0C\u6700\u4E3A\u91CD\u8981\u7684\u539F\u5219
b.\u4E00\u4E2A\u8F6F\u4EF6\u5B9E\u4F53,\u51FD\u6570\u6A21\u5757\u5E94\u8BE5\u5BF9\u6269\u5C55\u5F00\u653E(\u5BF9\u63D0\u4F9B\u529F\u80FD\u7684\u4E00\u65B9\u800C\u8A00),\u5BF9\u4FEE\u6539\u5173\u95ED(\u5BF9\u8C03\u7528\u65B9/\u4F7F\u7528\u529F\u80FD\u7684\u4E00\u65B9\u800C\u8A00,\u6CE8\u610F:\u4E0D\u662F\u5BF9\u4E8E\u5BA2\u6237\u7AEF\u5F00\u653E,\u5BA2\u6237\u7AEF\u8C03\u7528\u65B9\u6CD5\u7684\u4F7F\u7528\u65B9)\u3002\u6362\u800C\u8A00\u4E4B,\u5F53\u5F53\u589E\u52A0\u4E00\u4E2A\u65B0\u7684\u7C7B\u6216\u8005\u65B9\u6CD5\u540E,\u539F\u5148\u6B63\u5728\u4F7F\u7528\u7684\u4EE3\u7801\u4E0D\u4F1A\u6536\u5230\u4E1D\u6BEB\u5F71\u54CD,\u6982\u62EC\u7684\u8BF4:\u5BF9\u6269\u5C55\u5F00\u653E,\u5BF9\u4FEE\u6539\u5173\u95ED,\u5373\u7528\u62BD\u8C61\u6784\u5EFA\u6846\u67B6,\u7528\u5B9E\u73B0\u6269\u5C55\u7EC6\u8282
c.\u5F53\u8F6F\u4EF6\u9700\u8981\u53D8\u5316\u65F6,\u5C3D\u91CF\u901A\u8FC7\u6269\u5C55\u8F6F\u4EF6\u7684\u5B9E\u4F53\u884C\u4E3A\u6765\u5B9E\u73B0\u53D8\u5316,\u800C\u4E0D\u662F\u901A\u8FC7\u4FEE\u6539\u5DF2\u6709\u7684\u4EE3\u7801\u53BB\u5B9E\u73B0,\u7B80\u5355\u7684\u8BF4,\u5C31\u662F\u901A\u8FC7\u6269\u5C55\u800C\u4E0D\u662F\u901A\u8FC7\u4FEE\u6539\u5DF2\u6709\u4EE3\u7801
d.\u4F7F\u7528\u8BBE\u8BA1\u6A21\u5F0F\u5C31\u662F\u4E3A\u4E86\u4F7F\u4EE3\u7801\u66F4\u9075\u5B88\u5F00\u95ED\u539F\u5219,\u662F\u6700\u91CD\u8981\u7684\u539F\u5219,\u5176\u4ED6\u7684\u8BBE\u8BA1\u6A21\u5F0F\u90FD\u662F\u4E3A\u4E86\u8FBE\u5230\u5F00\u95ED\u539F\u5219\u7684\u6548\u679C
e.\u9075\u5FAAOPC\u539F\u5219\u8BBE\u8BA1\u51FA\u6765\u7684\u7CFB\u7EDF\u610F\u5473\u7740\u5177\u6709\u76F8\u5F53\u7684\u7A33\u5B9A\u6027,\u81F3\u5C11\u5728\u589E\u52A0\u65B0\u529F\u80FD\u7684\u65F6\u5019\u4E0D\u4F1A\u5F71\u54CD\u65E7\u7684\u529F\u80FD,\u56E0\u4E3A\u65B0\u7684\u529F\u80FD\u662F\u901A\u8FC7\u6269\u5C55\u539F\u6765\u529F\u80FD,\u800C\u4E0D\u662F\u4FEE\u6539\u539F\u6765\u7684\u529F\u80FD,\u5728\u4EE3\u7801\u5C42\u9762\u7684\u4F53\u73B0\u662F\u65B0\u589E\u4E00\u4E2A\u529F\u80FD\u4E0D\u4F1A\u52A8\u539F\u6765\u7684\u4EE3\u7801,\u800C\u662F\u628A\u65B0\u7684\u529F\u80FD\u5199\u5728\u65B0\u7684\u7C7B\u4E2D
</code></pre><h3 id="_3-7-2-\u5F00\u95ED\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-7-2-\u5F00\u95ED\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.7.2.\u5F00\u95ED\u539F\u5219\u4EE3\u7801</h3><h4 id="_3-7-2-1-\u4E0D\u4F7F\u7528\u5F00\u95ED\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-7-2-1-\u4E0D\u4F7F\u7528\u5F00\u95ED\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.7.2.1.\u4E0D\u4F7F\u7528\u5F00\u95ED\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>open_close</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4E0D\u9075\u5FAAOCP\u539F\u5219\uFF0C\u76EE\u524D\u53EA\u6709\u4E00\u4E2A\u753B\u4E09\u89D2\u5F62\u7684\u9700\u6C42\uFF0C\u5F53\u589E\u52A0\u4E00\u4E2A\u753B\u5706\u5F62\u7684\u9700\u6C42\u7684\u65F6\u5019\uFF0C
 * \u4E0D\u4EC5\u8981\u5BF9\u65B9\u6CD5\u7684\u63D0\u4F9B\u8005Painter\u505A\u4FEE\u6539\uFF0C\u4E5F\u8981\u5BF9\u8C03\u7528\u8005\u505A\u4FEE\u6539
 *
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OCPTest1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Painter1</span> painter1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Painter1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        painter1<span class="token punctuation">.</span><span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Triagle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        painter1<span class="token punctuation">.</span><span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cricle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * \u65B9\u6CD5\u7684\u4F7F\u7528\u65B9:
 *      \u4E0D\u9075\u5B88OCP,\u6269\u5C55\u7684\u65F6\u5019\u8981\u5BF9\u65B9\u6CD5\u7684\u4F7F\u7528\u65B9\u505A\u4FEE\u6539
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Painter1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token class-name">Shape1</span> shape<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>shape<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">drawTriangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>shape<span class="token punctuation">.</span>type <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">drawTriangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u753B\u4E09\u89D2\u5F62...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">drawCircle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u753B\u5706\u5F62...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Shape1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> type<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u65B9\u6CD5\u7684\u63D0\u4F9B\u65B9
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Triagle1</span> <span class="token keyword">extends</span> <span class="token class-name">Shape1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Triagle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * \u65B9\u6CD5\u7684\u63D0\u4F9B\u65B9
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Cricle1</span> <span class="token keyword">extends</span> <span class="token class-name">Shape1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Cricle1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="_3-7-2-2-\u4F7F\u7528\u5F00\u95ED\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-7-2-2-\u4F7F\u7528\u5F00\u95ED\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.7.2.2.\u4F7F\u7528\u5F00\u95ED\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>open_close</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">OCPTest2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Painter2</span> painter2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Painter2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        painter2<span class="token punctuation">.</span><span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Triagle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        painter2<span class="token punctuation">.</span><span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Cricle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u65B9\u6CD5\u7684\u4F7F\u7528\u65B9:
 *      \u9075\u5B88OCP,\u6269\u5C55\u7684\u65F6\u5019\u4E0D\u7528\u518D\u5BF9\u65B9\u6CD5\u7684\u4F7F\u7528\u65B9\u505A\u4FEE\u6539
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Painter2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">drawShape</span><span class="token punctuation">(</span><span class="token class-name">Shape2</span> shape<span class="token punctuation">)</span><span class="token punctuation">{</span>
       shape<span class="token punctuation">.</span><span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Shape2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> type<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * \u65B9\u6CD5\u7684\u63D0\u4F9B\u65B9
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Triagle2</span> <span class="token keyword">extends</span> <span class="token class-name">Shape2</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Triagle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u753B\u4E09\u89D2\u5F62......&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * \u65B9\u6CD5\u7684\u63D0\u4F9B\u65B9
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Cricle2</span> <span class="token keyword">extends</span> <span class="token class-name">Shape2</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">Cricle2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span>type <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">draw</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;\u753B\u5706\u5F62......&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_3-8-\u8FEA\u7C73\u7279\u539F\u5219lod" tabindex="-1"><a class="header-anchor" href="#_3-8-\u8FEA\u7C73\u7279\u539F\u5219lod" aria-hidden="true">#</a> 3.8.\u8FEA\u7C73\u7279\u539F\u5219LoD</h2><h3 id="_3-8-1-\u8FEA\u7C73\u7279\u539F\u5219\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-8-1-\u8FEA\u7C73\u7279\u539F\u5219\u4ECB\u7ECD" aria-hidden="true">#</a> 3.8.1.\u8FEA\u7C73\u7279\u539F\u5219\u4ECB\u7ECD</h3><pre><code>\u6982\u8FF0
\u53EA\u4E0E\u76F4\u63A5\u7684\u670B\u53CB\u901A\u4FE1\uFF0C\u6700\u5C11\u77E5\u9053\u539F\u5219,\u907F\u514D\u4E0E\u975E\u76F4\u63A5\u670B\u53CB\u7684\u8026\u5408,\u5BF9\u81EA\u5DF1\u4F9D\u8D56\u7684\u7C7B\u77E5\u9053\u7684\u8D8A\u5C11\u8D8A\u597D,\u5BF9\u4E8E\u88AB\u4F9D\u8D56\u7684\u7C7B\u4E0D\u7BA1\u591A\u590D\u6742,\u90FD\u5C3D\u91CF\u5C06\u903B\u8F91\u5C01\u5728\u5185\u90E8\u3002\u9700\u8981\u6CE8\u610F\u7684\u662F\u964D\u4F4E\u7C7B\u4E4B\u95F4\u7684\u8026\u5408,\u53EA\u662F\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684\u8026\u5408,\u5E76\u4E0D\u662F\u8981\u6C42\u5B8C\u5168\u89E3\u9664\u8026\u5408

\u8FEA\u7C73\u7279\u539F\u5219\u8BE6\u7EC6\u8BF4\u660E
a.\u4E00\u4E2A\u5BF9\u8C61\u5E94\u8BE5\u5BF9\u5176\u4ED6\u5BF9\u8C61\u4FDD\u6301\u6700\u5C11\u7684\u4E86\u89E3
b.\u7C7B\u4E0E\u7C7B\u5173\u7CFB\u8D8A\u5BC6\u5207,\u8026\u5408\u5EA6\u8D8A\u5927
c.\u8FEA\u7C73\u7279\u539F\u5219\u53C8\u79F0\u6700\u5C11\u77E5\u9053\u539F\u5219,\u5373\u4E00\u4E2A\u7C7B\u5BF9\u81EA\u5DF1\u4F9D\u8D56\u7684\u7C7B\u77E5\u9053\u7684\u8D8A\u5C11\u8D8A\u597D,\u4E5F\u5C31\u662F\u8BF4,\u5BF9\u4E8E\u88AB\u4F9D\u8D56\u7684\u7C7B\u4E0D\u7BA1\u591A\u4E48\u590D\u6742,\u90FD\u5E94\u8BE5\u5C3D\u91CF\u5C06\u903B\u8F91\u5C01\u88C5\u5728\u7C7B\u7684\u5185\u90E8,\u9664\u4E86\u5BF9\u5916\u63D0\u4F9Bpublic\u65B9\u6CD5\u4E4B\u5916,\u4E0D\u5BF9\u5916\u6CC4\u9732\u4EFB\u4F55\u4FE1\u606F
e.\u8FEA\u7C73\u7279\u65B9\u6CD5\u8FD8\u6709\u4E2A\u66F4\u7B80\u5355\u7684\u5B9A\u4E49: \u53EA\u4E0E\u76F4\u63A5\u670B\u53CB\u901A\u4FE1
    \u76F4\u63A5\u670B\u53CB:\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u4F1A\u4E0E\u5176\u4ED6\u5BF9\u8C61\u6709\u8026\u5408\u5173\u7CFB,\u53EA\u8981\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u6709\u8026\u5408\u5173\u7CFB,\u6211\u4EEC\u5C31\u76F4\u63A5\u8BF4\u8FD9\u4E24\u4E2A\u5BF9\u8C61\u4E4B\u95F4\u662F\u670B\u53CB\u5173\u7CFB\u3002\u8026\u5408\u7684\u65B9\u5F0F\u6709\u5F88\u591A\u4F9D\u8D56\u3001\u5173\u8054\u3001\u7EC4\u5408\u3001\u805A\u5408\uFF0C\u5176\u4E2D\u6211\u4EEC\u5C06\u51FA\u73B0\u5728\u6210\u5458\u53D8\u91CF,\u65B9\u6CD5\u53C2\u6570,\u65B9\u6CD5\u8FD4\u56DE\u503C\u8FD9\u51E0\u4E2A\u4F4D\u7F6E\u4E2D\u7C7B\u79F0\u4E3A\u76F4\u63A5\u670B\u53CB,\u800C\u51FA\u73B0\u5728\u5C40\u90E8\u53D8\u91CF\u4E2D\u7684\u7C7B\u4E0D\u662F\u76F4\u63A5\u670B\u53CB,\u4E5F\u5C31\u662F\u8BF4,\u964C\u751F\u7684\u7C7B\u6700\u597D\u4E0D\u8981\u4EE5\u5C40\u90E8\u53D8\u91CF\u7684\u65B9\u5F0F\u51FA\u73B0\u5728\u7C7B\u7684\u5185\u90E8

\u76F4\u63A5\u670B\u53CB\u548C\u95F4\u63A5\u670B\u53CB
\u76F4\u63A5\u670B\u53CB:\u51FA\u73B0\u5728\u8FD4\u56DE\u503C\u3001\u6210\u5458\u53D8\u91CF\u3001\u65B9\u6CD5\u53C2\u6570\u4E2D\u7684\u7C7B
\u95F4\u63A5\u670B\u53CB:\u51FA\u73B0\u5728\u65B9\u6CD5\u4E2D\u4F5C\u4E3A\u5C40\u90E8\u53D8\u91CF\u7684\u7C7B
class A{
    public void fun(){}
}
class C{
    public void fun(){}
}
class B{
    //C\u5C31\u662FB\u7684\u76F4\u63A5\u670B\u53CB:\u51FA\u73B0\u5728\u6210\u5458\u53D8\u91CF\u4F4D\u7F6E
    private C c = new C();
    //C\u5C31\u662FB\u7684\u76F4\u63A5\u670B\u53CB:\u51FA\u73B0\u5728\u65B9\u6CD5\u53C2\u6570\u4F4D\u7F6E
    public void test1(C c){
        c.fun();
    }
    //C\u5C31\u662FB\u7684\u76F4\u63A5\u670B\u53CB:\u51FA\u73B0\u5728\u8FD4\u56DE\u503C\u4F4D\u7F6E
    public C test3(){
        return null;
    }
    public void test4(){
        //A\u5C31\u662FB\u7684\u95F4\u63A5\u670B\u53CB:\u51FA\u73B0\u5728\u65B9\u6CD5\u4E2D\u4F5C\u4E3A\u5C40\u90E8\u53D8\u91CF\u4F4D\u7F6E
        A a = new A();
        a.fun();
    }
}
</code></pre><h3 id="_3-8-2-\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-8-2-\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.8.2.\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801</h3><h4 id="_3-8-2-1-\u4E0D\u4F7F\u7528\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-8-2-1-\u4E0D\u4F7F\u7528\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.8.2.1.\u4E0D\u4F7F\u7528\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>demeter</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u672A\u9075\u5B88\u8FEA\u7C73\u7279\u6CD5\u5219
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demeter1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SchoolManager1</span> schoolManager1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SchoolManager1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        schoolManager1<span class="token punctuation">.</span><span class="token function">printAllEmployee</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CollegeManager1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B66\u6821\u603B\u90E8\u5458\u5DE5\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Employee1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B66\u9662\u5458\u5DE5\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name">CollegeEmployee1</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B66\u9662\u5458\u5DE5\u7BA1\u7406\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name">CollegeManager1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CollegeEmployee1</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAllCollegeEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CollegeEmployee1</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CollegeEmployee1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u589E\u52A010\u4E2A\u5458\u5DE5\u5230\u5B66\u9662</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">CollegeEmployee1</span> collegeEmployee <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CollegeEmployee1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            collegeEmployee<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u9662\u5458\u5DE5id&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>collegeEmployee<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B66\u6821\u603B\u90E8\u5458\u5DE5\u7BA1\u7406\u7C7B
 *  SchoolManager\u7684\u76F4\u63A5\u670B\u53CB\uFF1AEmployee\u3001CollegeManager
 *  SchoolManager\u7684\u975E\u76F4\u63A5\u670B\u53CB\uFF1ACollegeEmployee\uFF0C\u8FD9\u6837\u5C31 \u8FDD\u53CD\u4E86\u8FEA\u7C73\u7279\u6CD5\u5219\uFF08\u53EA\u4E0E\u76F4\u63A5\u7684\u670B\u53CB\u901A\u4FE1\uFF0C\u6700\u5C11\u77E5\u9053\u539F\u5219\uFF0C\u907F\u514D\u4E0E\u975E\u76F4\u63A5\u670B\u53CB\u7684\u8026\u5408\uFF09
 */</span>
<span class="token keyword">class</span> <span class="token class-name">SchoolManager1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee1</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAllEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee1</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee1</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u589E\u52A05\u4E2A\u5458\u5DE5\u5230\u5B66\u6821\u603B\u90E8</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Employee1</span> employee1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            employee1<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u6821\u603B\u90E8\u5458\u5DE5id&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>employee1<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8F93\u51FA\u5B66\u6821\u603B\u90E8\u548C\u5B66\u9662\u5458\u5DE5\u4FE1\u606F
     * <span class="token keyword">@param</span> <span class="token parameter">collegeManager1</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printAllEmployee</span><span class="token punctuation">(</span><span class="token class-name">CollegeManager1</span> collegeManager1<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CollegeEmployee1</span><span class="token punctuation">&gt;</span></span> allCollegeEmployee <span class="token operator">=</span> collegeManager1<span class="token punctuation">.</span><span class="token function">getAllCollegeEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------\u5B66\u9662\u5458\u5DE5--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">CollegeEmployee1</span> collegeEmployee1 <span class="token operator">:</span> allCollegeEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collegeEmployee1<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee1</span><span class="token punctuation">&gt;</span></span> allEmployee <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAllEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------\u5B66\u6821\u603B\u90E8\u5458\u5DE5--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Employee1</span> employee1 <span class="token operator">:</span> allEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>employee1<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h4 id="_3-8-2-2-\u4F7F\u7528\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-8-2-2-\u4F7F\u7528\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.8.2.2.\u4F7F\u7528\u8FEA\u7C73\u7279\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>demeter</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u4F7F\u7528\u8FEA\u7C73\u7279\u6CD5\u5219\u6539\u8FDB
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Demeter2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SchoolManager2</span> schoolManager2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SchoolManager2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        schoolManager2<span class="token punctuation">.</span><span class="token function">printAllEmployee</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">CollegeManager2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B66\u6821\u603B\u90E8\u5458\u5DE5\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Employee2</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B66\u9662\u5458\u5DE5\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name">CollegeEmployee2</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> id<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setId</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B66\u9662\u5458\u5DE5\u7BA1\u7406\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name">CollegeManager2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CollegeEmployee2</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAllCollegeEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CollegeEmployee2</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CollegeEmployee2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u589E\u52A010\u4E2A\u5458\u5DE5\u5230\u5B66\u9662</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">CollegeEmployee2</span> collegeEmployee2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CollegeEmployee2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            collegeEmployee2<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u9662\u5458\u5DE5id&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>collegeEmployee2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token doc-comment comment">/**
     * \u8F93\u51FA\u5B66\u9662\u5458\u5DE5\u4FE1\u606F
     * <span class="token keyword">@param</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printAllEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CollegeEmployee2</span><span class="token punctuation">&gt;</span></span> allCollegeEmployee <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAllCollegeEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------\u5B66\u9662\u5458\u5DE5--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">CollegeEmployee2</span> collegeEmployee2 <span class="token operator">:</span> allCollegeEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>collegeEmployee2<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u5B66\u6821\u603B\u90E8\u5458\u5DE5\u7BA1\u7406\u7C7B
 */</span>
<span class="token keyword">class</span> <span class="token class-name">SchoolManager2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee2</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAllEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee2</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee2</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//\u589E\u52A05\u4E2A\u5458\u5DE5\u5230\u5B66\u6821\u603B\u90E8</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">Employee2</span> employee2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Employee2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            employee2<span class="token punctuation">.</span><span class="token function">setId</span><span class="token punctuation">(</span><span class="token string">&quot;\u5B66\u6821\u603B\u90E8\u5458\u5DE5id&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>employee2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u8F93\u51FA\u5B66\u6821\u603B\u90E8\u5458\u5DE5\u4FE1\u606F
     * <span class="token keyword">@param</span> <span class="token parameter">collegeManager2</span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">printAllEmployee</span><span class="token punctuation">(</span><span class="token class-name">CollegeManager2</span> collegeManager2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">//\u8F93\u51FA\u5B66\u9662\u5458\u5DE5\u4FE1\u606F</span>
        collegeManager2<span class="token punctuation">.</span><span class="token function">printAllEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//\u8F93\u51FA\u5B66\u6821\u5458\u5DE5\u4FE1\u606F</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Employee2</span><span class="token punctuation">&gt;</span></span> allEmployee <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getAllEmployee</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;--------------\u5B66\u6821\u603B\u90E8\u5458\u5DE5--------------&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Employee2</span> employee2 <span class="token operator">:</span> allEmployee<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>employee2<span class="token punctuation">.</span><span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div><h2 id="_3-9-\u5408\u6210\u590D\u7528\u539F\u5219carp" tabindex="-1"><a class="header-anchor" href="#_3-9-\u5408\u6210\u590D\u7528\u539F\u5219carp" aria-hidden="true">#</a> 3.9.\u5408\u6210\u590D\u7528\u539F\u5219CARP</h2><h3 id="_3-9-1-\u5408\u6210\u590D\u7528\u539F\u5219\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#_3-9-1-\u5408\u6210\u590D\u7528\u539F\u5219\u4ECB\u7ECD" aria-hidden="true">#</a> 3.9.1.\u5408\u6210\u590D\u7528\u539F\u5219\u4ECB\u7ECD</h3><pre><code>\u6982\u8FF0
\u5C3D\u91CF\u4F7F\u7528\u5408\u6210/\u805A\u5408\u65B9\u6CD5,\u907F\u514D\u4F7F\u7528\u7EE7\u627F

\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u6709\u4EC0\u4E48\u6548\u679C
\u5F53A\u7EE7\u627FB\u540E,A\u62E5\u6709B\u6240\u6709\u7684\u65B9\u6CD5,\u4F7F\u7528\u5408\u6210\u590D\u7528\u6539\u8FDB\u540E,A\u53EF\u4EE5\u8C03\u7528B\u4E2D\u7684\u65B9\u6CD5,\u4E0D\u7528\u7684\u65B9\u6CD5\u5C31\u4E0D\u51FA\u73B0\u5728B\u4E2D\u4E86

\u5408\u6210\u590D\u7528\u539F\u5219\u4E0E\u7EE7\u627F\u539F\u5219\u5173\u7CFB
\u5728\u7F16\u7A0B\u4E2D,\u63A8\u8350\u5C3D\u91CF\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u6765\u4EE3\u66FF\u7EE7\u627F,\u4F46\u662F\u53CD\u8FC7\u6765,\u53EF\u4EE5\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u89E3\u51B3\u7684\u95EE\u9898\u4E5F\u53EF\u4EE5\u4F7F\u7528\u7EE7\u627F\u89E3\u51B3
</code></pre><h3 id="_3-9-2-\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-9-2-\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.9.2.\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801</h3><h4 id="_3-9-2-1-\u4E0D\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-9-2-1-\u4E0D\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.9.2.1.\u4E0D\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>compositereuse</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u5408\u6210\u590D\u7528\u539F\u5219
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CompositeReuse1</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u7EE7\u627F\u5173\u7CFB
 * \u5982\u679C\u60F3\u8BA9B1\u4F7F\u7528A1\u7684\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u8BA9B1\u7EE7\u627FA1,\u4E0D\u8FC7\uFF0C\u8FD9\u6837\u4F1A\u52A0\u91CDB1\u548CA1\u7684\u8026\u5408
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A1</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B1</span> <span class="token keyword">extends</span> <span class="token class-name">A1</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

</code></pre></div><h4 id="_3-9-2-2-\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-9-2-2-\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801" aria-hidden="true">#</a> 3.9.2.2.\u4F7F\u7528\u5408\u6210\u590D\u7528\u539F\u5219\u4EE3\u7801</h4><div class="language-java ext-java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>dragonsoft<span class="token punctuation">.</span>designpattern<span class="token punctuation">.</span>basic<span class="token punctuation">.</span>principles<span class="token punctuation">.</span>compositereuse</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * \u5408\u6210\u590D\u7528\u539F\u5219
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CompositeReuse2</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4EE3\u66FF\u7EE7\u627F\u5173\u7CFB\u7684\u65B9\u5F0F\u4E00\uFF1A\u4F9D\u8D56\u5173\u7CFB
 * \u5982\u679C\u60F3\u8BA9B1\u4F7F\u7528A1\u7684\u65B9\u6CD5\uFF0CB2\u4F9D\u8D56A2,\u5373\u5728B2\u7684\u65B9\u6CD5\u53C2\u6570\u4E2D\u4F20\u5165A2\uFF0C\u7136\u540E\u518D\u901A\u8FC7\u8C03\u7528A2\u5BF9\u8C61\u7684\u65B9\u6CD5\u6765\u5B9E\u73B0B2\u4F7F\u7528A2\u4E2D\u7684\u65B9\u6CD5
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A2</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B2</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token class-name">A2</span> a2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        a2<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token class-name">A2</span> a2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        a2<span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token class-name">A2</span> a2<span class="token punctuation">)</span><span class="token punctuation">{</span>
        a2<span class="token punctuation">.</span><span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4EE3\u66FF\u7EE7\u627F\u5173\u7CFB\u7684\u65B9\u5F0F\u4E8C\uFF1A\u805A\u5408\u5173\u7CFB
 * \u628AA3\u805A\u5408\u5230B3\u4E2D\uFF0C\u5373A3\u4F5C\u4E3AB3\u7684\u5C5E\u6027\u51FA\u73B0\u5728B3\u4E2D\uFF0C\u5E76\u4E14\u901A\u8FC7setter()\u65B9\u6CD5\u4E3AB3\u4E2D\u7684A3\u6CE8\u5165\u503C
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A3</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B3</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">A3</span> a3<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setA3</span><span class="token punctuation">(</span><span class="token class-name">A3</span> a3<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a3 <span class="token operator">=</span> a3<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a3<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a3<span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a3<span class="token punctuation">.</span><span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * \u4EE3\u66FF\u7EE7\u627F\u5173\u7CFB\u7684\u65B9\u5F0F\u4E09\uFF1A\u7EC4\u5408\u5173\u7CFB
 * \u8BA9A4\u4F5C\u4E3AB4\u7684\u5C5E\u6027\u51FA\u73B0\u5728B4\u4E2D\uFF0C\u800C\u4E14\u5F53B4\u521B\u5EFA\u5B8C\u6210\u540EA4\u5C31\u521B\u5EFA\u5B8C\u6210\u4E86\uFF0C\u79F0\u4E3A\u628AA4\u7EC4\u5408\u5230B4\u4E2D
 * \u8BA9A4\u4F5C\u4E3AB5\u7684\u5C5E\u6027\u51FA\u73B0\u5728B5\u4E2D\uFF0C\u800C\u4E14\u5F53B5\u521B\u5EFA\u5B8C\u6210\u540EA4\u5C31\u521B\u5EFA\u5B8C\u6210\u4E86\uFF0C\u79F0\u4E3A\u628AA5\u7EC4\u5408\u5230B4\u4E2D
 */</span>
<span class="token keyword">class</span> <span class="token class-name">A4</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u901A\u8FC7\u76F4\u63A5new\u7ED9\u6210\u5458\u53D8\u91CF\u8D4B\u503C</span>
<span class="token keyword">class</span> <span class="token class-name">B4</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">A4</span> a4 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">A4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a4<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a4<span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a4<span class="token punctuation">.</span><span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">//\u901A\u8FC7\u6784\u9020\u65B9\u6CD5\u7ED9\u6210\u5458\u53D8\u91CF\u8D4B\u503C</span>
<span class="token keyword">class</span> <span class="token class-name">B5</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">A4</span> a4<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token function">B5</span><span class="token punctuation">(</span><span class="token class-name">A4</span> a4<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a4 <span class="token operator">=</span> a4<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a4<span class="token punctuation">.</span><span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a4<span class="token punctuation">.</span><span class="token function">fun2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        a4<span class="token punctuation">.</span><span class="token function">fun3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre></div>`,72);function r(d,m){const p=s("Markmap"),t=s("ScrollIntoPageView"),o=s("HideSideBar");return e(),l("div",null,[k,n(p,{localtion:"/enhance/markmap/general/designpattern/designpattern-java/chapter/designpattern-java-outline5-chapter3.html",height:"500rem"}),i,n(t),n(o)])}var w=c(u,[["render",r],["__file","designpattern-java-chapter-3.\u8BBE\u8BA1\u6A21\u5F0F\u4E03\u5927\u539F\u5219.html.vue"]]);export{w as default};
