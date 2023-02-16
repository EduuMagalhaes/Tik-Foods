import React from 'react'
import './Header.css'
import facebook from '../assets/facebook.svg'
import whatsapp from '../assets/whatsapp.svg'
import tikFoods from '../assets/tikFoods.png'

function Header() {
	return (
		<header className="header">
			<div>
				<img className="logo" src={tikFoods} />
			</div>
			<div className="container">
				<span className="header-msg">FAÇA JÁ O SEU PEDIDO !</span>
				<div className="container-icon">
					<div
						className="social-midia"
						onClick={() => {
							window.open('http://wa.me/5538998923984')
						}}
					>
						<img className="icon" src={whatsapp} />
						<span>(38) 99892-3984</span>
					</div>
					<div
						className="social-midia"
						onClick={() => {
							window.open('http://facebook.com/sorveteria_e_acai_tik_tok')
						}}
					>
						<img className="icon " src={facebook} />
						<span>facebook.com/tikFoods</span>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
