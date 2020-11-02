import React from 'react'
import ilustration from '../img/undraw_dev_productivity_umsq_2.svg'
import Form from '../components/contact.form'

export default () => {
    return (
        <header className="bg-orange-400 h-screen flex justify-center items-center">
            <div className="mx-auto p-12 max-w-4xl ">
                <div className="flex justify-center items-center">
                    <div className="flex-1">
                        <h1 className="font-bold text-6xl text-blue-800"> ¡Hola! soy David </h1>
                        <p className="font-mono text-blue-900"> Desarrollo front end usando React. </p>
                    </div>
                    <img
                        src={ilustration} alt="Hombre trabajando en computador"
                        style={{ height: "300px" }} />
                </div>
                <div>
                    <Form />
                </div>
            </div>

        </header>
    )
}