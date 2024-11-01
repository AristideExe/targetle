<?php

require_once(dirname(__FILE__) ."/../data/dao/TargetDAO.php");

class TargetController {
    public function getAll(): array {
        $targetDao = new TargetDAO();     
        return $targetDao->getAll();   
    }
}

if ($GET){
    $targetController = new TargetController();
    echo var_dump($targetController->getAll());
}