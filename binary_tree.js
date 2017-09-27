var window_width = $(document).width();
var screen_mid = Math.floor(window_width/2);
var NODE_RADIUS = 40;
var FONT_SIZE = 14;


function Node(val, l_child, r_child, x, y) {
    this.val = val;
    this.left_child = l_child;
    this.right_child = r_child;
    this.x = x;
    this.y = y;

    // Recursively add Node children
    this.addNode = function(val, level) {
        level += level + 1;
        if(val < this.val) {
            if(this.left_child == null) {
                this.left_child = new Node(val, null, null, this.x - (400/level), this.y + 100);
                line(this.x, this.y, this.x - (400/level), this.y + 100)
            } else {
                this.left_child.addNode(val, level);
            }
        } else {
            if(this.right_child == null) {
                this.right_child = new Node(val, null, null, this.x + (400/level), this.y + 100);
                line(this.x, this.y, this.x + (400/level), this.y + 100)
            } else {
                this.right_child.addNode(val, level);
            }
        }
    }

    // Draw Nodes on Canvas
    this.displayNodes = function() {
        if(this.left_child != null) {
            this.left_child.displayNodes();
        }

        // Draw Node
        fill(0);
        ellipse(this.x + 12, this.y - 8, NODE_RADIUS,NODE_RADIUS);
        fill(255);
        textSize(FONT_SIZE);
        text(this.val.toString(), this.x, this.y);

        if(this.right_child != null) {
            this.right_child.displayNodes();
        }
    }

    this.traverse_inOrder = function() {
        if(this.left_child != null) {
            this.left_child.traverse_inOrder();
        }

        // add value to html <ul>
        $("#InOrder").append("<li>" + this.val.toString() + "</li>");

        if(this.right_child != null) {
            this.right_child.traverse_inOrder();
        }
    }

    this.traverse_preOrder = function() {
        // add value to html <ul>
        $("#PreOrder").append("<li>" + this.val.toString() + "</li>");

        if(this.left_child != null) {
            this.left_child.traverse_preOrder();
        }
        if(this.right_child != null) {
            this.right_child.traverse_preOrder();
        }
    }

    this.traverse_postOrder = function() {
        if(this.left_child != null) {
            this.left_child.traverse_postOrder();
        }
        if(this.right_child != null) {
            this.right_child.traverse_postOrder();
        }
        // add value to html <ul>
        $("#PostOrder").append("<li>" + this.val.toString() + "</li>");

    }
}

function BinaryTree() {
    this.root = null;

    this.addValue = function(val) {
        if(this.root === null) {
            this.root = new Node(val, null, null, screen_mid,100);
            fill(0);
            ellipse(screen_mid + 12, 90, NODE_RADIUS, NODE_RADIUS);
            textSize(FONT_SIZE);
            text(val.toString(), screen_mid, 100);
        } else {
            this.root.addNode(val, 0);
        }
    }

    this.displayTree = function() {
        this.root.displayNodes();
    }

    this.traverse_inOrder = function() {
        this.root.traverse_inOrder();
    }

    this.traverse_preOrder = function() {
        this.root.traverse_preOrder();
    }

    this.traverse_postOrder = function() {
        this.root.traverse_postOrder();
    }

    this.traverse_breadthFirst = function() {
        if(this.root == null) { return undefined; }

        let queue = new Queue();
        let traverse = 0;

        queue.enqueue(this.root);
        // add value to html <ul>
        $("#BFT").append("<li>" + this.root.val.toString() + "</li>");

        while(!queue.isEmpty()) {
            traverse = queue.dequeue();

            if(traverse.left_child != null) {
                queue.enqueue(traverse.left_child);
                // add value to html <ul>
                $("#BFT").append("<li>" + traverse.left_child.val.toString() + "</li>");
            }
            if(traverse.right_child != null) {
                queue.enqueue(traverse.right_child);
                // add value to html <ul>
                $("#BFT").append("<li>" + traverse.right_child.val.toString() + "</li>");
            }
        }

    }

}
