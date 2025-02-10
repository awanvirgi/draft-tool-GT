import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

export const fetchCharData = async() => {
    const { data: characters, error } = await supabase
        .from('characters')
        .select('*')
        if(error) throw error;
        return characters
}