function WordProblem(question) {
  this.question = question;

  this.answer = () => {
    return 2;
  }
}

function ArgumentError() {

}

export { WordProblem, ArgumentError }
