function recurFib (n) {
    if (n < 2) {
        return n;
    }

    return recurFib(n-2) + recurFib(n - 1);
}

function dynFib (n) {
    if (n === 0) {
        return 0;
    }

    let last = 1;
    let nextLast = 1;
    let result = 1;
    for (let i = 2; i < n; i++) {
        result = last + nextLast;
        nextLast = last;
        last = result;
    }
    return result;
}
