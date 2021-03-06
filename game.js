// game.js for Perlenspiel 3.2
//DRAWBBLE

//draws a line along the swiped mouse path

/*
Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
Perlenspiel is Copyright © 2009-15 Worcester Polytechnic Institute.
This file is part of Perlenspiel.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with Perlenspiel. If not, see <http://www.gnu.org/licenses/>.

Perlenspiel uses dygraphs (Copyright © 2009 by Dan Vanderkam) under the MIT License for data visualization.
See dygraphs License.txt, <http://dygraphs.com> and <http://opensource.org/licenses/MIT> for more information.
*/

// The following comment lines are for JSLint. Don't remove them!

/*jslint nomen: true, white: true */
/*global PS */

// This is a template for creating new Perlenspiel games

// All of the functions below MUST exist, or the engine will complain!

// PS.init( system, options )
// Initializes the game
// This function should normally begin with a call to PS.gridSize( x, y )
// where x and y are the desired initial dimensions of the grid
// [system] = an object containing engine and platform information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

var Game;
var Player;
var Lines = [];

PS.init = function( system, options ) {
	"use strict";

	// Use PS.gridSize( x, y ) to set the grid to
	// the initial dimensions you want (32 x 32 maximum)
	// Do this FIRST to avoid problems!
	// Otherwise you will get the default 8x8 grid
	
	Game = new Window(32, 32, PS.COLOR_WHITE);

	// Add any other initialization code you need here
	Player = new Ball(14,14);
	Game.addObject(Player);
	
	Game.run();

	Lines.push(new DrawLine(0, 32, 0, 0, Player));
	Lines.push(new DrawLine(0, 31, 31, 31, Player));
	Lines.push(new DrawLine(31, 0, 31, 31, Player));
	Lines.push(new DrawLine(0, 0, 31, 0, Player));
};	

// PS.touch ( x, y, data, options )
// Called when the mouse button is clicked on a bead, or when a bead is touched
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.touch = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches over a bead
	
	//PS.color(x, y, PS.COLOR_RED);
};

// PS.release ( x, y, data, options )
// Called when the mouse button is released over a bead, or when a touch is lifted off a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.release = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead
};

// PS.enter ( x, y, button, data, options )
// Called when the mouse/touch enters a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.enter = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead
};

// PS.exit ( x, y, data, options )
// Called when the mouse cursor/touch exits a bead
// It doesn't have to do anything
// [x] = zero-based x-position of the bead on the grid
// [y] = zero-based y-position of the bead on the grid
// [data] = the data value associated with this bead, 0 if none has been set
// [options] = an object with optional parameters; see documentation for details

PS.exit = function( x, y, data, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead
};

// PS.exitGrid ( options )
// Called when the mouse cursor/touch exits the grid perimeter
// It doesn't have to do anything
// [options] = an object with optional parameters; see documentation for details

PS.exitGrid = function( options ) {
	"use strict";

	// Uncomment the following line to verify operation
	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid
};

// PS.keyDown ( key, shift, ctrl, options )
// Called when a key on the keyboard is pressed
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F1
// [shift] = true if shift key is held down, else false
// [ctrl] = true if control key is held down, else false
// [options] = an object with optional parameters; see documentation for details

PS.keyDown = function( key, shift, ctrl, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	//	PS.debug( "DOWN: key = " + key + ", shift = " + shift + "\n" );

	// Add code here for when a key is pressed
	
	switch (key){
		case PS.KEY_SPACE:
		{
			PS.color(PS.ALL, PS.ALL, PS.COLOR_WHITE);
			break;
		}
	}
};

// PS.keyUp ( key, shift, ctrl, options )
// Called when a key on the keyboard is released
// It doesn't have to do anything
// [key] = ASCII code of the pressed key, or one of the following constants:
// Arrow keys = PS.ARROW_UP, PS.ARROW_DOWN, PS.ARROW_LEFT, PS.ARROW_RIGHT
// Function keys = PS.F1 through PS.F12
// [shift] = true if shift key is held down, false otherwise
// [ctrl] = true if control key is held down, false otherwise
// [options] = an object with optional parameters; see documentation for details

PS.keyUp = function( key, shift, ctrl, options ) {
	"use strict";

	// Uncomment the following line to inspect parameters
	// PS.debug( "PS.keyUp(): key = " + key + ", shift = " + shift + ", ctrl = " + ctrl + "\n" );

	// Add code here for when a key is released
};

// PS.swipe ( data, options )
// Called when a mouse/finger swipe across the grid is detected
// It doesn't have to do anything
// [data] = an object with swipe information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.swipe = function( data, options ) {
	"use strict";


	// Add code here for when an input event is detected
	
	// if(Lines.length > 0){
		// Game.removeObject(Lines.pop());	
	// }
	
	//Creates the line between the first and last beads that were swiped
	var newLine = new DrawLine(data.events[0].x, data.events[0].y, 
		data.events[data.events.length - 1].x, data.events[data.events.length - 1].y, Player);
		
	Lines.push(newLine);
	//PS.debug("Line added: " + newLine.name + " " + Lines.length + "\n");
	
	Game.addObject(newLine);
	
};

var findLine = function(CollidedBead){
		for(i = 0; i < Lines.length; i++){
			// if(Lines[i].line.contains(CollidedBead.sprite)){
				// PS.debug("Line found: " + Lines[i].toString());
				// return Lines[i];
			// }
		}
		
		PS.debug("No line found\n");
};

var verifyCollision = function(line, CollidedBead){
	var current = line._head;
	while(current.next != null){
		if(current = CollidedBead)
		{
			current.data.isCollided = true;
			continue;
		}
		
		if(current.data != CollidedBead && current.data.isCollided == true){
			return false;
		}
		
		current = current.next;
	}
	
	return true;
};

var resetBeadCollision = function(line){
	var current = line._head;
	while(current.next != null){
		current.data.isCollided = false;
		
		current = current.next;
	}
};


//Collision function
function collision(s1, p1, s2, p2, type){
	
		var s1_pos = PS.spriteMove(s1, PS.CURRENT, PS.CURRENT);
		var angle = PS.data(s1_pos.x, s1_pos.y);
		var CollidedBead = new Bead(s1_pos.x, s1_pos.y, s1, angle);
		 		
		//PS.debug("Collision Function: " + Lines.length + "\n");
		var collisionFlag = true;
		var collisionTimerID;
	
		if (s2 == Player.sprite && collisionFlag){
		
			var tempX = Player.xSpeed;
			var tempY = Player.ySpeed;
			PS.debug("\nBall has collided with: " + s2 + "\n");
			PS.debug(s1_pos.x + " , " + s1_pos.y + " , " + PS.data(s1_pos.x, s1_pos.y));
				
			//var dp = Math.sqrt(pow(tempX, 2) + pow(tempY, 2)) * Math.cos(
			//http://www.gamedev.net/topic/61069-bounce-vector/
			
			//var line = findLine(CollidedBead);
		
			collisionFlag = true; //verifyCollision(line, CollidedBead);	
	
			//change ball velocity
			if (Player.ySpeed >= 0){
				if(angle < 0){
				PS.debug("\nneg angle\n");
				Player.xSpeed = 0.2 * (Math.sqrt(Math.pow(tempX, 2) + Math.pow(tempY, 2)) * (Math.cos(PS.data(s1_pos.x, s1_pos.y) * -1) * (180/Math.PI)));
				Player.ySpeed = 0.2 * (Math.sqrt(Math.pow(tempX, 2) + Math.pow(tempY, 2)) * (Math.sin(PS.data(s1_pos.x, s1_pos.y) * -1) * (180/Math.PI)));
				}
				else if((angle > 0) && (angle < 90)){
				PS.debug("\npos angle\n");
				Player.ySpeed = 0.2 * (Math.sqrt(Math.pow(tempX, 2) + Math.pow(tempY, 2))) * (Math.sin((Math.PI/2) - (Math.atan(tempY/tempX)) + ((PS.data(s1_pos.x, s1_pos.y)) * (Math.PI/180))) * (180/Math.PI));
				Player.xSpeed = 0.2 * (Math.sqrt(Math.pow(tempX, 2) + Math.pow(tempY, 2))) * (Math.cos((Math.PI/2) - (Math.atan(tempY/tempX)) + ((PS.data(s1_pos.x, s1_pos.y)) * (Math.PI/180))) * (180/Math.PI));
				PS.debug("X: " + Player.xSpeed + " Y: " + Player.xSpeed);
				}
				else if(angle == 90){
				PS.debug("\nwall bounce\n" + s1_pos.x + s1_pos.y + angle);
				Player.xSpeed = (tempX * -1);
				iscolliding = true;
				}
				else if(angle == 0){
				PS.debug("\nline bounce\n");
				Player.ySpeed = (tempY * -1);
				}
			}
			else if(Player.ySpeed < 0){
				if(angle < 0){
				Player.xSpeed = 1/30;
				Player.ySpeed = 0;
				}
				else if((angle > 0) && (angle < 90)){
				Player.xSpeed = -1/30;
				Player.ySpeed = 0;
				}
				else if(angle == 90){
				Player.xSpeed = (Player.xSpeed * -1);
				}
				else if(angle == 0){
				Player.ySpeed = (Player.ySpeed * -1);
				}
			}
	
		//collisionTimerID = PS.timerStart(PS.DEFAULT, resetBeadCollision(line));
		//PS.timerStop(collisionTimerID);

		return 1;
	}
	else
	{
		return PS.DEFAULT;
	}
	
}

// PS.input ( sensors, options )
// Called when an input device event (other than mouse/touch/keyboard) is detected
// It doesn't have to do anything
// [sensors] = an object with sensor information; see documentation for details
// [options] = an object with optional parameters; see documentation for details

PS.input = function( sensors, options ) {
	"use strict";

	// Uncomment the following block to inspect parameters
	/*
	PS.debug( "PS.input() called\n" );
	var device = sensors.wheel; // check for scroll wheel
	if ( device )
	{
		PS.debug( "sensors.wheel = " + device + "\n" );
	}
	*/
	
	// Add code here for when an input event is detected
};

