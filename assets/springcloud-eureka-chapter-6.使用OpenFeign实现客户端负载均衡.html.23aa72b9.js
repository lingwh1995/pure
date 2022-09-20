const e=JSON.parse('{"key":"v-1ea626e9","path":"/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-6.%E4%BD%BF%E7%94%A8OpenFeign%E5%AE%9E%E7%8E%B0%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html","title":"\u57FA\u4E8EEureka\u642D\u5EFASpringcloud\u5FAE\u670D\u52A1-6.\u4F7F\u7528OpenFeign\u5B9E\u73B0\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861","lang":"zh-CN","frontmatter":{"title":"\u57FA\u4E8EEureka\u642D\u5EFASpringcloud\u5FAE\u670D\u52A1-6.\u4F7F\u7528OpenFeign\u5B9E\u73B0\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861","description":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1AOpenFeign\u7B80\u4ECB,\u901A\u8FC7\u914D\u7F6ERibbon\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861,\u901A\u8FC7\u76F4\u63A5\u914D\u7F6EOpenFeign\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002","headerDepth":4,"isOriginal":true,"category":["springcloud"],"star":false,"tag":["openfeign"],"date":"2020-05-20T00:00:00.000Z","head":[["meta",{"name":"keywords","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1AOpenFeign\u7B80\u4ECB,\u901A\u8FC7\u914D\u7F6ERibbon\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861,\u901A\u8FC7\u76F4\u63A5\u914D\u7F6EOpenFeign\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/pure/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-6.%E4%BD%BF%E7%94%A8OpenFeign%E5%AE%9E%E7%8E%B0%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html"}],["meta",{"property":"og:site_name","content":"\u6B64\u751F\u631A\u7231\u4E07\u5B9D\u8DEF"}],["meta",{"property":"og:title","content":"\u57FA\u4E8EEureka\u642D\u5EFASpringcloud\u5FAE\u670D\u52A1-6.\u4F7F\u7528OpenFeign\u5B9E\u73B0\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861"}],["meta",{"property":"og:description","content":"\u672C\u7AE0\u8282\u6D89\u53CA\u4E3B\u8981\u5185\u5BB9\u6709\uFF1AOpenFeign\u7B80\u4ECB,\u901A\u8FC7\u914D\u7F6ERibbon\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861,\u901A\u8FC7\u76F4\u63A5\u914D\u7F6EOpenFeign\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861,\u5177\u4F53\u6BCF\u4E2A\u5C0F\u8282\u4E2D\u5305\u542B\u7684\u5185\u5BB9\u53EF\u4F7F\u901A\u8FC7\u4E0B\u9762\u7684\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2\u8FDB\u884C\u67E5\u770B,\u6240\u6709\u4EE3\u7801\u5747\u7ECF\u8FC7\u4E25\u683C\u6D4B\u8BD5\uFF0C\u53EF\u76F4\u63A5\u590D\u5236\u8FD0\u884C\u5373\u53EF\u3002"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-06T04:07:50.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"openfeign"}],["meta",{"property":"article:published_time","content":"2020-05-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-06T04:07:50.000Z"}]]},"excerpt":"","headers":[{"level":1,"title":"6.\u4F7F\u7528OpenFeign\u5B9E\u73B0\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861","slug":"_6-\u4F7F\u7528openfeign\u5B9E\u73B0\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861","children":[{"level":2,"title":"6.1.\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","slug":"_6-1-\u7AE0\u8282\u5185\u5BB9\u6982\u8FF0","children":[]},{"level":2,"title":"6.2.\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","slug":"_6-2-\u7AE0\u8282\u5185\u5BB9\u5927\u7EB2","children":[]},{"level":2,"title":"6.3.OpenFeign\u7B80\u4ECB","slug":"_6-3-openfeign\u7B80\u4ECB","children":[]},{"level":2,"title":"6.4.\u901A\u8FC7\u914D\u7F6ERibbon\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861","slug":"_6-4-\u901A\u8FC7\u914D\u7F6Eribbon\u5B9E\u73B0\u5BF9openfeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861","children":[{"level":3,"title":"6.4.1.\u6A21\u5757\u7B80\u4ECB","slug":"_6-4-1-\u6A21\u5757\u7B80\u4ECB","children":[]},{"level":3,"title":"6.4.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784","slug":"_6-4-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":3,"title":"6.4.3.\u521B\u5EFA\u6A21\u5757","slug":"_6-4-3-\u521B\u5EFA\u6A21\u5757","children":[]},{"level":3,"title":"6.4.4.\u7F16\u5199\u6A21\u5757pom.xml","slug":"_6-4-4-\u7F16\u5199\u6A21\u5757pom-xml","children":[]},{"level":3,"title":"6.4.5.\u7F16\u5199\u6A21\u5757application.yml","slug":"_6-4-5-\u7F16\u5199\u6A21\u5757application-yml","children":[]},{"level":3,"title":"6.4.6.\u7F16\u5199\u6A21\u5757config","slug":"_6-4-6-\u7F16\u5199\u6A21\u5757config","children":[]},{"level":3,"title":"6.4.7.\u7F16\u5199\u6A21\u5757service","slug":"_6-4-7-\u7F16\u5199\u6A21\u5757service","children":[]},{"level":3,"title":"6.4.8.\u7F16\u5199\u6A21\u5757controller","slug":"_6-4-8-\u7F16\u5199\u6A21\u5757controller","children":[]},{"level":3,"title":"6.4.9.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B","slug":"_6-4-9-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B","children":[]},{"level":3,"title":"6.4.10.\u6D4B\u8BD5\u6A21\u5757","slug":"_6-4-10-\u6D4B\u8BD5\u6A21\u5757","children":[]},{"level":3,"title":"6.4.11.\u6CE8\u610F\u4E8B\u9879","slug":"_6-4-11-\u6CE8\u610F\u4E8B\u9879","children":[]}]},{"level":2,"title":"6.5.\u901A\u8FC7\u76F4\u63A5\u914D\u7F6EOpenFeign\u5B9E\u73B0\u5BF9OpenFeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861","slug":"_6-5-\u901A\u8FC7\u76F4\u63A5\u914D\u7F6Eopenfeign\u5B9E\u73B0\u5BF9openfeign\u7684\u914D\u7F6E\u6765\u5B9E\u73B0\u8D1F\u8F7D\u5747\u8861","children":[{"level":3,"title":"6.5.1.\u6A21\u5757\u7B80\u4ECB","slug":"_6-5-1-\u6A21\u5757\u7B80\u4ECB","children":[]},{"level":3,"title":"6.5.2.\u6A21\u5757\u76EE\u5F55\u7ED3\u6784","slug":"_6-5-2-\u6A21\u5757\u76EE\u5F55\u7ED3\u6784","children":[]},{"level":3,"title":"6.5.3.\u521B\u5EFA\u6A21\u5757","slug":"_6-5-3-\u521B\u5EFA\u6A21\u5757","children":[]},{"level":3,"title":"6.5.4.\u7F16\u5199\u6A21\u5757pom.xml","slug":"_6-5-4-\u7F16\u5199\u6A21\u5757pom-xml","children":[]},{"level":3,"title":"6.5.5.\u7F16\u5199\u6A21\u5757application.yml","slug":"_6-5-5-\u7F16\u5199\u6A21\u5757application-yml","children":[]},{"level":3,"title":"6.5.6.\u7F16\u5199\u6A21\u5757config","slug":"_6-5-6-\u7F16\u5199\u6A21\u5757config","children":[]},{"level":3,"title":"6.5.7.\u7F16\u5199\u6A21\u5757service","slug":"_6-5-7-\u7F16\u5199\u6A21\u5757service","children":[]},{"level":3,"title":"6.5.8.\u7F16\u5199\u6A21\u5757controller","slug":"_6-5-8-\u7F16\u5199\u6A21\u5757controller","children":[]},{"level":3,"title":"6.5.9.\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B","slug":"_6-5-9-\u7F16\u5199\u6A21\u5757\u4E3B\u542F\u52A8\u7C7B","children":[]},{"level":3,"title":"6.5.10.\u6D4B\u8BD5\u6A21\u5757","slug":"_6-5-10-\u6D4B\u8BD5\u6A21\u5757","children":[]},{"level":3,"title":"6.5.11.\u6CE8\u610F\u4E8B\u9879","slug":"_6-5-11-\u6CE8\u610F\u4E8B\u9879","children":[]}]}]}],"git":{"createdTime":1661479032000,"updatedTime":1662437270000,"contributors":[{"name":"lingwh","email":"LRwq942133","commits":14}]},"readingTime":{"minutes":6.48,"words":1944},"copyright":"\u8457\u4F5C\u6743\u5F52lingwh\u6240\u6709\\n\u57FA\u4E8ECopyright 2021 \xA9 open linux lingwh\u534F\u8BAE\\n\u539F\u6587\u94FE\u63A5\uFF1Ahttps://github.com/lingwh1995/pure/blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-6.%E4%BD%BF%E7%94%A8OpenFeign%E5%AE%9E%E7%8E%B0%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html","filePathRelative":"blogs/backend/springcloud/springcloud-eureka/shardings/springcloud-eureka-chapter-6.\u4F7F\u7528OpenFeign\u5B9E\u73B0\u5BA2\u6237\u7AEF\u8D1F\u8F7D\u5747\u8861.md","localizedDate":"2020\u5E745\u670819\u65E5"}');export{e as data};
