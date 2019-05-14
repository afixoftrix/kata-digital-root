function digital_root(n) {
    if (n >= 10) {
        while ( n >= 10 ){
            n = n
                .toString()
                .split("")
                .map(number => parseInt(number))
                .reduce((number, sum) => number + sum);
        }
        return n
    } else {
        return n;
    }
}
module.exports = digital_root;
