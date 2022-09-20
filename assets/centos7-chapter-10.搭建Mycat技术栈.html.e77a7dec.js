import{_ as d,o,c as s,a as e,d as t,r as a}from"./app.d4c08878.js";const l={},p=t(`<h1 id="_10-\u642D\u5EFAmycat\u6280\u672F\u6808" tabindex="-1"><a class="header-anchor" href="#_10-\u642D\u5EFAmycat\u6280\u672F\u6808" aria-hidden="true">#</a> 10.\u642D\u5EFAMycat\u6280\u672F\u6808</h1><h2 id="_10-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_10-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 10.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 10.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 10.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 10.3.\u5B89\u88C5myact1.6
 10.4.\u642D\u5EFAmycat2
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_10-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_10-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter10.html" target="_blank">10.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),i=t(`<h2 id="_10-3-\u5B89\u88C5myact1-6" tabindex="-1"><a class="header-anchor" href="#_10-3-\u5B89\u88C5myact1-6" aria-hidden="true">#</a> 10.3.\u5B89\u88C5myact1.6</h2><h3 id="_10-3-1-\u670D\u52A1\u5668\u73AF\u5883\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_10-3-1-\u670D\u52A1\u5668\u73AF\u5883\u8BF4\u660E" aria-hidden="true">#</a> 10.3.1.\u670D\u52A1\u5668\u73AF\u5883\u8BF4\u660E</h3><pre><code>192.168.0.6 mycat1.6
192.168.0.7 mysql
192.168.0.8 mysql
</code></pre><h3 id="_10-3-2-\u642D\u5EFAjdk" tabindex="-1"><a class="header-anchor" href="#_10-3-2-\u642D\u5EFAjdk" aria-hidden="true">#</a> 10.3.2.\u642D\u5EFAJDK</h3><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883.html#_3-3-\u5B89\u88C5jdk" target="_blank">\u5B89\u88C5jdk(Centos7)</a></p><h3 id="_10-3-3-\u642D\u5EFAmyact1-6" tabindex="-1"><a class="header-anchor" href="#_10-3-3-\u642D\u5EFAmyact1-6" aria-hidden="true">#</a> 10.3.3.\u642D\u5EFAmyact1.6</h3><p><a href="http://www.mycat.org.cn/" target="_blank">\u5B98\u65B9\u7F51\u5740</a></p><div class="language-text ext-text"><pre class="language-text"><code>http://www.mycat.org.cn/
</code></pre></div><pre><code>\u4E0B\u8F7Dmycat1.6
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>wget http://dl.mycat.org.cn/1.6.7.3/20190828135747/Mycat-server-1.6.7.3-release-20190828135747-linux.tar.gz
</code></pre></div><pre><code>\u4E0A\u4F20\u5230 /opt/software/package

\u89E3\u538B\u5230/usr/local/bin
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>tar -zxvf Mycat-server-1.6.7.3-release-20190828135747-linux.tar.gz -C /usr/local/bin
</code></pre></div><pre><code>\u5220\u9664mycat\u4E2D\u4F4E\u7248\u672C\u7684mysql\u8FDE\u63A5\u5305\uFF08\u5982\u4F7F\u7528\u4F4E\u7248\u672C\u6570\u636E\u53EF\u4EE5\u4E0D\u5220\u9664\uFF09
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>rm -rf /usr/local/bin/mycat/lib/mysql-connector-java-5.1.35.jar
</code></pre></div><pre><code>\u66FF\u6362\u4F4E\u7248\u672C\u7684mysql\u8FDE\u63A5\u5305\u4E3A\u9AD8\u7248\u672C\u7684mysql\u8FDE\u63A5\u5305
\u4E0A\u4F20\u9002\u7528\u4E8Emysql8.0.29\u7684\u8FDE\u63A5\u5305\u5230/opt/software/package\uFF0C\u5E76\u590D\u5236\u4E00\u4EFD\u5230mycat\u7684\u6307\u5B9A\u6587\u4EF6\u5939\u4E2D
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>chomd 777 mysql-connector-java-8.0.29.jar &amp;&amp;
cp mysql-connector-java-8.0.29.jar /usr/local/bin/mycat/lib/
</code></pre></div><h3 id="_10-3-4-\u5728\u5404\u4E2A\u8282\u70B9\u4E0A\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#_10-3-4-\u5728\u5404\u4E2A\u8282\u70B9\u4E0A\u5B89\u88C5mysql" aria-hidden="true">#</a> 10.3.4.\u5728\u5404\u4E2A\u8282\u70B9\u4E0A\u5B89\u88C5mysql</h3><pre><code>\u5728\u8282\u70B91\u5B89\u88C5mysql8.0.29(192.168.0.7)
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883.html#_3-5-\u5B89\u88C5mysql" target="_blank">\u5B89\u88C5mysql8(Centos7)</a></p><pre><code>\u5728\u8282\u70B92\u5B89\u88C5mysql8.0.29(192.168.0.8)
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883.html#_3-5-\u5B89\u88C5mysql" target="_blank">\u5B89\u88C5mysql8(Centos7)</a></p><h3 id="_10-3-5-\u914D\u7F6Emycat" tabindex="-1"><a class="header-anchor" href="#_10-3-5-\u914D\u7F6Emycat" aria-hidden="true">#</a> 10.3.5.\u914D\u7F6Emycat</h3><pre><code>notepad++\u5B89\u88C5\u63D2\u4EF6
notepad++\u5B89\u88C5nppftp\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E4B\u540E\u81EA\u52A8\u53EF\u4EE5\u7F16\u8F91\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u6587\u672C\u6587\u4EF6
</code></pre><h3 id="_10-3-6-\u542F\u52A8\u548C\u5173\u95EDmycat-\u9ED8\u8BA4\u7AEF\u53E38066" tabindex="-1"><a class="header-anchor" href="#_10-3-6-\u542F\u52A8\u548C\u5173\u95EDmycat-\u9ED8\u8BA4\u7AEF\u53E38066" aria-hidden="true">#</a> 10.3.6.\u542F\u52A8\u548C\u5173\u95EDmycat\uFF0C\u9ED8\u8BA4\u7AEF\u53E38066</h3><pre><code>\u8FDB\u5165mycat\u5B89\u88C5\u76EE\u5F55
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /usr/local/bin/mycat
</code></pre></div><pre><code>\u542F\u52A8mycat
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>/bin/mycat start
</code></pre></div><pre><code>\u5173\u95EDmycat
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>/bin/mycat stop
</code></pre></div><pre><code>\u67E5\u770Bmycat\u65E5\u5FD7
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>tail -f logs/wrapper.log
</code></pre></div><pre><code>\u67E5\u770Bmycat\u72B6\u6001
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>bin/mycat status
</code></pre></div><pre><code>\u524D\u53F0\u542F\u52A8mycat
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>bin/mycat console #\u524D\u53F0\u542F\u52A8
</code></pre></div><h2 id="_10-4-\u642D\u5EFAmycat2" tabindex="-1"><a class="header-anchor" href="#_10-4-\u642D\u5EFAmycat2" aria-hidden="true">#</a> 10.4.\u642D\u5EFAmycat2</h2><h3 id="_10-4-1-\u670D\u52A1\u5668\u73AF\u5883\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_10-4-1-\u670D\u52A1\u5668\u73AF\u5883\u8BF4\u660E" aria-hidden="true">#</a> 10.4.1.\u670D\u52A1\u5668\u73AF\u5883\u8BF4\u660E</h3><pre><code>\u6CE8\u610F\u4E8B\u9879
mycat2\u9700\u8981\u4E00\u4E2A\u6570\u636E\u5E93\u6765\u5B58\u653E\u9ED8\u8BA4mycat2\u81EA\u8EAB\u8FD0\u884C\u6240\u9700\u7684\u6570\u636E

192.168.0.6 mycat2:jdk+mycat+mysql(\u9700\u8981\u5728192.168.0.6\u4E0A\u591A\u5B89\u88C5\u4E00\u4E2Amysql)
192.168.0.7 mysql
192.168.0.8 mysql
</code></pre><h3 id="_10-4-2-\u642D\u5EFAjdk" tabindex="-1"><a class="header-anchor" href="#_10-4-2-\u642D\u5EFAjdk" aria-hidden="true">#</a> 10.4.2.\u642D\u5EFAJDK</h3><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883.html#_3-3-\u5B89\u88C5jdk" target="_blank">\u5B89\u88C5jdk(Centos7)</a></p><h3 id="_10-4-3-\u5B89\u88C5mycat2\u81EA\u8EAB\u8FD0\u884C\u9700\u8981\u7684mysql8-192-168-0-6" tabindex="-1"><a class="header-anchor" href="#_10-4-3-\u5B89\u88C5mycat2\u81EA\u8EAB\u8FD0\u884C\u9700\u8981\u7684mysql8-192-168-0-6" aria-hidden="true">#</a> 10.4.3.\u5B89\u88C5mycat2\u81EA\u8EAB\u8FD0\u884C\u9700\u8981\u7684mysql8(192.168.0.6)</h3><pre><code>\u521B\u5EFA\u7528\u6237mycat\uFF08\u6CE8\u610F\uFF1A\u4E0D\u80FD\u4F7F\u7528root\u7528\u6237\uFF0C\u5FC5\u987B\u521B\u5EFAmycat\u8FD9\u4E2A\u7528\u6237\uFF09
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>CREATE USER &#39;mycat&#39;@&#39;%&#39; IDENTIFIED BY &#39;Mysql123456_&#39;;
</code></pre></div><pre><code>\u8D4B\u4E88\u6743\u9650
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>GRANT XA_RECOVER_ADMIN ON *.* TO &#39;root&#39;@&#39;%&#39;;
</code></pre></div><pre><code>\u8D4B\u4E88\u6743\u9650
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>GRANT ALL PRIVILEGES ON *.* TO &#39;mycat&#39;@&#39;%&#39; ;
</code></pre></div><pre><code>\u5237\u65B0\u914D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>flush privileges;
</code></pre></div><h3 id="_10-4-3-\u7EC4\u88C5mycat2\u5B8C\u6574\u7A0B\u5E8F\u5305" tabindex="-1"><a class="header-anchor" href="#_10-4-3-\u7EC4\u88C5mycat2\u5B8C\u6574\u7A0B\u5E8F\u5305" aria-hidden="true">#</a> 10.4.3.\u7EC4\u88C5mycat2\u5B8C\u6574\u7A0B\u5E8F\u5305</h3><pre><code>\u4E0B\u8F7Dmycat2\u5916\u58F3
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>wget http://dl.mycat.org.cn/2.0/install-template/mycat2-install-template-1.20.zip
</code></pre></div><pre><code>\u4E0B\u8F7Dmycat2\u6838\u5FC3jar
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>wget http://dl.mycat.org.cn/2.0/1.22-release/mycat2-1.20-jar-with-dependencies.jar
</code></pre></div><pre><code>\u7EC4\u88C5mycat2\u5E76\u4E0A\u4F20\u4E00\u4EFD\u5230/opt/software/package\u4E2D
\u89E3\u538Bzip\u5305\uFF0C\u628Ajar\u5305\u653E\u5165mycat2-install-template-1.20.zip/mycat/lib\u4E2D

\u4FEE\u6539/opt/software/package/mycat2-install-template-1.20/mycat/lib\u4E2D\u4E0B\u9762\u6587\u4EF6\u7684\u6743\u9650
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /opt/software/install/mycat/lib &amp;&amp;
chmod 777 libwrapper-linux-ppc-64.so &amp;&amp;
chmod 777 libwrapper-linux-x86-32.so &amp;&amp;
chmod 777 libwrapper-linux-x86-64.so &amp;&amp;
chmod 777 wrapper.jar
</code></pre></div><pre><code>\u4FEE\u6539/opt/software/package/mycat2-install-template-1.20/mycat/bin\u4E2D\u4E0B\u9762\u6587\u4EF6\u7684\u6743\u9650
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /opt/software/install/mycat/bin &amp;&amp;
chmod +x wrapper-linux-x86-64 &amp;&amp;
chmod +x wrapper-linux-x86-32 &amp;&amp;
chmod +x wrapper &amp;&amp;
chmod +x mycat
</code></pre></div><pre><code>\u66FF\u6362\u4F4E\u7248\u672C\u7684mysql\u8FDE\u63A5\u5305\u4E3A\u9AD8\u7248\u672C\u7684mysql\u8FDE\u63A5\u5305
\u4E0A\u4F20\u9002\u7528\u4E8Emysql8.0.29\u7684\u8FDE\u63A5\u5305\u5230/opt/software/package\uFF0C\u4FEE\u6539\u6743\u9650\u5E76\u590D\u5236\u4E00\u4EFD\u5230mycat\u7684\u6307\u5B9A\u6587\u4EF6\u5939\u4E2D

\u4FEE\u6539\u9ED8\u8BA4\u539F\u578B\u5E93\u7684\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /opt/software/package/mycat2-install-template-1.20/mycat/conf/datasource
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>vim prototypeDs.datasource.json
</code></pre></div><pre><code>\u4FEE\u6539\u4E0B\u9762\u4E09\u4E2A\u5B57\u6BB5\u7684\u503C
&quot;password&quot;:&quot;Mysql123456_&quot;,
&quot;url&quot;:&quot;jdbc:mysql://192.168.0.6:3306/mycat_prototy?useUnicode=true&amp;serverTimezone=Asia/Shanghai&amp;characterEncoding=UTF-8&quot;,
&quot;user&quot;:&quot;root&quot;
</code></pre><h3 id="_10-4-4-\u5728\u5404\u4E2A\u8282\u70B9\u4E0A\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#_10-4-4-\u5728\u5404\u4E2A\u8282\u70B9\u4E0A\u5B89\u88C5mysql" aria-hidden="true">#</a> 10.4.4.\u5728\u5404\u4E2A\u8282\u70B9\u4E0A\u5B89\u88C5mysql</h3><pre><code>\u5728\u8282\u70B91\u5B89\u88C5mysql8.0.29(192.168.0.7)
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883.html#_3-5-\u5B89\u88C5mysql" target="_blank">\u5B89\u88C5mysql8(Centos7)</a></p><pre><code>\u5728\u8282\u70B92\u5B89\u88C5mysql8.0.29(192.168.0.8)
</code></pre><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883.html#_3-5-\u5B89\u88C5mysql" target="_blank">\u5B89\u88C5mysql8(Centos7)</a></p><h3 id="_10-4-5-\u914D\u7F6Emycat" tabindex="-1"><a class="header-anchor" href="#_10-4-5-\u914D\u7F6Emycat" aria-hidden="true">#</a> 10.4.5.\u914D\u7F6Emycat</h3><pre><code>notepad++\u5B89\u88C5\u63D2\u4EF6
notepad++\u5B89\u88C5nppftp\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u8FDE\u63A5\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E4B\u540E\u81EA\u52A8\u53EF\u4EE5\u7F16\u8F91\u8FDC\u7A0B\u670D\u52A1\u5668\u7684\u6587\u672C\u6587\u4EF6
</code></pre><h3 id="_10-4-6-\u542F\u52A8\u548C\u5173\u95EDmycat-\u9ED8\u8BA4\u7AEF\u53E38066" tabindex="-1"><a class="header-anchor" href="#_10-4-6-\u542F\u52A8\u548C\u5173\u95EDmycat-\u9ED8\u8BA4\u7AEF\u53E38066" aria-hidden="true">#</a> 10.4.6.\u542F\u52A8\u548C\u5173\u95EDmycat\uFF0C\u9ED8\u8BA4\u7AEF\u53E38066</h3><pre><code>\u8FDB\u5165mycat\u5B89\u88C5\u76EE\u5F55
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /opt/software/install/mycat/bin
</code></pre></div><pre><code>\u542F\u52A8mycat
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>/bin/mycat start
</code></pre></div><pre><code>\u5173\u95EDmycat
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>/bin/mycat stop
</code></pre></div><pre><code>\u67E5\u770Bmycat\u65E5\u5FD7
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>tail -f logs/wrapper.log
</code></pre></div><pre><code>\u67E5\u770Bmycat\u72B6\u6001
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>bin/mycat status
</code></pre></div><pre><code>\u524D\u53F0\u542F\u52A8mycat
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>bin/mycat console #\u524D\u53F0\u542F\u52A8
</code></pre></div>`,83);function m(h,g){const c=a("Markmap"),n=a("ScrollIntoPageView"),r=a("HideSideBar");return o(),s("div",null,[p,e(c,{localtion:"/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter10.html",height:"500rem"}),i,e(n),e(r)])}var y=d(l,[["render",m],["__file","centos7-chapter-10.\u642D\u5EFAMycat\u6280\u672F\u6808.html.vue"]]);export{y as default};
