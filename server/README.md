# ABC Academy server

## Configure MongoDB

Create a local environment file from the example:

```powershell
Copy-Item .env.example .env
```

The example uses a MongoDB server running on `127.0.0.1:27017`. Install and start
MongoDB locally before starting the API, or replace `MONGO_URI` in `.env` with
your MongoDB Atlas connection string. Keep `.env` private and never commit
database credentials.

Set a private, random `JWT_SECRET` in `.env`, then start the server from this
directory:

```powershell
npm run dev
```

The API waits for MongoDB to connect before listening. If the connection fails,
check that `MONGO_URI` is set correctly and that the database is running and
reachable.

To create the initial admin account after the database is available:

```powershell
node seed.js
```
