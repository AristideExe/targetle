<?php

require_once(dirname(__FILE__) ."/Gender.php");
require_once(dirname(__FILE__) ."/Mission.php");
require_once(dirname(__FILE__) ."/Nationality.php");

class Target implements JsonSerializable {

    private string $target_id;
    private string $image_path;
    private string $name;
    private Gender $gender;
    private Mission $mission;
    private int $age;
    private Nationality $nationality;
    private int $hitmanGame;

    public function __construct(
        string $target_id,
        string $image_path,
        string $name,
        Gender $gender,
        Mission $mission,
        int $age,
        Nationality $nationality,
        int $hitmanGame
    ) {
        $this->target_id = $target_id;
        $this->image_path = $image_path;
        $this->name = $name;
        $this->gender = $gender;
        $this->mission = $mission;
        $this->age = $age;
        $this->nationality = $nationality;
        $this->hitmanGame = $hitmanGame;
    }

    public function jsonSerialize(): array {
        return [
            "target_id" => $this->target_id,
            "image_path"=> $this->image_path,
            "name"=> $this->name,
            "gender"=> $this->gender->name,
            "mission"=> $this->mission->name,
            "age"=> $this->age,
            "nationality"=> $this->nationality->name,
            "hitmanGame"=> $this->hitmanGame,
        ];
    }

    public function compareWithTarget(Target $target) : array {
        return [
            "target_id" => ["value" => $this->target_id, "result" => $this->target_id == $target->target_id],
            "image_path" => ["value" => $this->image_path, "result" => $this->image_path == $target->image_path],
            "name" => ["value" => $this->name, "result" => $this->name == $target->name],
            "gender" => ["value" => $this->gender->name, "result" => $this->gender == $target->gender],
            "mission" => ["value" => $this->mission->name, "result" => $this->mission == $target->mission],
            "age" => ["value" => $this->age, "result" => $this->age < $target->age ? 'more' : ($this->age > $target->age ? 'less' : true)],
            "nationality" => ["value" => $this->nationality->name, "result" => $this->nationality == $target->nationality],
            "hitmanGame" => ["value" => $this->hitmanGame, "result" => $this->hitmanGame == $target->hitmanGame],
        ];
    }
}

/**
 * Cibles envoyées pour le select.
 * Avoir des informations réduites permet d'éviter que le joueur cherche dans les requêtes réseau pour trouver les caractéristiques des cibles
 */
class MinifiedTarget implements JsonSerializable {
    private string $target_id;
    private string $image_path;
    private string $name;

    public function __construct(
        string $target_id,
        string $image_path,
        string $name
    ) {
        $this->target_id = $target_id;
        $this->image_path = $image_path;
        $this->name = $name;
    }

    public function jsonSerialize(): array {
        return [
            "target_id" => $this->target_id,
            "image_path"=> $this->image_path,
            "name"=> $this->name
        ];
    }
}