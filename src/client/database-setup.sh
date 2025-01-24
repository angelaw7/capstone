#!/bin/bash

# Database file
DB_FILE="plutos.db"

# Check if the "User" table exists
TABLE_EXISTS=$(sqlite3 $DB_FILE "SELECT name FROM sqlite_master WHERE type='table' AND name='Users';")

if [ "$TABLE_EXISTS" != "Users" ]; then
  echo "Users table does not exist. Creating it..."
  
  # Create the "User" table
  sqlite3 $DB_FILE "CREATE TABLE IF NOT EXISTS Users (
    userId INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255),
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
  );"
  
  echo "User table created."
else
  echo "User table already exists."
fi
