<?php

class Database {
    private string $host;
    private string $dbname;
    private string $username;
    private string $password;
    private PDO $pdo;

    public function __construct() {
        $this->host = "localhost";
        $this->dbname = "targetle";
        $this->username = "postgres";
        $this->password = "postgres";

        try {
            $dsn = "pgsql:host={$this->host};dbname={$this->dbname};";
            $this->pdo = new PDO($dsn, $this->username, $this->password);
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }
    }

    private function query($sql, $params = []) {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }

    public function fetch($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function fetchAll($sql, $params = []) {
        $stmt = $this->query($sql, $params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}