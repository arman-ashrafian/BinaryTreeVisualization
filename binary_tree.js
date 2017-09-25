var window_width = $(document).width();
var screen_mid = Math.floor(window_width/2);

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

    this.visit = function() {
        if(this.left_child != null) {
            this.left_child.visit();
        }

        // Draw Node
        fill(0);
        ellipse(this.x + 12, this.y - 10, 50,50);
        fill(255);
        textSize(24);
        text(this.val.toString(), this.x, this.y);

        if(this.right_child != null) {
            this.right_child.visit();
        }
    }
}

function BinaryTree() {
    this.root = null;

    this.addValue = function(val) {
        if(this.root === null) {
            this.root = new Node(val, null, null, screen_mid,100);
            fill(0);
            ellipse(screen_mid + 12, 90, 50, 50);
            textSize(24);
            text(val.toString(), screen_mid, 100);
        } else {
            this.root.addNode(val, 0);
        }
    }

    this.traverse = function() {
        this.root.visit();
    }

}
