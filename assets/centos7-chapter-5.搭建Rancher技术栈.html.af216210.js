import{_ as o,o as d,c as h,a as e,d as n,r as a}from"./app.d4c08878.js";const s={},i=n(`<h1 id="_5-\u642D\u5EFArancher\u6280\u672F\u6808" tabindex="-1"><a class="header-anchor" href="#_5-\u642D\u5EFArancher\u6280\u672F\u6808" aria-hidden="true">#</a> 5.\u642D\u5EFARancher\u6280\u672F\u6808</h1><h2 id="_5-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_5-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 5.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 5.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 5.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 5.3.\u642D\u5EFARancher
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_5-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_5-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter5.html" target="_blank">5.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),l=n(`<h2 id="_5-3-\u642D\u5EFArancher" tabindex="-1"><a class="header-anchor" href="#_5-3-\u642D\u5EFArancher" aria-hidden="true">#</a> 5.3.\u642D\u5EFARancher</h2><pre><code>\u4E0B\u8F7Drancher
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker pull rancher/server
</code></pre></div><pre><code>\u542F\u52A8rancher
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>docker run -di --name=rancher -p9003:8080 rancher/server:latest
</code></pre></div><pre><code>\u4F7F\u7528rancher\u6269\u5BB9/\u7F29\u5BB9\u6CE8\u610F\u4E8B\u9879
\u5982\u679C\u8981\u4F7F\u7528\u6269\u5BB9\u6216\u8005\u7F29\u5BB9\u529F\u80FD,\u4E0D\u8981\u914D\u7F6Eeureka\u7684\u5982\u4E0B\u4FE1\u606F
eureka:
  instance:
	#\u4F7F\u7528rancher\u6269\u5BB9\u4E0D\u80FD\u914D\u7F6Einstance-id,\u5426\u5219\u4F1A\u51FA\u95EE\u9898
	#instance-id: \${spring.application.name}
	#\u4F7F\u7528rancher\u6269\u5BB9\u4E0D\u80FD\u914D\u7F6Eiip-address,\u5426\u5219\u4F1A\u51FA\u95EE\u9898
	#ip-address: 192.168.0.4

\u5F00\u653E\u7AEF\u53E3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>firewall-cmd --zone=public --add-port=9003/tcp --permanent &amp;&amp;
firewall-cmd --reload
</code></pre></div>`,7);function p(_,m){const r=a("Markmap"),c=a("ScrollIntoPageView"),t=a("HideSideBar");return d(),h("div",null,[i,e(r,{localtion:"/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter5.html",height:"500rem"}),l,e(c),e(t)])}var x=o(s,[["render",p],["__file","centos7-chapter-5.\u642D\u5EFARancher\u6280\u672F\u6808.html.vue"]]);export{x as default};
