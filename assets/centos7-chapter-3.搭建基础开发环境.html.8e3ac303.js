import{_ as d,o,c as s,a as e,d as a,r as t}from"./app.d4c08878.js";const l={},p=a(`<h1 id="_3-\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#_3-\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a> 3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883</h1><h2 id="_3-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_3-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 3.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 3.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 3.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 3.3.\u5B89\u88C5jdk
 3.4.\u5B89\u88C5maven
 3.5.\u5B89\u88C5mysql
 3.6.\u5B89\u88C5nodejs
 3.7.\u5B89\u88C5fastgithub
 3.8.\u5B89\u88C5git
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_3-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_3-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter3.html" target="_blank">3.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),g=a(`<h2 id="_3-3-\u5B89\u88C5jdk" tabindex="-1"><a class="header-anchor" href="#_3-3-\u5B89\u88C5jdk" aria-hidden="true">#</a> 3.3.\u5B89\u88C5jdk</h2><pre><code>\u67E5\u770B\u5F53\u524D\u5B89\u88C5\u7684java\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum list installed | grep java
</code></pre></div><pre><code>\u5378\u8F7D\u65E7\u7248\u672Cjdk
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y remove xxx
</code></pre></div><pre><code>\u521B\u5EFA\u5B58\u653E\u5B89\u88C5\u5305\u7684\u76EE\u5F55-&gt;\u5207\u6362\u5230\u8BE5\u76EE\u5F55-&gt;\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Djdk
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1659088335906:c2e556a8a52386cbe0c6361ee3a7d8a21d3c9ca0 \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/jdk-8u181-linux-x64.tar.gz?\\
version=latest&quot; -o jdk-8u181-linux-x64.tar.gz
</code></pre></div><pre><code>\u89E3\u538Bjdk\u540E\u8D4B\u4E88\u6743\u9650\u5E76\u653E\u5165\u6307\u5B9A\u76EE\u5F55
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /opt/software/package &amp;&amp;
tar -zxvf jdk-8u181-linux-x64.tar.gz &amp;&amp;
chmod +x jdk1.8.0_181 &amp;&amp;
mv jdk1.8.0_181 /usr/local/bin/jdk1.8.0_181
</code></pre></div><pre><code>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim /etc/profile
</code></pre></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>export JAVA_HOME=/usr/local/bin/jdk1.8.0_181
export JRE_HOME=\${JAVA_HOME}/jre
export CLASSPATH=.:\${JAVA_HOME}/lib:\${JRE_HOME}/lib
export PATH=\${JAVA_HOME}/bin:$PATH
</code></pre></div><pre><code>\u5237\u65B0\u73AF\u5883\u53D8\u91CF\u6587\u4EF6
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>source /etc/profile
</code></pre></div><pre><code>\u67E5\u770Bjava\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>java -version
</code></pre></div><h2 id="_3-4-\u5B89\u88C5maven" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5B89\u88C5maven" aria-hidden="true">#</a> 3.4.\u5B89\u88C5maven</h2><pre><code>\u6CE8\u610F
maven linux\u7248\u548Cwindows\u7248\u5E76\u4E0D\u901A\u7528

\u521B\u5EFA\u5B58\u653E\u5B89\u88C5\u5305\u7684\u76EE\u5F55-&gt;\u5E76\u5207\u6362\u5230\u8BE5\u76EE\u5F55-&gt;\u5728\u8BE5\u76EE\u5F55\u4E2D\u4E0B\u8F7Dmaven
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mkdir -p /opt/software/package &amp;&amp;
cd /opt/software/package &amp;&amp;
curl -fL -u software-1659088796431:ba211676fbe4a719c3b40b22083cd70388d41acc \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/apache-maven-3.8.6-bin.tar.gz\\
?version=latest&quot; -o apache-maven-3.8.6-bin.tar.gz
</code></pre></div><pre><code>\u89E3\u538B\u5230/usr/local/bin/\u76EE\u5F55\u4E0B
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>tar -zxvf apache-maven-3.8.6-bin.tar.gz -C /usr/local/bin
</code></pre></div><pre><code>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim  /etc/profile
</code></pre></div><pre><code>\u6DFB\u52A0\u5982\u4E0B\u5185\u5BB9
\u6CE8\u610F\u4E8B\u9879
\u4E0D\u8981\u4FEE\u6539\u539F\u6765\u7684path\uFF0C\u76F4\u63A5\u5728\u4E0B\u9762\u6DFB\u52A0\u65B0\u7684PATH\u914D\u7F6E\uFF0C\u4F7F\u7528$PATH\u5F15\u7528\u4E0A\u9762\u7684PATH
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>export M2_HOME=/usr/local/bin/apache-maven-3.8.6
export PATH=$PATH:$M2_HOME/bin
</code></pre></div><pre><code>\u5237\u65B0\u914D\u7F6E\u6587\u4EF6
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>source /etc/profile
</code></pre></div><pre><code>\u67E5\u770Bmaven\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mvn -v
</code></pre></div><pre><code>\u4FEE\u6539maven\u7684settings.xml\uFF0C\u4ED3\u5E93\u6E90&lt;mirrors&gt;&lt;/mirrors&gt;\u4E2D\u6DFB\u52A0\u5982\u4E0B\u4FE1\u606F:
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>vim /usr/local/bin/apache-maven-3.8.6/conf/settings.xml
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>&lt;mirror&gt;
	&lt;id&gt;alimaven&lt;/id&gt;
	&lt;name&gt;aliyun maven&lt;/name&gt;
	&lt;url&gt;http://maven.aliyun.com/nexus/content/groups/public/&lt;/url&gt;
	&lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
&lt;/mirror&gt;
&lt;mirror&gt;
	&lt;id&gt;repo2&lt;/id&gt;
	&lt;name&gt;Mirror from Maven Repo2&lt;/name&gt;
	&lt;url&gt;http://repo2.maven.org/maven2/&lt;/url&gt;
	&lt;mirrorOf&gt;central&lt;/mirrorOf&gt;
&lt;/mirror&gt;
</code></pre></div><h2 id="_3-5-\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#_3-5-\u5B89\u88C5mysql" aria-hidden="true">#</a> 3.5.\u5B89\u88C5mysql</h2><pre><code>\u5B89\u88C5\u5EFA\u8BAE
\u4F7F\u7528mysql\u5B98\u65B9yum\u6E90\u5728\u7EBF\u5B89\u88C5(\u4E0D\u8981\u4F7F\u7528rpm\u65B9\u5F0F\u5B89\u88C5\uFF0C\u975E\u5E38\u96BE\u4EE5\u5B89\u88C5\u6210\u529F)

\u67E5\u770B\u5F53\u524D\u5B89\u88C5\u7684mysql\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum list installed | grep mysql
</code></pre></div><pre><code>\u6216
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>rpm -qa | grep mysql
</code></pre></div><pre><code>\u5378\u8F7D\u65E7\u7248\u672Cmysql
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y remove xxx
</code></pre></div><pre><code>Centos\u7EC8\u7AEF\u83B7\u53D6yum\u6E90\u5B89\u88C5\u5305\uFF1A
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cd /opt/software/package &amp;&amp;
wget https://dev.mysql.com/get/mysql80-community-release-el7-3.noarch.rpm
</code></pre></div><pre><code>\u5B89\u88C5mysql\u7684yum\u6E90\uFF1A\uFF08\u4E8C\u9009\u4E00\uFF09
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>rpm -Uvh mysql80-community-release-el7-3.noarch.rpm
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>rpm -ivh mysql80-community-release-el7-3.noarch.rpm
</code></pre></div><pre><code>\u67E5\u770B\u521A\u624D\u4E0B\u8F7D\u7684mysql\u5B89\u88C5\u6E90\uFF0C\u53EF\u4EE5\u770B\u5230\u65B0\u589E\u7684\u4E24\u4E2Amysql\u6E90
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>ls /etc/yum.repos.d
</code></pre></div><pre><code>[root@localhost package]# ls /etc/yum.repos.d
CentOS-Base.repo      CentOS-Debuginfo.repo  CentOS-Vault.repo          mysql-community-source.repo
CentOS-Base.repo.bak  CentOS-Media.repo      CentOS-fasttrack.repo      mysql-community.repo
CentOS-CR.repo        CentOS-Sources.repo    CentOS-x86_64-kernel.repo

\u4FEE\u6539\u6E90\u4E2D\u7684\u914D\u7F6E\uFF0C\u5C06\u6240\u6709\u7684gpgkey\u7684\u503C\u4FEE\u6539\u4E3Ahttps://repo.mysql.com/RPM-GPG-KEY-mysql-2022
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sed -i &#39;s#file:///etc/pki/rpm-gpg/RPM-GPG-KEY-mysql#https://repo.mysql.com/\\
RPM-GPG-KEY-mysql-2022#g&#39; /etc/yum.repos.d/mysql-community.repo
</code></pre></div><pre><code>\u4F7F\u7528yum\u5728\u7EBF\u5B89\u88C5mysql
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install mysql-community-server
</code></pre></div><pre><code>\u542F\u52A8mysql-server
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl start mysqld.service &amp;&amp;
systemctl enable mysqld.service
</code></pre></div><pre><code>\u67E5\u770Bmysql-server\u542F\u52A8\u72B6\u6001\uFF1A
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>systemctl status mysqld
</code></pre></div><pre><code>\u521D\u59CB\u5316mysql
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>mysqld --initialize
</code></pre></div><pre><code>\u67E5\u770Bmysql8\u767B\u5F55\u5BC6\u7801
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>cat /var/log/mysqld.log | grep &#39;temporary password&#39;
</code></pre></div><pre><code>\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A
2022-07-18T18:31:57.277661Z 6 [Note] [MY-010454] [Server]
	A temporary password is generated for root@localhost: %)4(26e++jaK
</code></pre><p>\u767B\u5F55mysql</p><div class="language-text ext-text"><pre class="language-text"><code>mysql -uroot -p&#39;%)4(26e++jaK&#39;
</code></pre></div><pre><code>\u4FEE\u6539mysql\u521D\u59CB\u5BC6\u7801\uFF0C\u89C4\u5219\u5927\u5C0F\u5199\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u7279\u6B8A\u7B26\u53F7\uFF0C\u6700\u5C118\u4F4D
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>ALTER USER USER() IDENTIFIED BY &#39;Mysql123456_&#39;;
FLUSH PRIVILEGES;
</code></pre></div><pre><code>\u6269\u5C55\u6216\u8005\u6DFB\u52A0\u8FDC\u7A0B\u7528\u6237\u6743\u9650
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>use mysql;
update user set host=&#39;%&#39; where user=&#39;root&#39;;
flush privileges;
</code></pre></div><h2 id="_3-6-\u5B89\u88C5nodejs" tabindex="-1"><a class="header-anchor" href="#_3-6-\u5B89\u88C5nodejs" aria-hidden="true">#</a> 3.6.\u5B89\u88C5nodejs</h2><pre><code>\u5B89\u88C5gcc
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum install gcc gcc-c++
</code></pre></div><pre><code>\u4E0B\u8F7Dnode\u56FD\u5185\u955C\u50CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>wget https://registry.npmmirror.com/-/binary/node/v14.0.0/node-v14.0.0-linux-x64.tar.gz
</code></pre></div><pre><code>\u89E3\u538B\u5E76\u91CD\u547D\u540D\u6587\u4EF6\u5939
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>tar -xvf node-v14.0.0-linux-x64.tar.gz &amp;&amp;
mv node-v14.0.0-linux-x64 node
</code></pre></div><pre><code>\u914D\u7F6E\u73AF\u5883\u53D8\u91CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>echo &#39;export NODE_HOME=/root/node&#39; &gt;&gt; /etc/profile &amp;&amp;
echo &#39;export PATH=$PATH:$NODE_HOME/bin&#39;  &gt;&gt; /etc/profile
</code></pre></div><pre><code>\u5237\u65B0\u73AF\u5883\u53D8\u91CF\u914D\u7F6E
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>source /etc/profile
</code></pre></div><pre><code>\u9A8C\u8BC1\u7ED3\u679C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>node -v
</code></pre></div><div class="language-text ext-text"><pre class="language-text"><code>npm -v
</code></pre></div><h2 id="_3-7-\u5B89\u88C5fastgithub" tabindex="-1"><a class="header-anchor" href="#_3-7-\u5B89\u88C5fastgithub" aria-hidden="true">#</a> 3.7.\u5B89\u88C5fastgithub</h2><pre><code>\u4E0B\u8F7D\u4F9D\u8D56\u5305
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install libicu
</code></pre></div><pre><code>\u4E0B\u8F7DfastGithub
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>curl -fL -u fastgithub-1660864382041:5d8500249a7d3da57c34a3214397f54709cf55dc \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/fastgithub/v2.1.4/fastgithub_linux-x64.zip?version=2.1.4&quot; \\
-o fastgithub_linux-x64.zip
</code></pre></div><pre><code>\u89E3\u538B
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>unzip fastgithub_linux-x64.zip
</code></pre></div><pre><code>\u8BBE\u7F6E\u6743\u9650
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>chmod -R 777 fastgithub_linux-x64/dnscrypt-proxy &amp;&amp;
chmod +x fastgithub_linux-x64/fastgithub
</code></pre></div><pre><code>\u4EE5\u670D\u52A1\u5F62\u5F0F\u8FD0\u884CfastGithub
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo ./fastgithub_linux-x64/fastgithub start &amp;&amp;
systemctl enable fastgithub
</code></pre></div><pre><code>\u4EE5\u670D\u52A1\u5F62\u5F0F\u505C\u6B62fastgithub
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>sudo ./fastgithub_linux-x64/fastgithub stop
</code></pre></div><pre><code>\u6D4B\u8BD5\u8FD0\u884C\u6548\u679C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>wget -c https://github.com/tanghaibao/goatools/blob/main/data/association.txt
</code></pre></div><pre><code>\u914D\u7F6Egit\u4F7F\u7528\u4EE3\u7406\uFF08\u4E0D\u914D\u7F6E\u65E0\u6CD5\u63D0\u4EA4\u4EE3\u7801\uFF09
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>
</code></pre></div><pre><code>\u67E5\u770Bgit config
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>git config --list
</code></pre></div><h2 id="_3-8-\u5B89\u88C5git" tabindex="-1"><a class="header-anchor" href="#_3-8-\u5B89\u88C5git" aria-hidden="true">#</a> 3.8.\u5B89\u88C5git</h2><h3 id="_3-8-1-\u5B89\u88C5\u9ED8\u8BA4\u7248\u672Cgit" tabindex="-1"><a class="header-anchor" href="#_3-8-1-\u5B89\u88C5\u9ED8\u8BA4\u7248\u672Cgit" aria-hidden="true">#</a> 3.8.1.\u5B89\u88C5\u9ED8\u8BA4\u7248\u672Cgit</h3><pre><code>\u5378\u8F7D\u65E7\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y remove git
</code></pre></div><pre><code>\u5B89\u88C5git
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum install -y git
</code></pre></div><pre><code>\u67E5\u770B\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>git version
</code></pre></div><h3 id="_3-8-2-\u5B89\u88C5\u6307\u5B9A\u7248\u672Cgit" tabindex="-1"><a class="header-anchor" href="#_3-8-2-\u5B89\u88C5\u6307\u5B9A\u7248\u672Cgit" aria-hidden="true">#</a> 3.8.2.\u5B89\u88C5\u6307\u5B9A\u7248\u672Cgit</h3><pre><code>\u4E0B\u8F7D\u9700\u8981\u5B89\u88C5\u7684\u7248\u672C\u53F7
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>https://mirrors.edge.kernel.org/pub/software/scm/git/
</code></pre></div><pre><code>\u6216
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>curl -fL -u software-1662543378297:709127e14ec237057db48199b841a245c3ec9762 \\
&quot;https://lingwh-generic.pkg.coding.net/coding-drive/software/git-2.29.0.tar.gz?version=latest&quot; \\
-o git-2.29.0.tar.gz
</code></pre></div><pre><code>\u5B89\u88C5\u9700\u8981\u7684\u7EC4\u4EF6
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
</code></pre></div><pre><code>\u5378\u8F7DCentos\u81EA\u5E26\u7684git
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>yum -y remove git
</code></pre></div><pre><code>\u5B89\u88C5git
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>tar -zxf git-2.29.0.tar.gz &amp;&amp;
cd git-2.29.0 &amp;&amp;
make prefix=/usr/local/git all &amp;&amp;
make prefix=/usr/local/git install
</code></pre></div><pre><code>\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>echo &#39;export PATH=$PATH:/usr/local/git/bin&#39; &gt;&gt; /etc/profile
</code></pre></div><pre><code>\u5237\u65B0\u73AF\u5883\u53D8\u91CF
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>source /etc/profile
</code></pre></div><pre><code>\u67E5\u770B\u7248\u672C
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>git version
</code></pre></div>`,124);function i(x,u){const c=t("Markmap"),r=t("ScrollIntoPageView"),n=t("HideSideBar");return o(),s("div",null,[p,e(c,{localtion:"/enhance/markmap/environment/centos/centos7/chapter/centos7-outline5-chapter3.html",height:"500rem"}),g,e(r),e(n)])}var v=d(l,[["render",i],["__file","centos7-chapter-3.\u642D\u5EFA\u57FA\u7840\u5F00\u53D1\u73AF\u5883.html.vue"]]);export{v as default};
