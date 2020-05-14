let Queen = function (direction, position) {
    // properties
    this.direction = direction;
    this.position = position;
    this.whereabouts = [position];

    //methods
    this.changeDirection = function (dir) {
        this.direction = dir;
    };

    // destructuring -- value directly taken from  an object.
    // const user = { name: 'John Doe', age: 34 };

    // const name = user.name; // name = 'John Doe'
    // const age = user.age; // age = 34


    // syntax-----------
    //const { name, age } = user;


    this.isValidMove = function (position) {
        let { x, y } = position;
        return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    };
    this.jumpMoveForward = function (stepsMove) {
        let position = { ...this.position };
        switch (this.direction) {
            case 'N':
                position.x = position.x - stepsMove;
                break;
            case 'S':
                position.x = position.x + stepsMove;
                break;
            case 'E':
                position.y = position.y + stepsMove;
                break;
            case 'W':
                position.y = position.y - stepsMove;
                break;
            case 'NE':
                position.x -= stepsMove;
                position.y += stepsMove;
                break;
            case 'NW':
                position.x -= stepsMove;
                position.y -= stepsMove;
                break;
            case 'SW':
                position.x += stepsMove;
                position.y -= stepsMove;
                break;
            case 'SE':
                position.x += stepsMove;
                position.y += stepsMove;
        }

        if (this.isValidMove(position)) {
            this.setPosition(position);
        }
        else {
            console.log("Wrong move");
        }
    };
    this.moveForward = function () {
        this.jumpMoveForward(1);
    }

    //getter
    this.getDirection = function () {
        return this.direction;

    };

    this.getPosition = function () {
        return this.position;
    };

    this.getWhereabouts = function () {
        return this.whereabouts;
    };
    // setter
    this.setDirection = function (direction) {
        // console to check what this function should return.
        // console.log("print",this);
        this.direction = direction;
    };

    this.setPosition = function (position) {
        this.position = position;
        this.whereabouts.push(position);
    }
    this.undoLastMove = function () {
        let allMoves = [...this.whereabouts];
        let len = allMoves.length;
        if (len >= 2) {
            this.position = allMoves[slen - 2];
        }
        else {
            console.log("Undo No Possible!!! becuase number of move is 1");
        }

    }
}
let queen = new Queen('S', { x: 4, y: 0 });
console.log(queen.undoLastMove());
// queen.changeDirection('S'); // this.direction
// //console.log(queen.getDirection()); // S
// queen.moveForward(); // 5,0 // 1. logic 2.this.position
// console.log(queen.getPosition());
// queen.jumpMoveForward(2); // jump by step 2 so the output would be 7
// console.log(queen.getPosition());
// queen.jumpMoveForward(4);
// console.log(queen.getPosition());
// console.log(queen.getWhereabouts());

