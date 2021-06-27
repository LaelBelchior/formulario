import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"

export default function FormularioLogin(){

    return(

        <form>

            <TextField id='login' label='E-mail de usuário' variant='outlined' fullWidth/>
            <TextField id='senha' label='Senha' variant='outlined' type='password' margin='normal' fullWidth/>

            <Button type='submit' variant='contained' color='primary'>Próximo</Button>

        </form>

    )

}