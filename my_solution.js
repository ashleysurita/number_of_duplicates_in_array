function numDuplicates(array) {
    if(!array || !array.length) return 0
    
    const counts = {}
    for(let i = 0; i < array.length; i++){
        if( counts[array[i]] ){
            counts[array[i]]++
        } else {
            counts[array[i]] = 1
        }
    }
    
    const duplicates = []
    Object.keys(counts).forEach(key => counts[key] > 1 ? duplicates.push(key) : null)
    
    return duplicates.length
}

// Test Cases
console.log(numDuplicates([])) // 0
console.log(numDuplicates([3, 1, 1, 2, 3, 1, 1, 1, 4])) // 2
console.log(numDuplicates([1])) // 0
