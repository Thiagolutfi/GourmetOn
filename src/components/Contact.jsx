import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function enviarFormulario(evento) {
    evento.preventDefault()
    setMensagem('Obrigado! Esta é uma demonstração. Seu e-mail não foi enviado nem salvo.')
    setEmail('')
  }

  return (
    <section id="contato" className="bg-orange-50 py-12">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-2xl font-bold">Receba novidades</h2>
        <p className="mt-3 text-stone-600">Deixe seu e-mail para futuras campanhas do GourmetOn.</p>
        <form onSubmit={enviarFormulario} className="mt-6 max-w-lg">
          <label htmlFor="email" className="mb-2 block font-bold">Seu e-mail</label>
          <input
            required
            type="email"
            id="email"
            placeholder="voce@exemplo.com"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            className="w-full rounded-lg border border-stone-300 bg-white p-3"
          />
          <button type="submit" className="mt-3 rounded-lg bg-orange-700 px-5 py-3 font-bold text-white hover:bg-orange-800">
            Enviar
          </button>
          <p role="status" className="mt-3 text-sm">{mensagem}</p>
        </form>
      </div>
    </section>
  )
}
