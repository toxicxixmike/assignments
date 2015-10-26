 start:function(){
        //Keyboard settings
        window.onkeydown=function(event){
            //Will not switch page by Ctrl+N,cannot debug
            //event.preventDefault();
            //Sometimes need to disable shortcut key
            if (keyController.disable && event.keyCode!=13) return;
            switch (event.keyCode){
            
            
            
            
            
            
            
            
            loaded:function(){
        _$.sourceLoader.loadedNum++;
        if(_$.sourceLoader.loadedNum==_$.sourceLoader.sourceNum){
            _$.sourceLoader.allLoaded=true;
        }
        
        
        
        
        
        
        
        
        handler:function(){
        if (Cheat.isShown){
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
        else {
            $('#cheat_Box').show();
            $('input#cheatInput').focus();
            Cheat.isShown=true;
            keyController.disable=true;