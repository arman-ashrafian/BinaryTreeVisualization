function setup() {
    var canvas = createCanvas($(document).width(), 5000);
    canvas.parent('sketch');

    background(200, 200, 200);
}

function draw() {
    var window_width = $(document).width();
    var screen_mid = Math.floor(window_width/2);

    var parent_y = 100;

    ellipse(screen_mid, parent_y, 50, 50);

    ellipse(screen_mid - 200, parent_y + 100, 50, 50);
    ellipse(screen_mid + 200, parent_y + 100, 50, 50);

    line(screen_mid, parent_y, screen_mid - 200, parent_y + 100);
    line(screen_mid, parent_y, screen_mid + 200, parent_y + 100);
}
