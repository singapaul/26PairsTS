// supabaseClient.ts
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://byjrcblscfvbadateaak.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5anJjYmxzY2Z2YmFkYXRlYWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzODY2MDAsImV4cCI6MjAxNDk2MjYwMH0.9RLvf9h4Vit8m6Ml2P_O9QvYxD8J-6VEQSpwd7fzinU'

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!)
 