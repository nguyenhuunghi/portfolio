'use client';

import React, { useState } from 'react';
import styles from './About.module.css';
import LazyImage from '@/features/shared/components/LazyImage';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const About = () => {
    const ref = useIntersectionObserver<HTMLElement>();
    const [activeSkill, setActiveSkill] = useState<string | null>(null);

    const skills = [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Node.js', level: 85, icon: '🟩' },
        { name: 'TypeScript', level: 88, icon: '🔷' },
        { name: 'Python', level: 82, icon: '🐍' },
        { name: 'AWS', level: 80, icon: '☁️' },
        { name: 'Docker', level: 78, icon: '🐳' },
        { name: 'GraphQL', level: 75, icon: '📊' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 83, icon: '🐘' }
    ];

    return (
        <section ref={ref} className={`${styles.about} ${styles.animateOnScroll}`} id="about">
            <div className={styles.container}>
                <div className={styles.sectionTitle}>
                    <h2>About Me</h2>
                    <p>Passionate developer with expertise in modern web technologies</p>
                </div>
                
                <div className={styles.aboutContent}>
                    <div className={styles.aboutText}>
                        <h3>Building Digital Experiences</h3>
                        <p>With over 5 years of experience in full-stack development, I specialize in creating robust, scalable applications using modern technologies. I&apos;m passionate about clean code, user experience, and continuous learning.</p>
                        
                        <p>My expertise spans across frontend frameworks like React and Vue.js, backend technologies including Node.js and Python, and cloud platforms like AWS and Azure.</p>
                        
                        <div className={styles.skillsGrid}>
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`${styles.skillItem} ${activeSkill === skill.name ? styles.active : ''}`}
                                    onMouseEnter={() => setActiveSkill(skill.name)}
                                    onMouseLeave={() => setActiveSkill(null)}
                                >
                                    <span className={styles.skillIcon}>{skill.icon}</span>
                                    <span className={styles.skillName}>{skill.name}</span>
                                    {activeSkill === skill.name && (
                                        <div className={styles.skillLevel}>
                                            <div 
                                                className={styles.skillLevelFill} 
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className={styles.aboutImage}>
                        <div className={styles.profileCard}>
                            <div className={styles.profileImg}>
                                NH
                            </div>
                            <h3>Nghi Nguyen</h3>
                            <p>Full Stack Developer</p>
                            <div className={styles.profileStats}>
                                <div className={styles.profileStat}>
                                    <span className={styles.statNumber}>5+</span>
                                    <span className={styles.statLabel}>Years</span>
                                </div>
                                <div className={styles.profileStat}>
                                    <span className={styles.statNumber}>50+</span>
                                    <span className={styles.statLabel}>Projects</span>
                                </div>
                                <div className={styles.profileStat}>
                                    <span className={styles.statNumber}>100%</span>
                                    <span className={styles.statLabel}>Success</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
