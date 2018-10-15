$(document).ready(function () {
    console.log('Document is loaded.');

    // Specific defense and attack cards to be store
    var attackCard = null;
    var defenseCard = null;

    //fade in splash screen:
    setTimeout(function () {
        $('h1').animate({
            opacity: 1
        });
        setTimeout(function () {
            $('.buttonMenu').animate({
                opacity: 1


            });

        }, 1000);
    }, 250);

    //start game music:
    // var themeTuneIntro = new Audio("./audio/GoT8bit1.mp3");
    // themeTuneIntro.play();
 /*   themeTuneIntro.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false); */


    //start game:
    $('#play').click(function () {
        console.log("start game!");
        $('#play').fadeOut();
        $('#about').fadeOut();
        $('.about-info').fadeOut();
        $('.gamediv1').fadeOut().queue(function () {
            // themeTune.play();
            // themeTuneIntro.pause();
            themeTune.addEventListener('ended', function () {
                this.currentTime = 0;
                this.play();
            }, false);
            $('.gamediv2').removeClass("hidden").dequeue();
        });



    });

    //switch to game main tune:
    var themeTune = new Audio("./audio/GoT8bit.mp3");


    //see 'about' document:
    $("#about").click(() => {
        $.ajax({
            url: 'http://localhost:3000/about',
            type: 'GET',
            dataType: 'JSON',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                $('h1').animate({
                    opacity: 0.3
                });
                $("#aboutInfo").append(data.about);
                $("#aboutInfo").show();
            },
            error: function (xhr, status, error) {
                console.log(`
                        error   : ${error},
                        status  : ${status},
                        xhr     : ${JSON.stringify(xhr)}
                    `);
            }

        });
    });


    /*
     .o88b.  .d88b.  .88b  d88. d8888b.  .d8b.  d888888b 
    d8P  Y8 .8P  Y8. 88'YbdP`88 88  `8D d8' `8b `~~88~~' 
    8P      88    88 88  88  88 88oooY' 88ooo88    88    
    8b      88    88 88  88  88 88~~~b. 88~~~88    88    
    Y8b  d8 `8b  d8' 88  88  88 88   8D 88   88    88    
     `Y88P'  `Y88P'  YP  YP  YP Y8888P' YP   YP    YP    
    */
    let cards = ["rock1", "paper1", "scissors1"];
    // let playerCard= selectedAttack;
    // beginCombat(playerCard, enemyCard);

    // function beginCombat(playerCard, enemyCard){




    //game div 2 is active:
    // By pressing the right button, the hero character is animated
    // Next is the dragon character to be animated. In the end
    // the button to select available cards is shown.
    $('#btn-right').click(function () {

        console.log("btn right is clicked");

        $('#hero').animate({
            left: '50%'
        });
        setTimeout(function () {
            console.log("time!");
            $('#enemy1').animate({
                top: '38%'
            })
        }, 500);
        setTimeout(function () {
            $('.btnEquipCards').fadeIn();
            $('#btnEquipCards').removeClass("hidden");
        }, 1250);


    });

    /*
    $('#btnEquipCards').click(function () {
        console.log("equip cards btn clicked");
        
        $('.gamediv2').fadeOut().queue(function () {

            $('.equipCardDiv').removeClass("hidden").dequeue();
        });


    });

    */


    //card selector active:
    $("#carousel-card-choose").attr("data-id", "carousel");
    $("#carousel-card-choose").carousel({
        interval: false
    });
    

    $('#card-btn-right').click(function () {
        console.log("next card");
        $("#carousel-card-choose").carousel('prev');

    });


    $('#card-btn-left').click(function () {
        console.log("previous card");
        $("#carousel-card-choose").carousel('next');

    });

    



});