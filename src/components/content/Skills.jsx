import Laptop from "../../images/laptop.webp";

export function Skills() {
    return (
        <article className="relative flex flex-col gap-4 pb-0 text-justify">
            <div className="relative flex flex-col gap-6 2xl:gap-8 w-full box-border float-left">
                <p className="w-full 2xl:w-2/3 2xl:pr-8 p-0 box-border">
                    As a software engineer I'm able to develop beautiful websites using the <b>React.js</b>&nbsp;
                    - a popular platform for creating fast and scalable online applications.
                    While I'm mostly focused on building user interfaces, I also can launch servers, project databases
                    and host your site to the desired domain, so that does mean I am a <b>full-stack</b> engineer.
                    Moreover, I can help you with the development of a product concept or create a web design, and even
                    optimize your app for Google Search for it to have a nice position there.
                </p>

                <p className="w-full xl:w-2/3 xl:pr-4 xl:py-4 2xl:pr-8 box-border">
                    As for my <b>soft skills</b>, I can guarantee you pleasant cooperation
                    with clearly defined working conditions and openness to your ideas.
                    Just trust and have fun to build an application of your dream.
                </p>

                <p className="w-full xl:w-2/3 xl:pr-4 xl:py-4 2xl:pr-8 box-border">
                    You can also watch my official CV at&nbsp;
                    <a
                        target="_blank"
                        href="https://docs.google.com/document/d/1tglCksPkvmQBU2B7GBx4xQ64lQ7yUz65_Z36tadD0SU/edit?tab=t.0"
                        className="font-bold hover:underline hover:text-white text-red-200"
                    >
                        this link
                    </a>.
                </p>
            </div>

            <img src={Laptop} className="xl:absolute right-0 bottom-0 xl:bottom-4 2xl:bottom-1/2 2xl:translate-y-1/2 w-full xl:w-1/3 rounded-xl shadow-vs"/>
        </article>
    )
}