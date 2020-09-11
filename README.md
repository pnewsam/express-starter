# Express Starter

This is a starter repo for an Express server with Typescript, TypeORM, Postgres.

## Setup

### Repository

Clone the repository. Then install the dependencies.

```
npm install
```

### Database

Create your Postgres database.

```
psql
CREATE DATABASE my_database_name;
```

Update the following keys in `ormconfig.json`.

```
{
  "username": "postgres", // your username
  "password": "postgres", // your password
  "database": "my_database_name" // your database
}
```

Add the uuid extension to your Postgres database if it doesn't exist.

```
psql
user.name=# \c my_database_name
user.name=# CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```
