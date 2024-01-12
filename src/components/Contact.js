import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { EmailSVG } from './EmailSVG'
import { GitHubSVG } from './GitHubSVG'

export const Contact = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    React.useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView])

    const contactVariant = {
        hidden: { opacity: 0, scale: 0 },
        show: {
            opacity: 1, scale: 1, transition: {
                duration: 0.8,
            }
        }
    }

    return (
        <div id='contact'>
            <motion.div ref={ref} variants={contactVariant} initial="hidden" whileInView="show" viewport={{ once: true }} >
                <div className="projectHeaderTitle fs-5 text-center text-uppercase">
                    Get in touch
                </div>
                <div className="fw-bold bar"></div>
                <div>
                    <div className="mb-4 container mt-4 text-center">
                        <p>Send me an email to connect.</p>
                        <p>I&#39;m available to discuss any new opportunities, be it employment or even projects to learn together, so get in touch with me.</p>
                    </div>
                    <div className="text-center mt-5 mb-5">
                        <a href="mailto:lim.christen@gmail.com?subject=Say Hello">
                            <EmailSVG width="60px" role="button" aria-label="Email link" />
                        </a>{" "}
                        ||{" "}
                        <a
                            href="https://github.com/xxxristen"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHubSVG width="60px" role="button" aria-label="GitHub link" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}