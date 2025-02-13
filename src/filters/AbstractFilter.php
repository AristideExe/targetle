<?php

abstract class AbstractFilter
{
    /**
     * Constructeur du filtre
     * @param array $data Données du filtre
     */
    public function __construct(array $data = [])
    {
        $this->hydrate($data);
    }

    /**
     * Hydrate l'objet filtre
     * @param array $data Données du filtre
     */
    private function hydrate(array $data): void
    {
        foreach ($data as $key => $value) {
            $this->$key = $value;
        }
    }

    /**
     * Récupérer la condition en SQL liée au filtre
     * @return string Condition SQL
     */
    public abstract function getCondition() : string;

    /**
     * Récupérer les paramètres à injecter dans la requête SQL
     * @return array Liste des paramètres
     */
    public abstract function getParams() : array;
}