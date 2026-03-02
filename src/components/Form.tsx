import { useState, useRef, useEffect } from "react";


const Formulario = ()=> {
    const [enviado, setEnviado] = useState(false);
    const nombreRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (nombreRef.current) {
            nombreRef.current.focus();
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEnviado(true);
    };

    return (
        <form onSubmit={handleSubmit} className="contact-card contact-form contact-form--gap-2">
            <h1 className="contact-card__title">Contacto</h1>
            <label htmlFor="nombre" className="contact-form__field">
                Nombre:
                <input ref={nombreRef} id="nombre" type="text" name="nombre" className="contact-form__input" />
            </label>
            <label htmlFor="correo" className="contact-form__field">
                Correo Electrónico:
                <input id="correo" type="email" name="correo" className="contact-form__input" />
            </label>
            <label htmlFor="mensaje" className="contact-form__field">
                Mensaje:
                <textarea id="mensaje" name="mensaje" className="contact-form__textarea" />
            </label>
            <button type="submit" className="contact-form__button">Enviar</button>
            {enviado && (
                <div className="contact-form__success">¡Mensaje enviado correctamente!</div>
            )}
        </form>
    )
}

export default Formulario;