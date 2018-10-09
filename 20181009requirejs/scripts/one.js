define([], function(){
    return {
        say: function(msg){
            document.getElementById('msg').innerText = 'one:' + msg;
        }
    };
});