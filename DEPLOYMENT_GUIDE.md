# 🚀 Deployment Guide - Vercel (Both Client & Server)

## Architecture
```
Your Vercel Project
├── /client          → React app (served as static + rewrites)
├── /server          → Express route handlers
└── /api/index.js    → Express app (serverless function)
```

## Prerequisites
- GitHub account with your repo pushed
- MongoDB Atlas account (free tier available)
- Vercel account (free tier available)

## Step 1: Prepare Your Repo

### Add to `.gitignore` (if not already there)
```bash
node_modules/
.env
.env.local
.DS_Store
build/
dist/
```

### Commit and Push to GitHub
```bash
git add .
git commit -m "Setup for Vercel deployment"
git push origin main
```

## Step 2: Deploy to Vercel

### Option A: Using Vercel CLI (Fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts and it will guide you through deployment.

### Option B: Using Vercel Dashboard (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your repository
5. **Important Settings:**
   - Framework Preset: **Other** (mono-repo setup)
   - Root Directory: Do NOT change
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/build`

6. Click "Environment Variables" and add:
   ```
   DATABASE_URL = your-mongodb-atlas-url
   JWT_SECRET  = your-secret-key (min 32 chars)
   REACT_APP_API_URL = https://your-project.vercel.app/api
   ```

7. Click "Deploy"

## Step 3: Set Environment Variables

After initial deploy, go to:
**Project Settings → Environment Variables**

Add these variables:
| Variable | Value | Example |
|----------|-------|---------|
| `DATABASE_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.net/?appName=xyz` |
| `JWT_SECRET` | Secret for JWT tokens | Generate strong secret (32+ chars) |
| `REACT_APP_API_URL` | API URL for client | `https://your-project.vercel.app/api` |

### Generate JWT_SECRET safely:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Step 4: Configure MongoDB Atlas

### Allow Vercel IP
1. Go to MongoDB Atlas → Network Access
2. Click "Add IP Address"
3. Option 1: Add `0.0.0.0/0` (allow all - for testing only)
4. Option 2: Get Vercel's static IPs and add them

**Note**: Vercel's serverless IPs are dynamic, so `0.0.0.0/0` is easier for development.

## Step 5: Test Your Deployment

### Test API
```bash
curl https://your-project.vercel.app/api/health
```

Should return: `{"status":"ok","timestamp":"..."}`

### Test Full App
- Visit: `https://your-project.vercel.app`
- Try signing up / logging in
- Create a post
- Like a post

## Local Development

### Development Server
```bash
# Terminal 1: Start Express server (traditional)
cd server && npm start

# Terminal 2: Start React dev server
cd client && npm start
```

Your app will be available at `http://localhost:3000`

### Using .env files locally
```bash
# server/.env
DATABASE_URL=mongodb+srv://your-credentials@cluster.net
JWT_SECRET=local-secret-key
PORT=5001

# client/.env.local
REACT_APP_API_URL=http://localhost:5001
```

## Troubleshooting

### "Cannot find module" errors
→ Make sure `database_url` and `JWT_SECRET` are set in Vercel

### "CORS errors"
→ Check that `VERCEL_URL` is properly set (Vercel does this automatically)
→ Verify `REACT_APP_API_URL` includes the full domain

### "Database connection failed"
→ Check MongoDB whitelist allows your IP
→ Verify `DATABASE_URL` is correct and complete
→ Test connection string locally first

### "Build fails"
→ Check build logs in Vercel dashboard for errors
→ Common: Missing `npm install` in root (it should be automatic)

## Build Output Example
```
✓ client: 159 kB (gzipped)
✓ api/index.js: 45.2 kB
✓ Deployment complete!
→ Live at: https://your-project.vercel.app
```

## Production Checklist
- [ ] MongoDB Atlas set up with correct connection string
- [ ] JWT_SECRET is strong (32+ characters) and secret
- [ ] MongoDB IP whitelist includes 0.0.0.0/0 or Vercel IPs
- [ ] `REACT_APP_API_URL` points to your Vercel domain
- [ ] All environment variables set in Vercel dashboard
- [ ] Client builds successfully: `npm run build` in `/client`
- [ ] Routes work: Test signup, login, create post
- [ ] API health check passes: `/api/health` returns `{"status":"ok"}`

## Roll Back Deployment
If something breaks, Vercel keeps deployment history:
1. Go to Deployments tab
2. Click the previous working deployment
3. Click "Redeploy"

---

**Your deployment is done! 🎉**
- Frontend: `https://your-project.vercel.app`
- API: `https://your-project.vercel.app/api`
