module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  // Returns content processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  this.letters = function letters() {
    return this.content.replace(/[^a-zA-Z]/g, '');
  }

  // Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    let content = this.processedContent();
    if (content == "") {
      return false;
    }
    return content === content.reverse();
  }
}

//let greeting = new Phrase("MadamImAdam");
//console.log(greeting.content);
//console.log(greeting.palindrome());
