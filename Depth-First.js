class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null
    }

// Depth-First Traversal Tree
DepthFirstTree() {
        // initialize a queue with the root node
        let stack = [this.root]

        // while the queue is not empty
        while(stack.length >= 1) {
        // print and remove first node in queue
           let node = stack.pop()
           console.log(node.val)
        // if the node has a left node
           if (node.left) {
        // push the left node on the back of the queue
           stack.push(node.left)
           }
        // if the node has a right node
           if (node.right){
        // push the right node on the back of the queue
           stack.push(node.right)
           }

        }
      }

}

  adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}


// Depth-First Traversal Graph
function depthFirstTraversal(startingNode){
    let stack = [startingNode]
    let visited = new Set()

    while (stack.length){
        let node = stack.pop()
        console.log(node)

        adjList[node].forEach( neighbor => {
            if (!visited.has(neighbor)) {
                 visited.add(neighbor)
                 stack.push(neighbor)
            }
        })
    }
}


// Depth-First Search
function depthFirstSearch(start,target){
    let stack = [start]
    let visited = new Set()

    while (stack.length){
        let node = stack.pop()

        if ( node === target) {
             return true
        }


        adjList[node].forEach( neighbor => {
            if (!visited.has(neighbor)){
                 visited.add(neighbor)
                 stack.push(neighbor)
            }
        })
    }
             return false
}

console.log(depthFirstTraversal(3))
console.log(depthFirstSearch(3,6))
