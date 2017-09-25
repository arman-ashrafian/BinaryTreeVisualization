// Binary Tree Visualization

var tree = new BinaryTree();
var add_button = $('#add_node');
var node_input = $('#node_val');

add_button.click(function() {
    var val = parseInt(node_input.val())
    tree.addValue(val);
});

function setup() {
    // Canvas setup
    var canvas = createCanvas($(document).width(), 5000);
    canvas.parent('sketch');
    background(200, 200, 200);

}

function draw() {
    if(tree.root != null) {
        tree.traverse();
    }
}
