let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {

    it("should return false for empty string", function() {
      let p = new Phrase("");
      assert(!p.palindrome());
    });

    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function() {
      let p = new Phrase("MadamImAdam");
      assert(p.palindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let p = new Phrase("Madam, in Eden I'm Adam");
      assert(p.palindrome());
    });
  });

  describe("#letters", function() {
    it("should return only letters", function() {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual("MadamImAdam", punctuatedPalindrome.letters());

      punctuatedPalindrome = new Phrase("Madam, in Eden I'm Adam");
      assert.strictEqual("MadaminEdenImAdam", punctuatedPalindrome.letters());
    });
  });
});