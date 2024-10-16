import {Block} from "./Block";

import {About} from "../content/About";
import {Skills} from "../content/Skills";
import {Experience} from "../content/Experience";
import {Contacts} from "../content/Contacts";

export function Content() {
    return (
        <div className="relative flex flex-col gap-1 w-full h-full sm:px-12 box-border overflow-auto sm:bg-logo bg-no-repeat bg-1/2 bg-bottom">
            <Block title="Biography">
                <About />
            </Block>
            <Block title="Work Skills">
                <Skills />
            </Block>
            <Block title="Experience">
                <Experience />
            </Block>
            <Block title="Contacts">
                <Contacts />
            </Block>
        </div>
    )
}