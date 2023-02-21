import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import './Acai.css'
import acaiIcon from '../assets/acai-icon.png'
import  { acaiIngredients, capitalizerFirstLetter, toCamelCase } from '../ultils/cardapio'

function Acai() {
	const pedidoAcaiInicial = {
		ingredientes: [],
		tamanho: 'pequeno',
		observacao: '',		
	}

	const [pedidoAcai, setPedidoAcai] = useState(pedidoAcaiInicial)
	const [inputActive, setinputActive] = useState(true)

	function listenCheckbox({ target }) {
		if(target.checked) {
			const ingredientes = [...pedidoAcai.ingredientes, target.id]
			setPedidoAcai({ ...pedidoAcai, ingredientes })			
		} else {
			const ingredientes = pedidoAcai.ingredientes.filter((element) => element !== target.id)
			setPedidoAcai({ ...pedidoAcai, ingredientes })	
		}
	}

	function listenRadio({ target }) {
		setPedidoAcai({ ...pedidoAcai, tamanho: target.value })
	}

	function listenTextArea({ target }) {
		setPedidoAcai({ ...pedidoAcai, observacao: target.value })
	}

	useEffect(() => {
		const additionalLenth = pedidoAcai.ingredientes.length
		const acaiSize = pedidoAcai.tamanho
		if (acaiSize === 'pequeno' && additionalLenth > 2)
			setinputActive(false)
		else if (acaiSize === 'medio' && additionalLenth > 4)
			setinputActive(false)
		else if (acaiSize === 'grande' && additionalLenth > 7)
			setinputActive(false)
		else if (acaiSize === 'extra-grande' && additionalLenth > 9)
			setinputActive(false)
		else {
			setinputActive(true)
		}
	})

	return (
		<>
			<Header />
			<Navigation />
			<main className="menu-page">
				<div className="tittle-wrapper">
					<img className="menu-icon" src={acaiIcon} />
					<h1>Açai</h1>
					<img className="menu-icon" src={acaiIcon} />
				</div>
				<h2>Adicionais</h2>
				<div className="ingredients">
					{acaiIngredients.map((element) => {
						const elementCamelized = toCamelCase(element)
						const elementCapitalized = capitalizerFirstLetter(element)
						return (
							<div className="ingredients-wrapper" key={elementCamelized}>
								<input
									className="checkbox"									
									type="checkbox"
									id={elementCamelized}
									onChange={(element) => listenCheckbox(element)}
									disabled={pedidoAcai.ingredientes.find((ingredient) => ingredient === elementCamelized) ? false : !inputActive}						
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
							defaultChecked
							disabled={pedidoAcai.ingredientes.length > 3}
						/>
						<label className="label-checkbox" htmlFor="tamanho-pequeno">
							300ML - R$ 9,99
						</label>
						<span>3 Adicionais</span>
					</div>
					<div className="ingredients-wrapper">
						<input
							className="radio-input"
							type="radio"
							value="medio"
							id="tamanho-medio"
							name="valor-tamanho"
							onChange={(element) => listenRadio(element)}
							disabled={pedidoAcai.ingredientes.length > 5}
						/>
						<label className="label-checkbox" htmlFor="tamanho-medio">
							500ML - R$ 14,99
						</label>
						<span>5 Adicionais</span>
					</div>
					<div className="ingredients-wrapper">
						<input
							className="radio-input"
							type="radio"
							value="grande"
							id="tamanho-grande"
							name="valor-tamanho"
							onChange={(element) => listenRadio(element)}
							disabled={pedidoAcai.ingredientes.length > 8}						
						/>
						<label className="label-checkbox" htmlFor="tamanho-grande">
							750ML - R$ 19,99
						</label>
						<span>8 Adicionais</span>
					</div>
					<div className="ingredients-wrapper">
						<input
							className="radio-input"
							type="radio"
							value="extra-grande"
							id="tamanho-extra-grande"
							name="valor-tamanho"
							onChange={(element) => listenRadio(element)}	
							disabled={pedidoAcai.ingredientes.length > 10}						
						/>
						<label className="label-checkbox" htmlFor="tamanho-extra-grande">
							1 Litro - R$ 26,99
						</label>
						<span>10 Adicionais</span>
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

export default Acai
