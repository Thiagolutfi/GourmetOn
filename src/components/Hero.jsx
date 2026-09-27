export default function Hero() {
  return (
    <section id="inicio" className="bg-orange-50 pt-40 pb-12">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-5 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold">GourmetOn: sabor que chega até você</h1>
          <p className="mt-4 leading-7 text-stone-600">
            Um aplicativo de delivery para encontrar seus pratos favoritos e conhecer novos restaurantes com praticidade.
          </p>
          <button type="button" className="mt-6 rounded-lg bg-orange-700 px-5 py-3 font-bold text-white hover:bg-orange-800">
            Baixar o aplicativo
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85"
          alt="Hambúrguer com queijo, alface e tomate"
          className="h-72 w-full rounded-lg object-cover"
        />
      </div>
    </section>
  )
}
