function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;
    for (let i=0; i<3; i++) {
        if (a[i] < b[i]) {
            bobScore++;
        } else if (a[i] > b[i]) {
            aliceScore++;
        }
    }
    return [aliceScore, bobScore];
}

let alice = [5, 6, 7];
let bob = [3, 6, 10];

console.log(compareTriplets(alice, bob));

function getSecondLargest(arr) {
    let max = arr.reduce((biggest, current) => {
        return biggest > current ? biggest : current;
    }, 0);
    let newArr = arr.filter(elem => {
        return elem != max;
    });
    return newArr.reduce((biggest, current) => {
        return biggest > current ? biggest : current;
    }, 0);
}
let arr = [5, 6, 3, 2, 7];

console.log(getSecondLargest(arr));