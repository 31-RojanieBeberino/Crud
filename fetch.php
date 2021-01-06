<?php

    include('connect_database.php');

    $query ="SELECT * FROM forms";

    $execution = $con->prepare($query);

    $execution->execute();

    $result = $execution->fetchAll(); 

    $total_row =  $execution->rowCount();

    $output = '
        <table class="table table-striped table-bordered">
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Edit</td>
                <th>Delete</th>
            </tr>
    ';

    if ($total_row > 0){
        foreach($result as $res){
            $output .= '
                <tr>
                    <td>'.$res["name"].'</td>
                    <td>'.$res["email"].'</td>

                    <td>
                        <button type="button" name="edit" class="btn btn-primary btn-xs edit" id="'.$res["id"].'" >Edit</button>
                    </td>
                    <td>
                        <button type="button" name="delete" class="btn btn-danger btn-xs delete" id="'.$res["id"].'" >Delete</button>
                    </td>
                </tr>
            ';
        }
    }else{
        $output .= '
            <tr>
                <td colspan="4" align="center">Cannot Found Data!</td>
            </tr>
        ';
    }
    $output .= '</table>';

    echo $output;
?>