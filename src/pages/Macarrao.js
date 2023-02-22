import React, { useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import './MenuPages.css'
import pastaIcon from '../assets/pasta-icon.png'
import {
	macarraoIngredients,
	capitalizerFirstLetter,
	toCamelCase,
} from '../ultils/cardapio'

function Macarrao() {
	const pedidoMacarraoInicial = {
		ingredientes: [],
		tamanho: 'grande',
		observacao: '',
	}

	const [pedidoMacarrao, setPedidoMacarrao] = useState(pedidoMacarraoInicial)

	function listenCheckbox({ target }) {
		if (!target.checked) {
			const ingredientes = [...pedidoMacarrao.ingredientes, target.id]
			setPedidoMacarrao({ ...pedidoMacarrao, ingredientes })
		} else {
			const ingredientes = pedidoMacarrao.ingredientes.filter(
				(element) => element !== target.id
			)
			setPedidoMacarrao({ ...pedidoMacarrao, ingredientes })
		}
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
					{macarraoIngredients.map((element) => {
						const elementCamelized = toCamelCase(element)
						const elementCapitalized = capitalizerFirstLetter(element)
						return (
							<div className="ingredients-wrapper" key={elementCamelized}>
								<input
									className="checkbox"
									defaultChecked
									type="checkbox"
									id={elementCamelized}
									onChange={(element) => listenCheckbox(element)}
								/>
								<label
									className="label-checkbox"
									data-content={elementCapitalized}
									htmlFor={elementCamelized}
								>
									{elementCapitalized}
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
