import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

export function Header() {
    return (
        <header className="flex flex-col gap-2 sm:gap-4 w-full px-8 sm:px-12 box-border">
            <p className="text-2xl sm:text-4xl font-bold">Vadym Sokhatskyi</p>
            <p className="flex items-center gap-2 w-80 pr-2 box-border italic">
                <span className="mr-auto">Software Engineer</span>
                <a href="https://www.linkedin.com/in/vadim-sokhatsky-9b3950242/" target="_blank">
                    <FaLinkedin size="1.3rem" className="hover:text-slate-100 cursor-pointer duration-500"/>
                </a>

                <a href="https://github.com/VadimSokhatsky" target="_blank">
                    <FaGithub size="1.3rem" className="hover:text-slate-100 cursor-pointer duration-500"/>
                </a>

                <a href="https://instagram.com/id_coxa" target="_blank">
                    <FaInstagramSquare size="1.3rem" className="hover:text-slate-100 cursor-pointer duration-500"/>
                </a>

            </p>
        </header>
    )
}