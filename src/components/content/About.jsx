import Hometown from "../../images/hometown.webp";
import Work from "../../images/work.webp";
import Rest from "../../images/rest.webp";

export function About() {
    return (
        <article className="relative flex flex-col gap-4 pb-0 2xl:pb-4 text-justify">
            <div className="relative flex flex-col sm:flex-row w-full">
                <div className="relative sm:absolute top-0 left-0 flex flex-col gap-2 w-full sm:w-1/4 mb-4 sm:mb-0 float-left">
                    <img src={Hometown} className="w-full rounded-xl shadow-vs"/>
                    <figcaption className="text-sm italic">My lovely hometown</figcaption>
                </div>
                <p className="w-full sm:w-3/4 ml-auto p-0 sm:pl-4 box-border">
                    My name is Vadym Sokhatskyi.
                    I am a software engineer from Chernivtsi.
                    This cozy town is located in western Ukraine and it has a big multinational history.
                    It's such a nice place to have a measured lifestyle while work remotely.
                    In any case, this outward calm contrasts perfectly with the fast pace of the modern IT industry.
                    Working on different projects makes your life rich in impressions and full of enthusiasm.
                </p>
            </div>

            <div className="relative flex flex-col sm:flex-row-reverse items-center w-full">
                <div className="flex flex-col gap-2 w-full sm:w-1/4 mb-4 sm:mb-0 float-right">
                    <img src={Work} className="w-full rounded-xl shadow-vs"/>
                    <figcaption className="text-sm italic">I like to film work process</figcaption>
                </div>
                <p className="w-full 2xl:w-1/2 ml-auto pr-4 2xl:px-4 pb-2 box-border">
                    I've been developing software for the past few years.
                    During this time, I managed to gain a wealthy experience in creation of web programs, both client
                    and
                    server.
                    Although my skills are versatile, my true passion is creating beautiful and interactive user
                    interfaces.
                    That's why I chose React.js as my main work tool and a popular library with a large developer
                    community.
                </p>
            </div>

            <div className="relative flex flex-col sm:flex-row w-full">
                <div className="relative sm:absolute bottom-0 2xl:-bottom-4 left-0 flex flex-col gap-2 w-full sm:w-1/4 mb-4 sm:mb-0">
                    <img src={Rest} className="w-full rounded-xl shadow-vs"/>
                    <figcaption className="text-sm italic">Having chill after work</figcaption>
                </div>
                <p className="w-full sm:w-3/4 ml-auto pl-0 sm:pl-4 pb-0 2xl:pb-2 box-border">
                    Despite my passion for programming, a work-life balance is also important to me.
                    So in between tasks I like to go for a walk or play my guitar,
                    and on the weekends I prefer to go on a little trip or make a live show with my friend at the local
                    pub.
                    Each aspect of your life is not a separate part of it, but a significant note in the melody you
                    play.
                    Comprehensive development is the key to success in any field.
                </p>
            </div>
        </article>
    )
}