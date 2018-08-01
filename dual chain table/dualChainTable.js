class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DualChainTable {
    constructor () {
        this.head = new Node('head');
    }

    insert (newElement, element) {
        let newNode = new Node(newElement);
        let currentNode = this.find(element);
        newNode.next = currentNode.next;
        newNode.previous = currentNode;
        currentNode.next = newNode;
    }

    find (element) {
        let currentNode = this.head;
        while (currentNode != element) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    remove (element) {
        let current  = this.find(element);
        current.previous.next = current.next;
        if (current.next) {
            current.next.previous = current.previous;
        }
        current.next = null;
        current.previous = null;
        current = null;
    }

    findLast () {
        let current = this.head;
        while (current.next != null) {
            current = current.next;
        }
        return current;
    }

    displayReverse () {
        let current = this.findLast();
        while (current.previous != null) {
            console.log(current.element);
            current = current.previous;
        }
    }

}