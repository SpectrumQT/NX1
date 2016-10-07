// //test
// //test2
// function sum(arr) {
//     return arr.reduce(function(a, b) {
//         return a + b;
//     });
// }
//
// alert( sum([1, 2, 3]) ); // 6 (=1+2+3)
//
//
//
// function sumArgs() {
//     var args = [].slice.call(arguments);
//     return args.reduce(function(sum, current) {
//         return sum + current;
//     }, 0);
// }
//
// alert( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива

let options = {
    title: "Меню",
    width: 100,
    height: 200
};

let {title, ...size} = options;

console.log(title);
console.log(size);