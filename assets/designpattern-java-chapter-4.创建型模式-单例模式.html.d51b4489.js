const e=JSON.parse('{"key":"v-94c8c200","path":"/blogs/general/designpattern/designpattern-java/shardings/designpattern-java-chapter-4.%E5%88%9B%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html","title":"\u4F7F\u7528Java\u8BED\u8A00\u7F16\u5199\u8BBE\u8BA1\u6A21\u5F0F-4.\u521B\u5EFA\u578B\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F","lang":"zh-CN","frontmatter":{"title":"\u4F7F\u7528Java\u8BED\u8A00\u7F16\u5199\u8BBE\u8BA1\u6A21\u5F0F-4.\u521B\u5EFA\u578B\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F","description":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u7B80\u4ECB,\u5E94\u7528\u573A\u666F,\u4F18\u7F3A\u70B9,\u89D2\u8272\u53CA\u5176\u804C\u8D23,\u6A21\u578B,\u793A\u4F8B,\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002","headerDepth":4,"isOriginal":true,"category":["\u8BBE\u8BA1\u6A21\u5F0F"],"star":false,"tag":[],"head":[["meta",{"name":"keywords","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u7B80\u4ECB,\u5E94\u7528\u573A\u666F,\u4F18\u7F3A\u70B9,\u89D2\u8272\u53CA\u5176\u804C\u8D23,\u6A21\u578B,\u793A\u4F8B,\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/pure/blogs/general/designpattern/designpattern-java/shardings/designpattern-java-chapter-4.%E5%88%9B%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"\u6B64\u751F\u631A\u7231\u4E07\u5B9D\u8DEF"}],["meta",{"property":"og:title","content":"\u4F7F\u7528Java\u8BED\u8A00\u7F16\u5199\u8BBE\u8BA1\u6A21\u5F0F-4.\u521B\u5EFA\u578B\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F"}],["meta",{"property":"og:description","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1A\u7B80\u4ECB,\u5E94\u7528\u573A\u666F,\u4F18\u7F3A\u70B9,\u89D2\u8272\u53CA\u5176\u804C\u8D23,\u6A21\u578B,\u793A\u4F8B,\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-10T05:42:04.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-10T05:42:04.000Z"}]]},"excerpt":"","headers":[{"level":1,"title":"4.\u521B\u5EFA\u578B\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F","slug":"_4-\u521B\u5EFA\u578B\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F","children":[{"level":2,"title":"4.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","slug":"_4-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","children":[]},{"level":2,"title":"4.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","slug":"_4-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","children":[]},{"level":2,"title":"4.3.\u7B80\u4ECB","slug":"_4-3-\u7B80\u4ECB","children":[]},{"level":2,"title":"4.4.\u5E94\u7528\u573A\u666F","slug":"_4-4-\u5E94\u7528\u573A\u666F","children":[]},{"level":2,"title":"4.5.\u4F18\u7F3A\u70B9","slug":"_4-5-\u4F18\u7F3A\u70B9","children":[{"level":3,"title":"4.5.1.\u4F18\u70B9","slug":"_4-5-1-\u4F18\u70B9","children":[]},{"level":3,"title":"4.5.2.\u7F3A\u70B9","slug":"_4-5-2-\u7F3A\u70B9","children":[]}]},{"level":2,"title":"4.6.\u89D2\u8272\u53CA\u5176\u804C\u8D23","slug":"_4-6-\u89D2\u8272\u53CA\u5176\u804C\u8D23","children":[]},{"level":2,"title":"4.7.\u6A21\u578B","slug":"_4-7-\u6A21\u578B","children":[{"level":3,"title":"4.7.1.\u6A21\u578B\u7C7B\u56FE","slug":"_4-7-1-\u6A21\u578B\u7C7B\u56FE","children":[]},{"level":3,"title":"4.7.2.\u4EE3\u7801","slug":"_4-7-2-\u4EE3\u7801","children":[]}]},{"level":2,"title":"4.8.\u793A\u4F8B","slug":"_4-8-\u793A\u4F8B","children":[{"level":3,"title":"4.8.1.\u997F\u6C49\u5F0F\u5355\u4F8B","slug":"_4-8-1-\u997F\u6C49\u5F0F\u5355\u4F8B","children":[]},{"level":3,"title":"4.8.1.1.\u7C7B\u56FE","slug":"_4-8-1-1-\u7C7B\u56FE","children":[]},{"level":3,"title":"4.8.1.2.\u4EE3\u7801","slug":"_4-8-1-2-\u4EE3\u7801","children":[]},{"level":3,"title":"4.8.2.\u61D2\u6C49\u5F0F\u5355\u4F8B","slug":"_4-8-2-\u61D2\u6C49\u5F0F\u5355\u4F8B","children":[]},{"level":3,"title":"4.8.2.1.\u997F\u6C49\u5F0F\u5355\u4F8B\u7C7B\u56FE","slug":"_4-8-2-1-\u997F\u6C49\u5F0F\u5355\u4F8B\u7C7B\u56FE","children":[]},{"level":3,"title":"4.8.2.2.\u4EE3\u7801","slug":"_4-8-2-2-\u4EE3\u7801","children":[]},{"level":3,"title":"4.8.3.\u7EBF\u7A0B\u5B89\u5168\u7684\u61D2\u6C49\u5F0F\u5355\u4F8B","slug":"_4-8-3-\u7EBF\u7A0B\u5B89\u5168\u7684\u61D2\u6C49\u5F0F\u5355\u4F8B","children":[]},{"level":3,"title":"4.8.3.1.\u7C7B\u56FE","slug":"_4-8-3-1-\u7C7B\u56FE","children":[]},{"level":3,"title":"4.8.3.2.\u4EE3\u7801","slug":"_4-8-3-2-\u4EE3\u7801","children":[]},{"level":3,"title":"4.8.4.\u53CC\u91CD\u68C0\u7D22\u61D2\u6C49\u5F0F\u61D2\u6C49\u5F0F\u5355\u4F8B","slug":"_4-8-4-\u53CC\u91CD\u68C0\u7D22\u61D2\u6C49\u5F0F\u61D2\u6C49\u5F0F\u5355\u4F8B","children":[]},{"level":3,"title":"4.8.4.1.\u7C7B\u56FE","slug":"_4-8-4-1-\u7C7B\u56FE","children":[]},{"level":3,"title":"4.8.4.2.\u4EE3\u7801","slug":"_4-8-4-2-\u4EE3\u7801","children":[]},{"level":3,"title":"4.8.5.\u9759\u6001\u5185\u90E8\u7C7B\u61D2\u6C49\u5F0F\u5355\u4F8B","slug":"_4-8-5-\u9759\u6001\u5185\u90E8\u7C7B\u61D2\u6C49\u5F0F\u5355\u4F8B","children":[]},{"level":3,"title":"4.8.5.1.\u7C7B\u56FE","slug":"_4-8-5-1-\u7C7B\u56FE","children":[]},{"level":3,"title":"4.8.5.2.\u4EE3\u7801","slug":"_4-8-5-2-\u4EE3\u7801","children":[]},{"level":3,"title":"4.8.6.\u679A\u4E3E\u5355\u4F8B","slug":"_4-8-6-\u679A\u4E3E\u5355\u4F8B","children":[]},{"level":3,"title":"4.8.6.1.\u7C7B\u56FE","slug":"_4-8-6-1-\u7C7B\u56FE","children":[]},{"level":3,"title":"4.8.6.2.\u4EE3\u7801","slug":"_4-8-6-2-\u4EE3\u7801","children":[]}]},{"level":2,"title":"4.9.\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528","slug":"_4-9-\u5728\u5F00\u6E90\u6846\u67B6\u4E2D\u7684\u5E94\u7528","children":[]}]}],"git":{"createdTime":1662615124000,"updatedTime":1662788524000,"contributors":[{"name":"lingwh","email":"LRwq942133","commits":3}]},"readingTime":{"minutes":7.84,"words":2351},"copyright":"\u8457\u4F5C\u6743\u5F52lingwh\u6240\u6709\\n\u57FA\u4E8ECopyright 2021 \xA9 open linux lingwh\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://github.com/lingwh1995/pure/blogs/general/designpattern/designpattern-java/shardings/designpattern-java-chapter-4.%E5%88%9B%E5%BB%BA%E5%9E%8B%E6%A8%A1%E5%BC%8F-%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F.html","filePathRelative":"blogs/general/designpattern/designpattern-java/shardings/designpattern-java-chapter-4.\u521B\u5EFA\u578B\u6A21\u5F0F-\u5355\u4F8B\u6A21\u5F0F.md","localizedDate":"2022\u5E749\u67088\u65E5"}');export{e as data};
