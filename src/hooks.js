const API_KEY = '845558b03f426f8f1b46c3c916a58c11';
const API_URL = 'https://www.food2fork.com/api';

export async function searchRecipesByText(query = 'hummus', count = 10) {
  const api_call = await fetch(`${API_URL}/search?key=${API_KEY}&q=${query}&count=${count}`);
  const data = await api_call.json();
  if (data.error === 'limit') {
    return [];
  }
  return data.recipes;
}

export async function searchRecipesById(id) {
  const api_call = await fetch(`${API_URL}/get?key=${API_KEY}&rId=${id}`);
  const data = await api_call.json();
  return data.recipe;
}