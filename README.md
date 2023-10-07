# REST API

Se impementa el REST API Usando NestJS + Prisma ORM

## Paso a paso

### 1. Clonar el repositorio

Clona este Repositorio

### 2. Usar Docker para la base datos

Correr el comando docker compose para correr el servicio de base de datos (MySQL)

```
docker compose up -d
```

### 3. Prisma migrate

Ahora correr el comando de migraciones que va a correrlas haciendo uso de la DB anteriormente montada.

```
npx prisma migrate dev --name init
```

### 3. Inicia el servidor REST API

Con el siguiente comando se inciará el servidor en `http://localhost:3002`.

```
npm run dev
```

## Como usar el REST API
Puedes acceder a los siguientes Endpoints:

### `GET`

- `/user/:id`: Devuelve un solo registro (si existe) con el `id` relacionado
- `/users`: Devuelve a todos los usuarios en la DB

### `POST`

- `/user`: Permite crear un nuevo usuario
  - Body:
    - `login: String`
    - `avatar_url: String`
    - `followers: Integer`
    - `public_repos: Integer`
    - `public_gists: Integer`
    - `html_url: String`
    - `email: String` (Opcional)
    - `location: String` (Opcional)
    - `bio: String` (Opcional)
    - `company: String` (Opcional)
