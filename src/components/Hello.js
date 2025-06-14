import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Hello = () => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    React.useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView])

    const helloVariant = {
        hidden: { opacity: 0, x:-100 },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                when: "beforeChildren",
                duration: 0.3
            }
        }
    }
    return (
        <motion.div ref={ref} variants={helloVariant} initial="hidden" animate="show" className="mb-4 container pt-xs-3 pt-sm-5" id="hello">
            <div className="fw-bold hello d-sm-inline d-xs-block">Hello.</div>
            <div className="introName mt-0 text-break d-sm-inline d-xs-block">I&#39;m Christen.</div>
            <p className="mt-2">
                An unintentional DIY-er, I&#39;m curious and like to discover how
                things work. Often regarded as an detail-oriented individual and also
                having worked on the client-side, I&#39;m able to put on the
                client and user&#39;s hats while working on projects. It allows me to anticipate
                and identify gaps.
            </p>
            <p className="mt-4">
                I&#39;ve completed my full stack developer bootcamp and look forward to
                embark on an exciting journey as one.
            </p>
        </motion.div>
    )
}