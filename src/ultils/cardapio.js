const additional = ['abacaxi', 'amendoim', 'aveia', 'banana', 'bis', 'canudo wafer', 'confete', 'chocolate', 'chantilly', 'coco ralado',
	'cocada', 'chocoball', 'creme ninho', 'calda de chocolate', 'calda de morango', 'castanha de caju', 'farinha lactea', 'flocos de arroz',
	'gotas de chocolate', 'granulado', 'granola', 'leite em po', 'leite condensado', 'maca', 'manga', 'marshmallow', 'mel', 'morango', 'negresco',
	'nutella', 'ovomaltine', 'ouro branco', 'pacoca', 'sorvete', 'sonho de valsa', 'sucrilhos','uva', 'kiwi']

const macarraoIngredients = ['bacon', 'calabresa', 'frango', 'salsicha', 'cenoura', 'cebola', 'pimentao', 'tomate', 'mussarela', 'milho', 'molho especial']

const prices = {
  macarrao: {
    "pequeno": '15,00',
    "medio": '20,00',
    "grande": '24,00',
  },
  acai: {
    "pequeno": '9,99',
    "medio": '14,99',
    "grande": '19,99',
    "extra-grande": '26,99'
  },
  cupuacu: {
    "pequeno": '12,00',
    "medio": '18,00',
    "grande": '24,00',
    "extra-grande": '30,00'
  },
}

function capitalizerFirstLetter(word) {
  return word.split(" ").map((element) => element[0]
    .toUpperCase() + element.slice(1)).join(" ")
}

function toCamelCase(word) {
  return word.split(" ").map((element, index) => index > 0 ? element[0]
    .toUpperCase() + element.slice(1) : element).join("")
}

export {
  additional,
  macarraoIngredients,
  prices,
  capitalizerFirstLetter,
  toCamelCase
}