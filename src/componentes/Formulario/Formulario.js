//import { getValue } from "@testing-library/user-event/dist/utils"
import BTN from "../Button"
import CampoTexto from "../CampoTexto"
import ListaDropDown from "../ListaDropDown"
import './Formulario.css'
import { useState } from 'react'


export const Formulario = (props) =>{
    
    
    

    const [nome, setNome] = useState('')
    const [funcao, setFuncao] = useState('')
    const [imagem, setImagem] = useState('')
    const [squad, setSquad] = useState('')

    const inputSubitado = (e) => {
        e.preventDefault()
        
       props.colaboradorCadastrado({
        nome,
        funcao,
        imagem,
        squad
       },
       // Esse seters são para resetar o formulario
       setNome(''),
       setFuncao(''),
       setImagem(''),
       setSquad('')
       
       
       )
       

       
         
 
    }

    const textoh1 = 'Preencha os dados para criar o card do colaborador.'
    
    return(
        <section className="conteiner-formulario">

        <form className="Formulario" onSubmit= {inputSubitado} >

        <h2>{textoh1}</h2>

        <CampoTexto obrigatorio={true}
         label ="Nome" 
         placeholder = 'Digite seu nome'
         valor = {nome}
         aoTerado = {valor => setNome(valor)}

         />

        <CampoTexto obrigatorio={true} 
        label ="Função no Grupo" 
        placeholder = 'Coloque sua função'
        valor = {funcao}
        aoTerado = {valor => setFuncao(valor)}

        />

        <CampoTexto
        label ="Foto" 
        placeholder = 'Coloque a url da foto'
        valor = {imagem}
        aoTerado = {valor => setImagem(valor)}

        />

        <ListaDropDown 
        obrigatorio={true}  
        itens ={props.nomedosTimes} 
        label="Squads"
        valor = {squad}
        aoTerado = {valor => setSquad(valor)}

        />
        
        <BTN>Criar Squad</BTN>

        </form>

        </section>
    )
}



export default Formulario