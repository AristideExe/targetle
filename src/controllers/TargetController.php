<?php

require_once(dirname(__FILE__) ."/../data/dao/TargetDAO.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

class TargetController {
    public function getAll(): array {
        $targetDao = new TargetDAO();     
        return $targetDao->getAllMinifiedTargets();   
    }

    public function proposeTarget(string $targetId): array {
        $targetDao = new TargetDAO();
        
        $proposedTarget = $targetDao->getById($targetId);
        $todayTarget = $targetDao->getTodayTarget();

        return $proposedTarget->compareWithTarget($todayTarget);
    }
}

$targetController = new TargetController();

if (isset($_GET)){
    if (isset($_GET["getAll"])){
        echo json_encode($targetController->getAll());
    }
    else if (isset($_GET["propose"])){
        // echo json_encode($targetController->proposeTarget($$_GET["propose"]));
        echo json_encode($targetController->proposeTarget($_GET["propose"]));
    }
}