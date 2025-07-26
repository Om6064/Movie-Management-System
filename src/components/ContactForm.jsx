const ContactForm = () => {
    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <input type="text" placeholder="Subject" className="p-4 rounded-lg bg-gray-100 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
            <textarea placeholder="Message" rows="6" className="p-4 rounded-lg bg-gray-100 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
            <button type="submit" className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition md:col-span-2">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
