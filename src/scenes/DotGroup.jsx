import AnchorLink from "react-anchor-link-smooth-scroll";

function DotGroup({selectedPage, setSelectedPage}) {
    const selectedStyle = 'relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]';
    return (
        <div className="fixed right-7 top-[50%] flex flex-col gap-6">
            <AnchorLink 
                href="#home"
                className={`w-3 h-3 rounded-full ${selectedPage == 'home' ? selectedStyle : 'bg-dark-grey'}`}
                onClick={() => setSelectedPage('home')}
            />

            <AnchorLink 
                href="#skills"
                className={`w-3 h-3 rounded-full ${selectedPage == 'skills' ? selectedStyle : 'bg-dark-grey'}`}
                onClick={() => setSelectedPage('skills')}
            />

            <AnchorLink 
                href="#projects"
                className={`w-3 h-3 rounded-full ${selectedPage == 'projects' ? selectedStyle : 'bg-dark-grey'}`}
                onClick={() => setSelectedPage('projects')}
            />

            <AnchorLink 
                href="#testimonials"
                className={`w-3 h-3 rounded-full ${selectedPage == 'testimonials' ? selectedStyle : 'bg-dark-grey'}`}
                onClick={() => setSelectedPage('testimonials')}
            />

            <AnchorLink 
                href="#contact"
                className={`w-3 h-3 rounded-full ${selectedPage == 'contact' ? selectedStyle : 'bg-dark-grey'}`}
                onClick={() => setSelectedPage('contact')}
            />
        </div>
    );
}

export default DotGroup;