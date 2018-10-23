function setup() {
  	// put setup code here
  	createCanvas(500, 500);
	init = false;
}

function draw() {
	// put drawing code here
	if ( keyIsPressed === true ) {
		if ( init == false ) {
			rect1();
			init = true;
		} else {
			rect2();
			init = false;
		}
	}
}

function rect1() {
	fill('black');
	rect(10,10,480,480);
	fill('white');
	rect(40,40,420,420);
	fill('black');
	rect(80,80,340,340);
	fill('white');
	rect(120,120,260,260);
	fill('black');
	rect(160,160,180,180);
	fill('white');
	rect(200,200,100,100);
}

function rect2() {
	fill('white');
	rect(10,10,480,480);
	fill('black');
	rect(40,40,420,420);
	fill('white');
	rect(80,80,340,340);
	fill('black');
	rect(120,120,260,260);
	fill('white');
	rect(160,160,180,180);
	fill('black');
	rect(200,200,100,100);
}