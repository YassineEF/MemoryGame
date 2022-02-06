<?php
    require_once 'connect.php';
    $req = $db->query("SELECT * FROM `timer` ORDER BY `time` ASC LIMIT 5");
   
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Memory</title>
    <!-- CSS Link  -->
    <link rel="stylesheet" href="style.css">
    <!-- Russo one font style -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet">
    <!-- Wendy one font style -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Wendy+One&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <!-- Timer & Logo -->
        <img src="img/des-fruits.png" alt="logo">
        <h1>Memory Fruit</h1>
        <div id="timerText">Time Left: <span id="timer">00:00</span></div>
    </header>
    <main id="content">
        
        <div id="begin">
            <!-- Score -->
            <h2 id="score"></h2>
            <h2>Best Timing</h2>
            <ul>
            <?php foreach($req as $sc){ 
                // Creating timestamp from given date
                $timestamp = strtotime($sc['date']);
                // Creating new date format from that timestamp
                $new_date = date("d-m-Y", $timestamp);
                ?>
                <li><?= $sc['time']; ?>   <?= $new_date; ?> <?= $sc['gamertag']; ?></li>
            <?php } ?>
            </ul>
            <!-- Start Button-->
            <h3 id="strBtn">Start</h3> 
        </div>
        <!-- Cards Div -->
        <div id="center"></div>
        <!-- Formulaire -->
        <div id="formulaire">
            <form action="score.php" method="post">
                <div class="row">
                    <div class="col-25">
                        <label for="score">Score</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="score" name="score" value="" readonly>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                        <label for="gamertag">Gamertag</label>
                    </div>
                    <div class="col-75">
                        <input type="text" id="gamertag" name="gamertag"  required autofocus><p>(Only number and letters)</p>
                    </div>
                </div>
                <div class="row">
                    <input type="submit" id="btnForm" name="submit" value="submit">   
                </div>
            </form>
        </div>
    </main>
    <!-- Js link -->
    <script src="script.js"></script>
</body>
</html>