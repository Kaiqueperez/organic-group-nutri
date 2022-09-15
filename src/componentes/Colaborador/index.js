import './Colaborador.css'

const Colaborador = ({nome, imagem, funcao, corfundo}) => {
      return(
        <div className='ConteinerColab'>
            <div className='colaborador' style={{ backgroundColor: corfundo}}>

                <div className='cabecalho '>
                    <img src={imagem} alt=''/>
                </div>

                <div className='rodape'>
                    <h4 className='h4'>{nome}</h4>
                    <h5 className='h5'>{funcao}</h5>
                </div>

            </div>
         </div>
      )
}

export default Colaborador