window.ML = (function(){

__inline("../../libs/zepto-1.0rc1/zepto.js");

var _cache = [],
    console = window.console;

function cache(str, type){
    var now = new Date(),
        time;

    time = [
        now.getHours()
        , now.getMinutes()
        , now.getSeconds()
    ].join(':');
    
    type = type || 'log';
    _cache.push([
        '[ ' + type + ' ] '
        , '[ ' + time + ' ] '
        , str
    ].join(''));
}

function log(str){
    console.log(str);
    cache(str, 'log');
}

function send(){
    var toBeSend = 
        _cache.splice(0, _cache.length);


    if(!toBeSend.length){
        return;
    }

    $.post('/server/ml.php', $.param({
        log: toBeSend
    }));
}

$(function(){
    setInterval(send, 5000); 
});

return {
    log: log
};

})();

window.console = ML;

