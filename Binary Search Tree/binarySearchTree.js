class Node {
    constructor (data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }

    show () {
        return this.data;
    }
}

class BST {
    constructor () {
        this.root = null;
    }

    insert (data) {
        let node = new Node(data, null, null);
        if (this.root === null) {
            this.root = node;
            return;
        }

        let current = this.root;
        while (true) {
            let parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }

    preorderTraversal (node) {
        if (node !== null) {
            console.log(node.show());
            this.preorderTraversal(node.left);
            this.preorderTraversal(node.right);
        }
    }

    inorderTraversal (node) {
        if (node !== null) {
            this.inorderTraversal(node.left);
            console.log(node.show());
            this.inorderTraversal(node.right);
        }
    }

    postorderTraversal (node) {
        if (node !== null) {
            this.postorderTraversal(node.left);
            this.postorderTraversal(node.right);
            console.log(node.show());
        }
    }

    getMin (node) {
        let current = node || this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }

    getMax (node) {
        let current = node || this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }

    find (data) {
        let current = this.root;
        while (current !== null) {
            if (current.data === data) {
                return current;
            }

            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    remove (data) {
        return this.removeNode(this.root, data);
    }

    removeNode (node, data) {
        if (data === null) {
            return null;
        }

        // TODO: Simplify and demo follow code.
        if (data === node.data) {
            if (node.left === null && node.right === null) {
                return null;
            }

            if (node.left === null) {
                return node.right;
            }

            if (node.right === null) {
                return node.left;
            }

            let tempNode = this.getMin(node.right);
            node.data = tempNode.data;
            node.right = this.removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node
        } else  {
            node.right = this.removeNode(node.right, data);
            return node
        }
    }
}