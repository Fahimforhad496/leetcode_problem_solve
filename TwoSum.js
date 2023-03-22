// Approach 1

// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return "not found";
// };
var numbers = [2, 5, 6, 7];
const nums = [2, 5, 6, 7];
const target = 13;

// console.log(twoSum(numbers, target));

// Approach 2

// const twoSumComplex = (nums, target) => {
//     const map = {};

//     for (let i = 0; i < nums.length; i++) {
//         const another = target - nums[i];

//         if (map[another]) {
//             console.log([map[another], i]);
//             return [map[another], i];
//         }

//         map[nums[i]] = i;
//         console.log(map[nums[i]], map);
//     }

//     return null;
// };

// const twoSumComplex = (nums, target) => {
//     const obj = {};

//     for (let i = 0; i < nums.length; i++) {
//         console.log(obj);
//         const another = target - nums[i];

//         if (another in obj) {
//             // console.log([obj[another], i]);
//             return [obj[another], i];
//         }

//         obj[i] = nums[i];
//         // console.log(obj[nums[i]], obj);
//     }

//     return null;
// };

var twoSumComplex = function (nums, target) {
    var map = new Map();

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        if (map.get(num) === undefined) map.set(target - num, i);
        else return [map.get(num), i];
    }
};
console.log(twoSumComplex(nums, target));
