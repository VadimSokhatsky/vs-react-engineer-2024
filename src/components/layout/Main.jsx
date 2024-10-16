import Me from "../../images/me.webp";
import {Content} from "./Content";
import {Footer} from "./Footer";

export function Main() {
    return (
        <main className="flex flex-col sm:flex-row gap-4 sm:gap-12 h-auto sm:h-3/5 px-8 sm:px-12 box-border sm:overflow-hidden">
            <img src={Me} className="rounded-2xl"/>
            <div className="block sm:hidden">
                <Footer />
            </div>
            <Content />
        </main>
    )
}