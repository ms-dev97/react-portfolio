import useMediaQuery from "../hooks/useMediaQuery";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

function MySkills() {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="w-5/6 mx-auto pt-10 pb-24">
            <div className="md:flex justify-between md:gap-16 mt-32">
                <motion.div
                    className="md:w-1/3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                    }}
                >

                    <p className="font-playfair font-semibild text-4xl mb-5">
                        MY <span className="text-red">Skills</span>
                    </p>

                    <LineGradient width="w-1/3" />

                    <p className="mt-10 mb-7">
                        Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                        fames odio in at.
                    </p>
                </motion.div>

                {isAboveLarge ? (
                    <div
                        className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                    >
                        <img
                            alt="skills"
                            className="z-10"
                            src="assets/skills-image.png"
                        />
                    </div>
                ) : (
                    <img alt="skills" className="z-10" src="assets/skills-image.png" />
                )}
            </div>

            {/* Skills */}
            <div className="md:flex md:justify-between gap-32 mt-12">
                {/* Experience */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="h-32 relative">
                        <p className="font-playfair font-semibold text-5xl">01</p>
                        <p className="font-playfair font-semibold text-3xl mt-3 relative z-10">
                            Experience
                        </p>
                        <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute top-0 right-0 z-0"></div>
                    </div>
                    <p className="mt-5">
                        A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
                        morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
                        odio sit sagittis,
                    </p>
                </motion.div>

                {/* Innovative */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="h-32 relative">
                        <p className="font-playfair font-semibold text-5xl">02</p>
                        <p className="font-playfair font-semibold text-3xl mt-3 relative z-10">
                            Innovative
                        </p>
                        <div className="w-1/2 md:w-3/4 h-32 bg-red absolute top-0 right-0 z-1"></div>
                    </div>
                    <p className="mt-5">
                        A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
                        morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
                        odio sit sagittis,
                    </p>
                </motion.div>

                {/* Imaginative */}
                <motion.div
                    className="md:w-1/3 mt-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                >
                    <div className="h-32 relative">
                        <p className="font-playfair font-semibold text-5xl">03</p>
                        <p className="font-playfair font-semibold text-3xl mt-3 relative z-10">
                            Imaginative
                        </p>
                        <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute top-0 right-0 z-1"></div>
                    </div>
                    <p className="mt-5">
                        A auctor pharetra hendrerit mattis amet etiam interdum platea. Est
                        morbi porttitor scelerisque fermentum, sagittis non egestas. Amet
                        odio sit sagittis,
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default MySkills;