# My Portfolio (MERN)

A personal portfolio/resume site built with MongoDB, Express, React (Vite), and Node.

```
client/   React + Tailwind frontend
server/   Express + MongoDB API (projects + contact form)
```

## 1. Personalize it

Edit [client/src/data/profile.js](client/src/data/profile.js) with your real name, title,
skills, experience, education, and links. Drop a `resume.pdf` into `client/public/` if you
want the "Download Resume" button to work.

## 2. Local development

```bash
npm run install:all   # installs client + server deps
```

Copy the env files and fill them in:

```bash
cp server/.env.example server/.env
cp client/.env.example client/.env
```

- `server/.env` needs a `MONGO_URI` (see step 3) and an `ADMIN_KEY` (any long random string —
  used to protect the endpoint that adds projects).
- `client/.env` can be left as-is for local dev.

Then, from the repo root:

```bash
npm run dev
```

This runs the client (http://localhost:5173) and server (http://localhost:5000) together.
The Vite dev server proxies `/api` requests to the backend.

## 3. Set up MongoDB Atlas (free)

1. Create a free cluster at https://www.mongodb.com/cloud/atlas.
2. Add a database user and password.
3. Under Network Access, allow access from anywhere (`0.0.0.0/0`) so Render can connect.
4. Copy the connection string into `MONGO_URI` in `server/.env` (and later, Render's env vars).

You don't have to add projects manually — the site shows fallback projects from
`profile.js` until you `POST` some to the API, e.g.:

```bash
curl -X POST https://your-api.onrender.com/api/projects \
  -H "Content-Type: application/json" \
  -H "x-admin-key: <your ADMIN_KEY>" \
  -d '{"title":"Project name","description":"What it does","tech":["React","Node"],"link":"https://..."}'
```

## 4. Deploy for free

**Backend — Render**
1. Push this repo to GitHub.
2. On https://render.com, create a new "Web Service" from your repo.
3. Set the root directory to `server`, build command `npm install`, start command `npm start`.
4. Add environment variables: `MONGO_URI`, `ADMIN_KEY`, `CLIENT_URL` (your Vercel URL once you
   have it, e.g. `https://your-portfolio.vercel.app`).

**Frontend — Vercel**
1. On https://vercel.com, import the same GitHub repo.
2. Set the root directory to `client`.
3. Framework preset: Vite. Build command `npm run build`, output directory `dist`.
4. Add environment variable `VITE_API_URL` set to your Render backend URL
   (e.g. `https://your-portfolio-api.onrender.com`).
5. Deploy — Vercel gives you a free `https://your-project.vercel.app` URL you can share
   with employers.

Both Render and Vercel auto-redeploy on every push to `main`, so once this is set up,
`git push` is all you need.

Note: Render's free tier spins down after inactivity, so the first request after a while
may take ~30s to wake up.
