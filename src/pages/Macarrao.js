import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import './Macarrao.css'
import pastaIcon from '../assets/pasta-icon.png'

const pedidoMacarraoInicial = {
	ingredientes: {
		bacon: true,
		calabresa: true,
		frango: true,
		salsicha: true,
		cenoura: true,
		cebola: true,
		pimentao: true,
		tomate: true,
		mussarela: true,
		milho: true,
		molhoEspecial: true,
	},
	tamanho: 'grande',
	observacao: '',
}

const ingredientesList = [
	'bacon',
	'calabresa',
	'frango',
	'salsicha',
	'cenoura',
	'cebola',
	'pimentao',
	'tomate',
	'mussarela',
	'milho',
	'molhoespecial',
]

function Macarrao() {
	const [pedidoMacarrao, setPedidoMacarrao] = useState(pedidoMacarraoInicial)

	function listenCheckbox({ target }) {
		const ingredientes = {
			...pedidoMacarrao.ingredientes,
			[target.id]: target.checked,
		}
		setPedidoMacarrao({ ...pedidoMacarrao, ingredientes })
	}

	function listenRadio({ target }) {
		setPedidoMacarrao({ ...pedidoMacarrao, tamanho: target.value })
	}

	function listenTextArea({ target }) {
		setPedidoMacarrao({ ...pedidoMacarrao, observacao: target.value })
	}

	return (
		<>
			<Header />
			<Navigation />
			<main className="menu-page">
				<div className="tittle-wrapper">
					<img className="menu-icon" src={pastaIcon} />
					<h1>Macarrão Na Chapa</h1>
					<img className="menu-icon" src={pastaIcon} />
				</div>
				<h2>Ingredientes</h2>
				<div className="ingredients">
					{ingredientesList.map((element) => {
						return (
							<div className="ingredients-wrapper" key={element}>
								<input
									className="checkbox"
									defaultChecked
									type="checkbox"
									id={element}
									onChange={(element) => listenCheckbox(element)}
								/>
								<label
									className="label-checkbox"
									data-content={element}
									htmlFor={element}
								>
									{element}
								</label>
							</div>
						)
					})}
				</div>
				<h2>Valores e Tamanhos</h2>
				<div className="ingredients">
					<div className="ingredients-wrapper">
						<input
							className="radio-input"
							type="radio"
							value="pequeno"
							id="tamanho-pequeno"
							name="valor-tamanho"
							onChange={(element) => listenRadio(element)}
						/>
						<label className="label-checkbox" htmlFor="tamanho-pequeno">
							Pequeno - R$ 15,00
						</label>
					</div>
					<div className="ingredients-wrapper">
						<input
							className="radio-input"
							type="radio"
							value="medio"
							id="tamanho-medio"
							name="valor-tamanho"
							onChange={(element) => listenRadio(element)}
						/>
						<label className="label-checkbox" htmlFor="tamanho-medio">
							Medio - R$ 20,00
						</label>
					</div>
					<div className="ingredients-wrapper">
						<input
							className="radio-input"
							type="radio"
							value="grande"
							id="tamanho-grande"
							name="valor-tamanho"
							onChange={(element) => listenRadio(element)}
							defaultChecked
						/>
						<label className="label-checkbox" htmlFor="tamanho-grande">
							Grande - R$ 24,00
						</label>
					</div>
				</div>
				<h2>Alguma Observação?</h2>
				<textarea
					className="text-area"
					cols="30"
					rows="10"
					onChange={(element) => listenTextArea(element)}
					maxLength="150"
				/>
				<button className="send-btn">Adicionar</button>
			</main>
		</>
	)
}

export default Macarrao
