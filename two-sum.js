let TwoSum = function (array, target) {
    let checkerObject = {};
    for (let i = 0; i < array.length; i++) {
        const checkerNumber = target - array[i];

        if (checkerObject[checkerNumber] !== undefined) {
            return [checkerObject[checkerNumber], i];
        }
        checkerObject[array[i]] = i;
        console.log(checkerObject);
    }
    return [];
};
let arr = [
    3, 6, 1, 9, 12, 7, 16, 17, 28, 39, 20, 11, 17, 21, 34, 35, 26, 47, 18, 19,
    29, 26, 35, 67,
];
let target = 89;
console.log(TwoSum(arr, target));
