<?php 
    require_once 'connect.php';

    $timeScore = $_POST['score'];
    $gamertag = $_POST['gamertag'];
    $date = date("Y-m-d H:i:s");
    // $x=1;
    // if($x === 1){
    if(preg_match('/^[A-Za-z][A-Za-z0-9]$/', $gamertag)){
        $req = $db->prepare("INSERT INTO `timer`(`time`, `gamertag`, `date`) VALUES (:timeScore, :gamertag, :dateNow)");
        $req->execute(['timeScore' => $timeScore, 'gamertag' => $gamertag, 'dateNow' => $date]);
        header('Location: index.php');
    }else{
        header('Location:index.php');
        echo '<body onLoad="alert(\'Error username\')">';
    }