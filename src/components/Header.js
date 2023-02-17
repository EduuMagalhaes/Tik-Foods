import React from 'react'
import './Header.css'
import facebook from '../assets/facebook.svg'
import whatsapp from '../assets/whatsapp.svg'
import tikFoods from '../assets/tikFoods.png'
import { Link } from 'react-router-dom'

function Header() {
	return (
		<header className="header">
			<div>
				<Link to='/'>
					<img className="logo" src={tikFoods} />
				</Link>
			</div>
			<div className="container">
				<span className="header-msg">FAÇA JÁ O SEU PEDIDO !</span>
				<div className="container-icon">
					<Link
						to='http://wa.me/5538998923984'
						target='_blank'
						className="social-midia"						
					>
						<img className="icon" src={whatsapp} />
						<span>(38) 99892-3984</span>
					</Link>
					<Link
						to='http://facebook.com/sorveteria_e_acai_tik_tok'
						target='_blank'
						className="social-midia"
					>
						<img className="icon " src={facebook} />
						<span>facebook.com/tikFoods</span>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
