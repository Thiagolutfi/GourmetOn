import { useEffect, useState } from 'react'

export default function FoodSection() {
  // O estado guarda as receitas recebidas da API.
  const [comidas, setComidas] = useState([])
  const [mensagem, setMensagem] = useState('Carregando receitas...')

  // A lista vazia faz a busca acontecer quando o componente é exibido.
  useEffect(() => {
    async function buscarComidas() {
      const chaveApi = import.meta.env.VITE_SPOONACULAR_API_KEY

      if (!chaveApi) {
        setMensagem('Configure VITE_SPOONACULAR_API_KEY no arquivo .env para carregar as receitas.')
        return
      }

      try {
        const resposta = await fetch(`https://api.spoonacular.com/recipes/random?number=5&apiKey=${chaveApi}`)

        if (!resposta.ok) {
          throw new Error('Não foi possível carregar as receitas. Confira a conexão e a chave da API.')
        }

        const dados = await resposta.json()
        setComidas(dados.recipes)
        setMensagem('')
      } catch (erro) {
        setMensagem('Não foi possível carregar as receitas. Confira a conexão e a chave da API.')
      }
    }

    buscarComidas()
  }, [])

  return (
    <section id="pratos" className="bg-orange-50 py-12">
      <div className="mx-auto max-w-5xl px-5">
        <h2 className="text-2xl font-bold">Conheça novos pratos</h2>
        <p className="mt-3 text-stone-600">
          Confira cinco receitas da Spoonacular.
        </p>

        <p className="mt-6" role="status">{mensagem}</p>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comidas.map((comida) => (
            <article key={comida.id} className="overflow-hidden rounded-lg border border-stone-200 bg-white">
              <img src={comida.image} alt={comida.title} className="h-48 w-full object-cover" />
              <h3 className="p-4 text-lg font-bold">{comida.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
