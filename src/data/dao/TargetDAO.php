<?php

require_once(dirname(__FILE__) ."/../Database.php");
require_once(dirname(__FILE__) ."/../../model/Target.php");

class TargetDAO {
    public function getAll(): array {
        $db = new Database();
        $targets = $db->fetchAll("SELECT * FROM targetle.target");
        $result = [];
        foreach ($targets as $target) {
            $result[] = $this->hydrate($target);
        }
        return $result;
    }

    public static function hydrate(array $data): Target {
        $target = new Target(
            $data['target_id'],
            $data['image_path'],
            $data['name'],
            Gender::from($data['gender']),
            Mission::from($data['mission']),
            (int) $data['age'],
            Nationality::from($data['nationality'])
        );

        return $target;
    }
}