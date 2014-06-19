<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type"
          content="text/html; charset=UTF-8">
    <title>Anmeldung</title>
    <link rel="stylesheet" type="text/css" href="css/global.css">

</head>
<body>
<div id="team">
    Team Uensens
</div>



<?php


switch ($_GET["messe"]){
    case "CeBIT":
        anmeldung("cebit");
        break;
    case "conhIT":
        anmeldung("conhit");
        break;
    case "WebTech Con":
        anmeldung("webtech");
        break;

}



function anmeldung($messe){
    $datei = fopen("anmeldungen/".$messe.".txt", "a");
    fwrite($datei, $_GET["vorname"]." ".$_GET["name"].", ".$_GET["matrikelnr"].", ".$_GET["email"].", ".$_GET["handy"].", ".$_GET["studiengang"].";\n");
    fclose($datei);
    echo "Du wurdest angemeldet<br>";
    echo "<a id='back' href='index.html'>zurück</a>";
}
?>
</body>
</html>


