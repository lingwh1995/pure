const e=JSON.parse('{"key":"v-69d1afba","path":"/blogs/environment/centos/centos7/shardings/centos7-chapter-2.Linux%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E8%AE%BE%E7%BD%AE.html","title":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E","lang":"zh-CN","frontmatter":{"title":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E","description":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u914D\u7F6E\u9759\u6001IP\u5730\u5740,\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898,\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF,\u5B89\u88C5curl,\u914D\u7F6Eyml\u6E90,\u540C\u6B65\u65F6\u95F4,\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002","headerDepth":4,"isOriginal":true,"category":["\u73AF\u5883\u642D\u5EFA"],"star":false,"tag":["yaml\u6E90","\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF"],"date":"2020-01-08T00:00:00.000Z","head":[["meta",{"name":"keywords","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u914D\u7F6E\u9759\u6001IP\u5730\u5740,\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898,\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF,\u5B89\u88C5curl,\u914D\u7F6Eyml\u6E90,\u540C\u6B65\u65F6\u95F4,\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-2.Linux%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E8%AE%BE%E7%BD%AE.html"}],["meta",{"property":"og:site_name","content":"\u6B64\u751F\u631A\u7231\u4E07\u5B9D\u8DEF"}],["meta",{"property":"og:title","content":"\u5728Centos7\u4E0A\u642D\u5EFA\u5F00\u53D1\u73AF\u5883-2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E"}],["meta",{"property":"og:description","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u914D\u7F6E\u9759\u6001IP\u5730\u5740,\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898,\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF,\u5B89\u88C5curl,\u914D\u7F6Eyml\u6E90,\u540C\u6B65\u65F6\u95F4,\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-08-31T05:11:18.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"yaml\u6E90"}],["meta",{"property":"article:tag","content":"\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF"}],["meta",{"property":"article:published_time","content":"2020-01-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-08-31T05:11:18.000Z"}]]},"excerpt":"","headers":[{"level":1,"title":"2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E","slug":"_2-linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E","children":[{"level":2,"title":"2.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","slug":"_2-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","children":[]},{"level":2,"title":"2.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","slug":"_2-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","children":[]},{"level":2,"title":"2.3.\u914D\u7F6E\u9759\u6001IP\u5730\u5740","slug":"_2-3-\u914D\u7F6E\u9759\u6001ip\u5730\u5740","children":[]},{"level":2,"title":"2.4.\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898","slug":"_2-4-\u89E3\u51B3\u8FDC\u7A0B\u8FDE\u63A5\u65E0\u6CD5\u8FDE\u63A5\u7684\u95EE\u9898","children":[]},{"level":2,"title":"2.5.\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF","slug":"_2-5-\u8BBE\u7F6E\u7CFB\u7EDF\u73AF\u5883\u53D8\u91CF","children":[]},{"level":2,"title":"2.6.\u5B89\u88C5curl","slug":"_2-6-\u5B89\u88C5curl","children":[]},{"level":2,"title":"2.7.\u914D\u7F6Eyml\u6E90","slug":"_2-7-\u914D\u7F6Eyml\u6E90","children":[]},{"level":2,"title":"2.7.\u540C\u6B65\u65F6\u95F4","slug":"_2-7-\u540C\u6B65\u65F6\u95F4","children":[]},{"level":2,"title":"2.8.\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6","slug":"_2-8-\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u7CFB\u7EDF\u8F6F\u4EF6","children":[{"level":3,"title":"2.8.1.\u624B\u52A8\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u8F6F\u4EF6","slug":"_2-8-1-\u624B\u52A8\u5B89\u88C5\u5E38\u7528\u57FA\u7840\u8F6F\u4EF6","children":[]},{"level":3,"title":"2.8.2.\u4F7F\u7528\u811A\u672C\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6","slug":"_2-8-2-\u4F7F\u7528\u811A\u672C\u5B89\u88C5\u5E38\u7528\u8F6F\u4EF6","children":[]}]}]}],"git":{"createdTime":1659560423000,"updatedTime":1661922678000,"contributors":[{"name":"lingwh","email":"LRwq942133","commits":17}]},"readingTime":{"minutes":2.97,"words":892},"copyright":"\u8457\u4F5C\u6743\u5F52lingwh\u6240\u6709\\n\u57FA\u4E8ECopyright 2021 \xA9 open linux lingwh\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://github.com/lingwh1995/pure/blogs/environment/centos/centos7/shardings/centos7-chapter-2.Linux%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E5%88%9D%E5%A7%8B%E8%AE%BE%E7%BD%AE.html","filePathRelative":"blogs/environment/centos/centos7/shardings/centos7-chapter-2.Linux\u64CD\u4F5C\u7CFB\u7EDF\u521D\u59CB\u8BBE\u7F6E.md","localizedDate":"2020\u5E741\u67087\u65E5"}');export{e as data};
