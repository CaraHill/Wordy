function WordProblem(question) {
  this.question = question;

  this.answer = () => {
    let result = this.question.match(/-?\d+/g).map(n => parseInt(n));

    if(question.includes("plus")) {
      return result.reduce((a, b) => a + b);
    }

    if(question.includes("minus")) {
      return result.reduce((a, b) => a - b);
    }

    if(question.includes("multiplied")) {
      return result.reduce((a, b) => a * b);
    }

    if(question.includes("divided")) {
      return result.reduce((a, b) => a / b);
    }
  }
}

function ArgumentError() {

}

export { WordProblem, ArgumentError }
