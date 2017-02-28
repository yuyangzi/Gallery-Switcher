window.onload = function () {
    addPhotos();
    var onPhotos = get(".photo");
    var onItems = get(".item");
    for (var i = 0; i < onPhotos.length; i++) {
        onPhotos[i].onclick = function () {
            var Index = getIndex(onPhotos, this);
            if (this.className.indexOf("center") > -1) {
                turn(this);
            } else {
                GallerySort(Index);
            }
        }
    }
    for (var j = 0; j < onItems.length; j++) {
        onItems[j].onclick = function () {
            var Index = getIndex(onItems, this);
            if (this.className.indexOf("item_current") > -1) {
                turn(onPhotos[Index]);
            } else {
                GallerySort(Index);
            }
        }
    }
};

window.onresize = function () {
    GallerySort(random([0, data.length - 1]));
}

// ===========通用功能型函数===============
// 获取元素
function get(selectElem) {
    //获取传入参数的一个字符.
    var str = selectElem.substr(0, 1);
    var elme = selectElem.substr(1);
    if (str == "#") {
        return document.getElementById(elme);
    } else if (str == ".") {
        return document.getElementsByClassName(elme)
    } else if (str == "<") {
        return document.getElementsByTagName(elme)
    } else {
        return false;
    }
}

//获取数组中某个key的索引值
function getIndex(Arr, key) {
    for (var i = 0; i < Arr.length; i++) {
        if (Arr[i] == key) {
            return i;
        }
    }
}

// 随机生成一个索引值;
function random(range) {
    var min = Math.min(range[0], range[1]);
    var max = Math.max(range[0], range[1]);

    var diff = max - min;
    var Num = Math.random() * diff + min;
    if (Num > 0.5) {
        Num = Math.ceil(Num);
    } else {
        Num = Math.floor(Num);
    }
    return Num;
}

//计算左右分区的范围;
function range() {
    var range = {
        left: {
            //最小值: 0减去".photo"的宽度----------最大值: "#wrap"的宽度 减去 ".photo"的宽度再除以2;
            x: [-get(".photo")[0].offsetWidth, (get("#wrap").offsetWidth - get(".photo")[0].offsetWidth) / 2],
            //最小值:0减去".photo"的高度---------------最大值:"#wrap"的高度;
            y: [-get(".photo")[0].offsetHeight, get("#wrap").offsetHeight]
        },
        right: {
            //最小值: "#wrap"的宽度加上".photo"的宽度再除以2---------最大值: "#wrap"的宽度;
            x: [(get("#wrap").offsetWidth + get(".photo")[0].offsetWidth) / 2, get("#wrap").offsetWidth],
            //最小值:0减去".photo"的高度---------------最大值:"#wrap"的高度;
            y: [-get(".photo")[0].offsetHeight, get("#wrap").offsetHeight]
        }
    };
    return range;
}
// ========== 通用功能型函数结束===========


// =====================操作型函数========================
var data = data;
// 输出所有海报
function addPhotos() {
    // 以字符串形式获取id为wrap的元素中HTML模板代码
    var template = get("#wrap").innerHTML;
    var html = [];
    var navs = [];
    // 遍历data数组,将其中的数据带入到模板代码中
    for (var i = 0; i < data.length; i++) {
        var _html = template.replace("{{id}}", i)
            .replace("{{img}}", data[i].img)
            .replace("{{alt}}", data[i].img)
            // .replace("{{title}}",data[i].img)
            .replace("{{caption}}", data[i].caption)
            .replace("{{desc}}", data[i].desc);
        html.push(_html);
        navs.push("<span id='nav_" + i + "' class='item '></span>");
    }
    html.push("<nav>" + navs.join('') + "</nav>");
    // 将id为wrap元素中的HTML代码替换为用join方法拼接好的html数组
    get("#wrap").innerHTML = html.join("");
    //随机选择一张海报设置居中;
    GallerySort(random([0, data.length - 1]));
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

// 排序海报
function GallerySort(Index) {
    var _photo = get(".photo"),
        _item = get(".item"),
        photos = [];
    //清除所有".photo"上的"center"类;
    for (var i = 0; i < _photo.length; i++) {
        _photo[i].className = _photo[i].className.replace(/\s*center\s*/, " ");
        _photo[i].setAttribute("title", "");
        _photo[i].style.left = "";
        _photo[i].style.top = "";
        _photo[i].style.transform = "rotate(0deg)";
        _item[i].className = _item[i].className.replace(/\s*item_current\s*/, " ");
        _item[i].setAttribute("title", "");
        photos.push(_photo[i]);
    }
    // 已添加类的方式.展现当前选中的".photo"和其对应的控制按钮;
    var photo = get("#photo_" + Index);
    photo.className += " center ";
    photo.style.transform = "translate(-50%,-50%)";
    photo.setAttribute("title", "点击查看详细信息");
    get("#nav_" + Index).className += " item_current ";
    get("#nav_" + Index).setAttribute("title", "点击查看详细信息");
    //在数组中去除添加了"center"类的".photo";
    photo_center = photos.splice(Index, 1)[0];
    //把海报分为左,右两个部分;
    var photos_left = photos.splice(0, Math.ceil(photos.length / 2))
    var photos_right = photos;
    //遍历photos_left,添加样式;
    for (keyL in photos_left) {
        var photoL = photos_left[keyL];
        photoL.style.left = random(range().left.x) + "px";
        photoL.style.top = random(range().left.y) + "px";
        photoL.style.transform = "rotate(" + random([-150, 150]) + "deg)";
    }
    //遍历photos_right,添加样式;
    for (keyR in photos_right) {
        var photoR = photos_right[keyR];
        photoR.style.left = random(range().right.x) + "px";
        photoR.style.top = random(range().right.y) + "px";
        photoR.style.transform = "rotate(" + random([-150, 150]) + "deg)";
    }
}
// =====================操作型函数结束======================


// =====================事件型函数==========================


// =====================事件型函数结束======================