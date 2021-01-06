<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <script src="jquery.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="container">
    <h1 align="center">Hello Crud!!!!</h1>
    <div align="right" style="margin-bottom:15px;">
        <button type="button" name="add" id="add" class="btn btn-success btn-xs">Add</button>
    </div>
    <div id="user_data" class="table-resposive" ></div>
    </div>
    <div id="form-container">
        <div id="user-dialog" title="Add Data">
            <form medthod="post" id="user-form">
                <div class="form-group" align="right">
                    <input type="button" class="btn btn-danger" id="exit"  value="X">
                </div>
                <div class="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" id="name" class="form-control">
                    <span id="errorName" class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label>Your Email</label>
                    <input type="email" name="email" id="email" class="form-control">
                    <span id="errorEmail" class="text-danger"></span>
                </div>
                <div class="form-group">
                    <input type="hidden" name="action" id="action" value="insert">
                    <input type="hidden" name="hidden_id" id="hidden_id">
                    <input type="submit" name="form_action" id="form_action" class="btn btn-info" value="Insert">
                </div>
            </form>
        </div>
    </div>
    <div id="action_alert" title="Action">

    </div>




</body>

<script src="js.js"></script>
</html>