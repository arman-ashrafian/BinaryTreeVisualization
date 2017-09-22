function setup() {
    // Canvas setup
    var canvas = createCanvas($(document).width(), 5000);
    canvas.parent('sketch');
    background(200, 200, 200);

    var tree = new BinaryTree();
    tree.addValue(11);
    tree.addValue(5);
    tree.addValue(4);
    tree.addValue(6);
    tree.addValue(3);
    tree.addValue(20);
    tree.addValue(25);
    tree.addValue(22);

    tree.traverse();
}

function draw() {
    var window_width = $(document).width();
    var screen_mid = Math.floor(window_width/2);

    var parent_y = 100;

    // // root
    // ellipse(screen_mid, parent_y, 50, 50);
    //
    // // left child
    // ellipse(screen_mid - 200, parent_y + 100, 50, 50);
    // // right child
    // ellipse(screen_mid + 200, parent_y + 100, 50, 50);
    //
    // line(screen_mid, parent_y, screen_mid - 200, parent_y + 100);
    // line(screen_mid, parent_y, screen_mid + 200, parent_y + 100);



}
