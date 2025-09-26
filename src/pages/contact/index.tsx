import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
// import { ContactFormData, EmailResponse } from '@/types/contact';
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export interface EmailResponse {
    message: string;
    error?: string;
}
const ContactPage: React.FC = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result: EmailResponse = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-t from-gray-100 to-white">

            {/* Header Section */}
            <div className="relative mt-14 py-16 md:py-24 h-auto">
                <div
                    style={{ backgroundImage: `url('/bg/4.png')` }}
                    className="absolute z-0 inset-0 opacity-70 rotate-180"
                />
                <div className="relative z-10">
                    <div className="max-w-7xl mx-auto text-center mb-8 md:mb-16 px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-indigo-700 mb-4 animate-fade-in">
                            Contact Me
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-900 max-w-3xl mx-auto animate-fade-in">
                            Let{`'`}s discuss your next project or just say hello!
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Info & Form Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 animate-fade-in-up">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">

                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 p-[1px] rounded-3xl md:rounded-[40px] overflow-hidden shadow-lg h-full">
                            <div className="bg-white p-3 rounded-3xl md:rounded-[40px] overflow-hidden h-full">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-300 p-[0.7px] rounded-2xl md:rounded-[30px] overflow-hidden h-full">
                                    <div className="bg-white rounded-2xl md:rounded-[30px] p-6 md:p-8 h-full">
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Get in Touch</h2>

                                        <div className="space-y-4 md:space-y-6">
                                            {/* Phone */}
                                            <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className="bg-indigo-100 p-2 md:p-3 rounded-full">
                                                    <FaPhone className="text-indigo-600 w-4 h-4 md:w-5 md:h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs md:text-sm text-gray-600">Phone</p>
                                                    <a
                                                        href="tel:+212612345678"
                                                        className="text-base md:text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                                                    >
                                                        +212 6 9376 8664
                                                    </a>
                                                </div>
                                            </div>

                                            {/* WhatsApp */}
                                            <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className="bg-green-100 p-2 md:p-3 rounded-full">
                                                    <FaWhatsapp className="text-green-600 w-4 h-4 md:w-5 md:h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs md:text-sm text-gray-600">WhatsApp</p>
                                                    <a
                                                        href="https://wa.me/212693768664"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-base md:text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors"
                                                    >
                                                        Send a message
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Email */}
                                            <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className="bg-indigo-100 p-2 md:p-3 rounded-full">
                                                    <FaEnvelope className="text-indigo-600 w-4 h-4 md:w-5 md:h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs md:text-sm text-gray-600">Email</p>
                                                    <a
                                                        href="mailto:hamzabadrbus@gmail.com"
                                                        className="text-basemd:text-lg font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
                                                    >
                                                        hamzabadrbus@gmail.com
                                                    </a>
                                                </div>
                                            </div>

                                            {/* Location */}
                                            <div className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                                <div className="bg-indigo-100 p-2 md:p-3 rounded-full">
                                                    <FaMapMarkerAlt className="text-indigo-600 w-4 h-4 md:w-5 md:h-5" />
                                                </div>
                                                <div>
                                                    <p className="text-xs md:text-sm text-gray-600">Location</p>
                                                    <p className="text-base md:text-lg font-semibold text-gray-900">Morocco</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Availability */}
                                        <div className="mt-6 md:mt-8 p-3 md:p-4 bg-green-50 rounded-lg border border-green-200">
                                            <h3 className="font-semibold text-green-800 mb-1 md:mb-2 text-sm md:text-base">Availability</h3>
                                            <p className="text-green-700 text-xs md:text-sm">
                                                Available for new projects. Response time: within 24 hours.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-gradient-to-b from-gray-300 to-gray-100 p-[1px] rounded-3xl md:rounded-[50px] overflow-hidden shadow-lg">
                            <div className="bg-white p-3 rounded-3xl md:rounded-[50px] overflow-hidden">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-300 p-[0.7px] rounded-2xl md:rounded-[40px] overflow-hidden">
                                    <div className="bg-white rounded-2xl md:rounded-[40px] p-6 md:p-8 lg:p-12">
                                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                            {/* Name and Email */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="name"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                                                        placeholder="Your full name"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="email"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                                                        placeholder="your.email@example.com"
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone and Subject */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                                <div>
                                                    <label
                                                        htmlFor="phone"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                                                        placeholder="+212 6 12 34 56 78"
                                                    />
                                                </div>
                                                <div>
                                                    <label
                                                        htmlFor="subject"
                                                        className="block text-sm font-medium text-gray-700 mb-2"
                                                    >
                                                        Subject *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="subject"
                                                        name="subject"
                                                        required
                                                        value={formData.subject}
                                                        onChange={handleChange}
                                                        className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 text-sm md:text-base"
                                                        placeholder="Message subject"
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label
                                                    htmlFor="message"
                                                    className="block text-sm font-medium text-gray-700 mb-2"
                                                >
                                                    Message *
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    required
                                                    rows={5}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-vertical text-sm md:text-base"
                                                    placeholder="Tell me about your project or inquiry..."
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <div className="flex justify-center pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="flex items-center space-x-2 px-8 md:px-12 py-2 md:py-3 bg-indigo-600 text-white text-base md:text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                                >
                                                    <FaPaperPlane className="w-3 h-3 md:w-4 md:h-4" />
                                                    <span>
                                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                                    </span>
                                                </button>
                                            </div>

                                            {/* Status Messages */}
                                            {submitStatus === 'success' && (
                                                <div className="text-center p-3 md:p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm md:text-base">
                                                    ✅ Message sent successfully! I{`'`}ll get back to you soon.
                                                </div>
                                            )}
                                            {submitStatus === 'error' && (
                                                <div className="text-center p-3 md:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm md:text-base">
                                                    ❌ Error sending message. Please try again.
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Pattern */}
            <div
                className="w-full h-16 md:h-20 opacity-80"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
                    backgroundSize: '40px 30px',
                }}
            />
        </div>
    );
};

export default ContactPage;