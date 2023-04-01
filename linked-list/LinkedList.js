class Node {
    value;
    next;
    constructor(data, next = null) {
        this.value = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(data) {
        let node = new Node(data);
        this.head = node;
        this.tail = node;
        this.length = 1;
        console.log(node);
    }
    addNode(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }
}

let list = new LinkedList(15);
list.addNode(21);
list.addNode(23);
list.addNode(26);
list.addNode(29);
list.addNode(35);
list.addNode(51);
console.log(list);
