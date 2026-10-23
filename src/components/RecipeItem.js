import CareScale from './CareScale'
import '../styles/RecipeItem.css'
import { useState } from 'react'

function RecipeItem({ cover, name, water, light, isBestSeller }) {
    const [showAlert, setShowAlert] = useState(false)

    return (
        <li 
            className='lmj-plant-item'
            onMouseEnter={() => setShowAlert(true)}
            onMouseLeave={() => setShowAlert(false)}
        >
            {/*  - MINI ALERT */}
            {showAlert && (
                <div className={`mini-alert ${isBestSeller ? 'red' : 'green'}`}>
                    {isBestSeller ? '🔥 Plus vent' : 'Pas en cours'}
                </div>
            )}

            <img className='lmj-plant-item-cover' src={cover} alt={name} />
            <div className='lmj-plant-item-name'>{name}</div>
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

export default RecipeItem