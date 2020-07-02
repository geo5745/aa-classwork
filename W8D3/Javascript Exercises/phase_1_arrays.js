Array.prototype.uniq = function() {
    let result=[];
    for(let i=0; i <this.length; i++) {
        if (result.includes(this[i])) {
            continue;
        }
        else {
            result.push(this[i]);
        }
    }
    return result;
}

let unique_array = [1, 2, 2, 3, 3, 3].uniq();
// console.log(unique_array);


Array.prototype.twoSum = function() {
    let result = [];
    for(let i = 0; i < this.length; i++) {
        for(let j = 0; j < this.length; j++) {
            if ((this[i] + this[j] === 0) && (j > i)) {
                result.push([i,j]);
            }
        }
    }
    return result;
}

let test_array = [1, -2, 2, -3, 3, 5].twoSum();
// console.log(test_array)

Array.prototype.transpose = function() {
    let result=[];
    for(let r=0; r<this[0].length; r++) {
        let row=[];
        for(let c=0; c<this.length; c++) {
            row.push(this[c][r]);
        }
        result.push(row);
    }
    return result;
}

let squareArr = [[2,2],[4,4],[6,6]].transpose();
// console.log(squareArr);

Array.prototype.myEach = function(callback) {
    for(let i=0; i<this.length; i++) {
        callback(this[i]);
    }
}

doubler = function(num) {
    return num * 2;
}

let doubled = [1,2,3,4].myEach(doubler);
// console.log(doubled);

Array.prototype.myMap = function(callback) {
    let original = this;
    for(let i=0; i<this.length; i++) {
        this[i] = callback(original[i]);
    }
    
    return this;
}

let unmutated = [1,2,3,4].myMap(doubler);
// console.log(unmutated);

// Array.proptotype.myReduce = function(callback, function(total,amount) {
//     return total + amount;}


// {
//     this.myEach(callback);
// }

// function accumulate(acc, ele) {
//     acc = acc + ele;
//     return acc;
// }
// const arr = [1,2,3,4]
// let regular_reduce = arr.reduce(function(total,amount){
//     return total + amount;},10);
// console.log(regular_reduce);


function scheduleGreatMovieReminder(movie) {
    // remind in one min
    window.setTimeout(function () {
      console.log(`Remember to watch: ${movie}`);
    }, 60 * 1000);
    console.log(`Timer set for ${movie}`);
  }
  
  scheduleGreatMovieReminder("Citizen Kane");
  scheduleGreatMovieReminder("Touch of Evil");
  scheduleGreatMovieReminder("The Third Man");