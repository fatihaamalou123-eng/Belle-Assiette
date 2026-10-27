import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? (
        <img src={Sun} alt='sun' style={{ width: '20px', height: '20px' }} />
    ) : (
        <img src={Water} alt='water' style={{ width: '20px', height: '20px' }} />
    )
    const quantitytabel ={
    1: 'peu',
    2: 'modérément',
    3: 'beaucoup'
}

const handleClick = () => {
    alert(`Cette Reccete requiert ${quantitytabel[scaleValue]} ${careType === 'light' ? 'de chaleur' : "de temps"}`)
}

    return (
        <div onClick={handleClick} style={{ display: 'flex', flexDirection: 'row', gap: '4px' }}>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}

export default CareScale