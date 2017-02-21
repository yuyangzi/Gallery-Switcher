window.onload = function () {
	var photo = document.getElementById("photo");
	photo.onclick = function () {
        turn(this);
    }
};

// 控制3D翻转
function turn(elem) {
	var cls = elem.className;
	// 判断cls中有无"photo_front"字符串
    if (cls.indexOf("photo_front") >-1 ) {
        // 使用replace函数将cls中"photo_front",替换为"photo_back"
        cls = cls.replace(/photo_front/,"photo_back");
    }else {
        // 使用replace函数将cls中的"photo_back"替换为"photo_front"
        cls = cls.replace(/photo_back/,"photo_front");
    }
    return elem.className = cls;
}


















