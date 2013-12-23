<?php

echo var_export($_POST);

$file = '/Users/hudamin/tmp/ml.log';

if($handle = fopen($file, 'a+')){
    fwrite(
        $handle
        , var_export($_POST, true) . "\n"
    );
    fclose($handle);
}

/*
echo file_put_contents(
    '/Users/hudamin/tmp/ml.log'
    , var_export($_POST, true)
    , FILE_APPEND
);
*/

