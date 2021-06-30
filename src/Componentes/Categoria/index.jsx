import React, { useState } from 'react'
import { TextField, Button, Container, useTheme } from '@material-ui/core'
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

export default function FormularioCategoria({ aoEnviar }) {
    const [equipe, setEquipe] = useState("")
    const [faixa, setFaixa] = useState("")
    const [categoria, setCategoria] = useState("")


    return (

        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({ equipe, faixa, categoria })
        }}>

            <Container maxWidth='sm'>

                <TextField value={equipe} onChange={(event) => setEquipe(event.target.value)} margin='normal' id='equipe' label='Equipe' fullWidth />
                <FormControl fullWidth margin='normal'>

                    <InputLabel>Faixa</InputLabel>
                    <Select value={faixa} onChange={(event) => { setFaixa(event.target.value) }} id='faixa'>

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
                    <Select value={categoria} onChange={(event) => { setCategoria(event.target.value) }} id='Categoria'>

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

        </form>

    )

}