import {FaInstagramSquare, FaLinkedin, FaEnvelope} from "react-icons/fa";

export function Contacts() {
    return (
        <article className="relative text-justify flex flex-col gap-4">
            <p>Please contact me in any way you prefer:</p>

            <a
                href="mailto:vs.frlnc@gmail.com"
                target="_blank"
                className="flex gap-2 items-center font-bold hover:cursor-pointer hover:text-white duration-500">
                <FaEnvelope size="1.2rem" />
                <p>vs.frlnc@gmail.com</p>
            </a>

            <a
                href="https://www.linkedin.com/in/vadim-sokhatsky-9b3950242/"
                target="_blank"
                className="flex gap-2 items-center font-bold hover:cursor-pointer hover:text-white duration-500">
                <FaLinkedin size="1.3rem"/>
                <p>LinkedIn</p>
            </a>

            <a
                href="https://instagram.com/id_coxa"
                target="_blank"
                className="flex gap-2 items-center font-bold hover:cursor-pointer hover:text-white duration-500">
                <FaInstagramSquare size="1.3rem" />
                <p>Instagram</p>
            </a>

            <p>I'm looking forward to getting started on our cooperation!</p>
        </article>
    )
}