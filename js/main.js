window.onload = function() {
    var photos = get(".photo");
    for (var i = 0; i < photos.length; i++) {
        photos[i].onclick = function() {
            turn(this);
        }
    }
    addPhotos();
};

// 通用函数
function get(selectElem) {
    //判断传入的是元素的class还是id 
    var method = selectElem.substr(0, 1) == "#" ? "getElementById" : "getElementsByClassName";
    return document[method](selectElem.substr(1));
}

// 输出所有海报
var data = data;

function addPhotos() {
    // 以字符串形式获取id为wrap的元素中HTML模板代码
    var template = get("#wrap").innerHTML;
    var html = [];
    // 遍历data数组,将其中的数据带入到模板代码中
    for (var i = 0; i < data.length; i++) {
        var _html = template.replace("{{id}}", i)
            .replace("{{img}}", data[i].img)
            .replace("{{alt}}", data[i].img)
            .replace("{{caption}}", data[i].caption)
            .replace("{{desc}}", data[i].desc);
        html.push(_html);
    }
    // 将id为wrap元素中的HTML代码替换为用join方法拼接好的html数组
    get("#wrap").innerHTML = html.join("");
    //随机选择一张海报设置居中;
    sort(random([0, data.length-1]));
}

// 控制3D翻转
function turn(el) {
    var cls = el.className;
    // 判断cls中有无"photo_front"字符串
    if (cls.indexOf("photo_front") > -1) {
        // 使用replace函数将cls中"photo_front",替换为"photo_back"
        cls = cls.replace(/photo_front/, "photo_back");
    } else {
        // 使用replace函数将cls中的"photo_back"替换为"photo_front"
        cls = cls.replace(/photo_back/, "photo_front");
    }
    return el.className = cls;
}

// 随机生成一个索引值;
function random(range) {
    var min = Math.min(range[0], range[1]);
    var max = Math.max(range[0], range[1]);

    var diff = max - min;
    var Num = Math.random() * diff + min;
    if (Num>0.5) {
        Num = Math.ceil(Num);
    } else {
        Num = Math.floor(Num);
    }
    return Num;
}

// 排序海报
function sort(Index) {
    var photo_center = get("#photo_" + Index);
    // 个当前选中的photo添加class "center"
    photo_center.className += " cneter ";
}
