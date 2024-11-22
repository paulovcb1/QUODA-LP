export const fetchCocktailInfo = async (cocktailName) => {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(cocktailName)}`);
    const data = await response.json();

    if (data.drinks) {
      const drink = data.drinks[0];
      const ingredients = [drink.strIngredient1, drink.strIngredient2, drink.strIngredient3, drink.strIngredient4]
        .filter(Boolean) // Remove valores nulos ou indefinidos
        .join(', ');

      // Formato de texto puro
      return `
        Nome: ${drink.strDrink}\n
        Categoria: ${drink.strCategory}\n
        Ingredientes: ${ingredients}\n
        Instruções: ${drink.strInstructions}\n
      `;
    }

    return 'Desculpe, não encontrei informações sobre esse coquetel.';
  } catch (error) {
    console.error('Erro ao buscar informações sobre o coquetel:', error);
    return 'Houve um problema ao obter informações do servidor.';
  }
};
