import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

export const SUPABASE_URL = 'https://wnljwatwaxngeinxduda.supabase.co';
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndubGp3YXR3YXhuZ2VpbnhkdWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU2OTI2MzMsImV4cCI6MjExMTI2ODYzM30.J88Kzd_EBsio70YT8cOqDw0etS3jLbVfoltfJvycM74';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);