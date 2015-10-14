"use strict";

module.exports = {
    invert: function (str) {
        var result = "";
        for (let i = str.length; i >= 0; i--) {
            result += str.charAt(i);
        }
        return result;
    },
    camelCase: function (str) {
        var result = "";
        var preChar = undefined;
        result += str[0].toUpperCase();
        for (let i = 1; i <= str.length; i++) {
            var currentChar = str.charAt(i);
            if (preChar == ' ') {
                result += currentChar.toUpperCase();
            } else {
                result += currentChar;
            }
            preChar = currentChar;
        }
        return result;
    },
    longestWord: function (str) {
        var arr = str.split(' ');
        let longest = '';
        arr.forEach(function(t) {
            if (t.length > longest.length) longest = t;
        });
        return longest;
    }
};