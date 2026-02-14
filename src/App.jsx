import { useState, useEffect } from 'react';
import './index.css';

function App() {
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
            <p className="hero-description">Ableo Solutions delivers cutting-edge AI customer service solutions designed for Canadian businesses of all sizes. From retail to healthcare, we help you provide exceptional customer support around the clock.</p>
            <div className="hero-buttons">
              <a href="#contact" className="button-primary">Schedule Consultation</a>
              <a href="#services" className="button-secondary">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Solutions</span>
            <h2 className="section-title">AI-Powered Customer Service</h2>
            <p className="section-description">Choose the perfect AI solution for your business needs.</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <h3>AI Customer Service Chatbots</h3>
              <p>Transform your customer interactions with intelligent AI chatbots powered by advanced natural language processing. Understand context, learn from conversations, and provide personalized assistance 24/7.</p>
              
              <div className="plan-box">
                <div style={{color: '#D4AF37'}}>✦ Hobby Plan</div>
                <div className="plan-price">$48 <span style={{fontSize: '14px'}}>CAD/month</span></div>
                <ul style={{listStyle: 'none', fontSize: '14px', marginTop: '10px'}}>
                  <li>✓ 2,250 message credits/month</li>
                  <li>✓ Zendesk & WhatsApp Integration</li>
                </ul>
              </div>

              <div className="plan-box">
                <div style={{color: '#D4AF37'}}>★ Standard Plan</div>
                <div className="plan-price">$180 <span style={{fontSize: '14px'}}>CAD/month</span></div>
                <ul style={{listStyle: 'none', fontSize: '14px', marginTop: '10px'}}>
                  <li>✓ 15,000 message credits/month</li>
                  <li>✓ Auto retrain agents</li>
                </ul>
              </div>
            </div>

            <div className="service-card">
              <h3>AI Voice Receptionist</h3>
              <p>Experience the future of phone reception with our AI voice receptionist that sounds remarkably human. Book appointments directly into your calendar and handle complex inquiries via natural conversation.</p>
              
              <div className="plan-box">
                <div>Starter Plan</div>
                <div className="plan-price">$89 <span style={{fontSize: '14px'}}>CAD/month</span></div>
                <ul style={{listStyle: 'none', fontSize: '14px', marginTop: '10px'}}>
                  <li>✓ Unlimited call minutes</li>
                  <li>✓ Message taking with caller details</li>
                </ul>
              </div>

              <div className="plan-box" style={{position: 'relative'}}>
                <span style={{position: 'absolute', right: 0, top: 0, background: '#1B6B6B', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px'}}>POPULAR</span>
                <div>Scale Plan</div>
                <div className="plan-price">$188 <span style={{fontSize: '14px'}}>CAD/month</span></div>
                <ul style={{listStyle: 'none', fontSize: '14px', marginTop: '10px'}}>
                  <li>✓ Two-way SMS with AI</li>
                  <li>✓ CRM & Calendar Sync</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="industries">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Who We Serve</span>
            <h2 className="section-title">Solutions for Every Business</h2>
          </div>
          <div className="industries-grid">
            {['Healthcare', 'Retail', 'Professional Services', 'Hospitality', 'Real Estate', 'Wellness', 'Home Services', 'Small Business'].map(industry => (
              <div key={industry} className="industry-card">
                <h4>{industry}</h4>
                <p>Tailored AI workflows for your specific {industry.toLowerCase()} needs.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="services" style={{background: '#F0F7F7'}}>
        <div className="container">
          <div className="pricing-info">
            <div style={{fontSize: '56px', color: '#1B6B6B'}}>$48 - 600 <span style={{fontSize: '24px'}}>CAD/month</span></div>
            <p style={{margin: '20px 0'}}>Flexible pricing for both AI chatbots and voice receptionists. Choose the plan that fits your business needs and scale as you grow.</p>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', textAlign: 'left', gap: '15px'}}>
              <div>● Custom AI training</div>
              <div>● Real-time analytics</div>
              <div>● Seamless integration</div>
              <div>● Canadian-based support</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="container">
          <h2>Ready to Transform Your Customer Service?</h2>
          <p style={{margin: '20px 0 40px'}}>Join Canadian businesses already benefiting from AI-powered support.</p>
          <a href="mailto:info@ableosolutions.com" className="button-white">Get Your Free Consultation</a>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div>
              <div className="logo-text" style={{fontSize: '32px', marginBottom: '15px'}}>Ableo Solutions</div>
              <p>Empowering Canadian businesses with intelligent AI customer service solutions.</p>
            </div>
            <div>
              <h4>Services</h4>
              <p>AI Chatbots</p>
              <p>Voice Receptionist</p>
            </div>
            <div>
              <h4>Company</h4>
              <p>About Us</p>
              <p>Industries</p>
            </div>
            <div>
              <h4>Contact</h4>
              <p>info@ableosolutions.com</p>
            </div>
          </div>
          <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', paddingTop: '20px', textAlign: 'center'}}>
            <p>&copy; 2026 Ableo Solutions. All rights reserved. Based in Canada.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;