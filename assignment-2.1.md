/*
Michael Bates
*/



The math.ceil function returns the smallest integer than or equal to a given number.
The default return value is 1
A similar built in function is number

Date.getDate()
Date.now()



var Cheat={  
    isShown:false,
    cwal:false,
    gathering:false,     /* The false indicates that the command will not happen*/
    manUnlimited:false,
    handler:function(){
        if (Cheat.isShown) /* The if mean if true it will execute the command, if false it wont*/
            var cheatFlag=Cheat.execute($('input#cheatInput').val().toLowerCase());
            $('#cheat_Box').hide();
            $('input#cheatInput').val('');
            if (cheatFlag) {
                //Refresh control panel
                Game.changeSelectedTo(Game.selectedUnit);
                Game.showMessage('Cheat enabled');
            }
            Cheat.isShown=false;
            keyController.disable=false;
        }
        else {  /* Ask about ELSE*/
            $('#cheat_Box').show();
            $('input#cheatInput').focus();
            Cheat.isShown=true;
            keyController.disable=true;
        }
    },
    execute:function(cheatCode){
        var cheatFlag=true;
        switch (cheatCode){   /* what does switch mean?*/
            case "show me the money":  /* Ask about case*/
                Resource[0].mine+=10000;
                Resource[0].gas+=10000;
                break;
            case "black sheep wall":
                //Switch between show fog or not show
                Map.fogFlag=!Map.fogFlag;
                break;
            case "something for nothing":
                //Upgrade all grades
                for (var grade in Upgrade){  /* for indicates what something is being used on*git 
                    Upgrade[grade].effect();

