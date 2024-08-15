export function AboutSection() {
  return (
      <section id="about" className="flex justify-center items-center h-screen mb-9 md:mb-0">
        <div className="flex flex-col md:flex-row max-w-4xl items-center p-4 gap-6 md:gap-9">
          <div className="w-full md:w-1/2">
            <div className="flex justify-center md:justify-start">
              <img
                src="/thay-sobre.png"
                alt="Thayanne S Marinho"
                className="mx-auto h-auto max-h-96 w-full md:w-auto object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center max-w-lg">
          <h2 className="text-4xl mb-3 font-bold">Saiba mais sobre mim:</h2>
          <p>Advogada graduada em Direito pela Universidade de Ensino Superior da Paraíba (UNIESP) e especialista em Direito Eleitoral pela Pontifícia Universidade Católica de Minas Gerais (PUC).
          Com experiência sólida iniciada no ano de 2022, nas áreas de Direito Eleitoral e Administrativo.
          </p>
          </div>
        </div>
      </section>
  );
}
