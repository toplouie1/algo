// We want to create digital picture frames for our clients. Clients have different dimensions of things to frame, but all of them are rectangles.

// Given the width and the height of an image, we want to return a frame for the image.

// A basic frame is made up with '*' (asterisks) on the top and bottom and '|' (vertical lines) on the left and right sides.

// An image that is 4x3 would need a frame like this:

// ******
// |    |
// |    |
// |    |
// ******

// Write a function to produce these digital frames. The function has two parameters, width and height.

// If you complete this, please modify the function to allow customers to choose custom characters for their frame. They should be able to do this by way of a third parameter. The default characters, given above, should be preserved if no third argument is provided.

// width and height ;

const produceFrames = (width, height, frame = "*") => {
	// loop over there width but add 2 ;
	let spaces = "";
	for (let i = 0; i < width; i++) {
		spaces += "x";
	}

	console.log(frame.repeat(width + 2));

	let heightFrame = "|";
	if (frame === "*" ? (heightFrame = "|") : (heightFrame = frame));

	for (let i = 0; i < height; i++) {
		console.log(heightFrame + spaces.replaceAll("x", " ") + heightFrame);
	}
	console.log(frame.repeat(width + 2));
};

console.log(produceFrames(4, 3, "$"));
console.log(produceFrames(2, 2));
console.log(produceFrames(0, 2));
console.log(produceFrames(2, 2, "+"));
// console.log(produceFrames(4 , 3))
// console.log(produceFrames(4 , 3))

// ******
// |    |
// |    |
// |    |
// ******
