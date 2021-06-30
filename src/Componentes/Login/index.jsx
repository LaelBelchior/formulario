import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"

export default function FormularioLogin({ aoEnviar }) {
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    return (

        <form onSubmit={
            (event) => {
                event.preventDefault()
                aoEnviar({login, senha})
            }
        }>

            <TextField value={login} onChange={(event) => { setLogin(event.target.value) }} id='login' label='E-mail de usuário' variant='outlined' fullWidth />
            <TextField value={senha} onChange={(event) => { setSenha(event.target.value) }} id='senha' label='Senha' variant='outlined' type='password' margin='normal' fullWidth />

            <Button type='submit' variant='contained' color='primary'>Próximo</Button>

        </form>

    )

}