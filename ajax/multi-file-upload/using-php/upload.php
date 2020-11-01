<?php

    var_dump($_FILES);

    // Moves uploaded file to uploads/ Directory
    foreach($_FILES['myfiles']['tmp_name'] as $key => $value) {
        $targetPath = "uploads/" . basename($_FILES['myfiles']['name']);
        move_uploaded_file($value, $targetPath);
    }
    
?>