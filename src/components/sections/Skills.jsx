import React, { useState, useEffect } from "react";
import GlassBlock from "../GlassBlock";

const Skills = ({ skillsTitle, softSkillsTitle, languagesTitle, skills }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <GlassBlock delay={0.4}>
            <h2 style={{ 
                color: '#fff', 
                marginTop: '0', 
                fontSize: isMobile ? '1.3rem' : '1.5rem',
                marginBottom: '1.5rem' 
            }}>
                {skillsTitle}
            </h2>
            
            {/* Технические навыки с логотипами */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: isMobile ? '0.85rem' : '1.2rem',
                marginBottom: '2.5rem'
            }}>
                {skills.technical && skills.technical.map((skill, index) => (
                    <div 
                        key={index} 
                        title={skill.name}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            width: isMobile ? '48px' : '56px',
                            height: isMobile ? '48px' : '56px'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        }}
                    >
                        {getSkillIcon(skill.name) ? (
                            <img 
                                src={getSkillIcon(skill.name)} 
                                alt={skill.name}
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'contain'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span style="font-size: 36px">💻</span>';
                                }}
                            />
                        ) : (
                            <span style={{ fontSize: '36px' }}>💻</span>
                        )}
                    </div>
                ))}
            </div>
            
            {/* Soft Skills */}
            <h3 style={{ 
                color: '#fff', 
                marginTop: '2rem', 
                marginBottom: '1rem', 
                fontSize: isMobile ? '1.1rem' : '1.2rem'
            }}>
                {softSkillsTitle}
            </h3>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem'
            }}>
            {skills.soft && skills.soft.map((skill, index) => (
                <span key={index} style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                    borderRadius: '20px',
                    color: '#fff',
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    cursor: 'default'
                }}>
                    {skill}
                </span>
            ))}
            </div>
            
            {/* Languages */}
            <h3 style={{ 
                color: '#fff', 
                marginTop: '2rem', 
                marginBottom: '1rem', 
                fontSize: isMobile ? '1.1rem' : '1.2rem'
            }}>
                {languagesTitle}
            </h3>
            <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.75rem'
            }}>
                {skills.languages && skills.languages.map((language, index) => (
                    <div key={index} style={{
                        background: 'rgba(255, 255, 255, 0.15)',
                        padding: isMobile ? '0.4rem 0.8rem' : '0.5rem 1rem',
                        borderRadius: '20px',
                        color: '#fff',
                        fontSize: isMobile ? '0.85rem' : '0.9rem',
                        cursor: 'default',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: isMobile ? '80px' : '100px'
                    }}>
                        <div style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>
                            {language.name}
                        </div>
                        <div style={{ fontSize: '0.75rem', opacity: '0.8' }}>
                            {language.level}
                        </div>
                    </div>
                ))}
            </div>
        </GlassBlock>
    );
    
    function getSkillIcon(skillName) {
        const name = skillName.toLowerCase().replace(/\s+/g, '').replace(/\//g, '');
        
        const iconMap = {
            'reactnext.js': 'react',
            'react/next.js': 'react',
            'react': 'react',
            'nextjs': 'nextjs',
            'next.js': 'nextjs',
            'typescript': 'typescript',
            'javascript': 'javascript',
            'vue.js': 'vuejs',
            'vuejs': 'vuejs',
            'vue': 'vuejs',
            'html5': 'html5',
            'csstailwind': 'css3',
            'css/tailwind': 'css3',
            'css': 'css3',
            'tailwind': 'tailwindcss',
            'tailwindcss': 'tailwindcss',
            'node.js': 'nodejs',
            'nodejs': 'nodejs',
            'python': 'python',
            'fastapi': 'fastapi',
            'django': 'django',
            'pandas': 'pandas',
            'php': 'php',
            'laravel': 'laravel',
            'symfony': 'symfony',
            'go': 'go',
            'aiogram': 'python',
            'telethon': 'python',
            'telegrambotapi': 'python',
            'postgresql': 'postgresql',
            'mongodb': 'mongodb',
            'redis': 'redis',
            'mysql': 'mysql',
            'docker': 'docker',
            'kubernetes': 'kubernetes',
            'git': 'git',
            'gitlab': 'gitlab',
            'nginx': 'nginx',
            'linux': 'linux',
            'jest': 'jest',
            'githubactions': 'githubactions',
            'pytest': 'pytest',
            'sqlite': 'sqlite'
        };
        
        const iconFolder = iconMap[name] || name;
        
        const specialCases = {
            'django': ['plain', 'original', 'line'],
            'nginx': ['original', 'plain', 'line'],
            'githubactions': ['original', 'plain', 'line'],
            'jest': ['plain', 'original', 'line'],
        };
        
        const fileVariants = specialCases[iconFolder] || ['original', 'plain', 'line'];
        const baseUrl = import.meta.env.BASE_URL || '/';
        const iconPath = `${baseUrl}icons/${iconFolder}/${iconFolder}-${fileVariants[0]}.svg`;
        
        return iconPath;
    }
};

export default Skills;