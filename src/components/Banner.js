import '../styles/Banner.css'
import  logo from'../assets/logo.jpg'

function Banner({ children }) {
	return ( 
	<div
	className='lmj-banner'>
	<img src={logo} alt='logo'  className='lmj-logo'/>
	{children}

	</div>
	)
}

export default Banner