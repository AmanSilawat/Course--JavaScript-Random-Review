<?php

    $requestPayload = file_get_contents('php://input');
    
    // !Print a string
    var_dump($requestPayload);
    // OUTPUT: string(61) "{"name":"Aman Silawat","age":26,"occupation":"Web Developer"}"

    // !string to convert object
    // $object = json_decode($requestPayload);
    // var_dump($object);
    // OUTPUT: object(stdClass)#1 (3) { ["name"]=> string(12) "Aman Silawat" ["age"]=> int(26) ["occupation"]=> string(13) "Web Developer" }
    
    // !string to convert array
    // $array = json_decode($requestPayload, true);
    // var_dump($array);
    // OUTPUT: array(3) { ["name"]=> string(12) "Aman Silawat" ["age"]=> int(26) ["occupation"]=> string(13) "Web Developer" } array(3) { ["name"]=> string(12) "Aman Silawat" ["age"]=> int(26) ["occupation"]=> string(13) "Web Developer" }

?>