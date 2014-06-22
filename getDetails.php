<?php
header("Content-type: application/json"); 

switch ($_GET["data"]){
    case "contributors":
        echo file_get_contents("dataContributors.json");
        break;
    case "fairs":
        echo file_get_contents("dataFairs.json");
        break;

}
		
?>