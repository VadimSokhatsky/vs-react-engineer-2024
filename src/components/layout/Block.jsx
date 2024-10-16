import {useState} from "react";
import { FaChevronRight } from "react-icons/fa";

export function Block({ title, children }) {

    const [isOpen, setIsOpen] = useState(false);

    const style = !isOpen ? {
        height: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: 'hidden',
        transitionDuration: '0.5s',
    } : undefined;

    return (
        <div className="flex flex-col gap-1 w-full z-20">
            <div className="flex gap-2 items-center px-4 py-1 box-border text-slate-400 bg-slate-200 rounded-xl hover:bg-slate-100 cursor-pointer duration-500" onClick={() => setIsOpen(!isOpen)}>
                <FaChevronRight style={{ transform: isOpen ? 'rotate(90deg)' : undefined, transitionDuration: '0.5s' }} />
                {title}
            </div>
            <div style={style} className="h-max p-4 box-border duration-500 bg-slate-700 bg-opacity-80 rounded-xl">{children}</div>
        </div>
    )
}