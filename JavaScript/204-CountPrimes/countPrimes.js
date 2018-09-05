/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n) => {
    let count = 0;

    for (let i = 1; i < n; i++) {
        if (isPrimes(i)) {
          count++;  
        }
    }
    
    return count;
};

const isPrimes = (n) => {
    if (n === 1) {
        return false;
    }

    if (n === 2 || n === 3) {
       return true; 
    }

    if (n % 2 === 0) {
        return false;
    }

    const sqrt = Math.round(Math.sqrt(n));

    for (let i = 3; i <= sqrt; i+=2) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}