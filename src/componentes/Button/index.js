import './Button.css'

const BTN = (props) => {
    return (
    <div className='conteiner-btn'>
        <button className='botao'>{props.children}</button>
    </div>)
}

export default BTN