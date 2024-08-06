module.exports = function reverse (n) {
    n = Math.abs(n).toString();
    return +(n.split('').reverse().join(''));
}
