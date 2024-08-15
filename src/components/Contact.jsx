import { IconBrandWhatsapp } from "@tabler/icons-react";

export function Contact () {

    const handleButtonClick = () => {
        const phoneNumber = '558393438657'
        const message = 'Olá, gostaria de saber mais sobre seus serviços.'

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
        window.location.href = url;
    }

    return (
        <div className="flex flex-row gap-3">
            <button onClick={handleButtonClick} className="btn bg-green-700"><IconBrandWhatsapp /> Entre em contato</button>
        </div>
    )
}
