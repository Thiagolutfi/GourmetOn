const depoimentos = [
  { nome: 'Marina S.', texto: 'Muito prático para resolver o almoço na correria da faculdade.' },
  { nome: 'Lucas R.', texto: 'Gostei de encontrar opções diferentes para o jantar.' },
  { nome: 'Camila A.', texto: 'Fácil de escolher e de pagar. Gostei da praticidade!' },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-5xl px-5 py-12">
      <h2 className="text-2xl font-bold">Depoimentos</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {depoimentos.map((depoimento) => (
          <figure key={depoimento.nome} className="rounded-lg border border-stone-200 p-5">
            <blockquote className="leading-6 text-stone-600">“{depoimento.texto}”</blockquote>
            <figcaption className="mt-4 font-bold">{depoimento.nome}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
