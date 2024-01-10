import React from 'react'
import { EmailSVG } from './EmailSVG'
import { GitHubSVG } from './GitHubSVG'

export const Contact = () => {
    return (
        <div className='hidden' id='contact'>
            <div className="projectHeaderTitle fs-5 text-center text-uppercase">
            Get in touch
        </div>
            <div className="fw-bold bar"></div>
            <div className="mb-4 container">
                <p className="mt-4 text-center">
                    Send me an email if you want to connect. I&#39;m available to discuss any new opportunities, be it employment or even projects to learn together.</p>
                <p className="mt-4 text-center">Get in touch with me and I&#39;ll get back to you soon.
                </p>
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
    )
}