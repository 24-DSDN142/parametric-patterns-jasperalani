//your parameter variables go here!
let rect_width = 200;
let rect_height = 200;

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
    pWallpaper.show_guide(false); //set this to false when you're ready to print

    //Grid settings
    pWallpaper.grid_settings.cell_width = rect_width;
    pWallpaper.grid_settings.cell_height = rect_height;
    pWallpaper.grid_settings.row_offset = 0;
}

function wallpaper_background() {
    // background(Colours.FIVE);
    // background("rgba(228,149,248,0.49)");
}

/* inspiration: https://editor.p5js.org/yuletide/sketches/sSCcQ27F8 */
function my_symbol() {

    // drawBunny();
    // drawTurtle();
    drawShapes();
    // drawPentagram({x: 100, y: 100});

}

function drawShapes() {
    push()

    fill(Colours.ONE)
    strokeWeight(0)

    // circle(0, 0, 100)
    // circle(rect_width, 0, 100)
    // circle(0, rect_height, 100)
    // circle(rect_width, rect_height, 100)

    // pop()
    // fill("green")
    // rect(-10, 0, 20, rect_height)
    // rect(0, -10, rect_width, 20)
    // push()

    drawStar(0, 0, 100, 1, 4)

    // drawStar(0, 0, 100, 30, 4)
    drawStar(100, 100, 75, 70, 12)

    push()
    fill(Colours.TWO)
    drawStar(100, 100, 75, 70, 12)
    pop()

    const smallStarInner = 8;
    const smallStarPoints = 0;
    drawStar(50, 50, 25, smallStarInner, smallStarPoints)
    drawStar(150, 50, 25, smallStarInner, smallStarPoints)
    drawStar(50, 150, 25, smallStarInner, smallStarPoints)
    drawStar(150, 150, 25, smallStarInner, smallStarPoints)

    pop()

    // drawRandomCircles(0, 0, rect_width, rect_height)
}

function randomColour() {
    return "rgb(" + int(rand(1, 255)) + ", " + rand(1, 255) + ", " + rand(1, 255) + ")";
}

function drawTurtle() {
    const x = 100;
    const y = 100;
    const sizeModifier = 0.8;

    strokeWeight(0)
    fill(Colours.THREE)

    // head
    push()
    translate(x, y - 50)
    rotate(0)
    ellipse(0, 0, 30 * sizeModifier, 60 * sizeModifier)
    pop()

    // body
    ellipse(x, y, 75 * sizeModifier, 120 * sizeModifier);

    // arms
    const armsOffsetX = 35;
    const armsOffsetY = -5;
    const armsRotation = 35;
    push()
    translate(x - armsOffsetX, y + armsOffsetY);
    rotate(armsRotation)
    ellipse(0, 0, 20 * sizeModifier, 80 * sizeModifier);
    pop()
    push()
    translate(x + armsOffsetX, y + armsOffsetY);
    rotate(-armsRotation)
    ellipse(0, 0, 20 * sizeModifier, 80 * sizeModifier);
    pop()

    // legs
    const legOffsetX = 20
    const legOffsetY = 50
    const legRotation = 7;
    push()
    translate(x - legOffsetX, y + legOffsetY);
    rotate(-legRotation)
    ellipse(0, 0, 20 * sizeModifier, 60 * sizeModifier);
    pop()
    push()
    translate(x + legOffsetX, y + legOffsetY);
    rotate(legRotation)
    ellipse(0, 0, 20 * sizeModifier, 60 * sizeModifier);
    pop()
}


function drawBunny() {
    const x = 100;
    const y = 100;
    const sizeModifier = 0.8;

    strokeWeight(0)
    fill(Colours.ONE)

    // head
    push()
    translate(x + 4, y - 60)
    rotate(20)
    ellipse(0, 0, 60 * sizeModifier, 70 * sizeModifier)
    pop()

    // body
    ellipse(x, y, 75 * sizeModifier, 120 * sizeModifier);

    // arms
    const armsOffsetX = 35;
    const armsOffsetY = -5;
    const armsRotation = 35;
    push()
    translate(x - armsOffsetX, y + armsOffsetY);
    rotate(armsRotation)
    ellipse(0, 0, 20 * sizeModifier, 80 * sizeModifier);
    pop()
    push()
    translate(x + armsOffsetX, y + armsOffsetY);
    rotate(-armsRotation)
    ellipse(0, 0, 20 * sizeModifier, 80 * sizeModifier);
    pop()


    // tail
    // push()
    // noFill()
    // strokeWeight(3)
    // const bezierXOffset = 65;
    // const bezierYOffset = 75;
    // const bezierArgs = [
    //     (31 + bezierXOffset) * sizeModifier,
    //     (61 + bezierYOffset) * sizeModifier,
    //     (89 + bezierXOffset) * sizeModifier,
    //     (87.5 + bezierYOffset) * sizeModifier,
    //     (57.25 + bezierXOffset) * sizeModifier,
    //     (31 + bezierYOffset) * sizeModifier,
    //     (86.5 + bezierXOffset) * sizeModifier,
    //     (26.5 + bezierYOffset) * sizeModifier,
    // ]
    // bezier(
    //     bezierArgs[0],
    //     bezierArgs[1],
    //     bezierArgs[2],
    //     bezierArgs[3],
    //     bezierArgs[4],
    //     bezierArgs[5],
    //     bezierArgs[6],
    //     bezierArgs[7],
    // );
    // pop()
    // push();
    // translate(bezierArgs[6]+3, bezierArgs[7]-3);
    // rotate(24)
    // drawStar(0, 0, 5 * sizeModifier, 20 * sizeModifier, 3);
    // pop();

    // legs
    const legOffsetX = 20
    const legOffsetY = 50
    const legRotation = 7;
    push()
    translate(x - legOffsetX, y + legOffsetY);
    rotate(-legRotation)
    ellipse(0, 0, 20 * sizeModifier, 60 * sizeModifier);
    pop()
    push()
    translate(x + legOffsetX, y + legOffsetY);
    rotate(legRotation)
    ellipse(0, 0, 20 * sizeModifier, 60 * sizeModifier);
    pop()
}

/* inspiration: https://editor.p5js.org/p5/sketches/Form:_Star */
function drawStar(x, y, outerRadius, innerRadius, points) {
    const angleStep = (Math.PI * 2) / points;
    const halfAngleStep = angleStep / 2;

    beginShape();

    for (let angle = 0; angle < (Math.PI * 2); angle += angleStep) {
        // Outer vertex
        const outerX = x + Math.cos(angle) * outerRadius;
        const outerY = y + Math.sin(angle) * outerRadius;
        vertex(outerX, outerY);

        // Inner vertex
        const innerX = x + Math.cos(angle + halfAngleStep) * innerRadius;
        const innerY = y + Math.sin(angle + halfAngleStep) * innerRadius;
        vertex(innerX, innerY);
    }

    endShape(CLOSE);
}

/* inspiration: https://editor.p5js.org/yuletide/sketches/sSCcQ27F8 */
function drawPentagram(
    location = {x: 0, y: 0},
    diameter = 50,
    rotation = -90,
    lineDashed = false
) {
    /* VARIABLES */
    const _strokeWeight = 2;
    const strokeColour = getColour(Colours_RGBA.ONE, 1);
    const backgroundColour = getColour(Colours_RGBA.THREE, 1);
    const backgroundOffset = -10; // int(rand(5, 40))
    /* VARIABLES END */

    const points = [];
    const angleIncrement = (2 * Math.PI) / 5;
    // Find the points by taking the angle increment and multiplying it the radius
    for (let i = 0; i < 5; i++) {
        const angle = i * angleIncrement;
        points.push({
            x: diameter / 2 * Math.cos(angle),
            y: diameter / 2 * Math.sin(angle)
        });
    }

    push();
    translate(location.x, location.y);
    rotate(rotation);
    fill(backgroundColour);
    strokeWeight(0);
    circle(0, 0, diameter - backgroundOffset);
    pop()

    // draw pentagram lines
    push();
    if (lineDashed) {
        setLineDash([5, 5]); //create the dashed line pattern here
    }
    translate(location.x, location.y);
    rotate(rotation);
    noFill()
    stroke(strokeColour);
    strokeWeight(_strokeWeight);
    circle(0, 0, diameter);
    for (let j = 0; j < 3; j++) {
        line(points[j].x, points[j].y, points[j + 2].x, points[j + 2].y);
        if (j < 2) {
            line(points[j].x, points[j].y, points[j + 3].x, points[j + 3].y);
        }
    }
    pop();
}

function rand(min, max) {
    return int(random(min, max));
}

function colourGen() {
    const randomNumber = int(random(1, 5));
    console.log(randomNumber)
    switch (randomNumber) {
        case 1:
            return Colours.ONE;
        case 2:
            return Colours.TWO;
        case 3:
            return Colours.THREE;
        case 4:
            return Colours.FOUR;
        case 5:
            return Colours.FIVE;
    }
}

/* https://editor.p5js.org/squishynotions/sketches/Ax195WTdz */
function setLineDash(list) {
    drawingContext.setLineDash(list);
}