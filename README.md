# A B C Academy — MERN Stack Website

This matches the layout in your screenshots: hero + info cards + headmaster quote (Home),
Notice Board + Events & Achievements, Academics & Facilities + Quick Links + Gallery preview,
full Gallery, testimonials + footer, and Teacher/Admin login with a simple admin dashboard for
posting notices.

## Structure
```
abc-academy/
  server/   -> Express + MongoDB API
  client/   -> React (Vite) frontend
```

## 1. Backend setup

```bash
cd server
npm install
cp .env.example .env   # then edit .env with your real MongoDB URI and a strong JWT_SECRET
```

Make sure MongoDB is running locally, or use a MongoDB Atlas connection string in `MONGO_URI`.

Create the first admin account:
```bash
node seed.js
```
This creates `admin@abcacademy.com` / `ChangeMe123!` — log in once and change the password
by adding a "change password" route, or update it directly in the database.

Start the API:
```bash
npm run dev
```
Runs on http://localhost:5000. Health check: `GET /api/health`.

## 2. Frontend setup

```bash
cd client
npm install
npm run dev
```
Runs on http://localhost:5173 and proxies `/api` calls to the backend (see `vite.config.js`).

Drop your real images into `client/public/`:
- `logo.png` — the school crest shown in the navbar
- `hero-image.jpg` — the homepage hero photo
- `headmaster.jpg` — headmaster photo for the quote card

## 3. How the pieces map to your screenshots

| Screenshot | Page/Component |
|---|---|
| Hero + slide-out menu | `Home.jsx` + `Navbar.jsx` |
| Info cards + headmaster quote + legacy text | `Home.jsx` |
| Notice Board + Events & Achievements | `Notices.jsx` (pulls from `/api/notices` and `/api/events`) |
| Academics & Facilities, Quick Links, Gallery preview | `Academics.jsx` |
| What People Say + Footer | `Contact.jsx` + `Footer.jsx` |
| Teacher Login / Admin Login buttons | `Navbar.jsx` → `LoginForm.jsx` |

## 4. Auth model

- `User` model has a `role` of `"admin"` or `"teacher"`.
- Only an admin can create new teacher/admin accounts (`POST /api/auth/register`, admin-only).
- Both teachers and admins can post notices/events/gallery images; only admins can delete them.
- JWT is stored in `localStorage` (`abc_user`) on the frontend via `AuthContext.jsx`.

## 5. Next steps you'll likely want

- Add image upload (Multer + local disk or Cloudinary) instead of pasting image URLs directly
  into the Gallery/Events forms — the `multer` package is already in `package.json`, just needs
  an upload route wired in.
- Add a "change password" endpoint for the seeded admin account.
- Add pagination once notices/gallery grow large.
- Deploy: backend to Render/Railway, frontend to Vercel/Netlify, MongoDB Atlas for the database.
