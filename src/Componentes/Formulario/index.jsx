import React, { useState } from 'react'

import FormularioLogin from './Componentes/Login/'
import FormularioDados from './Componentes/Dados/'
import FormularioCategoria from "./Componentes/Categoria/"

export default function FormularioCadastro() {

    const [etapaAtual, setEtapaAtual] = useState(0)

    const formularios = [

        <FormularioLogin />,
        <FormularioDados />,
        <FormularioCategoria />

    ]

    function proximo() {

        setEtapaAtual(etapaAtual + 1)

    }

    return (

        <>
            {formularios[etapaAtual]}
        </>

    )

}