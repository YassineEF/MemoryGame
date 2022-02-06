<?php
try{
    $db = new PDO('mysql:host=localhost;dbname=memory;charset=utf8', 'root');
}catch(Exception $e){
    echo "Erreur : ". $e -> getMessage();
}