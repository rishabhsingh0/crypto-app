import React from 'react'
import './style.css'
import './responsive.css'
import Coin from './Components/Coin'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'


const App = () => {
	const [coinData, setCoinData] = React.useState([])

	React.useEffect(() => {
		fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
			.then(response => response.json())
			.then(result => setCoinData(result))
	}, [])

	const [search, setSearch] = React.useState('')
	const handleChange = (event) => {
		setSearch(event.target.value)
	}

	const filteredCoin = coinData.filter(data => data.name.includes(search))
	return (
		<div>
			<div className='header'>
				<div className='logo-container'>
					<img src='./images/logo4.png' alt='logo' id='logo' />
					<h4>CRYPTO[DATA]</h4>
				</div>
				<input type='text' placeholder='Search' onChange={handleChange} />
			</div>
			<div className='table-container'>
				<div className='table sticky'>
					<h2 className='rank'>#</h2>
					<h2>Coin</h2>
					<h2 className='justify-end'>Price</h2>
					<h2 className='justify-end'>24h</h2>
					<h2 className='justify-end'>Market Cap</h2>
				</div>
				<hr />
				{filteredCoin.map(coin =>
					<Coin
						key={coin.id}
						rank={coin.market_cap_rank}
						name={coin.name}
						image={coin.image}
						symbol={coin.symbol}
						marketcap={coin.market_cap}
						price={coin.current_price}
						pricechange={coin.price_change_percentage_24h}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
