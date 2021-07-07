const arr = [3, 6, 7, 2, 10, 13]

function getFirst() {
    return arr[0]
}

function getLast() {
    return arr[arr.length-1]
}

function getParam(position) {
    return arr[position]
}

function getIndex(element){
    for(i = 0; i < arr.length; i++){
        if(arr[i] === element){
            return i
        }
    }
}

console.log(getFirst())
console.log(getLast())
console.log(getParam(3))
console.log(getIndex(10))