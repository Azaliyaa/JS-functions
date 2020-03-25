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
