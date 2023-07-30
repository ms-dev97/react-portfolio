import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';

function Link({page, selectedPage, setSelectedPage}) {
    const pageLower = page.toLowerCase();
    return (
        <AnchorLink
            href={`#${pageLower}`}
            onClick={() => setSelectedPage(pageLower)}
            className={`${selectedPage === pageLower ? 'text-yellow' : ''} hover:text-yellow transition duration-100`}
        >
            {page}
        </AnchorLink>
    )
}

function Navbar({selectedPage, setSelectedPage, isTopOfPage}) {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-red";

    return (
        <nav className={`${navbarBackground} sticky top-0 z-30 flex items-center justify-between py-6 px-12`}>
            <div className='font-playfair text-3xl font-bold'>JE</div>
            {isDesktop ? (
                <div className="flex items-center gap-16 font-opensans font-semibold">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
            ) : (
                <button
                    className='rounded-full bg-red p-2'
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <img src="../assets/menu-icon.svg" alt="" />
                </button>
            )}

            {!isDesktop && isMenuToggled && (
                <div className="font-opensans font-semibold fixed right-0 bottom-0 top-0 z-40 bg-blue w-[300px]">
                    <button
                        className='flex justify-end p-6 w-full'
                        onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <img src="../assets/close-icon.svg" alt="close icon" />
                    </button>
                    <div className='flex flex-col gap-10 px-6'>
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;