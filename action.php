<?php
    include('connect_database.php');

    if(isset($_POST["action"])){

        if($_POST['action'] == 'insert'){
            $query = "INSERT INTO forms (name, email) VALUES ('".$_POST['name']."', '".$_POST['email']."') ";

            $statement = $con->prepare($query);
            $statement->execute();
            echo '<p>Data Inserted.</p>';
        }



        if($_POST['action'] == 'fetch_single') {
            $query = "SELECT * FROM forms WHERE id = '".$_POST['id']."' ";
            $statement = $con->prepare($query);
            $statement->execute();
            $result = $statement->fetchAll();
            foreach($result as $row){
                $output['name'] = $row['name'];    
                $output['email'] = $row['eamil'];
            }
            echo json_encode($output);
        }

    }

?>