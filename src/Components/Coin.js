import React from 'react'
import '../style.css'
import '../responsive.css'

const Coin = (props) => {
    return (
        <div>
            <div className="coin-container table">
                <p className='rank'>{props.rank}</p>
                <div className="coin">
                    <img src={props.image} alt="crypto" />
                    <h1>{props.name}</h1>
                    <h3 className="coin-symbol">{props.symbol.toUpperCase()}</h3>
                </div>
                <p className="coin-price justify-end">₹{props.price}</p>
                {
                    props.pricechange < 0 ?
                        (<p className="coin-percent red justify-end">{props.pricechange.toFixed(2)}%</p>) :
                        (<p className="coin-percent green justify-end">{props.pricechange.toFixed(2)}%</p>)
                }
                <p className="coin-marketcap justify-end">₹{props.marketcap.toLocaleString()}</p>
            </div>
            <hr />
        </div>
    )
    // <p className="coin-volume">Rs.{props.volume.toLocaleString()}</p>
}
export default Coin