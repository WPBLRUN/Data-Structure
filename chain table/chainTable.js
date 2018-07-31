class Node {
    constructor (element) {
        this.element = element;
        this.next = null;
    }
}

class ChainTable {
    constructor () {
        this.head = new Node('head');
    }

    find (element) {
        let currentNode = this.head;
        while (currentNode.element && currentNode.element != element) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    insert (newElement, element) {
        let newElement = new Node(newElement);
        let current = this.find(element);
        newElement.next = current.next;
        current.next = newElement;
    }

    remove (element) {
        let previous = this.findPrevious(element);
        if (previous.next != null) {
            previous.next  = previous.next.next;
        }
    }

    display () {
        let currentNode = this,head;
        while (currentNode.next !== null) {
            console.log(currentNode.next.element);
            currentNode = currentNode.next;
        }
    }

    findPrevious (element) {
        let current = this.head;
        while (current.next !== null && current.next.element != element) {
            current = current.next;
        }
        return current;
    }
}


