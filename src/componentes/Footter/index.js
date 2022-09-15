import './Footer.css'



const Footer = () =>{
    const paragrafo = 'Desenvolvido por Alurinha'

    return(
        <div className="Footer">

            <div className="footer-redes">

                <button><img src="/img/imagens/fb.png" alt="logofb"/></button>
                <button><img src="/img/imagens/tw.png" alt="logofb"/></button>
                <button><img src="/img/imagens/ig.png" alt="logofb"/></button>

            </div>

            <div className='logo-organic'>
                <img src='/img/imagens/Logo.png' alt='logo da brand'/>
            </div>

            <div className='conteiner-para'>
                <p>{paragrafo}</p>
            </div>

        </div>
    )
}

export default Footer