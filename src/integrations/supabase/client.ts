// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://nhdlftyhdtwwhadcfeza.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZGxmdHloZHR3d2hhZGNmZXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMxNDg2NjksImV4cCI6MjA0ODcyNDY2OX0.haWWPZZ3gCVLQbOHIMGRgbdMYpEoHUWkfDanYrqSuSA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);