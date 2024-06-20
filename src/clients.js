import { createClient } from '@supabase/supabase-js';

const URL = import.meta.env.VITE_SUPABABSE_PROJECT_URL;
const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY;

console.log('URL', URL);
console.log('API_KEY', API_KEY);

export const supabase = createClient(URL, API_KEY);
