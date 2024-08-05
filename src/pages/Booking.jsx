import { Contact } from "../components/Contact";

export function Booking () {
    return (
        <section id="contact" className="bg-black mb-9 md:mb-0">
            <div className="flex flex-col gap-6 p-6 md:p-9">
                <h2 className="text-white font-semibold text-2xl md:text-4xl">Como agendar:</h2>
                <p className="text-white text-base md:text-lg">Atendemos todo o Brasil de forma on-line...</p>
                <p className="text-white text-base md:text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quod suscipit accusantium. Labore itaque, nostrum tempora nulla maxime voluptatibus alias amet incidunt ducimus. Necessitatibus assumenda id aliquid eligendi cumque minus.</p>
                <Contact />
            </div>
        </section>
    )
}
