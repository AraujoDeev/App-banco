import React from "react";
import {
  alimentacao,
  outros,
  saude,
  transporte,
  utilidades
} from "../assets/imagens";
import { IconeTema } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} alt="Restaurante" />,
    Utilidades: <IconeTema src={utilidades} alt="Utilidades" />,
    Saude: <IconeTema src={saude} alt="Saude" />,
    Transporte: <IconeTema src={transporte} alt="Transporte" />,
    default: <IconeTema src={outros} alt="Outros" />
  };
  return Images[type] || Images.default;
};
