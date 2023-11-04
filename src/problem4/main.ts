const __ExceptionHandler__ = (n: number) => {
    if (n < 1) {
        throw new Error("Invalid Input: Number cannot be lesser than 1!");
    }
}

/**
 ** @TimeComplexity O(N)
 ** @SpaceComplexity O(1)
 **/
export const sum_to_n_a = (n: number): number => {
    __ExceptionHandler__(n);
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

/**
 ** @TimeComplexity O(N)
 ** @SpaceComplexity O(N) - Since it takes N slot as integers placeholder required.
 **/
export const sum_to_n_b = (n: number): number => {
    __ExceptionHandler__(n);
    return Array.from({length: n}).reduce((total: number, _, idx) => total + idx + 1, 0) as number;
}

/**
 ** @strategy Following singular median-point pattern. Since it's the `Arithmetic Mean` of the numeric chain.
 ** @TimeComplexity O(1)
 ** @SpaceComplexity O(1)
 **/
export const sum_to_n_c = (n: number): number => {
    __ExceptionHandler__(n);
    // N-evens
    if (n % 2 === 0) {
        return (n / 2) * (n + 1); // Derived from: (n / 2 + 0.5) * n
    }
    // N-odds
    return ((n + 1) / 2) * n;
}

const __INPUT__ = 15;
const __OUTPUT__ = sum_to_n_a(__INPUT__); // Consider the testcase of Problem-A provides the standard output/result.

// Testing
console.log("Test_A:", sum_to_n_a(5) === 15);
console.log("Test_B:", sum_to_n_b(__INPUT__) === __OUTPUT__);
console.log("Test_C:", sum_to_n_c(__INPUT__) === __OUTPUT__);
console.log("RESULT:", __OUTPUT__);
