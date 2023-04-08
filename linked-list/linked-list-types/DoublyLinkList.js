class Node {
    value;
    next;
    previous;
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

class DoublyLinkList {
    constructor(value) {
        let node = new Node(value);
        this.head = node;
        this.tail = node;
        this.length = 1;
    }
    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        node.previous = this.tail;
        this.tail = node;
        this.length++;
    }
    prepend(value) {
        let node = new Node(value);
        this.head.previous = node;
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    loopThroughList() {
        let data = this.head;
        let counter = 1;
        let array = [];

        while (data) {
            counter++;
            // console.log(data);
            array.push(data.value);
            data = data.next;
        }

        return {
            values: array,
            info: { head: this.head, tail: this.tail, length: this.length },
        };
    }
}

let DLL1 = new DoublyLinkList(1);
DLL1.append(3);
DLL1.prepend(-1);

console.log(DLL1.loopThroughList());
