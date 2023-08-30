const linkedList = new LinkedList();

linkedList.append("head");
linkedList.append("node 1");
linkedList.append("node 2");
linkedList.append("node 3");
console.log(linkedList.toString()); //( head ) -> ( node 1 ) -> ( node 2 ) -> ( node 3 ) -> null

linkedList.prepend("new head");
console.log(linkedList.toString()); //( new head ) -> ( head ) -> ( node 1 ) -> ( node 2 ) -> ( node 3 ) -> null

console.log(linkedList.size, linkedList.head, linkedList.tail); //5 Node {value: 'new head', nextNode: Node, parentNode: null, setNext: ƒ} Node {value: 'node 3', nextNode: null, parentNode: Node, setNext: ƒ}

console.log(linkedList.at(2)); //Node {value: 'node 1', nextNode: Node, parentNode: Node, setNext: ƒ}

linkedList.pop();
console.log(linkedList.toString()); //( new head ) -> ( head ) -> ( node 1 ) -> ( node 2 ) -> null

console.log(linkedList.contains("node 1"), linkedList.contains("qweasdwqe")); //true false

console.log(linkedList.find("node 1"), linkedList.find("qweasdqwesad")); //2 -1

linkedList.insertAt("inserted to index 2", 2);
console.log(linkedList.toString()); //( new head ) -> ( head ) -> ( inserted to index 2 ) -> ( node 1 ) -> ( node 2 )

linkedList.removeAt(3);
console.log(linkedList.toString()); //( new head ) -> ( head ) -> ( inserted to index 2 ) -> ( node 2 )
