import React, { useEffect, useState } from 'react'

import FormularioLogin from "../Login/"
import FormularioDados from "../Dados/"
import FormularioCategoria from "../Categoria/"

export default function FormularioCadastro({ aoEnviar }) {

    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})

    useEffect(()=>{console.log(dadosColetados)})

    const formularios = [

        <FormularioLogin aoEnviar={coletarDados}/>,
        <FormularioDados aoEnviar={coletarDados}/>,
        <FormularioCategoria aoEnviar={coletarDados}/>

    ]

    function coletarDados(dados) {

        setDados({...dadosColetados, ...dados})
        proximo()

    }

    function proximo() {

        setEtapaAtual(etapaAtual + 1)

    }

    return (

        <>
            {formularios[etapaAtual]}
        </>

    )

}