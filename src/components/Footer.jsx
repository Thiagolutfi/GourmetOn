export default function Footer() {
  return (
    <footer className="bg-stone-800 text-white">
      <div className="mx-auto max-w-5xl px-5 py-8">
        <p className="text-xl font-bold">GourmetOn</p>
        <p className="mt-3 text-sm">Contato fictício: contato@gourmeton.example</p>
        <div className="mt-4 flex gap-5 text-sm">
          <a href="https://www.instagram.com/" className="underline">Instagram</a>
          <a href="https://www.facebook.com/" className="underline">Facebook</a>
          <a href="#termos" className="underline">Termos de uso</a>
        </div>
      </div>
    </footer>
  )
}
