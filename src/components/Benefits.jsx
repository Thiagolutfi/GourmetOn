const beneficios = [
  { titulo: 'Entrega rápida', texto: 'Receba sua comida favorita com praticidade no dia a dia.' },
  { titulo: 'Variedade de restaurantes', texto: 'Encontre diferentes restaurantes e opções para todos os gostos.' },
  { titulo: 'Pagamento fácil', texto: 'A proposta é permitir pagamentos simples por Pix ou cartão.' },
]

export default function Benefits() {
  return (
    <section id="beneficios" className="mx-auto max-w-5xl px-5 py-12">
      <h2 className="text-2xl font-bold">Por que escolher o GourmetOn?</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {beneficios.map((beneficio) => (
          <article key={beneficio.titulo} className="rounded-lg border border-stone-200 p-5">
            <h3 className="text-lg font-bold text-orange-700">{beneficio.titulo}</h3>
            <p className="mt-3 leading-6 text-stone-600">{beneficio.texto}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
