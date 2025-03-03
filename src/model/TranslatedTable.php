<?php

require_once(dirname(__FILE__) ."/Lang.php");

abstract class TranslatedTable
{
    public string $id;
    public array $translations;

    public function __construct(string $id){
        $this->id = $id;
    }

    protected function getTranslations(string $tableName, string $translationTableName, string $primaryKey, string $id){
        $db = new Database();
        $en_label = $db->fetch("SELECT label FROM " . $tableName . " WHERE " . $primaryKey . " = :id", ["id" => $id]);
        $translations = $db->fetchAll("SELECT language, label FROM " . $translationTableName . " WHERE " . $primaryKey . " = :id", ["id" => $id]);

        $this->translations[Lang::en->name] = $en_label["label"];
        foreach($translations as $translation){
            $this->translations[Lang::from($translation["language"])->name]= $translation["label"];
        }
    }
}