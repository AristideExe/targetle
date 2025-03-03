<?php

require_once(dirname(__FILE__) ."/TranslatedTable.php");

class Destination extends TranslatedTable
{
    public function __construct(string $id)
    {
        parent::__construct($id);
        $this->getTranslations("targetle.destination", "targetle.t_destination", "destination_id", $id);
    }
}