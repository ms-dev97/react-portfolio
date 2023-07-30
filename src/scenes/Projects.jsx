import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
};

const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
};

// Single project component
function Project({title}) {
    const projectTitle = title.split(' ').join('-').toLowerCase();

    return (
        <motion.div variants={projectVariant} className="relative">
            <div className="absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue">
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                porttitor accumsan tincidunt.
                </p>
            </div>

            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
        </motion.div>
    )
}

function Projects() {
    return (
        <section id="projects" className="w-5/6 mx-auto py-20">
            {/* Heading */}
            <motion.div
                className="md:w-2/5 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
                }}
            >

                <p className="font-playfair font-semibild text-4xl mb-5 text-center">
                    Pro<span className="text-red">jects</span>
                </p>

                <div className="flex justify-center mt-5">
                    <LineGradient width="w-1/3" />
                </div>

                <p className="mt-10 mb-10">
                    Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
                    fames odio in at. At magna ornare dictum lectus. Purus massa morbi
                    purus nec eget eleifend ut elit.
                </p>
            </motion.div>

            {/* Projects */}
            <motion.div
                className="sm:grid sm:grid-cols-3"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >

            <div
                className="flex justify-center text-center items-center p-10 bg-red
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
                BEAUTIFUL USER INTERFACES
            </div>

            <Project title="project 1" />
            <Project title="project 2" />
            <Project title="project 3" />
            <Project title="project 4" />
            <Project title="project 5" />
            <Project title="project 6" />
            <Project title="project 7" />

            <div
                className="flex justify-center text-center items-center p-10 bg-blue
                max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
            >
                SMOOTH USER EXPERIENCE
            </div>
            </motion.div>
        </section>
    )
}

export default Projects;