<?php

require_once(dirname(__FILE__) ."/AbstractFilter.php");

class TargetFilter extends AbstractFilter
{
    protected string $startWith;
    protected array $notIn;

    public function getCondition() : string
    {
        $startWithCondition = isset($this->startWith) ? "LOWER(name) LIKE :likeString" : "TRUE";

        // La condition récupère les identifiants de toutes les cibles déjà choisies et les retire de la liste des cibles proposées
        $notInCondition = !empty($this->notIn) ? "target_id NOT IN (SELECT target_id FROM targetle.target 
            WHERE target_id = ANY(STRING_TO_ARRAY(:notIn , ',')::uuid[]))" : "TRUE";

        return "$startWithCondition AND $notInCondition";
    }

    public function getParams(): array
    {
        $params = [];
        if (isset($this->startWith)) { $params["likeString"] = strtolower($this->startWith) . "%"; }
        if (!empty($this->notIn)) { $params["notIn"] = implode(',', $this->notIn); }

        return $params;
    }
}