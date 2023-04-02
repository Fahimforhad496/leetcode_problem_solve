// Create a new Node instance

class Node {
    value; // optional
    next; // optional
    constructor(data, next = null) {
        this.value = data;
        this.next = next;
    }
}

class LinkedList {
    // Create a new LinkedList instance
    constructor(data) {
        let node = new Node(data);
        this.head = node;
        this.tail = node;
        this.length = 1;
    }

    // Add a node to the end of the list
    append(value) {
        let node = new Node(value);
        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    // Add a node in the beginning of the list
    prepend(value) {
        let node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    // Add a node at a given position
    appendAt(value, position) {
        let node = new Node(value);
        let prevNode = this.findNodeByPosition(position - 1); // Find the previous node of the given position
        let tempReference = prevNode.next; // Creating a reference of the node of the given position
        prevNode.next = node;
        node.next = tempReference;
        this.length++;
    }

    // Find the node at the given position
    findNodeByPosition(position) {
        let data = this.head;
        let counter = 1;
        if (position > this.length) {
            return "Node doesn't exist!!";
        }

        while (counter < position) {
            counter++;
            data = data.next;
        }
        // console.log(data);
        return data;
    }

    // Find the node by it's value
    findNodeByValue(value) {
        let data = this.head;
        let counter = 1;

        while (data) {
            counter++;
            console.log(data);
            if (data.value === value) {
                return data;
            }
            data = data.next;
        }
    }

    // Update value of a node at a given position
    updateNode(value, position) {
        this.findNodeByPosition(position).value = value;
    }

    // Delete a node at a given position
    deleteNode(position) {
        if (position > this.length || position < 1) {
            return "Node does not exist!";
        }
        if (position === 1) {
            let node = this.findNodeByPosition(position);
            this.head = node.next;
            node.next = null;
        } else {
            let previousNode = this.findNodeByPosition(position - 1);
            previousNode.next = previousNode.next.next;
        }
        this.length--;
    }

    // Check values of the list
    loopThroughList() {
        let data = this.head;
        let counter = 1;
        let array = [];

        while (data) {
            counter++;
            console.log(data);
            array.push(data.value);
            data = data.next;
        }
        return array;
    }
}

// Example
let list = new LinkedList(15);

list.append(21);
// list.append(23);
list.append(26);
list.append(29);
list.prepend(12);
list.append(35);
list.append(51);
list.appendAt(14, 2);
console.log(list.loopThroughList());
console.log(list.findNodeByPosition(7));
list.deleteNode(3);
// list.updateNode(7, 1);

// console.log(list);
// console.log(list.findNode(1));

console.log(list.loopThroughList());
