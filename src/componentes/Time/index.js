import Colaborador from '../Colaborador'
import './Time.css'


const Squad = (props) => {
    return(
        // passando essa condição os squads vazio não são mostrados!
        (props.colaboradores.length > 0) ?

        <section className='conteiner-squad' style={{backgroundColor: props.corfundo}}>

            <h3 >{props.nomeTime}</h3>
            <p style={{ backgroundColor: props.corprincipal}}>      </p>

            <div className='conteiner-colab'>

            {props.colaboradores.map(colaborador => 

                <Colaborador 
                    key={colaborador.nome}
                    nome={colaborador.nome}
                    imagem={colaborador.imagem}
                    funcao={colaborador.funcao}
                    corfundo={props.corPrima}
                    />)}

            </div>
            
            
            

        </section> :''
    )
}
export default Squad
