import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";

function Contact() {
    return (
        <section id="contact" className="w-5/6 mx-auto pt-10 pb-16">
            <motion.div
                className="flex flex-col items-end"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
                }}
            >
                <p className="font-playfair font-semibold text-4xl">
                    <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                </p>
                <div className="w-1/2 my-5">
                    <LineGradient />
                </div>
            </motion.div>

            {/* Form and Image */}
            <div className="md:flex md:justify-between gap-16 my-5">
                <motion.div
                    className="basis-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: { opacity: 1, y: 0 },
                    }}
                >
                    <img src="../assets/contact-image.jpeg" alt="contact" />
                </motion.div>

                <motion.div
                    className="basis-1/2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                >
                    <form action="">
                        <input type="text" placeholder="Name"
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3" />

                        <input type="text" placeholder="Email"
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" />

                        <textarea placeholder="Message" cols="30" rows="10"
                            className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5" />

                    <button
                        className="p-5 bg-yellow font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white transition duration-500"
                        type="submit"
                    >
                        SEND ME A MESSAGE
                    </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact;