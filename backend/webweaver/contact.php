<?php
    
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: POST,GET,OPTIONS,PUT,DELETE');
    header('Access-Control-Allow-Headers: Content-Type,X-Auth-Token, Origin, Authorization');

    $conn = new mysqli("localhost", 'root', '','webweaver');

    if(mysqli_connect_error()){
        echo mysqli_connect_error();
        exit();
    }
    else{
        $name = $_POST['name'];
        $msg = $_POST['msg'];
        $email = $_POST['email'];

        $sql = "insert into contact values('$name','$email','$msg')";
        $res = mysqli_query($conn,$sql);

        if($res){
            echo "Success!";
        }
        else{
            echo "Error!";
        }
        $conn->close();

    }
?>