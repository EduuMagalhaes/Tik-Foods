import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import { prices } from "../ultils/cardapio";

function Cart() {
  const [cart, setCart] = useState([]);
  const [deliveryData, setDeliveryData] = useState({
    pagamento: 'dinheiro',
    adress: '',
    phone:''
  });

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem('cart'))
    setCart(order)
  },[])

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

  return(
    <>
      <Header />
      <Navigation />
      <div>
        {cart && cart.map((item, index) => {
          return(
            <div key={index}>
              <img className="menu-icon" src={item.img} />
              <span>{item.type}</span>
              { item.type === `macarrao` ? `Remover: ${item.ingredientes.join(', ')}` : `Adicionais: ${item.ingredientes.join(', ')}` }
              <span>{`Tamanho: ${item.tamanho}`}</span>
              <span>{`Valor: R$ ${prices[item.type][item.tamanho]}`}</span>
              {item.observacao && `Observações: ${item.observacao}`}
              <button onClick={() => removeFromCart(index)}>Remover</button>
            </div>
          )
        })}
      </div>
      <div>
        <span>Dados De Entrega</span>
        <label>Endereço:</label>
        <input type='text' name='adress' value={deliveryData.adress} onChange={(element) => listenInput(element)} required />
        <label>Telefone:</label>
        <input type='tel' name='phone' value={deliveryData.phone} onChange={(element) => listenInput(element)} required />             
      </div>
      <div>
        <span>Forma De Pagamento</span>
        <input id="dinheiro" name="pagamento" type='radio' value='dinheiro' onChange={(element) => listenRadio(element)} defaultChecked />
        <label htmlFor="dinheiro">Dinheiro</label>
        <input id="pix" name="pagamento" type='radio' value='pix' onChange={(element) => listenRadio(element)} />
        <label htmlFor="pix">PIX</label>
        <input id="credito" name="pagamento" type='radio' value='credito' onChange={(element) => listenRadio(element)} /> 
        <label htmlFor="credito">Credito</label>
        <input id="debito" name="pagamento" type='radio' value='debito' onChange={(element) => listenRadio(element)} />           
        <label htmlFor="debito">Debito</label>
      </div>
      <button>Finalizar</button>
    </>
  )
}

export default Cart;