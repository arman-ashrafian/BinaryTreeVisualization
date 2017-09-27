// Binary Tree Visualization

var tree = new BinaryTree();
var add_button = $('#add_node');
var node_input = $('#node_val');

add_button.click(function() {
    var val = parseInt(node_input.val());
    tree.addValue(val);
});

$(document).keypress(function(e) {
    if(e.which == 13) {
        var val = parseInt(node_input.val());
        tree.addValue(val);
    }
})

function setup() {
    // Canvas setup
    var canvas = createCanvas($(document).width(), 800);
    canvas.parent('sketch');
    background(200, 200, 200);

    /*
    Store the following elements:
    109, 18, 44, 88, 12, 24, 49, 7, 35, 55, 18, 19, 13, 1001
    */
    tree.addValue(109);
    tree.addValue(18);
    tree.addValue(44);
    tree.addValue(88);
    tree.addValue(12);
    tree.addValue(24);
    tree.addValue(49);
    tree.addValue(7);
    tree.addValue(35);
    tree.addValue(55);
    tree.addValue(18);
    tree.addValue(19);
    tree.addValue(13);
    tree.addValue(1001);

    console.log("IN ORDER");
    tree.traverse_inOrder();
    console.log("PRE ORDER");
    tree.traverse_preOrder();
    console.log("POST ORDER");
    tree.traverse_postOrder();
    console.log("BREADTH FIRST");
    tree.traverse_breadthFirst();
}

function draw() {
    if(tree.root != null) {
        tree.displayTree();
    }
}
