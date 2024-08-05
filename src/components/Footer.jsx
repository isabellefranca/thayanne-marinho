import { IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
import { Contact } from "./Contact";

export function Footer() {
    return (
        <footer className="flex flex-col md:flex-row items-center text-center justify-center gap-6 md:gap-9 bg-black py-6">
                <div className="md:p-4">
                    <img src="./src/assets/images/logo.png" alt="Logo" className="max-w-28" />
                </div>
                <div className="flex justify-center space-x-6 text-white mt-4 md:mt-0">
                    <a href="#" className="h-5 w-5 hover:text-zinc-500 transition ease-in-out"><IconBrandInstagram /></a>
                    <a href="#" className="h-5 w-5 hover:text-zinc-500 transition ease-in-out"><IconBrandTwitter /></a>
                    <a href="#" className="h-5 w-5 hover:text-zinc-500 transition ease-in-out"><IconBrandLinkedin /></a>
                </div>
                <div>
                    <Contact />
                </div>
        </footer>
    )
}
