import { FaEnvelope, FaMapMarkerAlt, FaClock, FaInstagram, FaGithub, FaLinkedinIn, FaPinterest, FaPaperPlane } from 'react-icons/fa';



function Contact() {
    return(
        <section className="contact" id="contact">
            <h2 className='title'>Get In Touch</h2>
            <div className="contact-section" >
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>
                Feel free to reach out with any questions, project inquiries, or just to say hello!
                I'm always open to creative collaborations and new challenges.
                </p>

                <div className="info-item">
                    <div className="icon"><FaEnvelope size={20} /></div>
                    <div>
                        <p>hello@aminasally.com</p>
                        <small>For inquiries & projects</small>
                    </div>
                </div>

                <div className="info-item">
                    <div className="icon"><FaMapMarkerAlt size={20} /></div>
                    <div>
                        <p>+(000)000 000</p>
                        <small>phone</small>
                    </div>
                </div>

                <div className="info-item">
                    <div className="icon"><FaClock size={20} /></div>
                    <div>
                        <p>Mon – Fri: 9AM – 6PM</p>
                        <small>Response within 24 hours</small>
                    </div>
                </div>

                <div className="socials">
                    <a href="#"><FaGithub size={22} /></a>
                    <a href="#"><FaLinkedinIn size={22} /></a>

                </div>
            </div>

            <div className="contact-form-wrapper">
                <h2>Send Me a Message</h2>
                <form className="contact-form" action="https://formspree.io/f/xkgrelkb" method="POST">
                    <input type="text"  name="name" placeholder="Your Name" required />
                    <input type="email"  name="email" placeholder="Your Email" required />
                    <input type="text" name="subject"  placeholder="Subject" required />
                    <textarea rows="5" name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">
                        Send Message <FaPaperPlane size={16} />
                    </button>
                </form>
            </div>
            </div>
         
        </section>
    );
}
export default Contact;