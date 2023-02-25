import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import { prices } from '../ultils/cardapio'
import { BsTrash } from 'react-icons/bs'

import './Cart.css'

function Cart() {
	const [cart, setCart] = useState([])
	const [deliveryData, setDeliveryData] = useState({
		pagamento: 'dinheiro',
		adress: '',
		phone: '',
	})

	useEffect(() => {
		const order = JSON.parse(localStorage.getItem('cart'))
		setCart(order)
	}, [])

	function removeFromCart(index) {
		const newCart = cart.filter((item) => item !== cart[index])
		localStorage.setItem('cart', JSON.stringify(newCart))
		setCart(newCart)
	}

	function listenRadio({ target }) {
		setDeliveryData({ ...deliveryData, pagamento: target.value })
	}

	function listenInput({ target }) {
		setDeliveryData({ ...deliveryData, [target.name]: target.value })
	}

	return (
		<>
			<Header />
			<Navigation />
			<div className="cart">
				<h2 className="cart-title">Pedidos</h2>
				{cart &&
					cart.map((item, index) => {
						return (
							<div className="order" key={index}>
								<img className="order-icon" src={item.img} />
								<div className="order-wrapper">
									<span className="order-title">{item.type}</span>
									<div className="content">
										{item.type === `macarrao` ? (
											<span>
												<strong>Remover: </strong>
												{item.ingredientes.join(', ')}
											</span>
										) : (
											<span>
												<strong>Adicionais: </strong>
												{item.ingredientes.join(', ')}
											</span>
										)}

										<span>
											<strong>Tamanho: </strong> {item.tamanho}
										</span>
										{
											<span>
												<strong>Observações: </strong>
												{item.observacao}
											</span>
										}

										<span>
											<strong>Valor:</strong> R${' '}
											{prices[item.type][item.tamanho]}
										</span>
									</div>
								</div>
								<button
									className="remove-btn"
									onClick={() => removeFromCart(index)}
								>
									<BsTrash className="trash-icon" />
								</button>
							</div>
						)
					})}
			</div>
			<div className="delivery">
				<div className="delivery-form">
					<h2 className="cart-title">Dados De Entrega</h2>
					<label className="label-checkbox">Endereço:</label>
					<input
						type="text"
						name="adress"
						value={deliveryData.adress}
						onChange={(element) => listenInput(element)}
						required
					/>
					<label className="label-checkbox">Telefone:</label>
					<input
						type="tel"
						name="phone"
						value={deliveryData.phone}
						onChange={(element) => listenInput(element)}
						required
					/>
				</div>
				<div className="pay-method">
					<h2 className="cart-title">Forma De Pagamento</h2>
					<div>
						{' '}
						<input
							className="radio-input"
							id="dinheiro"
							name="pagamento"
							type="radio"
							value="dinheiro"
							onChange={(element) => listenRadio(element)}
							defaultChecked
						/>
						<label className="label-checkbox" htmlFor="dinheiro">
							Dinheiro
						</label>
						<input
							className="radio-input"
							id="pix"
							name="pagamento"
							type="radio"
							value="pix"
							onChange={(element) => listenRadio(element)}
						/>
						<label className="label-checkbox" htmlFor="pix">
							PIX
						</label>
						<input
							className="radio-input"
							id="credito"
							name="pagamento"
							type="radio"
							value="credito"
							onChange={(element) => listenRadio(element)}
						/>
						<label className="label-checkbox" htmlFor="credito">
							Credito
						</label>
						<input
							className="radio-input"
							id="debito"
							name="pagamento"
							type="radio"
							value="debito"
							onChange={(element) => listenRadio(element)}
						/>
						<label className="label-checkbox" htmlFor="debito">
							Debito
						</label>
					</div>
				</div>
				<button className="send-btn final">Finalizar</button>
			</div>
		</>
	)
}

export default Cart
