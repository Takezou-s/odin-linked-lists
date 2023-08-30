class Node {
  value = null;
  nextNode = null;
  parentNode = null;

  constructor(value) {
    this.value = value;
  }

  setNext = (next) => {
    this.nextNode = next;
    if (next) next.parentNode = this;
  };
}
