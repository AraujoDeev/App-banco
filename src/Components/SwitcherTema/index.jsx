import React from "react";
import { themeOn, themeOff } from "../../assets/imagens";
import { Icone } from "../UI";

const claro = <Icone src={themeOn} alt="Tema Claro" />;
const escuro = <Icone src={themeOff} alt="Tema Escuro" />;

export default ({ tema }) => (tema ? escuro : claro);
