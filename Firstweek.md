markdown# Valentine's Week Journey - Application Definition

## Project Overview
A romantic Next.js web application featuring 7 themed pages (one for each day of Valentine's week) with time-based unlocking, smooth animations, and personalized content for a long-distance relationship.

**Target User:** Girlfriend (mobile-first experience)  
**Timeline:** February 7-13, 2026 (Rose Day through Kiss Day)  
**Primary Goal:** Create a thoughtful, interactive digital experience to make up for missed Rose Day and celebrate the entire Valentine's week together despite distance

---

## Technical Stack

### Core Framework
- **Next.js latest version +** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Vercel** for deployment

### Animation Libraries
- **Framer Motion** - Page transitions, card animations, scroll-based animations
- **Lottie React** (optional) - Complex animated illustrations
- **React Icons** - Icon library for hearts, locks, themes

### Additional Dependencies
- **date-fns** - Date manipulation and comparison for unlock logic
- **react-intersection-observer** - Trigger animations on scroll
- **next-themes** (optional) - If supporting dark/light mode per day

---

## Application Structure

### File Organization
```
/app
  /page.tsx                    # Landing page with timeline
  /layout.tsx                  # Root layout
  /globals.css                 # Global styles
  /days
    /rose-day/page.tsx         # Day 1: Rose Day
    /propose-day/page.tsx      # Day 2: Propose Day
    /chocolate-day/page.tsx    # Day 3: Chocolate Day
    /teddy-day/page.tsx        # Day 4: Teddy Day
    /promise-day/page.tsx      # Day 5: Promise Day
    /hug-day/page.tsx          # Day 6: Hug Day
    /kiss-day/page.tsx         # Day 7: Kiss Day
/components
  /DayCard.tsx                 # Reusable card for timeline
  /AnimatedBackground.tsx      # Background animations component
  /UnlockTimer.tsx             # Countdown timer for locked days
  /PageTransition.tsx          # Wrapper for page animations
  /FloatingElements.tsx        # Floating hearts, petals, etc.
/lib
  /dateUtils.ts                # Date checking and unlock logic
  /dayData.ts                  # Configuration for each day
/public
  /images                      # Day-specific images
  /animations                  # Lottie JSON files (if used)
```

---

## Core Features

### 1. Landing Page (Timeline View)
**Layout:**
- Vertical scrolling experience
- 7 cards displayed in chronological order
- Smooth parallax scrolling effect
- Animated background (floating hearts/particles)

**Card States:**
- **Locked:** Greyed out, lock icon, countdown timer visible, no click interaction
- **Unlocked:** Full color, glowing effect, clickable, shows day name and theme
- **Visited:** Special indicator (checkmark or different styling)

**Card Hover Effects:**
- Subtle lift (translateY: -8px)
- Glow effect on border
- Slight rotation (1-2 degrees)

**Scroll Animations:**
- Cards fade in and slide up as they enter viewport
- Stagger effect (each card animates 100ms after previous)
- Background elements parallax at different speeds

### 2. Time-Based Unlock System
**Unlock Schedule:**
```
Rose Day:      Feb 7, 2026 - 00:00 (already passed, immediately unlocked)
Propose Day:   Feb 8, 2026 - 00:00
Chocolate Day: Feb 9, 2026 - 00:00
Teddy Day:     Feb 10, 2026 - 00:00
Promise Day:   Feb 11, 2026 - 00:00
Hug Day:       Feb 12, 2026 - 00:00
Kiss Day:      Feb 13, 2026 - 00:00
```

**Unlock Logic:**
- Check current date/time against unlock timestamp
- Store unlock status in state (calculate on component mount)
- Update every minute to check for newly unlocked days
- Smooth transition animation when card unlocks

**Timer Display:**
- Show "Unlocks in: X days, Y hours, Z minutes"
- Update every minute
- Animated countdown numbers

### 3. Page Transitions
**Entry Animations:**
- Fade in from 0 to 1 opacity
- Slide up from bottom (translateY: 50px to 0)
- Duration: 800ms with ease-out timing

**Exit Animations:**
- Fade out
- Slight scale down (0.95)
- Duration: 400ms

**Navigation:**
- Back button to return to timeline (animated)
- "Next Day" teaser at bottom (if next day exists)
- Smooth route transitions using Framer Motion's AnimatePresence

---

## Day-by-Day Specifications

### Day 1: Rose Day (February 7)
**Theme:** First Love, Beginning  
**Color Palette:** 
- Primary: #FF1744 (Deep Red)
- Secondary: #FF80AB (Pink)
- Background: #FFF0F3 (Light Pink)

**Content Structure:**
1. Entry animation with falling rose petals
2. Headline: "I'm Sorry I Missed Rose Day..."
3. Personal apology message
4. Story section: "How It All Started" - your relationship origin
5. Animated timeline of relationship milestones
6. Closing message about making it up this week
7. Floating rose petals in background (using canvas or CSS)

**Animations:**
- Rose petals falling continuously (slow, gentle)
- Text reveals on scroll
- Pulsing heart icon
- Photo gallery with fade-in effects

---

### Day 2: Propose Day (February 8)
**Theme:** Commitment, Deep Connection  
**Color Palette:**
- Primary: #C51162 (Deep Pink)
- Secondary: #F50057 (Bright Pink)
- Background: #FCE4EC (Blush)

**Content Structure:**
1. Entry animation with heart burst effect
2. Headline: "My Promise to You"
3. Message about commitment despite distance
4. Interactive timeline: "Our Journey Together"
5. Milestones with photos/memories
6. Future promises section
7. Animated ring or heart-lock illustration

**Animations:**
- Hearts floating upward
- Timeline reveals on scroll (slide in from sides)
- Sparkle effects on hover over memories
- Pulsing glow on promise statements

---

### Day 3: Chocolate Day (February 9)
**Theme:** Sweetness, Indulgence  
**Color Palette:**
- Primary: #5D4037 (Chocolate Brown)
- Secondary: #FFD700 (Gold)
- Background: #EFEBE9 (Cream)

**Content Structure:**
1. Entry animation with chocolate unwrapping effect
2. Headline: "You're Sweeter Than Chocolate"
3. List of "sweet" things about her (metaphor-based)
4. Favorite memories that were "sweet" moments
5. Interactive chocolate box (click to reveal messages)
6. Message comparing love to chocolate flavors
7. Chocolate pieces floating in background

**Animations:**
- Chocolate pieces gently rotating and floating
- Interactive reveals (click chocolates for messages)
- Melting text effect
- Shimmer/shine on gold elements

---

### Day 4: Teddy Day (February 10)
**Theme:** Comfort, Warmth, Affection  
**Color Palette:**
- Primary: #8D6E63 (Brown)
- Secondary: #FFCCBC (Peach)
- Background: #FFF8E1 (Warm Cream)

**Content Structure:**
1. Entry animation with teddy bear hug
2. Headline: "Wish I Could Hug You Right Now"
3. Message about comfort and being there for each other
4. "Things I Love About You" section (comfort-focused)
5. Virtual hug counter (days until you see each other)
6. Memories of comfort and support
7. Soft teddy bears floating/bouncing in background

**Animations:**
- Gentle bouncing teddy bears
- Warm glow effects
- Soft fade-ins
- Heartbeat animation on hug counter

---

### Day 5: Promise Day (February 11)
**Theme:** Commitment, Future, Trust  
**Color Palette:**
- Primary: #1976D2 (Blue)
- Secondary: #FFFFFF (White)
- Background: #E3F2FD (Light Blue)

**Content Structure:**
1. Entry animation with ribbon untying
2. Headline: "My Promises to You"
3. List of specific, meaningful promises
4. "Our Future Together" vision board
5. Interactive promise cards (flip to reveal)
6. Message about trust and long-distance strength
7. Ribbons or ethereal elements floating

**Animations:**
- Ribbon flowing animation
- Card flip interactions
- Gentle particle effects
- Smooth reveals on scroll

---

### Day 6: Hug Day (February 12)
**Theme:** Warmth, Missing Physical Touch  
**Color Palette:**
- Primary: #FF6F00 (Warm Orange)
- Secondary: #FFE0B2 (Light Orange)
- Background: #FFF3E0 (Cream Orange)

**Content Structure:**
1. Entry animation with arms opening wide
2. Headline: "Sending Virtual Hugs Across the Miles"
3. Message about missing her physical presence
4. "Reasons I Want to Hug You" list
5. Countdown to next time you see each other (prominent)
6. Memory gallery of times together
7. Warm embrace illustration with animation

**Animations:**
- Pulsing warmth effect from center
- Floating embrace symbols
- Countdown with heartbeat animation
- Photo gallery with smooth transitions

---

### Day 7: Kiss Day (February 13)
**Theme:** Romance, Passion, Valentine's Climax  
**Color Palette:**
- Primary: #D50000 (Passionate Red)
- Secondary: #FF8A80 (Light Red)
- Background: #FFEBEE (Soft Red)

**Content Structure:**
1. Entry animation with kiss marks appearing
2. Headline: "Until I Can Kiss You Again"
3. Most romantic, intimate message of the week
4. "What You Mean to Me" deep personal section
5. Special Valentine's Day message (next day is Feb 14)
6. Promise to make next meeting special
7. Kiss marks and hearts in background

**Animations:**
- Kiss marks appearing and fading
- Hearts bursting effect
- Romantic shimmer/sparkle effects
- Smooth, passionate color transitions
- Final "Happy Valentine's Day" reveal for Feb 14

---

## Design System

### Typography
**Primary Font:** Inter or Poppins (modern, clean)  
**Romantic Font:** Dancing Script or Pacifico (for headlines and special messages)  
**Body Text Size:** 16px (mobile), 18px (desktop)  
**Headline Sizes:** 32px (mobile), 48px (desktop)

### Spacing
- Container max-width: 1200px
- Section padding: 4rem (mobile), 6rem (desktop)
- Card gap: 2rem

### Animation Principles
- **Duration:** 400-800ms for most animations
- **Easing:** ease-out for entrances, ease-in-out for interactions
- **Performance:** Use transform and opacity only (GPU-accelerated)
- **Reduced Motion:** Respect prefers-reduced-motion media query

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## User Experience Flow

### First Visit (Rose Day - Feb 7)
1. User opens link you send
2. Lands on timeline page with entrance animation
3. Sees Day 1 (Rose Day) unlocked and glowing
4. Other 6 days are locked with countdown timers
5. Clicks Rose Day card
6. Experiences full Rose Day page with animations
7. Returns to timeline via back button
8. Sees Rose Day marked as "visited"

### Subsequent Days
1. User returns each day (or you send reminder)
2. New day is unlocked with special unlock animation
3. Previous days remain accessible
4. Builds anticipation for remaining locked days
5. Final day (Kiss Day) leads into Valentine's Day

### Navigation Patterns
- **Timeline → Day Page:** Click card
- **Day Page → Timeline:** Back button (top-left)
- **Day Page → Next Day:** "Next Day" button at bottom (if unlocked)

---

## Technical Implementation Notes

### Date Checking Logic
```typescript
// Example structure (not actual code)
const unlockDates = {
  'rose-day': new Date('2026-02-07T00:00:00'),
  'propose-day': new Date('2026-02-08T00:00:00'),
  // ... etc
}

function isUnlocked(dayKey: string): boolean {
  const unlockDate = unlockDates[dayKey];
  const now = new Date();
  return now >= unlockDate;
}
```

### Local Storage Keys
- `visited_days`: Array of day keys user has viewed
- `last_visit`: Timestamp of last visit
- (Optional) `music_preference`: Boolean for background music

### Performance Optimization
- Lazy load images with Next.js Image component
- Code split each day page (automatic with App Router)
- Preload next unlocked day's content
- Optimize animation frames (use requestAnimationFrame)
- Compress images (WebP format)

### Accessibility
- ARIA labels on all interactive elements
- Keyboard navigation support
- Focus indicators on cards and buttons
- Alt text for all images
- Respect reduced motion preferences

---

## Content Guidelines

### Writing Tone
- Warm, personal, intimate
- Apologetic for Rose Day but excited for the week
- Specific references to your relationship
- Balance between romantic and sincere
- Avoid generic phrases - make it unique to you two

### Message Length
- Headline: 5-10 words
- Introduction: 2-3 sentences
- Main content: 3-5 paragraphs
- Closing: 1-2 sentences

### Personal Elements to Include
- Inside jokes
- Specific dates and memories
- Her favorite things
- Your favorite things about her
- Future plans together
- How you handle long distance

---

## Deployment Checklist

### Pre-Launch
- [ ] Test all 7 day pages
- [ ] Verify unlock dates are correct
- [ ] Test on her phone type (iOS/Android)
- [ ] Test in her timezone
- [ ] Check all animations on mobile
- [ ] Optimize images
- [ ] Test slow internet connection
- [ ] Proofread all content

### Launch Day (Feb 7)
- [ ] Deploy to Vercel
- [ ] Test production URL
- [ ] Send her the link with sweet message
- [ ] Optional: Send daily reminder messages

### Ongoing
- [ ] Monitor for any issues
- [ ] Be available to help if she has trouble
- [ ] Celebrate when she visits each day

---

## Optional Enhancements

### If Time Permits
1. **Background Music:** Soft romantic instrumental (mutable)
2. **Voice Messages:** Record short audio messages for each day
3. **Photo Upload:** Let her upload photos to shared days
4. **Guestbook:** Comment section for her reactions
5. **Countdown Widget:** Days until you see each other (always visible)
6. **Share Feature:** Let her screenshot or share specific pages
7. **Dark Mode:** Evening-friendly viewing option
8. **Notifications:** Browser notifications when new day unlocks

### Future Ideas
- Anniversary edition with different themes
- Monthly surprise pages
- Collaborative memory timeline

---

## Success Metrics

### Primary Goals
- She visits all 7 days
- She feels appreciated and loved
- Makes up for missed Rose Day
- Strengthens your connection despite distance

### Emotional Impact
- Creates anticipation each day
- Shows thoughtfulness and effort
- Gives her something special during Valentine's week
- Makes distance feel smaller

---

## Notes for Development

### Priority Features (Must-Have)
1. Time-based unlocking system
2. Smooth animations
3. Mobile-first responsive design
4. All 7 themed day pages
5. Personal, heartfelt content

### Nice-to-Have Features
1. Background music
2. Advanced animations (Lottie)
3. Share functionality
4. Dark mode

### Keep in Mind
- She's experiencing this alone, make it feel interactive
- Long distance makes physical tokens impossible, this is your gift
- First Valentine's week together is special - make it memorable
- Quality over complexity - smooth experience > fancy features

---

## Support Contact
If you encounter any issues during development, refer back to this document for clarification. Good luck creating something beautiful for her! 💕 Sonnet 4.5