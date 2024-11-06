<?php

require_once(dirname(__FILE__) ."/../Database.php");
require_once(dirname(__FILE__) ."/../../model/Target.php");

class TargetDAO {

    private static function hydrate(array $data): Target {
        $target = new Target(
            $data['target_id'],
            $data['image_path'],
            $data['name'],
            Gender::from($data['gender']),
            Destination::from($data['destination']),
            (int) $data['year_of_birth'],
            Nationality::from($data['nationality']),
            $data['hitman_game']
        );

        return $target;
    }

    private static function hydrateMinified(array $data): MinifiedTarget {
        $target = new MinifiedTarget(
            $data['target_id'],
            $data['image_path'],
            $data['name']
        );

        return $target;
    }

    public function getAllMinifiedTargets(): array {
        $db = new Database();
        $targets = $db->fetchAll("SELECT * FROM targetle.target");
        $result = [];
        foreach ($targets as $target) {
            $result[] = $this->hydrateMinified($target);
        }
        return $result;
    }

    public function getById(string $target_id): Target {
        $db = new Database();
        return $this->hydrate(
            $db->fetch("SELECT * FROM targetle.target WHERE target_id = :target_id", ["target_id" => $target_id])
        );
    }

    private function chooseTodaysTarget(): array {
        $db = new Database();
        return $db->fetch("INSERT INTO targetle.target_day (date, target_id) 
            VALUES (CURRENT_DATE, (SELECT target_id FROM targetle.target ORDER BY RANDOM() LIMIT 1)) RETURNING target_id");
    }

    public function getTodayTarget(): Target {
        $db = new Database();
        $targetId = $db->fetch("SELECT target_id FROM targetle.target_day WHERE date=CURRENT_DATE");
        if (empty($targetId)) {
            $targetId = $this->chooseTodaysTarget();
        }
        return $this->hydrate(
            $db->fetch("SELECT * FROM targetle.target WHERE target_id = :target_id", ["target_id" => $targetId["target_id"]])
        );
    }
}