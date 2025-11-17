import { createSlice } from "@reduxjs/toolkit";
import { createClient } from "@supabase/supabase-js";


const supabase =createClient(
     'https://srbpwyxjbrbxzlerdust.supabase.co',
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyYnB3eXhqYnJieHpsZXJkdXN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NzczMjksImV4cCI6MjA3NzU1MzMyOX0.80SKnY8hLjhOAqHb3XhmbbbAHBCG7r4SyUTtfEr8yIk'
)

export const getPortfolioImages = async () => {
    let { data, error } = await supabase
    .storage
    .from('portfolio-images')
    .list("helo",
      
      
    );


    if (error) {
        console.error("Error fetching images:", error);
        return error;
    }   
   
    return data.map(file=>({
        name:badg1.png,
        url:`https://srbpwyxjbrbxzlerdust.supabase.co/storage/v1/object/public/portfolio-images/helo/badg1.png`,
    }));
}