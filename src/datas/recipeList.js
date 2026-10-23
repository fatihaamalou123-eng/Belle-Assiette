import pizzaImg from '../assets/pizza.jpg'
import pastaImg from '../assets/pasta.jpg'
import saladImg from '../assets/salad.jpg'
import burgerImg from '../assets/burger.jpg'
import soupImg from '../assets/soup.jpg'
import pancakeImg from '../assets/pancake.jpg'
import tacoImg from '../assets/tacos.jpg'
import couscousImg from '../assets/couscous.jpg'
import sushiImg from '../assets/sushi.jpg'

export const recipeList = [
	{
		name: 'Pizza Margherita',
		category: 'italien',
		id: '1ed',
		isBestSale: true,
		light: 2,
		water: 3,
		cover: pizzaImg
	},
	{
		name: 'Pâtes Carbonara',
		category: 'italien',
		id: '2ab',
		isBestSale: false,
		light: 1,
		water: 2,
		cover: pastaImg
	},
	{
		name: 'Salade César',
		category: 'entrée',
		id: '3sd',
		isBestSale: false,
		light: 1,
		water: 1,
		cover: saladImg
	},
	{
		name: 'Burger Maison',
		category: 'fast-food',
		id: '4kk',
		isBestSale: true,
		light: 2,
		water: 2,
		cover: burgerImg
	},
	{
		name: 'Soupe de Légumes',
		category: 'entrée',
		id: '5pl',
		isBestSale: false,
		light: 1,
		water: 2,
		cover: soupImg
	},
	{
		name: 'Pancakes',
		category: 'dessert',
		id: '6uo',
		isBestSale: true,
		light: 1,
		water: 1,
		cover: pancakeImg
	},
	{
		name: 'Tacos Poulet',
		category: 'fast-food',
		id: '7tc',
		isBestSale: true,
		light: 2,
		water: 1,
		cover: tacoImg
	},
	{
		name: 'Couscous Marocain',
		category: 'traditionnel',
		id: '8cs',
		isBestSale: true,
		light: 3,
		water: 3,
		cover: couscousImg
	},
	{
		name: 'Sushi California',
		category: 'asiatique',
		id: '9sh',
		isBestSale: false,
		light: 2,
		water: 2,
		cover: sushiImg
	}
]