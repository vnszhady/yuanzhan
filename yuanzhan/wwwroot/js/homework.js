var sum = 0;
for (var i = 2; i < 102; i = i + 2) {
    sum = sum + i;
}
console.log(sum);
//计算2+4+....+100
//对比两种有何不同？

for (var i = 2; i < 102; i = i + 2) {
    var sum = 0;
    sum = sum + i;
}
console.log(sum);
//计算2+2+2+.....100


for (var i = 1; i < 100; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) {
            break;

        }
        if (j == i - 1 && i % j != 0) {
            console.log(i + " 是质数");

        }
    }
}



var scores = [72, 67, 89, 652, 753, 23, 46];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] > scores[i + 1]) {
        var temp = scores[i];
        scores[i] = scores[i + 1];
        scores[i + 1] = temp;
        for (var j = i; j > 0; j--) {
            if (scores[j] < scores[j - 1]) {
                var tempj = scores[j];
                scores[j] = scores[j - 1];
                scores[j - 1] = tempj;
            } else {
                break;
            }

        }

    }

}
console.log(scores);


//第二次作业
//1.封装成一个函数findPrime(max)，可以打印出max以内的所有素数
function findPrime(max) {
    for (var i = 1; i < max; i++) {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                break;
            }
            if (j == i - 1 && i % j != 0) {
                console.log(i + " 是质数");

            }
        }
    }

}
findPrime(110)


//2.求等差数列之和
function Sum(first, step, last) {
    //给定数列首项数值，公差，末项数值
    if ((last - first + step) % step == 0) {
        //判定用户输入的是否构成等差数列
        var sum = 0;
        for (var i = first; i < last; i = i + step) {
            sum = sum + i;
        }

    } else {
        alert("当前设置的不是等差数列！");
    }

    return alert("计算结果为 " + sum);
}
Sum(2, 5, 53)



//3.建立一个函数getMaxNumber()，可以接受任意多各种类型
function getMaxNumber(parameter) {
    var arr = [];
    switch (typeof parameter) {
        case number:
            arry.push(parseInt(parameter));
            break;
        case string:
            arry.push(parseInt(parameter));
            break;
        case boolean:
            arry.push(parseInt(parameter));
            break;
        default:
            break;
    }
    return Math.max(arr);
}




//4.封装一个函数Swap(arr, i, j)，可以交换数组arr里下标 i 和 j 的值

var arr = [72, 67, 89, 652, 753, 23, 46];
function swap(arr, i, j) {
    container = arr[i];
    //将这个数组索引i的值放入一个空容器
    arr[i] = arr[j];
    //将这个数组索引j的值放入i的位置
    arr[j] = container;
    //将放有i值的容器与j值交换顺序
    console.log('新数组：' + arr);
}

swap(arr, 4, 6)



//5.将“冒泡排序”封装成函数
var arr = [72, 67, 89, 652, 753, 23, 46];

function BubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            var temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            for (var j = i; j > 0; j--) {
                if (arr[j] < arr[j - 1]) {
                    var tempj = arr[j];
                    arr[j] = arr[j - 1];
                    arr[j - 1] = tempj;
                } else {
                    break;
                }
            }

        }

    }
    console.log('新的顺序：' + arr);
}
BubbleSort(arr)
//6.将源栈同学姓名 / 昵称装入数组，再根据该数组输出共有多少同学 
var information = ['飞哥', '超蟀', '小陈', '小蟀', '小薛', '二蟀'];
for (var i = 0; i < information.length; i = i + 2) {
    console.log(information[i]);
}

//7.在上述数组头部加上小鱼老师，末尾加上大飞哥
information.push('大飞哥');
information[0] = '小于老师';


//8.删除一个数组里面重复的元素
var arr = [76, 77, 76, 88,];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < length; j++) {
        if (arr[i] == arr[j + 1]) {
            //判断从第一个元素起是否与后面的元素重复
            //如果两个元素重复，将其中一个元素与第一个或最后一个元素交换顺序，并删除
            container = arr[j + 1];
            arr[j + 1] = arr[length - 1];
            arr[length - 1] = container;
            break;
            console.log(arr.pop());
        }

    }
    
}


//9.使用JavaScript内置字符串函数上。
var string = "源栈: 飞哥小班教学，线下免费收看";
newString = string.replace("飞哥", "大神");
newString = string.replace("线下", "线上");

//10.将数组['why', 'gIT', 'vs2019', 'community', 'VERSION']规范化
var arr = ['why', 'gIT', 'vs2019', 'community', 'VERSION'];
arr.toString();
var new= "";





//11.创建一个函数getRandomArray(length, max) ，
function getRandomArray(length, max) {
    var arr = [];
    for (var i = 0; i < Math.random() * length; i++)
        arr.push(Math.floor((Math.random() * max)));

    return console.log(arr);
}
getRandomArray(500, 99)

//12.将一个字符串顺序颠倒

function Reverse(string) {
    for (var i = 0; i < string.length; i++) {
        var temp = string.charAt(i);
        string.charAt(string.i) = string.charAt(string.length - 1 - i);
        string.charAt(string.length - 1 - i) = temp;
    }
    console.log('反转后的字符串：' + string);
}

Reverse("hello,world")//运行有问题

//13.统计单词数量



//拓展14.生成一个随机数组，对其进行冒泡排序
