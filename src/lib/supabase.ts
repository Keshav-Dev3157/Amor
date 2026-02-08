import { createClient } from '@supabase/supabase-js';

// Provide dummy defaults to avoid "Invalid URL" errors during build/prerendering
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Extra safety: ensure the URL actually looks like a URL
const isValidUrl = supabaseUrl.startsWith('http');

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Supabase credentials missing. Local/Build experience will use placeholders.');
}

// Only create the client if we have a valid-looking URL to prevent build crashes
export const supabase = isValidUrl
    ? createClient(supabaseUrl, supabaseAnonKey)
    : ({} as any);
