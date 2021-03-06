



$('document').ready(function(){
    var randomList = b._generateRandomList();
    var i = 0;



    var backgroundMusic = new Howl({
        src: ['elements/musique.mp3'],
        autoplay: true,
        loop: true,
        volume: 0.5
    });




    $('.start').click(function(){
        $('#tableList, #nextNumber').show();
    });


    $('#commencer').click(function(){
        $('#howManyPlayers').css({'visibility' : 'visible', 'opacity' : '1'});

        $('#twoPlayers').click(function () {
            $('#myGame').css({'visibility' : 'visible', 'opacity' : '1'});

            $('#player1 .cell:not(.empty)').each(function (index) {
                $(this).text(b.board[index]);
            });

            $('#player2 .cell:not(.empty)').each(function (index) {
                $(this).text(b.board2[index]);
            });

         $('#nextNumber').click(function () {
             var availableCells = $('#tableList .cell:not(.green)');
             var index = Math.floor(Math.random() * availableCells.length);
             var selectedElement = availableCells.eq(index);
             selectedElement.toggleClass("green");
         });

            $(".player .cell").click(function () {
                var existingNumbers = jQuery.map($('#tableList .green'), function (el, index) {
                    return $(el).text();
                });
                console.log(existingNumbers);
                console.log($(this).text());

                if (jQuery.inArray($(this).text(), existingNumbers) !== -1){
                    $(this).toggleClass("green");
                    var numberSelected = $(this).parent().find('.green').length;
                    if (numberSelected === 5) {

                        //alert('BINGO');
                        var applauseMusic = new Howl({
                            src: ['elements/applause.mp3'],
                            autoplay: true,
                            volume: 0.5
                        });
                        var bingoSound = new Howl({
                            src: ['elements/BINGO.mp3'],
                            autoplay: true,
                            volume: 1
                        });
                        $('#winner').css({'visibility' : 'visible', 'opacity' : '1'});
                        $('#endOfGame').css({'visibility' : 'visible', 'opacity' : '1'});
                    }
                }

            });

        });

        $(function() {
            $("#ok2").click(function(oEvent){
                var sPrenom = $("#prenom").val();
                $('#m2').text(sPrenom);
                $('#player2name').css({'visibility':'hidden','opacity':'0'});
            });
            $("#ok").click(function(oEvent){
                var sNom = $("#nom").val();
                $('#m1').text(sNom);
                $('#player1name').css({'visibility':'hidden','opacity':'0'});
            });
        });
    });
}); // fin du document ready



function BingoGame () {
    //player1
    this.board = this._generateRandomList();
    //player2
    this.board2 = this._generateRandomList();
}

// Generate a list from 1 to 75 in shuffle
BingoGame.prototype._generateRandomList = function () {
    var list = [];
    for (var i = 1; i <= 75; i++) {
        list.push(i);
    }
    return _.shuffle(list);
};

// Display in the console
BingoGame.prototype.displayInConsole = function () {

    console.log("player1");
    for (var y = 0; y < this.board.length; y++ ) {
        //console.log(this.board[y][0], this.board[y][1], this.board[y][2], this.board[y][3], this.board[y][4]);
        console.log(this.board[y]);
    }

    console.log("player2");
    for (var inc = 0; inc < this.board2.length; inc++ ) {
        //console.log(this.board[y][0], this.board[y][1], this.board[y][2], this.board[y][3], this.board[y][4]);
        console.log(this.board2[inc]);
    }
    console.log("default list");
};
