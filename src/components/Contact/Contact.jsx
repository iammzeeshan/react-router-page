
import React, { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send(
                "service_3rof74q",
                "template_zckjv8i",
                {
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message
                },
                "bV4E77JCpS0NC9EHO"
            );

            alert("Form was submitted successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: ""
            });

        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="h-auto mt-20 mb-20 flex flex-col justify-center items-center px-4">

                <h1 className="text-gray-700 text-3xl font-bold">
                    Let's Get in Touch
                </h1>

                <br />

                <p className="text-orange-700">
                    Have a question or project in mind?
                </p>

                {/* Social Media Links */}

                <div className="text-gray-500 flex gap-8 text-3xl pt-4">

                    <a
                        href="https://www.linkedin.com/in/md-zeeshan-ismat/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                    >
                        <i className="ri-linkedin-box-fill hover:text-orange-700 transition"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/iam_mzeeshan"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                    >
                        <i className="ri-instagram-fill hover:text-orange-700 transition"></i>
                    </a>

                    <a
                        href="https://dribbble.com/iammzeeshan"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Dribbble"
                    >
                        <i className="ri-dribbble-fill hover:text-orange-700 transition"></i>
                    </a>

                    <a
                        href="https://discord.com/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Discord"
                    >
                        <i className="ri-discord-fill hover:text-orange-700 transition"></i>
                    </a>

                    <a
                        href="https://github.com/iammzeeshan"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                    >
                        <i className="ri-github-fill hover:text-orange-700 transition"></i>
                    </a>

                </div>

                {/* Contact Form */}

                <form
                    id="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col mt-12 gap-4 w-full max-w-md"
                >

                    <input
                        className="border border-gray-400 rounded-md px-5 py-3 outline-none focus:border-orange-600"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                name: e.target.value
                            })
                        }
                        required
                    />

                    <input
                        className="border border-gray-400 rounded-md px-5 py-3 outline-none focus:border-orange-600"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                email: e.target.value
                            })
                        }
                        required
                    />

                    <input
                        className="border border-gray-400 rounded-md px-5 py-3 outline-none focus:border-orange-600"
                        type="tel"
                        name="phone"
                        placeholder="Telephone Number"
                        value={formData.phone}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                phone: e.target.value
                            })
                        }
                        required
                    />

                    <textarea
                        className="border border-gray-400 rounded-md px-5 py-3 outline-none focus:border-orange-600 resize-none"
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value
                            })
                        }
                        required
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-orange-600 text-white font-semibold rounded-md py-3 px-7 hover:bg-orange-700 transition cursor-pointer disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Submit"}
                    </button>

                </form>

            </div>
        </>
    );
}

export default Contact;
