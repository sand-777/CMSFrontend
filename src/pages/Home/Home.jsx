import "./Home.css"


const Home = () => {
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

    <section className="hero">
        <h1>Welcome to Digital Pathsala</h1>
        <p>Your source for online education and learning resources.</p>
        <a href="#" className="cta-button">Explore Courses</a>
    </section>

    <section className="courses">
        <h2>Popular Courses</h2>
        <div className="course-card">
            <img src="course1.jpg" alt="Course 1"/>
            <h3>Course 1 Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Learn More</a>
        </div>

        <div className="course-card">
            <img src="course2.jpg" alt="Course 2"/>
            <h3>Course 2 Title</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Learn More</a>
        </div>
    </section>

    <section className="about">
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium tincidunt magna, id interdum elit suscipit ac.</p>
        <a href="#">Learn More</a>
    </section>

    <section className="contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please don't hesitate to contact us.</p>
        <a href="#">Contact Us</a>
    </section>

    <footer>
        <p>&copy; 2023 Digital Pathsala. All rights reserved.</p>
    </footer>

</>
  )
}

export default Home