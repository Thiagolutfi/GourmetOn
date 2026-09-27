import { useEffect, useState } from 'react'

export default function Navbar() {
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    function verificarScroll() {
      setRolou(window.scrollY > 20)
    }

    verificarScroll()
    window.addEventListener('scroll', verificarScroll)
    // Remove o evento quando o menu sai da página.
    return () => window.removeEventListener('scroll', verificarScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-30 border-b border-stone-200 ${rolou ? 'bg-white/95' : 'bg-white'}`}>
      <nav aria-label="Menu principal" className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="text-2xl font-bold text-orange-700">GourmetOn</a>
        <div className="flex flex-wrap gap-3 text-sm md:gap-5">
          <a href="#inicio" className="hover:text-orange-700">Início</a>
          <a href="#beneficios" className="hover:text-orange-700">Benefícios</a>
          <a href="#pratos" className="hover:text-orange-700">Pratos</a>
          <a href="#depoimentos" className="hover:text-orange-700">Depoimentos</a>
          <a href="#contato" className="hover:text-orange-700">Contato</a>
        </div>
      </nav>
    </header>
  )
}
