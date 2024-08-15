export function MainSection() {

  const handleButtonClick = () => {
    const phoneNumber = '558393438657'
    const message = 'Olá, gostaria de saber mais sobre seus serviços.'

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.location.href = url;
}

  return (
    <section id="main" className="h-3/4 p-9">
      <div className="container mx-auto">
        <div className="space-y-9">
          <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-gray-600 text-transparent bg-clip-text">Thayanne Marinho Santos</h1>
          <h2 className="text-3xl">Advocacia</h2>
          <p className="text-xl tracking-tight">Especializados em diversas áreas do Direito, estamos prontos para entender suas necessidades e oferecer soluções personalizadas e eficazes.</p>
          <button className="btn hover:bg-zinc-500 transition ease-in-out" onClick={handleButtonClick}>Entre em contato</button>
        </div>
      </div>
    </section>
  );
}
