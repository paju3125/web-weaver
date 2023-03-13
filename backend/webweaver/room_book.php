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
        $mob = $_POST['mob'];
        $email = $_POST['email'];
        $roomtype = $_POST['roomtype'];
        $checkIn = $_POST['checkIn'];
        $checkOut = $_POST['checkOut'];
        $special_req = $_POST['req'];
        $guest = $_POST['guest'];

        $sql = "insert into booking values('$name','$mob','$email','$roomtype','$checkIn','$checkOut','$special_req','$guest')";
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