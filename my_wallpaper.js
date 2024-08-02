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
    pWallpaper.resolution(NINE_PORTRAIT);
    pWallpaper.show_guide(false); //set this to false when you're ready to print

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
    const ThinWhiteStarPoints = 12;
    const directionalLinesStrokeWeight = 100;
    const directionalLinesDashed = false;
    const PurpleQuadStarPoints = 2;
    const linesAreRects = false;
    const greenSquareSize = 100;
    const blueCornerStarPoints = 8;
    const centerBackgroundSquareSize = 0; // set to 0 for cool effect
    const centerStarPoints = 12;
    const centerStarColour = Colours.THREE;
    const radiatingCircleDiameter = 75;
    const radiatingCircleOpacity = 1;
    /* END VARIABLES */

    strokeWeight(0)

    // Radiating transparent circle
    push()
    fill(getColour(Colours_RGBA.FOUR, radiatingCircleOpacity))
    circle(middle, middle, radiatingCircleDiameter)
    pop()

    // Directional lines
    push()
    strokeWeight(directionalLinesStrokeWeight)
    stroke(getColour(Colours_RGBA.ONE, 0.75))
    if(directionalLinesDashed){
        drawingContext.setLineDash([5, 5]);
    }
    line(0, 0, rect_width, rect_height)
    line(rect_width, 0, 0, rect_height)
    pop()

    push()
    fill(Colours.THREE)
    rotate(-45)
    square(0, 0, greenSquareSize)
    pop()

    // Blue corner star
    push()
    fill(Colours.FOUR)
    drawStar(0, 0, 50, 40, blueCornerStarPoints)
    pop()

    // white corner star
    push()
    drawStar(0, 0, 25, 10, blueCornerStarPoints/2)
    pop()

    // Background 45deg square
    push()
    fill(Colours.THREE)
    translate(middle, middle)
    rotate(-45)
    square(0, 0, centerBackgroundSquareSize)
    pop()

    // Large background star
    push()
    fill(centerStarColour)
    drawStar(middle, middle, 50, 20, centerStarPoints)
    pop()

    // VERTICAL LINE
    push()
    fill(getColour(Colours_RGBA.FIVE, 1))
    if(linesAreRects){
        rect(0, 100, 10, 10)
    }else{
        ellipse(0, 100, 10, 10)
    }
    pop()

    // HORIZONTAL LINE
    push()
    fill(getColour(Colours_RGBA.FIVE, 1))
    if(linesAreRects) {
        rect(100, 0, 10, 10)
    }else{
        ellipse(100, 0, 10, 10)
    }
    pop()

    // Four corner stars
    // push()
    // fill(Colours.ONE)
    // stroke("rgba(255, 255, 255, 0.75)")
    // strokeWeight(0)
    // const smallStarInner = 8;
    // // drawStar(middle, middle,25, smallStarInner, PurpleQuadStarPoints)
    // drawStar(50, 50, 25, smallStarInner, PurpleQuadStarPoints)
    // drawStar(150, 50, 25, smallStarInner, PurpleQuadStarPoints*2)
    // drawStar(50, 150, 25, smallStarInner, PurpleQuadStarPoints*2)
    // drawStar(150, 150, 25, smallStarInner, PurpleQuadStarPoints)
    // pop()

    // Thin white star
    // push()
    // fill(getColour(Colours_RGBA.TWO, 0.75))
    // // fill("rgba(255, 255, 255, 0.5)")
    // // fill("white")
    // drawStar(middle, middle, 75, 10, ThinWhiteStarPoints)
    // pop()

    // push()
    // drawStar(middle, middle, 50, 10, 6)
    // pop()
}

/* inspiration: https://editor.p5js.org/p5/sketches/Form:_Star */
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