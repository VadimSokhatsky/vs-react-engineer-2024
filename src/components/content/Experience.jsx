import Letter from "../../images/letter.webp";

export function Experience() {
    return (
        <article className="relative flex flex-col 2xl:flex-row gap-4 2xl:gap-12 pb-0 text-justify">
            <div className="flex flex-col gap-4 justify-between w-full 2xl:w-2/3">
                <p>
                    Starting in 2021, I have managed to take part in several commercial projects
                    aimed at creating software for a wide range of users.
                    This happened both within IT companies with the entire development team
                    and in freelance settings with close contact with product owners.
                    Here are some examples of web apps that I have been involved in implementing:
                </p>

                <p><b>Quizzer</b> - an online platform where users can test themselves in various areas of knowledge,
                    share statistics, compete with friends and create their own quizzes.</p>

                <p><b>Solar panel monitoring system</b> - detailed metrics reports, analytics engine settings,
                    documentation store, practical recommendations, etc.
                    A useful management service with a multi-level access system.
                </p>

                <p><b>Czernowitzer Zeitung - Jewish Online Newspaper.</b> News, articles, and photo reports
                    on the topic of Jewish history and life in my hometown.
                <br/>
                <a href="https://jews-chernivtsi.com" target="_blank" className="font-bold hover:text-white hover:underline text-red-200">
                    jews-chernivtsi.com
                </a>
            </p>

            <p>Some core <b>technologies and tools</b> I use for web development: HTML, CSS, JavaScript, React, Node.js, Firebase, AWS, Figma, GitHub</p>

                <a
                    href="https://docs.google.com/document/d/1tglCksPkvmQBU2B7GBx4xQ64lQ7yUz65_Z36tadD0SU/edit?tab=t.0"
                    target="_blank"
                    className="font-bold hover:text-white hover:underline text-red-200"
                >
                    Watch my full CV.
                </a>
        </div>

    <a
        className="w-full 2xl:w-1/3 m-0 2xl:my-auto"
        href="https://docs.google.com/document/d/1KOcK8AfuT6QnHIeD8RmJNF2KK1JwhZkkD13HTmhwuA0/edit?usp=sharing"
        target="_blank"
    >
        <figcaption className="text-sm italic">Recommendation letter</figcaption>
        <img src={Letter} className="w-full rounded-xl shadow-vs hover:cursor-pointer 2xl:hover:brightness-50 duration-500"/>
    </a>
        </article>
    )
}