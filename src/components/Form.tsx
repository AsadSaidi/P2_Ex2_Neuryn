import { useState } from "react";

const Formulario = ()=> {
    const [enviado, setEnviado] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setEnviado(true);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-slate-900/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 shadow-xl max-w-2xl w-full mx-auto flex flex-col gap-8">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">Contacto</h1>
            <label className="flex flex-col gap-2 text-slate-200 text-lg">
                Nombre:
                <input type="text" name="nombre" className="bg-slate-800/60 border border-slate-700 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all text-lg" />
            </label>
            <label className="flex flex-col gap-2 text-slate-200 text-lg">
                Correo Electrónico:
                <input type="email" name="correo" className="bg-slate-800/60 border border-slate-700 rounded-lg px-6 py-3 text-white focus:outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all text-lg" />
            </label>
            <label className="flex flex-col gap-2 text-slate-200 text-lg">
                Mensaje:
                <textarea name="mensaje" className="bg-slate-800/60 border border-slate-700 rounded-lg px-6 py-3 text-white min-h-[150px] focus:outline-none focus:border-blue-500/50 focus:bg-slate-900/70 transition-all text-lg" />
            </label>
            <button type="submit" className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-colors mt-2 shadow-md text-lg">Enviar</button>
            {enviado && (
                <div className="text-green-400 text-center font-semibold mt-4">¡Mensaje enviado correctamente!</div>
            )}
        </form>
    )
}

export default Formulario;