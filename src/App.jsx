import { useState } from 'react';
import './index.css';

function App() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/meelglod", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Instead of an alert, we trigger the success view
        setSubmitted(true);
        window.scrollTo(0, 0); // Scroll to top to see the message
      } else {
        alert("Oops! There was a problem sending your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem sending your form.");
    }
  };

  // 1. Success View Component
  if (submitted) {
    return (
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '40px' }}>
        <div style={{ background: 'white', padding: '60px', borderRadius: '16px', border: '2px solid #B8D4D4', maxWidth: '600px' }}>
          <span style={{ fontSize: '60px' }}>✨</span>
          <h1 style={{ color: '#1B6B6B', fontFamily: 'Poppins', marginTop: '20px' }}>Success!</h1>
          <p style={{ fontSize: '20px', margin: '20px 0', color: '#4A5568' }}>
            Your request has been received. Our team will reach out to your business email within 24 hours to schedule your consultation.
          </p>
          <button 
            onClick={() => setSubmitted(false)} 
            className="button-primary" 
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  // 2. Original Website View
  return (
    <div className="app-container">
      <nav>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-text">Ableo Solutions</span>
            </div>
            <ul className="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact" className="button-primary" style={{padding: '10px 20px'}}>Get Started</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Customer Experience with AI</h1>
            <p className="hero-subtitle">Intelligent chatbots and voice receptionists that work 24/7 for your business</p>
            <p className="hero-description">Ableo Solutions delivers cutting-edge AI customer service solutions designed for Canadian businesses of all sizes.</p>
            <div className="hero-buttons">
              <a href="#contact" className="button-primary">Schedule Consultation</a>
              <a href="#services" className="button-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services, Industries, and Pricing sections here as they were before */}
      {/* ... */}

      <section id="contact" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p style={{margin: '20px 0 40px'}}>Join Canadian businesses already benefiting from AI-powered support.</p>
            
            <div style={{ maxWidth: '600px', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '16px', color: '#0F1419', textAlign: 'left' }}>
              <form onSubmit={handleSubmit}>
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Full Name</label>
                  <input type="text" name="name" required placeholder="John Doe" style={{width: '100%', padding: '12px', border: '1px solid #B8D4D4', borderRadius: '8px'}} />
                </div>
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Business Email</label>
                  <input type="email" name="email" required placeholder="john@company.com" style={{width: '100%', padding: '12px', border: '1px solid #B8D4D4', borderRadius: '8px'}} />
                </div>
                <div style={{marginBottom: '20px'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: '500'}}>Tell us about your needs</label>
                  <textarea name="message" required placeholder="I need a bot to handle appointment bookings..." style={{width: '100%', padding: '12px', border: '1px solid #B8D4D4', borderRadius: '8px', height: '120px'}}></textarea>
                </div>
                <button type="submit" className="button-primary" style={{width: '100%', border: 'none', cursor: 'pointer'}}>
                  Send Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        {/* Footer as it was before */}
      </footer>
    </div>
  );
}

export default App;