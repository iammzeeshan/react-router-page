
import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
            <div className="max-w-4xl mx-auto">

                <Link to="/" className="text-orange-600 hover:underline">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold mt-8 mb-4">
                    Privacy Policy
                </h1>

                <p className="text-gray-500 mb-10">
                    Last Updated: November 13, 2026
                </p>

                <p className="leading-7 mb-8">
                    Welcome to my portfolio website. Your privacy is important
                    to me. This Privacy Policy explains how information is
                    handled when you visit this website.
                </p>

                <section className="space-y-8">

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            1. Information Collection
                        </h2>
                        <p className="leading-7 text-gray-600">
                            This portfolio does not intentionally collect personal
                            information unless you voluntarily share it through
                            communication or contact forms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            2. How Information Is Used
                        </h2>
                        <p className="leading-7 text-gray-600">
                            Any information you provide may be used to respond
                            to your messages, answer inquiries, or communicate
                            about professional opportunities.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            3. Cookies
                        </h2>
                        <p className="leading-7 text-gray-600">
                            This website may use cookies or similar technologies
                            if analytics or other third-party services are enabled.
                            You can manage cookies through your browser settings.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            4. Third-Party Links
                        </h2>
                        <p className="leading-7 text-gray-600">
                            This website may contain links to external websites
                            such as GitHub, LinkedIn, Instagram, and Dribbble.
                            I am not responsible for their privacy practices.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Data Security
                        </h2>
                        <p className="leading-7 text-gray-600">
                            Reasonable care is taken to protect information
                            voluntarily shared with me. However, no online
                            transmission is completely secure.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            6. Changes to This Policy
                        </h2>
                        <p className="leading-7 text-gray-600">
                            This Privacy Policy may be updated from time to time.
                            Any changes will be reflected on this page.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            7. Contact
                        </h2>
                        <p className="leading-7 text-gray-600">
                            If you have any questions about this Privacy Policy,
                            feel free to contact me through my portfolio website.
                        </p>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default PrivacyPolicy;