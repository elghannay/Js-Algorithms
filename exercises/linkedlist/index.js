// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
}

// this is how to create a new linked list and associate 
// a node to it.

/* 
    const list = new LinkedList();
    list.head = new Node(15);
*/

class
    module.exports = { Node, LinkedList };
