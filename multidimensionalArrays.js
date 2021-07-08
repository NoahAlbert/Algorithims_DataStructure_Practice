const arr = [[3, 5, 6, 8, 2],['luiz', 'noah', 'michelle']]

function getFirstFirst(){
    return arr[0][0]
}

function getLastLast(){
    return arr[arr.length-1][arr[arr.length-1].length-1]
}

function getElementFromIndexs (index1, index2){
    return arr[index1][index2]
}

function getIndexFromElement (element){
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr[i].length; j++){
            if(arr[i][j] === element){
                return `${i},${j}`
            }
        }
    }
}

console.log(getFirstFirst())
console.log(getLastLast())
console.log(getElementFromIndexs(1,0))
console.log(getIndexFromElement('noah'))

