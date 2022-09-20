import{_ as u,o as a,c as g,a as t,d as o,r as e}from"./app.d4c08878.js";const p={},s=o(`<h1 id="_18-\u4F7F\u7528mycat\u63D0\u5347\u6570\u636E\u5E93\u541E\u5410\u80FD\u529B" tabindex="-1"><a class="header-anchor" href="#_18-\u4F7F\u7528mycat\u63D0\u5347\u6570\u636E\u5E93\u541E\u5410\u80FD\u529B" aria-hidden="true">#</a> 18.\u4F7F\u7528mycat\u63D0\u5347\u6570\u636E\u5E93\u541E\u5410\u80FD\u529B</h1><h2 id="_18-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_18-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0" aria-hidden="true">#</a> 18.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0</h2><pre><code>\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A
 18.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0
 18.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2
 18.3.\u642D\u5EFAmycat+mysql
 18.4.\u914D\u7F6Emycat
 18.5.\u4F7F\u7528mycat
\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B\u3002
</code></pre><h2 id="_18-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" tabindex="-1"><a class="header-anchor" href="#_18-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2" aria-hidden="true">#</a> <a href="/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter18.html" target="_blank">18.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2</a></h2>`,4),q=o(`<h2 id="_18-3-\u642D\u5EFAmycat-mysql" tabindex="-1"><a class="header-anchor" href="#_18-3-\u642D\u5EFAmycat-mysql" aria-hidden="true">#</a> 18.3.\u642D\u5EFAmycat+mysql</h2><p>\u8BE6\u7EC6\u53C2\u8003-&gt; <a href="/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-10.\u642D\u5EFAMycat\u6280\u672F\u6808.html#_10-3-\u5B89\u88C5myact1-6" target="_blank">\u642D\u5EFAmycat+mysql</a></p><h2 id="_18-4-\u914D\u7F6Emycat" tabindex="-1"><a class="header-anchor" href="#_18-4-\u914D\u7F6Emycat" aria-hidden="true">#</a> 18.4.\u914D\u7F6Emycat</h2><pre><code>autopartition-long.txt
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>0-5=0
5-100M=1
</code></pre></div><pre><code>rule.xml
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!-- - - Licensed under the Apache License, Version 2.0 (the &quot;License&quot;); 
	- you may not use this file except in compliance with the License. - You 
	may obtain a copy of the License at - - http://www.apache.org/licenses/LICENSE-2.0 
	- - Unless required by applicable law or agreed to in writing, software - 
	distributed under the License is distributed on an &quot;AS IS&quot; BASIS, - WITHOUT 
	WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. - See the 
	License for the specific language governing permissions and - limitations 
	under the License. --&gt;
&lt;!DOCTYPE mycat:rule SYSTEM &quot;rule.dtd&quot;&gt;
&lt;mycat:rule xmlns:mycat=&quot;http://io.mycat/&quot;&gt;
	&lt;tableRule name=&quot;rule1&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;id&lt;/columns&gt;
			&lt;algorithm&gt;func1&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;

	&lt;tableRule name=&quot;rule2&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;user_id&lt;/columns&gt;
			&lt;algorithm&gt;func1&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;

	&lt;tableRule name=&quot;sharding-by-intfile&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;sharding_id&lt;/columns&gt;
			&lt;algorithm&gt;hash-int&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;
	&lt;tableRule name=&quot;auto-sharding-long&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;id&lt;/columns&gt;
			&lt;algorithm&gt;rang-long&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;
	&lt;tableRule name=&quot;mod-long&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;u_id&lt;/columns&gt;
			&lt;algorithm&gt;mod-long&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;
	&lt;tableRule name=&quot;sharding-by-murmur&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;id&lt;/columns&gt;
			&lt;algorithm&gt;murmur&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;
	&lt;tableRule name=&quot;crc32slot&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;id&lt;/columns&gt;
			&lt;algorithm&gt;crc32slot&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;
	&lt;tableRule name=&quot;sharding-by-month&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;create_time&lt;/columns&gt;
			&lt;algorithm&gt;partbymonth&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;
	&lt;tableRule name=&quot;latest-month-calldate&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;calldate&lt;/columns&gt;
			&lt;algorithm&gt;latestMonth&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;

	&lt;tableRule name=&quot;auto-sharding-rang-mod&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;id&lt;/columns&gt;
			&lt;algorithm&gt;rang-mod&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;

	&lt;tableRule name=&quot;jch&quot;&gt;
		&lt;rule&gt;
			&lt;columns&gt;id&lt;/columns&gt;
			&lt;algorithm&gt;jump-consistent-hash&lt;/algorithm&gt;
		&lt;/rule&gt;
	&lt;/tableRule&gt;

	&lt;function name=&quot;murmur&quot;
		class=&quot;io.mycat.route.function.PartitionByMurmurHash&quot;&gt;
		&lt;property name=&quot;seed&quot;&gt;0&lt;/property&gt;&lt;!-- \u9ED8\u8BA4\u662F0 --&gt;
		&lt;property name=&quot;count&quot;&gt;2&lt;/property&gt;&lt;!-- \u8981\u5206\u7247\u7684\u6570\u636E\u5E93\u8282\u70B9\u6570\u91CF\uFF0C\u5FC5\u987B\u6307\u5B9A\uFF0C\u5426\u5219\u6CA1\u6CD5\u5206\u7247 --&gt;
		&lt;property name=&quot;virtualBucketTimes&quot;&gt;160&lt;/property&gt;&lt;!-- \u4E00\u4E2A\u5B9E\u9645\u7684\u6570\u636E\u5E93\u8282\u70B9\u88AB\u6620\u5C04\u4E3A\u8FD9\u4E48\u591A\u865A\u62DF\u8282\u70B9\uFF0C\u9ED8\u8BA4\u662F160\u500D\uFF0C\u4E5F\u5C31\u662F\u865A\u62DF\u8282\u70B9\u6570\u662F\u7269\u7406\u8282\u70B9\u6570\u7684160\u500D --&gt;
		&lt;!-- &lt;property name=&quot;weightMapFile&quot;&gt;weightMapFile&lt;/property&gt; \u8282\u70B9\u7684\u6743\u91CD\uFF0C\u6CA1\u6709\u6307\u5B9A\u6743\u91CD\u7684\u8282\u70B9\u9ED8\u8BA4\u662F1\u3002\u4EE5properties\u6587\u4EF6\u7684\u683C\u5F0F\u586B\u5199\uFF0C\u4EE5\u4ECE0\u5F00\u59CB\u5230count-1\u7684\u6574\u6570\u503C\u4E5F\u5C31\u662F\u8282\u70B9\u7D22\u5F15\u4E3Akey\uFF0C\u4EE5\u8282\u70B9\u6743\u91CD\u503C\u4E3A\u503C\u3002\u6240\u6709\u6743\u91CD\u503C\u5FC5\u987B\u662F\u6B63\u6574\u6570\uFF0C\u5426\u5219\u4EE51\u4EE3\u66FF --&gt;
		&lt;!-- &lt;property name=&quot;bucketMapPath&quot;&gt;/etc/mycat/bucketMapPath&lt;/property&gt;
			\u7528\u4E8E\u6D4B\u8BD5\u65F6\u89C2\u5BDF\u5404\u7269\u7406\u8282\u70B9\u4E0E\u865A\u62DF\u8282\u70B9\u7684\u5206\u5E03\u60C5\u51B5\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u8FD9\u4E2A\u5C5E\u6027\uFF0C\u4F1A\u628A\u865A\u62DF\u8282\u70B9\u7684murmur hash\u503C\u4E0E\u7269\u7406\u8282\u70B9\u7684\u6620\u5C04\u6309\u884C\u8F93\u51FA\u5230\u8FD9\u4E2A\u6587\u4EF6\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u503C\uFF0C\u5982\u679C\u4E0D\u6307\u5B9A\uFF0C\u5C31\u4E0D\u4F1A\u8F93\u51FA\u4EFB\u4F55\u4E1C\u897F --&gt;
	&lt;/function&gt;

	&lt;function name=&quot;crc32slot&quot;
			  class=&quot;io.mycat.route.function.PartitionByCRC32PreSlot&quot;&gt;
	&lt;/function&gt;
	&lt;function name=&quot;hash-int&quot;
		class=&quot;io.mycat.route.function.PartitionByFileMap&quot;&gt;
		&lt;property name=&quot;mapFile&quot;&gt;partition-hash-int.txt&lt;/property&gt;
	&lt;/function&gt;
	&lt;function name=&quot;rang-long&quot;
		class=&quot;io.mycat.route.function.AutoPartitionByLong&quot;&gt;
		&lt;property name=&quot;mapFile&quot;&gt;autopartition-long.txt&lt;/property&gt;
	&lt;/function&gt;
	&lt;function name=&quot;mod-long&quot; class=&quot;io.mycat.route.function.PartitionByMod&quot;&gt;
		&lt;!-- how many data nodes --&gt;
		&lt;property name=&quot;count&quot;&gt;2&lt;/property&gt;
	&lt;/function&gt;

	&lt;function name=&quot;func1&quot; class=&quot;io.mycat.route.function.PartitionByLong&quot;&gt;
		&lt;property name=&quot;partitionCount&quot;&gt;8&lt;/property&gt;
		&lt;property name=&quot;partitionLength&quot;&gt;128&lt;/property&gt;
	&lt;/function&gt;
	&lt;function name=&quot;latestMonth&quot;
		class=&quot;io.mycat.route.function.LatestMonthPartion&quot;&gt;
		&lt;property name=&quot;splitOneDay&quot;&gt;24&lt;/property&gt;
	&lt;/function&gt;
	&lt;function name=&quot;partbymonth&quot;
		class=&quot;io.mycat.route.function.PartitionByMonth&quot;&gt;
		&lt;property name=&quot;dateFormat&quot;&gt;yyyy-MM-dd&lt;/property&gt;
		&lt;property name=&quot;sBeginDate&quot;&gt;2015-01-01&lt;/property&gt;
	&lt;/function&gt;

	&lt;function name=&quot;rang-mod&quot; class=&quot;io.mycat.route.function.PartitionByRangeMod&quot;&gt;
        	&lt;property name=&quot;mapFile&quot;&gt;partition-range-mod.txt&lt;/property&gt;
	&lt;/function&gt;

	&lt;function name=&quot;jump-consistent-hash&quot; class=&quot;io.mycat.route.function.PartitionByJumpConsistentHash&quot;&gt;
		&lt;property name=&quot;totalBuckets&quot;&gt;3&lt;/property&gt;
	&lt;/function&gt;
&lt;/mycat:rule&gt;
</code></pre></div><pre><code>schema.xml
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot;?&gt;
&lt;!DOCTYPE mycat:schema SYSTEM &quot;schema.dtd&quot;&gt;
&lt;mycat:schema xmlns:mycat=&quot;http://io.mycat/&quot;&gt;

	&lt;schema name=&quot;mycat_logic_db&quot; checkSQLschema=&quot;true&quot; sqlMaxLimit=&quot;100&quot;&gt;
		&lt;table name=&quot;tb_order&quot; dataNode=&quot;dn1,dn2&quot; primaryKey=&quot;id&quot; rule=&quot;auto-sharding-long&quot; /&gt;
	&lt;/schema&gt;

	&lt;dataNode name=&quot;dn1&quot; dataHost=&quot;mysql8host1&quot; database=&quot;mysql_real_db&quot; /&gt;
	&lt;dataNode name=&quot;dn2&quot; dataHost=&quot;mysql8host2&quot; database=&quot;mysql_real_db&quot; /&gt;

	&lt;dataHost name=&quot;mysql8host1&quot; maxCon=&quot;1000&quot; minCon=&quot;10&quot; balance=&quot;0&quot;
			  writeType=&quot;0&quot; dbType=&quot;mysql&quot; dbDriver=&quot;jdbc&quot; switchType=&quot;1&quot;  slaveThreshold=&quot;100&quot;&gt;
		&lt;heartbeat&gt;select user()&lt;/heartbeat&gt;
		&lt;!--\u7279\u522B\u6CE8\u610F\uFF1A\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\u4E2D\u6240\u6709\u7684&amp;\u5168\u90E8\u66FF\u6362\u4E3A\u8F6C\u79FB\u5B57\u7B26&amp;amp;\uFF0C\u5426\u5219xml\u89E3\u6790\u4F1A\u62A5\u9519--&gt;
		&lt;writeHost host=&quot;master&quot; url=&quot;jdbc:mysql://192.168.0.7:3306?useSSL=false&amp;amp;serverTimezone=UTC&quot;
			user=&quot;mycat&quot;  password=&quot;Mysql123456_&quot; /&gt;
	&lt;/dataHost&gt;


	&lt;dataHost name=&quot;mysql8host2&quot; maxCon=&quot;1000&quot; minCon=&quot;10&quot; balance=&quot;0&quot;
			  writeType=&quot;0&quot; dbType=&quot;mysql&quot; dbDriver=&quot;jdbc&quot; switchType=&quot;1&quot;  slaveThreshold=&quot;100&quot;&gt;
		&lt;heartbeat&gt;select user()&lt;/heartbeat&gt;
		&lt;!--\u7279\u522B\u6CE8\u610F\uFF1A\u6570\u636E\u5E93\u8FDE\u63A5\u4FE1\u606F\u4E2D\u6240\u6709\u7684&amp;\u5168\u90E8\u66FF\u6362\u4E3A\u8F6C\u79FB\u5B57\u7B26&amp;amp;\uFF0C\u5426\u5219xml\u89E3\u6790\u4F1A\u62A5\u9519--&gt;
		&lt;writeHost host=&quot;master&quot; url=&quot;jdbc:mysql://192.168.0.8:3306?useSSL=false&amp;amp;serverTimezone=UTC&quot;
			user=&quot;mycat&quot;  password=&quot;Mysql123456_&quot; /&gt;
	&lt;/dataHost&gt;
&lt;/mycat:schema&gt;
</code></pre></div><pre><code>server.xml
</code></pre><div class="language-text ext-text"><pre class="language-text"><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;!-- - - Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
	- you may not use this file except in compliance with the License. - You
	may obtain a copy of the License at - - http://www.apache.org/licenses/LICENSE-2.0
	- - Unless required by applicable law or agreed to in writing, software -
	distributed under the License is distributed on an &quot;AS IS&quot; BASIS, - WITHOUT
	WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. - See the
	License for the specific language governing permissions and - limitations
	under the License. --&gt;
&lt;!DOCTYPE mycat:server SYSTEM &quot;server.dtd&quot;&gt;
&lt;mycat:server xmlns:mycat=&quot;http://io.mycat/&quot;&gt;
	&lt;system&gt;
		&lt;property name=&quot;nonePasswordLogin&quot;&gt;0&lt;/property&gt; &lt;!-- 0\u4E3A\u9700\u8981\u5BC6\u7801\u767B\u9646\u30011\u4E3A\u4E0D\u9700\u8981\u5BC6\u7801\u767B\u9646 ,\u9ED8\u8BA4\u4E3A0\uFF0C\u8BBE\u7F6E\u4E3A1\u5219\u9700\u8981\u6307\u5B9A\u9ED8\u8BA4\u8D26\u6237--&gt;
		&lt;!--\u5F00\u542F\u652F\u6301\u9AD8\u7248\u672Cmysql--&gt;
		&lt;property name=&quot;useHandshakeV10&quot;&gt;1&lt;/property&gt;
		&lt;!--\u8BBE\u7F6E\u4F7F\u7528druid\u89E3\u6790sql--&gt;
		&lt;property name=&quot;defaultSqlParser&quot;&gt;druidparser&lt;/property&gt;
		&lt;property name=&quot;useSqlStat&quot;&gt;0&lt;/property&gt;  &lt;!-- 1\u4E3A\u5F00\u542F\u5B9E\u65F6\u7EDF\u8BA1\u30010\u4E3A\u5173\u95ED --&gt;
		&lt;property name=&quot;useGlobleTableCheck&quot;&gt;0&lt;/property&gt;  &lt;!-- 1\u4E3A\u5F00\u542F\u5168\u52A0\u73ED\u4E00\u81F4\u6027\u68C0\u6D4B\u30010\u4E3A\u5173\u95ED --&gt;
			&lt;property name=&quot;sqlExecuteTimeout&quot;&gt;300&lt;/property&gt;  &lt;!-- SQL \u6267\u884C\u8D85\u65F6 \u5355\u4F4D:\u79D2--&gt;
			&lt;property name=&quot;sequnceHandlerType&quot;&gt;2&lt;/property&gt;
			&lt;!--&lt;property name=&quot;sequnceHandlerPattern&quot;&gt;(?:(\\s*next\\s+value\\s+for\\s*MYCATSEQ_(\\w+))(,|\\)|\\s)*)+&lt;/property&gt;--&gt;
			&lt;!--\u5FC5\u987B\u5E26\u6709MYCATSEQ_\u6216\u8005 mycatseq_\u8FDB\u5165\u5E8F\u5217\u5339\u914D\u6D41\u7A0B \u6CE8\u610FMYCATSEQ_\u6709\u7A7A\u683C\u7684\u60C5\u51B5--&gt;
			&lt;property name=&quot;sequnceHandlerPattern&quot;&gt;(?:(\\s*next\\s+value\\s+for\\s*MYCATSEQ_(\\w+))(,|\\)|\\s)*)+&lt;/property&gt;
		&lt;property name=&quot;subqueryRelationshipCheck&quot;&gt;false&lt;/property&gt; &lt;!-- \u5B50\u67E5\u8BE2\u4E2D\u5B58\u5728\u5173\u8054\u67E5\u8BE2\u7684\u60C5\u51B5\u4E0B,\u68C0\u67E5\u5173\u8054\u5B57\u6BB5\u4E2D\u662F\u5426\u6709\u5206\u7247\u5B57\u6BB5 .\u9ED8\u8BA4 false --&gt;
		  &lt;!--  &lt;property name=&quot;useCompression&quot;&gt;1&lt;/property&gt;--&gt; &lt;!--1\u4E3A\u5F00\u542Fmysql\u538B\u7F29\u534F\u8BAE--&gt;
			&lt;!--  &lt;property name=&quot;fakeMySQLVersion&quot;&gt;5.6.20&lt;/property&gt;--&gt; &lt;!--\u8BBE\u7F6E\u6A21\u62DF\u7684MySQL\u7248\u672C\u53F7--&gt;
		&lt;!-- &lt;property name=&quot;processorBufferChunk&quot;&gt;40960&lt;/property&gt; --&gt;

		&lt;!-- &lt;property name=&quot;processors&quot;&gt;1&lt;/property&gt;--&gt; 
		&lt;!-- &lt;property name=&quot;processorExecutor&quot;&gt;32&lt;/property&gt;&lt;--&gt; 

        &lt;!--\u9ED8\u8BA4\u4E3Atype 0: DirectByteBufferPool | type 1 ByteBufferArena | type 2 NettyBufferPool --&gt;
		&lt;property name=&quot;processorBufferPoolType&quot;&gt;0&lt;/property&gt;
		&lt;!--\u9ED8\u8BA4\u662F65535 64K \u7528\u4E8Esql\u89E3\u6790\u65F6\u6700\u5927\u6587\u672C\u957F\u5EA6 --&gt;
		&lt;!--&lt;property name=&quot;maxStringLiteralLength&quot;&gt;65535&lt;/property&gt;--&gt;
		&lt;!--&lt;property name=&quot;sequnceHandlerType&quot;&gt;0&lt;/property&gt;--&gt;
		&lt;!--&lt;property name=&quot;backSocketNoDelay&quot;&gt;1&lt;/property&gt;--&gt;
		&lt;!--&lt;property name=&quot;frontSocketNoDelay&quot;&gt;1&lt;/property&gt;--&gt;
		&lt;!--&lt;property name=&quot;processorExecutor&quot;&gt;16&lt;/property&gt;--&gt;
		&lt;!--
			&lt;property name=&quot;serverPort&quot;&gt;8066&lt;/property&gt; &lt;property name=&quot;managerPort&quot;&gt;9066&lt;/property&gt; 
			&lt;property name=&quot;idleTimeout&quot;&gt;300000&lt;/property&gt; &lt;property name=&quot;bindIp&quot;&gt;0.0.0.0&lt;/property&gt;
			&lt;property name=&quot;dataNodeIdleCheckPeriod&quot;&gt;300000&lt;/property&gt; 5 * 60 * 1000L; //\u8FDE\u63A5\u7A7A\u95F2\u68C0\u67E5
			&lt;property name=&quot;frontWriteQueueSize&quot;&gt;4096&lt;/property&gt; &lt;property name=&quot;processors&quot;&gt;32&lt;/property&gt; --&gt;
		&lt;!--\u5206\u5E03\u5F0F\u4E8B\u52A1\u5F00\u5173\uFF0C0\u4E3A\u4E0D\u8FC7\u6EE4\u5206\u5E03\u5F0F\u4E8B\u52A1\uFF0C1\u4E3A\u8FC7\u6EE4\u5206\u5E03\u5F0F\u4E8B\u52A1\uFF08\u5982\u679C\u5206\u5E03\u5F0F\u4E8B\u52A1\u5185\u53EA\u6D89\u53CA\u5168\u5C40\u8868\uFF0C\u5219\u4E0D\u8FC7\u6EE4\uFF09\uFF0C2\u4E3A\u4E0D\u8FC7\u6EE4\u5206\u5E03\u5F0F\u4E8B\u52A1,\u4F46\u662F\u8BB0\u5F55\u5206\u5E03\u5F0F\u4E8B\u52A1\u65E5\u5FD7--&gt;
		&lt;property name=&quot;handleDistributedTransactions&quot;&gt;0&lt;/property&gt;

			&lt;!--
			off heap for merge/order/group/limit      1\u5F00\u542F   0\u5173\u95ED
		--&gt;
		&lt;property name=&quot;useOffHeapForMerge&quot;&gt;0&lt;/property&gt;

		&lt;!--
			\u5355\u4F4D\u4E3Am
		--&gt;
        &lt;property name=&quot;memoryPageSize&quot;&gt;64k&lt;/property&gt;

		&lt;!--
			\u5355\u4F4D\u4E3Ak
		--&gt;
		&lt;property name=&quot;spillsFileBufferSize&quot;&gt;1k&lt;/property&gt;

		&lt;property name=&quot;useStreamOutput&quot;&gt;0&lt;/property&gt;

		&lt;!--
			\u5355\u4F4D\u4E3Am
		--&gt;
		&lt;property name=&quot;systemReserveMemorySize&quot;&gt;384m&lt;/property&gt;


		&lt;!--\u662F\u5426\u91C7\u7528zookeeper\u534F\u8C03\u5207\u6362  --&gt;
		&lt;property name=&quot;useZKSwitch&quot;&gt;false&lt;/property&gt;

		&lt;!-- XA Recovery Log\u65E5\u5FD7\u8DEF\u5F84 --&gt;
		&lt;!--&lt;property name=&quot;XARecoveryLogBaseDir&quot;&gt;./&lt;/property&gt;--&gt;

		&lt;!-- XA Recovery Log\u65E5\u5FD7\u540D\u79F0 --&gt;
		&lt;!--&lt;property name=&quot;XARecoveryLogBaseName&quot;&gt;tmlog&lt;/property&gt;--&gt;
		&lt;!--\u5982\u679C\u4E3A true\u7684\u8BDD \u4E25\u683C\u9075\u5B88\u9694\u79BB\u7EA7\u522B,\u4E0D\u4F1A\u5728\u4EC5\u4EC5\u53EA\u6709select\u8BED\u53E5\u7684\u65F6\u5019\u5728\u4E8B\u52A1\u4E2D\u5207\u6362\u8FDE\u63A5--&gt;
		&lt;property name=&quot;strictTxIsolation&quot;&gt;false&lt;/property&gt;

		&lt;property name=&quot;useZKSwitch&quot;&gt;true&lt;/property&gt;

	&lt;/system&gt;

	&lt;!-- \u5168\u5C40SQL\u9632\u706B\u5899\u8BBE\u7F6E --&gt;
	&lt;!--\u767D\u540D\u5355\u53EF\u4EE5\u4F7F\u7528\u901A\u914D\u7B26%\u6216\u7740*--&gt;
	&lt;!--\u4F8B\u5982&lt;host host=&quot;127.0.0.*&quot; user=&quot;root&quot;/&gt;--&gt;
	&lt;!--\u4F8B\u5982&lt;host host=&quot;127.0.*&quot; user=&quot;root&quot;/&gt;--&gt;
	&lt;!--\u4F8B\u5982&lt;host host=&quot;127.*&quot; user=&quot;root&quot;/&gt;--&gt;
	&lt;!--\u4F8B\u5982&lt;host host=&quot;1*7.*&quot; user=&quot;root&quot;/&gt;--&gt;
	&lt;!--\u8FD9\u4E9B\u914D\u7F6E\u60C5\u51B5\u4E0B\u5BF9\u4E8E127.0.0.1\u90FD\u80FD\u4EE5root\u8D26\u6237\u767B\u5F55--&gt;
	&lt;!--
	&lt;firewall&gt;
	   &lt;whitehost&gt;
	      &lt;host host=&quot;1*7.0.0.*&quot; user=&quot;root&quot;/&gt;
	   &lt;/whitehost&gt;
       &lt;blacklist check=&quot;false&quot;&gt;
       &lt;/blacklist&gt;
	&lt;/firewall&gt;
	--&gt;

	&lt;user name=&quot;root&quot; defaultAccount=&quot;true&quot;&gt;
		&lt;property name=&quot;password&quot;&gt;123456&lt;/property&gt;
		&lt;property name=&quot;schemas&quot;&gt;mycat_logic_db&lt;/property&gt;
		&lt;property name=&quot;defaultSchema&quot;&gt;mycat_logic_db&lt;/property&gt;
		&lt;!-- \u8868\u7EA7 DML \u6743\u9650\u8BBE\u7F6E --&gt;
		&lt;!--
		&lt;privileges check=&quot;false&quot;&gt;
			&lt;schema name=&quot;TESTDB&quot; dml=&quot;0110&quot; &gt;
				&lt;table name=&quot;tb01&quot; dml=&quot;0000&quot;&gt;&lt;/table&gt;
				&lt;table name=&quot;tb02&quot; dml=&quot;1111&quot;&gt;&lt;/table&gt;
			&lt;/schema&gt;
		&lt;/privileges&gt;
		 --&gt;
	&lt;/user&gt;

	&lt;user name=&quot;user&quot;&gt;
		&lt;property name=&quot;password&quot;&gt;user&lt;/property&gt;
		&lt;property name=&quot;schemas&quot;&gt;mycat_logic_db&lt;/property&gt;
		&lt;property name=&quot;readOnly&quot;&gt;true&lt;/property&gt;
	&lt;/user&gt;

&lt;/mycat:server&gt;
</code></pre></div><h2 id="_18-5-\u4F7F\u7528mycat" tabindex="-1"><a class="header-anchor" href="#_18-5-\u4F7F\u7528mycat" aria-hidden="true">#</a> 18.5.\u4F7F\u7528mycat</h2><pre><code>\u5C06\u539F\u6765application.yml\u4E2D\u6570\u636E\u5E93\u7684\u914D\u7F6E\u4FE1\u606F\u4FEE\u6539\u4E3Amycat\u7684\u8FDE\u63A5\u4FE1\u606F
</code></pre>`,13);function i(m,c){const n=e("Markmap"),l=e("ScrollIntoPageView"),r=e("HideSideBar");return a(),g("div",null,[s,t(n,{localtion:"/enhance/markmap/backend/springcloud/springcloud-eureka/chapter/springcloud-eureka-outline5-chapter18.html",height:"500rem"}),q,t(l),t(r)])}var d=u(p,[["render",i],["__file","springcloud-eureka-chapter-18.\u4F7F\u7528mycat\u63D0\u5347\u6570\u636E\u5E93\u541E\u5410\u80FD\u529B.html.vue"]]);export{d as default};
