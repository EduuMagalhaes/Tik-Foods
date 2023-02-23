import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import './MenuPages.css'
import cupuacuIcon from '../assets/cupuacu.jpg'
import {
	acaiIngredients,
	capitalizerFirstLetter,
	toCamelCase,
} from '../ultils/cardapio'
import SendButton from '../components/SendButton'

function Cupuacu() {
	const pedidoCupuacuInicial = {
		ingredientes: [],
		tamanho: 'pequeno',
		observacao: '',
	}

	const [pedidoCupuacu, setPedidoCupuacu] = useState(pedidoCupuacuInicial)
	const [inputActive, setinputActive] = useState(true)

	function listenCheckbox({ target }) {
		if (target.checked) {
			const ingredientes = [...pedidoCupuacu.ingredientes, target.id]
			setPedidoCupuacu({ ...pedidoCupuacu, ingredientes })
		} else {
			const ingredientes = pedidoCupuacu.ingredientes.filter(
				(element) => element !== target.id
			)
			setPedidoCupuacu({ ...pedidoCupuacu, ingredientes })
		}
	}

	function listenRadio({ target }) {
		setPedidoCupuacu({ ...pedidoCupuacu, tamanho: target.value })
	}

	function listenTextArea({ target }) {
		setPedidoCupuacu({ ...pedidoCupuacu, observacao: target.value })
	}

	useEffect(() => {
		const additionalLenth = pedidoCupuacu.ingredientes.length
		const cupuacuSize = pedidoCupuacu.tamanho
		if (cupuacuSize === 'pequeno' && additionalLenth > 2) setinputActive(false)
		else if (cupuacuSize === 'medio' && additionalLenth > 4)
			setinputActive(false)
		else if (cupuacuSize === 'grande' && additionalLenth > 7)
			setinputActive(false)
		else if (cupuacuSize === 'extra-grande' && additionalLenth > 9)
			setinputActive(false)
		else {
			setinputActive(true)
		}
	}, [pedidoCupuacu])

	return (
		<>
			<Header />
			<Navigation />
			<main className="menu-page">
				<div className="tittle-wrapper">
					<img className="menu-icon" src={cupuacuIcon} />
					<h1>Cupuacu </h1>
					<img className="menu-icon" src={cupuacuIcon} />
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
									disabled={
										pedidoCupuacu.ingredientes.find(
											(ingredient) => ingredient === elementCamelized
										)
											? false
											: !inputActive
									}
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
				<div className="size-prices">
					<div className="price-wrapper">
						<div className="ingredients-wrapper">
							<input
								className="radio-input"
								type="radio"
								value="pequeno"
								id="tamanho-pequeno"
								name="valor-tamanho"
								onChange={(element) => listenRadio(element)}
								defaultChecked
								disabled={pedidoCupuacu.ingredientes.length > 3}
							/>
							<label className="label-checkbox" htmlFor="tamanho-pequeno">
								300ML - R$ 12,00
							</label>
						</div>
						<span>3 Adicionais</span>
					</div>
					<div className="price-wrapper">
						<div className="ingredients-wrapper">
							<input
								className="radio-input"
								type="radio"
								value="medio"
								id="tamanho-medio"
								name="valor-tamanho"
								onChange={(element) => listenRadio(element)}
								disabled={pedidoCupuacu.ingredientes.length > 5}
							/>
							<label className="label-checkbox" htmlFor="tamanho-medio">
								500ML - R$ 18,00
							</label>
						</div>
						<span>5 Adicionais</span>
					</div>
					<div className="price-wrapper">
						<div className="ingredients-wrapper">
							<input
								className="radio-input"
								type="radio"
								value="grande"
								id="tamanho-grande"
								name="valor-tamanho"
								onChange={(element) => listenRadio(element)}
								disabled={pedidoCupuacu.ingredientes.length > 8}
							/>
							<label className="label-checkbox" htmlFor="tamanho-grande">
								750ML - R$ 24,00
							</label>
						</div>
						<span>8 Adicionais</span>
					</div>
					<div className="price-wrapper">
						<div className="ingredients-wrapper">
							<input
								className="radio-input"
								type="radio"
								value="extra-grande"
								id="tamanho-extra-grande"
								name="valor-tamanho"
								onChange={(element) => listenRadio(element)}
								disabled={pedidoCupuacu.ingredientes.length > 10}
							/>
							<label className="label-checkbox" htmlFor="tamanho-extra-grande">
								1 Litro - R$ 30,00
							</label>
						</div>
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
				<SendButton />
			</main>
		</>
	)
}

export default Cupuacu
