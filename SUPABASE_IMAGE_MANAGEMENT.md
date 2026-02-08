# Supabase Image Management Guide

This guide explains how to upload and manage images for the Amor project using Supabase Storage.

## 📁 Storage Structure

Your Supabase Storage is organized by **buckets** - one bucket per day/theme:

```
Supabase Storage
├── memories (Rose Day - Horizontal Carousel)
├── propose-day (Future: Propose Day images)
├── teddy-day (Future: Teddy Day images)
├── promise-day (Future: Promise Day images)
└── ... (other days)
```

---

## 🌹 Rose Day - Horizontal Carousel

### Bucket Name: `memories`

The Rose Day page uses a **horizontal scroll carousel** that displays all images from the `memories` bucket.

### How It Works:
- The carousel fetches **ALL images** from the `memories` bucket
- Images scroll horizontally as you scroll down vertically
- Images are displayed in alphabetical order by filename
- Each image appears in a beautiful Polaroid-style frame

### Steps to Upload Images:

#### 1. **Go to Supabase Dashboard**
   - Navigate to: https://supabase.com/dashboard
   - Select your project: **Amor**
   - Click on **Storage** in the left sidebar

#### 2. **Create/Access the `memories` Bucket**
   - If the bucket doesn't exist, click **"New bucket"**
   - Name it: `memories`
   - Make it **Public** (toggle the public option ON)
   - Click **"Create bucket"**

#### 3. **Upload Your Images**
   - Click on the `memories` bucket
   - Click **"Upload files"**
   - Select multiple images (5-10 recommended for best effect)
   - **Naming Convention**: Use descriptive names like:
     - `01-sunset-beach.jpg`
     - `02-first-date.jpg`
     - `03-coffee-shop.jpg`
     - (The numbers ensure display order)

#### 4. **Image Best Practices**
   - **Format**: JPG, PNG, or WebP
   - **Size**: 1MB - 3MB per image (compressed for web)
   - **Dimensions**: Square images work best (1:1 aspect ratio)
   - **Recommended**: 1000x1000px or 1200x1200px
   - **Quality**: High quality but web-optimized

#### 5. **Verify Upload**
   - After uploading, you should see all images listed in the bucket
   - Each image will have a public URL
   - The carousel will automatically fetch and display them!

---

## 🎯 Future Days - Organizing by Buckets

For other days (Propose Day, Teddy Day, etc.), create separate buckets:

### Example: Propose Day

1. **Create Bucket**: `propose-day`
2. **Make it Public**
3. **Upload images** related to your proposal
4. **Use the HorizontalScrollGallery component** in the Propose Day page:

```tsx
<HorizontalScrollGallery
    bucketName="propose-day"
    title="The Proposal"
    subtitle="The moment I asked you to be mine forever"
    imageStyle="polaroid"
/>
```

### Example: Teddy Day

1. **Create Bucket**: `teddy-day`
2. **Upload cute/teddy-related images**
3. **Use in Teddy Day page**:

```tsx
<HorizontalScrollGallery
    bucketName="teddy-day"
    title="Cuddly Moments"
    subtitle="Every hug with you feels like home"
    imageStyle="modern"
/>
```

---

## 🔧 Bucket Policies (Important!)

Each bucket MUST have public read access for images to display on the website.

### Setting Up Public Access:

1. Go to **Storage** → Select your bucket
2. Click on **Policies** tab
3. Click **"New Policy"**
4. Select **"For full customization"**
5. Use this policy:

**Policy Name**: `Public Read Access`

**Target Roles**: `public`

**Allowed Operations**: `SELECT`

**Policy Definition**:
```sql
(bucket_id = 'memories'::text)
```

6. Click **"Save"**

Repeat this for each bucket you create (`propose-day`, `teddy-day`, etc.)

---

## 🖼️ Image Style Options

The `HorizontalScrollGallery` component supports 3 styles:

### 1. **Polaroid** (Default - Rose Day)
- White frame with border
- Caption below image
- Vintage aesthetic
```tsx
imageStyle="polaroid"
```

### 2. **Modern**
- Glassmorphism effect
- Sleek and contemporary
- Subtle borders
```tsx
imageStyle="modern"
```

### 3. **Minimal**
- No frame, just rounded corners
- Clean and simple
- Focus on the image
```tsx
imageStyle="minimal"
```

---

## 📝 Quick Reference: Upload Checklist

- [ ] Create bucket in Supabase Storage
- [ ] Make bucket **Public**
- [ ] Set up **Public Read Access** policy
- [ ] Upload images (JPG/PNG, 1-3MB, square format)
- [ ] Name files with numbers for order (01-, 02-, etc.)
- [ ] Verify images appear in bucket
- [ ] Refresh your website to see the carousel!

---

## 🔍 Troubleshooting

### Images Not Showing?

1. **Check Bucket Name**: Ensure it matches the `bucketName` prop in your code
2. **Verify Public Access**: Make sure the bucket is public and has the correct policy
3. **Check Environment Variables**: Ensure these are set in Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **Clear Cache**: Hard refresh your browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
5. **Check Console**: Open browser DevTools → Console for any errors

### Images Loading Slowly?

- Compress images before uploading (use tools like TinyPNG or Squoosh)
- Recommended max size: 2MB per image
- Use WebP format for better compression

---

## 🎨 Customizing the Carousel

You can customize the carousel for each day by passing different props:

```tsx
<HorizontalScrollGallery
    bucketName="your-bucket-name"      // Supabase bucket
    title="Your Title"                  // Main heading
    subtitle="Your subtitle text"       // Text below carousel
    imageStyle="polaroid"               // polaroid | modern | minimal
/>
```

---

## 📱 Mobile vs Desktop

The carousel works beautifully on both:
- **Mobile**: Swipe-friendly horizontal scrolling
- **Desktop**: Smooth scroll-triggered horizontal movement

Images automatically adjust size:
- Mobile: 80% of viewport width
- Desktop: Fixed 400px width

---

## 🚀 Next Steps

1. **Upload images to `memories` bucket** for Rose Day
2. **Test the carousel** on localhost
3. **Deploy to Vercel** - images will automatically work in production!
4. **Create more buckets** for other days as you build them

---

## 💡 Pro Tips

- **Consistent Naming**: Use a numbering system (01-, 02-) to control display order
- **Batch Upload**: Upload all images at once for efficiency
- **Image Quality**: Balance quality and file size for best performance
- **Backup**: Keep original high-res images on your computer
- **Captions**: The component auto-generates "Memory 1", "Memory 2" captions
- **Reusability**: Use the same component across all day pages!

---

**Need Help?** Check the Supabase documentation: https://supabase.com/docs/guides/storage

**Happy Memory Sharing! 🌹💕**
