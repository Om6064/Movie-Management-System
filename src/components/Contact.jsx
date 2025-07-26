import ContactForm from "../components/ContactForm";
import BlurText from "./BlurText";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="bg-[url('/background-header-2.jpg')] relative bg-cover bg-center min-h-[500px] py-20 text-center text-white flex flex-col justify-center items-center">
                <p>Home <i class="ri-arrow-drop-right-line"></i> contact</p>
                <BlurText
                    text="Contact Us"
                    delay={200}
                    animateBy="words"
                    direction="center"
                    className="text-4xl md:text-5xl font-bold z-20"
                />
                <p className="mt-4 text-lg text-purple-200">We’re here to help and answer any question you might have.</p>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>

            {/* Contact Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <p className="text-2xl text-orange-500"><i class="ri-movie-2-line"></i></p>
                        <p className="text-gray-600 font-semibold ">Contect With Us</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-bold text-5xl">Feel Free to Write us <br />
                            Anytime</h2>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="my-24">
                    <ContactForm />
                </div>
            </section>

            {/* Google Map */}
            <div className="h-96 w-full">
                <iframe
                    title="Google Map"
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019455597711!2d144.9574433153183!3d-37.81720997975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d47e5c3c131%3A0x58fcf4b96eb41e19!2sEnvato!5e0!3m2!1sen!2sus!4v1616636328933!5m2!1sen!2sus"
                ></iframe>
            </div>
            <Footer/>
        </div>

    );
};

export default Contact;
