import "./Contact.css"

const Contact = () => {
  return (
    <>
     <header>
        <nav>
            <div className="logo">Digital Pathsala</div>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    <section className="contact-page">
        <h1>Contact Us</h1>
        <p>If you have any questions or inquiries, please don't hesitate to contact us. You can reach us using the contact information below or by filling out the contact form.</p>

        <div className="contact-info">
            <h2>Contact Information</h2>
            <p><strong>Email:</strong> info@digitalpathsala.com</p>
            <p><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p><strong>Address:</strong> 123 Main Street, City, Country</p>
        </div>

        <div className="contact-form">
            <h2>Contact Form</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </section>

    <footer>
        <p>&copy; 2023 Digital Pathsala. All rights reserved.</p>
    </footer>
    
    </>
  )
}

export default Contact