import React from "react";

function Contact() {
    return (
        <>
            <div className="h-100 flex flex-col justify-center items-center max-h-screen">
                <h1 className="text-gray-700 text-3xl font-bold">Let's Get in Touch</h1>
                <br />
                <p className="text-orange-700">Have a question or project in mind?.</p>
                <div className="text-gray-500 space-x-8 text-3xl pt-4 ">
                    <a href="https://www.linkedin.com/in/md-zeeshan-ismat/" target="_blank" rel="noreferrer" aria-label="Linkedin">
                        <i className="ri-linkedin-box-fill hover:text-orange-700"></i>
                    </a>
                    <a href="https://www.instagram.com/iam_mzeeshan" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <i className="ri-instagram-fill hover:text-orange-700"></i>
                    </a>
                    <a href="https://dribbble.com/iammzeeshan" target="_blank" rel="noreferrer" aria-label="Dribbble">
                        <i className="ri-dribbble-fill hover:text-orange-700"></i>
                    </a>
                    <a href="https://discord.com/" target="_blank" rel="noreferrer" aria-label="Discord">
                        <i className="ri-discord-fill hover:text-orange-700"></i>
                    </a>
                    <a href="https://github.com/iammzeeshan" target="_blank" rel="noreferrer" aria-label="Github">
                        <i className="ri-github-fill hover:text-orange-700"></i>
                    </a>
                </div>
            </div>
        </>
    )
}
export default Contact;