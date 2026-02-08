import { createClient } from '@supabase/supabase-js';

// Provide dummy defaults to prevent createClient from throwing during build/prerendering
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Supabase credentials missing. Local experience will use placeholders.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
