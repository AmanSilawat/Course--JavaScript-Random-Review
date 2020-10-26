<?php

    $username = isset($_POST['username']) ? $_POST['username'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    $ok = true;
    $msg = array();

    if ( !isset($username) || empty($username) ) {
        $ok = false;
        $msg[] = "Username cannot be empty!";
    }

    if ( !isset($password) || empty($password) ) {
        $ok = false;
        $msg[] = "Password cannot be empty!";
    }

    if ($ok) {
        if ($username === "aman" && $password === "aman") {
            $ok = true;
            $msg[] = "Successful login!";
        } else {
            $ok = false;
            $msg[] = 'Incorrect username/password combination!';
        }
    }

    echo json_encode(
        array(
            'ok' => $ok,
            'msg' => $msg
        )
    )
?>