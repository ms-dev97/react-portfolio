import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from "../hooks/useMediaQuery";

function Home ({setSelectedPage}) {
    const isAboveLarge = useMediaQuery('(min-width: 1060px)');
    return (
        <section id="home" className="w-5/6 mx-auto md:h-full md:flex">
            {/* Main text */}
            <div className="basis-2/5 mt-12 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >
                    <p className="text-6xl font-playfair text-center md:text-start">
                        Jane {""}
                        <span
                            className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
                            before:absolute before:-left-[38px] before:-top-[117px] before:z-[-1]"
                        >
                            Esper
                        </span>
                    </p>
                </motion.div>

                <p className="mt-16 mb-7 text-sm text-center md:text-start">
                    Adipiscing arcu, in aliquam fringilla cursus. Elit arcu elementum
                    viverra malesuada sem ac faucibus dolor. Sagittis scelerisque.
                </p>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                >
                    <AnchorLink
                    className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                             hover:bg-blue hover:text-white transition duration-500"
                    onClick={() => setSelectedPage("contact")}
                    href="#contact"
                    >
                        Contact Me
                    </AnchorLink>

                    <AnchorLink
                        className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
                        onClick={() => setSelectedPage("contact")}
                        href="#contact"
                    >
                        <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
                        Let's talk.
                        </div>
                    </AnchorLink>
                </motion.div>

                <motion.div
                    className="flex mt-5 justify-center md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="flex justify-center md:justify-start my-10 gap-7">
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img alt="linkedin-link" src="../assets/linkedin.png" />
                        </a>
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://www.twitter.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img alt="twitter-link" src="../assets/twitter.png" />
                        </a>
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img alt="facebook-link" src="../assets/facebook.png" />
                        </a>
                        <a
                            className="hover:opacity-50 transition duration-500"
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img alt="instagram-link" src="../assets/instagram.png" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Image */}
            <div className="basis-3/5 mt-16 md:mt-32 flex justify-center">
            {isAboveLarge ? (
            <div
                className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
                before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
                <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px]"
                src="assets/profile-image.png"
                />
            </div>
            ) : (
            <img
                alt="profile"
                className="z-10 w-full max-w-[400px]"
                src="assets/profile-image.png"
            />
            )}
        </div>
        </section>
    );
}

export default Home;