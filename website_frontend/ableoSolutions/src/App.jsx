import { useState, useEffect } from 'react';
import './index.css'; // Make sure this imports your CSS file

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Our team at Ableo Solutions will contact you within 24 hours to discuss your AI chatbot needs.');
    e.target.reset();
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav id="navbar" className={isScrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <div className="logo">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="85" fill="none" stroke="#d4a574" strokeWidth="4"/>
              <circle cx="80" cy="40" r="6" fill="#d4a574"/>
              <circle cx="100" cy="30" r="6" fill="#d4a574"/>
              <circle cx="120" cy="40" r="6" fill="#d4a574"/>
              <line x1="80" y1="46" x2="80" y2="75" stroke="#d4a574" strokeWidth="4"/>
              <line x1="100" y1="36" x2="100" y2="75" stroke="#d4a574" strokeWidth="4"/>
              <line x1="120" y1="46" x2="120" y2="75" stroke="#d4a574" strokeWidth="4"/>
              <line x1="80" y1="60" x2="65" y2="75" stroke="#d4a574" strokeWidth="4"/>
              <line x1="120" y1="60" x2="135" y2="75" stroke="#d4a574" strokeWidth="4"/>
              <text x="50" y="150" fontFamily="Arial, sans-serif" fontSize="90" fontWeight="bold" fill="#d4a574">AS</text>
            </svg>
            <span className="logo-text">Ableo Solutions</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <svg className="hero-logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="85" fill="none" stroke="#d4a574" strokeWidth="4"/>
            <circle cx="80" cy="40" r="6" fill="#d4a574"/>
            <circle cx="100" cy="30" r="6" fill="#d4a574"/>
            <circle cx="120" cy="40" r="6" fill="#d4a574"/>
            <line x1="80" y1="46" x2="80" y2="75" stroke="#d4a574" strokeWidth="4"/>
            <line x1="100" y1="36" x2="100" y2="75" stroke="#d4a574" strokeWidth="4"/>
            <line x1="120" y1="46" x2="120" y2="75" stroke="#d4a574" strokeWidth="4"/>
            <line x1="80" y1="60" x2="65" y2="75" stroke="#d4a574" strokeWidth="4"/>
            <line x1="120" y1="60" x2="135" y2="75" stroke="#d4a574" strokeWidth="4"/>
            <text x="50" y="150" fontFamily="Arial, sans-serif" fontSize="90" fontWeight="bold" fill="#d4a574">AS</text>
          </svg>
          <h1>AI Chatbots That Transform Your Business</h1>
          <p>Empower your clinic, ecommerce store, or business with intelligent AI chatbot solutions that enhance customer experience and drive growth</p>
          <div className="cta-buttons">
            <a href="#contact" className="cta-button">Get Started</a>
            <a href="#services" className="cta-button secondary">Learn More</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Tailored AI chatbot solutions designed specifically for your industry</p>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🏥</div>
            <h3>Healthcare & Clinics</h3>
            <p>Streamline patient appointments, answer common medical queries, provide medication reminders, and offer 24/7 support. Our HIPAA-compliant chatbots reduce administrative burden while improving patient satisfaction.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🛒</div>
            <h3>Ecommerce Stores</h3>
            <p>Boost sales with intelligent product recommendations, instant customer support, order tracking, and personalized shopping experiences. Turn browsers into buyers with conversational commerce.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💼</div>
            <h3>Business Solutions</h3>
            <p>Enhance customer engagement, automate lead qualification, provide instant support, and scale your operations. Our chatbots integrate seamlessly with your existing systems and workflows.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="features-content">
          <h2 className="section-title">Why Choose Ableo Solutions?</h2>
          <p className="section-subtitle">Cutting-edge AI technology meets exceptional customer service</p>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-small">🤖</div>
              <div className="feature-text">
                <h4>Advanced AI Technology</h4>
                <p>Powered by the latest natural language processing and machine learning</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-small">⚡</div>
              <div className="feature-text">
                <h4>Instant Responses</h4>
                <p>24/7 availability with lightning-fast response times</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-small">🎯</div>
              <div className="feature-text">
                <h4>Personalized Experience</h4>
                <p>Context-aware conversations tailored to each customer</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-small">🔗</div>
              <div className="feature-text">
                <h4>Seamless Integration</h4>
                <p>Works with your existing CRM, website, and tools</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-small">📊</div>
              <div className="feature-text">
                <h4>Analytics & Insights</h4>
                <p>Detailed reporting to optimize performance and ROI</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-small">🔒</div>
              <div className="feature-text">
                <h4>Enterprise Security</h4>
                <p>Bank-level encryption and compliance standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-works">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get your AI chatbot up and running in just a few simple steps</p>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Consultation</h3>
            <p>We discuss your business needs, goals, and ideal customer interactions to design the perfect chatbot solution.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Customization</h3>
            <p>Our team builds and trains your chatbot with industry-specific knowledge and your brand's unique voice.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Integration</h3>
            <p>We seamlessly integrate the chatbot into your website, app, or messaging platforms.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Launch & Support</h3>
            <p>Go live with confidence! We provide ongoing monitoring, updates, and optimization to ensure peak performance.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Customer Experience?</h2>
        <p>Join hundreds of businesses already using Ableo Solutions</p>
        <a href="#contact" className="cta-button">Start Your Free Consultation</a>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss how AI chatbots can grow your business</p>
        
        {/* Converted inline style string to React style object */}
        <div style={{
          textAlign: 'center', 
          marginBottom: '3rem', 
          padding: '2rem', 
          background: 'linear-gradient(135deg, #f5f7fa 0%, #e8f4f5 100%)', 
          borderRadius: '15px'
        }}>
          <h3 style={{color: '#1a9b9f', marginBottom: '1rem', fontSize: '1.5rem'}}>📞 Call Us Today</h3>
          <a href="tel:+14376071767" style={{
            fontSize: '2rem', 
            fontWeight: '700', 
            color: '#e8944f', 
            textDecoration: 'none', 
            display: 'block', 
            marginBottom: '0.5rem'
          }}>+1 (437) 607-1767</a>
          <p style={{color: '#666'}}>Available Monday - Friday, 9 AM - 6 PM EST</p>
        </div>

        <form onSubmit={handleSubmit} id="contactForm">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="business">Business Type *</label>
            <select id="business" name="business" required defaultValue="">
              <option value="" disabled>Select your industry</option>
              <option value="clinic">Healthcare/Clinic</option>
              <option value="ecommerce">Ecommerce Store</option>
              <option value="other">Other Business</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone (Optional)</label>
            <input type="tel" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Tell us about your needs *</label>
            <textarea id="message" name="message" required placeholder="What challenges are you facing? What are your goals?"></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <svg className="footer-logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="85" fill="none" stroke="#d4a574" strokeWidth="4"/>
          <circle cx="80" cy="40" r="6" fill="#d4a574"/>
          <circle cx="100" cy="30" r="6" fill="#d4a574"/>
          <circle cx="120" cy="40" r="6" fill="#d4a574"/>
          <line x1="80" y1="46" x2="80" y2="75" stroke="#d4a574" strokeWidth="4"/>
          <line x1="100" y1="36" x2="100" y2="75" stroke="#d4a574" strokeWidth="4"/>
          <line x1="120" y1="46" x2="120" y2="75" stroke="#d4a574" strokeWidth="4"/>
          <line x1="80" y1="60" x2="65" y2="75" stroke="#d4a574" strokeWidth="4"/>
          <line x1="120" y1="60" x2="135" y2="75" stroke="#d4a574" strokeWidth="4"/>
          <text x="50" y="150" fontFamily="Arial, sans-serif" fontSize="90" fontWeight="bold" fill="#d4a574">AS</text>
        </svg>
        <p>&copy; 2025 Ableo Solutions. All rights reserved. | Transforming businesses with AI-powered chatbots</p>
        <p style={{marginTop: '0.5rem'}}>📞 <a href="tel:+14376071767" style={{color: '#e8944f', textDecoration: 'none'}}>+1 (437) 607-1767</a></p>
      </footer>
    </div>
  );
}

export default App;