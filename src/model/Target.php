<?php

require_once(dirname(__FILE__) ."/Gender.php");
require_once(dirname(__FILE__) ."/Mission.php");
require_once(dirname(__FILE__) ."/Nationality.php");

class Target {

    private string $target_id;
    private string $image_path;
    private string $name;
    private Gender $gender;
    private Mission $mission;
    private int $age;
    private Nationality $nationality;

    public function __construct(
        string $target_id,
        string $image_path,
        string $name,
        Gender $gender,
        Mission $mission,
        int $age,
        Nationality $nationality
    ) {
        $this->target_id = $target_id;
        $this->image_path = $image_path;
        $this->name = $name;
        $this->gender = $gender;
        $this->mission = $mission;
        $this->age = $age;
        $this->nationality = $nationality;
    }
}

$target = new Target("88888", "Dalia-Margolis.webp", "Dalia Margolis", Gender::F, Mission::the_showstopper, 30, Nationality::IL);

echo var_dump($target);