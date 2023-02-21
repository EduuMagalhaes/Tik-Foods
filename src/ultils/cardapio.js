const acaiIngredients = ['abacaxi', 'amendoim', 'aveia', 'banana', 'bis', 'canudo wafer', 'confete', 'chocolate', 'chantilly', 'coco ralado',
	'cocada', 'chocoball', 'creme ninho', 'calda de chocolate', 'calda de morango', 'castanha de caju', 'farinha lactea', 'flocos de arroz',
	'gotas de chocolate', 'granulado', 'granola', 'leite em po', 'leite condensado', 'maca', 'manga', 'marshmallow', 'mel', 'morango', 'negresco',
	'nutella', 'ovomaltine', 'ouro branco', 'pacoca', 'sorvete', 'sonho de valsa', 'sucrilhos','uva', 'kiwi']

const macarraoIngredients = ['bacon', 'calabresa', 'frango', 'salsicha', 'cenoura', 'cebola', 'pimentao', 'tomate', 'mussarela', 'milho', 'molho especial']

function capitalizerFirstLetter(word) {
  return word.split(" ").map((element) => element[0]
    .toUpperCase() + element.slice(1)).join(" ")
}

function toCamelCase(word) {
  return word.split(" ").map((element, index) => index > 0 ? element[0]
    .toUpperCase() + element.slice(1) : element).join("")
}

export {
  acaiIngredients,
  macarraoIngredients,
  capitalizerFirstLetter,
  toCamelCase
}