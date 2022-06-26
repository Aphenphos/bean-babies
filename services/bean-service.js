const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getBeans(title, color, releaseYear, { start, end }) {
    let query = client
        .from('beanie_babies')
        .select(`*`,
            { count: 'exact' });

    if (title) {
        query.ilike('title', title);
    }

    if (color) {
        query.ilike('color', color);
    }

    if (releaseYear) {
        query.match({ releaseYear });
    }

    query = query.range(start, end);

    const response = await query;
    return response;
}

export async function getBean(id) {
    const response = await client
        .from('beanie_babies')
        .select(`*`)
        .match({ id: id })
        .single();
        
    return response.data;
}