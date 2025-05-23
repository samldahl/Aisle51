// Import Supabase client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Initialize Supabase client
const supabaseUrl = 'https://ynrzilnqzbpndjovjpik.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlucnppbG5xemJwbmRqb3ZqcGlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5NjMzMzYsImV4cCI6MjA2MzUzOTMzNn0.Cf8wyPlpd_FUBoOc-cMnYX_d9thuZf6clj69eFGu1Vg'
const supabase = createClient(supabaseUrl, supabaseKey)

// Handle form submission
document.querySelector('.email-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  
  const emailInput = document.querySelector('.email-input')
  const email = emailInput.value.trim()
  
  try {
    const { data, error } = await supabase
      .from('waitlist')
      .insert([{ email }])
    
    if (error) throw error
    
    // Clear the input and show success message
    emailInput.value = ''
    alert('Thank you for joining our waitlist!')
  } catch (error) {
    console.error('Error:', error.message)
    alert('Sorry, there was an error. Please try again.')
  }
}) 