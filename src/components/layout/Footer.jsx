export function Footer() {
    return (
        <footer className="sm:flex flex-col sm:gap-4 text-sm sm:text-base sm:text-left sm:pl-12 box-border">
            <p className="mb-2 sm:mb-0">
                Welcome here!
                Enjoy this small portfolio developed with&nbsp;
                <a href="https://react.dev/" target="_blank" className="font-bold hover:text-white hover:underline">
                    React.js
                </a>
            </p>
            <p>Just choose a section to get the information you are interested for.</p>
        </footer>
    )
}