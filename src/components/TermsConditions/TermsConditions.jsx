
import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 px-6 py-16">
            <div className="max-w-4xl mx-auto">

                <Link to="/" className="text-orange-600 hover:underline">
                    ← Back to Home
                </Link>

                <h1 className="text-4xl font-bold mt-8 mb-4">
                    Terms & Conditions
                </h1>

                <p className="text-gray-500 mb-10">
                    Last Updated: November 13, 2026
                </p>

                <p className="leading-7 mb-8">
                    Welcome to my personal portfolio website. By accessing
                    and using this website, you agree to the following
                    Terms and Conditions.
                </p>

                <section className="space-y-8">

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            1. Website Usage
                        </h2>
                        <p className="leading-7 text-gray-600">
                            You agree to use this website only for lawful purposes.
                            You must not attempt to damage, disrupt, or misuse
                            any part of this website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            2. Intellectual Property
                        </h2>
                        <p className="leading-7 text-gray-600">
                            Unless otherwise stated, the content, designs,
                            graphics, text, and projects displayed on this
                            portfolio belong to Md Zeeshan or their respective
                            owners.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            3. Copyright
                        </h2>
                        <p className="leading-7 text-gray-600">
                            You may not copy, reproduce, distribute, or use
                            website content for commercial purposes without
                            prior permission from the respective owner.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            4. External Links
                        </h2>
                        <p className="leading-7 text-gray-600">
                            This website may include links to third-party
                            websites. I do not control or guarantee the
                            accuracy, availability, or content of those websites.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            5. Disclaimer
                        </h2>
                        <p className="leading-7 text-gray-600">
                            This website and its content are provided on an
                            "as is" basis without warranties of any kind.
                            Information may be updated or changed without notice.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            6. Limitation of Liability
                        </h2>
                        <p className="leading-7 text-gray-600">
                            To the extent permitted by applicable law, I am
                            not liable for any damages arising from the use
                            of this website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            7. Changes to Terms
                        </h2>
                        <p className="leading-7 text-gray-600">
                            I reserve the right to update these Terms and
                            Conditions at any time. Updated terms will be
                            published on this page.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mb-3">
                            8. Contact
                        </h2>
                        <p className="leading-7 text-gray-600">
                            For any questions regarding these Terms and
                            Conditions, please contact me through my
                            portfolio website.
                        </p>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default TermsConditions;
