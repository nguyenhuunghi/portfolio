'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import LazyImage from '@/features/shared/components/LazyImage';

export default function Projects() {
  const ref = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={ref} className="projects animate-on-scroll" id="projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
          <p>A showcase of my recent work and technical expertise</p>
        </div>
        
        <div className="projects-grid">
          <div className="project-card">
            <LazyImage
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&auto=format"
              alt="E-Commerce Platform"
              className="project-image"
              width={800}
              height={400}
            />
            <div className="project-content">
              <h3 className="project-title">E-Commerce Platform</h3>
              <p className="project-description">Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with microservices architecture.</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">Stripe</span>
                <span className="tech-tag">AWS</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  Live Demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a href="#" className="project-link secondary">
                  GitHub
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <LazyImage
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format"
              alt="AI Task Manager"
              className="project-image"
              width={800}
              height={400}
            />
            <div className="project-content">
              <h3 className="project-title">AI Task Manager</h3>
              <p className="project-description">Intelligent task management app with AI-powered scheduling, natural language processing, and predictive analytics for productivity optimization.</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">FastAPI</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  Live Demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a href="#" className="project-link secondary">
                  GitHub
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <LazyImage
              src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&h=400&fit=crop&auto=format"
              alt="Real-time Chat App"
              className="project-image"
              width={800}
              height={400}
            />
            <div className="project-content">
              <h3 className="project-title">Real-time Chat App</h3>
              <p className="project-description">Modern chat application with real-time messaging, file sharing, and video calls. Features include end-to-end encryption and cross-platform support.</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Socket.io</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">Redis</span>
                <span className="tech-tag">WebRTC</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link primary">
                  Live Demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15,3 21,3 21,9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a href="#" className="project-link secondary">
                  GitHub
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
