import { createClient } from "@supabase/supabase-js";

const API_KEY = process.env.REACT_APP_SUPABASE_KEY;
const SUPABASE_URL = "https://ciidzvjthrewaklaiiww.supabase.co";

export const supabase = createClient(SUPABASE_URL, API_KEY);
