<?php

require_once(dirname(__FILE__) ."/../data/dao/TargetDAO.php");
require_once(dirname(__FILE__) ."/../filters/TargetFilter.php");

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

class TargetController {
    public function getAll(TargetFilter $filter): array {
        $targetDao = new TargetDAO();
        return $targetDao->getAllMinifiedTargets($filter);
    }

    public function proposeTarget(string $targetId): array {
        $targetDao = new TargetDAO();
        
        $proposedTarget = $targetDao->getById($targetId);
        $todayTarget = $targetDao->getTodayTarget();

        return $proposedTarget->compareWithTarget($todayTarget);
    }
}

// Endpoint du controller

$targetController = new TargetController();

if (isset($_GET)){
    if (isset($_GET["getAll"])){
        echo json_encode($targetController->getAll(new TargetFilter(json_decode($_GET["filter"], true))));
    }
    else if (isset($_GET["propose"])){
        echo json_encode($targetController->proposeTarget($_GET["propose"]));
    }
}