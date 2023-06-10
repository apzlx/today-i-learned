import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pebpglglswlebhyehylb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlYnBnbGdsc3dsZWJoeWVoeWxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYxOTg2MDYsImV4cCI6MjAwMTc3NDYwNn0.3mrfmRzcTvTkzIEH8aATT_zXaIBhabLhUso36mxgepU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
