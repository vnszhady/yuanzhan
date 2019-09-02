var sum = 0;
for (var i = 2; i < 102; i = i + 2) {
    sum = sum + i;
}
console.log(sum);
//计算2+4+....+100
对比两种有何不同？

for (var i = 2; i < 102; i = i + 2) {
    var sum = 0;
        sum = sum + i;
}
console.log(sum);
//计算2+2+2+.....100

for (var i = 1; i < 101; i++) {
    if (i%2==1&&i==2) {
        var number = i;
        console.log(number);
    } 

    }

var scores = [56, 67, 89, 652, 753, 23, 46];
for (var i = 0; i < scores.length; i++) {
    if (scores[i] > scores[i + 1]) {
        var temp = scores[i];
        scores[i] = scores[i + 1];
        scores[i + 1] = temp;
        for (var j = i; j > 0; j--) {


        }



    }

}

