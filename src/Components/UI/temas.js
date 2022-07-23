import {
  fundoClaro,
  conteudoClaro,
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro
} from "./variaveis";

const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: ""
};

const temaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: "invert(100%)"
};

export { temaClaro, temaEscuro };
