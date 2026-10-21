import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const SUPABASE_URL = 'https://uzkwaznseydineyrecol.supabase.co';
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_NNFB35pxNtko3VHEh38N_Q_uy5g-Gaq';
export const APP_URL = 'https://beetroot-lovat.vercel.app';
export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
