/* eslint-disable react/prop-types */
import React from 'react'

function SendButton(props) {
	const { cartInfo } = props
	function sendToCart() {
		let json
		if (localStorage.getItem('cart')) {
			const storage = JSON.parse(localStorage.getItem('cart'))
			storage.push(cartInfo)
			json = JSON.stringify(storage)
		} else {
			json = JSON.stringify([cartInfo])
		}

		localStorage.setItem('cart', json)
	}

	return (
		<button
			onClick={() => {
				sendToCart()
			}}
			className="send-btn"
		>
			Adicionar
		</button>
	)
}

export default SendButton
