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

// console.log(compareTriplets(alice, bob));

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

// console.log(getSecondLargest(arr));

function climbingLeaderboard(scores, alice) {
    let ranks = [];
    let newArr = scores.filter((score, index, arr) => {
        return score != arr[index - 1];
    });
    alice.forEach(elem => {
        newArr.push(elem);
        newArr.sort((a, b) => a - b).reverse();
        let rank = newArr.indexOf(elem) + 1;
        ranks.push(rank);
        newArr.splice(newArr.indexOf(elem));
    })
    return ranks;
}

let scores = [100, 90, 80, 75, 60];
let aliceScore = [50, 65, 77, 90, 102];

// console.log(climbingLeaderboard(scores, aliceScore));

function timeInWords(h, m) {
    let timeString = '';
    let minutes = 'minutes';
    let time = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
     "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty",
     "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven",
     "twenty eight", "twenty nine"];
     if (m  == 1 || m  == 59) {
        minutes = 'minute';
    }
    if (m < 30 && m != 15 && m != 0) {
        timeString = `${time[m]} ${minutes} past ${time[h]}`;
    } else if (m > 30 && m !=45) {
        timeString = `${time[60-m]} ${minutes} to ${time[h+1]}`;
    } else if (m == 15) {
        timeString = `quarter past ${time[h]}`;
    } else if (m == 45) {
        timeString = `quarter to ${time[h+1]}`;
    } else if (m == 30) {
        timeString = `half past ${time[h]}`;
    } else {
        timeString = `${time[h]} o' clock`;
    }

    return timeString;
}

h = 5;
m = 56;

console.log(timeInWords(h, m));
