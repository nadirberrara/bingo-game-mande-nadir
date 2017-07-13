


$('document').ready(function(){
    var randomList = b._generateRandomList();
    var i = 0;

    $('#commencer').click(function(){
        $('#howManyPlayers').css({'visibility' : 'visible', 'opacity' : '1'});

        $('#onePlayer').click(function () {
            $('#myGame').css({'visibility' : 'visible', 'opacity' : '1'});

            for (var x = 0; x < 5; x++) {
                for (var y= 0; y < 5; y++) {
                    if (y !== 2 || x !== 2) {
                        $('.player1 .cell-' + y + '-' + x).html(b.board[y][x]);}}}

            for (var x = 0; x < 5; x++) {
                if (y !== 2 || x !== 2) {
                    for (var y= 0; y < 5; y++) {
                        $('.player2 .cell-' + y + '-' + x).html(b.board2[y][x]);}}}

            for (var x = 0; x < 10; x++) {
                for (var y = 0; y < 10; y++) {
                    $('.theList .cell-' + y + '-' + x).html(randomList[i]);
                    i++;
                }
            }
        });




    });








}); // fin du document ready



function BingoGame () {
    //player1
    this.board = [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null]
    ];

    //player2
    this.board2 = [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null]
    ];

    this._generateTiles();
    this._generateTiles2();
    this._generateRandomList();

}




// Generate a list from 1 to 75 in shuffle
BingoGame.prototype._generateRandomList = function () {
    var list = [];
    for (var i = 1; i <= 75; i++) {
        list.push(i);
    }
    return _.shuffle(list);
};



// Generate the first player grid
BingoGame.prototype._generateTiles2 = function () {
    var randomList = this._generateRandomList();
    var i = 0;
    for (var y = 0; y < this.board.length; y++ ) {
        for (var x = 0; x < this.board[y].length; x++) {
            if (y !== 2 || x !== 2) {
                i++;
                var tileValue = randomList[i];
                this.board[y][x] = tileValue;
            }
        }
    }
};




// Generate the second player grid
BingoGame.prototype._generateTiles = function () {
    var randomList = this._generateRandomList();
    var i = 0;
    for (var y = 0; y < this.board2.length; y++ ) {
        for (var x = 0; x < this.board2[y].length; x++) {
            if (y !== 2 || x !== 2) {
                i++;
                var tileValue = randomList[i];
                this.board2[y][x] = tileValue;
            }
        }
    }
};




// Display in the console
BingoGame.prototype.displayInConsole = function () {

    console.log("player1");
    for (var y = 0; y < this.board.length; y++ ) {
        //console.log(this.board[y][0], this.board[y][1], this.board[y][2], this.board[y][3], this.board[y][4]);
        console.log(this.board[y]);
    }

    console.log("player2");
    for (var y = 0; y < this.board2.length; y++ ) {
        //console.log(this.board[y][0], this.board[y][1], this.board[y][2], this.board[y][3], this.board[y][4]);
        console.log(this.board2[y]);
    }
    console.log("default list");
    console.log(b._generateRandomList())
};


