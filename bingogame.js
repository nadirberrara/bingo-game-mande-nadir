function BingoGame () {
    this.board = [
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null, null],
    ];
    this._generateTiles();
}



// Generate every tiles in the board
BingoGame.prototype._generateTiles = function () {


    for (var y = 0; y < this.board.length; y++ ) {
        for (var x = 0; x < this.board[y].length; x++) {
            if (y !== 2 || x !== 2) {
                var tileValue = Math.floor((Math.random() * 75) + 1);
                this.board[y][x] = tileValue;
            }
        }
    }
}



BingoGame.prototype._getAvailablePosition = function () {
    var positions = [];
    _.forEach(this.board, function (row, y) {
        _.forEach(row, function (tile, x) {
            if (!tile) positions.push({ x: x, y: y });
        })
    });

    if (!positions.length) return false;

    return _.sample(positions);
};


BingoGame.prototype._renderBoard = function () {
    var that = this;
    $('.js-score').text(this.score);
    $('.row').each(function(y, row) {
        $(row).children().each(function(x, cell) {
            cell = $(cell)
            cell.removeClass();
            cell.text('');
            cell.addClass('cell');
            var value = that.board[y][x];
            if (value) {
                cell.addClass('val-' + value);
                cell.text(value);
            }
        });
    });
};

BingoGame.prototype.displayInConsole = function () {
    for (var y = 0; y < this.board.length; y++ ) {
        console.log(this.board[y][0], this.board[y][1], this.board[y][2], this.board[y][3], this.board[y][4]);
    }
};


//free space
// not twice the same number




