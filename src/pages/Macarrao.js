import React, { useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

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
  observacao: ''
}

const ingredientesList = ['bacon', 'calabresa', 'frango', 'salsicha', 'cenoura', 'cebola',
'pimentao', 'tomate', 'mussarela', 'milho', 'molhoespecial']

function Macarrao () {
  const [ pedidoMacarrao, setPedidoMacarrao ] = useState(pedidoMacarraoInicial);

  function listenCheckbox({target}) {
    const ingredientes =  { ...pedidoMacarrao.ingredientes, [target.id]: target.checked }
    setPedidoMacarrao({...pedidoMacarrao, ingredientes})
  }

  function listenRadio({target}) {
    setPedidoMacarrao({...pedidoMacarrao, tamanho: target.value})
  }

  function listenTextArea({target}) {
    setPedidoMacarrao({...pedidoMacarrao, observacao: target.value})
  }

  return (
    <>
      <Header />
      <Navigation />
      <span>Macarrão Na Chapa</span>
      <div>
        <span>Ingredientes</span>
        {ingredientesList.map((element) => {
            return (
              <div key={element}>
                <input defaultChecked type="checkbox" id={element} onChange={ (element) => listenCheckbox(element)} />
                <label htmlFor={element}>{element}</label>
              </div>
            )
          })}       
        <span>Valores e Tamanhos</span>
        <input type="radio" value="pequeno" id="tamanho-pequeno" name="valor-tamanho" onChange={ (element) => listenRadio(element)} />
        <label htmlFor="tamanho-pequeno">Pequeno - R$ 15,00</label>
        <input type="radio" value="medio" id="tamanho-medio" name="valor-tamanho" onChange={ (element) => listenRadio(element)} />
        <label htmlFor="tamanho-medio">Medio - R$ 20,00</label>
        <input defaultChecked type="radio" value="grande" id="tamanho-grande" name="valor-tamanho" onChange={ (element) => listenRadio(element)} />
        <label htmlFor="tamanho-grande">Grande - R$ 24,00</label>
        <span>Alguma Observação?</span>
        <textarea cols="30" rows="10" onChange={(element) => listenTextArea(element)}></textarea>
        <button>Adicionar</button>
      </div>
    </>
  )
}   

export default Macarrao
