fis.config.merge({
    roadmap : {
        path : [
            {
                reg : /client\/ml-aio.js$/i
                , release : "/release/$&"
                , url: "/$&"
            }
            ,{
                reg : /server\/ml.php$/i
                , release : "/release/$&"
                , url : "/$&"
            }
        ]
    }
});

fis.config.del('modules.optimizer.html');
