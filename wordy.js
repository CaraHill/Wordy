function WordProblem(question) {
  this.question = question;
  this.numbers = this.question.match(/-?\d+/g).map(n => parseInt(n));
  this.operators = {
    "plus": '+',
    "minus": '-',
    "multiplied by": "*",
    "divided by": "/",
  };
  // this.questionArray = this.question.split(" ");

  this.answer = () => {
    if(question.includes("plus") && question.includes("minus") && this.orderOfWords("plus", "minus")) {
      return (this.numbers[0] + this.numbers[1]) - this.numbers[2];
    }

    if(question.includes("minus") && question.includes("plus") && this.orderOfWords("minus", "plus")) {
      return (this.numbers[0] - this.numbers[1]) + this.numbers[2];
    }

    if(question.includes("plus")) {
      return this.numbers.reduce((a, b) => a + b);
    }

    if(question.includes("minus")) {
      return this.numbers.reduce((a, b) => a - b);
    }

    if(question.includes("multiplied")) {
      return this.numbers.reduce((a, b) => a * b);
    }

    if(question.includes("divided")) {
      return this.numbers.reduce((a, b) => a / b);
    }
  }

  this.orderOfWords = (firstWord, secondWord) => {
    let questionArray = this.question.split(" ");
    return questionArray.indexOf(firstWord) < questionArray.indexOf(secondWord);
  }
}

function ArgumentError() {

}

export { WordProblem, ArgumentError }
