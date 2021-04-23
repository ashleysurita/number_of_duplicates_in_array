def numDuplicates(array: [int]) -> int:
    if not array or not len(array):
        return 0
    
    count = {}
    for num in array:
        if num in count.keys():
            count[num]+=1
        else:
            count[num] = 1
    
    duplicates = []
    for key, val in count.items():
        if val > 1:
            duplicates.append(key)
    
    return len(duplicates)

# Test Cases
print(numDuplicates([])) # 0
print(numDuplicates([3, 1, 1, 2, 3, 1, 1, 1, 4])) # 2
print(numDuplicates([1])) # 0
