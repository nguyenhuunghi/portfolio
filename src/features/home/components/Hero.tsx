import Image from 'next/image';
import ParticleBackground from '@/features/shared/components/ParticleBackground';

export default function Hero() {
  return (
    <section className="hero dynamic-bg" id="home">
      <ParticleBackground />
      {/* Background Image */}
      <div 
        className="hero-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}
      >
        <Image
          src="/images/hero-bg.svg"
          alt="Background"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
      </div>
      
      {/* Tech Illustration */}
      <div 
        className="hero-illustration"
        style={{
          position: 'absolute',
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          height: '300px',
          zIndex: 2,
          opacity: 0.9
        }}
      >
        <Image 
          src="/images/hero-tech.svg" 
          alt="Technology Illustration"
          className="lazy-image"
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1>Full Stack Developer</h1>
          <p>I create modern, scalable web applications with cutting-edge technologies. Let&apos;s build something amazing together.</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary hover-lift">View My Work</a>
            <a href="#contact" className="btn btn-secondary hover-lift">Get In Touch</a>
          </div>
        </div>
      </div>
      
      {/* Floating Cards */}
      <div className="floating-card glass" style={{ zIndex: 3, top: '20%', right: '10%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="glass" style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            ⚡
          </div>
          <div>
            <div style={{ fontWeight: '600', color: 'white' }}>Fast Performance</div>
            <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>99% PageSpeed Score</div>
          </div>
        </div>
      </div>
      
      <div className="floating-card glass" style={{ zIndex: 3, bottom: '30%', right: '20%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="glass" style={{ width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            🚀
          </div>
          <div>
            <div style={{ fontWeight: '600', color: 'white' }}>Modern Stack</div>
            <div style={{ fontSize: '0.9rem', opacity: '0.8' }}>React, Next.js, AI</div>
          </div>
        </div>
      </div>
    </section>
  );
}