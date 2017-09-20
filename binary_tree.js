var window_width = $(document).width();
var screen_mid = Math.floor(window_width/2);

function Node(val, parent, l_child, r_child, x, y) {
    this.val = val;
    this.parent_node = parent;
    this.left_child = l_child;
    this.right_child = r_child;
    this.x_pos = x;
    this.y_pos = y;
}

function BinaryTree() {
    this.root = null;

    this.addNode = function(val) {
        if(this.root === null) {
            this.root = new Node(val, null, null, null,
                                screen_mid,100)
        }
    }

}

var bt = new BinaryTree();
bt.addNode(5);
console.log(bt)
