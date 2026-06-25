import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Phone, Mail, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';

// EmailJS configuration (https://dashboard.emailjs.com/)
const EMAILJS_SERVICE_ID = 'service_xhedllw';
const EMAILJS_TEMPLATE_ID = 'template_9yc2bmn';
const EMAILJS_PUBLIC_KEY = 'Lisa6KgS2tlRIzolZ';

interface ContactSectionProps {
  isDarkMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const templateParams = {
        from_name: formData.name,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      setSubmitSuccess(true);

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(null);
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
      <section
          id="contact"
          className={`py-20 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Contactez-moi
            </h2>
            <div className={`w-24 h-1 mx-auto rounded ${isDarkMode ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            <p className={`mt-4 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Vous avez un projet en tête ou souhaitez discuter d'opportunités ? N'hésitez pas à me contacter en utilisant l'un des moyens ci-dessous.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <div className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className={`p-3 rounded-full mr-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <Phone size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+221786520284" className="hover:text-blue-500 transition-colors">
                      +221 78-652-02-84
                    </a>
                  </div>
                </div>

                <div className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className={`p-3 rounded-full mr-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <Mail size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <a href="mailto:ousinfaye4@gmail.com" className="hover:text-blue-500 transition-colors">
                      ousinfaye4@gmail.com
                    </a>
                  </div>
                </div>

                <div className={`flex items-start ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  <div className={`p-3 rounded-full mr-4 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <MapPin size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Ville</h3>
                    <p>Dakar, Sénégal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Suivez-Moi</h3>
                <div className="flex space-x-4">
                  <a
                      href="https://github.com/dembouz07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${
                          isDarkMode
                              ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      }`}
                      aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                      href="https://www.linkedin.com/in/ousseynou-faye-489725325/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${
                          isDarkMode
                              ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      }`}
                      aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                      href="https://www.instagram.com/ouzfaye7/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full transition-colors ${
                          isDarkMode
                              ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      }`}
                      aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                  onSubmit={handleSubmit}
                  className={`p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
              >
                {submitSuccess === true && (
                    <div className="mb-6 p-4 rounded-md bg-green-100 text-green-800 animate-fadeIn">
                      Votre message a été envoyé avec succès. Je vous répondrai dans les plus brefs délais !
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                        htmlFor="name"
                        className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Prenom et Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition-all ${
                            isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                                : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500'
                        }`}
                    />
                  </div>
                  <div>
                    <label
                        htmlFor="email"
                        className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition-all ${
                            isDarkMode
                                ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                                : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500'
                        }`}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                      htmlFor="subject"
                      className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Objet
                  </label>
                  <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition-all ${
                          isDarkMode
                              ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                              : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500'
                      }`}
                  />
                </div>

                <div className="mb-6">
                  <label
                      htmlFor="message"
                      className={`block mb-2 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 transition-all ${
                          isDarkMode
                              ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500'
                              : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500'
                      }`}
                  ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-6 py-3 rounded-md font-medium transition-all ${
                        isDarkMode
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-blue-500 hover:bg-blue-600 text-white'
                    } ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Ouverture...
                      </>
                  ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Envoyer Message
                      </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ContactSection;
