// 2015年1月最新县及县以上行政区划代码mysql数据库（截止2014年12月31日）
// 资料来源：http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/

var provinceJson = [{"id": "2", "province": "\u5317\u4eac\u5e02", "parent": "1"}, {
    "id": "19",
    "province": "\u5929\u6d25\u5e02",
    "parent": "1"
}, {"id": "36", "province": "\u6cb3\u5317\u7701", "parent": "1"}, {
    "id": "230",
    "province": "\u5c71\u897f\u7701",
    "parent": "1"
}, {"id": "372", "province": "\u5185\u8499\u53e4\u81ea\u6cbb\u533a", "parent": "1"}, {
    "id": "496",
    "province": "\u8fbd\u5b81\u7701",
    "parent": "1"
}, {"id": "625", "province": "\u5409\u6797\u7701", "parent": "1"}, {
    "id": "703",
    "province": "\u9ed1\u9f99\u6c5f\u7701",
    "parent": "1"
}, {"id": "857", "province": "\u4e0a\u6d77\u5e02", "parent": "1"}, {
    "id": "875",
    "province": "\u6c5f\u82cf\u7701",
    "parent": "1"
}, {"id": "1001", "province": "\u6d59\u6c5f\u7701", "parent": "1"}, {
    "id": "1114",
    "province": "\u5b89\u5fbd\u7701",
    "parent": "1"
}, {"id": "1252", "province": "\u798f\u5efa\u7701", "parent": "1"}, {
    "id": "1356",
    "province": "\u6c5f\u897f\u7701",
    "parent": "1"
}, {"id": "1479", "province": "\u5c71\u4e1c\u7701", "parent": "1"}, {
    "id": "1651",
    "province": "\u6cb3\u5357\u7701",
    "parent": "1"
}, {"id": "1845", "province": "\u6e56\u5317\u7701", "parent": "1"}, {
    "id": "1975",
    "province": "\u6e56\u5357\u7701",
    "parent": "1"
}, {"id": "2125", "province": "\u5e7f\u4e1c\u7701", "parent": "1"}, {
    "id": "2285",
    "province": "\u5e7f\u897f\u58ee\u65cf\u81ea\u6cbb\u533a",
    "parent": "1"
}, {"id": "2425", "province": "\u6d77\u5357\u7701", "parent": "1"}, {
    "id": "2459",
    "province": "\u91cd\u5e86\u5e02",
    "parent": "1"
}, {"id": "2498", "province": "\u56db\u5ddd\u7701", "parent": "1"}, {
    "id": "2721",
    "province": "\u8d35\u5dde\u7701",
    "parent": "1"
}, {"id": "2824", "province": "\u4e91\u5357\u7701", "parent": "1"}, {
    "id": "2978",
    "province": "\u897f\u85cf\u81ea\u6cbb\u533a",
    "parent": "1"
}, {"id": "3063", "province": "\u9655\u897f\u7701", "parent": "1"}, {
    "id": "3191",
    "province": "\u7518\u8083\u7701",
    "parent": "1"
}, {"id": "3304", "province": "\u9752\u6d77\u7701", "parent": "1"}, {
    "id": "3358",
    "province": "\u5b81\u590f\u56de\u65cf\u81ea\u6cbb\u533a",
    "parent": "1"
}, {"id": "3391", "province": "\u65b0\u7586\u7ef4\u543e\u5c14\u81ea\u6cbb\u533a", "parent": "1"}, {
    "id": "3512",
    "province": "\u53f0\u6e7e\u7701",
    "parent": "1"
}, {"id": "3891", "province": "\u9999\u6e2f\u7279\u522b\u884c\u653f\u533a", "parent": "1"}, {
    "id": "3913",
    "province": "\u6fb3\u95e8\u7279\u522b\u884c\u653f\u533a",
    "parent": "1"
}];

var cityJson = [{"id": "2", "city": "\u5317\u4eac\u5e02", "parent": "1"}, {
    "id": "19",
    "city": "\u5929\u6d25\u5e02",
    "parent": "1"
}, {"id": "37", "city": "\u77f3\u5bb6\u5e84\u5e02", "parent": "36"}, {
    "id": "61",
    "city": "\u5510\u5c71\u5e02",
    "parent": "36"
}, {"id": "77", "city": "\u79e6\u7687\u5c9b\u5e02", "parent": "36"}, {
    "id": "86",
    "city": "\u90af\u90f8\u5e02",
    "parent": "36"
}, {"id": "107", "city": "\u90a2\u53f0\u5e02", "parent": "36"}, {
    "id": "128",
    "city": "\u4fdd\u5b9a\u5e02",
    "parent": "36"
}, {"id": "155", "city": "\u5f20\u5bb6\u53e3\u5e02", "parent": "36"}, {
    "id": "174",
    "city": "\u627f\u5fb7\u5e02",
    "parent": "36"
}, {"id": "187", "city": "\u6ca7\u5dde\u5e02", "parent": "36"}, {
    "id": "205",
    "city": "\u5eca\u574a\u5e02",
    "parent": "36"
}, {"id": "217", "city": "\u8861\u6c34\u5e02", "parent": "36"}, {
    "id": "231",
    "city": "\u592a\u539f\u5e02",
    "parent": "230"
}, {"id": "243", "city": "\u5927\u540c\u5e02", "parent": "230"}, {
    "id": "256",
    "city": "\u9633\u6cc9\u5e02",
    "parent": "230"
}, {"id": "263", "city": "\u957f\u6cbb\u5e02", "parent": "230"}, {
    "id": "278",
    "city": "\u664b\u57ce\u5e02",
    "parent": "230"
}, {"id": "286", "city": "\u6714\u5dde\u5e02", "parent": "230"}, {
    "id": "294",
    "city": "\u664b\u4e2d\u5e02",
    "parent": "230"
}, {"id": "307", "city": "\u8fd0\u57ce\u5e02", "parent": "230"}, {
    "id": "322",
    "city": "\u5ffb\u5dde\u5e02",
    "parent": "230"
}, {"id": "338", "city": "\u4e34\u6c7e\u5e02", "parent": "230"}, {
    "id": "357",
    "city": "\u5415\u6881\u5e02",
    "parent": "230"
}, {"id": "373", "city": "\u547c\u548c\u6d69\u7279\u5e02", "parent": "372"}, {
    "id": "384",
    "city": "\u5305\u5934\u5e02",
    "parent": "372"
}, {"id": "395", "city": "\u4e4c\u6d77\u5e02", "parent": "372"}, {
    "id": "400",
    "city": "\u8d64\u5cf0\u5e02",
    "parent": "372"
}, {"id": "414", "city": "\u901a\u8fbd\u5e02", "parent": "372"}, {
    "id": "424",
    "city": "\u9102\u5c14\u591a\u65af\u5e02",
    "parent": "372"
}, {"id": "434", "city": "\u547c\u4f26\u8d1d\u5c14\u5e02", "parent": "372"}, {
    "id": "450",
    "city": "\u5df4\u5f66\u6dd6\u5c14\u5e02",
    "parent": "372"
}, {"id": "459", "city": "\u4e4c\u5170\u5bdf\u5e03\u5e02", "parent": "372"}, {
    "id": "472",
    "city": "\u5174\u5b89\u76df",
    "parent": "372"
}, {"id": "479", "city": "\u9521\u6797\u90ed\u52d2\u76df", "parent": "372"}, {
    "id": "492",
    "city": "\u963f\u62c9\u5584\u76df",
    "parent": "372"
}, {"id": "497", "city": "\u6c88\u9633\u5e02", "parent": "496"}, {
    "id": "512",
    "city": "\u5927\u8fde\u5e02",
    "parent": "496"
}, {"id": "524", "city": "\u978d\u5c71\u5e02", "parent": "496"}, {
    "id": "533",
    "city": "\u629a\u987a\u5e02",
    "parent": "496"
}, {"id": "542", "city": "\u672c\u6eaa\u5e02", "parent": "496"}, {
    "id": "550",
    "city": "\u4e39\u4e1c\u5e02",
    "parent": "496"
}, {"id": "558", "city": "\u9526\u5dde\u5e02", "parent": "496"}, {
    "id": "567",
    "city": "\u8425\u53e3\u5e02",
    "parent": "496"
}, {"id": "575", "city": "\u961c\u65b0\u5e02", "parent": "496"}, {
    "id": "584",
    "city": "\u8fbd\u9633\u5e02",
    "parent": "496"
}, {"id": "593", "city": "\u76d8\u9526\u5e02", "parent": "496"}, {
    "id": "599",
    "city": "\u94c1\u5cad\u5e02",
    "parent": "496"
}, {"id": "608", "city": "\u671d\u9633\u5e02", "parent": "496"}, {
    "id": "617",
    "city": "\u846b\u82a6\u5c9b\u5e02",
    "parent": "496"
}, {"id": "626", "city": "\u957f\u6625\u5e02", "parent": "625"}, {
    "id": "638",
    "city": "\u5409\u6797\u5e02",
    "parent": "625"
}, {"id": "649", "city": "\u56db\u5e73\u5e02", "parent": "625"}, {
    "id": "657",
    "city": "\u8fbd\u6e90\u5e02",
    "parent": "625"
}, {"id": "663", "city": "\u901a\u5316\u5e02", "parent": "625"}, {
    "id": "672",
    "city": "\u767d\u5c71\u5e02",
    "parent": "625"
}, {"id": "680", "city": "\u677e\u539f\u5e02", "parent": "625"}, {
    "id": "687",
    "city": "\u767d\u57ce\u5e02",
    "parent": "625"
}, {"id": "694", "city": "\u5ef6\u8fb9\u671d\u9c9c\u65cf\u81ea\u6cbb\u5dde", "parent": "625"}, {
    "id": "704",
    "city": "\u54c8\u5c14\u6ee8\u5e02",
    "parent": "703"
}, {"id": "724", "city": "\u9f50\u9f50\u54c8\u5c14\u5e02", "parent": "703"}, {
    "id": "742",
    "city": "\u9e21\u897f\u5e02",
    "parent": "703"
}, {"id": "753", "city": "\u9e64\u5c97\u5e02", "parent": "703"}, {
    "id": "763",
    "city": "\u53cc\u9e2d\u5c71\u5e02",
    "parent": "703"
}, {"id": "773", "city": "\u5927\u5e86\u5e02", "parent": "703"}, {
    "id": "784",
    "city": "\u4f0a\u6625\u5e02",
    "parent": "703"
}, {"id": "803", "city": "\u4f73\u6728\u65af\u5e02", "parent": "703"}, {
    "id": "815",
    "city": "\u4e03\u53f0\u6cb3\u5e02",
    "parent": "703"
}, {"id": "821", "city": "\u7261\u4e39\u6c5f\u5e02", "parent": "703"}, {
    "id": "833",
    "city": "\u9ed1\u6cb3\u5e02",
    "parent": "703"
}, {"id": "841", "city": "\u7ee5\u5316\u5e02", "parent": "703"}, {
    "id": "853",
    "city": "\u5927\u5174\u5b89\u5cad\u5730\u533a",
    "parent": "703"
}, {"id": "857", "city": "\u4e0a\u6d77\u5e02", "parent": "1"}, {
    "id": "876",
    "city": "\u5357\u4eac\u5e02",
    "parent": "875"
}, {"id": "889", "city": "\u65e0\u9521\u5e02", "parent": "875"}, {
    "id": "899",
    "city": "\u5f90\u5dde\u5e02",
    "parent": "875"
}, {"id": "911", "city": "\u5e38\u5dde\u5e02", "parent": "875"}, {
    "id": "920",
    "city": "\u82cf\u5dde\u5e02",
    "parent": "875"
}, {"id": "931", "city": "\u5357\u901a\u5e02", "parent": "875"}, {
    "id": "941",
    "city": "\u8fde\u4e91\u6e2f\u5e02",
    "parent": "875"
}, {"id": "949", "city": "\u6dee\u5b89\u5e02", "parent": "875"}, {
    "id": "959",
    "city": "\u76d0\u57ce\u5e02",
    "parent": "875"
}, {"id": "970", "city": "\u626c\u5dde\u5e02", "parent": "875"}, {
    "id": "978",
    "city": "\u9547\u6c5f\u5e02",
    "parent": "875"
}, {"id": "986", "city": "\u6cf0\u5dde\u5e02", "parent": "875"}, {
    "id": "994",
    "city": "\u5bbf\u8fc1\u5e02",
    "parent": "875"
}, {"id": "1002", "city": "\u676d\u5dde\u5e02", "parent": "1001"}, {
    "id": "1017",
    "city": "\u5b81\u6ce2\u5e02",
    "parent": "1001"
}, {"id": "1030", "city": "\u6e29\u5dde\u5e02", "parent": "1001"}, {
    "id": "1043",
    "city": "\u5609\u5174\u5e02",
    "parent": "1001"
}, {"id": "1052", "city": "\u6e56\u5dde\u5e02", "parent": "1001"}, {
    "id": "1059",
    "city": "\u7ecd\u5174\u5e02",
    "parent": "1001"
}, {"id": "1067", "city": "\u91d1\u534e\u5e02", "parent": "1001"}, {
    "id": "1078",
    "city": "\u8862\u5dde\u5e02",
    "parent": "1001"
}, {"id": "1086", "city": "\u821f\u5c71\u5e02", "parent": "1001"}, {
    "id": "1092",
    "city": "\u53f0\u5dde\u5e02",
    "parent": "1001"
}, {"id": "1103", "city": "\u4e3d\u6c34\u5e02", "parent": "1001"}, {
    "id": "1115",
    "city": "\u5408\u80a5\u5e02",
    "parent": "1114"
}, {"id": "1126", "city": "\u829c\u6e56\u5e02", "parent": "1114"}, {
    "id": "1136",
    "city": "\u868c\u57e0\u5e02",
    "parent": "1114"
}, {"id": "1145", "city": "\u6dee\u5357\u5e02", "parent": "1114"}, {
    "id": "1153",
    "city": "\u9a6c\u978d\u5c71\u5e02",
    "parent": "1114"
}, {"id": "1161", "city": "\u6dee\u5317\u5e02", "parent": "1114"}, {
    "id": "1167",
    "city": "\u94dc\u9675\u5e02",
    "parent": "1114"
}, {"id": "1173", "city": "\u5b89\u5e86\u5e02", "parent": "1114"}, {
    "id": "1186",
    "city": "\u9ec4\u5c71\u5e02",
    "parent": "1114"
}, {"id": "1195", "city": "\u6ec1\u5dde\u5e02", "parent": "1114"}, {
    "id": "1205",
    "city": "\u961c\u9633\u5e02",
    "parent": "1114"
}, {"id": "1215", "city": "\u5bbf\u5dde\u5e02", "parent": "1114"}, {
    "id": "1222",
    "city": "\u516d\u5b89\u5e02",
    "parent": "1114"
}, {"id": "1231", "city": "\u4eb3\u5dde\u5e02", "parent": "1114"}, {
    "id": "1237",
    "city": "\u6c60\u5dde\u5e02",
    "parent": "1114"
}, {"id": "1243", "city": "\u5ba3\u57ce\u5e02", "parent": "1114"}, {
    "id": "1253",
    "city": "\u798f\u5dde\u5e02",
    "parent": "1252"
}, {"id": "1268", "city": "\u53a6\u95e8\u5e02", "parent": "1252"}, {
    "id": "1276",
    "city": "\u8386\u7530\u5e02",
    "parent": "1252"
}, {"id": "1283", "city": "\u4e09\u660e\u5e02", "parent": "1252"}, {
    "id": "1297",
    "city": "\u6cc9\u5dde\u5e02",
    "parent": "1252"
}, {"id": "1311", "city": "\u6f33\u5dde\u5e02", "parent": "1252"}, {
    "id": "1324",
    "city": "\u5357\u5e73\u5e02",
    "parent": "1252"
}, {"id": "1336", "city": "\u9f99\u5ca9\u5e02", "parent": "1252"}, {
    "id": "1345",
    "city": "\u5b81\u5fb7\u5e02",
    "parent": "1252"
}, {"id": "1357", "city": "\u5357\u660c\u5e02", "parent": "1356"}, {
    "id": "1368",
    "city": "\u666f\u5fb7\u9547\u5e02",
    "parent": "1356"
}, {"id": "1374", "city": "\u840d\u4e61\u5e02", "parent": "1356"}, {
    "id": "1381",
    "city": "\u4e5d\u6c5f\u5e02",
    "parent": "1356"
}, {"id": "1396", "city": "\u65b0\u4f59\u5e02", "parent": "1356"}, {
    "id": "1400",
    "city": "\u9e70\u6f6d\u5e02",
    "parent": "1356"
}, {"id": "1405", "city": "\u8d63\u5dde\u5e02", "parent": "1356"}, {
    "id": "1425",
    "city": "\u5409\u5b89\u5e02",
    "parent": "1356"
}, {"id": "1440", "city": "\u5b9c\u6625\u5e02", "parent": "1356"}, {
    "id": "1452",
    "city": "\u629a\u5dde\u5e02",
    "parent": "1356"
}, {"id": "1465", "city": "\u4e0a\u9976\u5e02", "parent": "1356"}, {
    "id": "1480",
    "city": "\u6d4e\u5357\u5e02",
    "parent": "1479"
}, {"id": "1492", "city": "\u9752\u5c9b\u5e02", "parent": "1479"}, {
    "id": "1504",
    "city": "\u6dc4\u535a\u5e02",
    "parent": "1479"
}, {"id": "1514", "city": "\u67a3\u5e84\u5e02", "parent": "1479"}, {
    "id": "1522",
    "city": "\u4e1c\u8425\u5e02",
    "parent": "1479"
}, {"id": "1529", "city": "\u70df\u53f0\u5e02", "parent": "1479"}, {
    "id": "1543",
    "city": "\u6f4d\u574a\u5e02",
    "parent": "1479"
}, {"id": "1557", "city": "\u6d4e\u5b81\u5e02", "parent": "1479"}, {
    "id": "1570",
    "city": "\u6cf0\u5b89\u5e02",
    "parent": "1479"
}, {"id": "1578", "city": "\u5a01\u6d77\u5e02", "parent": "1479"}, {
    "id": "1584",
    "city": "\u65e5\u7167\u5e02",
    "parent": "1479"
}, {"id": "1590", "city": "\u83b1\u829c\u5e02", "parent": "1479"}, {
    "id": "1594",
    "city": "\u4e34\u6c82\u5e02",
    "parent": "1479"
}, {"id": "1608", "city": "\u5fb7\u5dde\u5e02", "parent": "1479"}, {
    "id": "1621",
    "city": "\u804a\u57ce\u5e02",
    "parent": "1479"
}, {"id": "1631", "city": "\u6ee8\u5dde\u5e02", "parent": "1479"}, {
    "id": "1640",
    "city": "\u83cf\u6cfd\u5e02",
    "parent": "1479"
}, {"id": "1652", "city": "\u90d1\u5dde\u5e02", "parent": "1651"}, {
    "id": "1666",
    "city": "\u5f00\u5c01\u5e02",
    "parent": "1651"
}, {"id": "1677", "city": "\u6d1b\u9633\u5e02", "parent": "1651"}, {
    "id": "1694",
    "city": "\u5e73\u9876\u5c71\u5e02",
    "parent": "1651"
}, {"id": "1706", "city": "\u5b89\u9633\u5e02", "parent": "1651"}, {
    "id": "1717",
    "city": "\u9e64\u58c1\u5e02",
    "parent": "1651"
}, {"id": "1724", "city": "\u65b0\u4e61\u5e02", "parent": "1651"}, {
    "id": "1738",
    "city": "\u7126\u4f5c\u5e02",
    "parent": "1651"
}, {"id": "1750", "city": "\u6fee\u9633\u5e02", "parent": "1651"}, {
    "id": "1758",
    "city": "\u8bb8\u660c\u5e02",
    "parent": "1651"
}, {"id": "1766", "city": "\u6f2f\u6cb3\u5e02", "parent": "1651"}, {
    "id": "1773",
    "city": "\u4e09\u95e8\u5ce1\u5e02",
    "parent": "1651"
}, {"id": "1781", "city": "\u5357\u9633\u5e02", "parent": "1651"}, {
    "id": "1796",
    "city": "\u5546\u4e18\u5e02",
    "parent": "1651"
}, {"id": "1807", "city": "\u4fe1\u9633\u5e02", "parent": "1651"}, {
    "id": "1819",
    "city": "\u5468\u53e3\u5e02",
    "parent": "1651"
}, {"id": "1831", "city": "\u9a7b\u9a6c\u5e97\u5e02", "parent": "1651"}, {
    "id": "1843",
    "city": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
    "parent": "1651"
}, {"id": "1846", "city": "\u6b66\u6c49\u5e02", "parent": "1845"}, {
    "id": "1861",
    "city": "\u9ec4\u77f3\u5e02",
    "parent": "1845"
}, {"id": "1869", "city": "\u5341\u5830\u5e02", "parent": "1845"}, {
    "id": "1879",
    "city": "\u5b9c\u660c\u5e02",
    "parent": "1845"
}, {"id": "1894", "city": "\u8944\u9633\u5e02", "parent": "1845"}, {
    "id": "1905",
    "city": "\u9102\u5dde\u5e02",
    "parent": "1845"
}, {"id": "1910", "city": "\u8346\u95e8\u5e02", "parent": "1845"}, {
    "id": "1917",
    "city": "\u5b5d\u611f\u5e02",
    "parent": "1845"
}, {"id": "1926", "city": "\u8346\u5dde\u5e02", "parent": "1845"}, {
    "id": "1936",
    "city": "\u9ec4\u5188\u5e02",
    "parent": "1845"
}, {"id": "1948", "city": "\u54b8\u5b81\u5e02", "parent": "1845"}, {
    "id": "1956",
    "city": "\u968f\u5dde\u5e02",
    "parent": "1845"
}, {
    "id": "1961",
    "city": "\u6069\u65bd\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
    "parent": "1845"
}, {"id": "1970", "city": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "parent": "1845"}, {
    "id": "1976",
    "city": "\u957f\u6c99\u5e02",
    "parent": "1975"
}, {"id": "1987", "city": "\u682a\u6d32\u5e02", "parent": "1975"}, {
    "id": "1998",
    "city": "\u6e58\u6f6d\u5e02",
    "parent": "1975"
}, {"id": "2005", "city": "\u8861\u9633\u5e02", "parent": "1975"}, {
    "id": "2019",
    "city": "\u90b5\u9633\u5e02",
    "parent": "1975"
}, {"id": "2033", "city": "\u5cb3\u9633\u5e02", "parent": "1975"}, {
    "id": "2044",
    "city": "\u5e38\u5fb7\u5e02",
    "parent": "1975"
}, {"id": "2055", "city": "\u5f20\u5bb6\u754c\u5e02", "parent": "1975"}, {
    "id": "2061",
    "city": "\u76ca\u9633\u5e02",
    "parent": "1975"
}, {"id": "2069", "city": "\u90f4\u5dde\u5e02", "parent": "1975"}, {
    "id": "2082",
    "city": "\u6c38\u5dde\u5e02",
    "parent": "1975"
}, {"id": "2095", "city": "\u6000\u5316\u5e02", "parent": "1975"}, {
    "id": "2109",
    "city": "\u5a04\u5e95\u5e02",
    "parent": "1975"
}, {
    "id": "2116",
    "city": "\u6e58\u897f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
    "parent": "1975"
}, {"id": "2126", "city": "\u5e7f\u5dde\u5e02", "parent": "2125"}, {
    "id": "2139",
    "city": "\u97f6\u5173\u5e02",
    "parent": "2125"
}, {"id": "2151", "city": "\u6df1\u5733\u5e02", "parent": "2125"}, {
    "id": "2159",
    "city": "\u73e0\u6d77\u5e02",
    "parent": "2125"
}, {"id": "2164", "city": "\u6c55\u5934\u5e02", "parent": "2125"}, {
    "id": "2173",
    "city": "\u4f5b\u5c71\u5e02",
    "parent": "2125"
}, {"id": "2180", "city": "\u6c5f\u95e8\u5e02", "parent": "2125"}, {
    "id": "2189",
    "city": "\u6e5b\u6c5f\u5e02",
    "parent": "2125"
}, {"id": "2200", "city": "\u8302\u540d\u5e02", "parent": "2125"}, {
    "id": "2207",
    "city": "\u8087\u5e86\u5e02",
    "parent": "2125"
}, {"id": "2217", "city": "\u60e0\u5dde\u5e02", "parent": "2125"}, {
    "id": "2224",
    "city": "\u6885\u5dde\u5e02",
    "parent": "2125"
}, {"id": "2234", "city": "\u6c55\u5c3e\u5e02", "parent": "2125"}, {
    "id": "2240",
    "city": "\u6cb3\u6e90\u5e02",
    "parent": "2125"
}, {"id": "2248", "city": "\u9633\u6c5f\u5e02", "parent": "2125"}, {
    "id": "2254",
    "city": "\u6e05\u8fdc\u5e02",
    "parent": "2125"
}, {"id": "2264", "city": "\u4e1c\u839e\u5e02", "parent": "2125"}, {
    "id": "2265",
    "city": "\u4e2d\u5c71\u5e02",
    "parent": "2125"
}, {"id": "2266", "city": "\u6f6e\u5dde\u5e02", "parent": "2125"}, {
    "id": "2271",
    "city": "\u63ed\u9633\u5e02",
    "parent": "2125"
}, {"id": "2278", "city": "\u4e91\u6d6e\u5e02", "parent": "2125"}, {
    "id": "2286",
    "city": "\u5357\u5b81\u5e02",
    "parent": "2285"
}, {"id": "2300", "city": "\u67f3\u5dde\u5e02", "parent": "2285"}, {
    "id": "2312",
    "city": "\u6842\u6797\u5e02",
    "parent": "2285"
}, {"id": "2331", "city": "\u68a7\u5dde\u5e02", "parent": "2285"}, {
    "id": "2340",
    "city": "\u5317\u6d77\u5e02",
    "parent": "2285"
}, {"id": "2346", "city": "\u9632\u57ce\u6e2f\u5e02", "parent": "2285"}, {
    "id": "2352",
    "city": "\u94a6\u5dde\u5e02",
    "parent": "2285"
}, {"id": "2358", "city": "\u8d35\u6e2f\u5e02", "parent": "2285"}, {
    "id": "2365",
    "city": "\u7389\u6797\u5e02",
    "parent": "2285"
}, {"id": "2374", "city": "\u767e\u8272\u5e02", "parent": "2285"}, {
    "id": "2388",
    "city": "\u8d3a\u5dde\u5e02",
    "parent": "2285"
}, {"id": "2395", "city": "\u6cb3\u6c60\u5e02", "parent": "2285"}, {
    "id": "2408",
    "city": "\u6765\u5bbe\u5e02",
    "parent": "2285"
}, {"id": "2416", "city": "\u5d07\u5de6\u5e02", "parent": "2285"}, {
    "id": "2426",
    "city": "\u6d77\u53e3\u5e02",
    "parent": "2425"
}, {"id": "2432", "city": "\u4e09\u4e9a\u5e02", "parent": "2425"}, {
    "id": "2438",
    "city": "\u4e09\u6c99\u5e02",
    "parent": "2425"
}, {"id": "2442", "city": "\u7701\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212", "parent": "2425"}, {
    "id": "2459",
    "city": "\u91cd\u5e86\u5e02",
    "parent": "1"
}, {"id": "2499", "city": "\u6210\u90fd\u5e02", "parent": "2498"}, {
    "id": "2520",
    "city": "\u81ea\u8d21\u5e02",
    "parent": "2498"
}, {"id": "2528", "city": "\u6500\u679d\u82b1\u5e02", "parent": "2498"}, {
    "id": "2535",
    "city": "\u6cf8\u5dde\u5e02",
    "parent": "2498"
}, {"id": "2544", "city": "\u5fb7\u9633\u5e02", "parent": "2498"}, {
    "id": "2552",
    "city": "\u7ef5\u9633\u5e02",
    "parent": "2498"
}, {"id": "2563", "city": "\u5e7f\u5143\u5e02", "parent": "2498"}, {
    "id": "2572",
    "city": "\u9042\u5b81\u5e02",
    "parent": "2498"
}, {"id": "2579", "city": "\u5185\u6c5f\u5e02", "parent": "2498"}, {
    "id": "2586",
    "city": "\u4e50\u5c71\u5e02",
    "parent": "2498"
}, {"id": "2599", "city": "\u5357\u5145\u5e02", "parent": "2498"}, {
    "id": "2610",
    "city": "\u7709\u5c71\u5e02",
    "parent": "2498"
}, {"id": "2618", "city": "\u5b9c\u5bbe\u5e02", "parent": "2498"}, {
    "id": "2630",
    "city": "\u5e7f\u5b89\u5e02",
    "parent": "2498"
}, {"id": "2638", "city": "\u8fbe\u5dde\u5e02", "parent": "2498"}, {
    "id": "2647",
    "city": "\u96c5\u5b89\u5e02",
    "parent": "2498"
}, {"id": "2657", "city": "\u5df4\u4e2d\u5e02", "parent": "2498"}, {
    "id": "2664",
    "city": "\u8d44\u9633\u5e02",
    "parent": "2498"
}, {"id": "2670", "city": "\u963f\u575d\u85cf\u65cf\u7f8c\u65cf\u81ea\u6cbb\u5dde", "parent": "2498"}, {
    "id": "2684",
    "city": "\u7518\u5b5c\u85cf\u65cf\u81ea\u6cbb\u5dde",
    "parent": "2498"
}, {"id": "2703", "city": "\u51c9\u5c71\u5f5d\u65cf\u81ea\u6cbb\u5dde", "parent": "2498"}, {
    "id": "2722",
    "city": "\u8d35\u9633\u5e02",
    "parent": "2721"
}, {"id": "2734", "city": "\u516d\u76d8\u6c34\u5e02", "parent": "2721"}, {
    "id": "2739",
    "city": "\u9075\u4e49\u5e02",
    "parent": "2721"
}, {"id": "2755", "city": "\u5b89\u987a\u5e02", "parent": "2721"}, {
    "id": "2763",
    "city": "\u6bd5\u8282\u5e02",
    "parent": "2721"
}, {"id": "2773", "city": "\u94dc\u4ec1\u5e02", "parent": "2721"}, {
    "id": "2785",
    "city": "\u9ed4\u897f\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
    "parent": "2721"
}, {
    "id": "2794",
    "city": "\u9ed4\u4e1c\u5357\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u5dde",
    "parent": "2721"
}, {
    "id": "2811",
    "city": "\u9ed4\u5357\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde",
    "parent": "2721"
}, {"id": "2825", "city": "\u6606\u660e\u5e02", "parent": "2824"}, {
    "id": "2841",
    "city": "\u66f2\u9756\u5e02",
    "parent": "2824"
}, {"id": "2852", "city": "\u7389\u6eaa\u5e02", "parent": "2824"}, {
    "id": "2863",
    "city": "\u4fdd\u5c71\u5e02",
    "parent": "2824"
}, {"id": "2870", "city": "\u662d\u901a\u5e02", "parent": "2824"}, {
    "id": "2883",
    "city": "\u4e3d\u6c5f\u5e02",
    "parent": "2824"
}, {"id": "2890", "city": "\u666e\u6d31\u5e02", "parent": "2824"}, {
    "id": "2902",
    "city": "\u4e34\u6ca7\u5e02",
    "parent": "2824"
}, {"id": "2912", "city": "\u695a\u96c4\u5f5d\u65cf\u81ea\u6cbb\u5dde", "parent": "2824"}, {
    "id": "2923",
    "city": "\u7ea2\u6cb3\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u5dde",
    "parent": "2824"
}, {"id": "2937", "city": "\u6587\u5c71\u58ee\u65cf\u82d7\u65cf\u81ea\u6cbb\u5dde", "parent": "2824"}, {
    "id": "2946",
    "city": "\u897f\u53cc\u7248\u7eb3\u50a3\u65cf\u81ea\u6cbb\u5dde",
    "parent": "2824"
}, {"id": "2950", "city": "\u5927\u7406\u767d\u65cf\u81ea\u6cbb\u5dde", "parent": "2824"}, {
    "id": "2963",
    "city": "\u5fb7\u5b8f\u50a3\u65cf\u666f\u9887\u65cf\u81ea\u6cbb\u5dde",
    "parent": "2824"
}, {"id": "2969", "city": "\u6012\u6c5f\u5088\u50f3\u65cf\u81ea\u6cbb\u5dde", "parent": "2824"}, {
    "id": "2974",
    "city": "\u8fea\u5e86\u85cf\u65cf\u81ea\u6cbb\u5dde",
    "parent": "2824"
}, {"id": "2979", "city": "\u62c9\u8428\u5e02", "parent": "2978"}, {
    "id": "2989",
    "city": "\u65e5\u5580\u5219\u5e02",
    "parent": "2978"
}, {"id": "3009", "city": "\u660c\u90fd\u5e02", "parent": "2978"}, {
    "id": "3022",
    "city": "\u5c71\u5357\u5730\u533a",
    "parent": "2978"
}, {"id": "3035", "city": "\u90a3\u66f2\u5730\u533a", "parent": "2978"}, {
    "id": "3047",
    "city": "\u963f\u91cc\u5730\u533a",
    "parent": "2978"
}, {"id": "3055", "city": "\u6797\u829d\u5730\u533a", "parent": "2978"}, {
    "id": "3064",
    "city": "\u897f\u5b89\u5e02",
    "parent": "3063"
}, {"id": "3079", "city": "\u94dc\u5ddd\u5e02", "parent": "3063"}, {
    "id": "3085",
    "city": "\u5b9d\u9e21\u5e02",
    "parent": "3063"
}, {"id": "3099", "city": "\u54b8\u9633\u5e02", "parent": "3063"}, {
    "id": "3115",
    "city": "\u6e2d\u5357\u5e02",
    "parent": "3063"
}, {"id": "3128", "city": "\u5ef6\u5b89\u5e02", "parent": "3063"}, {
    "id": "3143",
    "city": "\u6c49\u4e2d\u5e02",
    "parent": "3063"
}, {"id": "3156", "city": "\u6986\u6797\u5e02", "parent": "3063"}, {
    "id": "3170",
    "city": "\u5b89\u5eb7\u5e02",
    "parent": "3063"
}, {"id": "3182", "city": "\u5546\u6d1b\u5e02", "parent": "3063"}, {
    "id": "3192",
    "city": "\u5170\u5dde\u5e02",
    "parent": "3191"
}, {"id": "3202", "city": "\u5609\u5cea\u5173\u5e02", "parent": "3191"}, {
    "id": "3204",
    "city": "\u91d1\u660c\u5e02",
    "parent": "3191"
}, {"id": "3208", "city": "\u767d\u94f6\u5e02", "parent": "3191"}, {
    "id": "3215",
    "city": "\u5929\u6c34\u5e02",
    "parent": "3191"
}, {"id": "3224", "city": "\u6b66\u5a01\u5e02", "parent": "3191"}, {
    "id": "3230",
    "city": "\u5f20\u6396\u5e02",
    "parent": "3191"
}, {"id": "3238", "city": "\u5e73\u51c9\u5e02", "parent": "3191"}, {
    "id": "3247",
    "city": "\u9152\u6cc9\u5e02",
    "parent": "3191"
}, {"id": "3256", "city": "\u5e86\u9633\u5e02", "parent": "3191"}, {
    "id": "3266",
    "city": "\u5b9a\u897f\u5e02",
    "parent": "3191"
}, {"id": "3275", "city": "\u9647\u5357\u5e02", "parent": "3191"}, {
    "id": "3286",
    "city": "\u4e34\u590f\u56de\u65cf\u81ea\u6cbb\u5dde",
    "parent": "3191"
}, {"id": "3295", "city": "\u7518\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde", "parent": "3191"}, {
    "id": "3305",
    "city": "\u897f\u5b81\u5e02",
    "parent": "3304"
}, {"id": "3314", "city": "\u6d77\u4e1c\u5e02", "parent": "3304"}, {
    "id": "3322",
    "city": "\u6d77\u5317\u85cf\u65cf\u81ea\u6cbb\u5dde",
    "parent": "3304"
}, {"id": "3327", "city": "\u9ec4\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde", "parent": "3304"}, {
    "id": "3332",
    "city": "\u6d77\u5357\u85cf\u65cf\u81ea\u6cbb\u5dde",
    "parent": "3304"
}, {"id": "3338", "city": "\u679c\u6d1b\u85cf\u65cf\u81ea\u6cbb\u5dde", "parent": "3304"}, {
    "id": "3345",
    "city": "\u7389\u6811\u85cf\u65cf\u81ea\u6cbb\u5dde",
    "parent": "3304"
}, {
    "id": "3352",
    "city": "\u6d77\u897f\u8499\u53e4\u65cf\u85cf\u65cf\u81ea\u6cbb\u5dde",
    "parent": "3304"
}, {"id": "3359", "city": "\u94f6\u5ddd\u5e02", "parent": "3358"}, {
    "id": "3367",
    "city": "\u77f3\u5634\u5c71\u5e02",
    "parent": "3358"
}, {"id": "3372", "city": "\u5434\u5fe0\u5e02", "parent": "3358"}, {
    "id": "3379",
    "city": "\u56fa\u539f\u5e02",
    "parent": "3358"
}, {"id": "3386", "city": "\u4e2d\u536b\u5e02", "parent": "3358"}, {
    "id": "3392",
    "city": "\u4e4c\u9c81\u6728\u9f50\u5e02",
    "parent": "3391"
}, {"id": "3402", "city": "\u514b\u62c9\u739b\u4f9d\u5e02", "parent": "3391"}, {
    "id": "3408",
    "city": "\u5410\u9c81\u756a\u5730\u533a",
    "parent": "3391"
}, {"id": "3412", "city": "\u54c8\u5bc6\u5730\u533a", "parent": "3391"}, {
    "id": "3416",
    "city": "\u660c\u5409\u56de\u65cf\u81ea\u6cbb\u5dde",
    "parent": "3391"
}, {"id": "3424", "city": "\u535a\u5c14\u5854\u62c9\u8499\u53e4\u81ea\u6cbb\u5dde", "parent": "3391"}, {
    "id": "3429",
    "city": "\u5df4\u97f3\u90ed\u695e\u8499\u53e4\u81ea\u6cbb\u5dde",
    "parent": "3391"
}, {"id": "3439", "city": "\u963f\u514b\u82cf\u5730\u533a", "parent": "3391"}, {
    "id": "3449",
    "city": "\u514b\u5b5c\u52d2\u82cf\u67ef\u5c14\u514b\u5b5c\u81ea\u6cbb\u5dde",
    "parent": "3391"
}, {"id": "3454", "city": "\u5580\u4ec0\u5730\u533a", "parent": "3391"}, {
    "id": "3467",
    "city": "\u548c\u7530\u5730\u533a",
    "parent": "3391"
}, {"id": "3476", "city": "\u4f0a\u7281\u54c8\u8428\u514b\u81ea\u6cbb\u5dde", "parent": "3391"}, {
    "id": "3504",
    "city": "\u81ea\u6cbb\u533a\u76f4\u8f96\u53bf\u7ea7\u884c\u653f\u533a\u5212",
    "parent": "3391"
}, {"id": "3513", "city": "\u53f0\u5317\u5e02", "parent": "3512"}, {
    "id": "3526",
    "city": "\u9ad8\u96c4\u5e02",
    "parent": "3512"
}, {"id": "3565", "city": "\u57fa\u9686\u5e02", "parent": "3512"}, {
    "id": "3573",
    "city": "\u53f0\u4e2d\u5e02",
    "parent": "3512"
}, {"id": "3603", "city": "\u53f0\u5357\u5e02", "parent": "3512"}, {
    "id": "3641",
    "city": "\u65b0\u7af9\u5e02",
    "parent": "3512"
}, {"id": "3645", "city": "\u5609\u4e49\u5e02", "parent": "3512"}, {
    "id": "3648",
    "city": "\u65b0\u5317\u5e02",
    "parent": "3512"
}, {"id": "3678", "city": "\u5b9c\u5170\u53bf", "parent": "3512"}, {
    "id": "3691",
    "city": "\u6843\u56ed\u53bf",
    "parent": "3512"
}, {"id": "3705", "city": "\u65b0\u7af9\u53bf", "parent": "3512"}, {
    "id": "3719",
    "city": "\u82d7\u6817\u53bf",
    "parent": "3512"
}, {"id": "3738", "city": "\u5f70\u5316\u53bf", "parent": "3512"}, {
    "id": "3765",
    "city": "\u5357\u6295\u53bf",
    "parent": "3512"
}, {"id": "3779", "city": "\u4e91\u6797\u53bf", "parent": "3512"}, {
    "id": "3800",
    "city": "\u5609\u4e49\u53bf",
    "parent": "3512"
}, {"id": "3819", "city": "\u5c4f\u4e1c\u53bf", "parent": "3512"}, {
    "id": "3853",
    "city": "\u53f0\u4e1c\u53bf",
    "parent": "3512"
}, {"id": "3870", "city": "\u82b1\u83b2\u53bf", "parent": "3512"}, {
    "id": "3884",
    "city": "\u6f8e\u6e56\u53bf",
    "parent": "3512"
}, {"id": "3892", "city": "\u9999\u6e2f\u5c9b", "parent": "3891"}, {
    "id": "3897",
    "city": "\u4e5d\u9f99",
    "parent": "3891"
}, {"id": "3903", "city": "\u65b0\u754c", "parent": "3891"}, {
    "id": "3914",
    "city": "\u6fb3\u95e8\u534a\u5c9b",
    "parent": "3913"
}, {"id": "3920", "city": "\u6c39\u4ed4\u5c9b", "parent": "3913"}, {
    "id": "3922",
    "city": "\u8def\u73af\u5c9b",
    "parent": "3913"
}];

var countyJson = [{"id": "3", "county": "\u4e1c\u57ce\u533a", "parent": "2"}, {
    "id": "4",
    "county": "\u897f\u57ce\u533a",
    "parent": "2"
}, {"id": "5", "county": "\u671d\u9633\u533a", "parent": "2"}, {
    "id": "6",
    "county": "\u4e30\u53f0\u533a",
    "parent": "2"
}, {"id": "7", "county": "\u77f3\u666f\u5c71\u533a", "parent": "2"}, {
    "id": "8",
    "county": "\u6d77\u6dc0\u533a",
    "parent": "2"
}, {"id": "9", "county": "\u95e8\u5934\u6c9f\u533a", "parent": "2"}, {
    "id": "10",
    "county": "\u623f\u5c71\u533a",
    "parent": "2"
}, {"id": "11", "county": "\u901a\u5dde\u533a", "parent": "2"}, {
    "id": "12",
    "county": "\u987a\u4e49\u533a",
    "parent": "2"
}, {"id": "13", "county": "\u660c\u5e73\u533a", "parent": "2"}, {
    "id": "14",
    "county": "\u5927\u5174\u533a",
    "parent": "2"
}, {"id": "15", "county": "\u6000\u67d4\u533a", "parent": "2"}, {
    "id": "16",
    "county": "\u5e73\u8c37\u533a",
    "parent": "2"
}, {"id": "17", "county": "\u5bc6\u4e91\u53bf", "parent": "2"}, {
    "id": "18",
    "county": "\u5ef6\u5e86\u53bf",
    "parent": "2"
}, {"id": "20", "county": "\u548c\u5e73\u533a", "parent": "19"}, {
    "id": "21",
    "county": "\u6cb3\u4e1c\u533a",
    "parent": "19"
}, {"id": "22", "county": "\u6cb3\u897f\u533a", "parent": "19"}, {
    "id": "23",
    "county": "\u5357\u5f00\u533a",
    "parent": "19"
}, {"id": "24", "county": "\u6cb3\u5317\u533a", "parent": "19"}, {
    "id": "25",
    "county": "\u7ea2\u6865\u533a",
    "parent": "19"
}, {"id": "26", "county": "\u4e1c\u4e3d\u533a", "parent": "19"}, {
    "id": "27",
    "county": "\u897f\u9752\u533a",
    "parent": "19"
}, {"id": "28", "county": "\u6d25\u5357\u533a", "parent": "19"}, {
    "id": "29",
    "county": "\u5317\u8fb0\u533a",
    "parent": "19"
}, {"id": "30", "county": "\u6b66\u6e05\u533a", "parent": "19"}, {
    "id": "31",
    "county": "\u5b9d\u577b\u533a",
    "parent": "19"
}, {"id": "32", "county": "\u6ee8\u6d77\u65b0\u533a", "parent": "19"}, {
    "id": "33",
    "county": "\u5b81\u6cb3\u53bf",
    "parent": "19"
}, {"id": "34", "county": "\u9759\u6d77\u53bf", "parent": "19"}, {
    "id": "35",
    "county": "\u84df\u53bf",
    "parent": "19"
}, {"id": "38", "county": "\u5e02\u8f96\u533a", "parent": "37"}, {
    "id": "39",
    "county": "\u957f\u5b89\u533a",
    "parent": "37"
}, {"id": "40", "county": "\u6865\u897f\u533a", "parent": "37"}, {
    "id": "41",
    "county": "\u65b0\u534e\u533a",
    "parent": "37"
}, {"id": "42", "county": "\u4e95\u9649\u77ff\u533a", "parent": "37"}, {
    "id": "43",
    "county": "\u88d5\u534e\u533a",
    "parent": "37"
}, {"id": "44", "county": "\u85c1\u57ce\u533a", "parent": "37"}, {
    "id": "45",
    "county": "\u9e7f\u6cc9\u533a",
    "parent": "37"
}, {"id": "46", "county": "\u683e\u57ce\u533a", "parent": "37"}, {
    "id": "47",
    "county": "\u4e95\u9649\u53bf",
    "parent": "37"
}, {"id": "48", "county": "\u6b63\u5b9a\u53bf", "parent": "37"}, {
    "id": "49",
    "county": "\u884c\u5510\u53bf",
    "parent": "37"
}, {"id": "50", "county": "\u7075\u5bff\u53bf", "parent": "37"}, {
    "id": "51",
    "county": "\u9ad8\u9091\u53bf",
    "parent": "37"
}, {"id": "52", "county": "\u6df1\u6cfd\u53bf", "parent": "37"}, {
    "id": "53",
    "county": "\u8d5e\u7687\u53bf",
    "parent": "37"
}, {"id": "54", "county": "\u65e0\u6781\u53bf", "parent": "37"}, {
    "id": "55",
    "county": "\u5e73\u5c71\u53bf",
    "parent": "37"
}, {"id": "56", "county": "\u5143\u6c0f\u53bf", "parent": "37"}, {
    "id": "57",
    "county": "\u8d75\u53bf",
    "parent": "37"
}, {"id": "58", "county": "\u8f9b\u96c6\u5e02", "parent": "37"}, {
    "id": "59",
    "county": "\u664b\u5dde\u5e02",
    "parent": "37"
}, {"id": "60", "county": "\u65b0\u4e50\u5e02", "parent": "37"}, {
    "id": "62",
    "county": "\u5e02\u8f96\u533a",
    "parent": "61"
}, {"id": "63", "county": "\u8def\u5357\u533a", "parent": "61"}, {
    "id": "64",
    "county": "\u8def\u5317\u533a",
    "parent": "61"
}, {"id": "65", "county": "\u53e4\u51b6\u533a", "parent": "61"}, {
    "id": "66",
    "county": "\u5f00\u5e73\u533a",
    "parent": "61"
}, {"id": "67", "county": "\u4e30\u5357\u533a", "parent": "61"}, {
    "id": "68",
    "county": "\u4e30\u6da6\u533a",
    "parent": "61"
}, {"id": "69", "county": "\u66f9\u5983\u7538\u533a", "parent": "61"}, {
    "id": "70",
    "county": "\u6ee6\u53bf",
    "parent": "61"
}, {"id": "71", "county": "\u6ee6\u5357\u53bf", "parent": "61"}, {
    "id": "72",
    "county": "\u4e50\u4ead\u53bf",
    "parent": "61"
}, {"id": "73", "county": "\u8fc1\u897f\u53bf", "parent": "61"}, {
    "id": "74",
    "county": "\u7389\u7530\u53bf",
    "parent": "61"
}, {"id": "75", "county": "\u9075\u5316\u5e02", "parent": "61"}, {
    "id": "76",
    "county": "\u8fc1\u5b89\u5e02",
    "parent": "61"
}, {"id": "78", "county": "\u5e02\u8f96\u533a", "parent": "77"}, {
    "id": "79",
    "county": "\u6d77\u6e2f\u533a",
    "parent": "77"
}, {"id": "80", "county": "\u5c71\u6d77\u5173\u533a", "parent": "77"}, {
    "id": "81",
    "county": "\u5317\u6234\u6cb3\u533a",
    "parent": "77"
}, {"id": "82", "county": "\u9752\u9f99\u6ee1\u65cf\u81ea\u6cbb\u53bf", "parent": "77"}, {
    "id": "83",
    "county": "\u660c\u9ece\u53bf",
    "parent": "77"
}, {"id": "84", "county": "\u629a\u5b81\u53bf", "parent": "77"}, {
    "id": "85",
    "county": "\u5362\u9f99\u53bf",
    "parent": "77"
}, {"id": "87", "county": "\u5e02\u8f96\u533a", "parent": "86"}, {
    "id": "88",
    "county": "\u90af\u5c71\u533a",
    "parent": "86"
}, {"id": "89", "county": "\u4e1b\u53f0\u533a", "parent": "86"}, {
    "id": "90",
    "county": "\u590d\u5174\u533a",
    "parent": "86"
}, {"id": "91", "county": "\u5cf0\u5cf0\u77ff\u533a", "parent": "86"}, {
    "id": "92",
    "county": "\u90af\u90f8\u53bf",
    "parent": "86"
}, {"id": "93", "county": "\u4e34\u6f33\u53bf", "parent": "86"}, {
    "id": "94",
    "county": "\u6210\u5b89\u53bf",
    "parent": "86"
}, {"id": "95", "county": "\u5927\u540d\u53bf", "parent": "86"}, {
    "id": "96",
    "county": "\u6d89\u53bf",
    "parent": "86"
}, {"id": "97", "county": "\u78c1\u53bf", "parent": "86"}, {
    "id": "98",
    "county": "\u80a5\u4e61\u53bf",
    "parent": "86"
}, {"id": "99", "county": "\u6c38\u5e74\u53bf", "parent": "86"}, {
    "id": "100",
    "county": "\u90b1\u53bf",
    "parent": "86"
}, {"id": "101", "county": "\u9e21\u6cfd\u53bf", "parent": "86"}, {
    "id": "102",
    "county": "\u5e7f\u5e73\u53bf",
    "parent": "86"
}, {"id": "103", "county": "\u9986\u9676\u53bf", "parent": "86"}, {
    "id": "104",
    "county": "\u9b4f\u53bf",
    "parent": "86"
}, {"id": "105", "county": "\u66f2\u5468\u53bf", "parent": "86"}, {
    "id": "106",
    "county": "\u6b66\u5b89\u5e02",
    "parent": "86"
}, {"id": "108", "county": "\u5e02\u8f96\u533a", "parent": "107"}, {
    "id": "109",
    "county": "\u6865\u4e1c\u533a",
    "parent": "107"
}, {"id": "110", "county": "\u6865\u897f\u533a", "parent": "107"}, {
    "id": "111",
    "county": "\u90a2\u53f0\u53bf",
    "parent": "107"
}, {"id": "112", "county": "\u4e34\u57ce\u53bf", "parent": "107"}, {
    "id": "113",
    "county": "\u5185\u4e18\u53bf",
    "parent": "107"
}, {"id": "114", "county": "\u67cf\u4e61\u53bf", "parent": "107"}, {
    "id": "115",
    "county": "\u9686\u5c27\u53bf",
    "parent": "107"
}, {"id": "116", "county": "\u4efb\u53bf", "parent": "107"}, {
    "id": "117",
    "county": "\u5357\u548c\u53bf",
    "parent": "107"
}, {"id": "118", "county": "\u5b81\u664b\u53bf", "parent": "107"}, {
    "id": "119",
    "county": "\u5de8\u9e7f\u53bf",
    "parent": "107"
}, {"id": "120", "county": "\u65b0\u6cb3\u53bf", "parent": "107"}, {
    "id": "121",
    "county": "\u5e7f\u5b97\u53bf",
    "parent": "107"
}, {"id": "122", "county": "\u5e73\u4e61\u53bf", "parent": "107"}, {
    "id": "123",
    "county": "\u5a01\u53bf",
    "parent": "107"
}, {"id": "124", "county": "\u6e05\u6cb3\u53bf", "parent": "107"}, {
    "id": "125",
    "county": "\u4e34\u897f\u53bf",
    "parent": "107"
}, {"id": "126", "county": "\u5357\u5bab\u5e02", "parent": "107"}, {
    "id": "127",
    "county": "\u6c99\u6cb3\u5e02",
    "parent": "107"
}, {"id": "129", "county": "\u5e02\u8f96\u533a", "parent": "128"}, {
    "id": "130",
    "county": "\u65b0\u5e02\u533a",
    "parent": "128"
}, {"id": "131", "county": "\u5317\u5e02\u533a", "parent": "128"}, {
    "id": "132",
    "county": "\u5357\u5e02\u533a",
    "parent": "128"
}, {"id": "133", "county": "\u6ee1\u57ce\u53bf", "parent": "128"}, {
    "id": "134",
    "county": "\u6e05\u82d1\u53bf",
    "parent": "128"
}, {"id": "135", "county": "\u6d9e\u6c34\u53bf", "parent": "128"}, {
    "id": "136",
    "county": "\u961c\u5e73\u53bf",
    "parent": "128"
}, {"id": "137", "county": "\u5f90\u6c34\u53bf", "parent": "128"}, {
    "id": "138",
    "county": "\u5b9a\u5174\u53bf",
    "parent": "128"
}, {"id": "139", "county": "\u5510\u53bf", "parent": "128"}, {
    "id": "140",
    "county": "\u9ad8\u9633\u53bf",
    "parent": "128"
}, {"id": "141", "county": "\u5bb9\u57ce\u53bf", "parent": "128"}, {
    "id": "142",
    "county": "\u6d9e\u6e90\u53bf",
    "parent": "128"
}, {"id": "143", "county": "\u671b\u90fd\u53bf", "parent": "128"}, {
    "id": "144",
    "county": "\u5b89\u65b0\u53bf",
    "parent": "128"
}, {"id": "145", "county": "\u6613\u53bf", "parent": "128"}, {
    "id": "146",
    "county": "\u66f2\u9633\u53bf",
    "parent": "128"
}, {"id": "147", "county": "\u8821\u53bf", "parent": "128"}, {
    "id": "148",
    "county": "\u987a\u5e73\u53bf",
    "parent": "128"
}, {"id": "149", "county": "\u535a\u91ce\u53bf", "parent": "128"}, {
    "id": "150",
    "county": "\u96c4\u53bf",
    "parent": "128"
}, {"id": "151", "county": "\u6dbf\u5dde\u5e02", "parent": "128"}, {
    "id": "152",
    "county": "\u5b9a\u5dde\u5e02",
    "parent": "128"
}, {"id": "153", "county": "\u5b89\u56fd\u5e02", "parent": "128"}, {
    "id": "154",
    "county": "\u9ad8\u7891\u5e97\u5e02",
    "parent": "128"
}, {"id": "156", "county": "\u5e02\u8f96\u533a", "parent": "155"}, {
    "id": "157",
    "county": "\u6865\u4e1c\u533a",
    "parent": "155"
}, {"id": "158", "county": "\u6865\u897f\u533a", "parent": "155"}, {
    "id": "159",
    "county": "\u5ba3\u5316\u533a",
    "parent": "155"
}, {"id": "160", "county": "\u4e0b\u82b1\u56ed\u533a", "parent": "155"}, {
    "id": "161",
    "county": "\u5ba3\u5316\u53bf",
    "parent": "155"
}, {"id": "162", "county": "\u5f20\u5317\u53bf", "parent": "155"}, {
    "id": "163",
    "county": "\u5eb7\u4fdd\u53bf",
    "parent": "155"
}, {"id": "164", "county": "\u6cbd\u6e90\u53bf", "parent": "155"}, {
    "id": "165",
    "county": "\u5c1a\u4e49\u53bf",
    "parent": "155"
}, {"id": "166", "county": "\u851a\u53bf", "parent": "155"}, {
    "id": "167",
    "county": "\u9633\u539f\u53bf",
    "parent": "155"
}, {"id": "168", "county": "\u6000\u5b89\u53bf", "parent": "155"}, {
    "id": "169",
    "county": "\u4e07\u5168\u53bf",
    "parent": "155"
}, {"id": "170", "county": "\u6000\u6765\u53bf", "parent": "155"}, {
    "id": "171",
    "county": "\u6dbf\u9e7f\u53bf",
    "parent": "155"
}, {"id": "172", "county": "\u8d64\u57ce\u53bf", "parent": "155"}, {
    "id": "173",
    "county": "\u5d07\u793c\u53bf",
    "parent": "155"
}, {"id": "175", "county": "\u5e02\u8f96\u533a", "parent": "174"}, {
    "id": "176",
    "county": "\u53cc\u6865\u533a",
    "parent": "174"
}, {"id": "177", "county": "\u53cc\u6ee6\u533a", "parent": "174"}, {
    "id": "178",
    "county": "\u9e70\u624b\u8425\u5b50\u77ff\u533a",
    "parent": "174"
}, {"id": "179", "county": "\u627f\u5fb7\u53bf", "parent": "174"}, {
    "id": "180",
    "county": "\u5174\u9686\u53bf",
    "parent": "174"
}, {"id": "181", "county": "\u5e73\u6cc9\u53bf", "parent": "174"}, {
    "id": "182",
    "county": "\u6ee6\u5e73\u53bf",
    "parent": "174"
}, {"id": "183", "county": "\u9686\u5316\u53bf", "parent": "174"}, {
    "id": "184",
    "county": "\u4e30\u5b81\u6ee1\u65cf\u81ea\u6cbb\u53bf",
    "parent": "174"
}, {"id": "185", "county": "\u5bbd\u57ce\u6ee1\u65cf\u81ea\u6cbb\u53bf", "parent": "174"}, {
    "id": "186",
    "county": "\u56f4\u573a\u6ee1\u65cf\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
    "parent": "174"
}, {"id": "188", "county": "\u5e02\u8f96\u533a", "parent": "187"}, {
    "id": "189",
    "county": "\u65b0\u534e\u533a",
    "parent": "187"
}, {"id": "190", "county": "\u8fd0\u6cb3\u533a", "parent": "187"}, {
    "id": "191",
    "county": "\u6ca7\u53bf",
    "parent": "187"
}, {"id": "192", "county": "\u9752\u53bf", "parent": "187"}, {
    "id": "193",
    "county": "\u4e1c\u5149\u53bf",
    "parent": "187"
}, {"id": "194", "county": "\u6d77\u5174\u53bf", "parent": "187"}, {
    "id": "195",
    "county": "\u76d0\u5c71\u53bf",
    "parent": "187"
}, {"id": "196", "county": "\u8083\u5b81\u53bf", "parent": "187"}, {
    "id": "197",
    "county": "\u5357\u76ae\u53bf",
    "parent": "187"
}, {"id": "198", "county": "\u5434\u6865\u53bf", "parent": "187"}, {
    "id": "199",
    "county": "\u732e\u53bf",
    "parent": "187"
}, {"id": "200", "county": "\u5b5f\u6751\u56de\u65cf\u81ea\u6cbb\u53bf", "parent": "187"}, {
    "id": "201",
    "county": "\u6cca\u5934\u5e02",
    "parent": "187"
}, {"id": "202", "county": "\u4efb\u4e18\u5e02", "parent": "187"}, {
    "id": "203",
    "county": "\u9ec4\u9a85\u5e02",
    "parent": "187"
}, {"id": "204", "county": "\u6cb3\u95f4\u5e02", "parent": "187"}, {
    "id": "206",
    "county": "\u5e02\u8f96\u533a",
    "parent": "205"
}, {"id": "207", "county": "\u5b89\u6b21\u533a", "parent": "205"}, {
    "id": "208",
    "county": "\u5e7f\u9633\u533a",
    "parent": "205"
}, {"id": "209", "county": "\u56fa\u5b89\u53bf", "parent": "205"}, {
    "id": "210",
    "county": "\u6c38\u6e05\u53bf",
    "parent": "205"
}, {"id": "211", "county": "\u9999\u6cb3\u53bf", "parent": "205"}, {
    "id": "212",
    "county": "\u5927\u57ce\u53bf",
    "parent": "205"
}, {"id": "213", "county": "\u6587\u5b89\u53bf", "parent": "205"}, {
    "id": "214",
    "county": "\u5927\u5382\u56de\u65cf\u81ea\u6cbb\u53bf",
    "parent": "205"
}, {"id": "215", "county": "\u9738\u5dde\u5e02", "parent": "205"}, {
    "id": "216",
    "county": "\u4e09\u6cb3\u5e02",
    "parent": "205"
}, {"id": "218", "county": "\u5e02\u8f96\u533a", "parent": "217"}, {
    "id": "219",
    "county": "\u6843\u57ce\u533a",
    "parent": "217"
}, {"id": "220", "county": "\u67a3\u5f3a\u53bf", "parent": "217"}, {
    "id": "221",
    "county": "\u6b66\u9091\u53bf",
    "parent": "217"
}, {"id": "222", "county": "\u6b66\u5f3a\u53bf", "parent": "217"}, {
    "id": "223",
    "county": "\u9976\u9633\u53bf",
    "parent": "217"
}, {"id": "224", "county": "\u5b89\u5e73\u53bf", "parent": "217"}, {
    "id": "225",
    "county": "\u6545\u57ce\u53bf",
    "parent": "217"
}, {"id": "226", "county": "\u666f\u53bf", "parent": "217"}, {
    "id": "227",
    "county": "\u961c\u57ce\u53bf",
    "parent": "217"
}, {"id": "228", "county": "\u5180\u5dde\u5e02", "parent": "217"}, {
    "id": "229",
    "county": "\u6df1\u5dde\u5e02",
    "parent": "217"
}, {"id": "232", "county": "\u5e02\u8f96\u533a", "parent": "231"}, {
    "id": "233",
    "county": "\u5c0f\u5e97\u533a",
    "parent": "231"
}, {"id": "234", "county": "\u8fce\u6cfd\u533a", "parent": "231"}, {
    "id": "235",
    "county": "\u674f\u82b1\u5cad\u533a",
    "parent": "231"
}, {"id": "236", "county": "\u5c16\u8349\u576a\u533a", "parent": "231"}, {
    "id": "237",
    "county": "\u4e07\u67cf\u6797\u533a",
    "parent": "231"
}, {"id": "238", "county": "\u664b\u6e90\u533a", "parent": "231"}, {
    "id": "239",
    "county": "\u6e05\u5f90\u53bf",
    "parent": "231"
}, {"id": "240", "county": "\u9633\u66f2\u53bf", "parent": "231"}, {
    "id": "241",
    "county": "\u5a04\u70e6\u53bf",
    "parent": "231"
}, {"id": "242", "county": "\u53e4\u4ea4\u5e02", "parent": "231"}, {
    "id": "244",
    "county": "\u5e02\u8f96\u533a",
    "parent": "243"
}, {"id": "245", "county": "\u57ce\u533a", "parent": "243"}, {
    "id": "246",
    "county": "\u77ff\u533a",
    "parent": "243"
}, {"id": "247", "county": "\u5357\u90ca\u533a", "parent": "243"}, {
    "id": "248",
    "county": "\u65b0\u8363\u533a",
    "parent": "243"
}, {"id": "249", "county": "\u9633\u9ad8\u53bf", "parent": "243"}, {
    "id": "250",
    "county": "\u5929\u9547\u53bf",
    "parent": "243"
}, {"id": "251", "county": "\u5e7f\u7075\u53bf", "parent": "243"}, {
    "id": "252",
    "county": "\u7075\u4e18\u53bf",
    "parent": "243"
}, {"id": "253", "county": "\u6d51\u6e90\u53bf", "parent": "243"}, {
    "id": "254",
    "county": "\u5de6\u4e91\u53bf",
    "parent": "243"
}, {"id": "255", "county": "\u5927\u540c\u53bf", "parent": "243"}, {
    "id": "257",
    "county": "\u5e02\u8f96\u533a",
    "parent": "256"
}, {"id": "258", "county": "\u57ce\u533a", "parent": "256"}, {
    "id": "259",
    "county": "\u77ff\u533a",
    "parent": "256"
}, {"id": "260", "county": "\u90ca\u533a", "parent": "256"}, {
    "id": "261",
    "county": "\u5e73\u5b9a\u53bf",
    "parent": "256"
}, {"id": "262", "county": "\u76c2\u53bf", "parent": "256"}, {
    "id": "264",
    "county": "\u5e02\u8f96\u533a",
    "parent": "263"
}, {"id": "265", "county": "\u57ce\u533a", "parent": "263"}, {
    "id": "266",
    "county": "\u90ca\u533a",
    "parent": "263"
}, {"id": "267", "county": "\u957f\u6cbb\u53bf", "parent": "263"}, {
    "id": "268",
    "county": "\u8944\u57a3\u53bf",
    "parent": "263"
}, {"id": "269", "county": "\u5c6f\u7559\u53bf", "parent": "263"}, {
    "id": "270",
    "county": "\u5e73\u987a\u53bf",
    "parent": "263"
}, {"id": "271", "county": "\u9ece\u57ce\u53bf", "parent": "263"}, {
    "id": "272",
    "county": "\u58f6\u5173\u53bf",
    "parent": "263"
}, {"id": "273", "county": "\u957f\u5b50\u53bf", "parent": "263"}, {
    "id": "274",
    "county": "\u6b66\u4e61\u53bf",
    "parent": "263"
}, {"id": "275", "county": "\u6c81\u53bf", "parent": "263"}, {
    "id": "276",
    "county": "\u6c81\u6e90\u53bf",
    "parent": "263"
}, {"id": "277", "county": "\u6f5e\u57ce\u5e02", "parent": "263"}, {
    "id": "279",
    "county": "\u5e02\u8f96\u533a",
    "parent": "278"
}, {"id": "280", "county": "\u57ce\u533a", "parent": "278"}, {
    "id": "281",
    "county": "\u6c81\u6c34\u53bf",
    "parent": "278"
}, {"id": "282", "county": "\u9633\u57ce\u53bf", "parent": "278"}, {
    "id": "283",
    "county": "\u9675\u5ddd\u53bf",
    "parent": "278"
}, {"id": "284", "county": "\u6cfd\u5dde\u53bf", "parent": "278"}, {
    "id": "285",
    "county": "\u9ad8\u5e73\u5e02",
    "parent": "278"
}, {"id": "287", "county": "\u5e02\u8f96\u533a", "parent": "286"}, {
    "id": "288",
    "county": "\u6714\u57ce\u533a",
    "parent": "286"
}, {"id": "289", "county": "\u5e73\u9c81\u533a", "parent": "286"}, {
    "id": "290",
    "county": "\u5c71\u9634\u53bf",
    "parent": "286"
}, {"id": "291", "county": "\u5e94\u53bf", "parent": "286"}, {
    "id": "292",
    "county": "\u53f3\u7389\u53bf",
    "parent": "286"
}, {"id": "293", "county": "\u6000\u4ec1\u53bf", "parent": "286"}, {
    "id": "295",
    "county": "\u5e02\u8f96\u533a",
    "parent": "294"
}, {"id": "296", "county": "\u6986\u6b21\u533a", "parent": "294"}, {
    "id": "297",
    "county": "\u6986\u793e\u53bf",
    "parent": "294"
}, {"id": "298", "county": "\u5de6\u6743\u53bf", "parent": "294"}, {
    "id": "299",
    "county": "\u548c\u987a\u53bf",
    "parent": "294"
}, {"id": "300", "county": "\u6614\u9633\u53bf", "parent": "294"}, {
    "id": "301",
    "county": "\u5bff\u9633\u53bf",
    "parent": "294"
}, {"id": "302", "county": "\u592a\u8c37\u53bf", "parent": "294"}, {
    "id": "303",
    "county": "\u7941\u53bf",
    "parent": "294"
}, {"id": "304", "county": "\u5e73\u9065\u53bf", "parent": "294"}, {
    "id": "305",
    "county": "\u7075\u77f3\u53bf",
    "parent": "294"
}, {"id": "306", "county": "\u4ecb\u4f11\u5e02", "parent": "294"}, {
    "id": "308",
    "county": "\u5e02\u8f96\u533a",
    "parent": "307"
}, {"id": "309", "county": "\u76d0\u6e56\u533a", "parent": "307"}, {
    "id": "310",
    "county": "\u4e34\u7317\u53bf",
    "parent": "307"
}, {"id": "311", "county": "\u4e07\u8363\u53bf", "parent": "307"}, {
    "id": "312",
    "county": "\u95fb\u559c\u53bf",
    "parent": "307"
}, {"id": "313", "county": "\u7a37\u5c71\u53bf", "parent": "307"}, {
    "id": "314",
    "county": "\u65b0\u7edb\u53bf",
    "parent": "307"
}, {"id": "315", "county": "\u7edb\u53bf", "parent": "307"}, {
    "id": "316",
    "county": "\u57a3\u66f2\u53bf",
    "parent": "307"
}, {"id": "317", "county": "\u590f\u53bf", "parent": "307"}, {
    "id": "318",
    "county": "\u5e73\u9646\u53bf",
    "parent": "307"
}, {"id": "319", "county": "\u82ae\u57ce\u53bf", "parent": "307"}, {
    "id": "320",
    "county": "\u6c38\u6d4e\u5e02",
    "parent": "307"
}, {"id": "321", "county": "\u6cb3\u6d25\u5e02", "parent": "307"}, {
    "id": "323",
    "county": "\u5e02\u8f96\u533a",
    "parent": "322"
}, {"id": "324", "county": "\u5ffb\u5e9c\u533a", "parent": "322"}, {
    "id": "325",
    "county": "\u5b9a\u8944\u53bf",
    "parent": "322"
}, {"id": "326", "county": "\u4e94\u53f0\u53bf", "parent": "322"}, {
    "id": "327",
    "county": "\u4ee3\u53bf",
    "parent": "322"
}, {"id": "328", "county": "\u7e41\u5cd9\u53bf", "parent": "322"}, {
    "id": "329",
    "county": "\u5b81\u6b66\u53bf",
    "parent": "322"
}, {"id": "330", "county": "\u9759\u4e50\u53bf", "parent": "322"}, {
    "id": "331",
    "county": "\u795e\u6c60\u53bf",
    "parent": "322"
}, {"id": "332", "county": "\u4e94\u5be8\u53bf", "parent": "322"}, {
    "id": "333",
    "county": "\u5ca2\u5c9a\u53bf",
    "parent": "322"
}, {"id": "334", "county": "\u6cb3\u66f2\u53bf", "parent": "322"}, {
    "id": "335",
    "county": "\u4fdd\u5fb7\u53bf",
    "parent": "322"
}, {"id": "336", "county": "\u504f\u5173\u53bf", "parent": "322"}, {
    "id": "337",
    "county": "\u539f\u5e73\u5e02",
    "parent": "322"
}, {"id": "339", "county": "\u5e02\u8f96\u533a", "parent": "338"}, {
    "id": "340",
    "county": "\u5c27\u90fd\u533a",
    "parent": "338"
}, {"id": "341", "county": "\u66f2\u6c83\u53bf", "parent": "338"}, {
    "id": "342",
    "county": "\u7ffc\u57ce\u53bf",
    "parent": "338"
}, {"id": "343", "county": "\u8944\u6c7e\u53bf", "parent": "338"}, {
    "id": "344",
    "county": "\u6d2a\u6d1e\u53bf",
    "parent": "338"
}, {"id": "345", "county": "\u53e4\u53bf", "parent": "338"}, {
    "id": "346",
    "county": "\u5b89\u6cfd\u53bf",
    "parent": "338"
}, {"id": "347", "county": "\u6d6e\u5c71\u53bf", "parent": "338"}, {
    "id": "348",
    "county": "\u5409\u53bf",
    "parent": "338"
}, {"id": "349", "county": "\u4e61\u5b81\u53bf", "parent": "338"}, {
    "id": "350",
    "county": "\u5927\u5b81\u53bf",
    "parent": "338"
}, {"id": "351", "county": "\u96b0\u53bf", "parent": "338"}, {
    "id": "352",
    "county": "\u6c38\u548c\u53bf",
    "parent": "338"
}, {"id": "353", "county": "\u84b2\u53bf", "parent": "338"}, {
    "id": "354",
    "county": "\u6c7e\u897f\u53bf",
    "parent": "338"
}, {"id": "355", "county": "\u4faf\u9a6c\u5e02", "parent": "338"}, {
    "id": "356",
    "county": "\u970d\u5dde\u5e02",
    "parent": "338"
}, {"id": "358", "county": "\u5e02\u8f96\u533a", "parent": "357"}, {
    "id": "359",
    "county": "\u79bb\u77f3\u533a",
    "parent": "357"
}, {"id": "360", "county": "\u6587\u6c34\u53bf", "parent": "357"}, {
    "id": "361",
    "county": "\u4ea4\u57ce\u53bf",
    "parent": "357"
}, {"id": "362", "county": "\u5174\u53bf", "parent": "357"}, {
    "id": "363",
    "county": "\u4e34\u53bf",
    "parent": "357"
}, {"id": "364", "county": "\u67f3\u6797\u53bf", "parent": "357"}, {
    "id": "365",
    "county": "\u77f3\u697c\u53bf",
    "parent": "357"
}, {"id": "366", "county": "\u5c9a\u53bf", "parent": "357"}, {
    "id": "367",
    "county": "\u65b9\u5c71\u53bf",
    "parent": "357"
}, {"id": "368", "county": "\u4e2d\u9633\u53bf", "parent": "357"}, {
    "id": "369",
    "county": "\u4ea4\u53e3\u53bf",
    "parent": "357"
}, {"id": "370", "county": "\u5b5d\u4e49\u5e02", "parent": "357"}, {
    "id": "371",
    "county": "\u6c7e\u9633\u5e02",
    "parent": "357"
}, {"id": "374", "county": "\u5e02\u8f96\u533a", "parent": "373"}, {
    "id": "375",
    "county": "\u65b0\u57ce\u533a",
    "parent": "373"
}, {"id": "376", "county": "\u56de\u6c11\u533a", "parent": "373"}, {
    "id": "377",
    "county": "\u7389\u6cc9\u533a",
    "parent": "373"
}, {"id": "378", "county": "\u8d5b\u7f55\u533a", "parent": "373"}, {
    "id": "379",
    "county": "\u571f\u9ed8\u7279\u5de6\u65d7",
    "parent": "373"
}, {"id": "380", "county": "\u6258\u514b\u6258\u53bf", "parent": "373"}, {
    "id": "381",
    "county": "\u548c\u6797\u683c\u5c14\u53bf",
    "parent": "373"
}, {"id": "382", "county": "\u6e05\u6c34\u6cb3\u53bf", "parent": "373"}, {
    "id": "383",
    "county": "\u6b66\u5ddd\u53bf",
    "parent": "373"
}, {"id": "385", "county": "\u5e02\u8f96\u533a", "parent": "384"}, {
    "id": "386",
    "county": "\u4e1c\u6cb3\u533a",
    "parent": "384"
}, {"id": "387", "county": "\u6606\u90fd\u4ed1\u533a", "parent": "384"}, {
    "id": "388",
    "county": "\u9752\u5c71\u533a",
    "parent": "384"
}, {"id": "389", "county": "\u77f3\u62d0\u533a", "parent": "384"}, {
    "id": "390",
    "county": "\u767d\u4e91\u9102\u535a\u77ff\u533a",
    "parent": "384"
}, {"id": "391", "county": "\u4e5d\u539f\u533a", "parent": "384"}, {
    "id": "392",
    "county": "\u571f\u9ed8\u7279\u53f3\u65d7",
    "parent": "384"
}, {"id": "393", "county": "\u56fa\u9633\u53bf", "parent": "384"}, {
    "id": "394",
    "county": "\u8fbe\u5c14\u7f55\u8302\u660e\u5b89\u8054\u5408\u65d7",
    "parent": "384"
}, {"id": "396", "county": "\u5e02\u8f96\u533a", "parent": "395"}, {
    "id": "397",
    "county": "\u6d77\u52c3\u6e7e\u533a",
    "parent": "395"
}, {"id": "398", "county": "\u6d77\u5357\u533a", "parent": "395"}, {
    "id": "399",
    "county": "\u4e4c\u8fbe\u533a",
    "parent": "395"
}, {"id": "401", "county": "\u5e02\u8f96\u533a", "parent": "400"}, {
    "id": "402",
    "county": "\u7ea2\u5c71\u533a",
    "parent": "400"
}, {"id": "403", "county": "\u5143\u5b9d\u5c71\u533a", "parent": "400"}, {
    "id": "404",
    "county": "\u677e\u5c71\u533a",
    "parent": "400"
}, {"id": "405", "county": "\u963f\u9c81\u79d1\u5c14\u6c81\u65d7", "parent": "400"}, {
    "id": "406",
    "county": "\u5df4\u6797\u5de6\u65d7",
    "parent": "400"
}, {"id": "407", "county": "\u5df4\u6797\u53f3\u65d7", "parent": "400"}, {
    "id": "408",
    "county": "\u6797\u897f\u53bf",
    "parent": "400"
}, {"id": "409", "county": "\u514b\u4ec0\u514b\u817e\u65d7", "parent": "400"}, {
    "id": "410",
    "county": "\u7fc1\u725b\u7279\u65d7",
    "parent": "400"
}, {"id": "411", "county": "\u5580\u5587\u6c81\u65d7", "parent": "400"}, {
    "id": "412",
    "county": "\u5b81\u57ce\u53bf",
    "parent": "400"
}, {"id": "413", "county": "\u6556\u6c49\u65d7", "parent": "400"}, {
    "id": "415",
    "county": "\u5e02\u8f96\u533a",
    "parent": "414"
}, {"id": "416", "county": "\u79d1\u5c14\u6c81\u533a", "parent": "414"}, {
    "id": "417",
    "county": "\u79d1\u5c14\u6c81\u5de6\u7ffc\u4e2d\u65d7",
    "parent": "414"
}, {"id": "418", "county": "\u79d1\u5c14\u6c81\u5de6\u7ffc\u540e\u65d7", "parent": "414"}, {
    "id": "419",
    "county": "\u5f00\u9c81\u53bf",
    "parent": "414"
}, {"id": "420", "county": "\u5e93\u4f26\u65d7", "parent": "414"}, {
    "id": "421",
    "county": "\u5948\u66fc\u65d7",
    "parent": "414"
}, {"id": "422", "county": "\u624e\u9c81\u7279\u65d7", "parent": "414"}, {
    "id": "423",
    "county": "\u970d\u6797\u90ed\u52d2\u5e02",
    "parent": "414"
}, {"id": "425", "county": "\u5e02\u8f96\u533a", "parent": "424"}, {
    "id": "426",
    "county": "\u4e1c\u80dc\u533a",
    "parent": "424"
}, {"id": "427", "county": "\u8fbe\u62c9\u7279\u65d7", "parent": "424"}, {
    "id": "428",
    "county": "\u51c6\u683c\u5c14\u65d7",
    "parent": "424"
}, {"id": "429", "county": "\u9102\u6258\u514b\u524d\u65d7", "parent": "424"}, {
    "id": "430",
    "county": "\u9102\u6258\u514b\u65d7",
    "parent": "424"
}, {"id": "431", "county": "\u676d\u9526\u65d7", "parent": "424"}, {
    "id": "432",
    "county": "\u4e4c\u5ba1\u65d7",
    "parent": "424"
}, {"id": "433", "county": "\u4f0a\u91d1\u970d\u6d1b\u65d7", "parent": "424"}, {
    "id": "435",
    "county": "\u5e02\u8f96\u533a",
    "parent": "434"
}, {"id": "436", "county": "\u6d77\u62c9\u5c14\u533a", "parent": "434"}, {
    "id": "437",
    "county": "\u624e\u8d49\u8bfa\u5c14\u533a",
    "parent": "434"
}, {"id": "438", "county": "\u963f\u8363\u65d7", "parent": "434"}, {
    "id": "439",
    "county": "\u83ab\u529b\u8fbe\u74e6\u8fbe\u65a1\u5c14\u65cf\u81ea\u6cbb\u65d7",
    "parent": "434"
}, {"id": "440", "county": "\u9102\u4f26\u6625\u81ea\u6cbb\u65d7", "parent": "434"}, {
    "id": "441",
    "county": "\u9102\u6e29\u514b\u65cf\u81ea\u6cbb\u65d7",
    "parent": "434"
}, {"id": "442", "county": "\u9648\u5df4\u5c14\u864e\u65d7", "parent": "434"}, {
    "id": "443",
    "county": "\u65b0\u5df4\u5c14\u864e\u5de6\u65d7",
    "parent": "434"
}, {"id": "444", "county": "\u65b0\u5df4\u5c14\u864e\u53f3\u65d7", "parent": "434"}, {
    "id": "445",
    "county": "\u6ee1\u6d32\u91cc\u5e02",
    "parent": "434"
}, {"id": "446", "county": "\u7259\u514b\u77f3\u5e02", "parent": "434"}, {
    "id": "447",
    "county": "\u624e\u5170\u5c6f\u5e02",
    "parent": "434"
}, {"id": "448", "county": "\u989d\u5c14\u53e4\u7eb3\u5e02", "parent": "434"}, {
    "id": "449",
    "county": "\u6839\u6cb3\u5e02",
    "parent": "434"
}, {"id": "451", "county": "\u5e02\u8f96\u533a", "parent": "450"}, {
    "id": "452",
    "county": "\u4e34\u6cb3\u533a",
    "parent": "450"
}, {"id": "453", "county": "\u4e94\u539f\u53bf", "parent": "450"}, {
    "id": "454",
    "county": "\u78f4\u53e3\u53bf",
    "parent": "450"
}, {"id": "455", "county": "\u4e4c\u62c9\u7279\u524d\u65d7", "parent": "450"}, {
    "id": "456",
    "county": "\u4e4c\u62c9\u7279\u4e2d\u65d7",
    "parent": "450"
}, {"id": "457", "county": "\u4e4c\u62c9\u7279\u540e\u65d7", "parent": "450"}, {
    "id": "458",
    "county": "\u676d\u9526\u540e\u65d7",
    "parent": "450"
}, {"id": "460", "county": "\u5e02\u8f96\u533a", "parent": "459"}, {
    "id": "461",
    "county": "\u96c6\u5b81\u533a",
    "parent": "459"
}, {"id": "462", "county": "\u5353\u8d44\u53bf", "parent": "459"}, {
    "id": "463",
    "county": "\u5316\u5fb7\u53bf",
    "parent": "459"
}, {"id": "464", "county": "\u5546\u90fd\u53bf", "parent": "459"}, {
    "id": "465",
    "county": "\u5174\u548c\u53bf",
    "parent": "459"
}, {"id": "466", "county": "\u51c9\u57ce\u53bf", "parent": "459"}, {
    "id": "467",
    "county": "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u524d\u65d7",
    "parent": "459"
}, {"id": "468", "county": "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u4e2d\u65d7", "parent": "459"}, {
    "id": "469",
    "county": "\u5bdf\u54c8\u5c14\u53f3\u7ffc\u540e\u65d7",
    "parent": "459"
}, {"id": "470", "county": "\u56db\u5b50\u738b\u65d7", "parent": "459"}, {
    "id": "471",
    "county": "\u4e30\u9547\u5e02",
    "parent": "459"
}, {"id": "473", "county": "\u4e4c\u5170\u6d69\u7279\u5e02", "parent": "472"}, {
    "id": "474",
    "county": "\u963f\u5c14\u5c71\u5e02",
    "parent": "472"
}, {"id": "475", "county": "\u79d1\u5c14\u6c81\u53f3\u7ffc\u524d\u65d7", "parent": "472"}, {
    "id": "476",
    "county": "\u79d1\u5c14\u6c81\u53f3\u7ffc\u4e2d\u65d7",
    "parent": "472"
}, {"id": "477", "county": "\u624e\u8d49\u7279\u65d7", "parent": "472"}, {
    "id": "478",
    "county": "\u7a81\u6cc9\u53bf",
    "parent": "472"
}, {"id": "480", "county": "\u4e8c\u8fde\u6d69\u7279\u5e02", "parent": "479"}, {
    "id": "481",
    "county": "\u9521\u6797\u6d69\u7279\u5e02",
    "parent": "479"
}, {"id": "482", "county": "\u963f\u5df4\u560e\u65d7", "parent": "479"}, {
    "id": "483",
    "county": "\u82cf\u5c3c\u7279\u5de6\u65d7",
    "parent": "479"
}, {"id": "484", "county": "\u82cf\u5c3c\u7279\u53f3\u65d7", "parent": "479"}, {
    "id": "485",
    "county": "\u4e1c\u4e4c\u73e0\u7a46\u6c81\u65d7",
    "parent": "479"
}, {"id": "486", "county": "\u897f\u4e4c\u73e0\u7a46\u6c81\u65d7", "parent": "479"}, {
    "id": "487",
    "county": "\u592a\u4ec6\u5bfa\u65d7",
    "parent": "479"
}, {"id": "488", "county": "\u9576\u9ec4\u65d7", "parent": "479"}, {
    "id": "489",
    "county": "\u6b63\u9576\u767d\u65d7",
    "parent": "479"
}, {"id": "490", "county": "\u6b63\u84dd\u65d7", "parent": "479"}, {
    "id": "491",
    "county": "\u591a\u4f26\u53bf",
    "parent": "479"
}, {"id": "493", "county": "\u963f\u62c9\u5584\u5de6\u65d7", "parent": "492"}, {
    "id": "494",
    "county": "\u963f\u62c9\u5584\u53f3\u65d7",
    "parent": "492"
}, {"id": "495", "county": "\u989d\u6d4e\u7eb3\u65d7", "parent": "492"}, {
    "id": "498",
    "county": "\u5e02\u8f96\u533a",
    "parent": "497"
}, {"id": "499", "county": "\u548c\u5e73\u533a", "parent": "497"}, {
    "id": "500",
    "county": "\u6c88\u6cb3\u533a",
    "parent": "497"
}, {"id": "501", "county": "\u5927\u4e1c\u533a", "parent": "497"}, {
    "id": "502",
    "county": "\u7687\u59d1\u533a",
    "parent": "497"
}, {"id": "503", "county": "\u94c1\u897f\u533a", "parent": "497"}, {
    "id": "504",
    "county": "\u82cf\u5bb6\u5c6f\u533a",
    "parent": "497"
}, {"id": "505", "county": "\u6d51\u5357\u533a", "parent": "497"}, {
    "id": "506",
    "county": "\u6c88\u5317\u65b0\u533a",
    "parent": "497"
}, {"id": "507", "county": "\u4e8e\u6d2a\u533a", "parent": "497"}, {
    "id": "508",
    "county": "\u8fbd\u4e2d\u53bf",
    "parent": "497"
}, {"id": "509", "county": "\u5eb7\u5e73\u53bf", "parent": "497"}, {
    "id": "510",
    "county": "\u6cd5\u5e93\u53bf",
    "parent": "497"
}, {"id": "511", "county": "\u65b0\u6c11\u5e02", "parent": "497"}, {
    "id": "513",
    "county": "\u5e02\u8f96\u533a",
    "parent": "512"
}, {"id": "514", "county": "\u4e2d\u5c71\u533a", "parent": "512"}, {
    "id": "515",
    "county": "\u897f\u5c97\u533a",
    "parent": "512"
}, {"id": "516", "county": "\u6c99\u6cb3\u53e3\u533a", "parent": "512"}, {
    "id": "517",
    "county": "\u7518\u4e95\u5b50\u533a",
    "parent": "512"
}, {"id": "518", "county": "\u65c5\u987a\u53e3\u533a", "parent": "512"}, {
    "id": "519",
    "county": "\u91d1\u5dde\u533a",
    "parent": "512"
}, {"id": "520", "county": "\u957f\u6d77\u53bf", "parent": "512"}, {
    "id": "521",
    "county": "\u74e6\u623f\u5e97\u5e02",
    "parent": "512"
}, {"id": "522", "county": "\u666e\u5170\u5e97\u5e02", "parent": "512"}, {
    "id": "523",
    "county": "\u5e84\u6cb3\u5e02",
    "parent": "512"
}, {"id": "525", "county": "\u5e02\u8f96\u533a", "parent": "524"}, {
    "id": "526",
    "county": "\u94c1\u4e1c\u533a",
    "parent": "524"
}, {"id": "527", "county": "\u94c1\u897f\u533a", "parent": "524"}, {
    "id": "528",
    "county": "\u7acb\u5c71\u533a",
    "parent": "524"
}, {"id": "529", "county": "\u5343\u5c71\u533a", "parent": "524"}, {
    "id": "530",
    "county": "\u53f0\u5b89\u53bf",
    "parent": "524"
}, {"id": "531", "county": "\u5cab\u5ca9\u6ee1\u65cf\u81ea\u6cbb\u53bf", "parent": "524"}, {
    "id": "532",
    "county": "\u6d77\u57ce\u5e02",
    "parent": "524"
}, {"id": "534", "county": "\u5e02\u8f96\u533a", "parent": "533"}, {
    "id": "535",
    "county": "\u65b0\u629a\u533a",
    "parent": "533"
}, {"id": "536", "county": "\u4e1c\u6d32\u533a", "parent": "533"}, {
    "id": "537",
    "county": "\u671b\u82b1\u533a",
    "parent": "533"
}, {"id": "538", "county": "\u987a\u57ce\u533a", "parent": "533"}, {
    "id": "539",
    "county": "\u629a\u987a\u53bf",
    "parent": "533"
}, {"id": "540", "county": "\u65b0\u5bbe\u6ee1\u65cf\u81ea\u6cbb\u53bf", "parent": "533"}, {
    "id": "541",
    "county": "\u6e05\u539f\u6ee1\u65cf\u81ea\u6cbb\u53bf",
    "parent": "533"
}, {"id": "543", "county": "\u5e02\u8f96\u533a", "parent": "542"}, {
    "id": "544",
    "county": "\u5e73\u5c71\u533a",
    "parent": "542"
}, {"id": "545", "county": "\u6eaa\u6e56\u533a", "parent": "542"}, {
    "id": "546",
    "county": "\u660e\u5c71\u533a",
    "parent": "542"
}, {"id": "547", "county": "\u5357\u82ac\u533a", "parent": "542"}, {
    "id": "548",
    "county": "\u672c\u6eaa\u6ee1\u65cf\u81ea\u6cbb\u53bf",
    "parent": "542"
}, {"id": "549", "county": "\u6853\u4ec1\u6ee1\u65cf\u81ea\u6cbb\u53bf", "parent": "542"}, {
    "id": "551",
    "county": "\u5e02\u8f96\u533a",
    "parent": "550"
}, {"id": "552", "county": "\u5143\u5b9d\u533a", "parent": "550"}, {
    "id": "553",
    "county": "\u632f\u5174\u533a",
    "parent": "550"
}, {"id": "554", "county": "\u632f\u5b89\u533a", "parent": "550"}, {
    "id": "555",
    "county": "\u5bbd\u7538\u6ee1\u65cf\u81ea\u6cbb\u53bf",
    "parent": "550"
}, {"id": "556", "county": "\u4e1c\u6e2f\u5e02", "parent": "550"}, {
    "id": "557",
    "county": "\u51e4\u57ce\u5e02",
    "parent": "550"
}, {"id": "559", "county": "\u5e02\u8f96\u533a", "parent": "558"}, {
    "id": "560",
    "county": "\u53e4\u5854\u533a",
    "parent": "558"
}, {"id": "561", "county": "\u51cc\u6cb3\u533a", "parent": "558"}, {
    "id": "562",
    "county": "\u592a\u548c\u533a",
    "parent": "558"
}, {"id": "563", "county": "\u9ed1\u5c71\u53bf", "parent": "558"}, {
    "id": "564",
    "county": "\u4e49\u53bf",
    "parent": "558"
}, {"id": "565", "county": "\u51cc\u6d77\u5e02", "parent": "558"}, {
    "id": "566",
    "county": "\u5317\u9547\u5e02",
    "parent": "558"
}, {"id": "568", "county": "\u5e02\u8f96\u533a", "parent": "567"}, {
    "id": "569",
    "county": "\u7ad9\u524d\u533a",
    "parent": "567"
}, {"id": "570", "county": "\u897f\u5e02\u533a", "parent": "567"}, {
    "id": "571",
    "county": "\u9c85\u9c7c\u5708\u533a",
    "parent": "567"
}, {"id": "572", "county": "\u8001\u8fb9\u533a", "parent": "567"}, {
    "id": "573",
    "county": "\u76d6\u5dde\u5e02",
    "parent": "567"
}, {"id": "574", "county": "\u5927\u77f3\u6865\u5e02", "parent": "567"}, {
    "id": "576",
    "county": "\u5e02\u8f96\u533a",
    "parent": "575"
}, {"id": "577", "county": "\u6d77\u5dde\u533a", "parent": "575"}, {
    "id": "578",
    "county": "\u65b0\u90b1\u533a",
    "parent": "575"
}, {"id": "579", "county": "\u592a\u5e73\u533a", "parent": "575"}, {
    "id": "580",
    "county": "\u6e05\u6cb3\u95e8\u533a",
    "parent": "575"
}, {"id": "581", "county": "\u7ec6\u6cb3\u533a", "parent": "575"}, {
    "id": "582",
    "county": "\u961c\u65b0\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
    "parent": "575"
}, {"id": "583", "county": "\u5f70\u6b66\u53bf", "parent": "575"}, {
    "id": "585",
    "county": "\u5e02\u8f96\u533a",
    "parent": "584"
}, {"id": "586", "county": "\u767d\u5854\u533a", "parent": "584"}, {
    "id": "587",
    "county": "\u6587\u5723\u533a",
    "parent": "584"
}, {"id": "588", "county": "\u5b8f\u4f1f\u533a", "parent": "584"}, {
    "id": "589",
    "county": "\u5f13\u957f\u5cad\u533a",
    "parent": "584"
}, {"id": "590", "county": "\u592a\u5b50\u6cb3\u533a", "parent": "584"}, {
    "id": "591",
    "county": "\u8fbd\u9633\u53bf",
    "parent": "584"
}, {"id": "592", "county": "\u706f\u5854\u5e02", "parent": "584"}, {
    "id": "594",
    "county": "\u5e02\u8f96\u533a",
    "parent": "593"
}, {"id": "595", "county": "\u53cc\u53f0\u5b50\u533a", "parent": "593"}, {
    "id": "596",
    "county": "\u5174\u9686\u53f0\u533a",
    "parent": "593"
}, {"id": "597", "county": "\u5927\u6d3c\u53bf", "parent": "593"}, {
    "id": "598",
    "county": "\u76d8\u5c71\u53bf",
    "parent": "593"
}, {"id": "600", "county": "\u5e02\u8f96\u533a", "parent": "599"}, {
    "id": "601",
    "county": "\u94f6\u5dde\u533a",
    "parent": "599"
}, {"id": "602", "county": "\u6e05\u6cb3\u533a", "parent": "599"}, {
    "id": "603",
    "county": "\u94c1\u5cad\u53bf",
    "parent": "599"
}, {"id": "604", "county": "\u897f\u4e30\u53bf", "parent": "599"}, {
    "id": "605",
    "county": "\u660c\u56fe\u53bf",
    "parent": "599"
}, {"id": "606", "county": "\u8c03\u5175\u5c71\u5e02", "parent": "599"}, {
    "id": "607",
    "county": "\u5f00\u539f\u5e02",
    "parent": "599"
}, {"id": "609", "county": "\u5e02\u8f96\u533a", "parent": "608"}, {
    "id": "610",
    "county": "\u53cc\u5854\u533a",
    "parent": "608"
}, {"id": "611", "county": "\u9f99\u57ce\u533a", "parent": "608"}, {
    "id": "612",
    "county": "\u671d\u9633\u53bf",
    "parent": "608"
}, {"id": "613", "county": "\u5efa\u5e73\u53bf", "parent": "608"}, {
    "id": "614",
    "county": "\u5580\u5587\u6c81\u5de6\u7ffc\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
    "parent": "608"
}, {"id": "615", "county": "\u5317\u7968\u5e02", "parent": "608"}, {
    "id": "616",
    "county": "\u51cc\u6e90\u5e02",
    "parent": "608"
}, {"id": "618", "county": "\u5e02\u8f96\u533a", "parent": "617"}, {
    "id": "619",
    "county": "\u8fde\u5c71\u533a",
    "parent": "617"
}, {"id": "620", "county": "\u9f99\u6e2f\u533a", "parent": "617"}, {
    "id": "621",
    "county": "\u5357\u7968\u533a",
    "parent": "617"
}, {"id": "622", "county": "\u7ee5\u4e2d\u53bf", "parent": "617"}, {
    "id": "623",
    "county": "\u5efa\u660c\u53bf",
    "parent": "617"
}, {"id": "624", "county": "\u5174\u57ce\u5e02", "parent": "617"}, {
    "id": "627",
    "county": "\u5e02\u8f96\u533a",
    "parent": "626"
}, {"id": "628", "county": "\u5357\u5173\u533a", "parent": "626"}, {
    "id": "629",
    "county": "\u5bbd\u57ce\u533a",
    "parent": "626"
}, {"id": "630", "county": "\u671d\u9633\u533a", "parent": "626"}, {
    "id": "631",
    "county": "\u4e8c\u9053\u533a",
    "parent": "626"
}, {"id": "632", "county": "\u7eff\u56ed\u533a", "parent": "626"}, {
    "id": "633",
    "county": "\u53cc\u9633\u533a",
    "parent": "626"
}, {"id": "634", "county": "\u4e5d\u53f0\u533a", "parent": "626"}, {
    "id": "635",
    "county": "\u519c\u5b89\u53bf",
    "parent": "626"
}, {"id": "636", "county": "\u6986\u6811\u5e02", "parent": "626"}, {
    "id": "637",
    "county": "\u5fb7\u60e0\u5e02",
    "parent": "626"
}, {"id": "639", "county": "\u5e02\u8f96\u533a", "parent": "638"}, {
    "id": "640",
    "county": "\u660c\u9091\u533a",
    "parent": "638"
}, {"id": "641", "county": "\u9f99\u6f6d\u533a", "parent": "638"}, {
    "id": "642",
    "county": "\u8239\u8425\u533a",
    "parent": "638"
}, {"id": "643", "county": "\u4e30\u6ee1\u533a", "parent": "638"}, {
    "id": "644",
    "county": "\u6c38\u5409\u53bf",
    "parent": "638"
}, {"id": "645", "county": "\u86df\u6cb3\u5e02", "parent": "638"}, {
    "id": "646",
    "county": "\u6866\u7538\u5e02",
    "parent": "638"
}, {"id": "647", "county": "\u8212\u5170\u5e02", "parent": "638"}, {
    "id": "648",
    "county": "\u78d0\u77f3\u5e02",
    "parent": "638"
}, {"id": "650", "county": "\u5e02\u8f96\u533a", "parent": "649"}, {
    "id": "651",
    "county": "\u94c1\u897f\u533a",
    "parent": "649"
}, {"id": "652", "county": "\u94c1\u4e1c\u533a", "parent": "649"}, {
    "id": "653",
    "county": "\u68a8\u6811\u53bf",
    "parent": "649"
}, {"id": "654", "county": "\u4f0a\u901a\u6ee1\u65cf\u81ea\u6cbb\u53bf", "parent": "649"}, {
    "id": "655",
    "county": "\u516c\u4e3b\u5cad\u5e02",
    "parent": "649"
}, {"id": "656", "county": "\u53cc\u8fbd\u5e02", "parent": "649"}, {
    "id": "658",
    "county": "\u5e02\u8f96\u533a",
    "parent": "657"
}, {"id": "659", "county": "\u9f99\u5c71\u533a", "parent": "657"}, {
    "id": "660",
    "county": "\u897f\u5b89\u533a",
    "parent": "657"
}, {"id": "661", "county": "\u4e1c\u4e30\u53bf", "parent": "657"}, {
    "id": "662",
    "county": "\u4e1c\u8fbd\u53bf",
    "parent": "657"
}, {"id": "664", "county": "\u5e02\u8f96\u533a", "parent": "663"}, {
    "id": "665",
    "county": "\u4e1c\u660c\u533a",
    "parent": "663"
}, {"id": "666", "county": "\u4e8c\u9053\u6c5f\u533a", "parent": "663"}, {
    "id": "667",
    "county": "\u901a\u5316\u53bf",
    "parent": "663"
}, {"id": "668", "county": "\u8f89\u5357\u53bf", "parent": "663"}, {
    "id": "669",
    "county": "\u67f3\u6cb3\u53bf",
    "parent": "663"
}, {"id": "670", "county": "\u6885\u6cb3\u53e3\u5e02", "parent": "663"}, {
    "id": "671",
    "county": "\u96c6\u5b89\u5e02",
    "parent": "663"
}, {"id": "673", "county": "\u5e02\u8f96\u533a", "parent": "672"}, {
    "id": "674",
    "county": "\u6d51\u6c5f\u533a",
    "parent": "672"
}, {"id": "675", "county": "\u6c5f\u6e90\u533a", "parent": "672"}, {
    "id": "676",
    "county": "\u629a\u677e\u53bf",
    "parent": "672"
}, {"id": "677", "county": "\u9756\u5b87\u53bf", "parent": "672"}, {
    "id": "678",
    "county": "\u957f\u767d\u671d\u9c9c\u65cf\u81ea\u6cbb\u53bf",
    "parent": "672"
}, {"id": "679", "county": "\u4e34\u6c5f\u5e02", "parent": "672"}, {
    "id": "681",
    "county": "\u5e02\u8f96\u533a",
    "parent": "680"
}, {"id": "682", "county": "\u5b81\u6c5f\u533a", "parent": "680"}, {
    "id": "683",
    "county": "\u524d\u90ed\u5c14\u7f57\u65af\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
    "parent": "680"
}, {"id": "684", "county": "\u957f\u5cad\u53bf", "parent": "680"}, {
    "id": "685",
    "county": "\u4e7e\u5b89\u53bf",
    "parent": "680"
}, {"id": "686", "county": "\u6276\u4f59\u5e02", "parent": "680"}, {
    "id": "688",
    "county": "\u5e02\u8f96\u533a",
    "parent": "687"
}, {"id": "689", "county": "\u6d2e\u5317\u533a", "parent": "687"}, {
    "id": "690",
    "county": "\u9547\u8d49\u53bf",
    "parent": "687"
}, {"id": "691", "county": "\u901a\u6986\u53bf", "parent": "687"}, {
    "id": "692",
    "county": "\u6d2e\u5357\u5e02",
    "parent": "687"
}, {"id": "693", "county": "\u5927\u5b89\u5e02", "parent": "687"}, {
    "id": "695",
    "county": "\u5ef6\u5409\u5e02",
    "parent": "694"
}, {"id": "696", "county": "\u56fe\u4eec\u5e02", "parent": "694"}, {
    "id": "697",
    "county": "\u6566\u5316\u5e02",
    "parent": "694"
}, {"id": "698", "county": "\u73f2\u6625\u5e02", "parent": "694"}, {
    "id": "699",
    "county": "\u9f99\u4e95\u5e02",
    "parent": "694"
}, {"id": "700", "county": "\u548c\u9f99\u5e02", "parent": "694"}, {
    "id": "701",
    "county": "\u6c6a\u6e05\u53bf",
    "parent": "694"
}, {"id": "702", "county": "\u5b89\u56fe\u53bf", "parent": "694"}, {
    "id": "705",
    "county": "\u5e02\u8f96\u533a",
    "parent": "704"
}, {"id": "706", "county": "\u9053\u91cc\u533a", "parent": "704"}, {
    "id": "707",
    "county": "\u5357\u5c97\u533a",
    "parent": "704"
}, {"id": "708", "county": "\u9053\u5916\u533a", "parent": "704"}, {
    "id": "709",
    "county": "\u5e73\u623f\u533a",
    "parent": "704"
}, {"id": "710", "county": "\u677e\u5317\u533a", "parent": "704"}, {
    "id": "711",
    "county": "\u9999\u574a\u533a",
    "parent": "704"
}, {"id": "712", "county": "\u547c\u5170\u533a", "parent": "704"}, {
    "id": "713",
    "county": "\u963f\u57ce\u533a",
    "parent": "704"
}, {"id": "714", "county": "\u53cc\u57ce\u533a", "parent": "704"}, {
    "id": "715",
    "county": "\u4f9d\u5170\u53bf",
    "parent": "704"
}, {"id": "716", "county": "\u65b9\u6b63\u53bf", "parent": "704"}, {
    "id": "717",
    "county": "\u5bbe\u53bf",
    "parent": "704"
}, {"id": "718", "county": "\u5df4\u5f66\u53bf", "parent": "704"}, {
    "id": "719",
    "county": "\u6728\u5170\u53bf",
    "parent": "704"
}, {"id": "720", "county": "\u901a\u6cb3\u53bf", "parent": "704"}, {
    "id": "721",
    "county": "\u5ef6\u5bff\u53bf",
    "parent": "704"
}, {"id": "722", "county": "\u5c1a\u5fd7\u5e02", "parent": "704"}, {
    "id": "723",
    "county": "\u4e94\u5e38\u5e02",
    "parent": "704"
}, {"id": "725", "county": "\u5e02\u8f96\u533a", "parent": "724"}, {
    "id": "726",
    "county": "\u9f99\u6c99\u533a",
    "parent": "724"
}, {"id": "727", "county": "\u5efa\u534e\u533a", "parent": "724"}, {
    "id": "728",
    "county": "\u94c1\u950b\u533a",
    "parent": "724"
}, {"id": "729", "county": "\u6602\u6602\u6eaa\u533a", "parent": "724"}, {
    "id": "730",
    "county": "\u5bcc\u62c9\u5c14\u57fa\u533a",
    "parent": "724"
}, {"id": "731", "county": "\u78be\u5b50\u5c71\u533a", "parent": "724"}, {
    "id": "732",
    "county": "\u6885\u91cc\u65af\u8fbe\u65a1\u5c14\u65cf\u533a",
    "parent": "724"
}, {"id": "733", "county": "\u9f99\u6c5f\u53bf", "parent": "724"}, {
    "id": "734",
    "county": "\u4f9d\u5b89\u53bf",
    "parent": "724"
}, {"id": "735", "county": "\u6cf0\u6765\u53bf", "parent": "724"}, {
    "id": "736",
    "county": "\u7518\u5357\u53bf",
    "parent": "724"
}, {"id": "737", "county": "\u5bcc\u88d5\u53bf", "parent": "724"}, {
    "id": "738",
    "county": "\u514b\u5c71\u53bf",
    "parent": "724"
}, {"id": "739", "county": "\u514b\u4e1c\u53bf", "parent": "724"}, {
    "id": "740",
    "county": "\u62dc\u6cc9\u53bf",
    "parent": "724"
}, {"id": "741", "county": "\u8bb7\u6cb3\u5e02", "parent": "724"}, {
    "id": "743",
    "county": "\u5e02\u8f96\u533a",
    "parent": "742"
}, {"id": "744", "county": "\u9e21\u51a0\u533a", "parent": "742"}, {
    "id": "745",
    "county": "\u6052\u5c71\u533a",
    "parent": "742"
}, {"id": "746", "county": "\u6ef4\u9053\u533a", "parent": "742"}, {
    "id": "747",
    "county": "\u68a8\u6811\u533a",
    "parent": "742"
}, {"id": "748", "county": "\u57ce\u5b50\u6cb3\u533a", "parent": "742"}, {
    "id": "749",
    "county": "\u9ebb\u5c71\u533a",
    "parent": "742"
}, {"id": "750", "county": "\u9e21\u4e1c\u53bf", "parent": "742"}, {
    "id": "751",
    "county": "\u864e\u6797\u5e02",
    "parent": "742"
}, {"id": "752", "county": "\u5bc6\u5c71\u5e02", "parent": "742"}, {
    "id": "754",
    "county": "\u5e02\u8f96\u533a",
    "parent": "753"
}, {"id": "755", "county": "\u5411\u9633\u533a", "parent": "753"}, {
    "id": "756",
    "county": "\u5de5\u519c\u533a",
    "parent": "753"
}, {"id": "757", "county": "\u5357\u5c71\u533a", "parent": "753"}, {
    "id": "758",
    "county": "\u5174\u5b89\u533a",
    "parent": "753"
}, {"id": "759", "county": "\u4e1c\u5c71\u533a", "parent": "753"}, {
    "id": "760",
    "county": "\u5174\u5c71\u533a",
    "parent": "753"
}, {"id": "761", "county": "\u841d\u5317\u53bf", "parent": "753"}, {
    "id": "762",
    "county": "\u7ee5\u6ee8\u53bf",
    "parent": "753"
}, {"id": "764", "county": "\u5e02\u8f96\u533a", "parent": "763"}, {
    "id": "765",
    "county": "\u5c16\u5c71\u533a",
    "parent": "763"
}, {"id": "766", "county": "\u5cad\u4e1c\u533a", "parent": "763"}, {
    "id": "767",
    "county": "\u56db\u65b9\u53f0\u533a",
    "parent": "763"
}, {"id": "768", "county": "\u5b9d\u5c71\u533a", "parent": "763"}, {
    "id": "769",
    "county": "\u96c6\u8d24\u53bf",
    "parent": "763"
}, {"id": "770", "county": "\u53cb\u8c0a\u53bf", "parent": "763"}, {
    "id": "771",
    "county": "\u5b9d\u6e05\u53bf",
    "parent": "763"
}, {"id": "772", "county": "\u9976\u6cb3\u53bf", "parent": "763"}, {
    "id": "774",
    "county": "\u5e02\u8f96\u533a",
    "parent": "773"
}, {"id": "775", "county": "\u8428\u5c14\u56fe\u533a", "parent": "773"}, {
    "id": "776",
    "county": "\u9f99\u51e4\u533a",
    "parent": "773"
}, {"id": "777", "county": "\u8ba9\u80e1\u8def\u533a", "parent": "773"}, {
    "id": "778",
    "county": "\u7ea2\u5c97\u533a",
    "parent": "773"
}, {"id": "779", "county": "\u5927\u540c\u533a", "parent": "773"}, {
    "id": "780",
    "county": "\u8087\u5dde\u53bf",
    "parent": "773"
}, {"id": "781", "county": "\u8087\u6e90\u53bf", "parent": "773"}, {
    "id": "782",
    "county": "\u6797\u7538\u53bf",
    "parent": "773"
}, {
    "id": "783",
    "county": "\u675c\u5c14\u4f2f\u7279\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf",
    "parent": "773"
}, {"id": "785", "county": "\u5e02\u8f96\u533a", "parent": "784"}, {
    "id": "786",
    "county": "\u4f0a\u6625\u533a",
    "parent": "784"
}, {"id": "787", "county": "\u5357\u5c94\u533a", "parent": "784"}, {
    "id": "788",
    "county": "\u53cb\u597d\u533a",
    "parent": "784"
}, {"id": "789", "county": "\u897f\u6797\u533a", "parent": "784"}, {
    "id": "790",
    "county": "\u7fe0\u5ce6\u533a",
    "parent": "784"
}, {"id": "791", "county": "\u65b0\u9752\u533a", "parent": "784"}, {
    "id": "792",
    "county": "\u7f8e\u6eaa\u533a",
    "parent": "784"
}, {"id": "793", "county": "\u91d1\u5c71\u5c6f\u533a", "parent": "784"}, {
    "id": "794",
    "county": "\u4e94\u8425\u533a",
    "parent": "784"
}, {"id": "795", "county": "\u4e4c\u9a6c\u6cb3\u533a", "parent": "784"}, {
    "id": "796",
    "county": "\u6c64\u65fa\u6cb3\u533a",
    "parent": "784"
}, {"id": "797", "county": "\u5e26\u5cad\u533a", "parent": "784"}, {
    "id": "798",
    "county": "\u4e4c\u4f0a\u5cad\u533a",
    "parent": "784"
}, {"id": "799", "county": "\u7ea2\u661f\u533a", "parent": "784"}, {
    "id": "800",
    "county": "\u4e0a\u7518\u5cad\u533a",
    "parent": "784"
}, {"id": "801", "county": "\u5609\u836b\u53bf", "parent": "784"}, {
    "id": "802",
    "county": "\u94c1\u529b\u5e02",
    "parent": "784"
}, {"id": "804", "county": "\u5e02\u8f96\u533a", "parent": "803"}, {
    "id": "805",
    "county": "\u5411\u9633\u533a",
    "parent": "803"
}, {"id": "806", "county": "\u524d\u8fdb\u533a", "parent": "803"}, {
    "id": "807",
    "county": "\u4e1c\u98ce\u533a",
    "parent": "803"
}, {"id": "808", "county": "\u90ca\u533a", "parent": "803"}, {
    "id": "809",
    "county": "\u6866\u5357\u53bf",
    "parent": "803"
}, {"id": "810", "county": "\u6866\u5ddd\u53bf", "parent": "803"}, {
    "id": "811",
    "county": "\u6c64\u539f\u53bf",
    "parent": "803"
}, {"id": "812", "county": "\u629a\u8fdc\u53bf", "parent": "803"}, {
    "id": "813",
    "county": "\u540c\u6c5f\u5e02",
    "parent": "803"
}, {"id": "814", "county": "\u5bcc\u9526\u5e02", "parent": "803"}, {
    "id": "816",
    "county": "\u5e02\u8f96\u533a",
    "parent": "815"
}, {"id": "817", "county": "\u65b0\u5174\u533a", "parent": "815"}, {
    "id": "818",
    "county": "\u6843\u5c71\u533a",
    "parent": "815"
}, {"id": "819", "county": "\u8304\u5b50\u6cb3\u533a", "parent": "815"}, {
    "id": "820",
    "county": "\u52c3\u5229\u53bf",
    "parent": "815"
}, {"id": "822", "county": "\u5e02\u8f96\u533a", "parent": "821"}, {
    "id": "823",
    "county": "\u4e1c\u5b89\u533a",
    "parent": "821"
}, {"id": "824", "county": "\u9633\u660e\u533a", "parent": "821"}, {
    "id": "825",
    "county": "\u7231\u6c11\u533a",
    "parent": "821"
}, {"id": "826", "county": "\u897f\u5b89\u533a", "parent": "821"}, {
    "id": "827",
    "county": "\u4e1c\u5b81\u53bf",
    "parent": "821"
}, {"id": "828", "county": "\u6797\u53e3\u53bf", "parent": "821"}, {
    "id": "829",
    "county": "\u7ee5\u82ac\u6cb3\u5e02",
    "parent": "821"
}, {"id": "830", "county": "\u6d77\u6797\u5e02", "parent": "821"}, {
    "id": "831",
    "county": "\u5b81\u5b89\u5e02",
    "parent": "821"
}, {"id": "832", "county": "\u7a46\u68f1\u5e02", "parent": "821"}, {
    "id": "834",
    "county": "\u5e02\u8f96\u533a",
    "parent": "833"
}, {"id": "835", "county": "\u7231\u8f89\u533a", "parent": "833"}, {
    "id": "836",
    "county": "\u5ae9\u6c5f\u53bf",
    "parent": "833"
}, {"id": "837", "county": "\u900a\u514b\u53bf", "parent": "833"}, {
    "id": "838",
    "county": "\u5b59\u5434\u53bf",
    "parent": "833"
}, {"id": "839", "county": "\u5317\u5b89\u5e02", "parent": "833"}, {
    "id": "840",
    "county": "\u4e94\u5927\u8fde\u6c60\u5e02",
    "parent": "833"
}, {"id": "842", "county": "\u5e02\u8f96\u533a", "parent": "841"}, {
    "id": "843",
    "county": "\u5317\u6797\u533a",
    "parent": "841"
}, {"id": "844", "county": "\u671b\u594e\u53bf", "parent": "841"}, {
    "id": "845",
    "county": "\u5170\u897f\u53bf",
    "parent": "841"
}, {"id": "846", "county": "\u9752\u5188\u53bf", "parent": "841"}, {
    "id": "847",
    "county": "\u5e86\u5b89\u53bf",
    "parent": "841"
}, {"id": "848", "county": "\u660e\u6c34\u53bf", "parent": "841"}, {
    "id": "849",
    "county": "\u7ee5\u68f1\u53bf",
    "parent": "841"
}, {"id": "850", "county": "\u5b89\u8fbe\u5e02", "parent": "841"}, {
    "id": "851",
    "county": "\u8087\u4e1c\u5e02",
    "parent": "841"
}, {"id": "852", "county": "\u6d77\u4f26\u5e02", "parent": "841"}, {
    "id": "854",
    "county": "\u547c\u739b\u53bf",
    "parent": "853"
}, {"id": "855", "county": "\u5854\u6cb3\u53bf", "parent": "853"}, {
    "id": "856",
    "county": "\u6f20\u6cb3\u53bf",
    "parent": "853"
}, {"id": "858", "county": "\u9ec4\u6d66\u533a", "parent": "857"}, {
    "id": "859",
    "county": "\u5f90\u6c47\u533a",
    "parent": "857"
}, {"id": "860", "county": "\u957f\u5b81\u533a", "parent": "857"}, {
    "id": "861",
    "county": "\u9759\u5b89\u533a",
    "parent": "857"
}, {"id": "862", "county": "\u666e\u9640\u533a", "parent": "857"}, {
    "id": "863",
    "county": "\u95f8\u5317\u533a",
    "parent": "857"
}, {"id": "864", "county": "\u8679\u53e3\u533a", "parent": "857"}, {
    "id": "865",
    "county": "\u6768\u6d66\u533a",
    "parent": "857"
}, {"id": "866", "county": "\u95f5\u884c\u533a", "parent": "857"}, {
    "id": "867",
    "county": "\u5b9d\u5c71\u533a",
    "parent": "857"
}, {"id": "868", "county": "\u5609\u5b9a\u533a", "parent": "857"}, {
    "id": "869",
    "county": "\u6d66\u4e1c\u65b0\u533a",
    "parent": "857"
}, {"id": "870", "county": "\u91d1\u5c71\u533a", "parent": "857"}, {
    "id": "871",
    "county": "\u677e\u6c5f\u533a",
    "parent": "857"
}, {"id": "872", "county": "\u9752\u6d66\u533a", "parent": "857"}, {
    "id": "873",
    "county": "\u5949\u8d24\u533a",
    "parent": "857"
}, {"id": "874", "county": "\u5d07\u660e\u53bf", "parent": "857"}, {
    "id": "877",
    "county": "\u5e02\u8f96\u533a",
    "parent": "876"
}, {"id": "878", "county": "\u7384\u6b66\u533a", "parent": "876"}, {
    "id": "879",
    "county": "\u79e6\u6dee\u533a",
    "parent": "876"
}, {"id": "880", "county": "\u5efa\u90ba\u533a", "parent": "876"}, {
    "id": "881",
    "county": "\u9f13\u697c\u533a",
    "parent": "876"
}, {"id": "882", "county": "\u6d66\u53e3\u533a", "parent": "876"}, {
    "id": "883",
    "county": "\u6816\u971e\u533a",
    "parent": "876"
}, {"id": "884", "county": "\u96e8\u82b1\u53f0\u533a", "parent": "876"}, {
    "id": "885",
    "county": "\u6c5f\u5b81\u533a",
    "parent": "876"
}, {"id": "886", "county": "\u516d\u5408\u533a", "parent": "876"}, {
    "id": "887",
    "county": "\u6ea7\u6c34\u533a",
    "parent": "876"
}, {"id": "888", "county": "\u9ad8\u6df3\u533a", "parent": "876"}, {
    "id": "890",
    "county": "\u5e02\u8f96\u533a",
    "parent": "889"
}, {"id": "891", "county": "\u5d07\u5b89\u533a", "parent": "889"}, {
    "id": "892",
    "county": "\u5357\u957f\u533a",
    "parent": "889"
}, {"id": "893", "county": "\u5317\u5858\u533a", "parent": "889"}, {
    "id": "894",
    "county": "\u9521\u5c71\u533a",
    "parent": "889"
}, {"id": "895", "county": "\u60e0\u5c71\u533a", "parent": "889"}, {
    "id": "896",
    "county": "\u6ee8\u6e56\u533a",
    "parent": "889"
}, {"id": "897", "county": "\u6c5f\u9634\u5e02", "parent": "889"}, {
    "id": "898",
    "county": "\u5b9c\u5174\u5e02",
    "parent": "889"
}, {"id": "900", "county": "\u5e02\u8f96\u533a", "parent": "899"}, {
    "id": "901",
    "county": "\u9f13\u697c\u533a",
    "parent": "899"
}, {"id": "902", "county": "\u4e91\u9f99\u533a", "parent": "899"}, {
    "id": "903",
    "county": "\u8d3e\u6c6a\u533a",
    "parent": "899"
}, {"id": "904", "county": "\u6cc9\u5c71\u533a", "parent": "899"}, {
    "id": "905",
    "county": "\u94dc\u5c71\u533a",
    "parent": "899"
}, {"id": "906", "county": "\u4e30\u53bf", "parent": "899"}, {
    "id": "907",
    "county": "\u6c9b\u53bf",
    "parent": "899"
}, {"id": "908", "county": "\u7762\u5b81\u53bf", "parent": "899"}, {
    "id": "909",
    "county": "\u65b0\u6c82\u5e02",
    "parent": "899"
}, {"id": "910", "county": "\u90b3\u5dde\u5e02", "parent": "899"}, {
    "id": "912",
    "county": "\u5e02\u8f96\u533a",
    "parent": "911"
}, {"id": "913", "county": "\u5929\u5b81\u533a", "parent": "911"}, {
    "id": "914",
    "county": "\u949f\u697c\u533a",
    "parent": "911"
}, {"id": "915", "county": "\u621a\u5885\u5830\u533a", "parent": "911"}, {
    "id": "916",
    "county": "\u65b0\u5317\u533a",
    "parent": "911"
}, {"id": "917", "county": "\u6b66\u8fdb\u533a", "parent": "911"}, {
    "id": "918",
    "county": "\u6ea7\u9633\u5e02",
    "parent": "911"
}, {"id": "919", "county": "\u91d1\u575b\u5e02", "parent": "911"}, {
    "id": "921",
    "county": "\u5e02\u8f96\u533a",
    "parent": "920"
}, {"id": "922", "county": "\u864e\u4e18\u533a", "parent": "920"}, {
    "id": "923",
    "county": "\u5434\u4e2d\u533a",
    "parent": "920"
}, {"id": "924", "county": "\u76f8\u57ce\u533a", "parent": "920"}, {
    "id": "925",
    "county": "\u59d1\u82cf\u533a",
    "parent": "920"
}, {"id": "926", "county": "\u5434\u6c5f\u533a", "parent": "920"}, {
    "id": "927",
    "county": "\u5e38\u719f\u5e02",
    "parent": "920"
}, {"id": "928", "county": "\u5f20\u5bb6\u6e2f\u5e02", "parent": "920"}, {
    "id": "929",
    "county": "\u6606\u5c71\u5e02",
    "parent": "920"
}, {"id": "930", "county": "\u592a\u4ed3\u5e02", "parent": "920"}, {
    "id": "932",
    "county": "\u5e02\u8f96\u533a",
    "parent": "931"
}, {"id": "933", "county": "\u5d07\u5ddd\u533a", "parent": "931"}, {
    "id": "934",
    "county": "\u6e2f\u95f8\u533a",
    "parent": "931"
}, {"id": "935", "county": "\u901a\u5dde\u533a", "parent": "931"}, {
    "id": "936",
    "county": "\u6d77\u5b89\u53bf",
    "parent": "931"
}, {"id": "937", "county": "\u5982\u4e1c\u53bf", "parent": "931"}, {
    "id": "938",
    "county": "\u542f\u4e1c\u5e02",
    "parent": "931"
}, {"id": "939", "county": "\u5982\u768b\u5e02", "parent": "931"}, {
    "id": "940",
    "county": "\u6d77\u95e8\u5e02",
    "parent": "931"
}, {"id": "942", "county": "\u5e02\u8f96\u533a", "parent": "941"}, {
    "id": "943",
    "county": "\u8fde\u4e91\u533a",
    "parent": "941"
}, {"id": "944", "county": "\u6d77\u5dde\u533a", "parent": "941"}, {
    "id": "945",
    "county": "\u8d63\u6986\u533a",
    "parent": "941"
}, {"id": "946", "county": "\u4e1c\u6d77\u53bf", "parent": "941"}, {
    "id": "947",
    "county": "\u704c\u4e91\u53bf",
    "parent": "941"
}, {"id": "948", "county": "\u704c\u5357\u53bf", "parent": "941"}, {
    "id": "950",
    "county": "\u5e02\u8f96\u533a",
    "parent": "949"
}, {"id": "951", "county": "\u6e05\u6cb3\u533a", "parent": "949"}, {
    "id": "952",
    "county": "\u6dee\u5b89\u533a",
    "parent": "949"
}, {"id": "953", "county": "\u6dee\u9634\u533a", "parent": "949"}, {
    "id": "954",
    "county": "\u6e05\u6d66\u533a",
    "parent": "949"
}, {"id": "955", "county": "\u6d9f\u6c34\u53bf", "parent": "949"}, {
    "id": "956",
    "county": "\u6d2a\u6cfd\u53bf",
    "parent": "949"
}, {"id": "957", "county": "\u76f1\u7719\u53bf", "parent": "949"}, {
    "id": "958",
    "county": "\u91d1\u6e56\u53bf",
    "parent": "949"
}, {"id": "960", "county": "\u5e02\u8f96\u533a", "parent": "959"}, {
    "id": "961",
    "county": "\u4ead\u6e56\u533a",
    "parent": "959"
}, {"id": "962", "county": "\u76d0\u90fd\u533a", "parent": "959"}, {
    "id": "963",
    "county": "\u54cd\u6c34\u53bf",
    "parent": "959"
}, {"id": "964", "county": "\u6ee8\u6d77\u53bf", "parent": "959"}, {
    "id": "965",
    "county": "\u961c\u5b81\u53bf",
    "parent": "959"
}, {"id": "966", "county": "\u5c04\u9633\u53bf", "parent": "959"}, {
    "id": "967",
    "county": "\u5efa\u6e56\u53bf",
    "parent": "959"
}, {"id": "968", "county": "\u4e1c\u53f0\u5e02", "parent": "959"}, {
    "id": "969",
    "county": "\u5927\u4e30\u5e02",
    "parent": "959"
}, {"id": "971", "county": "\u5e02\u8f96\u533a", "parent": "970"}, {
    "id": "972",
    "county": "\u5e7f\u9675\u533a",
    "parent": "970"
}, {"id": "973", "county": "\u9097\u6c5f\u533a", "parent": "970"}, {
    "id": "974",
    "county": "\u6c5f\u90fd\u533a",
    "parent": "970"
}, {"id": "975", "county": "\u5b9d\u5e94\u53bf", "parent": "970"}, {
    "id": "976",
    "county": "\u4eea\u5f81\u5e02",
    "parent": "970"
}, {"id": "977", "county": "\u9ad8\u90ae\u5e02", "parent": "970"}, {
    "id": "979",
    "county": "\u5e02\u8f96\u533a",
    "parent": "978"
}, {"id": "980", "county": "\u4eac\u53e3\u533a", "parent": "978"}, {
    "id": "981",
    "county": "\u6da6\u5dde\u533a",
    "parent": "978"
}, {"id": "982", "county": "\u4e39\u5f92\u533a", "parent": "978"}, {
    "id": "983",
    "county": "\u4e39\u9633\u5e02",
    "parent": "978"
}, {"id": "984", "county": "\u626c\u4e2d\u5e02", "parent": "978"}, {
    "id": "985",
    "county": "\u53e5\u5bb9\u5e02",
    "parent": "978"
}, {"id": "987", "county": "\u5e02\u8f96\u533a", "parent": "986"}, {
    "id": "988",
    "county": "\u6d77\u9675\u533a",
    "parent": "986"
}, {"id": "989", "county": "\u9ad8\u6e2f\u533a", "parent": "986"}, {
    "id": "990",
    "county": "\u59dc\u5830\u533a",
    "parent": "986"
}, {"id": "991", "county": "\u5174\u5316\u5e02", "parent": "986"}, {
    "id": "992",
    "county": "\u9756\u6c5f\u5e02",
    "parent": "986"
}, {"id": "993", "county": "\u6cf0\u5174\u5e02", "parent": "986"}, {
    "id": "995",
    "county": "\u5e02\u8f96\u533a",
    "parent": "994"
}, {"id": "996", "county": "\u5bbf\u57ce\u533a", "parent": "994"}, {
    "id": "997",
    "county": "\u5bbf\u8c6b\u533a",
    "parent": "994"
}, {"id": "998", "county": "\u6cad\u9633\u53bf", "parent": "994"}, {
    "id": "999",
    "county": "\u6cd7\u9633\u53bf",
    "parent": "994"
}, {"id": "1000", "county": "\u6cd7\u6d2a\u53bf", "parent": "994"}, {
    "id": "1003",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1002"
}, {"id": "1004", "county": "\u4e0a\u57ce\u533a", "parent": "1002"}, {
    "id": "1005",
    "county": "\u4e0b\u57ce\u533a",
    "parent": "1002"
}, {"id": "1006", "county": "\u6c5f\u5e72\u533a", "parent": "1002"}, {
    "id": "1007",
    "county": "\u62f1\u5885\u533a",
    "parent": "1002"
}, {"id": "1008", "county": "\u897f\u6e56\u533a", "parent": "1002"}, {
    "id": "1009",
    "county": "\u6ee8\u6c5f\u533a",
    "parent": "1002"
}, {"id": "1010", "county": "\u8427\u5c71\u533a", "parent": "1002"}, {
    "id": "1011",
    "county": "\u4f59\u676d\u533a",
    "parent": "1002"
}, {"id": "1012", "county": "\u5bcc\u9633\u533a", "parent": "1002"}, {
    "id": "1013",
    "county": "\u6850\u5e90\u53bf",
    "parent": "1002"
}, {"id": "1014", "county": "\u6df3\u5b89\u53bf", "parent": "1002"}, {
    "id": "1015",
    "county": "\u5efa\u5fb7\u5e02",
    "parent": "1002"
}, {"id": "1016", "county": "\u4e34\u5b89\u5e02", "parent": "1002"}, {
    "id": "1018",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1017"
}, {"id": "1019", "county": "\u6d77\u66d9\u533a", "parent": "1017"}, {
    "id": "1020",
    "county": "\u6c5f\u4e1c\u533a",
    "parent": "1017"
}, {"id": "1021", "county": "\u6c5f\u5317\u533a", "parent": "1017"}, {
    "id": "1022",
    "county": "\u5317\u4ed1\u533a",
    "parent": "1017"
}, {"id": "1023", "county": "\u9547\u6d77\u533a", "parent": "1017"}, {
    "id": "1024",
    "county": "\u911e\u5dde\u533a",
    "parent": "1017"
}, {"id": "1025", "county": "\u8c61\u5c71\u53bf", "parent": "1017"}, {
    "id": "1026",
    "county": "\u5b81\u6d77\u53bf",
    "parent": "1017"
}, {"id": "1027", "county": "\u4f59\u59da\u5e02", "parent": "1017"}, {
    "id": "1028",
    "county": "\u6148\u6eaa\u5e02",
    "parent": "1017"
}, {"id": "1029", "county": "\u5949\u5316\u5e02", "parent": "1017"}, {
    "id": "1031",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1030"
}, {"id": "1032", "county": "\u9e7f\u57ce\u533a", "parent": "1030"}, {
    "id": "1033",
    "county": "\u9f99\u6e7e\u533a",
    "parent": "1030"
}, {"id": "1034", "county": "\u74ef\u6d77\u533a", "parent": "1030"}, {
    "id": "1035",
    "county": "\u6d1e\u5934\u53bf",
    "parent": "1030"
}, {"id": "1036", "county": "\u6c38\u5609\u53bf", "parent": "1030"}, {
    "id": "1037",
    "county": "\u5e73\u9633\u53bf",
    "parent": "1030"
}, {"id": "1038", "county": "\u82cd\u5357\u53bf", "parent": "1030"}, {
    "id": "1039",
    "county": "\u6587\u6210\u53bf",
    "parent": "1030"
}, {"id": "1040", "county": "\u6cf0\u987a\u53bf", "parent": "1030"}, {
    "id": "1041",
    "county": "\u745e\u5b89\u5e02",
    "parent": "1030"
}, {"id": "1042", "county": "\u4e50\u6e05\u5e02", "parent": "1030"}, {
    "id": "1044",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1043"
}, {"id": "1045", "county": "\u5357\u6e56\u533a", "parent": "1043"}, {
    "id": "1046",
    "county": "\u79c0\u6d32\u533a",
    "parent": "1043"
}, {"id": "1047", "county": "\u5609\u5584\u53bf", "parent": "1043"}, {
    "id": "1048",
    "county": "\u6d77\u76d0\u53bf",
    "parent": "1043"
}, {"id": "1049", "county": "\u6d77\u5b81\u5e02", "parent": "1043"}, {
    "id": "1050",
    "county": "\u5e73\u6e56\u5e02",
    "parent": "1043"
}, {"id": "1051", "county": "\u6850\u4e61\u5e02", "parent": "1043"}, {
    "id": "1053",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1052"
}, {"id": "1054", "county": "\u5434\u5174\u533a", "parent": "1052"}, {
    "id": "1055",
    "county": "\u5357\u6d54\u533a",
    "parent": "1052"
}, {"id": "1056", "county": "\u5fb7\u6e05\u53bf", "parent": "1052"}, {
    "id": "1057",
    "county": "\u957f\u5174\u53bf",
    "parent": "1052"
}, {"id": "1058", "county": "\u5b89\u5409\u53bf", "parent": "1052"}, {
    "id": "1060",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1059"
}, {"id": "1061", "county": "\u8d8a\u57ce\u533a", "parent": "1059"}, {
    "id": "1062",
    "county": "\u67ef\u6865\u533a",
    "parent": "1059"
}, {"id": "1063", "county": "\u4e0a\u865e\u533a", "parent": "1059"}, {
    "id": "1064",
    "county": "\u65b0\u660c\u53bf",
    "parent": "1059"
}, {"id": "1065", "county": "\u8bf8\u66a8\u5e02", "parent": "1059"}, {
    "id": "1066",
    "county": "\u5d4a\u5dde\u5e02",
    "parent": "1059"
}, {"id": "1068", "county": "\u5e02\u8f96\u533a", "parent": "1067"}, {
    "id": "1069",
    "county": "\u5a7a\u57ce\u533a",
    "parent": "1067"
}, {"id": "1070", "county": "\u91d1\u4e1c\u533a", "parent": "1067"}, {
    "id": "1071",
    "county": "\u6b66\u4e49\u53bf",
    "parent": "1067"
}, {"id": "1072", "county": "\u6d66\u6c5f\u53bf", "parent": "1067"}, {
    "id": "1073",
    "county": "\u78d0\u5b89\u53bf",
    "parent": "1067"
}, {"id": "1074", "county": "\u5170\u6eaa\u5e02", "parent": "1067"}, {
    "id": "1075",
    "county": "\u4e49\u4e4c\u5e02",
    "parent": "1067"
}, {"id": "1076", "county": "\u4e1c\u9633\u5e02", "parent": "1067"}, {
    "id": "1077",
    "county": "\u6c38\u5eb7\u5e02",
    "parent": "1067"
}, {"id": "1079", "county": "\u5e02\u8f96\u533a", "parent": "1078"}, {
    "id": "1080",
    "county": "\u67ef\u57ce\u533a",
    "parent": "1078"
}, {"id": "1081", "county": "\u8862\u6c5f\u533a", "parent": "1078"}, {
    "id": "1082",
    "county": "\u5e38\u5c71\u53bf",
    "parent": "1078"
}, {"id": "1083", "county": "\u5f00\u5316\u53bf", "parent": "1078"}, {
    "id": "1084",
    "county": "\u9f99\u6e38\u53bf",
    "parent": "1078"
}, {"id": "1085", "county": "\u6c5f\u5c71\u5e02", "parent": "1078"}, {
    "id": "1087",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1086"
}, {"id": "1088", "county": "\u5b9a\u6d77\u533a", "parent": "1086"}, {
    "id": "1089",
    "county": "\u666e\u9640\u533a",
    "parent": "1086"
}, {"id": "1090", "county": "\u5cb1\u5c71\u53bf", "parent": "1086"}, {
    "id": "1091",
    "county": "\u5d4a\u6cd7\u53bf",
    "parent": "1086"
}, {"id": "1093", "county": "\u5e02\u8f96\u533a", "parent": "1092"}, {
    "id": "1094",
    "county": "\u6912\u6c5f\u533a",
    "parent": "1092"
}, {"id": "1095", "county": "\u9ec4\u5ca9\u533a", "parent": "1092"}, {
    "id": "1096",
    "county": "\u8def\u6865\u533a",
    "parent": "1092"
}, {"id": "1097", "county": "\u7389\u73af\u53bf", "parent": "1092"}, {
    "id": "1098",
    "county": "\u4e09\u95e8\u53bf",
    "parent": "1092"
}, {"id": "1099", "county": "\u5929\u53f0\u53bf", "parent": "1092"}, {
    "id": "1100",
    "county": "\u4ed9\u5c45\u53bf",
    "parent": "1092"
}, {"id": "1101", "county": "\u6e29\u5cad\u5e02", "parent": "1092"}, {
    "id": "1102",
    "county": "\u4e34\u6d77\u5e02",
    "parent": "1092"
}, {"id": "1104", "county": "\u5e02\u8f96\u533a", "parent": "1103"}, {
    "id": "1105",
    "county": "\u83b2\u90fd\u533a",
    "parent": "1103"
}, {"id": "1106", "county": "\u9752\u7530\u53bf", "parent": "1103"}, {
    "id": "1107",
    "county": "\u7f19\u4e91\u53bf",
    "parent": "1103"
}, {"id": "1108", "county": "\u9042\u660c\u53bf", "parent": "1103"}, {
    "id": "1109",
    "county": "\u677e\u9633\u53bf",
    "parent": "1103"
}, {"id": "1110", "county": "\u4e91\u548c\u53bf", "parent": "1103"}, {
    "id": "1111",
    "county": "\u5e86\u5143\u53bf",
    "parent": "1103"
}, {"id": "1112", "county": "\u666f\u5b81\u7572\u65cf\u81ea\u6cbb\u53bf", "parent": "1103"}, {
    "id": "1113",
    "county": "\u9f99\u6cc9\u5e02",
    "parent": "1103"
}, {"id": "1116", "county": "\u5e02\u8f96\u533a", "parent": "1115"}, {
    "id": "1117",
    "county": "\u7476\u6d77\u533a",
    "parent": "1115"
}, {"id": "1118", "county": "\u5e90\u9633\u533a", "parent": "1115"}, {
    "id": "1119",
    "county": "\u8700\u5c71\u533a",
    "parent": "1115"
}, {"id": "1120", "county": "\u5305\u6cb3\u533a", "parent": "1115"}, {
    "id": "1121",
    "county": "\u957f\u4e30\u53bf",
    "parent": "1115"
}, {"id": "1122", "county": "\u80a5\u4e1c\u53bf", "parent": "1115"}, {
    "id": "1123",
    "county": "\u80a5\u897f\u53bf",
    "parent": "1115"
}, {"id": "1124", "county": "\u5e90\u6c5f\u53bf", "parent": "1115"}, {
    "id": "1125",
    "county": "\u5de2\u6e56\u5e02",
    "parent": "1115"
}, {"id": "1127", "county": "\u5e02\u8f96\u533a", "parent": "1126"}, {
    "id": "1128",
    "county": "\u955c\u6e56\u533a",
    "parent": "1126"
}, {"id": "1129", "county": "\u5f0b\u6c5f\u533a", "parent": "1126"}, {
    "id": "1130",
    "county": "\u9e20\u6c5f\u533a",
    "parent": "1126"
}, {"id": "1131", "county": "\u4e09\u5c71\u533a", "parent": "1126"}, {
    "id": "1132",
    "county": "\u829c\u6e56\u53bf",
    "parent": "1126"
}, {"id": "1133", "county": "\u7e41\u660c\u53bf", "parent": "1126"}, {
    "id": "1134",
    "county": "\u5357\u9675\u53bf",
    "parent": "1126"
}, {"id": "1135", "county": "\u65e0\u4e3a\u53bf", "parent": "1126"}, {
    "id": "1137",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1136"
}, {"id": "1138", "county": "\u9f99\u5b50\u6e56\u533a", "parent": "1136"}, {
    "id": "1139",
    "county": "\u868c\u5c71\u533a",
    "parent": "1136"
}, {"id": "1140", "county": "\u79b9\u4f1a\u533a", "parent": "1136"}, {
    "id": "1141",
    "county": "\u6dee\u4e0a\u533a",
    "parent": "1136"
}, {"id": "1142", "county": "\u6000\u8fdc\u53bf", "parent": "1136"}, {
    "id": "1143",
    "county": "\u4e94\u6cb3\u53bf",
    "parent": "1136"
}, {"id": "1144", "county": "\u56fa\u9547\u53bf", "parent": "1136"}, {
    "id": "1146",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1145"
}, {"id": "1147", "county": "\u5927\u901a\u533a", "parent": "1145"}, {
    "id": "1148",
    "county": "\u7530\u5bb6\u5eb5\u533a",
    "parent": "1145"
}, {"id": "1149", "county": "\u8c22\u5bb6\u96c6\u533a", "parent": "1145"}, {
    "id": "1150",
    "county": "\u516b\u516c\u5c71\u533a",
    "parent": "1145"
}, {"id": "1151", "county": "\u6f58\u96c6\u533a", "parent": "1145"}, {
    "id": "1152",
    "county": "\u51e4\u53f0\u53bf",
    "parent": "1145"
}, {"id": "1154", "county": "\u5e02\u8f96\u533a", "parent": "1153"}, {
    "id": "1155",
    "county": "\u82b1\u5c71\u533a",
    "parent": "1153"
}, {"id": "1156", "county": "\u96e8\u5c71\u533a", "parent": "1153"}, {
    "id": "1157",
    "county": "\u535a\u671b\u533a",
    "parent": "1153"
}, {"id": "1158", "county": "\u5f53\u6d82\u53bf", "parent": "1153"}, {
    "id": "1159",
    "county": "\u542b\u5c71\u53bf",
    "parent": "1153"
}, {"id": "1160", "county": "\u548c\u53bf", "parent": "1153"}, {
    "id": "1162",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1161"
}, {"id": "1163", "county": "\u675c\u96c6\u533a", "parent": "1161"}, {
    "id": "1164",
    "county": "\u76f8\u5c71\u533a",
    "parent": "1161"
}, {"id": "1165", "county": "\u70c8\u5c71\u533a", "parent": "1161"}, {
    "id": "1166",
    "county": "\u6fc9\u6eaa\u53bf",
    "parent": "1161"
}, {"id": "1168", "county": "\u5e02\u8f96\u533a", "parent": "1167"}, {
    "id": "1169",
    "county": "\u94dc\u5b98\u5c71\u533a",
    "parent": "1167"
}, {"id": "1170", "county": "\u72ee\u5b50\u5c71\u533a", "parent": "1167"}, {
    "id": "1171",
    "county": "\u90ca\u533a",
    "parent": "1167"
}, {"id": "1172", "county": "\u94dc\u9675\u53bf", "parent": "1167"}, {
    "id": "1174",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1173"
}, {"id": "1175", "county": "\u8fce\u6c5f\u533a", "parent": "1173"}, {
    "id": "1176",
    "county": "\u5927\u89c2\u533a",
    "parent": "1173"
}, {"id": "1177", "county": "\u5b9c\u79c0\u533a", "parent": "1173"}, {
    "id": "1178",
    "county": "\u6000\u5b81\u53bf",
    "parent": "1173"
}, {"id": "1179", "county": "\u679e\u9633\u53bf", "parent": "1173"}, {
    "id": "1180",
    "county": "\u6f5c\u5c71\u53bf",
    "parent": "1173"
}, {"id": "1181", "county": "\u592a\u6e56\u53bf", "parent": "1173"}, {
    "id": "1182",
    "county": "\u5bbf\u677e\u53bf",
    "parent": "1173"
}, {"id": "1183", "county": "\u671b\u6c5f\u53bf", "parent": "1173"}, {
    "id": "1184",
    "county": "\u5cb3\u897f\u53bf",
    "parent": "1173"
}, {"id": "1185", "county": "\u6850\u57ce\u5e02", "parent": "1173"}, {
    "id": "1187",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1186"
}, {"id": "1188", "county": "\u5c6f\u6eaa\u533a", "parent": "1186"}, {
    "id": "1189",
    "county": "\u9ec4\u5c71\u533a",
    "parent": "1186"
}, {"id": "1190", "county": "\u5fbd\u5dde\u533a", "parent": "1186"}, {
    "id": "1191",
    "county": "\u6b59\u53bf",
    "parent": "1186"
}, {"id": "1192", "county": "\u4f11\u5b81\u53bf", "parent": "1186"}, {
    "id": "1193",
    "county": "\u9edf\u53bf",
    "parent": "1186"
}, {"id": "1194", "county": "\u7941\u95e8\u53bf", "parent": "1186"}, {
    "id": "1196",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1195"
}, {"id": "1197", "county": "\u7405\u740a\u533a", "parent": "1195"}, {
    "id": "1198",
    "county": "\u5357\u8c2f\u533a",
    "parent": "1195"
}, {"id": "1199", "county": "\u6765\u5b89\u53bf", "parent": "1195"}, {
    "id": "1200",
    "county": "\u5168\u6912\u53bf",
    "parent": "1195"
}, {"id": "1201", "county": "\u5b9a\u8fdc\u53bf", "parent": "1195"}, {
    "id": "1202",
    "county": "\u51e4\u9633\u53bf",
    "parent": "1195"
}, {"id": "1203", "county": "\u5929\u957f\u5e02", "parent": "1195"}, {
    "id": "1204",
    "county": "\u660e\u5149\u5e02",
    "parent": "1195"
}, {"id": "1206", "county": "\u5e02\u8f96\u533a", "parent": "1205"}, {
    "id": "1207",
    "county": "\u988d\u5dde\u533a",
    "parent": "1205"
}, {"id": "1208", "county": "\u988d\u4e1c\u533a", "parent": "1205"}, {
    "id": "1209",
    "county": "\u988d\u6cc9\u533a",
    "parent": "1205"
}, {"id": "1210", "county": "\u4e34\u6cc9\u53bf", "parent": "1205"}, {
    "id": "1211",
    "county": "\u592a\u548c\u53bf",
    "parent": "1205"
}, {"id": "1212", "county": "\u961c\u5357\u53bf", "parent": "1205"}, {
    "id": "1213",
    "county": "\u988d\u4e0a\u53bf",
    "parent": "1205"
}, {"id": "1214", "county": "\u754c\u9996\u5e02", "parent": "1205"}, {
    "id": "1216",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1215"
}, {"id": "1217", "county": "\u57c7\u6865\u533a", "parent": "1215"}, {
    "id": "1218",
    "county": "\u7800\u5c71\u53bf",
    "parent": "1215"
}, {"id": "1219", "county": "\u8427\u53bf", "parent": "1215"}, {
    "id": "1220",
    "county": "\u7075\u74a7\u53bf",
    "parent": "1215"
}, {"id": "1221", "county": "\u6cd7\u53bf", "parent": "1215"}, {
    "id": "1223",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1222"
}, {"id": "1224", "county": "\u91d1\u5b89\u533a", "parent": "1222"}, {
    "id": "1225",
    "county": "\u88d5\u5b89\u533a",
    "parent": "1222"
}, {"id": "1226", "county": "\u5bff\u53bf", "parent": "1222"}, {
    "id": "1227",
    "county": "\u970d\u90b1\u53bf",
    "parent": "1222"
}, {"id": "1228", "county": "\u8212\u57ce\u53bf", "parent": "1222"}, {
    "id": "1229",
    "county": "\u91d1\u5be8\u53bf",
    "parent": "1222"
}, {"id": "1230", "county": "\u970d\u5c71\u53bf", "parent": "1222"}, {
    "id": "1232",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1231"
}, {"id": "1233", "county": "\u8c2f\u57ce\u533a", "parent": "1231"}, {
    "id": "1234",
    "county": "\u6da1\u9633\u53bf",
    "parent": "1231"
}, {"id": "1235", "county": "\u8499\u57ce\u53bf", "parent": "1231"}, {
    "id": "1236",
    "county": "\u5229\u8f9b\u53bf",
    "parent": "1231"
}, {"id": "1238", "county": "\u5e02\u8f96\u533a", "parent": "1237"}, {
    "id": "1239",
    "county": "\u8d35\u6c60\u533a",
    "parent": "1237"
}, {"id": "1240", "county": "\u4e1c\u81f3\u53bf", "parent": "1237"}, {
    "id": "1241",
    "county": "\u77f3\u53f0\u53bf",
    "parent": "1237"
}, {"id": "1242", "county": "\u9752\u9633\u53bf", "parent": "1237"}, {
    "id": "1244",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1243"
}, {"id": "1245", "county": "\u5ba3\u5dde\u533a", "parent": "1243"}, {
    "id": "1246",
    "county": "\u90ce\u6eaa\u53bf",
    "parent": "1243"
}, {"id": "1247", "county": "\u5e7f\u5fb7\u53bf", "parent": "1243"}, {
    "id": "1248",
    "county": "\u6cfe\u53bf",
    "parent": "1243"
}, {"id": "1249", "county": "\u7ee9\u6eaa\u53bf", "parent": "1243"}, {
    "id": "1250",
    "county": "\u65cc\u5fb7\u53bf",
    "parent": "1243"
}, {"id": "1251", "county": "\u5b81\u56fd\u5e02", "parent": "1243"}, {
    "id": "1254",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1253"
}, {"id": "1255", "county": "\u9f13\u697c\u533a", "parent": "1253"}, {
    "id": "1256",
    "county": "\u53f0\u6c5f\u533a",
    "parent": "1253"
}, {"id": "1257", "county": "\u4ed3\u5c71\u533a", "parent": "1253"}, {
    "id": "1258",
    "county": "\u9a6c\u5c3e\u533a",
    "parent": "1253"
}, {"id": "1259", "county": "\u664b\u5b89\u533a", "parent": "1253"}, {
    "id": "1260",
    "county": "\u95fd\u4faf\u53bf",
    "parent": "1253"
}, {"id": "1261", "county": "\u8fde\u6c5f\u53bf", "parent": "1253"}, {
    "id": "1262",
    "county": "\u7f57\u6e90\u53bf",
    "parent": "1253"
}, {"id": "1263", "county": "\u95fd\u6e05\u53bf", "parent": "1253"}, {
    "id": "1264",
    "county": "\u6c38\u6cf0\u53bf",
    "parent": "1253"
}, {"id": "1265", "county": "\u5e73\u6f6d\u53bf", "parent": "1253"}, {
    "id": "1266",
    "county": "\u798f\u6e05\u5e02",
    "parent": "1253"
}, {"id": "1267", "county": "\u957f\u4e50\u5e02", "parent": "1253"}, {
    "id": "1269",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1268"
}, {"id": "1270", "county": "\u601d\u660e\u533a", "parent": "1268"}, {
    "id": "1271",
    "county": "\u6d77\u6ca7\u533a",
    "parent": "1268"
}, {"id": "1272", "county": "\u6e56\u91cc\u533a", "parent": "1268"}, {
    "id": "1273",
    "county": "\u96c6\u7f8e\u533a",
    "parent": "1268"
}, {"id": "1274", "county": "\u540c\u5b89\u533a", "parent": "1268"}, {
    "id": "1275",
    "county": "\u7fd4\u5b89\u533a",
    "parent": "1268"
}, {"id": "1277", "county": "\u5e02\u8f96\u533a", "parent": "1276"}, {
    "id": "1278",
    "county": "\u57ce\u53a2\u533a",
    "parent": "1276"
}, {"id": "1279", "county": "\u6db5\u6c5f\u533a", "parent": "1276"}, {
    "id": "1280",
    "county": "\u8354\u57ce\u533a",
    "parent": "1276"
}, {"id": "1281", "county": "\u79c0\u5c7f\u533a", "parent": "1276"}, {
    "id": "1282",
    "county": "\u4ed9\u6e38\u53bf",
    "parent": "1276"
}, {"id": "1284", "county": "\u5e02\u8f96\u533a", "parent": "1283"}, {
    "id": "1285",
    "county": "\u6885\u5217\u533a",
    "parent": "1283"
}, {"id": "1286", "county": "\u4e09\u5143\u533a", "parent": "1283"}, {
    "id": "1287",
    "county": "\u660e\u6eaa\u53bf",
    "parent": "1283"
}, {"id": "1288", "county": "\u6e05\u6d41\u53bf", "parent": "1283"}, {
    "id": "1289",
    "county": "\u5b81\u5316\u53bf",
    "parent": "1283"
}, {"id": "1290", "county": "\u5927\u7530\u53bf", "parent": "1283"}, {
    "id": "1291",
    "county": "\u5c24\u6eaa\u53bf",
    "parent": "1283"
}, {"id": "1292", "county": "\u6c99\u53bf", "parent": "1283"}, {
    "id": "1293",
    "county": "\u5c06\u4e50\u53bf",
    "parent": "1283"
}, {"id": "1294", "county": "\u6cf0\u5b81\u53bf", "parent": "1283"}, {
    "id": "1295",
    "county": "\u5efa\u5b81\u53bf",
    "parent": "1283"
}, {"id": "1296", "county": "\u6c38\u5b89\u5e02", "parent": "1283"}, {
    "id": "1298",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1297"
}, {"id": "1299", "county": "\u9ca4\u57ce\u533a", "parent": "1297"}, {
    "id": "1300",
    "county": "\u4e30\u6cfd\u533a",
    "parent": "1297"
}, {"id": "1301", "county": "\u6d1b\u6c5f\u533a", "parent": "1297"}, {
    "id": "1302",
    "county": "\u6cc9\u6e2f\u533a",
    "parent": "1297"
}, {"id": "1303", "county": "\u60e0\u5b89\u53bf", "parent": "1297"}, {
    "id": "1304",
    "county": "\u5b89\u6eaa\u53bf",
    "parent": "1297"
}, {"id": "1305", "county": "\u6c38\u6625\u53bf", "parent": "1297"}, {
    "id": "1306",
    "county": "\u5fb7\u5316\u53bf",
    "parent": "1297"
}, {"id": "1307", "county": "\u91d1\u95e8\u53bf", "parent": "1297"}, {
    "id": "1308",
    "county": "\u77f3\u72ee\u5e02",
    "parent": "1297"
}, {"id": "1309", "county": "\u664b\u6c5f\u5e02", "parent": "1297"}, {
    "id": "1310",
    "county": "\u5357\u5b89\u5e02",
    "parent": "1297"
}, {"id": "1312", "county": "\u5e02\u8f96\u533a", "parent": "1311"}, {
    "id": "1313",
    "county": "\u8297\u57ce\u533a",
    "parent": "1311"
}, {"id": "1314", "county": "\u9f99\u6587\u533a", "parent": "1311"}, {
    "id": "1315",
    "county": "\u4e91\u9704\u53bf",
    "parent": "1311"
}, {"id": "1316", "county": "\u6f33\u6d66\u53bf", "parent": "1311"}, {
    "id": "1317",
    "county": "\u8bcf\u5b89\u53bf",
    "parent": "1311"
}, {"id": "1318", "county": "\u957f\u6cf0\u53bf", "parent": "1311"}, {
    "id": "1319",
    "county": "\u4e1c\u5c71\u53bf",
    "parent": "1311"
}, {"id": "1320", "county": "\u5357\u9756\u53bf", "parent": "1311"}, {
    "id": "1321",
    "county": "\u5e73\u548c\u53bf",
    "parent": "1311"
}, {"id": "1322", "county": "\u534e\u5b89\u53bf", "parent": "1311"}, {
    "id": "1323",
    "county": "\u9f99\u6d77\u5e02",
    "parent": "1311"
}, {"id": "1325", "county": "\u5e02\u8f96\u533a", "parent": "1324"}, {
    "id": "1326",
    "county": "\u5ef6\u5e73\u533a",
    "parent": "1324"
}, {"id": "1327", "county": "\u5efa\u9633\u533a", "parent": "1324"}, {
    "id": "1328",
    "county": "\u987a\u660c\u53bf",
    "parent": "1324"
}, {"id": "1329", "county": "\u6d66\u57ce\u53bf", "parent": "1324"}, {
    "id": "1330",
    "county": "\u5149\u6cfd\u53bf",
    "parent": "1324"
}, {"id": "1331", "county": "\u677e\u6eaa\u53bf", "parent": "1324"}, {
    "id": "1332",
    "county": "\u653f\u548c\u53bf",
    "parent": "1324"
}, {"id": "1333", "county": "\u90b5\u6b66\u5e02", "parent": "1324"}, {
    "id": "1334",
    "county": "\u6b66\u5937\u5c71\u5e02",
    "parent": "1324"
}, {"id": "1335", "county": "\u5efa\u74ef\u5e02", "parent": "1324"}, {
    "id": "1337",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1336"
}, {"id": "1338", "county": "\u65b0\u7f57\u533a", "parent": "1336"}, {
    "id": "1339",
    "county": "\u6c38\u5b9a\u533a",
    "parent": "1336"
}, {"id": "1340", "county": "\u957f\u6c40\u53bf", "parent": "1336"}, {
    "id": "1341",
    "county": "\u4e0a\u676d\u53bf",
    "parent": "1336"
}, {"id": "1342", "county": "\u6b66\u5e73\u53bf", "parent": "1336"}, {
    "id": "1343",
    "county": "\u8fde\u57ce\u53bf",
    "parent": "1336"
}, {"id": "1344", "county": "\u6f33\u5e73\u5e02", "parent": "1336"}, {
    "id": "1346",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1345"
}, {"id": "1347", "county": "\u8549\u57ce\u533a", "parent": "1345"}, {
    "id": "1348",
    "county": "\u971e\u6d66\u53bf",
    "parent": "1345"
}, {"id": "1349", "county": "\u53e4\u7530\u53bf", "parent": "1345"}, {
    "id": "1350",
    "county": "\u5c4f\u5357\u53bf",
    "parent": "1345"
}, {"id": "1351", "county": "\u5bff\u5b81\u53bf", "parent": "1345"}, {
    "id": "1352",
    "county": "\u5468\u5b81\u53bf",
    "parent": "1345"
}, {"id": "1353", "county": "\u67d8\u8363\u53bf", "parent": "1345"}, {
    "id": "1354",
    "county": "\u798f\u5b89\u5e02",
    "parent": "1345"
}, {"id": "1355", "county": "\u798f\u9f0e\u5e02", "parent": "1345"}, {
    "id": "1358",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1357"
}, {"id": "1359", "county": "\u4e1c\u6e56\u533a", "parent": "1357"}, {
    "id": "1360",
    "county": "\u897f\u6e56\u533a",
    "parent": "1357"
}, {"id": "1361", "county": "\u9752\u4e91\u8c31\u533a", "parent": "1357"}, {
    "id": "1362",
    "county": "\u6e7e\u91cc\u533a",
    "parent": "1357"
}, {"id": "1363", "county": "\u9752\u5c71\u6e56\u533a", "parent": "1357"}, {
    "id": "1364",
    "county": "\u5357\u660c\u53bf",
    "parent": "1357"
}, {"id": "1365", "county": "\u65b0\u5efa\u53bf", "parent": "1357"}, {
    "id": "1366",
    "county": "\u5b89\u4e49\u53bf",
    "parent": "1357"
}, {"id": "1367", "county": "\u8fdb\u8d24\u53bf", "parent": "1357"}, {
    "id": "1369",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1368"
}, {"id": "1370", "county": "\u660c\u6c5f\u533a", "parent": "1368"}, {
    "id": "1371",
    "county": "\u73e0\u5c71\u533a",
    "parent": "1368"
}, {"id": "1372", "county": "\u6d6e\u6881\u53bf", "parent": "1368"}, {
    "id": "1373",
    "county": "\u4e50\u5e73\u5e02",
    "parent": "1368"
}, {"id": "1375", "county": "\u5e02\u8f96\u533a", "parent": "1374"}, {
    "id": "1376",
    "county": "\u5b89\u6e90\u533a",
    "parent": "1374"
}, {"id": "1377", "county": "\u6e58\u4e1c\u533a", "parent": "1374"}, {
    "id": "1378",
    "county": "\u83b2\u82b1\u53bf",
    "parent": "1374"
}, {"id": "1379", "county": "\u4e0a\u6817\u53bf", "parent": "1374"}, {
    "id": "1380",
    "county": "\u82a6\u6eaa\u53bf",
    "parent": "1374"
}, {"id": "1382", "county": "\u5e02\u8f96\u533a", "parent": "1381"}, {
    "id": "1383",
    "county": "\u5e90\u5c71\u533a",
    "parent": "1381"
}, {"id": "1384", "county": "\u6d54\u9633\u533a", "parent": "1381"}, {
    "id": "1385",
    "county": "\u4e5d\u6c5f\u53bf",
    "parent": "1381"
}, {"id": "1386", "county": "\u6b66\u5b81\u53bf", "parent": "1381"}, {
    "id": "1387",
    "county": "\u4fee\u6c34\u53bf",
    "parent": "1381"
}, {"id": "1388", "county": "\u6c38\u4fee\u53bf", "parent": "1381"}, {
    "id": "1389",
    "county": "\u5fb7\u5b89\u53bf",
    "parent": "1381"
}, {"id": "1390", "county": "\u661f\u5b50\u53bf", "parent": "1381"}, {
    "id": "1391",
    "county": "\u90fd\u660c\u53bf",
    "parent": "1381"
}, {"id": "1392", "county": "\u6e56\u53e3\u53bf", "parent": "1381"}, {
    "id": "1393",
    "county": "\u5f6d\u6cfd\u53bf",
    "parent": "1381"
}, {"id": "1394", "county": "\u745e\u660c\u5e02", "parent": "1381"}, {
    "id": "1395",
    "county": "\u5171\u9752\u57ce\u5e02",
    "parent": "1381"
}, {"id": "1397", "county": "\u5e02\u8f96\u533a", "parent": "1396"}, {
    "id": "1398",
    "county": "\u6e1d\u6c34\u533a",
    "parent": "1396"
}, {"id": "1399", "county": "\u5206\u5b9c\u53bf", "parent": "1396"}, {
    "id": "1401",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1400"
}, {"id": "1402", "county": "\u6708\u6e56\u533a", "parent": "1400"}, {
    "id": "1403",
    "county": "\u4f59\u6c5f\u53bf",
    "parent": "1400"
}, {"id": "1404", "county": "\u8d35\u6eaa\u5e02", "parent": "1400"}, {
    "id": "1406",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1405"
}, {"id": "1407", "county": "\u7ae0\u8d21\u533a", "parent": "1405"}, {
    "id": "1408",
    "county": "\u5357\u5eb7\u533a",
    "parent": "1405"
}, {"id": "1409", "county": "\u8d63\u53bf", "parent": "1405"}, {
    "id": "1410",
    "county": "\u4fe1\u4e30\u53bf",
    "parent": "1405"
}, {"id": "1411", "county": "\u5927\u4f59\u53bf", "parent": "1405"}, {
    "id": "1412",
    "county": "\u4e0a\u72b9\u53bf",
    "parent": "1405"
}, {"id": "1413", "county": "\u5d07\u4e49\u53bf", "parent": "1405"}, {
    "id": "1414",
    "county": "\u5b89\u8fdc\u53bf",
    "parent": "1405"
}, {"id": "1415", "county": "\u9f99\u5357\u53bf", "parent": "1405"}, {
    "id": "1416",
    "county": "\u5b9a\u5357\u53bf",
    "parent": "1405"
}, {"id": "1417", "county": "\u5168\u5357\u53bf", "parent": "1405"}, {
    "id": "1418",
    "county": "\u5b81\u90fd\u53bf",
    "parent": "1405"
}, {"id": "1419", "county": "\u4e8e\u90fd\u53bf", "parent": "1405"}, {
    "id": "1420",
    "county": "\u5174\u56fd\u53bf",
    "parent": "1405"
}, {"id": "1421", "county": "\u4f1a\u660c\u53bf", "parent": "1405"}, {
    "id": "1422",
    "county": "\u5bfb\u4e4c\u53bf",
    "parent": "1405"
}, {"id": "1423", "county": "\u77f3\u57ce\u53bf", "parent": "1405"}, {
    "id": "1424",
    "county": "\u745e\u91d1\u5e02",
    "parent": "1405"
}, {"id": "1426", "county": "\u5e02\u8f96\u533a", "parent": "1425"}, {
    "id": "1427",
    "county": "\u5409\u5dde\u533a",
    "parent": "1425"
}, {"id": "1428", "county": "\u9752\u539f\u533a", "parent": "1425"}, {
    "id": "1429",
    "county": "\u5409\u5b89\u53bf",
    "parent": "1425"
}, {"id": "1430", "county": "\u5409\u6c34\u53bf", "parent": "1425"}, {
    "id": "1431",
    "county": "\u5ce1\u6c5f\u53bf",
    "parent": "1425"
}, {"id": "1432", "county": "\u65b0\u5e72\u53bf", "parent": "1425"}, {
    "id": "1433",
    "county": "\u6c38\u4e30\u53bf",
    "parent": "1425"
}, {"id": "1434", "county": "\u6cf0\u548c\u53bf", "parent": "1425"}, {
    "id": "1435",
    "county": "\u9042\u5ddd\u53bf",
    "parent": "1425"
}, {"id": "1436", "county": "\u4e07\u5b89\u53bf", "parent": "1425"}, {
    "id": "1437",
    "county": "\u5b89\u798f\u53bf",
    "parent": "1425"
}, {"id": "1438", "county": "\u6c38\u65b0\u53bf", "parent": "1425"}, {
    "id": "1439",
    "county": "\u4e95\u5188\u5c71\u5e02",
    "parent": "1425"
}, {"id": "1441", "county": "\u5e02\u8f96\u533a", "parent": "1440"}, {
    "id": "1442",
    "county": "\u8881\u5dde\u533a",
    "parent": "1440"
}, {"id": "1443", "county": "\u5949\u65b0\u53bf", "parent": "1440"}, {
    "id": "1444",
    "county": "\u4e07\u8f7d\u53bf",
    "parent": "1440"
}, {"id": "1445", "county": "\u4e0a\u9ad8\u53bf", "parent": "1440"}, {
    "id": "1446",
    "county": "\u5b9c\u4e30\u53bf",
    "parent": "1440"
}, {"id": "1447", "county": "\u9756\u5b89\u53bf", "parent": "1440"}, {
    "id": "1448",
    "county": "\u94dc\u9f13\u53bf",
    "parent": "1440"
}, {"id": "1449", "county": "\u4e30\u57ce\u5e02", "parent": "1440"}, {
    "id": "1450",
    "county": "\u6a1f\u6811\u5e02",
    "parent": "1440"
}, {"id": "1451", "county": "\u9ad8\u5b89\u5e02", "parent": "1440"}, {
    "id": "1453",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1452"
}, {"id": "1454", "county": "\u4e34\u5ddd\u533a", "parent": "1452"}, {
    "id": "1455",
    "county": "\u5357\u57ce\u53bf",
    "parent": "1452"
}, {"id": "1456", "county": "\u9ece\u5ddd\u53bf", "parent": "1452"}, {
    "id": "1457",
    "county": "\u5357\u4e30\u53bf",
    "parent": "1452"
}, {"id": "1458", "county": "\u5d07\u4ec1\u53bf", "parent": "1452"}, {
    "id": "1459",
    "county": "\u4e50\u5b89\u53bf",
    "parent": "1452"
}, {"id": "1460", "county": "\u5b9c\u9ec4\u53bf", "parent": "1452"}, {
    "id": "1461",
    "county": "\u91d1\u6eaa\u53bf",
    "parent": "1452"
}, {"id": "1462", "county": "\u8d44\u6eaa\u53bf", "parent": "1452"}, {
    "id": "1463",
    "county": "\u4e1c\u4e61\u53bf",
    "parent": "1452"
}, {"id": "1464", "county": "\u5e7f\u660c\u53bf", "parent": "1452"}, {
    "id": "1466",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1465"
}, {"id": "1467", "county": "\u4fe1\u5dde\u533a", "parent": "1465"}, {
    "id": "1468",
    "county": "\u4e0a\u9976\u53bf",
    "parent": "1465"
}, {"id": "1469", "county": "\u5e7f\u4e30\u53bf", "parent": "1465"}, {
    "id": "1470",
    "county": "\u7389\u5c71\u53bf",
    "parent": "1465"
}, {"id": "1471", "county": "\u94c5\u5c71\u53bf", "parent": "1465"}, {
    "id": "1472",
    "county": "\u6a2a\u5cf0\u53bf",
    "parent": "1465"
}, {"id": "1473", "county": "\u5f0b\u9633\u53bf", "parent": "1465"}, {
    "id": "1474",
    "county": "\u4f59\u5e72\u53bf",
    "parent": "1465"
}, {"id": "1475", "county": "\u9131\u9633\u53bf", "parent": "1465"}, {
    "id": "1476",
    "county": "\u4e07\u5e74\u53bf",
    "parent": "1465"
}, {"id": "1477", "county": "\u5a7a\u6e90\u53bf", "parent": "1465"}, {
    "id": "1478",
    "county": "\u5fb7\u5174\u5e02",
    "parent": "1465"
}, {"id": "1481", "county": "\u5e02\u8f96\u533a", "parent": "1480"}, {
    "id": "1482",
    "county": "\u5386\u4e0b\u533a",
    "parent": "1480"
}, {"id": "1483", "county": "\u5e02\u4e2d\u533a", "parent": "1480"}, {
    "id": "1484",
    "county": "\u69d0\u836b\u533a",
    "parent": "1480"
}, {"id": "1485", "county": "\u5929\u6865\u533a", "parent": "1480"}, {
    "id": "1486",
    "county": "\u5386\u57ce\u533a",
    "parent": "1480"
}, {"id": "1487", "county": "\u957f\u6e05\u533a", "parent": "1480"}, {
    "id": "1488",
    "county": "\u5e73\u9634\u53bf",
    "parent": "1480"
}, {"id": "1489", "county": "\u6d4e\u9633\u53bf", "parent": "1480"}, {
    "id": "1490",
    "county": "\u5546\u6cb3\u53bf",
    "parent": "1480"
}, {"id": "1491", "county": "\u7ae0\u4e18\u5e02", "parent": "1480"}, {
    "id": "1493",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1492"
}, {"id": "1494", "county": "\u5e02\u5357\u533a", "parent": "1492"}, {
    "id": "1495",
    "county": "\u5e02\u5317\u533a",
    "parent": "1492"
}, {"id": "1496", "county": "\u9ec4\u5c9b\u533a", "parent": "1492"}, {
    "id": "1497",
    "county": "\u5d02\u5c71\u533a",
    "parent": "1492"
}, {"id": "1498", "county": "\u674e\u6ca7\u533a", "parent": "1492"}, {
    "id": "1499",
    "county": "\u57ce\u9633\u533a",
    "parent": "1492"
}, {"id": "1500", "county": "\u80f6\u5dde\u5e02", "parent": "1492"}, {
    "id": "1501",
    "county": "\u5373\u58a8\u5e02",
    "parent": "1492"
}, {"id": "1502", "county": "\u5e73\u5ea6\u5e02", "parent": "1492"}, {
    "id": "1503",
    "county": "\u83b1\u897f\u5e02",
    "parent": "1492"
}, {"id": "1505", "county": "\u5e02\u8f96\u533a", "parent": "1504"}, {
    "id": "1506",
    "county": "\u6dc4\u5ddd\u533a",
    "parent": "1504"
}, {"id": "1507", "county": "\u5f20\u5e97\u533a", "parent": "1504"}, {
    "id": "1508",
    "county": "\u535a\u5c71\u533a",
    "parent": "1504"
}, {"id": "1509", "county": "\u4e34\u6dc4\u533a", "parent": "1504"}, {
    "id": "1510",
    "county": "\u5468\u6751\u533a",
    "parent": "1504"
}, {"id": "1511", "county": "\u6853\u53f0\u53bf", "parent": "1504"}, {
    "id": "1512",
    "county": "\u9ad8\u9752\u53bf",
    "parent": "1504"
}, {"id": "1513", "county": "\u6c82\u6e90\u53bf", "parent": "1504"}, {
    "id": "1515",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1514"
}, {"id": "1516", "county": "\u5e02\u4e2d\u533a", "parent": "1514"}, {
    "id": "1517",
    "county": "\u859b\u57ce\u533a",
    "parent": "1514"
}, {"id": "1518", "county": "\u5cc4\u57ce\u533a", "parent": "1514"}, {
    "id": "1519",
    "county": "\u53f0\u513f\u5e84\u533a",
    "parent": "1514"
}, {"id": "1520", "county": "\u5c71\u4ead\u533a", "parent": "1514"}, {
    "id": "1521",
    "county": "\u6ed5\u5dde\u5e02",
    "parent": "1514"
}, {"id": "1523", "county": "\u5e02\u8f96\u533a", "parent": "1522"}, {
    "id": "1524",
    "county": "\u4e1c\u8425\u533a",
    "parent": "1522"
}, {"id": "1525", "county": "\u6cb3\u53e3\u533a", "parent": "1522"}, {
    "id": "1526",
    "county": "\u57a6\u5229\u53bf",
    "parent": "1522"
}, {"id": "1527", "county": "\u5229\u6d25\u53bf", "parent": "1522"}, {
    "id": "1528",
    "county": "\u5e7f\u9976\u53bf",
    "parent": "1522"
}, {"id": "1530", "county": "\u5e02\u8f96\u533a", "parent": "1529"}, {
    "id": "1531",
    "county": "\u829d\u7f58\u533a",
    "parent": "1529"
}, {"id": "1532", "county": "\u798f\u5c71\u533a", "parent": "1529"}, {
    "id": "1533",
    "county": "\u725f\u5e73\u533a",
    "parent": "1529"
}, {"id": "1534", "county": "\u83b1\u5c71\u533a", "parent": "1529"}, {
    "id": "1535",
    "county": "\u957f\u5c9b\u53bf",
    "parent": "1529"
}, {"id": "1536", "county": "\u9f99\u53e3\u5e02", "parent": "1529"}, {
    "id": "1537",
    "county": "\u83b1\u9633\u5e02",
    "parent": "1529"
}, {"id": "1538", "county": "\u83b1\u5dde\u5e02", "parent": "1529"}, {
    "id": "1539",
    "county": "\u84ec\u83b1\u5e02",
    "parent": "1529"
}, {"id": "1540", "county": "\u62db\u8fdc\u5e02", "parent": "1529"}, {
    "id": "1541",
    "county": "\u6816\u971e\u5e02",
    "parent": "1529"
}, {"id": "1542", "county": "\u6d77\u9633\u5e02", "parent": "1529"}, {
    "id": "1544",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1543"
}, {"id": "1545", "county": "\u6f4d\u57ce\u533a", "parent": "1543"}, {
    "id": "1546",
    "county": "\u5bd2\u4ead\u533a",
    "parent": "1543"
}, {"id": "1547", "county": "\u574a\u5b50\u533a", "parent": "1543"}, {
    "id": "1548",
    "county": "\u594e\u6587\u533a",
    "parent": "1543"
}, {"id": "1549", "county": "\u4e34\u6710\u53bf", "parent": "1543"}, {
    "id": "1550",
    "county": "\u660c\u4e50\u53bf",
    "parent": "1543"
}, {"id": "1551", "county": "\u9752\u5dde\u5e02", "parent": "1543"}, {
    "id": "1552",
    "county": "\u8bf8\u57ce\u5e02",
    "parent": "1543"
}, {"id": "1553", "county": "\u5bff\u5149\u5e02", "parent": "1543"}, {
    "id": "1554",
    "county": "\u5b89\u4e18\u5e02",
    "parent": "1543"
}, {"id": "1555", "county": "\u9ad8\u5bc6\u5e02", "parent": "1543"}, {
    "id": "1556",
    "county": "\u660c\u9091\u5e02",
    "parent": "1543"
}, {"id": "1558", "county": "\u5e02\u8f96\u533a", "parent": "1557"}, {
    "id": "1559",
    "county": "\u4efb\u57ce\u533a",
    "parent": "1557"
}, {"id": "1560", "county": "\u5156\u5dde\u533a", "parent": "1557"}, {
    "id": "1561",
    "county": "\u5fae\u5c71\u53bf",
    "parent": "1557"
}, {"id": "1562", "county": "\u9c7c\u53f0\u53bf", "parent": "1557"}, {
    "id": "1563",
    "county": "\u91d1\u4e61\u53bf",
    "parent": "1557"
}, {"id": "1564", "county": "\u5609\u7965\u53bf", "parent": "1557"}, {
    "id": "1565",
    "county": "\u6c76\u4e0a\u53bf",
    "parent": "1557"
}, {"id": "1566", "county": "\u6cd7\u6c34\u53bf", "parent": "1557"}, {
    "id": "1567",
    "county": "\u6881\u5c71\u53bf",
    "parent": "1557"
}, {"id": "1568", "county": "\u66f2\u961c\u5e02", "parent": "1557"}, {
    "id": "1569",
    "county": "\u90b9\u57ce\u5e02",
    "parent": "1557"
}, {"id": "1571", "county": "\u5e02\u8f96\u533a", "parent": "1570"}, {
    "id": "1572",
    "county": "\u6cf0\u5c71\u533a",
    "parent": "1570"
}, {"id": "1573", "county": "\u5cb1\u5cb3\u533a", "parent": "1570"}, {
    "id": "1574",
    "county": "\u5b81\u9633\u53bf",
    "parent": "1570"
}, {"id": "1575", "county": "\u4e1c\u5e73\u53bf", "parent": "1570"}, {
    "id": "1576",
    "county": "\u65b0\u6cf0\u5e02",
    "parent": "1570"
}, {"id": "1577", "county": "\u80a5\u57ce\u5e02", "parent": "1570"}, {
    "id": "1579",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1578"
}, {"id": "1580", "county": "\u73af\u7fe0\u533a", "parent": "1578"}, {
    "id": "1581",
    "county": "\u6587\u767b\u5e02",
    "parent": "1578"
}, {"id": "1582", "county": "\u8363\u6210\u5e02", "parent": "1578"}, {
    "id": "1583",
    "county": "\u4e73\u5c71\u5e02",
    "parent": "1578"
}, {"id": "1585", "county": "\u5e02\u8f96\u533a", "parent": "1584"}, {
    "id": "1586",
    "county": "\u4e1c\u6e2f\u533a",
    "parent": "1584"
}, {"id": "1587", "county": "\u5c9a\u5c71\u533a", "parent": "1584"}, {
    "id": "1588",
    "county": "\u4e94\u83b2\u53bf",
    "parent": "1584"
}, {"id": "1589", "county": "\u8392\u53bf", "parent": "1584"}, {
    "id": "1591",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1590"
}, {"id": "1592", "county": "\u83b1\u57ce\u533a", "parent": "1590"}, {
    "id": "1593",
    "county": "\u94a2\u57ce\u533a",
    "parent": "1590"
}, {"id": "1595", "county": "\u5e02\u8f96\u533a", "parent": "1594"}, {
    "id": "1596",
    "county": "\u5170\u5c71\u533a",
    "parent": "1594"
}, {"id": "1597", "county": "\u7f57\u5e84\u533a", "parent": "1594"}, {
    "id": "1598",
    "county": "\u6cb3\u4e1c\u533a",
    "parent": "1594"
}, {"id": "1599", "county": "\u6c82\u5357\u53bf", "parent": "1594"}, {
    "id": "1600",
    "county": "\u90ef\u57ce\u53bf",
    "parent": "1594"
}, {"id": "1601", "county": "\u6c82\u6c34\u53bf", "parent": "1594"}, {
    "id": "1602",
    "county": "\u5170\u9675\u53bf",
    "parent": "1594"
}, {"id": "1603", "county": "\u8d39\u53bf", "parent": "1594"}, {
    "id": "1604",
    "county": "\u5e73\u9091\u53bf",
    "parent": "1594"
}, {"id": "1605", "county": "\u8392\u5357\u53bf", "parent": "1594"}, {
    "id": "1606",
    "county": "\u8499\u9634\u53bf",
    "parent": "1594"
}, {"id": "1607", "county": "\u4e34\u6cad\u53bf", "parent": "1594"}, {
    "id": "1609",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1608"
}, {"id": "1610", "county": "\u5fb7\u57ce\u533a", "parent": "1608"}, {
    "id": "1611",
    "county": "\u9675\u57ce\u533a",
    "parent": "1608"
}, {"id": "1612", "county": "\u5b81\u6d25\u53bf", "parent": "1608"}, {
    "id": "1613",
    "county": "\u5e86\u4e91\u53bf",
    "parent": "1608"
}, {"id": "1614", "county": "\u4e34\u9091\u53bf", "parent": "1608"}, {
    "id": "1615",
    "county": "\u9f50\u6cb3\u53bf",
    "parent": "1608"
}, {"id": "1616", "county": "\u5e73\u539f\u53bf", "parent": "1608"}, {
    "id": "1617",
    "county": "\u590f\u6d25\u53bf",
    "parent": "1608"
}, {"id": "1618", "county": "\u6b66\u57ce\u53bf", "parent": "1608"}, {
    "id": "1619",
    "county": "\u4e50\u9675\u5e02",
    "parent": "1608"
}, {"id": "1620", "county": "\u79b9\u57ce\u5e02", "parent": "1608"}, {
    "id": "1622",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1621"
}, {"id": "1623", "county": "\u4e1c\u660c\u5e9c\u533a", "parent": "1621"}, {
    "id": "1624",
    "county": "\u9633\u8c37\u53bf",
    "parent": "1621"
}, {"id": "1625", "county": "\u8398\u53bf", "parent": "1621"}, {
    "id": "1626",
    "county": "\u830c\u5e73\u53bf",
    "parent": "1621"
}, {"id": "1627", "county": "\u4e1c\u963f\u53bf", "parent": "1621"}, {
    "id": "1628",
    "county": "\u51a0\u53bf",
    "parent": "1621"
}, {"id": "1629", "county": "\u9ad8\u5510\u53bf", "parent": "1621"}, {
    "id": "1630",
    "county": "\u4e34\u6e05\u5e02",
    "parent": "1621"
}, {"id": "1632", "county": "\u5e02\u8f96\u533a", "parent": "1631"}, {
    "id": "1633",
    "county": "\u6ee8\u57ce\u533a",
    "parent": "1631"
}, {"id": "1634", "county": "\u6cbe\u5316\u533a", "parent": "1631"}, {
    "id": "1635",
    "county": "\u60e0\u6c11\u53bf",
    "parent": "1631"
}, {"id": "1636", "county": "\u9633\u4fe1\u53bf", "parent": "1631"}, {
    "id": "1637",
    "county": "\u65e0\u68e3\u53bf",
    "parent": "1631"
}, {"id": "1638", "county": "\u535a\u5174\u53bf", "parent": "1631"}, {
    "id": "1639",
    "county": "\u90b9\u5e73\u53bf",
    "parent": "1631"
}, {"id": "1641", "county": "\u5e02\u8f96\u533a", "parent": "1640"}, {
    "id": "1642",
    "county": "\u7261\u4e39\u533a",
    "parent": "1640"
}, {"id": "1643", "county": "\u66f9\u53bf", "parent": "1640"}, {
    "id": "1644",
    "county": "\u5355\u53bf",
    "parent": "1640"
}, {"id": "1645", "county": "\u6210\u6b66\u53bf", "parent": "1640"}, {
    "id": "1646",
    "county": "\u5de8\u91ce\u53bf",
    "parent": "1640"
}, {"id": "1647", "county": "\u90d3\u57ce\u53bf", "parent": "1640"}, {
    "id": "1648",
    "county": "\u9104\u57ce\u53bf",
    "parent": "1640"
}, {"id": "1649", "county": "\u5b9a\u9676\u53bf", "parent": "1640"}, {
    "id": "1650",
    "county": "\u4e1c\u660e\u53bf",
    "parent": "1640"
}, {"id": "1653", "county": "\u5e02\u8f96\u533a", "parent": "1652"}, {
    "id": "1654",
    "county": "\u4e2d\u539f\u533a",
    "parent": "1652"
}, {"id": "1655", "county": "\u4e8c\u4e03\u533a", "parent": "1652"}, {
    "id": "1656",
    "county": "\u7ba1\u57ce\u56de\u65cf\u533a",
    "parent": "1652"
}, {"id": "1657", "county": "\u91d1\u6c34\u533a", "parent": "1652"}, {
    "id": "1658",
    "county": "\u4e0a\u8857\u533a",
    "parent": "1652"
}, {"id": "1659", "county": "\u60e0\u6d4e\u533a", "parent": "1652"}, {
    "id": "1660",
    "county": "\u4e2d\u725f\u53bf",
    "parent": "1652"
}, {"id": "1661", "county": "\u5de9\u4e49\u5e02", "parent": "1652"}, {
    "id": "1662",
    "county": "\u8365\u9633\u5e02",
    "parent": "1652"
}, {"id": "1663", "county": "\u65b0\u5bc6\u5e02", "parent": "1652"}, {
    "id": "1664",
    "county": "\u65b0\u90d1\u5e02",
    "parent": "1652"
}, {"id": "1665", "county": "\u767b\u5c01\u5e02", "parent": "1652"}, {
    "id": "1667",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1666"
}, {"id": "1668", "county": "\u9f99\u4ead\u533a", "parent": "1666"}, {
    "id": "1669",
    "county": "\u987a\u6cb3\u56de\u65cf\u533a",
    "parent": "1666"
}, {"id": "1670", "county": "\u9f13\u697c\u533a", "parent": "1666"}, {
    "id": "1671",
    "county": "\u79b9\u738b\u53f0\u533a",
    "parent": "1666"
}, {"id": "1672", "county": "\u7965\u7b26\u533a", "parent": "1666"}, {
    "id": "1673",
    "county": "\u675e\u53bf",
    "parent": "1666"
}, {"id": "1674", "county": "\u901a\u8bb8\u53bf", "parent": "1666"}, {
    "id": "1675",
    "county": "\u5c09\u6c0f\u53bf",
    "parent": "1666"
}, {"id": "1676", "county": "\u5170\u8003\u53bf", "parent": "1666"}, {
    "id": "1678",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1677"
}, {"id": "1679", "county": "\u8001\u57ce\u533a", "parent": "1677"}, {
    "id": "1680",
    "county": "\u897f\u5de5\u533a",
    "parent": "1677"
}, {"id": "1681", "county": "\u700d\u6cb3\u56de\u65cf\u533a", "parent": "1677"}, {
    "id": "1682",
    "county": "\u6da7\u897f\u533a",
    "parent": "1677"
}, {"id": "1683", "county": "\u5409\u5229\u533a", "parent": "1677"}, {
    "id": "1684",
    "county": "\u6d1b\u9f99\u533a",
    "parent": "1677"
}, {"id": "1685", "county": "\u5b5f\u6d25\u53bf", "parent": "1677"}, {
    "id": "1686",
    "county": "\u65b0\u5b89\u53bf",
    "parent": "1677"
}, {"id": "1687", "county": "\u683e\u5ddd\u53bf", "parent": "1677"}, {
    "id": "1688",
    "county": "\u5d69\u53bf",
    "parent": "1677"
}, {"id": "1689", "county": "\u6c5d\u9633\u53bf", "parent": "1677"}, {
    "id": "1690",
    "county": "\u5b9c\u9633\u53bf",
    "parent": "1677"
}, {"id": "1691", "county": "\u6d1b\u5b81\u53bf", "parent": "1677"}, {
    "id": "1692",
    "county": "\u4f0a\u5ddd\u53bf",
    "parent": "1677"
}, {"id": "1693", "county": "\u5043\u5e08\u5e02", "parent": "1677"}, {
    "id": "1695",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1694"
}, {"id": "1696", "county": "\u65b0\u534e\u533a", "parent": "1694"}, {
    "id": "1697",
    "county": "\u536b\u4e1c\u533a",
    "parent": "1694"
}, {"id": "1698", "county": "\u77f3\u9f99\u533a", "parent": "1694"}, {
    "id": "1699",
    "county": "\u6e5b\u6cb3\u533a",
    "parent": "1694"
}, {"id": "1700", "county": "\u5b9d\u4e30\u53bf", "parent": "1694"}, {
    "id": "1701",
    "county": "\u53f6\u53bf",
    "parent": "1694"
}, {"id": "1702", "county": "\u9c81\u5c71\u53bf", "parent": "1694"}, {
    "id": "1703",
    "county": "\u90cf\u53bf",
    "parent": "1694"
}, {"id": "1704", "county": "\u821e\u94a2\u5e02", "parent": "1694"}, {
    "id": "1705",
    "county": "\u6c5d\u5dde\u5e02",
    "parent": "1694"
}, {"id": "1707", "county": "\u5e02\u8f96\u533a", "parent": "1706"}, {
    "id": "1708",
    "county": "\u6587\u5cf0\u533a",
    "parent": "1706"
}, {"id": "1709", "county": "\u5317\u5173\u533a", "parent": "1706"}, {
    "id": "1710",
    "county": "\u6bb7\u90fd\u533a",
    "parent": "1706"
}, {"id": "1711", "county": "\u9f99\u5b89\u533a", "parent": "1706"}, {
    "id": "1712",
    "county": "\u5b89\u9633\u53bf",
    "parent": "1706"
}, {"id": "1713", "county": "\u6c64\u9634\u53bf", "parent": "1706"}, {
    "id": "1714",
    "county": "\u6ed1\u53bf",
    "parent": "1706"
}, {"id": "1715", "county": "\u5185\u9ec4\u53bf", "parent": "1706"}, {
    "id": "1716",
    "county": "\u6797\u5dde\u5e02",
    "parent": "1706"
}, {"id": "1718", "county": "\u5e02\u8f96\u533a", "parent": "1717"}, {
    "id": "1719",
    "county": "\u9e64\u5c71\u533a",
    "parent": "1717"
}, {"id": "1720", "county": "\u5c71\u57ce\u533a", "parent": "1717"}, {
    "id": "1721",
    "county": "\u6dc7\u6ee8\u533a",
    "parent": "1717"
}, {"id": "1722", "county": "\u6d5a\u53bf", "parent": "1717"}, {
    "id": "1723",
    "county": "\u6dc7\u53bf",
    "parent": "1717"
}, {"id": "1725", "county": "\u5e02\u8f96\u533a", "parent": "1724"}, {
    "id": "1726",
    "county": "\u7ea2\u65d7\u533a",
    "parent": "1724"
}, {"id": "1727", "county": "\u536b\u6ee8\u533a", "parent": "1724"}, {
    "id": "1728",
    "county": "\u51e4\u6cc9\u533a",
    "parent": "1724"
}, {"id": "1729", "county": "\u7267\u91ce\u533a", "parent": "1724"}, {
    "id": "1730",
    "county": "\u65b0\u4e61\u53bf",
    "parent": "1724"
}, {"id": "1731", "county": "\u83b7\u5609\u53bf", "parent": "1724"}, {
    "id": "1732",
    "county": "\u539f\u9633\u53bf",
    "parent": "1724"
}, {"id": "1733", "county": "\u5ef6\u6d25\u53bf", "parent": "1724"}, {
    "id": "1734",
    "county": "\u5c01\u4e18\u53bf",
    "parent": "1724"
}, {"id": "1735", "county": "\u957f\u57a3\u53bf", "parent": "1724"}, {
    "id": "1736",
    "county": "\u536b\u8f89\u5e02",
    "parent": "1724"
}, {"id": "1737", "county": "\u8f89\u53bf\u5e02", "parent": "1724"}, {
    "id": "1739",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1738"
}, {"id": "1740", "county": "\u89e3\u653e\u533a", "parent": "1738"}, {
    "id": "1741",
    "county": "\u4e2d\u7ad9\u533a",
    "parent": "1738"
}, {"id": "1742", "county": "\u9a6c\u6751\u533a", "parent": "1738"}, {
    "id": "1743",
    "county": "\u5c71\u9633\u533a",
    "parent": "1738"
}, {"id": "1744", "county": "\u4fee\u6b66\u53bf", "parent": "1738"}, {
    "id": "1745",
    "county": "\u535a\u7231\u53bf",
    "parent": "1738"
}, {"id": "1746", "county": "\u6b66\u965f\u53bf", "parent": "1738"}, {
    "id": "1747",
    "county": "\u6e29\u53bf",
    "parent": "1738"
}, {"id": "1748", "county": "\u6c81\u9633\u5e02", "parent": "1738"}, {
    "id": "1749",
    "county": "\u5b5f\u5dde\u5e02",
    "parent": "1738"
}, {"id": "1751", "county": "\u5e02\u8f96\u533a", "parent": "1750"}, {
    "id": "1752",
    "county": "\u534e\u9f99\u533a",
    "parent": "1750"
}, {"id": "1753", "county": "\u6e05\u4e30\u53bf", "parent": "1750"}, {
    "id": "1754",
    "county": "\u5357\u4e50\u53bf",
    "parent": "1750"
}, {"id": "1755", "county": "\u8303\u53bf", "parent": "1750"}, {
    "id": "1756",
    "county": "\u53f0\u524d\u53bf",
    "parent": "1750"
}, {"id": "1757", "county": "\u6fee\u9633\u53bf", "parent": "1750"}, {
    "id": "1759",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1758"
}, {"id": "1760", "county": "\u9b4f\u90fd\u533a", "parent": "1758"}, {
    "id": "1761",
    "county": "\u8bb8\u660c\u53bf",
    "parent": "1758"
}, {"id": "1762", "county": "\u9122\u9675\u53bf", "parent": "1758"}, {
    "id": "1763",
    "county": "\u8944\u57ce\u53bf",
    "parent": "1758"
}, {"id": "1764", "county": "\u79b9\u5dde\u5e02", "parent": "1758"}, {
    "id": "1765",
    "county": "\u957f\u845b\u5e02",
    "parent": "1758"
}, {"id": "1767", "county": "\u5e02\u8f96\u533a", "parent": "1766"}, {
    "id": "1768",
    "county": "\u6e90\u6c47\u533a",
    "parent": "1766"
}, {"id": "1769", "county": "\u90fe\u57ce\u533a", "parent": "1766"}, {
    "id": "1770",
    "county": "\u53ec\u9675\u533a",
    "parent": "1766"
}, {"id": "1771", "county": "\u821e\u9633\u53bf", "parent": "1766"}, {
    "id": "1772",
    "county": "\u4e34\u988d\u53bf",
    "parent": "1766"
}, {"id": "1774", "county": "\u5e02\u8f96\u533a", "parent": "1773"}, {
    "id": "1775",
    "county": "\u6e56\u6ee8\u533a",
    "parent": "1773"
}, {"id": "1776", "county": "\u6e11\u6c60\u53bf", "parent": "1773"}, {
    "id": "1777",
    "county": "\u9655\u53bf",
    "parent": "1773"
}, {"id": "1778", "county": "\u5362\u6c0f\u53bf", "parent": "1773"}, {
    "id": "1779",
    "county": "\u4e49\u9a6c\u5e02",
    "parent": "1773"
}, {"id": "1780", "county": "\u7075\u5b9d\u5e02", "parent": "1773"}, {
    "id": "1782",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1781"
}, {"id": "1783", "county": "\u5b9b\u57ce\u533a", "parent": "1781"}, {
    "id": "1784",
    "county": "\u5367\u9f99\u533a",
    "parent": "1781"
}, {"id": "1785", "county": "\u5357\u53ec\u53bf", "parent": "1781"}, {
    "id": "1786",
    "county": "\u65b9\u57ce\u53bf",
    "parent": "1781"
}, {"id": "1787", "county": "\u897f\u5ce1\u53bf", "parent": "1781"}, {
    "id": "1788",
    "county": "\u9547\u5e73\u53bf",
    "parent": "1781"
}, {"id": "1789", "county": "\u5185\u4e61\u53bf", "parent": "1781"}, {
    "id": "1790",
    "county": "\u6dc5\u5ddd\u53bf",
    "parent": "1781"
}, {"id": "1791", "county": "\u793e\u65d7\u53bf", "parent": "1781"}, {
    "id": "1792",
    "county": "\u5510\u6cb3\u53bf",
    "parent": "1781"
}, {"id": "1793", "county": "\u65b0\u91ce\u53bf", "parent": "1781"}, {
    "id": "1794",
    "county": "\u6850\u67cf\u53bf",
    "parent": "1781"
}, {"id": "1795", "county": "\u9093\u5dde\u5e02", "parent": "1781"}, {
    "id": "1797",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1796"
}, {"id": "1798", "county": "\u6881\u56ed\u533a", "parent": "1796"}, {
    "id": "1799",
    "county": "\u7762\u9633\u533a",
    "parent": "1796"
}, {"id": "1800", "county": "\u6c11\u6743\u53bf", "parent": "1796"}, {
    "id": "1801",
    "county": "\u7762\u53bf",
    "parent": "1796"
}, {"id": "1802", "county": "\u5b81\u9675\u53bf", "parent": "1796"}, {
    "id": "1803",
    "county": "\u67d8\u57ce\u53bf",
    "parent": "1796"
}, {"id": "1804", "county": "\u865e\u57ce\u53bf", "parent": "1796"}, {
    "id": "1805",
    "county": "\u590f\u9091\u53bf",
    "parent": "1796"
}, {"id": "1806", "county": "\u6c38\u57ce\u5e02", "parent": "1796"}, {
    "id": "1808",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1807"
}, {"id": "1809", "county": "\u6d49\u6cb3\u533a", "parent": "1807"}, {
    "id": "1810",
    "county": "\u5e73\u6865\u533a",
    "parent": "1807"
}, {"id": "1811", "county": "\u7f57\u5c71\u53bf", "parent": "1807"}, {
    "id": "1812",
    "county": "\u5149\u5c71\u53bf",
    "parent": "1807"
}, {"id": "1813", "county": "\u65b0\u53bf", "parent": "1807"}, {
    "id": "1814",
    "county": "\u5546\u57ce\u53bf",
    "parent": "1807"
}, {"id": "1815", "county": "\u56fa\u59cb\u53bf", "parent": "1807"}, {
    "id": "1816",
    "county": "\u6f62\u5ddd\u53bf",
    "parent": "1807"
}, {"id": "1817", "county": "\u6dee\u6ee8\u53bf", "parent": "1807"}, {
    "id": "1818",
    "county": "\u606f\u53bf",
    "parent": "1807"
}, {"id": "1820", "county": "\u5e02\u8f96\u533a", "parent": "1819"}, {
    "id": "1821",
    "county": "\u5ddd\u6c47\u533a",
    "parent": "1819"
}, {"id": "1822", "county": "\u6276\u6c9f\u53bf", "parent": "1819"}, {
    "id": "1823",
    "county": "\u897f\u534e\u53bf",
    "parent": "1819"
}, {"id": "1824", "county": "\u5546\u6c34\u53bf", "parent": "1819"}, {
    "id": "1825",
    "county": "\u6c88\u4e18\u53bf",
    "parent": "1819"
}, {"id": "1826", "county": "\u90f8\u57ce\u53bf", "parent": "1819"}, {
    "id": "1827",
    "county": "\u6dee\u9633\u53bf",
    "parent": "1819"
}, {"id": "1828", "county": "\u592a\u5eb7\u53bf", "parent": "1819"}, {
    "id": "1829",
    "county": "\u9e7f\u9091\u53bf",
    "parent": "1819"
}, {"id": "1830", "county": "\u9879\u57ce\u5e02", "parent": "1819"}, {
    "id": "1832",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1831"
}, {"id": "1833", "county": "\u9a7f\u57ce\u533a", "parent": "1831"}, {
    "id": "1834",
    "county": "\u897f\u5e73\u53bf",
    "parent": "1831"
}, {"id": "1835", "county": "\u4e0a\u8521\u53bf", "parent": "1831"}, {
    "id": "1836",
    "county": "\u5e73\u8206\u53bf",
    "parent": "1831"
}, {"id": "1837", "county": "\u6b63\u9633\u53bf", "parent": "1831"}, {
    "id": "1838",
    "county": "\u786e\u5c71\u53bf",
    "parent": "1831"
}, {"id": "1839", "county": "\u6ccc\u9633\u53bf", "parent": "1831"}, {
    "id": "1840",
    "county": "\u6c5d\u5357\u53bf",
    "parent": "1831"
}, {"id": "1841", "county": "\u9042\u5e73\u53bf", "parent": "1831"}, {
    "id": "1842",
    "county": "\u65b0\u8521\u53bf",
    "parent": "1831"
}, {"id": "1844", "county": "\u6d4e\u6e90\u5e02", "parent": "1843"}, {
    "id": "1847",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1846"
}, {"id": "1848", "county": "\u6c5f\u5cb8\u533a", "parent": "1846"}, {
    "id": "1849",
    "county": "\u6c5f\u6c49\u533a",
    "parent": "1846"
}, {"id": "1850", "county": "\u785a\u53e3\u533a", "parent": "1846"}, {
    "id": "1851",
    "county": "\u6c49\u9633\u533a",
    "parent": "1846"
}, {"id": "1852", "county": "\u6b66\u660c\u533a", "parent": "1846"}, {
    "id": "1853",
    "county": "\u9752\u5c71\u533a",
    "parent": "1846"
}, {"id": "1854", "county": "\u6d2a\u5c71\u533a", "parent": "1846"}, {
    "id": "1855",
    "county": "\u4e1c\u897f\u6e56\u533a",
    "parent": "1846"
}, {"id": "1856", "county": "\u6c49\u5357\u533a", "parent": "1846"}, {
    "id": "1857",
    "county": "\u8521\u7538\u533a",
    "parent": "1846"
}, {"id": "1858", "county": "\u6c5f\u590f\u533a", "parent": "1846"}, {
    "id": "1859",
    "county": "\u9ec4\u9642\u533a",
    "parent": "1846"
}, {"id": "1860", "county": "\u65b0\u6d32\u533a", "parent": "1846"}, {
    "id": "1862",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1861"
}, {"id": "1863", "county": "\u9ec4\u77f3\u6e2f\u533a", "parent": "1861"}, {
    "id": "1864",
    "county": "\u897f\u585e\u5c71\u533a",
    "parent": "1861"
}, {"id": "1865", "county": "\u4e0b\u9646\u533a", "parent": "1861"}, {
    "id": "1866",
    "county": "\u94c1\u5c71\u533a",
    "parent": "1861"
}, {"id": "1867", "county": "\u9633\u65b0\u53bf", "parent": "1861"}, {
    "id": "1868",
    "county": "\u5927\u51b6\u5e02",
    "parent": "1861"
}, {"id": "1870", "county": "\u5e02\u8f96\u533a", "parent": "1869"}, {
    "id": "1871",
    "county": "\u8305\u7bad\u533a",
    "parent": "1869"
}, {"id": "1872", "county": "\u5f20\u6e7e\u533a", "parent": "1869"}, {
    "id": "1873",
    "county": "\u90e7\u9633\u533a",
    "parent": "1869"
}, {"id": "1874", "county": "\u90e7\u897f\u53bf", "parent": "1869"}, {
    "id": "1875",
    "county": "\u7af9\u5c71\u53bf",
    "parent": "1869"
}, {"id": "1876", "county": "\u7af9\u6eaa\u53bf", "parent": "1869"}, {
    "id": "1877",
    "county": "\u623f\u53bf",
    "parent": "1869"
}, {"id": "1878", "county": "\u4e39\u6c5f\u53e3\u5e02", "parent": "1869"}, {
    "id": "1880",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1879"
}, {"id": "1881", "county": "\u897f\u9675\u533a", "parent": "1879"}, {
    "id": "1882",
    "county": "\u4f0d\u5bb6\u5c97\u533a",
    "parent": "1879"
}, {"id": "1883", "county": "\u70b9\u519b\u533a", "parent": "1879"}, {
    "id": "1884",
    "county": "\u7307\u4ead\u533a",
    "parent": "1879"
}, {"id": "1885", "county": "\u5937\u9675\u533a", "parent": "1879"}, {
    "id": "1886",
    "county": "\u8fdc\u5b89\u53bf",
    "parent": "1879"
}, {"id": "1887", "county": "\u5174\u5c71\u53bf", "parent": "1879"}, {
    "id": "1888",
    "county": "\u79ed\u5f52\u53bf",
    "parent": "1879"
}, {"id": "1889", "county": "\u957f\u9633\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf", "parent": "1879"}, {
    "id": "1890",
    "county": "\u4e94\u5cf0\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
    "parent": "1879"
}, {"id": "1891", "county": "\u5b9c\u90fd\u5e02", "parent": "1879"}, {
    "id": "1892",
    "county": "\u5f53\u9633\u5e02",
    "parent": "1879"
}, {"id": "1893", "county": "\u679d\u6c5f\u5e02", "parent": "1879"}, {
    "id": "1895",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1894"
}, {"id": "1896", "county": "\u8944\u57ce\u533a", "parent": "1894"}, {
    "id": "1897",
    "county": "\u6a0a\u57ce\u533a",
    "parent": "1894"
}, {"id": "1898", "county": "\u8944\u5dde\u533a", "parent": "1894"}, {
    "id": "1899",
    "county": "\u5357\u6f33\u53bf",
    "parent": "1894"
}, {"id": "1900", "county": "\u8c37\u57ce\u53bf", "parent": "1894"}, {
    "id": "1901",
    "county": "\u4fdd\u5eb7\u53bf",
    "parent": "1894"
}, {"id": "1902", "county": "\u8001\u6cb3\u53e3\u5e02", "parent": "1894"}, {
    "id": "1903",
    "county": "\u67a3\u9633\u5e02",
    "parent": "1894"
}, {"id": "1904", "county": "\u5b9c\u57ce\u5e02", "parent": "1894"}, {
    "id": "1906",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1905"
}, {"id": "1907", "county": "\u6881\u5b50\u6e56\u533a", "parent": "1905"}, {
    "id": "1908",
    "county": "\u534e\u5bb9\u533a",
    "parent": "1905"
}, {"id": "1909", "county": "\u9102\u57ce\u533a", "parent": "1905"}, {
    "id": "1911",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1910"
}, {"id": "1912", "county": "\u4e1c\u5b9d\u533a", "parent": "1910"}, {
    "id": "1913",
    "county": "\u6387\u5200\u533a",
    "parent": "1910"
}, {"id": "1914", "county": "\u4eac\u5c71\u53bf", "parent": "1910"}, {
    "id": "1915",
    "county": "\u6c99\u6d0b\u53bf",
    "parent": "1910"
}, {"id": "1916", "county": "\u949f\u7965\u5e02", "parent": "1910"}, {
    "id": "1918",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1917"
}, {"id": "1919", "county": "\u5b5d\u5357\u533a", "parent": "1917"}, {
    "id": "1920",
    "county": "\u5b5d\u660c\u53bf",
    "parent": "1917"
}, {"id": "1921", "county": "\u5927\u609f\u53bf", "parent": "1917"}, {
    "id": "1922",
    "county": "\u4e91\u68a6\u53bf",
    "parent": "1917"
}, {"id": "1923", "county": "\u5e94\u57ce\u5e02", "parent": "1917"}, {
    "id": "1924",
    "county": "\u5b89\u9646\u5e02",
    "parent": "1917"
}, {"id": "1925", "county": "\u6c49\u5ddd\u5e02", "parent": "1917"}, {
    "id": "1927",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1926"
}, {"id": "1928", "county": "\u6c99\u5e02\u533a", "parent": "1926"}, {
    "id": "1929",
    "county": "\u8346\u5dde\u533a",
    "parent": "1926"
}, {"id": "1930", "county": "\u516c\u5b89\u53bf", "parent": "1926"}, {
    "id": "1931",
    "county": "\u76d1\u5229\u53bf",
    "parent": "1926"
}, {"id": "1932", "county": "\u6c5f\u9675\u53bf", "parent": "1926"}, {
    "id": "1933",
    "county": "\u77f3\u9996\u5e02",
    "parent": "1926"
}, {"id": "1934", "county": "\u6d2a\u6e56\u5e02", "parent": "1926"}, {
    "id": "1935",
    "county": "\u677e\u6ecb\u5e02",
    "parent": "1926"
}, {"id": "1937", "county": "\u5e02\u8f96\u533a", "parent": "1936"}, {
    "id": "1938",
    "county": "\u9ec4\u5dde\u533a",
    "parent": "1936"
}, {"id": "1939", "county": "\u56e2\u98ce\u53bf", "parent": "1936"}, {
    "id": "1940",
    "county": "\u7ea2\u5b89\u53bf",
    "parent": "1936"
}, {"id": "1941", "county": "\u7f57\u7530\u53bf", "parent": "1936"}, {
    "id": "1942",
    "county": "\u82f1\u5c71\u53bf",
    "parent": "1936"
}, {"id": "1943", "county": "\u6d60\u6c34\u53bf", "parent": "1936"}, {
    "id": "1944",
    "county": "\u8572\u6625\u53bf",
    "parent": "1936"
}, {"id": "1945", "county": "\u9ec4\u6885\u53bf", "parent": "1936"}, {
    "id": "1946",
    "county": "\u9ebb\u57ce\u5e02",
    "parent": "1936"
}, {"id": "1947", "county": "\u6b66\u7a74\u5e02", "parent": "1936"}, {
    "id": "1949",
    "county": "\u5e02\u8f96\u533a",
    "parent": "1948"
}, {"id": "1950", "county": "\u54b8\u5b89\u533a", "parent": "1948"}, {
    "id": "1951",
    "county": "\u5609\u9c7c\u53bf",
    "parent": "1948"
}, {"id": "1952", "county": "\u901a\u57ce\u53bf", "parent": "1948"}, {
    "id": "1953",
    "county": "\u5d07\u9633\u53bf",
    "parent": "1948"
}, {"id": "1954", "county": "\u901a\u5c71\u53bf", "parent": "1948"}, {
    "id": "1955",
    "county": "\u8d64\u58c1\u5e02",
    "parent": "1948"
}, {"id": "1957", "county": "\u5e02\u8f96\u533a", "parent": "1956"}, {
    "id": "1958",
    "county": "\u66fe\u90fd\u533a",
    "parent": "1956"
}, {"id": "1959", "county": "\u968f\u53bf", "parent": "1956"}, {
    "id": "1960",
    "county": "\u5e7f\u6c34\u5e02",
    "parent": "1956"
}, {"id": "1962", "county": "\u6069\u65bd\u5e02", "parent": "1961"}, {
    "id": "1963",
    "county": "\u5229\u5ddd\u5e02",
    "parent": "1961"
}, {"id": "1964", "county": "\u5efa\u59cb\u53bf", "parent": "1961"}, {
    "id": "1965",
    "county": "\u5df4\u4e1c\u53bf",
    "parent": "1961"
}, {"id": "1966", "county": "\u5ba3\u6069\u53bf", "parent": "1961"}, {
    "id": "1967",
    "county": "\u54b8\u4e30\u53bf",
    "parent": "1961"
}, {"id": "1968", "county": "\u6765\u51e4\u53bf", "parent": "1961"}, {
    "id": "1969",
    "county": "\u9e64\u5cf0\u53bf",
    "parent": "1961"
}, {"id": "1971", "county": "\u4ed9\u6843\u5e02", "parent": "1970"}, {
    "id": "1972",
    "county": "\u6f5c\u6c5f\u5e02",
    "parent": "1970"
}, {"id": "1973", "county": "\u5929\u95e8\u5e02", "parent": "1970"}, {
    "id": "1974",
    "county": "\u795e\u519c\u67b6\u6797\u533a",
    "parent": "1970"
}, {"id": "1977", "county": "\u5e02\u8f96\u533a", "parent": "1976"}, {
    "id": "1978",
    "county": "\u8299\u84c9\u533a",
    "parent": "1976"
}, {"id": "1979", "county": "\u5929\u5fc3\u533a", "parent": "1976"}, {
    "id": "1980",
    "county": "\u5cb3\u9e93\u533a",
    "parent": "1976"
}, {"id": "1981", "county": "\u5f00\u798f\u533a", "parent": "1976"}, {
    "id": "1982",
    "county": "\u96e8\u82b1\u533a",
    "parent": "1976"
}, {"id": "1983", "county": "\u671b\u57ce\u533a", "parent": "1976"}, {
    "id": "1984",
    "county": "\u957f\u6c99\u53bf",
    "parent": "1976"
}, {"id": "1985", "county": "\u5b81\u4e61\u53bf", "parent": "1976"}, {
    "id": "1986",
    "county": "\u6d4f\u9633\u5e02",
    "parent": "1976"
}, {"id": "1988", "county": "\u5e02\u8f96\u533a", "parent": "1987"}, {
    "id": "1989",
    "county": "\u8377\u5858\u533a",
    "parent": "1987"
}, {"id": "1990", "county": "\u82a6\u6dde\u533a", "parent": "1987"}, {
    "id": "1991",
    "county": "\u77f3\u5cf0\u533a",
    "parent": "1987"
}, {"id": "1992", "county": "\u5929\u5143\u533a", "parent": "1987"}, {
    "id": "1993",
    "county": "\u682a\u6d32\u53bf",
    "parent": "1987"
}, {"id": "1994", "county": "\u6538\u53bf", "parent": "1987"}, {
    "id": "1995",
    "county": "\u8336\u9675\u53bf",
    "parent": "1987"
}, {"id": "1996", "county": "\u708e\u9675\u53bf", "parent": "1987"}, {
    "id": "1997",
    "county": "\u91b4\u9675\u5e02",
    "parent": "1987"
}, {"id": "1999", "county": "\u5e02\u8f96\u533a", "parent": "1998"}, {
    "id": "2000",
    "county": "\u96e8\u6e56\u533a",
    "parent": "1998"
}, {"id": "2001", "county": "\u5cb3\u5858\u533a", "parent": "1998"}, {
    "id": "2002",
    "county": "\u6e58\u6f6d\u53bf",
    "parent": "1998"
}, {"id": "2003", "county": "\u6e58\u4e61\u5e02", "parent": "1998"}, {
    "id": "2004",
    "county": "\u97f6\u5c71\u5e02",
    "parent": "1998"
}, {"id": "2006", "county": "\u5e02\u8f96\u533a", "parent": "2005"}, {
    "id": "2007",
    "county": "\u73e0\u6656\u533a",
    "parent": "2005"
}, {"id": "2008", "county": "\u96c1\u5cf0\u533a", "parent": "2005"}, {
    "id": "2009",
    "county": "\u77f3\u9f13\u533a",
    "parent": "2005"
}, {"id": "2010", "county": "\u84b8\u6e58\u533a", "parent": "2005"}, {
    "id": "2011",
    "county": "\u5357\u5cb3\u533a",
    "parent": "2005"
}, {"id": "2012", "county": "\u8861\u9633\u53bf", "parent": "2005"}, {
    "id": "2013",
    "county": "\u8861\u5357\u53bf",
    "parent": "2005"
}, {"id": "2014", "county": "\u8861\u5c71\u53bf", "parent": "2005"}, {
    "id": "2015",
    "county": "\u8861\u4e1c\u53bf",
    "parent": "2005"
}, {"id": "2016", "county": "\u7941\u4e1c\u53bf", "parent": "2005"}, {
    "id": "2017",
    "county": "\u8012\u9633\u5e02",
    "parent": "2005"
}, {"id": "2018", "county": "\u5e38\u5b81\u5e02", "parent": "2005"}, {
    "id": "2020",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2019"
}, {"id": "2021", "county": "\u53cc\u6e05\u533a", "parent": "2019"}, {
    "id": "2022",
    "county": "\u5927\u7965\u533a",
    "parent": "2019"
}, {"id": "2023", "county": "\u5317\u5854\u533a", "parent": "2019"}, {
    "id": "2024",
    "county": "\u90b5\u4e1c\u53bf",
    "parent": "2019"
}, {"id": "2025", "county": "\u65b0\u90b5\u53bf", "parent": "2019"}, {
    "id": "2026",
    "county": "\u90b5\u9633\u53bf",
    "parent": "2019"
}, {"id": "2027", "county": "\u9686\u56de\u53bf", "parent": "2019"}, {
    "id": "2028",
    "county": "\u6d1e\u53e3\u53bf",
    "parent": "2019"
}, {"id": "2029", "county": "\u7ee5\u5b81\u53bf", "parent": "2019"}, {
    "id": "2030",
    "county": "\u65b0\u5b81\u53bf",
    "parent": "2019"
}, {"id": "2031", "county": "\u57ce\u6b65\u82d7\u65cf\u81ea\u6cbb\u53bf", "parent": "2019"}, {
    "id": "2032",
    "county": "\u6b66\u5188\u5e02",
    "parent": "2019"
}, {"id": "2034", "county": "\u5e02\u8f96\u533a", "parent": "2033"}, {
    "id": "2035",
    "county": "\u5cb3\u9633\u697c\u533a",
    "parent": "2033"
}, {"id": "2036", "county": "\u4e91\u6eaa\u533a", "parent": "2033"}, {
    "id": "2037",
    "county": "\u541b\u5c71\u533a",
    "parent": "2033"
}, {"id": "2038", "county": "\u5cb3\u9633\u53bf", "parent": "2033"}, {
    "id": "2039",
    "county": "\u534e\u5bb9\u53bf",
    "parent": "2033"
}, {"id": "2040", "county": "\u6e58\u9634\u53bf", "parent": "2033"}, {
    "id": "2041",
    "county": "\u5e73\u6c5f\u53bf",
    "parent": "2033"
}, {"id": "2042", "county": "\u6c68\u7f57\u5e02", "parent": "2033"}, {
    "id": "2043",
    "county": "\u4e34\u6e58\u5e02",
    "parent": "2033"
}, {"id": "2045", "county": "\u5e02\u8f96\u533a", "parent": "2044"}, {
    "id": "2046",
    "county": "\u6b66\u9675\u533a",
    "parent": "2044"
}, {"id": "2047", "county": "\u9f0e\u57ce\u533a", "parent": "2044"}, {
    "id": "2048",
    "county": "\u5b89\u4e61\u53bf",
    "parent": "2044"
}, {"id": "2049", "county": "\u6c49\u5bff\u53bf", "parent": "2044"}, {
    "id": "2050",
    "county": "\u6fa7\u53bf",
    "parent": "2044"
}, {"id": "2051", "county": "\u4e34\u6fa7\u53bf", "parent": "2044"}, {
    "id": "2052",
    "county": "\u6843\u6e90\u53bf",
    "parent": "2044"
}, {"id": "2053", "county": "\u77f3\u95e8\u53bf", "parent": "2044"}, {
    "id": "2054",
    "county": "\u6d25\u5e02\u5e02",
    "parent": "2044"
}, {"id": "2056", "county": "\u5e02\u8f96\u533a", "parent": "2055"}, {
    "id": "2057",
    "county": "\u6c38\u5b9a\u533a",
    "parent": "2055"
}, {"id": "2058", "county": "\u6b66\u9675\u6e90\u533a", "parent": "2055"}, {
    "id": "2059",
    "county": "\u6148\u5229\u53bf",
    "parent": "2055"
}, {"id": "2060", "county": "\u6851\u690d\u53bf", "parent": "2055"}, {
    "id": "2062",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2061"
}, {"id": "2063", "county": "\u8d44\u9633\u533a", "parent": "2061"}, {
    "id": "2064",
    "county": "\u8d6b\u5c71\u533a",
    "parent": "2061"
}, {"id": "2065", "county": "\u5357\u53bf", "parent": "2061"}, {
    "id": "2066",
    "county": "\u6843\u6c5f\u53bf",
    "parent": "2061"
}, {"id": "2067", "county": "\u5b89\u5316\u53bf", "parent": "2061"}, {
    "id": "2068",
    "county": "\u6c85\u6c5f\u5e02",
    "parent": "2061"
}, {"id": "2070", "county": "\u5e02\u8f96\u533a", "parent": "2069"}, {
    "id": "2071",
    "county": "\u5317\u6e56\u533a",
    "parent": "2069"
}, {"id": "2072", "county": "\u82cf\u4ed9\u533a", "parent": "2069"}, {
    "id": "2073",
    "county": "\u6842\u9633\u53bf",
    "parent": "2069"
}, {"id": "2074", "county": "\u5b9c\u7ae0\u53bf", "parent": "2069"}, {
    "id": "2075",
    "county": "\u6c38\u5174\u53bf",
    "parent": "2069"
}, {"id": "2076", "county": "\u5609\u79be\u53bf", "parent": "2069"}, {
    "id": "2077",
    "county": "\u4e34\u6b66\u53bf",
    "parent": "2069"
}, {"id": "2078", "county": "\u6c5d\u57ce\u53bf", "parent": "2069"}, {
    "id": "2079",
    "county": "\u6842\u4e1c\u53bf",
    "parent": "2069"
}, {"id": "2080", "county": "\u5b89\u4ec1\u53bf", "parent": "2069"}, {
    "id": "2081",
    "county": "\u8d44\u5174\u5e02",
    "parent": "2069"
}, {"id": "2083", "county": "\u5e02\u8f96\u533a", "parent": "2082"}, {
    "id": "2084",
    "county": "\u96f6\u9675\u533a",
    "parent": "2082"
}, {"id": "2085", "county": "\u51b7\u6c34\u6ee9\u533a", "parent": "2082"}, {
    "id": "2086",
    "county": "\u7941\u9633\u53bf",
    "parent": "2082"
}, {"id": "2087", "county": "\u4e1c\u5b89\u53bf", "parent": "2082"}, {
    "id": "2088",
    "county": "\u53cc\u724c\u53bf",
    "parent": "2082"
}, {"id": "2089", "county": "\u9053\u53bf", "parent": "2082"}, {
    "id": "2090",
    "county": "\u6c5f\u6c38\u53bf",
    "parent": "2082"
}, {"id": "2091", "county": "\u5b81\u8fdc\u53bf", "parent": "2082"}, {
    "id": "2092",
    "county": "\u84dd\u5c71\u53bf",
    "parent": "2082"
}, {"id": "2093", "county": "\u65b0\u7530\u53bf", "parent": "2082"}, {
    "id": "2094",
    "county": "\u6c5f\u534e\u7476\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2082"
}, {"id": "2096", "county": "\u5e02\u8f96\u533a", "parent": "2095"}, {
    "id": "2097",
    "county": "\u9e64\u57ce\u533a",
    "parent": "2095"
}, {"id": "2098", "county": "\u4e2d\u65b9\u53bf", "parent": "2095"}, {
    "id": "2099",
    "county": "\u6c85\u9675\u53bf",
    "parent": "2095"
}, {"id": "2100", "county": "\u8fb0\u6eaa\u53bf", "parent": "2095"}, {
    "id": "2101",
    "county": "\u6e86\u6d66\u53bf",
    "parent": "2095"
}, {"id": "2102", "county": "\u4f1a\u540c\u53bf", "parent": "2095"}, {
    "id": "2103",
    "county": "\u9ebb\u9633\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2095"
}, {"id": "2104", "county": "\u65b0\u6643\u4f97\u65cf\u81ea\u6cbb\u53bf", "parent": "2095"}, {
    "id": "2105",
    "county": "\u82b7\u6c5f\u4f97\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2095"
}, {"id": "2106", "county": "\u9756\u5dde\u82d7\u65cf\u4f97\u65cf\u81ea\u6cbb\u53bf", "parent": "2095"}, {
    "id": "2107",
    "county": "\u901a\u9053\u4f97\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2095"
}, {"id": "2108", "county": "\u6d2a\u6c5f\u5e02", "parent": "2095"}, {
    "id": "2110",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2109"
}, {"id": "2111", "county": "\u5a04\u661f\u533a", "parent": "2109"}, {
    "id": "2112",
    "county": "\u53cc\u5cf0\u53bf",
    "parent": "2109"
}, {"id": "2113", "county": "\u65b0\u5316\u53bf", "parent": "2109"}, {
    "id": "2114",
    "county": "\u51b7\u6c34\u6c5f\u5e02",
    "parent": "2109"
}, {"id": "2115", "county": "\u6d9f\u6e90\u5e02", "parent": "2109"}, {
    "id": "2117",
    "county": "\u5409\u9996\u5e02",
    "parent": "2116"
}, {"id": "2118", "county": "\u6cf8\u6eaa\u53bf", "parent": "2116"}, {
    "id": "2119",
    "county": "\u51e4\u51f0\u53bf",
    "parent": "2116"
}, {"id": "2120", "county": "\u82b1\u57a3\u53bf", "parent": "2116"}, {
    "id": "2121",
    "county": "\u4fdd\u9756\u53bf",
    "parent": "2116"
}, {"id": "2122", "county": "\u53e4\u4e08\u53bf", "parent": "2116"}, {
    "id": "2123",
    "county": "\u6c38\u987a\u53bf",
    "parent": "2116"
}, {"id": "2124", "county": "\u9f99\u5c71\u53bf", "parent": "2116"}, {
    "id": "2127",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2126"
}, {"id": "2128", "county": "\u8354\u6e7e\u533a", "parent": "2126"}, {
    "id": "2129",
    "county": "\u8d8a\u79c0\u533a",
    "parent": "2126"
}, {"id": "2130", "county": "\u6d77\u73e0\u533a", "parent": "2126"}, {
    "id": "2131",
    "county": "\u5929\u6cb3\u533a",
    "parent": "2126"
}, {"id": "2132", "county": "\u767d\u4e91\u533a", "parent": "2126"}, {
    "id": "2133",
    "county": "\u9ec4\u57d4\u533a",
    "parent": "2126"
}, {"id": "2134", "county": "\u756a\u79ba\u533a", "parent": "2126"}, {
    "id": "2135",
    "county": "\u82b1\u90fd\u533a",
    "parent": "2126"
}, {"id": "2136", "county": "\u5357\u6c99\u533a", "parent": "2126"}, {
    "id": "2137",
    "county": "\u4ece\u5316\u533a",
    "parent": "2126"
}, {"id": "2138", "county": "\u589e\u57ce\u533a", "parent": "2126"}, {
    "id": "2140",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2139"
}, {"id": "2141", "county": "\u6b66\u6c5f\u533a", "parent": "2139"}, {
    "id": "2142",
    "county": "\u6d48\u6c5f\u533a",
    "parent": "2139"
}, {"id": "2143", "county": "\u66f2\u6c5f\u533a", "parent": "2139"}, {
    "id": "2144",
    "county": "\u59cb\u5174\u53bf",
    "parent": "2139"
}, {"id": "2145", "county": "\u4ec1\u5316\u53bf", "parent": "2139"}, {
    "id": "2146",
    "county": "\u7fc1\u6e90\u53bf",
    "parent": "2139"
}, {"id": "2147", "county": "\u4e73\u6e90\u7476\u65cf\u81ea\u6cbb\u53bf", "parent": "2139"}, {
    "id": "2148",
    "county": "\u65b0\u4e30\u53bf",
    "parent": "2139"
}, {"id": "2149", "county": "\u4e50\u660c\u5e02", "parent": "2139"}, {
    "id": "2150",
    "county": "\u5357\u96c4\u5e02",
    "parent": "2139"
}, {"id": "2152", "county": "\u5e02\u8f96\u533a", "parent": "2151"}, {
    "id": "2153",
    "county": "\u7f57\u6e56\u533a",
    "parent": "2151"
}, {"id": "2154", "county": "\u798f\u7530\u533a", "parent": "2151"}, {
    "id": "2155",
    "county": "\u5357\u5c71\u533a",
    "parent": "2151"
}, {"id": "2156", "county": "\u5b9d\u5b89\u533a", "parent": "2151"}, {
    "id": "2157",
    "county": "\u9f99\u5c97\u533a",
    "parent": "2151"
}, {"id": "2158", "county": "\u76d0\u7530\u533a", "parent": "2151"}, {
    "id": "2160",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2159"
}, {"id": "2161", "county": "\u9999\u6d32\u533a", "parent": "2159"}, {
    "id": "2162",
    "county": "\u6597\u95e8\u533a",
    "parent": "2159"
}, {"id": "2163", "county": "\u91d1\u6e7e\u533a", "parent": "2159"}, {
    "id": "2165",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2164"
}, {"id": "2166", "county": "\u9f99\u6e56\u533a", "parent": "2164"}, {
    "id": "2167",
    "county": "\u91d1\u5e73\u533a",
    "parent": "2164"
}, {"id": "2168", "county": "\u6fe0\u6c5f\u533a", "parent": "2164"}, {
    "id": "2169",
    "county": "\u6f6e\u9633\u533a",
    "parent": "2164"
}, {"id": "2170", "county": "\u6f6e\u5357\u533a", "parent": "2164"}, {
    "id": "2171",
    "county": "\u6f84\u6d77\u533a",
    "parent": "2164"
}, {"id": "2172", "county": "\u5357\u6fb3\u53bf", "parent": "2164"}, {
    "id": "2174",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2173"
}, {"id": "2175", "county": "\u7985\u57ce\u533a", "parent": "2173"}, {
    "id": "2176",
    "county": "\u5357\u6d77\u533a",
    "parent": "2173"
}, {"id": "2177", "county": "\u987a\u5fb7\u533a", "parent": "2173"}, {
    "id": "2178",
    "county": "\u4e09\u6c34\u533a",
    "parent": "2173"
}, {"id": "2179", "county": "\u9ad8\u660e\u533a", "parent": "2173"}, {
    "id": "2181",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2180"
}, {"id": "2182", "county": "\u84ec\u6c5f\u533a", "parent": "2180"}, {
    "id": "2183",
    "county": "\u6c5f\u6d77\u533a",
    "parent": "2180"
}, {"id": "2184", "county": "\u65b0\u4f1a\u533a", "parent": "2180"}, {
    "id": "2185",
    "county": "\u53f0\u5c71\u5e02",
    "parent": "2180"
}, {"id": "2186", "county": "\u5f00\u5e73\u5e02", "parent": "2180"}, {
    "id": "2187",
    "county": "\u9e64\u5c71\u5e02",
    "parent": "2180"
}, {"id": "2188", "county": "\u6069\u5e73\u5e02", "parent": "2180"}, {
    "id": "2190",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2189"
}, {"id": "2191", "county": "\u8d64\u574e\u533a", "parent": "2189"}, {
    "id": "2192",
    "county": "\u971e\u5c71\u533a",
    "parent": "2189"
}, {"id": "2193", "county": "\u5761\u5934\u533a", "parent": "2189"}, {
    "id": "2194",
    "county": "\u9ebb\u7ae0\u533a",
    "parent": "2189"
}, {"id": "2195", "county": "\u9042\u6eaa\u53bf", "parent": "2189"}, {
    "id": "2196",
    "county": "\u5f90\u95fb\u53bf",
    "parent": "2189"
}, {"id": "2197", "county": "\u5ec9\u6c5f\u5e02", "parent": "2189"}, {
    "id": "2198",
    "county": "\u96f7\u5dde\u5e02",
    "parent": "2189"
}, {"id": "2199", "county": "\u5434\u5ddd\u5e02", "parent": "2189"}, {
    "id": "2201",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2200"
}, {"id": "2202", "county": "\u8302\u5357\u533a", "parent": "2200"}, {
    "id": "2203",
    "county": "\u7535\u767d\u533a",
    "parent": "2200"
}, {"id": "2204", "county": "\u9ad8\u5dde\u5e02", "parent": "2200"}, {
    "id": "2205",
    "county": "\u5316\u5dde\u5e02",
    "parent": "2200"
}, {"id": "2206", "county": "\u4fe1\u5b9c\u5e02", "parent": "2200"}, {
    "id": "2208",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2207"
}, {"id": "2209", "county": "\u7aef\u5dde\u533a", "parent": "2207"}, {
    "id": "2210",
    "county": "\u9f0e\u6e56\u533a",
    "parent": "2207"
}, {"id": "2211", "county": "\u5e7f\u5b81\u53bf", "parent": "2207"}, {
    "id": "2212",
    "county": "\u6000\u96c6\u53bf",
    "parent": "2207"
}, {"id": "2213", "county": "\u5c01\u5f00\u53bf", "parent": "2207"}, {
    "id": "2214",
    "county": "\u5fb7\u5e86\u53bf",
    "parent": "2207"
}, {"id": "2215", "county": "\u9ad8\u8981\u5e02", "parent": "2207"}, {
    "id": "2216",
    "county": "\u56db\u4f1a\u5e02",
    "parent": "2207"
}, {"id": "2218", "county": "\u5e02\u8f96\u533a", "parent": "2217"}, {
    "id": "2219",
    "county": "\u60e0\u57ce\u533a",
    "parent": "2217"
}, {"id": "2220", "county": "\u60e0\u9633\u533a", "parent": "2217"}, {
    "id": "2221",
    "county": "\u535a\u7f57\u53bf",
    "parent": "2217"
}, {"id": "2222", "county": "\u60e0\u4e1c\u53bf", "parent": "2217"}, {
    "id": "2223",
    "county": "\u9f99\u95e8\u53bf",
    "parent": "2217"
}, {"id": "2225", "county": "\u5e02\u8f96\u533a", "parent": "2224"}, {
    "id": "2226",
    "county": "\u6885\u6c5f\u533a",
    "parent": "2224"
}, {"id": "2227", "county": "\u6885\u53bf\u533a", "parent": "2224"}, {
    "id": "2228",
    "county": "\u5927\u57d4\u53bf",
    "parent": "2224"
}, {"id": "2229", "county": "\u4e30\u987a\u53bf", "parent": "2224"}, {
    "id": "2230",
    "county": "\u4e94\u534e\u53bf",
    "parent": "2224"
}, {"id": "2231", "county": "\u5e73\u8fdc\u53bf", "parent": "2224"}, {
    "id": "2232",
    "county": "\u8549\u5cad\u53bf",
    "parent": "2224"
}, {"id": "2233", "county": "\u5174\u5b81\u5e02", "parent": "2224"}, {
    "id": "2235",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2234"
}, {"id": "2236", "county": "\u57ce\u533a", "parent": "2234"}, {
    "id": "2237",
    "county": "\u6d77\u4e30\u53bf",
    "parent": "2234"
}, {"id": "2238", "county": "\u9646\u6cb3\u53bf", "parent": "2234"}, {
    "id": "2239",
    "county": "\u9646\u4e30\u5e02",
    "parent": "2234"
}, {"id": "2241", "county": "\u5e02\u8f96\u533a", "parent": "2240"}, {
    "id": "2242",
    "county": "\u6e90\u57ce\u533a",
    "parent": "2240"
}, {"id": "2243", "county": "\u7d2b\u91d1\u53bf", "parent": "2240"}, {
    "id": "2244",
    "county": "\u9f99\u5ddd\u53bf",
    "parent": "2240"
}, {"id": "2245", "county": "\u8fde\u5e73\u53bf", "parent": "2240"}, {
    "id": "2246",
    "county": "\u548c\u5e73\u53bf",
    "parent": "2240"
}, {"id": "2247", "county": "\u4e1c\u6e90\u53bf", "parent": "2240"}, {
    "id": "2249",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2248"
}, {"id": "2250", "county": "\u6c5f\u57ce\u533a", "parent": "2248"}, {
    "id": "2251",
    "county": "\u9633\u4e1c\u533a",
    "parent": "2248"
}, {"id": "2252", "county": "\u9633\u897f\u53bf", "parent": "2248"}, {
    "id": "2253",
    "county": "\u9633\u6625\u5e02",
    "parent": "2248"
}, {"id": "2255", "county": "\u5e02\u8f96\u533a", "parent": "2254"}, {
    "id": "2256",
    "county": "\u6e05\u57ce\u533a",
    "parent": "2254"
}, {"id": "2257", "county": "\u6e05\u65b0\u533a", "parent": "2254"}, {
    "id": "2258",
    "county": "\u4f5b\u5188\u53bf",
    "parent": "2254"
}, {"id": "2259", "county": "\u9633\u5c71\u53bf", "parent": "2254"}, {
    "id": "2260",
    "county": "\u8fde\u5c71\u58ee\u65cf\u7476\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2254"
}, {"id": "2261", "county": "\u8fde\u5357\u7476\u65cf\u81ea\u6cbb\u53bf", "parent": "2254"}, {
    "id": "2262",
    "county": "\u82f1\u5fb7\u5e02",
    "parent": "2254"
}, {"id": "2263", "county": "\u8fde\u5dde\u5e02", "parent": "2254"}, {
    "id": "2267",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2266"
}, {"id": "2268", "county": "\u6e58\u6865\u533a", "parent": "2266"}, {
    "id": "2269",
    "county": "\u6f6e\u5b89\u533a",
    "parent": "2266"
}, {"id": "2270", "county": "\u9976\u5e73\u53bf", "parent": "2266"}, {
    "id": "2272",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2271"
}, {"id": "2273", "county": "\u6995\u57ce\u533a", "parent": "2271"}, {
    "id": "2274",
    "county": "\u63ed\u4e1c\u533a",
    "parent": "2271"
}, {"id": "2275", "county": "\u63ed\u897f\u53bf", "parent": "2271"}, {
    "id": "2276",
    "county": "\u60e0\u6765\u53bf",
    "parent": "2271"
}, {"id": "2277", "county": "\u666e\u5b81\u5e02", "parent": "2271"}, {
    "id": "2279",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2278"
}, {"id": "2280", "county": "\u4e91\u57ce\u533a", "parent": "2278"}, {
    "id": "2281",
    "county": "\u4e91\u5b89\u533a",
    "parent": "2278"
}, {"id": "2282", "county": "\u65b0\u5174\u53bf", "parent": "2278"}, {
    "id": "2283",
    "county": "\u90c1\u5357\u53bf",
    "parent": "2278"
}, {"id": "2284", "county": "\u7f57\u5b9a\u5e02", "parent": "2278"}, {
    "id": "2287",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2286"
}, {"id": "2288", "county": "\u5174\u5b81\u533a", "parent": "2286"}, {
    "id": "2289",
    "county": "\u9752\u79c0\u533a",
    "parent": "2286"
}, {"id": "2290", "county": "\u6c5f\u5357\u533a", "parent": "2286"}, {
    "id": "2291",
    "county": "\u897f\u4e61\u5858\u533a",
    "parent": "2286"
}, {"id": "2292", "county": "\u826f\u5e86\u533a", "parent": "2286"}, {
    "id": "2293",
    "county": "\u9095\u5b81\u533a",
    "parent": "2286"
}, {"id": "2294", "county": "\u6b66\u9e23\u53bf", "parent": "2286"}, {
    "id": "2295",
    "county": "\u9686\u5b89\u53bf",
    "parent": "2286"
}, {"id": "2296", "county": "\u9a6c\u5c71\u53bf", "parent": "2286"}, {
    "id": "2297",
    "county": "\u4e0a\u6797\u53bf",
    "parent": "2286"
}, {"id": "2298", "county": "\u5bbe\u9633\u53bf", "parent": "2286"}, {
    "id": "2299",
    "county": "\u6a2a\u53bf",
    "parent": "2286"
}, {"id": "2301", "county": "\u5e02\u8f96\u533a", "parent": "2300"}, {
    "id": "2302",
    "county": "\u57ce\u4e2d\u533a",
    "parent": "2300"
}, {"id": "2303", "county": "\u9c7c\u5cf0\u533a", "parent": "2300"}, {
    "id": "2304",
    "county": "\u67f3\u5357\u533a",
    "parent": "2300"
}, {"id": "2305", "county": "\u67f3\u5317\u533a", "parent": "2300"}, {
    "id": "2306",
    "county": "\u67f3\u6c5f\u53bf",
    "parent": "2300"
}, {"id": "2307", "county": "\u67f3\u57ce\u53bf", "parent": "2300"}, {
    "id": "2308",
    "county": "\u9e7f\u5be8\u53bf",
    "parent": "2300"
}, {"id": "2309", "county": "\u878d\u5b89\u53bf", "parent": "2300"}, {
    "id": "2310",
    "county": "\u878d\u6c34\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2300"
}, {"id": "2311", "county": "\u4e09\u6c5f\u4f97\u65cf\u81ea\u6cbb\u53bf", "parent": "2300"}, {
    "id": "2313",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2312"
}, {"id": "2314", "county": "\u79c0\u5cf0\u533a", "parent": "2312"}, {
    "id": "2315",
    "county": "\u53e0\u5f69\u533a",
    "parent": "2312"
}, {"id": "2316", "county": "\u8c61\u5c71\u533a", "parent": "2312"}, {
    "id": "2317",
    "county": "\u4e03\u661f\u533a",
    "parent": "2312"
}, {"id": "2318", "county": "\u96c1\u5c71\u533a", "parent": "2312"}, {
    "id": "2319",
    "county": "\u4e34\u6842\u533a",
    "parent": "2312"
}, {"id": "2320", "county": "\u9633\u6714\u53bf", "parent": "2312"}, {
    "id": "2321",
    "county": "\u7075\u5ddd\u53bf",
    "parent": "2312"
}, {"id": "2322", "county": "\u5168\u5dde\u53bf", "parent": "2312"}, {
    "id": "2323",
    "county": "\u5174\u5b89\u53bf",
    "parent": "2312"
}, {"id": "2324", "county": "\u6c38\u798f\u53bf", "parent": "2312"}, {
    "id": "2325",
    "county": "\u704c\u9633\u53bf",
    "parent": "2312"
}, {"id": "2326", "county": "\u9f99\u80dc\u5404\u65cf\u81ea\u6cbb\u53bf", "parent": "2312"}, {
    "id": "2327",
    "county": "\u8d44\u6e90\u53bf",
    "parent": "2312"
}, {"id": "2328", "county": "\u5e73\u4e50\u53bf", "parent": "2312"}, {
    "id": "2329",
    "county": "\u8354\u6d66\u53bf",
    "parent": "2312"
}, {"id": "2330", "county": "\u606d\u57ce\u7476\u65cf\u81ea\u6cbb\u53bf", "parent": "2312"}, {
    "id": "2332",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2331"
}, {"id": "2333", "county": "\u4e07\u79c0\u533a", "parent": "2331"}, {
    "id": "2334",
    "county": "\u957f\u6d32\u533a",
    "parent": "2331"
}, {"id": "2335", "county": "\u9f99\u5729\u533a", "parent": "2331"}, {
    "id": "2336",
    "county": "\u82cd\u68a7\u53bf",
    "parent": "2331"
}, {"id": "2337", "county": "\u85e4\u53bf", "parent": "2331"}, {
    "id": "2338",
    "county": "\u8499\u5c71\u53bf",
    "parent": "2331"
}, {"id": "2339", "county": "\u5c91\u6eaa\u5e02", "parent": "2331"}, {
    "id": "2341",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2340"
}, {"id": "2342", "county": "\u6d77\u57ce\u533a", "parent": "2340"}, {
    "id": "2343",
    "county": "\u94f6\u6d77\u533a",
    "parent": "2340"
}, {"id": "2344", "county": "\u94c1\u5c71\u6e2f\u533a", "parent": "2340"}, {
    "id": "2345",
    "county": "\u5408\u6d66\u53bf",
    "parent": "2340"
}, {"id": "2347", "county": "\u5e02\u8f96\u533a", "parent": "2346"}, {
    "id": "2348",
    "county": "\u6e2f\u53e3\u533a",
    "parent": "2346"
}, {"id": "2349", "county": "\u9632\u57ce\u533a", "parent": "2346"}, {
    "id": "2350",
    "county": "\u4e0a\u601d\u53bf",
    "parent": "2346"
}, {"id": "2351", "county": "\u4e1c\u5174\u5e02", "parent": "2346"}, {
    "id": "2353",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2352"
}, {"id": "2354", "county": "\u94a6\u5357\u533a", "parent": "2352"}, {
    "id": "2355",
    "county": "\u94a6\u5317\u533a",
    "parent": "2352"
}, {"id": "2356", "county": "\u7075\u5c71\u53bf", "parent": "2352"}, {
    "id": "2357",
    "county": "\u6d66\u5317\u53bf",
    "parent": "2352"
}, {"id": "2359", "county": "\u5e02\u8f96\u533a", "parent": "2358"}, {
    "id": "2360",
    "county": "\u6e2f\u5317\u533a",
    "parent": "2358"
}, {"id": "2361", "county": "\u6e2f\u5357\u533a", "parent": "2358"}, {
    "id": "2362",
    "county": "\u8983\u5858\u533a",
    "parent": "2358"
}, {"id": "2363", "county": "\u5e73\u5357\u53bf", "parent": "2358"}, {
    "id": "2364",
    "county": "\u6842\u5e73\u5e02",
    "parent": "2358"
}, {"id": "2366", "county": "\u5e02\u8f96\u533a", "parent": "2365"}, {
    "id": "2367",
    "county": "\u7389\u5dde\u533a",
    "parent": "2365"
}, {"id": "2368", "county": "\u798f\u7ef5\u533a", "parent": "2365"}, {
    "id": "2369",
    "county": "\u5bb9\u53bf",
    "parent": "2365"
}, {"id": "2370", "county": "\u9646\u5ddd\u53bf", "parent": "2365"}, {
    "id": "2371",
    "county": "\u535a\u767d\u53bf",
    "parent": "2365"
}, {"id": "2372", "county": "\u5174\u4e1a\u53bf", "parent": "2365"}, {
    "id": "2373",
    "county": "\u5317\u6d41\u5e02",
    "parent": "2365"
}, {"id": "2375", "county": "\u5e02\u8f96\u533a", "parent": "2374"}, {
    "id": "2376",
    "county": "\u53f3\u6c5f\u533a",
    "parent": "2374"
}, {"id": "2377", "county": "\u7530\u9633\u53bf", "parent": "2374"}, {
    "id": "2378",
    "county": "\u7530\u4e1c\u53bf",
    "parent": "2374"
}, {"id": "2379", "county": "\u5e73\u679c\u53bf", "parent": "2374"}, {
    "id": "2380",
    "county": "\u5fb7\u4fdd\u53bf",
    "parent": "2374"
}, {"id": "2381", "county": "\u9756\u897f\u53bf", "parent": "2374"}, {
    "id": "2382",
    "county": "\u90a3\u5761\u53bf",
    "parent": "2374"
}, {"id": "2383", "county": "\u51cc\u4e91\u53bf", "parent": "2374"}, {
    "id": "2384",
    "county": "\u4e50\u4e1a\u53bf",
    "parent": "2374"
}, {"id": "2385", "county": "\u7530\u6797\u53bf", "parent": "2374"}, {
    "id": "2386",
    "county": "\u897f\u6797\u53bf",
    "parent": "2374"
}, {"id": "2387", "county": "\u9686\u6797\u5404\u65cf\u81ea\u6cbb\u53bf", "parent": "2374"}, {
    "id": "2389",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2388"
}, {"id": "2390", "county": "\u516b\u6b65\u533a", "parent": "2388"}, {
    "id": "2391",
    "county": "\u5e73\u6842\u7ba1\u7406\u533a",
    "parent": "2388"
}, {"id": "2392", "county": "\u662d\u5e73\u53bf", "parent": "2388"}, {
    "id": "2393",
    "county": "\u949f\u5c71\u53bf",
    "parent": "2388"
}, {"id": "2394", "county": "\u5bcc\u5ddd\u7476\u65cf\u81ea\u6cbb\u53bf", "parent": "2388"}, {
    "id": "2396",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2395"
}, {"id": "2397", "county": "\u91d1\u57ce\u6c5f\u533a", "parent": "2395"}, {
    "id": "2398",
    "county": "\u5357\u4e39\u53bf",
    "parent": "2395"
}, {"id": "2399", "county": "\u5929\u5ce8\u53bf", "parent": "2395"}, {
    "id": "2400",
    "county": "\u51e4\u5c71\u53bf",
    "parent": "2395"
}, {"id": "2401", "county": "\u4e1c\u5170\u53bf", "parent": "2395"}, {
    "id": "2402",
    "county": "\u7f57\u57ce\u4eeb\u4f6c\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2395"
}, {"id": "2403", "county": "\u73af\u6c5f\u6bdb\u5357\u65cf\u81ea\u6cbb\u53bf", "parent": "2395"}, {
    "id": "2404",
    "county": "\u5df4\u9a6c\u7476\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2395"
}, {"id": "2405", "county": "\u90fd\u5b89\u7476\u65cf\u81ea\u6cbb\u53bf", "parent": "2395"}, {
    "id": "2406",
    "county": "\u5927\u5316\u7476\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2395"
}, {"id": "2407", "county": "\u5b9c\u5dde\u5e02", "parent": "2395"}, {
    "id": "2409",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2408"
}, {"id": "2410", "county": "\u5174\u5bbe\u533a", "parent": "2408"}, {
    "id": "2411",
    "county": "\u5ffb\u57ce\u53bf",
    "parent": "2408"
}, {"id": "2412", "county": "\u8c61\u5dde\u53bf", "parent": "2408"}, {
    "id": "2413",
    "county": "\u6b66\u5ba3\u53bf",
    "parent": "2408"
}, {"id": "2414", "county": "\u91d1\u79c0\u7476\u65cf\u81ea\u6cbb\u53bf", "parent": "2408"}, {
    "id": "2415",
    "county": "\u5408\u5c71\u5e02",
    "parent": "2408"
}, {"id": "2417", "county": "\u5e02\u8f96\u533a", "parent": "2416"}, {
    "id": "2418",
    "county": "\u6c5f\u5dde\u533a",
    "parent": "2416"
}, {"id": "2419", "county": "\u6276\u7ee5\u53bf", "parent": "2416"}, {
    "id": "2420",
    "county": "\u5b81\u660e\u53bf",
    "parent": "2416"
}, {"id": "2421", "county": "\u9f99\u5dde\u53bf", "parent": "2416"}, {
    "id": "2422",
    "county": "\u5927\u65b0\u53bf",
    "parent": "2416"
}, {"id": "2423", "county": "\u5929\u7b49\u53bf", "parent": "2416"}, {
    "id": "2424",
    "county": "\u51ed\u7965\u5e02",
    "parent": "2416"
}, {"id": "2427", "county": "\u5e02\u8f96\u533a", "parent": "2426"}, {
    "id": "2428",
    "county": "\u79c0\u82f1\u533a",
    "parent": "2426"
}, {"id": "2429", "county": "\u9f99\u534e\u533a", "parent": "2426"}, {
    "id": "2430",
    "county": "\u743c\u5c71\u533a",
    "parent": "2426"
}, {"id": "2431", "county": "\u7f8e\u5170\u533a", "parent": "2426"}, {
    "id": "2433",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2432"
}, {"id": "2434", "county": "\u6d77\u68e0\u533a", "parent": "2432"}, {
    "id": "2435",
    "county": "\u5409\u9633\u533a",
    "parent": "2432"
}, {"id": "2436", "county": "\u5929\u6daf\u533a", "parent": "2432"}, {
    "id": "2437",
    "county": "\u5d16\u5dde\u533a",
    "parent": "2432"
}, {"id": "2439", "county": "\u897f\u6c99\u7fa4\u5c9b", "parent": "2438"}, {
    "id": "2440",
    "county": "\u5357\u6c99\u7fa4\u5c9b",
    "parent": "2438"
}, {
    "id": "2441",
    "county": "\u4e2d\u6c99\u7fa4\u5c9b\u7684\u5c9b\u7901\u53ca\u5176\u6d77\u57df",
    "parent": "2438"
}, {"id": "2443", "county": "\u4e94\u6307\u5c71\u5e02", "parent": "2442"}, {
    "id": "2444",
    "county": "\u743c\u6d77\u5e02",
    "parent": "2442"
}, {"id": "2445", "county": "\u510b\u5dde\u5e02", "parent": "2442"}, {
    "id": "2446",
    "county": "\u6587\u660c\u5e02",
    "parent": "2442"
}, {"id": "2447", "county": "\u4e07\u5b81\u5e02", "parent": "2442"}, {
    "id": "2448",
    "county": "\u4e1c\u65b9\u5e02",
    "parent": "2442"
}, {"id": "2449", "county": "\u5b9a\u5b89\u53bf", "parent": "2442"}, {
    "id": "2450",
    "county": "\u5c6f\u660c\u53bf",
    "parent": "2442"
}, {"id": "2451", "county": "\u6f84\u8fc8\u53bf", "parent": "2442"}, {
    "id": "2452",
    "county": "\u4e34\u9ad8\u53bf",
    "parent": "2442"
}, {"id": "2453", "county": "\u767d\u6c99\u9ece\u65cf\u81ea\u6cbb\u53bf", "parent": "2442"}, {
    "id": "2454",
    "county": "\u660c\u6c5f\u9ece\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2442"
}, {"id": "2455", "county": "\u4e50\u4e1c\u9ece\u65cf\u81ea\u6cbb\u53bf", "parent": "2442"}, {
    "id": "2456",
    "county": "\u9675\u6c34\u9ece\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2442"
}, {"id": "2457", "county": "\u4fdd\u4ead\u9ece\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf", "parent": "2442"}, {
    "id": "2458",
    "county": "\u743c\u4e2d\u9ece\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2442"
}, {"id": "2460", "county": "\u4e07\u5dde\u533a", "parent": "2459"}, {
    "id": "2461",
    "county": "\u6daa\u9675\u533a",
    "parent": "2459"
}, {"id": "2462", "county": "\u6e1d\u4e2d\u533a", "parent": "2459"}, {
    "id": "2463",
    "county": "\u5927\u6e21\u53e3\u533a",
    "parent": "2459"
}, {"id": "2464", "county": "\u6c5f\u5317\u533a", "parent": "2459"}, {
    "id": "2465",
    "county": "\u6c99\u576a\u575d\u533a",
    "parent": "2459"
}, {"id": "2466", "county": "\u4e5d\u9f99\u5761\u533a", "parent": "2459"}, {
    "id": "2467",
    "county": "\u5357\u5cb8\u533a",
    "parent": "2459"
}, {"id": "2468", "county": "\u5317\u789a\u533a", "parent": "2459"}, {
    "id": "2469",
    "county": "\u7da6\u6c5f\u533a",
    "parent": "2459"
}, {"id": "2470", "county": "\u5927\u8db3\u533a", "parent": "2459"}, {
    "id": "2471",
    "county": "\u6e1d\u5317\u533a",
    "parent": "2459"
}, {"id": "2472", "county": "\u5df4\u5357\u533a", "parent": "2459"}, {
    "id": "2473",
    "county": "\u9ed4\u6c5f\u533a",
    "parent": "2459"
}, {"id": "2474", "county": "\u957f\u5bff\u533a", "parent": "2459"}, {
    "id": "2475",
    "county": "\u6c5f\u6d25\u533a",
    "parent": "2459"
}, {"id": "2476", "county": "\u5408\u5ddd\u533a", "parent": "2459"}, {
    "id": "2477",
    "county": "\u6c38\u5ddd\u533a",
    "parent": "2459"
}, {"id": "2478", "county": "\u5357\u5ddd\u533a", "parent": "2459"}, {
    "id": "2479",
    "county": "\u74a7\u5c71\u533a",
    "parent": "2459"
}, {"id": "2480", "county": "\u94dc\u6881\u533a", "parent": "2459"}, {
    "id": "2481",
    "county": "\u6f7c\u5357\u53bf",
    "parent": "2459"
}, {"id": "2482", "county": "\u8363\u660c\u53bf", "parent": "2459"}, {
    "id": "2483",
    "county": "\u6881\u5e73\u53bf",
    "parent": "2459"
}, {"id": "2484", "county": "\u57ce\u53e3\u53bf", "parent": "2459"}, {
    "id": "2485",
    "county": "\u4e30\u90fd\u53bf",
    "parent": "2459"
}, {"id": "2486", "county": "\u57ab\u6c5f\u53bf", "parent": "2459"}, {
    "id": "2487",
    "county": "\u6b66\u9686\u53bf",
    "parent": "2459"
}, {"id": "2488", "county": "\u5fe0\u53bf", "parent": "2459"}, {
    "id": "2489",
    "county": "\u5f00\u53bf",
    "parent": "2459"
}, {"id": "2490", "county": "\u4e91\u9633\u53bf", "parent": "2459"}, {
    "id": "2491",
    "county": "\u5949\u8282\u53bf",
    "parent": "2459"
}, {"id": "2492", "county": "\u5deb\u5c71\u53bf", "parent": "2459"}, {
    "id": "2493",
    "county": "\u5deb\u6eaa\u53bf",
    "parent": "2459"
}, {"id": "2494", "county": "\u77f3\u67f1\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf", "parent": "2459"}, {
    "id": "2495",
    "county": "\u79c0\u5c71\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2459"
}, {
    "id": "2496",
    "county": "\u9149\u9633\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2459"
}, {
    "id": "2497",
    "county": "\u5f6d\u6c34\u82d7\u65cf\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2459"
}, {"id": "2500", "county": "\u5e02\u8f96\u533a", "parent": "2499"}, {
    "id": "2501",
    "county": "\u9526\u6c5f\u533a",
    "parent": "2499"
}, {"id": "2502", "county": "\u9752\u7f8a\u533a", "parent": "2499"}, {
    "id": "2503",
    "county": "\u91d1\u725b\u533a",
    "parent": "2499"
}, {"id": "2504", "county": "\u6b66\u4faf\u533a", "parent": "2499"}, {
    "id": "2505",
    "county": "\u6210\u534e\u533a",
    "parent": "2499"
}, {"id": "2506", "county": "\u9f99\u6cc9\u9a7f\u533a", "parent": "2499"}, {
    "id": "2507",
    "county": "\u9752\u767d\u6c5f\u533a",
    "parent": "2499"
}, {"id": "2508", "county": "\u65b0\u90fd\u533a", "parent": "2499"}, {
    "id": "2509",
    "county": "\u6e29\u6c5f\u533a",
    "parent": "2499"
}, {"id": "2510", "county": "\u91d1\u5802\u53bf", "parent": "2499"}, {
    "id": "2511",
    "county": "\u53cc\u6d41\u53bf",
    "parent": "2499"
}, {"id": "2512", "county": "\u90eb\u53bf", "parent": "2499"}, {
    "id": "2513",
    "county": "\u5927\u9091\u53bf",
    "parent": "2499"
}, {"id": "2514", "county": "\u84b2\u6c5f\u53bf", "parent": "2499"}, {
    "id": "2515",
    "county": "\u65b0\u6d25\u53bf",
    "parent": "2499"
}, {"id": "2516", "county": "\u90fd\u6c5f\u5830\u5e02", "parent": "2499"}, {
    "id": "2517",
    "county": "\u5f6d\u5dde\u5e02",
    "parent": "2499"
}, {"id": "2518", "county": "\u909b\u5d03\u5e02", "parent": "2499"}, {
    "id": "2519",
    "county": "\u5d07\u5dde\u5e02",
    "parent": "2499"
}, {"id": "2521", "county": "\u5e02\u8f96\u533a", "parent": "2520"}, {
    "id": "2522",
    "county": "\u81ea\u6d41\u4e95\u533a",
    "parent": "2520"
}, {"id": "2523", "county": "\u8d21\u4e95\u533a", "parent": "2520"}, {
    "id": "2524",
    "county": "\u5927\u5b89\u533a",
    "parent": "2520"
}, {"id": "2525", "county": "\u6cbf\u6ee9\u533a", "parent": "2520"}, {
    "id": "2526",
    "county": "\u8363\u53bf",
    "parent": "2520"
}, {"id": "2527", "county": "\u5bcc\u987a\u53bf", "parent": "2520"}, {
    "id": "2529",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2528"
}, {"id": "2530", "county": "\u4e1c\u533a", "parent": "2528"}, {
    "id": "2531",
    "county": "\u897f\u533a",
    "parent": "2528"
}, {"id": "2532", "county": "\u4ec1\u548c\u533a", "parent": "2528"}, {
    "id": "2533",
    "county": "\u7c73\u6613\u53bf",
    "parent": "2528"
}, {"id": "2534", "county": "\u76d0\u8fb9\u53bf", "parent": "2528"}, {
    "id": "2536",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2535"
}, {"id": "2537", "county": "\u6c5f\u9633\u533a", "parent": "2535"}, {
    "id": "2538",
    "county": "\u7eb3\u6eaa\u533a",
    "parent": "2535"
}, {"id": "2539", "county": "\u9f99\u9a6c\u6f6d\u533a", "parent": "2535"}, {
    "id": "2540",
    "county": "\u6cf8\u53bf",
    "parent": "2535"
}, {"id": "2541", "county": "\u5408\u6c5f\u53bf", "parent": "2535"}, {
    "id": "2542",
    "county": "\u53d9\u6c38\u53bf",
    "parent": "2535"
}, {"id": "2543", "county": "\u53e4\u853a\u53bf", "parent": "2535"}, {
    "id": "2545",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2544"
}, {"id": "2546", "county": "\u65cc\u9633\u533a", "parent": "2544"}, {
    "id": "2547",
    "county": "\u4e2d\u6c5f\u53bf",
    "parent": "2544"
}, {"id": "2548", "county": "\u7f57\u6c5f\u53bf", "parent": "2544"}, {
    "id": "2549",
    "county": "\u5e7f\u6c49\u5e02",
    "parent": "2544"
}, {"id": "2550", "county": "\u4ec0\u90a1\u5e02", "parent": "2544"}, {
    "id": "2551",
    "county": "\u7ef5\u7af9\u5e02",
    "parent": "2544"
}, {"id": "2553", "county": "\u5e02\u8f96\u533a", "parent": "2552"}, {
    "id": "2554",
    "county": "\u6daa\u57ce\u533a",
    "parent": "2552"
}, {"id": "2555", "county": "\u6e38\u4ed9\u533a", "parent": "2552"}, {
    "id": "2556",
    "county": "\u4e09\u53f0\u53bf",
    "parent": "2552"
}, {"id": "2557", "county": "\u76d0\u4ead\u53bf", "parent": "2552"}, {
    "id": "2558",
    "county": "\u5b89\u53bf",
    "parent": "2552"
}, {"id": "2559", "county": "\u6893\u6f7c\u53bf", "parent": "2552"}, {
    "id": "2560",
    "county": "\u5317\u5ddd\u7f8c\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2552"
}, {"id": "2561", "county": "\u5e73\u6b66\u53bf", "parent": "2552"}, {
    "id": "2562",
    "county": "\u6c5f\u6cb9\u5e02",
    "parent": "2552"
}, {"id": "2564", "county": "\u5e02\u8f96\u533a", "parent": "2563"}, {
    "id": "2565",
    "county": "\u5229\u5dde\u533a",
    "parent": "2563"
}, {"id": "2566", "county": "\u662d\u5316\u533a", "parent": "2563"}, {
    "id": "2567",
    "county": "\u671d\u5929\u533a",
    "parent": "2563"
}, {"id": "2568", "county": "\u65fa\u82cd\u53bf", "parent": "2563"}, {
    "id": "2569",
    "county": "\u9752\u5ddd\u53bf",
    "parent": "2563"
}, {"id": "2570", "county": "\u5251\u9601\u53bf", "parent": "2563"}, {
    "id": "2571",
    "county": "\u82cd\u6eaa\u53bf",
    "parent": "2563"
}, {"id": "2573", "county": "\u5e02\u8f96\u533a", "parent": "2572"}, {
    "id": "2574",
    "county": "\u8239\u5c71\u533a",
    "parent": "2572"
}, {"id": "2575", "county": "\u5b89\u5c45\u533a", "parent": "2572"}, {
    "id": "2576",
    "county": "\u84ec\u6eaa\u53bf",
    "parent": "2572"
}, {"id": "2577", "county": "\u5c04\u6d2a\u53bf", "parent": "2572"}, {
    "id": "2578",
    "county": "\u5927\u82f1\u53bf",
    "parent": "2572"
}, {"id": "2580", "county": "\u5e02\u8f96\u533a", "parent": "2579"}, {
    "id": "2581",
    "county": "\u5e02\u4e2d\u533a",
    "parent": "2579"
}, {"id": "2582", "county": "\u4e1c\u5174\u533a", "parent": "2579"}, {
    "id": "2583",
    "county": "\u5a01\u8fdc\u53bf",
    "parent": "2579"
}, {"id": "2584", "county": "\u8d44\u4e2d\u53bf", "parent": "2579"}, {
    "id": "2585",
    "county": "\u9686\u660c\u53bf",
    "parent": "2579"
}, {"id": "2587", "county": "\u5e02\u8f96\u533a", "parent": "2586"}, {
    "id": "2588",
    "county": "\u5e02\u4e2d\u533a",
    "parent": "2586"
}, {"id": "2589", "county": "\u6c99\u6e7e\u533a", "parent": "2586"}, {
    "id": "2590",
    "county": "\u4e94\u901a\u6865\u533a",
    "parent": "2586"
}, {"id": "2591", "county": "\u91d1\u53e3\u6cb3\u533a", "parent": "2586"}, {
    "id": "2592",
    "county": "\u728d\u4e3a\u53bf",
    "parent": "2586"
}, {"id": "2593", "county": "\u4e95\u7814\u53bf", "parent": "2586"}, {
    "id": "2594",
    "county": "\u5939\u6c5f\u53bf",
    "parent": "2586"
}, {"id": "2595", "county": "\u6c90\u5ddd\u53bf", "parent": "2586"}, {
    "id": "2596",
    "county": "\u5ce8\u8fb9\u5f5d\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2586"
}, {"id": "2597", "county": "\u9a6c\u8fb9\u5f5d\u65cf\u81ea\u6cbb\u53bf", "parent": "2586"}, {
    "id": "2598",
    "county": "\u5ce8\u7709\u5c71\u5e02",
    "parent": "2586"
}, {"id": "2600", "county": "\u5e02\u8f96\u533a", "parent": "2599"}, {
    "id": "2601",
    "county": "\u987a\u5e86\u533a",
    "parent": "2599"
}, {"id": "2602", "county": "\u9ad8\u576a\u533a", "parent": "2599"}, {
    "id": "2603",
    "county": "\u5609\u9675\u533a",
    "parent": "2599"
}, {"id": "2604", "county": "\u5357\u90e8\u53bf", "parent": "2599"}, {
    "id": "2605",
    "county": "\u8425\u5c71\u53bf",
    "parent": "2599"
}, {"id": "2606", "county": "\u84ec\u5b89\u53bf", "parent": "2599"}, {
    "id": "2607",
    "county": "\u4eea\u9647\u53bf",
    "parent": "2599"
}, {"id": "2608", "county": "\u897f\u5145\u53bf", "parent": "2599"}, {
    "id": "2609",
    "county": "\u9606\u4e2d\u5e02",
    "parent": "2599"
}, {"id": "2611", "county": "\u5e02\u8f96\u533a", "parent": "2610"}, {
    "id": "2612",
    "county": "\u4e1c\u5761\u533a",
    "parent": "2610"
}, {"id": "2613", "county": "\u5f6d\u5c71\u533a", "parent": "2610"}, {
    "id": "2614",
    "county": "\u4ec1\u5bff\u53bf",
    "parent": "2610"
}, {"id": "2615", "county": "\u6d2a\u96c5\u53bf", "parent": "2610"}, {
    "id": "2616",
    "county": "\u4e39\u68f1\u53bf",
    "parent": "2610"
}, {"id": "2617", "county": "\u9752\u795e\u53bf", "parent": "2610"}, {
    "id": "2619",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2618"
}, {"id": "2620", "county": "\u7fe0\u5c4f\u533a", "parent": "2618"}, {
    "id": "2621",
    "county": "\u5357\u6eaa\u533a",
    "parent": "2618"
}, {"id": "2622", "county": "\u5b9c\u5bbe\u53bf", "parent": "2618"}, {
    "id": "2623",
    "county": "\u6c5f\u5b89\u53bf",
    "parent": "2618"
}, {"id": "2624", "county": "\u957f\u5b81\u53bf", "parent": "2618"}, {
    "id": "2625",
    "county": "\u9ad8\u53bf",
    "parent": "2618"
}, {"id": "2626", "county": "\u73d9\u53bf", "parent": "2618"}, {
    "id": "2627",
    "county": "\u7b60\u8fde\u53bf",
    "parent": "2618"
}, {"id": "2628", "county": "\u5174\u6587\u53bf", "parent": "2618"}, {
    "id": "2629",
    "county": "\u5c4f\u5c71\u53bf",
    "parent": "2618"
}, {"id": "2631", "county": "\u5e02\u8f96\u533a", "parent": "2630"}, {
    "id": "2632",
    "county": "\u5e7f\u5b89\u533a",
    "parent": "2630"
}, {"id": "2633", "county": "\u524d\u950b\u533a", "parent": "2630"}, {
    "id": "2634",
    "county": "\u5cb3\u6c60\u53bf",
    "parent": "2630"
}, {"id": "2635", "county": "\u6b66\u80dc\u53bf", "parent": "2630"}, {
    "id": "2636",
    "county": "\u90bb\u6c34\u53bf",
    "parent": "2630"
}, {"id": "2637", "county": "\u534e\u84e5\u5e02", "parent": "2630"}, {
    "id": "2639",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2638"
}, {"id": "2640", "county": "\u901a\u5ddd\u533a", "parent": "2638"}, {
    "id": "2641",
    "county": "\u8fbe\u5ddd\u533a",
    "parent": "2638"
}, {"id": "2642", "county": "\u5ba3\u6c49\u53bf", "parent": "2638"}, {
    "id": "2643",
    "county": "\u5f00\u6c5f\u53bf",
    "parent": "2638"
}, {"id": "2644", "county": "\u5927\u7af9\u53bf", "parent": "2638"}, {
    "id": "2645",
    "county": "\u6e20\u53bf",
    "parent": "2638"
}, {"id": "2646", "county": "\u4e07\u6e90\u5e02", "parent": "2638"}, {
    "id": "2648",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2647"
}, {"id": "2649", "county": "\u96e8\u57ce\u533a", "parent": "2647"}, {
    "id": "2650",
    "county": "\u540d\u5c71\u533a",
    "parent": "2647"
}, {"id": "2651", "county": "\u8365\u7ecf\u53bf", "parent": "2647"}, {
    "id": "2652",
    "county": "\u6c49\u6e90\u53bf",
    "parent": "2647"
}, {"id": "2653", "county": "\u77f3\u68c9\u53bf", "parent": "2647"}, {
    "id": "2654",
    "county": "\u5929\u5168\u53bf",
    "parent": "2647"
}, {"id": "2655", "county": "\u82a6\u5c71\u53bf", "parent": "2647"}, {
    "id": "2656",
    "county": "\u5b9d\u5174\u53bf",
    "parent": "2647"
}, {"id": "2658", "county": "\u5e02\u8f96\u533a", "parent": "2657"}, {
    "id": "2659",
    "county": "\u5df4\u5dde\u533a",
    "parent": "2657"
}, {"id": "2660", "county": "\u6069\u9633\u533a", "parent": "2657"}, {
    "id": "2661",
    "county": "\u901a\u6c5f\u53bf",
    "parent": "2657"
}, {"id": "2662", "county": "\u5357\u6c5f\u53bf", "parent": "2657"}, {
    "id": "2663",
    "county": "\u5e73\u660c\u53bf",
    "parent": "2657"
}, {"id": "2665", "county": "\u5e02\u8f96\u533a", "parent": "2664"}, {
    "id": "2666",
    "county": "\u96c1\u6c5f\u533a",
    "parent": "2664"
}, {"id": "2667", "county": "\u5b89\u5cb3\u53bf", "parent": "2664"}, {
    "id": "2668",
    "county": "\u4e50\u81f3\u53bf",
    "parent": "2664"
}, {"id": "2669", "county": "\u7b80\u9633\u5e02", "parent": "2664"}, {
    "id": "2671",
    "county": "\u6c76\u5ddd\u53bf",
    "parent": "2670"
}, {"id": "2672", "county": "\u7406\u53bf", "parent": "2670"}, {
    "id": "2673",
    "county": "\u8302\u53bf",
    "parent": "2670"
}, {"id": "2674", "county": "\u677e\u6f58\u53bf", "parent": "2670"}, {
    "id": "2675",
    "county": "\u4e5d\u5be8\u6c9f\u53bf",
    "parent": "2670"
}, {"id": "2676", "county": "\u91d1\u5ddd\u53bf", "parent": "2670"}, {
    "id": "2677",
    "county": "\u5c0f\u91d1\u53bf",
    "parent": "2670"
}, {"id": "2678", "county": "\u9ed1\u6c34\u53bf", "parent": "2670"}, {
    "id": "2679",
    "county": "\u9a6c\u5c14\u5eb7\u53bf",
    "parent": "2670"
}, {"id": "2680", "county": "\u58e4\u5858\u53bf", "parent": "2670"}, {
    "id": "2681",
    "county": "\u963f\u575d\u53bf",
    "parent": "2670"
}, {"id": "2682", "county": "\u82e5\u5c14\u76d6\u53bf", "parent": "2670"}, {
    "id": "2683",
    "county": "\u7ea2\u539f\u53bf",
    "parent": "2670"
}, {"id": "2685", "county": "\u5eb7\u5b9a\u53bf", "parent": "2684"}, {
    "id": "2686",
    "county": "\u6cf8\u5b9a\u53bf",
    "parent": "2684"
}, {"id": "2687", "county": "\u4e39\u5df4\u53bf", "parent": "2684"}, {
    "id": "2688",
    "county": "\u4e5d\u9f99\u53bf",
    "parent": "2684"
}, {"id": "2689", "county": "\u96c5\u6c5f\u53bf", "parent": "2684"}, {
    "id": "2690",
    "county": "\u9053\u5b5a\u53bf",
    "parent": "2684"
}, {"id": "2691", "county": "\u7089\u970d\u53bf", "parent": "2684"}, {
    "id": "2692",
    "county": "\u7518\u5b5c\u53bf",
    "parent": "2684"
}, {"id": "2693", "county": "\u65b0\u9f99\u53bf", "parent": "2684"}, {
    "id": "2694",
    "county": "\u5fb7\u683c\u53bf",
    "parent": "2684"
}, {"id": "2695", "county": "\u767d\u7389\u53bf", "parent": "2684"}, {
    "id": "2696",
    "county": "\u77f3\u6e20\u53bf",
    "parent": "2684"
}, {"id": "2697", "county": "\u8272\u8fbe\u53bf", "parent": "2684"}, {
    "id": "2698",
    "county": "\u7406\u5858\u53bf",
    "parent": "2684"
}, {"id": "2699", "county": "\u5df4\u5858\u53bf", "parent": "2684"}, {
    "id": "2700",
    "county": "\u4e61\u57ce\u53bf",
    "parent": "2684"
}, {"id": "2701", "county": "\u7a3b\u57ce\u53bf", "parent": "2684"}, {
    "id": "2702",
    "county": "\u5f97\u8363\u53bf",
    "parent": "2684"
}, {"id": "2704", "county": "\u897f\u660c\u5e02", "parent": "2703"}, {
    "id": "2705",
    "county": "\u6728\u91cc\u85cf\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2703"
}, {"id": "2706", "county": "\u76d0\u6e90\u53bf", "parent": "2703"}, {
    "id": "2707",
    "county": "\u5fb7\u660c\u53bf",
    "parent": "2703"
}, {"id": "2708", "county": "\u4f1a\u7406\u53bf", "parent": "2703"}, {
    "id": "2709",
    "county": "\u4f1a\u4e1c\u53bf",
    "parent": "2703"
}, {"id": "2710", "county": "\u5b81\u5357\u53bf", "parent": "2703"}, {
    "id": "2711",
    "county": "\u666e\u683c\u53bf",
    "parent": "2703"
}, {"id": "2712", "county": "\u5e03\u62d6\u53bf", "parent": "2703"}, {
    "id": "2713",
    "county": "\u91d1\u9633\u53bf",
    "parent": "2703"
}, {"id": "2714", "county": "\u662d\u89c9\u53bf", "parent": "2703"}, {
    "id": "2715",
    "county": "\u559c\u5fb7\u53bf",
    "parent": "2703"
}, {"id": "2716", "county": "\u5195\u5b81\u53bf", "parent": "2703"}, {
    "id": "2717",
    "county": "\u8d8a\u897f\u53bf",
    "parent": "2703"
}, {"id": "2718", "county": "\u7518\u6d1b\u53bf", "parent": "2703"}, {
    "id": "2719",
    "county": "\u7f8e\u59d1\u53bf",
    "parent": "2703"
}, {"id": "2720", "county": "\u96f7\u6ce2\u53bf", "parent": "2703"}, {
    "id": "2723",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2722"
}, {"id": "2724", "county": "\u5357\u660e\u533a", "parent": "2722"}, {
    "id": "2725",
    "county": "\u4e91\u5ca9\u533a",
    "parent": "2722"
}, {"id": "2726", "county": "\u82b1\u6eaa\u533a", "parent": "2722"}, {
    "id": "2727",
    "county": "\u4e4c\u5f53\u533a",
    "parent": "2722"
}, {"id": "2728", "county": "\u767d\u4e91\u533a", "parent": "2722"}, {
    "id": "2729",
    "county": "\u89c2\u5c71\u6e56\u533a",
    "parent": "2722"
}, {"id": "2730", "county": "\u5f00\u9633\u53bf", "parent": "2722"}, {
    "id": "2731",
    "county": "\u606f\u70fd\u53bf",
    "parent": "2722"
}, {"id": "2732", "county": "\u4fee\u6587\u53bf", "parent": "2722"}, {
    "id": "2733",
    "county": "\u6e05\u9547\u5e02",
    "parent": "2722"
}, {"id": "2735", "county": "\u949f\u5c71\u533a", "parent": "2734"}, {
    "id": "2736",
    "county": "\u516d\u679d\u7279\u533a",
    "parent": "2734"
}, {"id": "2737", "county": "\u6c34\u57ce\u53bf", "parent": "2734"}, {
    "id": "2738",
    "county": "\u76d8\u53bf",
    "parent": "2734"
}, {"id": "2740", "county": "\u5e02\u8f96\u533a", "parent": "2739"}, {
    "id": "2741",
    "county": "\u7ea2\u82b1\u5c97\u533a",
    "parent": "2739"
}, {"id": "2742", "county": "\u6c47\u5ddd\u533a", "parent": "2739"}, {
    "id": "2743",
    "county": "\u9075\u4e49\u53bf",
    "parent": "2739"
}, {"id": "2744", "county": "\u6850\u6893\u53bf", "parent": "2739"}, {
    "id": "2745",
    "county": "\u7ee5\u9633\u53bf",
    "parent": "2739"
}, {"id": "2746", "county": "\u6b63\u5b89\u53bf", "parent": "2739"}, {
    "id": "2747",
    "county": "\u9053\u771f\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2739"
}, {
    "id": "2748",
    "county": "\u52a1\u5ddd\u4ee1\u4f6c\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2739"
}, {"id": "2749", "county": "\u51e4\u5188\u53bf", "parent": "2739"}, {
    "id": "2750",
    "county": "\u6e44\u6f6d\u53bf",
    "parent": "2739"
}, {"id": "2751", "county": "\u4f59\u5e86\u53bf", "parent": "2739"}, {
    "id": "2752",
    "county": "\u4e60\u6c34\u53bf",
    "parent": "2739"
}, {"id": "2753", "county": "\u8d64\u6c34\u5e02", "parent": "2739"}, {
    "id": "2754",
    "county": "\u4ec1\u6000\u5e02",
    "parent": "2739"
}, {"id": "2756", "county": "\u5e02\u8f96\u533a", "parent": "2755"}, {
    "id": "2757",
    "county": "\u897f\u79c0\u533a",
    "parent": "2755"
}, {"id": "2758", "county": "\u5e73\u575d\u533a", "parent": "2755"}, {
    "id": "2759",
    "county": "\u666e\u5b9a\u53bf",
    "parent": "2755"
}, {
    "id": "2760",
    "county": "\u9547\u5b81\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2755"
}, {
    "id": "2761",
    "county": "\u5173\u5cad\u5e03\u4f9d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2755"
}, {
    "id": "2762",
    "county": "\u7d2b\u4e91\u82d7\u65cf\u5e03\u4f9d\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2755"
}, {"id": "2764", "county": "\u5e02\u8f96\u533a", "parent": "2763"}, {
    "id": "2765",
    "county": "\u4e03\u661f\u5173\u533a",
    "parent": "2763"
}, {"id": "2766", "county": "\u5927\u65b9\u53bf", "parent": "2763"}, {
    "id": "2767",
    "county": "\u9ed4\u897f\u53bf",
    "parent": "2763"
}, {"id": "2768", "county": "\u91d1\u6c99\u53bf", "parent": "2763"}, {
    "id": "2769",
    "county": "\u7ec7\u91d1\u53bf",
    "parent": "2763"
}, {"id": "2770", "county": "\u7eb3\u96cd\u53bf", "parent": "2763"}, {
    "id": "2771",
    "county": "\u5a01\u5b81\u5f5d\u65cf\u56de\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2763"
}, {"id": "2772", "county": "\u8d6b\u7ae0\u53bf", "parent": "2763"}, {
    "id": "2774",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2773"
}, {"id": "2775", "county": "\u78a7\u6c5f\u533a", "parent": "2773"}, {
    "id": "2776",
    "county": "\u4e07\u5c71\u533a",
    "parent": "2773"
}, {"id": "2777", "county": "\u6c5f\u53e3\u53bf", "parent": "2773"}, {
    "id": "2778",
    "county": "\u7389\u5c4f\u4f97\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2773"
}, {"id": "2779", "county": "\u77f3\u9621\u53bf", "parent": "2773"}, {
    "id": "2780",
    "county": "\u601d\u5357\u53bf",
    "parent": "2773"
}, {
    "id": "2781",
    "county": "\u5370\u6c5f\u571f\u5bb6\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2773"
}, {"id": "2782", "county": "\u5fb7\u6c5f\u53bf", "parent": "2773"}, {
    "id": "2783",
    "county": "\u6cbf\u6cb3\u571f\u5bb6\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2773"
}, {"id": "2784", "county": "\u677e\u6843\u82d7\u65cf\u81ea\u6cbb\u53bf", "parent": "2773"}, {
    "id": "2786",
    "county": "\u5174\u4e49\u5e02",
    "parent": "2785"
}, {"id": "2787", "county": "\u5174\u4ec1\u53bf", "parent": "2785"}, {
    "id": "2788",
    "county": "\u666e\u5b89\u53bf",
    "parent": "2785"
}, {"id": "2789", "county": "\u6674\u9686\u53bf", "parent": "2785"}, {
    "id": "2790",
    "county": "\u8d1e\u4e30\u53bf",
    "parent": "2785"
}, {"id": "2791", "county": "\u671b\u8c1f\u53bf", "parent": "2785"}, {
    "id": "2792",
    "county": "\u518c\u4ea8\u53bf",
    "parent": "2785"
}, {"id": "2793", "county": "\u5b89\u9f99\u53bf", "parent": "2785"}, {
    "id": "2795",
    "county": "\u51ef\u91cc\u5e02",
    "parent": "2794"
}, {"id": "2796", "county": "\u9ec4\u5e73\u53bf", "parent": "2794"}, {
    "id": "2797",
    "county": "\u65bd\u79c9\u53bf",
    "parent": "2794"
}, {"id": "2798", "county": "\u4e09\u7a57\u53bf", "parent": "2794"}, {
    "id": "2799",
    "county": "\u9547\u8fdc\u53bf",
    "parent": "2794"
}, {"id": "2800", "county": "\u5c91\u5de9\u53bf", "parent": "2794"}, {
    "id": "2801",
    "county": "\u5929\u67f1\u53bf",
    "parent": "2794"
}, {"id": "2802", "county": "\u9526\u5c4f\u53bf", "parent": "2794"}, {
    "id": "2803",
    "county": "\u5251\u6cb3\u53bf",
    "parent": "2794"
}, {"id": "2804", "county": "\u53f0\u6c5f\u53bf", "parent": "2794"}, {
    "id": "2805",
    "county": "\u9ece\u5e73\u53bf",
    "parent": "2794"
}, {"id": "2806", "county": "\u6995\u6c5f\u53bf", "parent": "2794"}, {
    "id": "2807",
    "county": "\u4ece\u6c5f\u53bf",
    "parent": "2794"
}, {"id": "2808", "county": "\u96f7\u5c71\u53bf", "parent": "2794"}, {
    "id": "2809",
    "county": "\u9ebb\u6c5f\u53bf",
    "parent": "2794"
}, {"id": "2810", "county": "\u4e39\u5be8\u53bf", "parent": "2794"}, {
    "id": "2812",
    "county": "\u90fd\u5300\u5e02",
    "parent": "2811"
}, {"id": "2813", "county": "\u798f\u6cc9\u5e02", "parent": "2811"}, {
    "id": "2814",
    "county": "\u8354\u6ce2\u53bf",
    "parent": "2811"
}, {"id": "2815", "county": "\u8d35\u5b9a\u53bf", "parent": "2811"}, {
    "id": "2816",
    "county": "\u74ee\u5b89\u53bf",
    "parent": "2811"
}, {"id": "2817", "county": "\u72ec\u5c71\u53bf", "parent": "2811"}, {
    "id": "2818",
    "county": "\u5e73\u5858\u53bf",
    "parent": "2811"
}, {"id": "2819", "county": "\u7f57\u7538\u53bf", "parent": "2811"}, {
    "id": "2820",
    "county": "\u957f\u987a\u53bf",
    "parent": "2811"
}, {"id": "2821", "county": "\u9f99\u91cc\u53bf", "parent": "2811"}, {
    "id": "2822",
    "county": "\u60e0\u6c34\u53bf",
    "parent": "2811"
}, {"id": "2823", "county": "\u4e09\u90fd\u6c34\u65cf\u81ea\u6cbb\u53bf", "parent": "2811"}, {
    "id": "2826",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2825"
}, {"id": "2827", "county": "\u4e94\u534e\u533a", "parent": "2825"}, {
    "id": "2828",
    "county": "\u76d8\u9f99\u533a",
    "parent": "2825"
}, {"id": "2829", "county": "\u5b98\u6e21\u533a", "parent": "2825"}, {
    "id": "2830",
    "county": "\u897f\u5c71\u533a",
    "parent": "2825"
}, {"id": "2831", "county": "\u4e1c\u5ddd\u533a", "parent": "2825"}, {
    "id": "2832",
    "county": "\u5448\u8d21\u533a",
    "parent": "2825"
}, {"id": "2833", "county": "\u664b\u5b81\u53bf", "parent": "2825"}, {
    "id": "2834",
    "county": "\u5bcc\u6c11\u53bf",
    "parent": "2825"
}, {"id": "2835", "county": "\u5b9c\u826f\u53bf", "parent": "2825"}, {
    "id": "2836",
    "county": "\u77f3\u6797\u5f5d\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2825"
}, {"id": "2837", "county": "\u5d69\u660e\u53bf", "parent": "2825"}, {
    "id": "2838",
    "county": "\u7984\u529d\u5f5d\u65cf\u82d7\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2825"
}, {"id": "2839", "county": "\u5bfb\u7538\u56de\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf", "parent": "2825"}, {
    "id": "2840",
    "county": "\u5b89\u5b81\u5e02",
    "parent": "2825"
}, {"id": "2842", "county": "\u5e02\u8f96\u533a", "parent": "2841"}, {
    "id": "2843",
    "county": "\u9e92\u9e9f\u533a",
    "parent": "2841"
}, {"id": "2844", "county": "\u9a6c\u9f99\u53bf", "parent": "2841"}, {
    "id": "2845",
    "county": "\u9646\u826f\u53bf",
    "parent": "2841"
}, {"id": "2846", "county": "\u5e08\u5b97\u53bf", "parent": "2841"}, {
    "id": "2847",
    "county": "\u7f57\u5e73\u53bf",
    "parent": "2841"
}, {"id": "2848", "county": "\u5bcc\u6e90\u53bf", "parent": "2841"}, {
    "id": "2849",
    "county": "\u4f1a\u6cfd\u53bf",
    "parent": "2841"
}, {"id": "2850", "county": "\u6cbe\u76ca\u53bf", "parent": "2841"}, {
    "id": "2851",
    "county": "\u5ba3\u5a01\u5e02",
    "parent": "2841"
}, {"id": "2853", "county": "\u5e02\u8f96\u533a", "parent": "2852"}, {
    "id": "2854",
    "county": "\u7ea2\u5854\u533a",
    "parent": "2852"
}, {"id": "2855", "county": "\u6c5f\u5ddd\u53bf", "parent": "2852"}, {
    "id": "2856",
    "county": "\u6f84\u6c5f\u53bf",
    "parent": "2852"
}, {"id": "2857", "county": "\u901a\u6d77\u53bf", "parent": "2852"}, {
    "id": "2858",
    "county": "\u534e\u5b81\u53bf",
    "parent": "2852"
}, {"id": "2859", "county": "\u6613\u95e8\u53bf", "parent": "2852"}, {
    "id": "2860",
    "county": "\u5ce8\u5c71\u5f5d\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2852"
}, {"id": "2861", "county": "\u65b0\u5e73\u5f5d\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf", "parent": "2852"}, {
    "id": "2862",
    "county": "\u5143\u6c5f\u54c8\u5c3c\u65cf\u5f5d\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2852"
}, {"id": "2864", "county": "\u5e02\u8f96\u533a", "parent": "2863"}, {
    "id": "2865",
    "county": "\u9686\u9633\u533a",
    "parent": "2863"
}, {"id": "2866", "county": "\u65bd\u7538\u53bf", "parent": "2863"}, {
    "id": "2867",
    "county": "\u817e\u51b2\u53bf",
    "parent": "2863"
}, {"id": "2868", "county": "\u9f99\u9675\u53bf", "parent": "2863"}, {
    "id": "2869",
    "county": "\u660c\u5b81\u53bf",
    "parent": "2863"
}, {"id": "2871", "county": "\u5e02\u8f96\u533a", "parent": "2870"}, {
    "id": "2872",
    "county": "\u662d\u9633\u533a",
    "parent": "2870"
}, {"id": "2873", "county": "\u9c81\u7538\u53bf", "parent": "2870"}, {
    "id": "2874",
    "county": "\u5de7\u5bb6\u53bf",
    "parent": "2870"
}, {"id": "2875", "county": "\u76d0\u6d25\u53bf", "parent": "2870"}, {
    "id": "2876",
    "county": "\u5927\u5173\u53bf",
    "parent": "2870"
}, {"id": "2877", "county": "\u6c38\u5584\u53bf", "parent": "2870"}, {
    "id": "2878",
    "county": "\u7ee5\u6c5f\u53bf",
    "parent": "2870"
}, {"id": "2879", "county": "\u9547\u96c4\u53bf", "parent": "2870"}, {
    "id": "2880",
    "county": "\u5f5d\u826f\u53bf",
    "parent": "2870"
}, {"id": "2881", "county": "\u5a01\u4fe1\u53bf", "parent": "2870"}, {
    "id": "2882",
    "county": "\u6c34\u5bcc\u53bf",
    "parent": "2870"
}, {"id": "2884", "county": "\u5e02\u8f96\u533a", "parent": "2883"}, {
    "id": "2885",
    "county": "\u53e4\u57ce\u533a",
    "parent": "2883"
}, {"id": "2886", "county": "\u7389\u9f99\u7eb3\u897f\u65cf\u81ea\u6cbb\u53bf", "parent": "2883"}, {
    "id": "2887",
    "county": "\u6c38\u80dc\u53bf",
    "parent": "2883"
}, {"id": "2888", "county": "\u534e\u576a\u53bf", "parent": "2883"}, {
    "id": "2889",
    "county": "\u5b81\u8497\u5f5d\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2883"
}, {"id": "2891", "county": "\u5e02\u8f96\u533a", "parent": "2890"}, {
    "id": "2892",
    "county": "\u601d\u8305\u533a",
    "parent": "2890"
}, {
    "id": "2893",
    "county": "\u5b81\u6d31\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2890"
}, {"id": "2894", "county": "\u58a8\u6c5f\u54c8\u5c3c\u65cf\u81ea\u6cbb\u53bf", "parent": "2890"}, {
    "id": "2895",
    "county": "\u666f\u4e1c\u5f5d\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2890"
}, {"id": "2896", "county": "\u666f\u8c37\u50a3\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf", "parent": "2890"}, {
    "id": "2897",
    "county": "\u9547\u6c85\u5f5d\u65cf\u54c8\u5c3c\u65cf\u62c9\u795c\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2890"
}, {
    "id": "2898",
    "county": "\u6c5f\u57ce\u54c8\u5c3c\u65cf\u5f5d\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2890"
}, {
    "id": "2899",
    "county": "\u5b5f\u8fde\u50a3\u65cf\u62c9\u795c\u65cf\u4f64\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2890"
}, {"id": "2900", "county": "\u6f9c\u6ca7\u62c9\u795c\u65cf\u81ea\u6cbb\u53bf", "parent": "2890"}, {
    "id": "2901",
    "county": "\u897f\u76df\u4f64\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2890"
}, {"id": "2903", "county": "\u5e02\u8f96\u533a", "parent": "2902"}, {
    "id": "2904",
    "county": "\u4e34\u7fd4\u533a",
    "parent": "2902"
}, {"id": "2905", "county": "\u51e4\u5e86\u53bf", "parent": "2902"}, {
    "id": "2906",
    "county": "\u4e91\u53bf",
    "parent": "2902"
}, {"id": "2907", "county": "\u6c38\u5fb7\u53bf", "parent": "2902"}, {
    "id": "2908",
    "county": "\u9547\u5eb7\u53bf",
    "parent": "2902"
}, {
    "id": "2909",
    "county": "\u53cc\u6c5f\u62c9\u795c\u65cf\u4f64\u65cf\u5e03\u6717\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2902"
}, {"id": "2910", "county": "\u803f\u9a6c\u50a3\u65cf\u4f64\u65cf\u81ea\u6cbb\u53bf", "parent": "2902"}, {
    "id": "2911",
    "county": "\u6ca7\u6e90\u4f64\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2902"
}, {"id": "2913", "county": "\u695a\u96c4\u5e02", "parent": "2912"}, {
    "id": "2914",
    "county": "\u53cc\u67cf\u53bf",
    "parent": "2912"
}, {"id": "2915", "county": "\u725f\u5b9a\u53bf", "parent": "2912"}, {
    "id": "2916",
    "county": "\u5357\u534e\u53bf",
    "parent": "2912"
}, {"id": "2917", "county": "\u59da\u5b89\u53bf", "parent": "2912"}, {
    "id": "2918",
    "county": "\u5927\u59da\u53bf",
    "parent": "2912"
}, {"id": "2919", "county": "\u6c38\u4ec1\u53bf", "parent": "2912"}, {
    "id": "2920",
    "county": "\u5143\u8c0b\u53bf",
    "parent": "2912"
}, {"id": "2921", "county": "\u6b66\u5b9a\u53bf", "parent": "2912"}, {
    "id": "2922",
    "county": "\u7984\u4e30\u53bf",
    "parent": "2912"
}, {"id": "2924", "county": "\u4e2a\u65e7\u5e02", "parent": "2923"}, {
    "id": "2925",
    "county": "\u5f00\u8fdc\u5e02",
    "parent": "2923"
}, {"id": "2926", "county": "\u8499\u81ea\u5e02", "parent": "2923"}, {
    "id": "2927",
    "county": "\u5f25\u52d2\u5e02",
    "parent": "2923"
}, {"id": "2928", "county": "\u5c4f\u8fb9\u82d7\u65cf\u81ea\u6cbb\u53bf", "parent": "2923"}, {
    "id": "2929",
    "county": "\u5efa\u6c34\u53bf",
    "parent": "2923"
}, {"id": "2930", "county": "\u77f3\u5c4f\u53bf", "parent": "2923"}, {
    "id": "2931",
    "county": "\u6cf8\u897f\u53bf",
    "parent": "2923"
}, {"id": "2932", "county": "\u5143\u9633\u53bf", "parent": "2923"}, {
    "id": "2933",
    "county": "\u7ea2\u6cb3\u53bf",
    "parent": "2923"
}, {
    "id": "2934",
    "county": "\u91d1\u5e73\u82d7\u65cf\u7476\u65cf\u50a3\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2923"
}, {"id": "2935", "county": "\u7eff\u6625\u53bf", "parent": "2923"}, {
    "id": "2936",
    "county": "\u6cb3\u53e3\u7476\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2923"
}, {"id": "2938", "county": "\u6587\u5c71\u5e02", "parent": "2937"}, {
    "id": "2939",
    "county": "\u781a\u5c71\u53bf",
    "parent": "2937"
}, {"id": "2940", "county": "\u897f\u7574\u53bf", "parent": "2937"}, {
    "id": "2941",
    "county": "\u9ebb\u6817\u5761\u53bf",
    "parent": "2937"
}, {"id": "2942", "county": "\u9a6c\u5173\u53bf", "parent": "2937"}, {
    "id": "2943",
    "county": "\u4e18\u5317\u53bf",
    "parent": "2937"
}, {"id": "2944", "county": "\u5e7f\u5357\u53bf", "parent": "2937"}, {
    "id": "2945",
    "county": "\u5bcc\u5b81\u53bf",
    "parent": "2937"
}, {"id": "2947", "county": "\u666f\u6d2a\u5e02", "parent": "2946"}, {
    "id": "2948",
    "county": "\u52d0\u6d77\u53bf",
    "parent": "2946"
}, {"id": "2949", "county": "\u52d0\u814a\u53bf", "parent": "2946"}, {
    "id": "2951",
    "county": "\u5927\u7406\u5e02",
    "parent": "2950"
}, {"id": "2952", "county": "\u6f3e\u6fde\u5f5d\u65cf\u81ea\u6cbb\u53bf", "parent": "2950"}, {
    "id": "2953",
    "county": "\u7965\u4e91\u53bf",
    "parent": "2950"
}, {"id": "2954", "county": "\u5bbe\u5ddd\u53bf", "parent": "2950"}, {
    "id": "2955",
    "county": "\u5f25\u6e21\u53bf",
    "parent": "2950"
}, {"id": "2956", "county": "\u5357\u6da7\u5f5d\u65cf\u81ea\u6cbb\u53bf", "parent": "2950"}, {
    "id": "2957",
    "county": "\u5dcd\u5c71\u5f5d\u65cf\u56de\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2950"
}, {"id": "2958", "county": "\u6c38\u5e73\u53bf", "parent": "2950"}, {
    "id": "2959",
    "county": "\u4e91\u9f99\u53bf",
    "parent": "2950"
}, {"id": "2960", "county": "\u6d31\u6e90\u53bf", "parent": "2950"}, {
    "id": "2961",
    "county": "\u5251\u5ddd\u53bf",
    "parent": "2950"
}, {"id": "2962", "county": "\u9e64\u5e86\u53bf", "parent": "2950"}, {
    "id": "2964",
    "county": "\u745e\u4e3d\u5e02",
    "parent": "2963"
}, {"id": "2965", "county": "\u8292\u5e02", "parent": "2963"}, {
    "id": "2966",
    "county": "\u6881\u6cb3\u53bf",
    "parent": "2963"
}, {"id": "2967", "county": "\u76c8\u6c5f\u53bf", "parent": "2963"}, {
    "id": "2968",
    "county": "\u9647\u5ddd\u53bf",
    "parent": "2963"
}, {"id": "2970", "county": "\u6cf8\u6c34\u53bf", "parent": "2969"}, {
    "id": "2971",
    "county": "\u798f\u8d21\u53bf",
    "parent": "2969"
}, {
    "id": "2972",
    "county": "\u8d21\u5c71\u72ec\u9f99\u65cf\u6012\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2969"
}, {
    "id": "2973",
    "county": "\u5170\u576a\u767d\u65cf\u666e\u7c73\u65cf\u81ea\u6cbb\u53bf",
    "parent": "2969"
}, {"id": "2975", "county": "\u9999\u683c\u91cc\u62c9\u5e02", "parent": "2974"}, {
    "id": "2976",
    "county": "\u5fb7\u94a6\u53bf",
    "parent": "2974"
}, {"id": "2977", "county": "\u7ef4\u897f\u5088\u50f3\u65cf\u81ea\u6cbb\u53bf", "parent": "2974"}, {
    "id": "2980",
    "county": "\u5e02\u8f96\u533a",
    "parent": "2979"
}, {"id": "2981", "county": "\u57ce\u5173\u533a", "parent": "2979"}, {
    "id": "2982",
    "county": "\u6797\u5468\u53bf",
    "parent": "2979"
}, {"id": "2983", "county": "\u5f53\u96c4\u53bf", "parent": "2979"}, {
    "id": "2984",
    "county": "\u5c3c\u6728\u53bf",
    "parent": "2979"
}, {"id": "2985", "county": "\u66f2\u6c34\u53bf", "parent": "2979"}, {
    "id": "2986",
    "county": "\u5806\u9f99\u5fb7\u5e86\u53bf",
    "parent": "2979"
}, {"id": "2987", "county": "\u8fbe\u5b5c\u53bf", "parent": "2979"}, {
    "id": "2988",
    "county": "\u58a8\u7af9\u5de5\u5361\u53bf",
    "parent": "2979"
}, {"id": "2990", "county": "\u5e02\u8f96\u533a", "parent": "2989"}, {
    "id": "2991",
    "county": "\u6851\u73e0\u5b5c\u533a",
    "parent": "2989"
}, {"id": "2992", "county": "\u5357\u6728\u6797\u53bf", "parent": "2989"}, {
    "id": "2993",
    "county": "\u6c5f\u5b5c\u53bf",
    "parent": "2989"
}, {"id": "2994", "county": "\u5b9a\u65e5\u53bf", "parent": "2989"}, {
    "id": "2995",
    "county": "\u8428\u8fe6\u53bf",
    "parent": "2989"
}, {"id": "2996", "county": "\u62c9\u5b5c\u53bf", "parent": "2989"}, {
    "id": "2997",
    "county": "\u6602\u4ec1\u53bf",
    "parent": "2989"
}, {"id": "2998", "county": "\u8c22\u901a\u95e8\u53bf", "parent": "2989"}, {
    "id": "2999",
    "county": "\u767d\u6717\u53bf",
    "parent": "2989"
}, {"id": "3000", "county": "\u4ec1\u5e03\u53bf", "parent": "2989"}, {
    "id": "3001",
    "county": "\u5eb7\u9a6c\u53bf",
    "parent": "2989"
}, {"id": "3002", "county": "\u5b9a\u7ed3\u53bf", "parent": "2989"}, {
    "id": "3003",
    "county": "\u4ef2\u5df4\u53bf",
    "parent": "2989"
}, {"id": "3004", "county": "\u4e9a\u4e1c\u53bf", "parent": "2989"}, {
    "id": "3005",
    "county": "\u5409\u9686\u53bf",
    "parent": "2989"
}, {"id": "3006", "county": "\u8042\u62c9\u6728\u53bf", "parent": "2989"}, {
    "id": "3007",
    "county": "\u8428\u560e\u53bf",
    "parent": "2989"
}, {"id": "3008", "county": "\u5c97\u5df4\u53bf", "parent": "2989"}, {
    "id": "3010",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3009"
}, {"id": "3011", "county": "\u5361\u82e5\u533a", "parent": "3009"}, {
    "id": "3012",
    "county": "\u6c5f\u8fbe\u53bf",
    "parent": "3009"
}, {"id": "3013", "county": "\u8d21\u89c9\u53bf", "parent": "3009"}, {
    "id": "3014",
    "county": "\u7c7b\u4e4c\u9f50\u53bf",
    "parent": "3009"
}, {"id": "3015", "county": "\u4e01\u9752\u53bf", "parent": "3009"}, {
    "id": "3016",
    "county": "\u5bdf\u96c5\u53bf",
    "parent": "3009"
}, {"id": "3017", "county": "\u516b\u5bbf\u53bf", "parent": "3009"}, {
    "id": "3018",
    "county": "\u5de6\u8d21\u53bf",
    "parent": "3009"
}, {"id": "3019", "county": "\u8292\u5eb7\u53bf", "parent": "3009"}, {
    "id": "3020",
    "county": "\u6d1b\u9686\u53bf",
    "parent": "3009"
}, {"id": "3021", "county": "\u8fb9\u575d\u53bf", "parent": "3009"}, {
    "id": "3023",
    "county": "\u4e43\u4e1c\u53bf",
    "parent": "3022"
}, {"id": "3024", "county": "\u624e\u56ca\u53bf", "parent": "3022"}, {
    "id": "3025",
    "county": "\u8d21\u560e\u53bf",
    "parent": "3022"
}, {"id": "3026", "county": "\u6851\u65e5\u53bf", "parent": "3022"}, {
    "id": "3027",
    "county": "\u743c\u7ed3\u53bf",
    "parent": "3022"
}, {"id": "3028", "county": "\u66f2\u677e\u53bf", "parent": "3022"}, {
    "id": "3029",
    "county": "\u63aa\u7f8e\u53bf",
    "parent": "3022"
}, {"id": "3030", "county": "\u6d1b\u624e\u53bf", "parent": "3022"}, {
    "id": "3031",
    "county": "\u52a0\u67e5\u53bf",
    "parent": "3022"
}, {"id": "3032", "county": "\u9686\u5b50\u53bf", "parent": "3022"}, {
    "id": "3033",
    "county": "\u9519\u90a3\u53bf",
    "parent": "3022"
}, {"id": "3034", "county": "\u6d6a\u5361\u5b50\u53bf", "parent": "3022"}, {
    "id": "3036",
    "county": "\u90a3\u66f2\u53bf",
    "parent": "3035"
}, {"id": "3037", "county": "\u5609\u9ece\u53bf", "parent": "3035"}, {
    "id": "3038",
    "county": "\u6bd4\u5982\u53bf",
    "parent": "3035"
}, {"id": "3039", "county": "\u8042\u8363\u53bf", "parent": "3035"}, {
    "id": "3040",
    "county": "\u5b89\u591a\u53bf",
    "parent": "3035"
}, {"id": "3041", "county": "\u7533\u624e\u53bf", "parent": "3035"}, {
    "id": "3042",
    "county": "\u7d22\u53bf",
    "parent": "3035"
}, {"id": "3043", "county": "\u73ed\u6208\u53bf", "parent": "3035"}, {
    "id": "3044",
    "county": "\u5df4\u9752\u53bf",
    "parent": "3035"
}, {"id": "3045", "county": "\u5c3c\u739b\u53bf", "parent": "3035"}, {
    "id": "3046",
    "county": "\u53cc\u6e56\u53bf",
    "parent": "3035"
}, {"id": "3048", "county": "\u666e\u5170\u53bf", "parent": "3047"}, {
    "id": "3049",
    "county": "\u672d\u8fbe\u53bf",
    "parent": "3047"
}, {"id": "3050", "county": "\u5676\u5c14\u53bf", "parent": "3047"}, {
    "id": "3051",
    "county": "\u65e5\u571f\u53bf",
    "parent": "3047"
}, {"id": "3052", "county": "\u9769\u5409\u53bf", "parent": "3047"}, {
    "id": "3053",
    "county": "\u6539\u5219\u53bf",
    "parent": "3047"
}, {"id": "3054", "county": "\u63aa\u52e4\u53bf", "parent": "3047"}, {
    "id": "3056",
    "county": "\u6797\u829d\u53bf",
    "parent": "3055"
}, {"id": "3057", "county": "\u5de5\u5e03\u6c5f\u8fbe\u53bf", "parent": "3055"}, {
    "id": "3058",
    "county": "\u7c73\u6797\u53bf",
    "parent": "3055"
}, {"id": "3059", "county": "\u58a8\u8131\u53bf", "parent": "3055"}, {
    "id": "3060",
    "county": "\u6ce2\u5bc6\u53bf",
    "parent": "3055"
}, {"id": "3061", "county": "\u5bdf\u9685\u53bf", "parent": "3055"}, {
    "id": "3062",
    "county": "\u6717\u53bf",
    "parent": "3055"
}, {"id": "3065", "county": "\u5e02\u8f96\u533a", "parent": "3064"}, {
    "id": "3066",
    "county": "\u65b0\u57ce\u533a",
    "parent": "3064"
}, {"id": "3067", "county": "\u7891\u6797\u533a", "parent": "3064"}, {
    "id": "3068",
    "county": "\u83b2\u6e56\u533a",
    "parent": "3064"
}, {"id": "3069", "county": "\u705e\u6865\u533a", "parent": "3064"}, {
    "id": "3070",
    "county": "\u672a\u592e\u533a",
    "parent": "3064"
}, {"id": "3071", "county": "\u96c1\u5854\u533a", "parent": "3064"}, {
    "id": "3072",
    "county": "\u960e\u826f\u533a",
    "parent": "3064"
}, {"id": "3073", "county": "\u4e34\u6f7c\u533a", "parent": "3064"}, {
    "id": "3074",
    "county": "\u957f\u5b89\u533a",
    "parent": "3064"
}, {"id": "3075", "county": "\u9ad8\u9675\u533a", "parent": "3064"}, {
    "id": "3076",
    "county": "\u84dd\u7530\u53bf",
    "parent": "3064"
}, {"id": "3077", "county": "\u5468\u81f3\u53bf", "parent": "3064"}, {
    "id": "3078",
    "county": "\u6237\u53bf",
    "parent": "3064"
}, {"id": "3080", "county": "\u5e02\u8f96\u533a", "parent": "3079"}, {
    "id": "3081",
    "county": "\u738b\u76ca\u533a",
    "parent": "3079"
}, {"id": "3082", "county": "\u5370\u53f0\u533a", "parent": "3079"}, {
    "id": "3083",
    "county": "\u8000\u5dde\u533a",
    "parent": "3079"
}, {"id": "3084", "county": "\u5b9c\u541b\u53bf", "parent": "3079"}, {
    "id": "3086",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3085"
}, {"id": "3087", "county": "\u6e2d\u6ee8\u533a", "parent": "3085"}, {
    "id": "3088",
    "county": "\u91d1\u53f0\u533a",
    "parent": "3085"
}, {"id": "3089", "county": "\u9648\u4ed3\u533a", "parent": "3085"}, {
    "id": "3090",
    "county": "\u51e4\u7fd4\u53bf",
    "parent": "3085"
}, {"id": "3091", "county": "\u5c90\u5c71\u53bf", "parent": "3085"}, {
    "id": "3092",
    "county": "\u6276\u98ce\u53bf",
    "parent": "3085"
}, {"id": "3093", "county": "\u7709\u53bf", "parent": "3085"}, {
    "id": "3094",
    "county": "\u9647\u53bf",
    "parent": "3085"
}, {"id": "3095", "county": "\u5343\u9633\u53bf", "parent": "3085"}, {
    "id": "3096",
    "county": "\u9e9f\u6e38\u53bf",
    "parent": "3085"
}, {"id": "3097", "county": "\u51e4\u53bf", "parent": "3085"}, {
    "id": "3098",
    "county": "\u592a\u767d\u53bf",
    "parent": "3085"
}, {"id": "3100", "county": "\u5e02\u8f96\u533a", "parent": "3099"}, {
    "id": "3101",
    "county": "\u79e6\u90fd\u533a",
    "parent": "3099"
}, {"id": "3102", "county": "\u6768\u9675\u533a", "parent": "3099"}, {
    "id": "3103",
    "county": "\u6e2d\u57ce\u533a",
    "parent": "3099"
}, {"id": "3104", "county": "\u4e09\u539f\u53bf", "parent": "3099"}, {
    "id": "3105",
    "county": "\u6cfe\u9633\u53bf",
    "parent": "3099"
}, {"id": "3106", "county": "\u4e7e\u53bf", "parent": "3099"}, {
    "id": "3107",
    "county": "\u793c\u6cc9\u53bf",
    "parent": "3099"
}, {"id": "3108", "county": "\u6c38\u5bff\u53bf", "parent": "3099"}, {
    "id": "3109",
    "county": "\u5f6c\u53bf",
    "parent": "3099"
}, {"id": "3110", "county": "\u957f\u6b66\u53bf", "parent": "3099"}, {
    "id": "3111",
    "county": "\u65ec\u9091\u53bf",
    "parent": "3099"
}, {"id": "3112", "county": "\u6df3\u5316\u53bf", "parent": "3099"}, {
    "id": "3113",
    "county": "\u6b66\u529f\u53bf",
    "parent": "3099"
}, {"id": "3114", "county": "\u5174\u5e73\u5e02", "parent": "3099"}, {
    "id": "3116",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3115"
}, {"id": "3117", "county": "\u4e34\u6e2d\u533a", "parent": "3115"}, {
    "id": "3118",
    "county": "\u534e\u53bf",
    "parent": "3115"
}, {"id": "3119", "county": "\u6f7c\u5173\u53bf", "parent": "3115"}, {
    "id": "3120",
    "county": "\u5927\u8354\u53bf",
    "parent": "3115"
}, {"id": "3121", "county": "\u5408\u9633\u53bf", "parent": "3115"}, {
    "id": "3122",
    "county": "\u6f84\u57ce\u53bf",
    "parent": "3115"
}, {"id": "3123", "county": "\u84b2\u57ce\u53bf", "parent": "3115"}, {
    "id": "3124",
    "county": "\u767d\u6c34\u53bf",
    "parent": "3115"
}, {"id": "3125", "county": "\u5bcc\u5e73\u53bf", "parent": "3115"}, {
    "id": "3126",
    "county": "\u97e9\u57ce\u5e02",
    "parent": "3115"
}, {"id": "3127", "county": "\u534e\u9634\u5e02", "parent": "3115"}, {
    "id": "3129",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3128"
}, {"id": "3130", "county": "\u5b9d\u5854\u533a", "parent": "3128"}, {
    "id": "3131",
    "county": "\u5ef6\u957f\u53bf",
    "parent": "3128"
}, {"id": "3132", "county": "\u5ef6\u5ddd\u53bf", "parent": "3128"}, {
    "id": "3133",
    "county": "\u5b50\u957f\u53bf",
    "parent": "3128"
}, {"id": "3134", "county": "\u5b89\u585e\u53bf", "parent": "3128"}, {
    "id": "3135",
    "county": "\u5fd7\u4e39\u53bf",
    "parent": "3128"
}, {"id": "3136", "county": "\u5434\u8d77\u53bf", "parent": "3128"}, {
    "id": "3137",
    "county": "\u7518\u6cc9\u53bf",
    "parent": "3128"
}, {"id": "3138", "county": "\u5bcc\u53bf", "parent": "3128"}, {
    "id": "3139",
    "county": "\u6d1b\u5ddd\u53bf",
    "parent": "3128"
}, {"id": "3140", "county": "\u5b9c\u5ddd\u53bf", "parent": "3128"}, {
    "id": "3141",
    "county": "\u9ec4\u9f99\u53bf",
    "parent": "3128"
}, {"id": "3142", "county": "\u9ec4\u9675\u53bf", "parent": "3128"}, {
    "id": "3144",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3143"
}, {"id": "3145", "county": "\u6c49\u53f0\u533a", "parent": "3143"}, {
    "id": "3146",
    "county": "\u5357\u90d1\u53bf",
    "parent": "3143"
}, {"id": "3147", "county": "\u57ce\u56fa\u53bf", "parent": "3143"}, {
    "id": "3148",
    "county": "\u6d0b\u53bf",
    "parent": "3143"
}, {"id": "3149", "county": "\u897f\u4e61\u53bf", "parent": "3143"}, {
    "id": "3150",
    "county": "\u52c9\u53bf",
    "parent": "3143"
}, {"id": "3151", "county": "\u5b81\u5f3a\u53bf", "parent": "3143"}, {
    "id": "3152",
    "county": "\u7565\u9633\u53bf",
    "parent": "3143"
}, {"id": "3153", "county": "\u9547\u5df4\u53bf", "parent": "3143"}, {
    "id": "3154",
    "county": "\u7559\u575d\u53bf",
    "parent": "3143"
}, {"id": "3155", "county": "\u4f5b\u576a\u53bf", "parent": "3143"}, {
    "id": "3157",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3156"
}, {"id": "3158", "county": "\u6986\u9633\u533a", "parent": "3156"}, {
    "id": "3159",
    "county": "\u795e\u6728\u53bf",
    "parent": "3156"
}, {"id": "3160", "county": "\u5e9c\u8c37\u53bf", "parent": "3156"}, {
    "id": "3161",
    "county": "\u6a2a\u5c71\u53bf",
    "parent": "3156"
}, {"id": "3162", "county": "\u9756\u8fb9\u53bf", "parent": "3156"}, {
    "id": "3163",
    "county": "\u5b9a\u8fb9\u53bf",
    "parent": "3156"
}, {"id": "3164", "county": "\u7ee5\u5fb7\u53bf", "parent": "3156"}, {
    "id": "3165",
    "county": "\u7c73\u8102\u53bf",
    "parent": "3156"
}, {"id": "3166", "county": "\u4f73\u53bf", "parent": "3156"}, {
    "id": "3167",
    "county": "\u5434\u5821\u53bf",
    "parent": "3156"
}, {"id": "3168", "county": "\u6e05\u6da7\u53bf", "parent": "3156"}, {
    "id": "3169",
    "county": "\u5b50\u6d32\u53bf",
    "parent": "3156"
}, {"id": "3171", "county": "\u5e02\u8f96\u533a", "parent": "3170"}, {
    "id": "3172",
    "county": "\u6c49\u6ee8\u533a",
    "parent": "3170"
}, {"id": "3173", "county": "\u6c49\u9634\u53bf", "parent": "3170"}, {
    "id": "3174",
    "county": "\u77f3\u6cc9\u53bf",
    "parent": "3170"
}, {"id": "3175", "county": "\u5b81\u9655\u53bf", "parent": "3170"}, {
    "id": "3176",
    "county": "\u7d2b\u9633\u53bf",
    "parent": "3170"
}, {"id": "3177", "county": "\u5c9a\u768b\u53bf", "parent": "3170"}, {
    "id": "3178",
    "county": "\u5e73\u5229\u53bf",
    "parent": "3170"
}, {"id": "3179", "county": "\u9547\u576a\u53bf", "parent": "3170"}, {
    "id": "3180",
    "county": "\u65ec\u9633\u53bf",
    "parent": "3170"
}, {"id": "3181", "county": "\u767d\u6cb3\u53bf", "parent": "3170"}, {
    "id": "3183",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3182"
}, {"id": "3184", "county": "\u5546\u5dde\u533a", "parent": "3182"}, {
    "id": "3185",
    "county": "\u6d1b\u5357\u53bf",
    "parent": "3182"
}, {"id": "3186", "county": "\u4e39\u51e4\u53bf", "parent": "3182"}, {
    "id": "3187",
    "county": "\u5546\u5357\u53bf",
    "parent": "3182"
}, {"id": "3188", "county": "\u5c71\u9633\u53bf", "parent": "3182"}, {
    "id": "3189",
    "county": "\u9547\u5b89\u53bf",
    "parent": "3182"
}, {"id": "3190", "county": "\u67de\u6c34\u53bf", "parent": "3182"}, {
    "id": "3193",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3192"
}, {"id": "3194", "county": "\u57ce\u5173\u533a", "parent": "3192"}, {
    "id": "3195",
    "county": "\u4e03\u91cc\u6cb3\u533a",
    "parent": "3192"
}, {"id": "3196", "county": "\u897f\u56fa\u533a", "parent": "3192"}, {
    "id": "3197",
    "county": "\u5b89\u5b81\u533a",
    "parent": "3192"
}, {"id": "3198", "county": "\u7ea2\u53e4\u533a", "parent": "3192"}, {
    "id": "3199",
    "county": "\u6c38\u767b\u53bf",
    "parent": "3192"
}, {"id": "3200", "county": "\u768b\u5170\u53bf", "parent": "3192"}, {
    "id": "3201",
    "county": "\u6986\u4e2d\u53bf",
    "parent": "3192"
}, {"id": "3203", "county": "\u5e02\u8f96\u533a", "parent": "3202"}, {
    "id": "3205",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3204"
}, {"id": "3206", "county": "\u91d1\u5ddd\u533a", "parent": "3204"}, {
    "id": "3207",
    "county": "\u6c38\u660c\u53bf",
    "parent": "3204"
}, {"id": "3209", "county": "\u5e02\u8f96\u533a", "parent": "3208"}, {
    "id": "3210",
    "county": "\u767d\u94f6\u533a",
    "parent": "3208"
}, {"id": "3211", "county": "\u5e73\u5ddd\u533a", "parent": "3208"}, {
    "id": "3212",
    "county": "\u9756\u8fdc\u53bf",
    "parent": "3208"
}, {"id": "3213", "county": "\u4f1a\u5b81\u53bf", "parent": "3208"}, {
    "id": "3214",
    "county": "\u666f\u6cf0\u53bf",
    "parent": "3208"
}, {"id": "3216", "county": "\u5e02\u8f96\u533a", "parent": "3215"}, {
    "id": "3217",
    "county": "\u79e6\u5dde\u533a",
    "parent": "3215"
}, {"id": "3218", "county": "\u9ea6\u79ef\u533a", "parent": "3215"}, {
    "id": "3219",
    "county": "\u6e05\u6c34\u53bf",
    "parent": "3215"
}, {"id": "3220", "county": "\u79e6\u5b89\u53bf", "parent": "3215"}, {
    "id": "3221",
    "county": "\u7518\u8c37\u53bf",
    "parent": "3215"
}, {"id": "3222", "county": "\u6b66\u5c71\u53bf", "parent": "3215"}, {
    "id": "3223",
    "county": "\u5f20\u5bb6\u5ddd\u56de\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3215"
}, {"id": "3225", "county": "\u5e02\u8f96\u533a", "parent": "3224"}, {
    "id": "3226",
    "county": "\u51c9\u5dde\u533a",
    "parent": "3224"
}, {"id": "3227", "county": "\u6c11\u52e4\u53bf", "parent": "3224"}, {
    "id": "3228",
    "county": "\u53e4\u6d6a\u53bf",
    "parent": "3224"
}, {"id": "3229", "county": "\u5929\u795d\u85cf\u65cf\u81ea\u6cbb\u53bf", "parent": "3224"}, {
    "id": "3231",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3230"
}, {"id": "3232", "county": "\u7518\u5dde\u533a", "parent": "3230"}, {
    "id": "3233",
    "county": "\u8083\u5357\u88d5\u56fa\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3230"
}, {"id": "3234", "county": "\u6c11\u4e50\u53bf", "parent": "3230"}, {
    "id": "3235",
    "county": "\u4e34\u6cfd\u53bf",
    "parent": "3230"
}, {"id": "3236", "county": "\u9ad8\u53f0\u53bf", "parent": "3230"}, {
    "id": "3237",
    "county": "\u5c71\u4e39\u53bf",
    "parent": "3230"
}, {"id": "3239", "county": "\u5e02\u8f96\u533a", "parent": "3238"}, {
    "id": "3240",
    "county": "\u5d06\u5cd2\u533a",
    "parent": "3238"
}, {"id": "3241", "county": "\u6cfe\u5ddd\u53bf", "parent": "3238"}, {
    "id": "3242",
    "county": "\u7075\u53f0\u53bf",
    "parent": "3238"
}, {"id": "3243", "county": "\u5d07\u4fe1\u53bf", "parent": "3238"}, {
    "id": "3244",
    "county": "\u534e\u4ead\u53bf",
    "parent": "3238"
}, {"id": "3245", "county": "\u5e84\u6d6a\u53bf", "parent": "3238"}, {
    "id": "3246",
    "county": "\u9759\u5b81\u53bf",
    "parent": "3238"
}, {"id": "3248", "county": "\u5e02\u8f96\u533a", "parent": "3247"}, {
    "id": "3249",
    "county": "\u8083\u5dde\u533a",
    "parent": "3247"
}, {"id": "3250", "county": "\u91d1\u5854\u53bf", "parent": "3247"}, {
    "id": "3251",
    "county": "\u74dc\u5dde\u53bf",
    "parent": "3247"
}, {"id": "3252", "county": "\u8083\u5317\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf", "parent": "3247"}, {
    "id": "3253",
    "county": "\u963f\u514b\u585e\u54c8\u8428\u514b\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3247"
}, {"id": "3254", "county": "\u7389\u95e8\u5e02", "parent": "3247"}, {
    "id": "3255",
    "county": "\u6566\u714c\u5e02",
    "parent": "3247"
}, {"id": "3257", "county": "\u5e02\u8f96\u533a", "parent": "3256"}, {
    "id": "3258",
    "county": "\u897f\u5cf0\u533a",
    "parent": "3256"
}, {"id": "3259", "county": "\u5e86\u57ce\u53bf", "parent": "3256"}, {
    "id": "3260",
    "county": "\u73af\u53bf",
    "parent": "3256"
}, {"id": "3261", "county": "\u534e\u6c60\u53bf", "parent": "3256"}, {
    "id": "3262",
    "county": "\u5408\u6c34\u53bf",
    "parent": "3256"
}, {"id": "3263", "county": "\u6b63\u5b81\u53bf", "parent": "3256"}, {
    "id": "3264",
    "county": "\u5b81\u53bf",
    "parent": "3256"
}, {"id": "3265", "county": "\u9547\u539f\u53bf", "parent": "3256"}, {
    "id": "3267",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3266"
}, {"id": "3268", "county": "\u5b89\u5b9a\u533a", "parent": "3266"}, {
    "id": "3269",
    "county": "\u901a\u6e2d\u53bf",
    "parent": "3266"
}, {"id": "3270", "county": "\u9647\u897f\u53bf", "parent": "3266"}, {
    "id": "3271",
    "county": "\u6e2d\u6e90\u53bf",
    "parent": "3266"
}, {"id": "3272", "county": "\u4e34\u6d2e\u53bf", "parent": "3266"}, {
    "id": "3273",
    "county": "\u6f33\u53bf",
    "parent": "3266"
}, {"id": "3274", "county": "\u5cb7\u53bf", "parent": "3266"}, {
    "id": "3276",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3275"
}, {"id": "3277", "county": "\u6b66\u90fd\u533a", "parent": "3275"}, {
    "id": "3278",
    "county": "\u6210\u53bf",
    "parent": "3275"
}, {"id": "3279", "county": "\u6587\u53bf", "parent": "3275"}, {
    "id": "3280",
    "county": "\u5b95\u660c\u53bf",
    "parent": "3275"
}, {"id": "3281", "county": "\u5eb7\u53bf", "parent": "3275"}, {
    "id": "3282",
    "county": "\u897f\u548c\u53bf",
    "parent": "3275"
}, {"id": "3283", "county": "\u793c\u53bf", "parent": "3275"}, {
    "id": "3284",
    "county": "\u5fbd\u53bf",
    "parent": "3275"
}, {"id": "3285", "county": "\u4e24\u5f53\u53bf", "parent": "3275"}, {
    "id": "3287",
    "county": "\u4e34\u590f\u5e02",
    "parent": "3286"
}, {"id": "3288", "county": "\u4e34\u590f\u53bf", "parent": "3286"}, {
    "id": "3289",
    "county": "\u5eb7\u4e50\u53bf",
    "parent": "3286"
}, {"id": "3290", "county": "\u6c38\u9756\u53bf", "parent": "3286"}, {
    "id": "3291",
    "county": "\u5e7f\u6cb3\u53bf",
    "parent": "3286"
}, {"id": "3292", "county": "\u548c\u653f\u53bf", "parent": "3286"}, {
    "id": "3293",
    "county": "\u4e1c\u4e61\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3286"
}, {
    "id": "3294",
    "county": "\u79ef\u77f3\u5c71\u4fdd\u5b89\u65cf\u4e1c\u4e61\u65cf\u6492\u62c9\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3286"
}, {"id": "3296", "county": "\u5408\u4f5c\u5e02", "parent": "3295"}, {
    "id": "3297",
    "county": "\u4e34\u6f6d\u53bf",
    "parent": "3295"
}, {"id": "3298", "county": "\u5353\u5c3c\u53bf", "parent": "3295"}, {
    "id": "3299",
    "county": "\u821f\u66f2\u53bf",
    "parent": "3295"
}, {"id": "3300", "county": "\u8fed\u90e8\u53bf", "parent": "3295"}, {
    "id": "3301",
    "county": "\u739b\u66f2\u53bf",
    "parent": "3295"
}, {"id": "3302", "county": "\u788c\u66f2\u53bf", "parent": "3295"}, {
    "id": "3303",
    "county": "\u590f\u6cb3\u53bf",
    "parent": "3295"
}, {"id": "3306", "county": "\u5e02\u8f96\u533a", "parent": "3305"}, {
    "id": "3307",
    "county": "\u57ce\u4e1c\u533a",
    "parent": "3305"
}, {"id": "3308", "county": "\u57ce\u4e2d\u533a", "parent": "3305"}, {
    "id": "3309",
    "county": "\u57ce\u897f\u533a",
    "parent": "3305"
}, {"id": "3310", "county": "\u57ce\u5317\u533a", "parent": "3305"}, {
    "id": "3311",
    "county": "\u5927\u901a\u56de\u65cf\u571f\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3305"
}, {"id": "3312", "county": "\u6e5f\u4e2d\u53bf", "parent": "3305"}, {
    "id": "3313",
    "county": "\u6e5f\u6e90\u53bf",
    "parent": "3305"
}, {"id": "3315", "county": "\u5e02\u8f96\u533a", "parent": "3314"}, {
    "id": "3316",
    "county": "\u4e50\u90fd\u533a",
    "parent": "3314"
}, {"id": "3317", "county": "\u5e73\u5b89\u53bf", "parent": "3314"}, {
    "id": "3318",
    "county": "\u6c11\u548c\u56de\u65cf\u571f\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3314"
}, {"id": "3319", "county": "\u4e92\u52a9\u571f\u65cf\u81ea\u6cbb\u53bf", "parent": "3314"}, {
    "id": "3320",
    "county": "\u5316\u9686\u56de\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3314"
}, {"id": "3321", "county": "\u5faa\u5316\u6492\u62c9\u65cf\u81ea\u6cbb\u53bf", "parent": "3314"}, {
    "id": "3323",
    "county": "\u95e8\u6e90\u56de\u65cf\u81ea\u6cbb\u53bf",
    "parent": "3322"
}, {"id": "3324", "county": "\u7941\u8fde\u53bf", "parent": "3322"}, {
    "id": "3325",
    "county": "\u6d77\u664f\u53bf",
    "parent": "3322"
}, {"id": "3326", "county": "\u521a\u5bdf\u53bf", "parent": "3322"}, {
    "id": "3328",
    "county": "\u540c\u4ec1\u53bf",
    "parent": "3327"
}, {"id": "3329", "county": "\u5c16\u624e\u53bf", "parent": "3327"}, {
    "id": "3330",
    "county": "\u6cfd\u5e93\u53bf",
    "parent": "3327"
}, {"id": "3331", "county": "\u6cb3\u5357\u8499\u53e4\u65cf\u81ea\u6cbb\u53bf", "parent": "3327"}, {
    "id": "3333",
    "county": "\u5171\u548c\u53bf",
    "parent": "3332"
}, {"id": "3334", "county": "\u540c\u5fb7\u53bf", "parent": "3332"}, {
    "id": "3335",
    "county": "\u8d35\u5fb7\u53bf",
    "parent": "3332"
}, {"id": "3336", "county": "\u5174\u6d77\u53bf", "parent": "3332"}, {
    "id": "3337",
    "county": "\u8d35\u5357\u53bf",
    "parent": "3332"
}, {"id": "3339", "county": "\u739b\u6c81\u53bf", "parent": "3338"}, {
    "id": "3340",
    "county": "\u73ed\u739b\u53bf",
    "parent": "3338"
}, {"id": "3341", "county": "\u7518\u5fb7\u53bf", "parent": "3338"}, {
    "id": "3342",
    "county": "\u8fbe\u65e5\u53bf",
    "parent": "3338"
}, {"id": "3343", "county": "\u4e45\u6cbb\u53bf", "parent": "3338"}, {
    "id": "3344",
    "county": "\u739b\u591a\u53bf",
    "parent": "3338"
}, {"id": "3346", "county": "\u7389\u6811\u5e02", "parent": "3345"}, {
    "id": "3347",
    "county": "\u6742\u591a\u53bf",
    "parent": "3345"
}, {"id": "3348", "county": "\u79f0\u591a\u53bf", "parent": "3345"}, {
    "id": "3349",
    "county": "\u6cbb\u591a\u53bf",
    "parent": "3345"
}, {"id": "3350", "county": "\u56ca\u8c26\u53bf", "parent": "3345"}, {
    "id": "3351",
    "county": "\u66f2\u9ebb\u83b1\u53bf",
    "parent": "3345"
}, {"id": "3353", "county": "\u683c\u5c14\u6728\u5e02", "parent": "3352"}, {
    "id": "3354",
    "county": "\u5fb7\u4ee4\u54c8\u5e02",
    "parent": "3352"
}, {"id": "3355", "county": "\u4e4c\u5170\u53bf", "parent": "3352"}, {
    "id": "3356",
    "county": "\u90fd\u5170\u53bf",
    "parent": "3352"
}, {"id": "3357", "county": "\u5929\u5cfb\u53bf", "parent": "3352"}, {
    "id": "3360",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3359"
}, {"id": "3361", "county": "\u5174\u5e86\u533a", "parent": "3359"}, {
    "id": "3362",
    "county": "\u897f\u590f\u533a",
    "parent": "3359"
}, {"id": "3363", "county": "\u91d1\u51e4\u533a", "parent": "3359"}, {
    "id": "3364",
    "county": "\u6c38\u5b81\u53bf",
    "parent": "3359"
}, {"id": "3365", "county": "\u8d3a\u5170\u53bf", "parent": "3359"}, {
    "id": "3366",
    "county": "\u7075\u6b66\u5e02",
    "parent": "3359"
}, {"id": "3368", "county": "\u5e02\u8f96\u533a", "parent": "3367"}, {
    "id": "3369",
    "county": "\u5927\u6b66\u53e3\u533a",
    "parent": "3367"
}, {"id": "3370", "county": "\u60e0\u519c\u533a", "parent": "3367"}, {
    "id": "3371",
    "county": "\u5e73\u7f57\u53bf",
    "parent": "3367"
}, {"id": "3373", "county": "\u5e02\u8f96\u533a", "parent": "3372"}, {
    "id": "3374",
    "county": "\u5229\u901a\u533a",
    "parent": "3372"
}, {"id": "3375", "county": "\u7ea2\u5bfa\u5821\u533a", "parent": "3372"}, {
    "id": "3376",
    "county": "\u76d0\u6c60\u53bf",
    "parent": "3372"
}, {"id": "3377", "county": "\u540c\u5fc3\u53bf", "parent": "3372"}, {
    "id": "3378",
    "county": "\u9752\u94dc\u5ce1\u5e02",
    "parent": "3372"
}, {"id": "3380", "county": "\u5e02\u8f96\u533a", "parent": "3379"}, {
    "id": "3381",
    "county": "\u539f\u5dde\u533a",
    "parent": "3379"
}, {"id": "3382", "county": "\u897f\u5409\u53bf", "parent": "3379"}, {
    "id": "3383",
    "county": "\u9686\u5fb7\u53bf",
    "parent": "3379"
}, {"id": "3384", "county": "\u6cfe\u6e90\u53bf", "parent": "3379"}, {
    "id": "3385",
    "county": "\u5f6d\u9633\u53bf",
    "parent": "3379"
}, {"id": "3387", "county": "\u5e02\u8f96\u533a", "parent": "3386"}, {
    "id": "3388",
    "county": "\u6c99\u5761\u5934\u533a",
    "parent": "3386"
}, {"id": "3389", "county": "\u4e2d\u5b81\u53bf", "parent": "3386"}, {
    "id": "3390",
    "county": "\u6d77\u539f\u53bf",
    "parent": "3386"
}, {"id": "3393", "county": "\u5e02\u8f96\u533a", "parent": "3392"}, {
    "id": "3394",
    "county": "\u5929\u5c71\u533a",
    "parent": "3392"
}, {"id": "3395", "county": "\u6c99\u4f9d\u5df4\u514b\u533a", "parent": "3392"}, {
    "id": "3396",
    "county": "\u65b0\u5e02\u533a",
    "parent": "3392"
}, {"id": "3397", "county": "\u6c34\u78e8\u6c9f\u533a", "parent": "3392"}, {
    "id": "3398",
    "county": "\u5934\u5c6f\u6cb3\u533a",
    "parent": "3392"
}, {"id": "3399", "county": "\u8fbe\u5742\u57ce\u533a", "parent": "3392"}, {
    "id": "3400",
    "county": "\u7c73\u4e1c\u533a",
    "parent": "3392"
}, {"id": "3401", "county": "\u4e4c\u9c81\u6728\u9f50\u53bf", "parent": "3392"}, {
    "id": "3403",
    "county": "\u5e02\u8f96\u533a",
    "parent": "3402"
}, {"id": "3404", "county": "\u72ec\u5c71\u5b50\u533a", "parent": "3402"}, {
    "id": "3405",
    "county": "\u514b\u62c9\u739b\u4f9d\u533a",
    "parent": "3402"
}, {"id": "3406", "county": "\u767d\u78b1\u6ee9\u533a", "parent": "3402"}, {
    "id": "3407",
    "county": "\u4e4c\u5c14\u79be\u533a",
    "parent": "3402"
}, {"id": "3409", "county": "\u5410\u9c81\u756a\u5e02", "parent": "3408"}, {
    "id": "3410",
    "county": "\u912f\u5584\u53bf",
    "parent": "3408"
}, {"id": "3411", "county": "\u6258\u514b\u900a\u53bf", "parent": "3408"}, {
    "id": "3413",
    "county": "\u54c8\u5bc6\u5e02",
    "parent": "3412"
}, {"id": "3414", "county": "\u5df4\u91cc\u5764\u54c8\u8428\u514b\u81ea\u6cbb\u53bf", "parent": "3412"}, {
    "id": "3415",
    "county": "\u4f0a\u543e\u53bf",
    "parent": "3412"
}, {"id": "3417", "county": "\u660c\u5409\u5e02", "parent": "3416"}, {
    "id": "3418",
    "county": "\u961c\u5eb7\u5e02",
    "parent": "3416"
}, {"id": "3419", "county": "\u547c\u56fe\u58c1\u53bf", "parent": "3416"}, {
    "id": "3420",
    "county": "\u739b\u7eb3\u65af\u53bf",
    "parent": "3416"
}, {"id": "3421", "county": "\u5947\u53f0\u53bf", "parent": "3416"}, {
    "id": "3422",
    "county": "\u5409\u6728\u8428\u5c14\u53bf",
    "parent": "3416"
}, {"id": "3423", "county": "\u6728\u5792\u54c8\u8428\u514b\u81ea\u6cbb\u53bf", "parent": "3416"}, {
    "id": "3425",
    "county": "\u535a\u4e50\u5e02",
    "parent": "3424"
}, {"id": "3426", "county": "\u963f\u62c9\u5c71\u53e3\u5e02", "parent": "3424"}, {
    "id": "3427",
    "county": "\u7cbe\u6cb3\u53bf",
    "parent": "3424"
}, {"id": "3428", "county": "\u6e29\u6cc9\u53bf", "parent": "3424"}, {
    "id": "3430",
    "county": "\u5e93\u5c14\u52d2\u5e02",
    "parent": "3429"
}, {"id": "3431", "county": "\u8f6e\u53f0\u53bf", "parent": "3429"}, {
    "id": "3432",
    "county": "\u5c09\u7281\u53bf",
    "parent": "3429"
}, {"id": "3433", "county": "\u82e5\u7f8c\u53bf", "parent": "3429"}, {
    "id": "3434",
    "county": "\u4e14\u672b\u53bf",
    "parent": "3429"
}, {"id": "3435", "county": "\u7109\u8006\u56de\u65cf\u81ea\u6cbb\u53bf", "parent": "3429"}, {
    "id": "3436",
    "county": "\u548c\u9759\u53bf",
    "parent": "3429"
}, {"id": "3437", "county": "\u548c\u7855\u53bf", "parent": "3429"}, {
    "id": "3438",
    "county": "\u535a\u6e56\u53bf",
    "parent": "3429"
}, {"id": "3440", "county": "\u963f\u514b\u82cf\u5e02", "parent": "3439"}, {
    "id": "3441",
    "county": "\u6e29\u5bbf\u53bf",
    "parent": "3439"
}, {"id": "3442", "county": "\u5e93\u8f66\u53bf", "parent": "3439"}, {
    "id": "3443",
    "county": "\u6c99\u96c5\u53bf",
    "parent": "3439"
}, {"id": "3444", "county": "\u65b0\u548c\u53bf", "parent": "3439"}, {
    "id": "3445",
    "county": "\u62dc\u57ce\u53bf",
    "parent": "3439"
}, {"id": "3446", "county": "\u4e4c\u4ec0\u53bf", "parent": "3439"}, {
    "id": "3447",
    "county": "\u963f\u74e6\u63d0\u53bf",
    "parent": "3439"
}, {"id": "3448", "county": "\u67ef\u576a\u53bf", "parent": "3439"}, {
    "id": "3450",
    "county": "\u963f\u56fe\u4ec0\u5e02",
    "parent": "3449"
}, {"id": "3451", "county": "\u963f\u514b\u9676\u53bf", "parent": "3449"}, {
    "id": "3452",
    "county": "\u963f\u5408\u5947\u53bf",
    "parent": "3449"
}, {"id": "3453", "county": "\u4e4c\u6070\u53bf", "parent": "3449"}, {
    "id": "3455",
    "county": "\u5580\u4ec0\u5e02",
    "parent": "3454"
}, {"id": "3456", "county": "\u758f\u9644\u53bf", "parent": "3454"}, {
    "id": "3457",
    "county": "\u758f\u52d2\u53bf",
    "parent": "3454"
}, {"id": "3458", "county": "\u82f1\u5409\u6c99\u53bf", "parent": "3454"}, {
    "id": "3459",
    "county": "\u6cfd\u666e\u53bf",
    "parent": "3454"
}, {"id": "3460", "county": "\u838e\u8f66\u53bf", "parent": "3454"}, {
    "id": "3461",
    "county": "\u53f6\u57ce\u53bf",
    "parent": "3454"
}, {"id": "3462", "county": "\u9ea6\u76d6\u63d0\u53bf", "parent": "3454"}, {
    "id": "3463",
    "county": "\u5cb3\u666e\u6e56\u53bf",
    "parent": "3454"
}, {"id": "3464", "county": "\u4f3d\u5e08\u53bf", "parent": "3454"}, {
    "id": "3465",
    "county": "\u5df4\u695a\u53bf",
    "parent": "3454"
}, {
    "id": "3466",
    "county": "\u5854\u4ec0\u5e93\u5c14\u5e72\u5854\u5409\u514b\u81ea\u6cbb\u53bf",
    "parent": "3454"
}, {"id": "3468", "county": "\u548c\u7530\u5e02", "parent": "3467"}, {
    "id": "3469",
    "county": "\u548c\u7530\u53bf",
    "parent": "3467"
}, {"id": "3470", "county": "\u58a8\u7389\u53bf", "parent": "3467"}, {
    "id": "3471",
    "county": "\u76ae\u5c71\u53bf",
    "parent": "3467"
}, {"id": "3472", "county": "\u6d1b\u6d66\u53bf", "parent": "3467"}, {
    "id": "3473",
    "county": "\u7b56\u52d2\u53bf",
    "parent": "3467"
}, {"id": "3474", "county": "\u4e8e\u7530\u53bf", "parent": "3467"}, {
    "id": "3475",
    "county": "\u6c11\u4e30\u53bf",
    "parent": "3467"
}, {"id": "3477", "county": "\u4f0a\u5b81\u5e02", "parent": "3476"}, {
    "id": "3478",
    "county": "\u594e\u5c6f\u5e02",
    "parent": "3476"
}, {"id": "3479", "county": "\u970d\u5c14\u679c\u65af\u5e02", "parent": "3476"}, {
    "id": "3480",
    "county": "\u4f0a\u5b81\u53bf",
    "parent": "3476"
}, {"id": "3481", "county": "\u5bdf\u5e03\u67e5\u5c14\u9521\u4f2f\u81ea\u6cbb\u53bf", "parent": "3476"}, {
    "id": "3482",
    "county": "\u970d\u57ce\u53bf",
    "parent": "3476"
}, {"id": "3483", "county": "\u5de9\u7559\u53bf", "parent": "3476"}, {
    "id": "3484",
    "county": "\u65b0\u6e90\u53bf",
    "parent": "3476"
}, {"id": "3485", "county": "\u662d\u82cf\u53bf", "parent": "3476"}, {
    "id": "3486",
    "county": "\u7279\u514b\u65af\u53bf",
    "parent": "3476"
}, {"id": "3487", "county": "\u5c3c\u52d2\u514b\u53bf", "parent": "3476"}, {
    "id": "3488",
    "county": "\u5854\u57ce\u5730\u533a",
    "parent": "3476"
}, {"id": "3489", "county": "\u5854\u57ce\u5e02", "parent": "3476"}, {
    "id": "3490",
    "county": "\u4e4c\u82cf\u5e02",
    "parent": "3476"
}, {"id": "3491", "county": "\u989d\u654f\u53bf", "parent": "3476"}, {
    "id": "3492",
    "county": "\u6c99\u6e7e\u53bf",
    "parent": "3476"
}, {"id": "3493", "county": "\u6258\u91cc\u53bf", "parent": "3476"}, {
    "id": "3494",
    "county": "\u88d5\u6c11\u53bf",
    "parent": "3476"
}, {
    "id": "3495",
    "county": "\u548c\u5e03\u514b\u8d5b\u5c14\u8499\u53e4\u81ea\u6cbb\u53bf",
    "parent": "3476"
}, {"id": "3496", "county": "\u963f\u52d2\u6cf0\u5730\u533a", "parent": "3476"}, {
    "id": "3497",
    "county": "\u963f\u52d2\u6cf0\u5e02",
    "parent": "3476"
}, {"id": "3498", "county": "\u5e03\u5c14\u6d25\u53bf", "parent": "3476"}, {
    "id": "3499",
    "county": "\u5bcc\u8574\u53bf",
    "parent": "3476"
}, {"id": "3500", "county": "\u798f\u6d77\u53bf", "parent": "3476"}, {
    "id": "3501",
    "county": "\u54c8\u5df4\u6cb3\u53bf",
    "parent": "3476"
}, {"id": "3502", "county": "\u9752\u6cb3\u53bf", "parent": "3476"}, {
    "id": "3503",
    "county": "\u5409\u6728\u4e43\u53bf",
    "parent": "3476"
}, {"id": "3505", "county": "\u77f3\u6cb3\u5b50\u5e02", "parent": "3504"}, {
    "id": "3506",
    "county": "\u963f\u62c9\u5c14\u5e02",
    "parent": "3504"
}, {"id": "3507", "county": "\u56fe\u6728\u8212\u514b\u5e02", "parent": "3504"}, {
    "id": "3508",
    "county": "\u4e94\u5bb6\u6e20\u5e02",
    "parent": "3504"
}, {"id": "3509", "county": "\u5317\u5c6f\u5e02", "parent": "3504"}, {
    "id": "3510",
    "county": "\u94c1\u95e8\u5173\u5e02",
    "parent": "3504"
}, {"id": "3511", "county": "\u53cc\u6cb3\u5e02", "parent": "3504"}, {
    "id": "3514",
    "county": "\u677e\u5c71\u533a",
    "parent": "3513"
}, {"id": "3515", "county": "\u4fe1\u4e49\u533a", "parent": "3513"}, {
    "id": "3516",
    "county": "\u5927\u5b89\u533a",
    "parent": "3513"
}, {"id": "3517", "county": "\u4e2d\u5c71\u533a", "parent": "3513"}, {
    "id": "3518",
    "county": "\u4e2d\u6b63\u533a",
    "parent": "3513"
}, {"id": "3519", "county": "\u5927\u540c\u533a", "parent": "3513"}, {
    "id": "3520",
    "county": "\u4e07\u534e\u533a",
    "parent": "3513"
}, {"id": "3521", "county": "\u6587\u5c71\u533a", "parent": "3513"}, {
    "id": "3522",
    "county": "\u5357\u6e2f\u533a",
    "parent": "3513"
}, {"id": "3523", "county": "\u5185\u6e56\u533a", "parent": "3513"}, {
    "id": "3524",
    "county": "\u58eb\u6797\u533a",
    "parent": "3513"
}, {"id": "3525", "county": "\u5317\u6295\u533a", "parent": "3513"}, {
    "id": "3527",
    "county": "\u76d0\u57d5\u533a",
    "parent": "3526"
}, {"id": "3528", "county": "\u9f13\u5c71\u533a", "parent": "3526"}, {
    "id": "3529",
    "county": "\u5de6\u8425\u533a",
    "parent": "3526"
}, {"id": "3530", "county": "\u6960\u6893\u533a", "parent": "3526"}, {
    "id": "3531",
    "county": "\u4e09\u6c11\u533a",
    "parent": "3526"
}, {"id": "3532", "county": "\u65b0\u5174\u533a", "parent": "3526"}, {
    "id": "3533",
    "county": "\u524d\u91d1\u533a",
    "parent": "3526"
}, {"id": "3534", "county": "\u82d3\u96c5\u533a", "parent": "3526"}, {
    "id": "3535",
    "county": "\u524d\u9547\u533a",
    "parent": "3526"
}, {"id": "3536", "county": "\u65d7\u6d25\u533a", "parent": "3526"}, {
    "id": "3537",
    "county": "\u5c0f\u6e2f\u533a",
    "parent": "3526"
}, {"id": "3538", "county": "\u51e4\u5c71\u533a", "parent": "3526"}, {
    "id": "3539",
    "county": "\u6797\u56ed\u533a",
    "parent": "3526"
}, {"id": "3540", "county": "\u5927\u5bee\u533a", "parent": "3526"}, {
    "id": "3541",
    "county": "\u5927\u6811\u533a",
    "parent": "3526"
}, {"id": "3542", "county": "\u5927\u793e\u533a", "parent": "3526"}, {
    "id": "3543",
    "county": "\u4ec1\u6b66\u533a",
    "parent": "3526"
}, {"id": "3544", "county": "\u9e1f\u677e\u533a", "parent": "3526"}, {
    "id": "3545",
    "county": "\u5188\u5c71\u533a",
    "parent": "3526"
}, {"id": "3546", "county": "\u6865\u5934\u533a", "parent": "3526"}, {
    "id": "3547",
    "county": "\u71d5\u5de2\u533a",
    "parent": "3526"
}, {"id": "3548", "county": "\u7530\u5bee\u533a", "parent": "3526"}, {
    "id": "3549",
    "county": "\u963f\u83b2\u533a",
    "parent": "3526"
}, {"id": "3550", "county": "\u8def\u7af9\u533a", "parent": "3526"}, {
    "id": "3551",
    "county": "\u6e56\u5185\u533a",
    "parent": "3526"
}, {"id": "3552", "county": "\u8304\u8423\u533a", "parent": "3526"}, {
    "id": "3553",
    "county": "\u6c38\u5b89\u533a",
    "parent": "3526"
}, {"id": "3554", "county": "\u5f25\u9640\u533a", "parent": "3526"}, {
    "id": "3555",
    "county": "\u6893\u5b98\u533a",
    "parent": "3526"
}, {"id": "3556", "county": "\u65d7\u5c71\u533a", "parent": "3526"}, {
    "id": "3557",
    "county": "\u7f8e\u6d53\u533a",
    "parent": "3526"
}, {"id": "3558", "county": "\u516d\u9f9f\u533a", "parent": "3526"}, {
    "id": "3559",
    "county": "\u7532\u4ed9\u533a",
    "parent": "3526"
}, {"id": "3560", "county": "\u6749\u6797\u533a", "parent": "3526"}, {
    "id": "3561",
    "county": "\u5185\u95e8\u533a",
    "parent": "3526"
}, {"id": "3562", "county": "\u8302\u6797\u533a", "parent": "3526"}, {
    "id": "3563",
    "county": "\u6843\u6e90\u533a",
    "parent": "3526"
}, {"id": "3564", "county": "\u90a3\u739b\u590f\u533a", "parent": "3526"}, {
    "id": "3566",
    "county": "\u4e2d\u6b63\u533a",
    "parent": "3565"
}, {"id": "3567", "county": "\u4e03\u5835\u533a", "parent": "3565"}, {
    "id": "3568",
    "county": "\u6696\u6696\u533a",
    "parent": "3565"
}, {"id": "3569", "county": "\u4ec1\u7231\u533a", "parent": "3565"}, {
    "id": "3570",
    "county": "\u4e2d\u5c71\u533a",
    "parent": "3565"
}, {"id": "3571", "county": "\u5b89\u4e50\u533a", "parent": "3565"}, {
    "id": "3572",
    "county": "\u4fe1\u4e49\u533a",
    "parent": "3565"
}, {"id": "3574", "county": "\u4e2d\u533a", "parent": "3573"}, {
    "id": "3575",
    "county": "\u4e1c\u533a",
    "parent": "3573"
}, {"id": "3576", "county": "\u5357\u533a", "parent": "3573"}, {
    "id": "3577",
    "county": "\u897f\u533a",
    "parent": "3573"
}, {"id": "3578", "county": "\u5317\u533a", "parent": "3573"}, {
    "id": "3579",
    "county": "\u897f\u5c6f\u533a",
    "parent": "3573"
}, {"id": "3580", "county": "\u5357\u5c6f\u533a", "parent": "3573"}, {
    "id": "3581",
    "county": "\u5317\u5c6f\u533a",
    "parent": "3573"
}, {"id": "3582", "county": "\u4e30\u539f\u533a", "parent": "3573"}, {
    "id": "3583",
    "county": "\u4e1c\u52bf\u533a",
    "parent": "3573"
}, {"id": "3584", "county": "\u5927\u7532\u533a", "parent": "3573"}, {
    "id": "3585",
    "county": "\u6e05\u6c34\u533a",
    "parent": "3573"
}, {"id": "3586", "county": "\u6c99\u9e7f\u533a", "parent": "3573"}, {
    "id": "3587",
    "county": "\u68a7\u6816\u533a",
    "parent": "3573"
}, {"id": "3588", "county": "\u540e\u91cc\u533a", "parent": "3573"}, {
    "id": "3589",
    "county": "\u795e\u5188\u533a",
    "parent": "3573"
}, {"id": "3590", "county": "\u6f6d\u5b50\u533a", "parent": "3573"}, {
    "id": "3591",
    "county": "\u5927\u96c5\u533a",
    "parent": "3573"
}, {"id": "3592", "county": "\u65b0\u793e\u533a", "parent": "3573"}, {
    "id": "3593",
    "county": "\u77f3\u5188\u533a",
    "parent": "3573"
}, {"id": "3594", "county": "\u5916\u57d4\u533a", "parent": "3573"}, {
    "id": "3595",
    "county": "\u5927\u5b89\u533a",
    "parent": "3573"
}, {"id": "3596", "county": "\u4e4c\u65e5\u533a", "parent": "3573"}, {
    "id": "3597",
    "county": "\u5927\u809a\u533a",
    "parent": "3573"
}, {"id": "3598", "county": "\u9f99\u4e95\u533a", "parent": "3573"}, {
    "id": "3599",
    "county": "\u96fe\u5cf0\u533a",
    "parent": "3573"
}, {"id": "3600", "county": "\u592a\u5e73\u533a", "parent": "3573"}, {
    "id": "3601",
    "county": "\u5927\u91cc\u533a",
    "parent": "3573"
}, {"id": "3602", "county": "\u548c\u5e73\u533a", "parent": "3573"}, {
    "id": "3604",
    "county": "\u4e1c\u533a",
    "parent": "3603"
}, {"id": "3605", "county": "\u5357\u533a", "parent": "3603"}, {
    "id": "3606",
    "county": "\u5317\u533a",
    "parent": "3603"
}, {"id": "3607", "county": "\u5b89\u5357\u533a", "parent": "3603"}, {
    "id": "3608",
    "county": "\u5b89\u5e73\u533a",
    "parent": "3603"
}, {"id": "3609", "county": "\u4e2d\u897f\u533a", "parent": "3603"}, {
    "id": "3610",
    "county": "\u65b0\u8425\u533a",
    "parent": "3603"
}, {"id": "3611", "county": "\u76d0\u6c34\u533a", "parent": "3603"}, {
    "id": "3612",
    "county": "\u767d\u6cb3\u533a",
    "parent": "3603"
}, {"id": "3613", "county": "\u67f3\u8425\u533a", "parent": "3603"}, {
    "id": "3614",
    "county": "\u540e\u58c1\u533a",
    "parent": "3603"
}, {"id": "3615", "county": "\u4e1c\u5c71\u533a", "parent": "3603"}, {
    "id": "3616",
    "county": "\u9ebb\u8c46\u533a",
    "parent": "3603"
}, {"id": "3617", "county": "\u4e0b\u8425\u533a", "parent": "3603"}, {
    "id": "3618",
    "county": "\u516d\u7532\u533a",
    "parent": "3603"
}, {"id": "3619", "county": "\u5b98\u7530\u533a", "parent": "3603"}, {
    "id": "3620",
    "county": "\u5927\u5185\u533a",
    "parent": "3603"
}, {"id": "3621", "county": "\u4f73\u91cc\u533a", "parent": "3603"}, {
    "id": "3622",
    "county": "\u5b66\u7532\u533a",
    "parent": "3603"
}, {"id": "3623", "county": "\u897f\u6e2f\u533a", "parent": "3603"}, {
    "id": "3624",
    "county": "\u4e03\u80a1\u533a",
    "parent": "3603"
}, {"id": "3625", "county": "\u5c06\u519b\u533a", "parent": "3603"}, {
    "id": "3626",
    "county": "\u5317\u95e8\u533a",
    "parent": "3603"
}, {"id": "3627", "county": "\u65b0\u5316\u533a", "parent": "3603"}, {
    "id": "3628",
    "county": "\u5584\u5316\u533a",
    "parent": "3603"
}, {"id": "3629", "county": "\u65b0\u5e02\u533a", "parent": "3603"}, {
    "id": "3630",
    "county": "\u5b89\u5b9a\u533a",
    "parent": "3603"
}, {"id": "3631", "county": "\u5c71\u4e0a\u533a", "parent": "3603"}, {
    "id": "3632",
    "county": "\u7389\u4e95\u533a",
    "parent": "3603"
}, {"id": "3633", "county": "\u6960\u897f\u533a", "parent": "3603"}, {
    "id": "3634",
    "county": "\u5357\u5316\u533a",
    "parent": "3603"
}, {"id": "3635", "county": "\u5de6\u9547\u533a", "parent": "3603"}, {
    "id": "3636",
    "county": "\u4ec1\u5fb7\u533a",
    "parent": "3603"
}, {"id": "3637", "county": "\u5f52\u4ec1\u533a", "parent": "3603"}, {
    "id": "3638",
    "county": "\u5173\u5e99\u533a",
    "parent": "3603"
}, {"id": "3639", "county": "\u9f99\u5d0e\u533a", "parent": "3603"}, {
    "id": "3640",
    "county": "\u6c38\u5eb7\u533a",
    "parent": "3603"
}, {"id": "3642", "county": "\u4e1c\u533a", "parent": "3641"}, {
    "id": "3643",
    "county": "\u5317\u533a",
    "parent": "3641"
}, {"id": "3644", "county": "\u9999\u5c71\u533a", "parent": "3641"}, {
    "id": "3646",
    "county": "\u4e1c\u533a",
    "parent": "3645"
}, {"id": "3647", "county": "\u897f\u533a", "parent": "3645"}, {
    "id": "3649",
    "county": "\u677f\u6865\u533a",
    "parent": "3648"
}, {"id": "3650", "county": "\u4e09\u91cd\u533a", "parent": "3648"}, {
    "id": "3651",
    "county": "\u4e2d\u548c\u533a",
    "parent": "3648"
}, {"id": "3652", "county": "\u6c38\u548c\u533a", "parent": "3648"}, {
    "id": "3653",
    "county": "\u65b0\u5e84\u533a",
    "parent": "3648"
}, {"id": "3654", "county": "\u65b0\u5e97\u533a", "parent": "3648"}, {
    "id": "3655",
    "county": "\u6811\u6797\u533a",
    "parent": "3648"
}, {"id": "3656", "county": "\u83ba\u6b4c\u533a", "parent": "3648"}, {
    "id": "3657",
    "county": "\u4e09\u5ce1\u533a",
    "parent": "3648"
}, {"id": "3658", "county": "\u6de1\u6c34\u533a", "parent": "3648"}, {
    "id": "3659",
    "county": "\u6c50\u6b62\u533a",
    "parent": "3648"
}, {"id": "3660", "county": "\u745e\u82b3\u533a", "parent": "3648"}, {
    "id": "3661",
    "county": "\u571f\u57ce\u533a",
    "parent": "3648"
}, {"id": "3662", "county": "\u82a6\u6d32\u533a", "parent": "3648"}, {
    "id": "3663",
    "county": "\u4e94\u80a1\u533a",
    "parent": "3648"
}, {"id": "3664", "county": "\u6cf0\u5c71\u533a", "parent": "3648"}, {
    "id": "3665",
    "county": "\u6797\u53e3\u533a",
    "parent": "3648"
}, {"id": "3666", "county": "\u6df1\u5751\u533a", "parent": "3648"}, {
    "id": "3667",
    "county": "\u77f3\u7887\u533a",
    "parent": "3648"
}, {"id": "3668", "county": "\u576a\u6797\u533a", "parent": "3648"}, {
    "id": "3669",
    "county": "\u4e09\u829d\u533a",
    "parent": "3648"
}, {"id": "3670", "county": "\u77f3\u95e8\u533a", "parent": "3648"}, {
    "id": "3671",
    "county": "\u516b\u91cc\u533a",
    "parent": "3648"
}, {"id": "3672", "county": "\u5e73\u6eaa\u533a", "parent": "3648"}, {
    "id": "3673",
    "county": "\u53cc\u6eaa\u533a",
    "parent": "3648"
}, {"id": "3674", "county": "\u8d21\u5bee\u533a", "parent": "3648"}, {
    "id": "3675",
    "county": "\u91d1\u5c71\u533a",
    "parent": "3648"
}, {"id": "3676", "county": "\u4e07\u91cc\u533a", "parent": "3648"}, {
    "id": "3677",
    "county": "\u4e4c\u6765\u533a",
    "parent": "3648"
}, {"id": "3679", "county": "\u5b9c\u5170\u5e02", "parent": "3678"}, {
    "id": "3680",
    "county": "\u7f57\u4e1c\u9547",
    "parent": "3678"
}, {"id": "3681", "county": "\u82cf\u6fb3\u9547", "parent": "3678"}, {
    "id": "3682",
    "county": "\u5934\u57ce\u9547",
    "parent": "3678"
}, {"id": "3683", "county": "\u7901\u6eaa\u4e61", "parent": "3678"}, {
    "id": "3684",
    "county": "\u58ee\u56f4\u4e61",
    "parent": "3678"
}, {"id": "3685", "county": "\u5458\u5c71\u4e61", "parent": "3678"}, {
    "id": "3686",
    "county": "\u51ac\u5c71\u4e61",
    "parent": "3678"
}, {"id": "3687", "county": "\u4e94\u7ed3\u4e61", "parent": "3678"}, {
    "id": "3688",
    "county": "\u4e09\u661f\u4e61",
    "parent": "3678"
}, {"id": "3689", "county": "\u5927\u540c\u4e61", "parent": "3678"}, {
    "id": "3690",
    "county": "\u5357\u6fb3\u4e61",
    "parent": "3678"
}, {"id": "3692", "county": "\u6843\u56ed\u5e02", "parent": "3691"}, {
    "id": "3693",
    "county": "\u4e2d\u575c\u5e02",
    "parent": "3691"
}, {"id": "3694", "county": "\u5e73\u9547\u5e02", "parent": "3691"}, {
    "id": "3695",
    "county": "\u516b\u5fb7\u5e02",
    "parent": "3691"
}, {"id": "3696", "county": "\u6768\u6885\u5e02", "parent": "3691"}, {
    "id": "3697",
    "county": "\u5927\u6eaa\u9547",
    "parent": "3691"
}, {"id": "3698", "county": "\u82a6\u7af9\u4e61", "parent": "3691"}, {
    "id": "3699",
    "county": "\u5927\u56ed\u4e61",
    "parent": "3691"
}, {"id": "3700", "county": "\u9f9f\u5c71\u4e61", "parent": "3691"}, {
    "id": "3701",
    "county": "\u9f99\u6f6d\u4e61",
    "parent": "3691"
}, {"id": "3702", "county": "\u65b0\u5c4b\u4e61", "parent": "3691"}, {
    "id": "3703",
    "county": "\u89c2\u97f3\u4e61",
    "parent": "3691"
}, {"id": "3704", "county": "\u590d\u5174\u4e61", "parent": "3691"}, {
    "id": "3706",
    "county": "\u7af9\u5317\u5e02",
    "parent": "3705"
}, {"id": "3707", "county": "\u7af9\u4e1c\u9547", "parent": "3705"}, {
    "id": "3708",
    "county": "\u65b0\u57d4\u9547",
    "parent": "3705"
}, {"id": "3709", "county": "\u5173\u897f\u9547", "parent": "3705"}, {
    "id": "3710",
    "county": "\u6e56\u53e3\u4e61",
    "parent": "3705"
}, {"id": "3711", "county": "\u65b0\u4e30\u4e61", "parent": "3705"}, {
    "id": "3712",
    "county": "\u828e\u6797\u4e61",
    "parent": "3705"
}, {"id": "3713", "county": "\u6a6b\u5c71\u4e61", "parent": "3705"}, {
    "id": "3714",
    "county": "\u5317\u57d4\u4e61",
    "parent": "3705"
}, {"id": "3715", "county": "\u5b9d\u5c71\u4e61", "parent": "3705"}, {
    "id": "3716",
    "county": "\u5ce8\u7709\u4e61",
    "parent": "3705"
}, {"id": "3717", "county": "\u5c16\u77f3\u4e61", "parent": "3705"}, {
    "id": "3718",
    "county": "\u4e94\u5cf0\u4e61",
    "parent": "3705"
}, {"id": "3720", "county": "\u82d7\u6817\u5e02", "parent": "3719"}, {
    "id": "3721",
    "county": "\u82d1\u91cc\u9547",
    "parent": "3719"
}, {"id": "3722", "county": "\u901a\u9704\u9547", "parent": "3719"}, {
    "id": "3723",
    "county": "\u7af9\u5357\u9547",
    "parent": "3719"
}, {"id": "3724", "county": "\u5934\u4efd\u9547", "parent": "3719"}, {
    "id": "3725",
    "county": "\u540e\u9f99\u9547",
    "parent": "3719"
}, {"id": "3726", "county": "\u5353\u5170\u9547", "parent": "3719"}, {
    "id": "3727",
    "county": "\u5927\u6e56\u4e61",
    "parent": "3719"
}, {"id": "3728", "county": "\u516c\u9986\u4e61", "parent": "3719"}, {
    "id": "3729",
    "county": "\u94dc\u9523\u4e61",
    "parent": "3719"
}, {"id": "3730", "county": "\u5357\u5e84\u4e61", "parent": "3719"}, {
    "id": "3731",
    "county": "\u5934\u5c4b\u4e61",
    "parent": "3719"
}, {"id": "3732", "county": "\u4e09\u4e49\u4e61", "parent": "3719"}, {
    "id": "3733",
    "county": "\u897f\u6e56\u4e61",
    "parent": "3719"
}, {"id": "3734", "county": "\u9020\u6865\u4e61", "parent": "3719"}, {
    "id": "3735",
    "county": "\u4e09\u6e7e\u4e61",
    "parent": "3719"
}, {"id": "3736", "county": "\u72ee\u6f6d\u4e61", "parent": "3719"}, {
    "id": "3737",
    "county": "\u6cf0\u5b89\u4e61",
    "parent": "3719"
}, {"id": "3739", "county": "\u5f70\u5316\u5e02", "parent": "3738"}, {
    "id": "3740",
    "county": "\u9e7f\u6e2f\u9547",
    "parent": "3738"
}, {"id": "3741", "county": "\u548c\u7f8e\u9547", "parent": "3738"}, {
    "id": "3742",
    "county": "\u7ebf\u897f\u4e61",
    "parent": "3738"
}, {"id": "3743", "county": "\u4f38\u6e2f\u4e61", "parent": "3738"}, {
    "id": "3744",
    "county": "\u798f\u5174\u4e61",
    "parent": "3738"
}, {"id": "3745", "county": "\u79c0\u6c34\u4e61", "parent": "3738"}, {
    "id": "3746",
    "county": "\u82b1\u575b\u4e61",
    "parent": "3738"
}, {"id": "3747", "county": "\u82ac\u56ed\u4e61", "parent": "3738"}, {
    "id": "3748",
    "county": "\u5458\u6797\u9547",
    "parent": "3738"
}, {"id": "3749", "county": "\u6eaa\u6e56\u9547", "parent": "3738"}, {
    "id": "3750",
    "county": "\u7530\u4e2d\u9547",
    "parent": "3738"
}, {"id": "3751", "county": "\u5927\u6751\u4e61", "parent": "3738"}, {
    "id": "3752",
    "county": "\u57d4\u76d0\u4e61",
    "parent": "3738"
}, {"id": "3753", "county": "\u57d4\u5fc3\u4e61", "parent": "3738"}, {
    "id": "3754",
    "county": "\u6c38\u9756\u4e61",
    "parent": "3738"
}, {"id": "3755", "county": "\u793e\u5934\u4e61", "parent": "3738"}, {
    "id": "3756",
    "county": "\u4e8c\u6c34\u4e61",
    "parent": "3738"
}, {"id": "3757", "county": "\u5317\u6597\u9547", "parent": "3738"}, {
    "id": "3758",
    "county": "\u4e8c\u6797\u9547",
    "parent": "3738"
}, {"id": "3759", "county": "\u7530\u5c3e\u4e61", "parent": "3738"}, {
    "id": "3760",
    "county": "\u57e4\u5934\u4e61",
    "parent": "3738"
}, {"id": "3761", "county": "\u82b3\u82d1\u4e61", "parent": "3738"}, {
    "id": "3762",
    "county": "\u5927\u57ce\u4e61",
    "parent": "3738"
}, {"id": "3763", "county": "\u7af9\u5858\u4e61", "parent": "3738"}, {
    "id": "3764",
    "county": "\u6eaa\u5dde\u4e61",
    "parent": "3738"
}, {"id": "3766", "county": "\u5357\u6295\u5e02", "parent": "3765"}, {
    "id": "3767",
    "county": "\u57d4\u91cc\u9547",
    "parent": "3765"
}, {"id": "3768", "county": "\u8349\u5c6f\u9547", "parent": "3765"}, {
    "id": "3769",
    "county": "\u7af9\u5c71\u9547",
    "parent": "3765"
}, {"id": "3770", "county": "\u96c6\u96c6\u9547", "parent": "3765"}, {
    "id": "3771",
    "county": "\u540d\u95f4\u4e61",
    "parent": "3765"
}, {"id": "3772", "county": "\u9e7f\u8c37\u4e61", "parent": "3765"}, {
    "id": "3773",
    "county": "\u4e2d\u5bee\u4e61",
    "parent": "3765"
}, {"id": "3774", "county": "\u9c7c\u6c60\u4e61", "parent": "3765"}, {
    "id": "3775",
    "county": "\u56fd\u59d3\u4e61",
    "parent": "3765"
}, {"id": "3776", "county": "\u6c34\u91cc\u4e61", "parent": "3765"}, {
    "id": "3777",
    "county": "\u4fe1\u4e49\u4e61",
    "parent": "3765"
}, {"id": "3778", "county": "\u4ec1\u7231\u4e61", "parent": "3765"}, {
    "id": "3780",
    "county": "\u6597\u516d\u5e02",
    "parent": "3779"
}, {"id": "3781", "county": "\u6597\u5357\u9547", "parent": "3779"}, {
    "id": "3782",
    "county": "\u864e\u5c3e\u9547",
    "parent": "3779"
}, {"id": "3783", "county": "\u897f\u87ba\u9547", "parent": "3779"}, {
    "id": "3784",
    "county": "\u571f\u5e93\u9547",
    "parent": "3779"
}, {"id": "3785", "county": "\u5317\u6e2f\u9547", "parent": "3779"}, {
    "id": "3786",
    "county": "\u53e4\u5751\u4e61",
    "parent": "3779"
}, {"id": "3787", "county": "\u5927\u57e4\u4e61", "parent": "3779"}, {
    "id": "3788",
    "county": "\u83bf\u6850\u4e61",
    "parent": "3779"
}, {"id": "3789", "county": "\u6797\u5185\u4e61", "parent": "3779"}, {
    "id": "3790",
    "county": "\u4e8c\u4ed1\u4e61",
    "parent": "3779"
}, {"id": "3791", "county": "\u4ed1\u80cc\u4e61", "parent": "3779"}, {
    "id": "3792",
    "county": "\u9ea6\u5bee\u4e61",
    "parent": "3779"
}, {"id": "3793", "county": "\u4e1c\u52bf\u4e61", "parent": "3779"}, {
    "id": "3794",
    "county": "\u8912\u5fe0\u4e61",
    "parent": "3779"
}, {"id": "3795", "county": "\u53f0\u897f\u4e61", "parent": "3779"}, {
    "id": "3796",
    "county": "\u5143\u957f\u4e61",
    "parent": "3779"
}, {"id": "3797", "county": "\u56db\u6e56\u4e61", "parent": "3779"}, {
    "id": "3798",
    "county": "\u53e3\u6e56\u4e61",
    "parent": "3779"
}, {"id": "3799", "county": "\u6c34\u6797\u4e61", "parent": "3779"}, {
    "id": "3801",
    "county": "\u592a\u4fdd\u5e02",
    "parent": "3800"
}, {"id": "3802", "county": "\u6734\u5b50\u5e02", "parent": "3800"}, {
    "id": "3803",
    "county": "\u5e03\u888b\u9547",
    "parent": "3800"
}, {"id": "3804", "county": "\u5927\u6797\u9547", "parent": "3800"}, {
    "id": "3805",
    "county": "\u6c11\u96c4\u4e61",
    "parent": "3800"
}, {"id": "3806", "county": "\u6eaa\u53e3\u4e61", "parent": "3800"}, {
    "id": "3807",
    "county": "\u65b0\u6e2f\u4e61",
    "parent": "3800"
}, {"id": "3808", "county": "\u516d\u811a\u4e61", "parent": "3800"}, {
    "id": "3809",
    "county": "\u4e1c\u77f3\u4e61",
    "parent": "3800"
}, {"id": "3810", "county": "\u4e49\u7af9\u4e61", "parent": "3800"}, {
    "id": "3811",
    "county": "\u9e7f\u8349\u4e61",
    "parent": "3800"
}, {"id": "3812", "county": "\u6c34\u4e0a\u4e61", "parent": "3800"}, {
    "id": "3813",
    "county": "\u4e2d\u57d4\u4e61",
    "parent": "3800"
}, {"id": "3814", "county": "\u7af9\u5d0e\u4e61", "parent": "3800"}, {
    "id": "3815",
    "county": "\u6885\u5c71\u4e61",
    "parent": "3800"
}, {"id": "3816", "county": "\u756a\u8def\u4e61", "parent": "3800"}, {
    "id": "3817",
    "county": "\u5927\u57d4\u4e61",
    "parent": "3800"
}, {"id": "3818", "county": "\u963f\u91cc\u5c71\u4e61", "parent": "3800"}, {
    "id": "3820",
    "county": "\u5c4f\u4e1c\u5e02",
    "parent": "3819"
}, {"id": "3821", "county": "\u6f6e\u5dde\u9547", "parent": "3819"}, {
    "id": "3822",
    "county": "\u4e1c\u6e2f\u9547",
    "parent": "3819"
}, {"id": "3823", "county": "\u6052\u6625\u9547", "parent": "3819"}, {
    "id": "3824",
    "county": "\u4e07\u4e39\u4e61",
    "parent": "3819"
}, {"id": "3825", "county": "\u957f\u6cbb\u4e61", "parent": "3819"}, {
    "id": "3826",
    "county": "\u9e9f\u6d1b\u4e61",
    "parent": "3819"
}, {"id": "3827", "county": "\u4e5d\u5982\u4e61", "parent": "3819"}, {
    "id": "3828",
    "county": "\u91cc\u6e2f\u4e61",
    "parent": "3819"
}, {"id": "3829", "county": "\u76d0\u57d4\u4e61", "parent": "3819"}, {
    "id": "3830",
    "county": "\u9ad8\u6811\u4e61",
    "parent": "3819"
}, {"id": "3831", "county": "\u4e07\u5ce6\u4e61", "parent": "3819"}, {
    "id": "3832",
    "county": "\u5185\u57d4\u4e61",
    "parent": "3819"
}, {"id": "3833", "county": "\u7af9\u7530\u4e61", "parent": "3819"}, {
    "id": "3834",
    "county": "\u65b0\u57e4\u4e61",
    "parent": "3819"
}, {"id": "3835", "county": "\u678b\u5bee\u4e61", "parent": "3819"}, {
    "id": "3836",
    "county": "\u65b0\u56ed\u4e61",
    "parent": "3819"
}, {"id": "3837", "county": "\u5d01\u9876\u4e61", "parent": "3819"}, {
    "id": "3838",
    "county": "\u6797\u8fb9\u4e61",
    "parent": "3819"
}, {"id": "3839", "county": "\u5357\u5dde\u4e61", "parent": "3819"}, {
    "id": "3840",
    "county": "\u4f73\u51ac\u4e61",
    "parent": "3819"
}, {"id": "3841", "county": "\u7409\u7403\u4e61", "parent": "3819"}, {
    "id": "3842",
    "county": "\u8f66\u57ce\u4e61",
    "parent": "3819"
}, {"id": "3843", "county": "\u6ee1\u5dde\u4e61", "parent": "3819"}, {
    "id": "3844",
    "county": "\u678b\u5c71\u4e61",
    "parent": "3819"
}, {"id": "3845", "county": "\u4e09\u5730\u95e8\u4e61", "parent": "3819"}, {
    "id": "3846",
    "county": "\u96fe\u53f0\u4e61",
    "parent": "3819"
}, {"id": "3847", "county": "\u739b\u5bb6\u4e61", "parent": "3819"}, {
    "id": "3848",
    "county": "\u6cf0\u6b66\u4e61",
    "parent": "3819"
}, {"id": "3849", "county": "\u6765\u4e49\u4e61", "parent": "3819"}, {
    "id": "3850",
    "county": "\u6625\u65e5\u4e61",
    "parent": "3819"
}, {"id": "3851", "county": "\u72ee\u5b50\u4e61", "parent": "3819"}, {
    "id": "3852",
    "county": "\u7261\u4e39\u4e61",
    "parent": "3819"
}, {"id": "3854", "county": "\u53f0\u4e1c\u5e02", "parent": "3853"}, {
    "id": "3855",
    "county": "\u6210\u529f\u9547",
    "parent": "3853"
}, {"id": "3856", "county": "\u5173\u5c71\u9547", "parent": "3853"}, {
    "id": "3857",
    "county": "\u5351\u5357\u4e61",
    "parent": "3853"
}, {"id": "3858", "county": "\u9e7f\u91ce\u4e61", "parent": "3853"}, {
    "id": "3859",
    "county": "\u6c60\u4e0a\u4e61",
    "parent": "3853"
}, {"id": "3860", "county": "\u4e1c\u6cb3\u4e61", "parent": "3853"}, {
    "id": "3861",
    "county": "\u957f\u6ee8\u4e61",
    "parent": "3853"
}, {"id": "3862", "county": "\u592a\u9ebb\u91cc\u4e61", "parent": "3853"}, {
    "id": "3863",
    "county": "\u5927\u6b66\u4e61",
    "parent": "3853"
}, {"id": "3864", "county": "\u7eff\u5c9b\u4e61", "parent": "3853"}, {
    "id": "3865",
    "county": "\u6d77\u7aef\u4e61",
    "parent": "3853"
}, {"id": "3866", "county": "\u5ef6\u5e73\u4e61", "parent": "3853"}, {
    "id": "3867",
    "county": "\u91d1\u5cf0\u4e61",
    "parent": "3853"
}, {"id": "3868", "county": "\u8fbe\u4ec1\u4e61", "parent": "3853"}, {
    "id": "3869",
    "county": "\u5170\u5c7f\u4e61",
    "parent": "3853"
}, {"id": "3871", "county": "\u82b1\u83b2\u5e02", "parent": "3870"}, {
    "id": "3872",
    "county": "\u51e4\u6797\u9547",
    "parent": "3870"
}, {"id": "3873", "county": "\u7389\u91cc\u9547", "parent": "3870"}, {
    "id": "3874",
    "county": "\u65b0\u57ce\u4e61",
    "parent": "3870"
}, {"id": "3875", "county": "\u5409\u5b89\u4e61", "parent": "3870"}, {
    "id": "3876",
    "county": "\u5bff\u4e30\u4e61",
    "parent": "3870"
}, {"id": "3877", "county": "\u5149\u590d\u4e61", "parent": "3870"}, {
    "id": "3878",
    "county": "\u4e30\u6ee8\u4e61",
    "parent": "3870"
}, {"id": "3879", "county": "\u745e\u7a57\u4e61", "parent": "3870"}, {
    "id": "3880",
    "county": "\u5bcc\u91cc\u4e61",
    "parent": "3870"
}, {"id": "3881", "county": "\u79c0\u6797\u4e61", "parent": "3870"}, {
    "id": "3882",
    "county": "\u4e07\u8363\u4e61",
    "parent": "3870"
}, {"id": "3883", "county": "\u5353\u6eaa\u4e61", "parent": "3870"}, {
    "id": "3885",
    "county": "\u9a6c\u516c\u5e02",
    "parent": "3884"
}, {"id": "3886", "county": "\u6e56\u897f\u4e61", "parent": "3884"}, {
    "id": "3887",
    "county": "\u767d\u6c99\u4e61",
    "parent": "3884"
}, {"id": "3888", "county": "\u897f\u5c7f\u4e61", "parent": "3884"}, {
    "id": "3889",
    "county": "\u671b\u5b89\u4e61",
    "parent": "3884"
}, {"id": "3890", "county": "\u4e03\u7f8e\u4e61", "parent": "3884"}, {
    "id": "3893",
    "county": "\u4e2d\u897f\u533a",
    "parent": "3892"
}, {"id": "3894", "county": "\u6e7e\u4ed4\u533a", "parent": "3892"}, {
    "id": "3895",
    "county": "\u4e1c\u533a",
    "parent": "3892"
}, {"id": "3896", "county": "\u5357\u533a", "parent": "3892"}, {
    "id": "3898",
    "county": "\u6cb9\u5c16\u65fa\u533a",
    "parent": "3897"
}, {"id": "3899", "county": "\u6df1\u6c34\u57d7\u533a", "parent": "3897"}, {
    "id": "3900",
    "county": "\u4e5d\u9f99\u57ce\u533a",
    "parent": "3897"
}, {"id": "3901", "county": "\u9ec4\u5927\u4ed9\u533a", "parent": "3897"}, {
    "id": "3902",
    "county": "\u89c2\u5858\u533a",
    "parent": "3897"
}, {"id": "3904", "county": "\u8343\u6e7e\u533a", "parent": "3903"}, {
    "id": "3905",
    "county": "\u5c6f\u95e8\u533a",
    "parent": "3903"
}, {"id": "3906", "county": "\u5143\u6717\u533a", "parent": "3903"}, {
    "id": "3907",
    "county": "\u5317\u533a",
    "parent": "3903"
}, {"id": "3908", "county": "\u5927\u57d4\u533a", "parent": "3903"}, {
    "id": "3909",
    "county": "\u897f\u8d21\u533a",
    "parent": "3903"
}, {"id": "3910", "county": "\u6c99\u7530\u533a", "parent": "3903"}, {
    "id": "3911",
    "county": "\u8475\u9752\u533a",
    "parent": "3903"
}, {"id": "3912", "county": "\u79bb\u5c9b\u533a", "parent": "3903"}, {
    "id": "3915",
    "county": "\u82b1\u5730\u739b\u5802\u533a",
    "parent": "3914"
}, {"id": "3916", "county": "\u5723\u5b89\u591a\u5c3c\u5802\u533a", "parent": "3914"}, {
    "id": "3917",
    "county": "\u5927\u5802\u533a",
    "parent": "3914"
}, {"id": "3918", "county": "\u671b\u5fb7\u5802\u533a", "parent": "3914"}, {
    "id": "3919",
    "county": "\u98ce\u987a\u5802\u533a",
    "parent": "3914"
}, {"id": "3921", "county": "\u5609\u6a21\u5802\u533a", "parent": "3920"}, {
    "id": "3923",
    "county": "\u5723\u65b9\u6d4e\u5404\u5802\u533a",
    "parent": "3922"
}];
