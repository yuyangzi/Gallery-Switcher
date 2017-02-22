var data = [];
// 使用ES6引入的模板字符串:反撇号(`),表示的变量dataStr的字符串字面量
var dataStr =`
1、疯狂动物城<br>\
<br>\
导演: 拜伦·霍华德 / 瑞奇·摩尔 / 杰拉德·布什<br>\
编剧: 拜伦·霍华德 / 瑞奇·摩尔 / 杰拉德·布什 / 吉姆·里尔顿 / 乔西·特立尼达 / 菲尔·约翰斯顿 / 珍妮弗·李<br>\
主演: 金妮弗·古德温 / 杰森·贝特曼 / 伊德里斯·艾尔巴 / 珍妮·斯蕾特 / 内特·托伦斯 / 更多...<br>\
类型: 喜剧 / 动作 / 动画 / 冒险<br>\
制片国家/地区: 美国<br>\
语言: 英语 / 挪威语<br>\
上映日期: 2016-03-04(中国大陆/美国)<br>\
片长: 109分钟(中国大陆) / 108分钟<br>\
<br>\
<br>\
2、海边的曼彻斯特<br>\
<br>\
导演: 肯尼思·洛纳根<br>\
编剧: 肯尼思·洛纳根<br>\
主演: 卡西·阿弗莱克 / 卢卡斯·赫奇斯 / 米歇尔·威廉姆斯 / C·J·威尔逊 / 凯尔·钱德勒 / 更多...<br>\
类型: 剧情 / 家庭<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2016-09-08(多伦多电影节) / 2016-11-18(美国)<br>\
片长: 137分钟<br>\
<br>\
<br>\
3、血战钢锯岭<br>\
<br>\
导演: 梅尔·吉布森<br>\
编剧: 安德鲁·奈特 / 罗伯特·申坎<br>\
主演: 安德鲁·加菲尔德 / 萨姆·沃辛顿 / 文斯·沃恩 / 雨果·维文 / 卢克·布雷西 / 更多...<br>\
类型: 剧情 / 动作 / 传记 / 历史 / 战争<br>\
制片国家/地区: 美国 / 澳大利亚<br>\
语言: 英语<br>\
上映日期: 2016-12-08(中国大陆) / 2016-11-04(美国)<br>\
片长: 139分钟(中国大陆) / 140分钟(美国)<br>\
<br>\
<br>\
4、王者<br>\
<br>\
导演: 韩在林<br>\
编剧: 韩在林<br>\
主演: 赵寅成 / 郑雨盛 / 裴晟祐 / 金雅中 / 柳俊烈 / 更多...<br>\
类型: 剧情 / 犯罪<br>\
制片国家/地区: 韩国<br>\
语言: 韩语<br>\
上映日期: 2017-01-18(韩国)<br>\
片长: 134分钟 / 157分钟(加长版)<br>\
<br>\
<br>\
5、黑夜传说5：血战<br>\
<br>\
导演: 安娜·福斯特<br>\
编剧: 凯文·格雷维奥斯 / 伦·怀斯曼 / 科里·古德曼 / 丹尼·麦克布耐德<br>\
主演: 凯特·贝金赛尔 / 提奥·詹姆斯 / 托比亚斯·门基斯 / 拉娜·普尔弗 / 查尔斯·丹斯 / 更多...<br>\
类型: 动作 / 恐怖<br>\
制片国家/地区: 美国<br>\
语言: 英语 / 乌克兰语<br>\
上映日期: 2017-01-06(美国) / 2016-11-24(俄罗斯)<br>\
片长: 91分钟<br>\
<br>\
<br>\
6、星球大战外传：侠盗一号<br>\
<br>\
导演: 加里斯·爱德华斯<br>\
编剧: 克里斯·韦兹 / 托尼·吉尔罗伊<br>\
主演: 菲丽希缇·琼斯 / 迭戈·鲁纳 / 甄子丹 / 本·门德尔森 / 麦斯·米科尔森 / 更多...<br>\
类型: 动作 / 科幻 / 冒险<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2017-01-06(中国大陆) / 2016-12-16(美国)<br>\
片长: 134分钟<br>\
<br>\
<br>\
7、生化危机：终章<br>\
<br>\
导演: 保罗·安德森<br>\
编剧: 保罗·安德森<br>\
主演: 米拉·乔沃维奇 / 伊恩·格雷 / 艾丽·拉特 / 鲁比·罗丝 / 李准基 / 更多...<br>\
类型: 动作 / 科幻 / 惊悚 / 恐怖<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2017-02-24(中国大陆) / 2016-12-23(日本) / 2017-01-27(美国)<br>\
片长: 106分钟(美国) / 99分钟(中国大陆)<br>\
<br>\
<br>\
8、刺客信条<br>\
<br>\
导演: 贾斯汀·库泽尔<br>\ 
编剧: 比尔·科拉奇 / 亚当·库珀 / 迈克尔·莱斯利<br>\
主演: 迈克尔·法斯宾德 / 玛丽昂·歌迪亚 / 杰瑞米·艾恩斯 / 布莱丹·格里森 / 夏洛特·兰普林 / 更多...<br>\
类型: 动作 / 科幻 / 历史 / 冒险<br>\
制片国家/地区: 美国 / 英国 / 法国 / 香港<br>\
语言: 英语 / 西班牙语<br>\
上映日期: 2017-02-24(中国大陆) / 2016-12-21(美国)<br>\
片长: 116分钟<br>\
<br>\
<br>\
9、金刚狼3：殊死一战<br>\
<br>\
导演: 詹姆斯·曼高德<br>\
编剧: 迈克尔·格林 / 斯科特·弗兰克<br>\
主演: 休·杰克曼 / 波伊德·霍布鲁克 / 达芙妮·基恩 / 帕特里克·斯图尔特 / 斯戴芬·莫昌特 / 更多...<br>\
类型: 剧情 / 动作 / 科幻<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2017-03-03(中国大陆/美国) / 2017-02-17(柏林电影节)<br>\
片长: 135分钟<br>\
<br>\
<br>\
10、最终幻想15：王者之剑<br>\
<br>\
导演: 野末武志<br>\
编剧: 长谷川隆<br>\
主演: 亚伦·保尔 / 肖恩·宾 / 琳娜·海蒂 / 戴维·甘特 / 达林·德保罗 / 更多...<br>\
类型: 剧情 / 科幻 / 动画 / 奇幻 / 冒险<br>\
制片国家/地区: 日本<br>\
语言: 英语 / 日语<br>\
上映日期: 2017-03-10(中国大陆) / 2016-07-09(日本) / 2016-08-19(美国)<br>\
片长: 116分钟(中国大陆) / 115分钟<br>\
<br>\
<br>\
11、一条狗的使命<br>\
<br>\
导演: 拉斯·霍尔斯道姆<br>\
编剧: W·布鲁斯·卡梅伦 / 凯瑟琳·迈克 / 奥黛丽·威尔斯 / 玛雅·福布斯 / 沃利·亚历斯戴尔<br>\
主演: 布丽特·罗伯森 / 丹尼斯·奎德 / 佩吉·利普顿 / 乔什·加德 / K·J·阿帕 / 更多...<br>\
类型: 剧情 / 喜剧 / 冒险<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2017-03-03(中国大陆) / 2017-01-27(美国)<br>\
片长: 120分钟<br>\
<br>\
<br>\
12、否认<br>\
<br>\
导演: 米克·杰克逊<br>\
编剧: 戴维·黑尔 / 黛博拉·利普斯塔特<br>\
主演: 蕾切尔·薇兹 / 汤姆·威尔金森 / 蒂莫西·斯波 / 安德鲁·斯科特 / 杰克·劳登 / 更多...<br>\
类型: 剧情 / 传记 / 历史<br>\
制片国家/地区: 美国 / 英国<br>\
语言: 英语 / 德语 / 希伯来语<br>\
上映日期: 2016-09-11(多伦多电影节) / 2016-09-30(美国) / 2017-01-27(英国)<br>\
片长: 109分钟<br>\
<br>\
<br>\
13、降临<br>\
<br>\
导演: 丹尼斯·维伦纽瓦<br>\
编剧: 埃里克·海瑟尔 / 特德·姜<br>\
主演: 艾米·亚当斯 / 杰瑞米·雷纳 / 福里斯特·惠特克 / 迈克尔·斯图巴 / 马志 / 更多...<br>\
类型: 剧情 / 科幻<br>\
制片国家/地区: 美国<br>\
语言: 英语 / 汉语普通话<br>\
上映日期: 2017-01-20(中国大陆) / 2016-09-01(威尼斯电影节) / 2016-11-11(美国)<br>\
片长: 116分钟<br>\
<br>\
<br>\
14、推销员<br>\
<br>\
导演: 阿斯哈·法哈蒂<br>\
编剧: 阿斯哈·法哈蒂<br>\
主演: 沙哈布·侯赛尼 / 塔兰涅·阿里多斯蒂 / 巴巴克·卡里米 / Mina Sadati /<br>\
类型: 剧情 / 惊悚<br>\
制片国家/地区: 伊朗 / 法国<br>\
语言: 波斯语<br>\
上映日期: 2016-05-21(戛纳电影节) / 2016-08-17(法国)<br>\
片长: 125分钟<br>\
<br>\
<br>\
15、帕特森<br>\
<br>\
导演: 吉姆·贾木许<br>\
编剧: 吉姆·贾木许<br>\
主演: 亚当·德赖弗 / 格什菲·法拉哈尼 / 内利 / 里兹万·曼吉 / 巴里·沙巴卡·亨利 / 更多...<br>\
类型: 剧情<br>\
制片国家/地区: 美国 / 法国 / 德国<br>\
语言: 英语<br>\
上映日期: 2016-05-16(戛纳电影节) / 2016-12-28(美国)<br>\
片长: 113分钟<br>\
<br>\
<br>\
16、月光男孩<br>\
<br>\
导演: 巴里·詹金斯<br>\
编剧: 巴里·詹金斯 / 塔瑞尔·麦卡尼<br>\
主演: 崔凡特·罗兹 / 安德烈·霍兰 / 马赫沙拉·阿里 / 娜奥米·哈里斯 / 加奈儿·梦奈 / 更多...<br>\
类型: 剧情 / 同性<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2016-09-02(特柳赖德电影节) / 2016-09-10(多伦多电影节) / 2016-10-21(美国)<br>\
片长: 111分钟<br>\
<br>\
<br>\
17、夜行动物<br>\
<br>\
导演: 汤姆·福特<br>\
编剧: 汤姆·福特 / 奥斯丁·赖特<br>\
主演: 艾米·亚当斯 / 杰克·吉伦哈尔 / 迈克尔·珊农 / 亚伦·泰勒-约翰逊 / 艾拉·菲舍尔 / 更多...<br>\
类型: 剧情 / 惊悚<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2016-09-02(威尼斯电影节) / 2016-12-09(美国)<br>\
片长: 116分钟<br>\
<br>\
<br>\
18、第一夫人<br>\
<br>\
导演: 帕布罗·拉雷恩<br>\
编剧: 诺亚·奥本海姆<br>\
主演: 娜塔莉·波特曼 / 彼得·萨斯加德 / 格蕾塔·葛韦格 / 比利·克鲁德普 / 约翰·赫特 / 更多...<br>\
类型: 剧情 / 传记<br>\
制片国家/地区: 智利 / 法国 / 美国<br>\
语言: 英语<br>\
上映日期: 2016-09-07(威尼斯电影节) / 2016-12-02(美国)<br>\
片长: 100分钟<br>\
<br>\
<br>\
19、萨利机长<br>\
<br>\
导演: 克林特·伊斯特伍德<br>\
编剧: 托德·考马尔尼基 / 切斯利·舒伦伯格 / 杰弗里·札斯洛<br>\
主演: 汤姆·汉克斯 / 艾伦·艾克哈特 / 劳拉·琳妮 / 杰瑞·费拉拉 / 安娜·冈 / 更多...<br>\
类型: 剧情 / 传记 / 灾难<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2016-12-09(中国大陆) / 2016-09-09(美国)<br>\
片长: 96分钟<br>\
<br>\
<br>\
20、怪兽召唤<br>\
<br>\
导演: 胡安·安东尼奥·巴亚纳<br>\
编剧: 帕特里克·内斯 / 西沃恩·道德<br>\
主演: 刘易斯·麦克杜格尔 / 西格妮·韦弗 / 菲丽希缇·琼斯 / 连姆·尼森 / 托比·凯贝尔 / 更多...<br>\
类型: 剧情 / 儿童 / 奇幻<br>\
制片国家/地区: 美国 / 西班牙<br>\
语言: 英语<br>\
上映日期: 2016-09-09(多伦多电影节) / 2016-10-07(西班牙) / 2017-01-06(美国)<br>\
片长: 108分钟<br>\
<br>\
<br>\
21、顽石之拳<br>\
<br>\
导演: 乔纳森·加库波维兹<br>\
编剧: 乔纳森·加库波维兹<br>\
主演: 埃德加·拉米雷兹 / 罗伯特·德尼罗 / 亚瑟·雷蒙德 / 卢宾·布雷兹 / 安娜·德·阿玛斯 / 更多...<br>\
类型: 剧情 / 动作 / 传记 / 运动<br>\
制片国家/地区: 巴拿马 / 美国<br>\
语言: 英语 / 西班牙语<br>\
上映日期: 2016-08-26(美国) / 2016-05-16(戛纳电影节)<br>\
片长: 105分钟<br>\
<br>\
<br>\
22、间谍同盟<br>\
<br>\
导演: 罗伯特·泽米吉斯<br>\
编剧: 斯蒂文·奈特<br>\
主演: 布拉德·皮特 / 玛丽昂·歌迪亚 / 马修·古迪 / 丽兹·卡潘 / 夏洛特·霍普 / 更多...<br>\
类型: 剧情 / 动作 / 爱情 / 战争<br>\
制片国家/地区: 美国<br>\
语言: 英语 / 法语<br>\
上映日期: 2016-11-30(中国大陆) / 2016-11-23(美国)<br>\
片长: 124分钟<br>\
<br>\
<br>\
23、奇异博士<br>\
<br>\
导演: 斯科特·德瑞克森<br>\
编剧: 史蒂夫·迪特寇 / 托马斯·迪恩·唐纳利 / 斯坦·李 / 乔·斯派茨 / 约书亚·奥本海默<br>\
主演: 本尼迪克特·康伯巴奇 / 蒂尔达·斯文顿 / 麦斯·米科尔森 / 切瓦特·埃加福特 / 瑞秋·麦克亚当斯 / 更多...<br>\
类型: 动作 / 科幻 / 奇幻 / 冒险<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2016-11-04(中国大陆/美国) / 2016-10-25(英国)<br>\
片长: 115分钟<br>\
<br>\
<br>\
24、隐藏人物<br>\
<br>\
导演: 特奥多尔·梅尔菲<br>\
编剧: 艾莉森·施罗德 / 特奥多尔·梅尔菲 / 玛戈特·李·谢特利<br>\
主演: 塔拉吉·P·汉森 / 奥克塔维亚·斯宾瑟 / 加奈儿·梦奈 / 凯文·科斯特纳 / 克斯汀·邓斯特 / 更多...<br>\
类型: 剧情 / 传记 / 历史<br>\
制片国家/地区: 美国<br>\
语言: 英语<br>\
上映日期: 2016-12-25(美国)<br>\
片长: 127分钟<br>\
`;  



var films= dataStr.split("<br><br><br>");
for (var i = 0; i<films.length; i++) {
	var captions = films[i].split("<br><br>");
	data.push({
		img: captions[0].replace("、"," ") + "-min.jpg",
		caption: captions[0].split("、")[1],
		desc: captions[1]
	});
	console.log(captions[0].replace("、"," ") + "-min.jpg");
}