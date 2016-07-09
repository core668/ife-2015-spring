/**
 * @file task0002_1
 * @author core668
 */

// step1

function step1(e) {
    var input = trim($('.step1 .ife-input').value);//取到输入框的值，并去掉首位空白符
    var arr = input.split(',');//把字符串用半角逗号分割为字符串数组

    arr = uniqArray(arr);//对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组
    arr = filterArray(arr);//过滤掉数组中的空值

    var output = arr.join(',');//用半角逗号将所有的数组元素连接成一个字符串
    var p = document.createElement('p');//创建一个p元素
    p.innerHTML = output;//将字符串加到字符串中

    insertAfter(p, e.target);//插到事件目标后面

}

//给按钮绑定点击事件
$.on('.step1 .ife-btn', 'click', step1);


// step2

function step2(e) {
    var input = trim($('.step2 .ife-input').value);
    var arr = input.split(/\n|\s|\ |\，|\,|\、|;/);

    arr = uniqArray(arr);
    arr = filterArray(arr);

    var output = arr.join(',');
    var p = document.createElement('p');
    p.innerHTML = output;

    insertAfter(p, e.target);

}

$.on('.step2 .ife-btn', 'click', step2);


// step3

function showErr(msg) {
    if (msg) {
        $('.ife-err').innerHTML = msg;
    }
    else {
        $('.ife-err').innerHTML = '';
    }
}

function step3(e) {

    showErr();

    var input = trim($('.step3 .ife-input').value);

    if (!input) {
        return showErr('输入不能空');
    }

    var arr = input.split(/[，,、；\s\t\n]/);

    arr = uniqArray(arr);
    arr = filterArray(arr);

    if (arr.length > 10) {
        return showErr('用户输入的爱好数量不能超过10个');
    }

    var p = document.createElement('p');

    each(arr, function (item, i) {
        /*
        <input type="checkbox" id="checkboxid0">
        <label for="checkboxid0">1</label>
         */

        var checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', 'checkboxid' + i);
        var label = document.createElement('label');
        label.setAttribute('for', 'checkboxid' + i);
        label.innerHTML = item;
        p.appendChild(checkbox);
        p.appendChild(label);

    });


    insertAfter(p, e.target);

}


$.on('.step3 .ife-btn', 'click', step3);
