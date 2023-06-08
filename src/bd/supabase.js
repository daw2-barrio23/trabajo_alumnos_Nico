import { createClient } from '@supabase/supabase-js'
//Creando la conexión con supabase
const supabaseUrl = 'https://lpboeckdzbhlbmqjcicl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYm9lY2tkemJobGJtcWpjaWNsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NzE3NjYzNSwiZXhwIjoxOTkyNzUyNjM1fQ.MMhEa9RU4B-ziTMYL30cAmqqHKPJnGWFc6y3BYqtArw'

//exportamos la conexión
export const supabase = createClient(supabaseUrl, supabaseKey)
