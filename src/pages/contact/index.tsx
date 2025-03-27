


import { useState } from "react";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";
import Image from "next/image";
import { textarea } from "framer-motion/client";
import { SiGmail } from "react-icons/si";

interface FormDetails {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
    const formInitialDetails: FormDetails = {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        message: "",
    };

    const [formDetails, setFormDetails] = useState<FormDetails>(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState<{ success?: boolean; message?: string }>({});

    const onFormUpdate = (category: keyof FormDetails, value: string) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // e.preventDefault();
        // setButtonText("Sending...");

        // const serviceID = "service_mbenaoui5733";
        // const templateID = "template_mbenaoui5733";
        // const userID = "O1s7K5IOGCITNPAzv";

        // emailjs
        //     .send(serviceID, templateID, formDetails, userID)
        //     .then(() => {
        //         setButtonText("Send");
        //         setFormDetails(formInitialDetails);
        //         setStatus({ success: true, message: "Message sent successfully" });
        //     })
        //     .catch((error) => {
        //         setButtonText("Send");
        //         setStatus({ success: false, message: "Something went wrong, please try again later." });
        //         console.error("Error:", error);
        //     });
    };
    return <div className="w-full mx-auto mt-40">
        <div className="flex justify-center items-center mx-auto w-full space-x-4">
            <SiGmail className='text-gray-600 w-7 h-7' />
            <div className="text-lg ">hamzabadrbus@gmail.com</div>
        </div>
    </div>
    return (
        <section className=" min-h-screen bg-gradient-to-r from-white to-blue-100 pb-4 pt-40 px-5" id="connect">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <Image
                                className={`${isVisible ? "animate-zoom-in" : ""}`}
                                src={"/contact-img.svg"}
                                alt="Contact Us"
                                width={500}
                                height={500}
                            />
                        )}
                    </TrackVisibility>
                </div>

                <div>
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={`${isVisible ? "animate-fade-in" : ""}`}>
                                <h2 className="text-4xl font-bold text-white mb-5">Get In Touch</h2>
                                <form className="space-y-3" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        value={formDetails.first_name}
                                        placeholder="First Name"
                                        onChange={(e) => onFormUpdate("first_name", e.target.value)}
                                        className="w-full bg-white bg-opacity-10 border border-white border-opacity-50 rounded-lg text-white py-3 px-4 focus:bg-white focus:text-black transition"
                                    />
                                    <input
                                        type="text"
                                        value={formDetails.last_name}
                                        placeholder="Last Name"
                                        onChange={(e) => onFormUpdate("last_name", e.target.value)}
                                        className="w-full bg-white bg-opacity-10 border border-white border-opacity-50 rounded-lg text-white py-3 px-4 focus:bg-white focus:text-black transition"
                                    />
                                    <input
                                        type="email"
                                        value={formDetails.email}
                                        placeholder="Email Address"
                                        onChange={(e) => onFormUpdate("email", e.target.value)}
                                        className="w-full bg-white bg-opacity-10 border border-white border-opacity-50 rounded-lg text-white py-3 px-4 focus:bg-white focus:text-black transition"
                                    />
                                    <input
                                        type="tel"
                                        value={formDetails.phone}
                                        placeholder="Phone No."
                                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                                        className="w-full bg-white bg-opacity-10 border border-white border-opacity-50 rounded-lg text-white py-3 px-4 focus:bg-white focus:text-black transition"
                                    />
                                    <textarea
                                        rows={6}
                                        value={formDetails.message}
                                        placeholder="Message"
                                        onChange={(e) => onFormUpdate("message", e.target.value)}
                                        className="w-full bg-white bg-opacity-10 border border-white border-opacity-50 rounded-lg text-white py-3 px-4 mb-4 focus:bg-white focus:text-black transition"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-purple-500 hover:text-white transition relative overflow-hidden"
                                    >
                                        <span className="z-10 relative">{buttonText}</span>
                                        <span className="absolute inset-0 bg-purple-500 z-0 transition-all duration-300 transform scale-x-0 hover:scale-x-100 origin-left"></span>
                                    </button>
                                    {status.message && (
                                        <p
                                            className={`mt-4 ${status.success ? "text-green-500" : "text-red-500"
                                                }`}
                                        >
                                            {status.message}
                                        </p>
                                    )}
                                </form>
                            </div>
                        )}
                    </TrackVisibility>
                </div>
            </div>
        </section>
    );
};

export default Contact;
