class LinkedList {
  head = null;
  tail = null;
  size = 0;

  /**
   * Creates new node with given value and adds the node to the end of the list.
   * @param {any} value value
   */
  append = (value) => {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else if (this.size === 1) {
      this.head.setNext(node);
      this.tail = node;
      this.size++;
    } else {
      this.tail.setNext(node);
      this.tail = node;
      this.size++;
    }
  };

  /**
   * Creates new node with given value and adds the node to the start of the list.
   * @param {any} value value
   */
  prepend = (value) => {
    const node = new Node(value);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;
    } else {
      node.setNext(this.head);
      this.head = node;
      this.size++;
    }
  };

  /**
   * Returns node at the index.
   * @param {number} index Node index.
   * @returns Node at the index.
   */
  at = (index) => {
    if (index < 0 || index >= this.size) {
      return null;
    }

    let counter = 0;
    let result = this.head;
    while (counter < index) {
      result = result.nextNode;
      counter++;
    }
    return result;
  };

  /**
   * Removes last node from the list.
   * @returns 
   */
  pop = () => {
    if (!this.tail) return;

    this.tail = this.tail.parentNode;
    this.tail.setNext(null);
    this.size--;
  };

  /**
   * Returns the index of the node with the specified value or -1.
   * @param {any} value Node value to check
   * @returns 
   */
  find = (value) => {
    let result = -1;

    if (this.size <= 0) return result;

    let activeNode = this.head;
    for (let i = 0; i < this.size; i++) {
      if (activeNode.value === value) {
        result = i;
        break;
      }

      activeNode = activeNode.nextNode;
    }
    return result;
  };

  /**
   * Checks if list has a node with specified value.
   * @param {any} value Node value to check
   * @returns 
   */
  contains = (value) => {
    return this.find(value) >= 0;
  };

  /**
   * Stringifies linked list.
   * @returns 
   */
  toString = () => {
    let result = "";
    if (this.size <= 0) return result;

    let activeNode = this.head;
    for (let i = 0; i < this.size; i++) {
      result += this._stringifyNode(activeNode) + " -> ";
      activeNode = activeNode.nextNode;

      if (i === this.size - 1) {
        result += this._stringifyNode(activeNode);
      }
    }
    return result;
  };

  /**
   * Creates a new nod with specified value and inserts it to the specified index.
   * @param {any} value value
   * @param {number} index index
   * @returns 
   */
  insertAt = (value, index) => {
    if (index < 0 || index >= this.size) return;
    if (index === 0) {
      this.prepend(value);
      return;
    } else if (index === this.size - 1) {
      this.append(value);
      return;
    }
    const node = this.at(index);
    if (node) {
      const newNode = new Node(value);
      node.parentNode.setNext(newNode);
      newNode.setNext(node);
    }
  };

  /**
   * Removes node at the index.
   * @param {number} index 
   * @returns 
   */
  removeAt = (index) => {
    const node = this.at(index);
    if (!node) return;

    if (!node.parentNode) {
      this.head = node.nextNode;
      this.head.parentNode = null;
      this.size--;
    } else if (!node.nextNode) {
      node.parentNode.setNext(null);
      this.size--;
    } else {
      node.parentNode.setNext(node.nextNode);
      this.size--;
    }
  };

  _stringifyNode = (node) => {
    if (!node) return null;

    return `( ${node.value} )`;
  };
}
