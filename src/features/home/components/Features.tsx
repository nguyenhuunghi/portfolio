'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function Features() {
  const ref = useIntersectionObserver<HTMLElement>();

  return (
    <section ref={ref} className="about animate-on-scroll" id="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Passionate developer with expertise in modern web technologies</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Building Digital Experiences</h3>
            <p>With over 5 years of experience in full-stack development, I specialize in creating robust, scalable applications using modern technologies. I&apos;m passionate about clean code, user experience, and continuous learning.</p>
            
            <p>My expertise spans across frontend frameworks like React and Vue.js, backend technologies including Node.js and Python, and cloud platforms like AWS and Azure.</p>
            
            <div className="skills-grid">
              <div className="skill-item hover-lift">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚛️</div>
                <div style={{ fontWeight: '600' }}>React</div>
              </div>
              <div className="skill-item hover-lift">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🟢</div>
                <div style={{ fontWeight: '600' }}>Node.js</div>
              </div>
              <div className="skill-item hover-lift">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🐍</div>
                <div style={{ fontWeight: '600' }}>Python</div>
              </div>
              <div className="skill-item hover-lift">
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>☁️</div>
                <div style={{ fontWeight: '600' }}>AWS</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="profile-card">
              <div className="profile-img">NN</div>
              <h4 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '0.5rem' }}>Nghi Nguyen</h4>
              <p style={{ textAlign: 'center', color: 'var(--gray)' }}>Senior Full Stack Developer</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '1rem' }}>
                <span style={{ background: 'var(--light)', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '0.8rem' }}>🏆 Top Rated</span>
                <span style={{ background: 'var(--light)', padding: '0.25rem 0.75rem', borderRadius: '15px', fontSize: '0.8rem' }}>⭐ 5.0 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
