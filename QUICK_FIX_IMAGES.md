# 🔧 Quick Fix: Images Not Loading

## Problem
Images uploaded to Supabase `memories` bucket are not showing in the carousel.

## Root Cause
Missing Supabase credentials in `.env.local` file.

## Solution (5 Minutes)

### Step 1: Get Your Supabase Credentials

1. Go to: https://supabase.com/dashboard
2. Select your **Amor** project
3. Click **Settings** (gear icon) in the left sidebar
4. Click **API** under Project Settings
5. Copy these two values:
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

### Step 2: Update `.env.local`

1. Open the file: `/Users/keshavsunilpawar/Amor/.env.local`
2. Replace the placeholder values with your actual credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
```

### Step 3: Restart Development Server

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

### Step 4: Verify Images Load

1. Go to: `http://localhost:3000/days/rose-day`
2. Scroll to "A Fragrant Memory" section
3. Your images should now appear! 🎉

---

## For Vercel Deployment

Add the same environment variables in Vercel:

1. Go to: https://vercel.com/dashboard
2. Select your **Amor** project
3. Go to **Settings** → **Environment Variables**
4. Add both variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
5. Redeploy your project

---

## Checklist

- [ ] Got Supabase URL and anon key from dashboard
- [ ] Updated `.env.local` with real credentials
- [ ] Restarted `npm run dev`
- [ ] Images now appear on localhost
- [ ] Added environment variables to Vercel
- [ ] Redeployed to Vercel
- [ ] Images appear on production site

---

**After this, your carousel will work perfectly!** 🌹✨
