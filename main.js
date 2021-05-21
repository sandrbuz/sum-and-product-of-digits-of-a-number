function addAndMult(num) {
    var add = 0; var mul = 1;
    for (var i = 0; i < num.length; i++) {
        add += +num[i];
        mul *= +num[i];
    }
    return [add, mul];
}
var res = addAndMult('325');
console.log(res);