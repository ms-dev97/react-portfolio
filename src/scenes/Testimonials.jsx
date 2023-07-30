import LineGradient from "../components/LineGradient";
import {motion} from 'framer-motion';

function Testimonials() {
    return (
        <section id="testimonials" className="w-5/6 mx-auto pt-10 pb-16">
            <motion.div
                className="md:w-1/3 text-center md:text-left"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-4xl mb-5 text-red">
                    Testimonials
                </p>
                <LineGradient className="w-1/5" />
                <p className="mt-10">
                    Here's What People are Saying About My Work. Aliquam aliquet integer
                    ut fames odio in at. At magna ornare dictum lectus.
                </p>
            </motion.div>

            {/* Testimonials */}
            <div className="md:flex md:justify-center gap-8">
                <motion.div
                    className="relative p-16 mt-36 bg-red before:content-person1 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl">
                        A auctor pharetra hendrerit mattis amet etiam interdum platea.
                    </p>
                </motion.div>

                <motion.div
                    className="relative p-16 mt-36 bg-yellow before:content-person2 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl">
                        A auctor pharetra hendrerit mattis amet etiam interdum platea.
                    </p>
                </motion.div>

                <motion.div
                    className="relative p-16 mt-36 bg-blue before:content-person3 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                    }}
                >
                    <p className="font-playfair text-6xl">“</p>
                    <p className="text-center text-xl">
                        A auctor pharetra hendrerit mattis amet etiam interdum platea.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Testimonials