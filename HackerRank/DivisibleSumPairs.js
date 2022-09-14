function divisibleSumPairs(n, k, ar) {
    
    let result = 0
    let i = 0
    let j = 1
    const proceed = () => {
        if(j > ar.length-1){
            i++
            j = i + 1
        } else {
            j++
        }
    }

    while(i < j) {

        if(i == ar.length-1) {
            return result
        }

        if((ar[i] + ar[j]) % k == 0) {
            result++
            proceed()
        } else {
            proceed()
        }

    }

}


divisibleSumPairs(1, 3, [1, 3, 2, 6, 1, 2])