import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

export type Post = {
  id: number
  title: string
  content: string
  category: string  // 'ir' | 'pr' | 'notice' | 'resource'
  file_url?: string
  file_name?: string
  created_at: string
  author?: string
}
