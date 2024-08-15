import { Contact } from "../components/Contact";

export function Booking () {
    return (
        <section id="contact" className="bg-black mb-9 md:mb-0">
            <div className="flex flex-col gap-6 p-6 md:p-9">
                <h2 className="text-white font-semibold text-2xl md:text-4xl">Como agendar:</h2>
                <p className="text-white text-base md:text-lg">Atendemos todo o Brasil de forma on-line e presencial.</p>
                <p className="text-white text-base md:text-lg">Se você tem dúvidas, precisa de orientação jurídica ou deseja agendar uma sessão, estamos à disposição para atendê-lo(a). Entre em contato conosco pelo WhatsApp para esclarecer qualquer questão relacionada aos nossos serviços jurídicos, agendar consultas e obter informações sobre como podemos ajudá-lo(a) com suas necessidades legais. Estamos aqui para oferecer o suporte que você precisa de maneira rápida e conveniente.
</p>
                <Contact />
            </div>
        </section>
    )
}
