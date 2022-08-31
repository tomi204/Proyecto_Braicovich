import React from 'react'
import "./main.css"
const MainPage = () => {
    return (
        <section className='main-page'>
            <ul>
                <div className='main-div'>
                    <div className='box-div'><img src="./imagenes/Ed-1.jpg" alt="" className='image-obras' /></div>
                </div>
                <a href="mailto:info@ricardobraicovich.com" className='contacto-link'>
                    <h2 className='contacto'>Contacto</h2>
                </a>
            </ul>
        </section>
    )
}

export default MainPage