
import { useState } from 'react'
import { recipeList } from '../datas/recipeList'
import RecipeItem from './RecipeItem'
import '../styles/ShoppingList.css'

function ShoppingList() {
    const [activeCategory, setActiveCategory] = useState('')

    const categories = recipeList.reduce(
        (acc, recipe) =>
            acc.includes(recipe.category) ? acc : acc.concat(recipe.category),
        []
    )

    return (
        <div className='lmj-shopping-list'>
            {/* LISTE DYAL LES CATÉGORIES */}
            <div className='category-filter'>
                <button 
                    className={activeCategory === '' ? 'active' : ''}
                    onClick={() => setActiveCategory('')}
                >
                    Tous
                </button>
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={activeCategory === cat ? 'active' : ''}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            { }
            <ul className='lmj-plant-list'>
                {recipeList
                    .filter((recipe) => 
                        activeCategory ? recipe.category === activeCategory : true
                    )
                    .map(({ id, cover, name, water, light }) => (
                        <RecipeItem
                            key={id}
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            isBestSeller={water === 3}
                        />
                    ))}
            </ul>
        </div>
    )
}

export default ShoppingList