<?php
    include('connect_database.php');

    if(isset($_POST["action"])){

        if($_POST['action'] == 'insert'){
            $query = "
                INSERT INTO forms (name, email, hobby) VALUES ('".$_POST['name']."', '".$_POST['email']."', '".$_POST['hobby']."')
            ";

            $statement = $con->prepare($query);
            $statement->execute();
            echo '<p>Data Inserted.</p>';
        }

    }

?>