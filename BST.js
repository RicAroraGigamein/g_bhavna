// Key Concepts in BST Management:
// Predecessor Search: If a node has a left subtree, the predecessor is the maximum value in that left subtree. Otherwise, it is the lowest ancestor that has the node in its right subtree.
// Successor Search: If a node has a right subtree, the successor is the minimum value in that right subtree. Otherwise, it is the lowest ancestor that has the node in its left subtree.
// Descendants: For any node, all nodes in its left subtree have smaller keys, and all nodes in its right subtree have larger keys.


// ===== Node definition =====
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// ===== BST definition =====
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // ----- Insert (Iterative) -----
  insert(data) {
    const newNode = new Node(data);

    // Empty tree
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    let current = this.root;

    while (true) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } 
      else if (data > current.data) {
        if (current.right === null) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } 
      else {
        // Duplicate value (ignored)
        return;
      }
    }
  }
  // ----- Delete -----
  delete(data) {
    this.root = this._deleteNode(this.root, data);
  }

  _deleteNode(node, data) {
    if (node === null) return null;

    // Traverse tree
    if (data < node.data) {
      node.left = this._deleteNode(node.left, data);
    } 
    else if (data > node.data) {
      node.right = this._deleteNode(node.right, data);
    } 
    else {
      // Node found

      // Case 1: No child
      if (node.left === null && node.right === null) {
        return null;
      }

      // Case 2: One child
      if (node.left === null) return node.right;
      if (node.right === null) return node.left;

      // Case 3: Two children
      let successor = this._minValueNode(node.right);
      node.data = successor.data;
      node.right = this._deleteNode(node.right, successor.data);
    }

    return node;
  }

  search(key){
 if(this.root === null) return null
let current = this.root;
while(true){
if(this.root === key) return this.node;
else if(key< current){
    if(current.left === null) return null;
    else if(current.left === key) return current.left;
    else current = current.left;
}
else if(key > current){
    if(current.right === null) return null;
    if(current.right === key)return current.right;
    else current = current.right
}
}
    
}

  // ----- Find minimum value node -----
  _minValueNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }


  // ----- Inorder Traversal (for verification) -----
  inorder(node = this.root) {
    if (node === null) return;
    this.inorder(node.left);
    console.log(node.data);
    this.inorder(node.right);
  }
}

// ===== Example usage =====
const bst = new BinarySearchTree();

bst.insert(50);
bst.insert(30);
bst.insert(70);
bst.insert(20);
bst.insert(40);
bst.insert(60);
bst.insert(80);

console.log("Inorder Traversal (Sorted Order):");
bst.inorder();
