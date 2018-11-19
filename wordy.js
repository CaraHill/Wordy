function WordProblem(question) {
  this.question = question;
  this.findNumbers = () => {
    let numberArray = this.question.match(/-?\d+/g)
    if(numberArray === null) {
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
    if(this.numbers === null || this.numbers.length === 1) {
      throw new ArgumentError();
    }

    if(question.includes("plus") && question.includes("multiplied") && this.orderOfWords("plus", "multiplied")) {
      return (this.numbers[0] + this.numbers[1]) * this.numbers[2];
    }

    return eval(this.mathematize());
  }

  this.orderOfWords = (firstWord, secondWord) => {
    let questionArray = this.question.split(" ");
    return questionArray.indexOf(firstWord) < questionArray.indexOf(secondWord);
  }
}

function ArgumentError() {}
ArgumentError.prototype = Error.prototype;

export { WordProblem, ArgumentError }
