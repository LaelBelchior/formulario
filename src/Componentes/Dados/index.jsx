import React from 'react'
import {TextField, Button, FormControlLabel, Switch, Container} from '@material-ui/core'

export default function FormularioDados(){

    return(

        <Container maxWidth='sm'>

            <TextField margin='normal' id='nome' label='Nome' variant='outlined' fullWidth/>
            <TextField margin='normal' id='sobrenome' label='Sobrenome' variant='outlined' fullWidth/>
            <TextField margin='normal' id='cpf' label='CPF' variant='outlined' fullWidth/>
            <TextField margin='normal' id='idade' type ='number' label='Idade' variant='outlined' fullWidth/>
            <TextField margin='normal' id='sexo' label='Sexo' variant='outlined' fullWidth/>
            <TextField margin='normal' id='peso' label='Peso' variant='outlined' fullWidth/>

            <FormControlLabel label='Receber avisos' control={<Switch name='avisos' defaultChecked color='primary'/>}/>
            <FormControlLabel label='Receber novidades' control={<Switch name='novidades' defaultChecked color='primary'/>}/>
            
            <Button type='submit' variant='contained' color='primary'>Próximo</Button>

        </Container>        

    )

}