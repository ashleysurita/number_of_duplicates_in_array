function numDuplicates(array) {
    if(!array || !array.length) return 0
    
    const map = {}
    let count = 0
    array.forEach(num => {
        if(map[num]){
            map[num]++
            if(map[num] === 2) count++
        }
        else map[num] = 1
    })
    return count
}

// Test Cases
console.log(numDuplicates([])) // 0
console.log(numDuplicates([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
console.log(numDuplicates([1])) // 0
