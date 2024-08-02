//your parameter variables go here!
let rect_width = 200;
let rect_height = 200;
let middle = rect_width === rect_height ? rect_width / 2 : 0;

const Colours = {
    ONE: "#FF99C8",
    TWO: "#FCF6BD",
    THREE: "#D0F4DE",
    FOUR: "#A9DEF9",
    FIVE: "#E4C1F9"
};

const Colours_RGBA = {
    ONE: "rgba(255, 153, 200, ",
    TWO: "rgba(252, 246, 189, ",
    THREE: "rgba(208, 244, 222, ",
    FOUR: "rgba(169, 222, 249, ",
    FIVE: "rgba(228, 193, 249, "
};

/*
    For use with Colours_RGBA
 */
function getColour(colour, opacity) {
    return colour + opacity + ")"
}

function setup_wallpaper(pWallpaper) {
    // pWallpaper.output_mode(DEVELOP_GLYPH);
    pWallpaper.output_mode(GRID_WALLPAPER);
    pWallpaper.resolution(FIT_TO_SCREEN);
    pWallpaper.show_guide(true); //set this to false when you're ready to print

    //Grid settings
    pWallpaper.grid_settings.cell_width = rect_width;
    pWallpaper.grid_settings.cell_height = rect_height;
    pWallpaper.grid_settings.row_offset = 0;

    rectMode(CENTER); // Rotate squares and circles around their center
}

function wallpaper_background() {
    background("white");
}

/* inspiration: https://editor.p5js.org/yuletide/sketches/sSCcQ27F8 */
function my_symbol() {
    drawShapes();
}

function drawShapes() {
    /* VARIABLES */
    const ThinWhiteStarPoints = 0;
    const directionalLines = 20;
    const directionalLinesDashed = false;
    /* END VARIABLES */

    strokeWeight(0)

    push()
    strokeWeight(directionalLines)
    stroke(getColour(Colours_RGBA.ONE, 0.75))
    if(directionalLinesDashed){
        drawingContext.setLineDash([5, 5]);
    }
    line(0, 0, rect_width, rect_height)
    // line(rect_width, 0, 0, rect_height)
    // line(rect_width/2, 0, rect_width/2, rect_height)
    // line(0, rect_height/2, rect_width, rect_height/2)
    pop()

    push()
    fill(Colours.FOUR)
    drawStar(0, 0, 50, 40, 8)
    pop()

    push()
    drawStar(0, 0, 25, 10, 4)
    pop()

    // VERTICAL LINE
    // push()
    // fill(getColour(Colours_RGBA.FIVE, 1))
    // ellipse(0, 75, 10, 20)
    // ellipse(0, 100, 10, 10)
    // ellipse(0, 125, 10, 20)
    // pop()
    //
    // // HORIZONTAL LINE
    // push()
    // fill(getColour(Colours_RGBA.FIVE, 1))
    // ellipse(75, 0, 10, 10)
    // ellipse(100, 0, 20, 10)
    // ellipse(125, 0, 10, 10)
    // pop()

    // Background 45deg square
    push()
    fill(Colours.THREE)
    translate(middle, middle)
    rotate(-45)
    square(0, 0, 125)
    pop()

    // Large background star
    push()
    fill(Colours.TWO)
    drawStar(middle, middle, 75, 70, 12)
    pop()

    // Four corner stars
    push()
    fill(Colours.ONE)
    stroke("rgba(255, 255, 255, 0.75)")
    strokeWeight(5)
    const smallStarInner = 8;
    // drawStar(50, 50, 25, smallStarInner, PurpleQuadStarPoints)
    // drawStar(150, 50, 25, smallStarInner, PurpleQuadStarPoints*2)
    // drawStar(50, 150, 25, smallStarInner, PurpleQuadStarPoints*2)
    // drawStar(150, 150, 25, smallStarInner, PurpleQuadStarPoints)
    pop()

    // Circle behind thin white star
    push()
    fill(getColour(Colours_RGBA.FOUR, 0.75))
    circle(middle, middle, 35)
    fill(getColour(Colours_RGBA.FOUR, 0.5))
    circle(middle, middle, 80)
    fill(getColour(Colours_RGBA.FOUR, 0.25))
    circle(middle, middle, 120)
    pop()

    // Thin white star
    push()
    fill("rgba(0,0,0, 0.5)")
    drawStar(middle, middle, 75, 10, ThinWhiteStarPoints)
    pop()



}

function drawStar(x, y, outerRadius, innerRadius, points) {
    const angleStep = (Math.PI * 2) / points;

    beginShape();

    for (let i = 0; i < points; i++) {
        // Calculate the angles for outer and inner points
        const outerAngle = i * angleStep;
        const innerAngle = outerAngle + angleStep / 2;

        // Draw the outer vertex
        const outerX = x + Math.cos(outerAngle) * outerRadius;
        const outerY = y + Math.sin(outerAngle) * outerRadius;
        vertex(outerX, outerY);

        // Draw the inner vertex
        const innerX = x + Math.cos(innerAngle) * innerRadius;
        const innerY = y + Math.sin(innerAngle) * innerRadius;
        vertex(innerX, innerY);
    }

    endShape(CLOSE);
}

function rand(min, max) {
    return int(random(min, max));
}