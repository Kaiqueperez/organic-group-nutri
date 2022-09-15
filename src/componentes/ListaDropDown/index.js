import './ListaDropDown.css'

const ListaDropDown = (props) => {
    return(
    <div className='ListaDrop'>
        <label>{props.label}</label>
        
        <select 
        value={props.valor}

         onChange= {event => props.aoTerado(event.target.value)} 
         
          required= {props.obrigatorio}> 
          
             <option value={""}></option>

            {props.itens.map(item => 
            
            <option  

            key={item}>{item}
            
            </option>)}
        </select>
    </div>
    )
}

export default ListaDropDown