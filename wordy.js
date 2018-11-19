function WordProblem(question) {
  this.question = question;
  this.findNumbers = () => {
    let numberArray = this.question.match(/-?\d+/g)
    if(numberArray == null) {
      return numberArray
    } else {
      return numberArray.map(n => parseInt(n));
    }
  }
  this.numbers = this.findNumbers();

  this.mathematize = () => {
    return this.question
      .replace("What is ", "")
      .replace("?", "")
      .replace(/plus/g, "+")
      .replace(/minus/g, "-")
      .replace(/multiplied by/g, "*")
      .replace(/divided by/g, "/");
  }

  this.answer = () => {
    if(this.numbers == null || this.numbers.length == 1) {
      throw new ArgumentError();
    }
    return eval(this.mathematize());
  }

  // In answer, check the result of mathematize - if more than 2 integers in the string
  // split after the 2nd number, eval the first array, join result with second array,
  // eval for final result
}

function ArgumentError() {}
ArgumentError.prototype = Error.prototype;

export { WordProblem, ArgumentError }
