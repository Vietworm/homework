"use strict";

let chai = require('chai');
let expect = chai.expect;
let SupperString = require('../SupperString');

describe("Test supperString", function() {
    describe("invert() function", function() {
        it('invert("le phu hai") expect return "iah uhp el"', function() {
            expect(SupperString.invert("le phu hai")).to.equal("iah uhp el");
        })
    });
    describe("camelCase() function", function() {
        it('camelCase("le phu  hai") expect return "Le Phu  Hai"', function() {
            expect(SupperString.camelCase("le phu  hai")).to.equal("Le Phu  Hai");
        })
    });
    describe("longestWord() function", function() {
        it('longestWord("full stack developer" expect return "developer")', function() {
            expect(SupperString.longestWord("full stack developer")).to.equal("developer");
        })
    })
});