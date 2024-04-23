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

// Breadth-First Traversal Tree
breadthFirstTree() {
        // initialize a queue with the root node
        let queue = [this.root]

        // while the queue is not empty
        while(queue.length >= 1) {
        // print and remove first node in queue
           let node = queue.shift()
           console.log(node.val)
        // if the node has a left node
           if (node.left) {
        // push the left node on the back of the queue
           queue.push(node.left)
           }
        // if the node has a right node
           if (node.right){
        // push the right node on the back of the queue
           queue.push(node.right)
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


// Breadth-First Traversal Graph
function breadthFirstTraversal(startingNode){
    let queue = [startingNode]
    let visited = new Set()

    while (queue.length){
        let node = queue.shift()
        console.log(node)

        adjList[node].forEach( neighbor => {
            if (!visited.has(neighbor)) {
                 visited.add(neighbor)
                 queue.push(neighbor)
            }
        })
    }
}


// breadth-First Search
function breadthFirstSearch(start,target){
    let queue = [start]
    let visited = new Set()

    while (queue.length){
        let node = queue.shift()


        if ( node === target) {
             return true
        }


        adjList[node].forEach( neighbor => {
            if (!visited.has(neighbor)){
                 visited.add(neighbor)
                 queue.push(neighbor)
            }
        })
    }
             return false
}

console.log( breadthFirstTraversal(3))
console.log(breadthFirstSearch(3,6))
