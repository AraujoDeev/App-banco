import React, { useState } from "react";
import styled from "styled-components";

import { privado, dinheiro, olho } from "../../assets/imagens";

import { Icone, Box, Btn, Saldo, Detalhe, IconeTema } from "../UI";

const IconeMargin = styled(Icone)`
  margin-top: 2px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe>1.104.203,25
          </Saldo>
        ) : null}
      </div>

      <Btn onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho}
          alt="Privacidade do Saldo"
        />
      </Btn>
    </Box>
  );
};

export default Conta;
