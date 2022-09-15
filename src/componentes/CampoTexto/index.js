
import './CampoTexto.css'

 const CampoTexto = (props) => {

    

    const valordigitado = (e) => {
        props.aoTerado(e.target.value)
        
        
       
    }

    return (
        <div className="campo-texto">
        <label>

        {props.label}
        </label>
        

        <input 

        value={props.valor}
        onChange={valordigitado}
        required = {props.obrigatorio}
        placeholder={props.placeholder}

        />

        

        </div>
    )

   
}


export default CampoTexto