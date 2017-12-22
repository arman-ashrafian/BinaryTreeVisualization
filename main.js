// Binary Tree Visualization

var tree = new BinaryTree();
var add_button = $('#add_node');
var node_input = $('#node_val');


function addValToTree() {
    var val = parseInt(node_input.val());
    if(val != NaN) {
        tree.addValue(val);
    }

    tree.traverse_inOrder();
    tree.traverse_preOrder();
    tree.traverse_postOrder();
    tree.traverse_breadthFirst();
}


add_button.click(addValToTree);

$(document).keypress(function(e) {
    if(e.which == 13) {
        addValToTree();
    }
})

function setup() {
    // Canvas setup
    var canvas = createCanvas($(document).width(), 800);
    canvas.parent('sketch');
    background(200, 200, 200);
}

function draw() {
    if(tree.root != null) {
        tree.displayTree();
    }
}
