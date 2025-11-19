import React from 'react';
import GlassBlock from '../GlassBlock';

const Header = ({ name, title }) => {
  return (
        <div style={{ 
            marginBottom: '2rem'
        }}>
            <GlassBlock delay={0}>
                <div style={{ 
                    textAlign: 'center',
                    animation: 'titleEntrance 1s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both'
                }}>
                    <h1 style={{ 
                        fontSize: '3.5rem', 
                        margin: '0 0 0.5rem 0', 
                        color: '#fff',
                        fontWeight: '800',
                        letterSpacing: '-2px',
                        animation: 'fadeInScale 0.8s ease-out 0.5s both'
                    }}>
                        {name || 'Имя не указано'}
                    </h1>
                    <p style={{ 
                        fontSize: '1.5rem', 
                        color: 'rgba(255, 255, 255, 0.9)',
                        margin: '0',
                        fontWeight: '300',
                        animation: 'fadeInUp 0.8s ease-out 0.7s both'
                    }}>
                        {title || 'Должность не указана'}
                    </p>
                </div>
            </GlassBlock>
        </div>
    );
};

export default Header;