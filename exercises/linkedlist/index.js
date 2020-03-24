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
    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }
    getFirst() {
        return this.head;
    }
    getLast() {
        if (!this.head)
            return null;
        let node = this.head;
        while (node) {
            if (!node.next)
                return node;
            node = node.next;
        }
    }
    clear() {
        this.head = null;
    }
    removeFirst() {
        if (!this.head)
            return null;
        this.head = this.head.next;
    }
    removeLast() {
        if (!this.head)
            return null;
        if (!this.head.next)
            return this.head = null;

        let previous = this.head;
        let node = this.head.next;

        while (node.next) {
            previous = node;
            node = node.next;
        }
        previous.next = null;
    }
    insertLast(data) {
        if (!this.head)
            this.head = new Node(data);
        let last = this.getLast();
        last.next = new Node(data);
    }
    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    removeAt(index) {
        let previous = this.getAt(index - 1);
        if (!this.head)
            return;
        if (index === 0)
            return this.head = this.head.next;
        if (!previous || !previous.next)
            return;
        previous.next = previous.next.next;
    }
    insertAt(data, index) {
        const previous = this.getAt(index - 1) || this.getLast();
        if (!this.head)
            return this.head = new Node(data);

        if (index === 0)
            return this.head = new Node(data, this.head);

        if (previous) {
            const node = new Node(data, previous.next);
            previous.next = node;
        }
    }
}
 

module.exports = { Node, LinkedList };
