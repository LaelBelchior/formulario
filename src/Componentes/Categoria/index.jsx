import React from 'react'
import {TextField, Button, Container} from '@material-ui/core'
import {InputLabel, MenuItem, FormControl, Select} from '@material-ui/core'

export default function FormularioCategoria(){

    return(

        <Container maxWidth='sm'>

            <TextField margin='normal' id='equipe' label='Equipe' fullWidth/>
            <FormControl fullWidth margin='normal'>

                <InputLabel>Faixa</InputLabel>
                <Select id='faixa'>

                    <MenuItem value='Branca'>Branca</MenuItem>
                    <MenuItem value='Cinza'>Cinza</MenuItem>
                    <MenuItem value='Amarela'>Amarela</MenuItem>
                    <MenuItem value='Laranja'>Laranja</MenuItem>
                    <MenuItem value='Verde'>Verde</MenuItem>
                    <MenuItem value='Azul'>Azul</MenuItem>
                    <MenuItem value='Roxa'>Roxa</MenuItem>
                    <MenuItem value='Marrom'>Marrom</MenuItem>
                    <MenuItem value='Preta'>Preta</MenuItem>

                </Select>

            </FormControl>

            <FormControl fullWidth margin='normal'>

                <InputLabel>Categoria</InputLabel>
                <Select id='Categoria'>

                    <MenuItem value='Galo'>Galo</MenuItem>
                    <MenuItem value='Pluma'>Pluma</MenuItem>
                    <MenuItem value='Pena'>Pena</MenuItem>
                    <MenuItem value='Leve'>Leve</MenuItem>
                    <MenuItem value='Médio'>Médio</MenuItem>
                    <MenuItem value='Meio-Pesado'>Meio-Pesado</MenuItem>
                    <MenuItem value='Pesado'>Pesado</MenuItem>
                    <MenuItem value='Super-Pesado'>Super-Pesado</MenuItem>
                    <MenuItem value='Pesadíssimo'>Pesadíssimo</MenuItem>

                </Select>

            </FormControl>
 
            <Button type='submit' variant='contained' color='primary'>Finalizar</Button>

        </Container>

    )

}