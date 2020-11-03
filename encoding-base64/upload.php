<?php

    // decode the json body
    $json = file_get_contents('php://input');
    $body = json_decode($json);

    // decode the body and save to png directory with time stamp
    file_put_contents('png/' . time() . '.png', base64_decode($body -> png));

    // Try adjusting the directory permissions.
    // from a terminal, run chmod 777 database (from the directory that contains the database folder)

    //! open the terninal: goto upload directory and type : chmod 777 png/

?>