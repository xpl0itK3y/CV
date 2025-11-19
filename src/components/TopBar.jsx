import React, { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const TopBar = ({ currentLang, onLanguageChange }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Показываем шапку при прокрутке вверх или в самом верху
            if (currentScrollY < lastScrollY || currentScrollY < 30) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Скрываем при прокрутке вниз
                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000, // Увеличен z-index чтобы быть поверх всех элементов
            transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out',
            animation: 'slideDownTop 0.6s ease-out', // Анимация появления
        }}>
            <div style={{
                padding: '1.25rem 2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderTop: 'none', // Убираем верхнюю границу
                borderRadius: '0 0 20px 20px', // Закругление только снизу
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                transition: 'all 0.3s ease',
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* Логотип/название слева */}
                    <div style={{
                        color: '#fff',
                        fontSize: '1.5rem',
                        fontWeight: '700',
                        letterSpacing: '-0.5px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <span style={{
                            fontSize: '2rem',
                            filter: 'drop-shadow(0 0 10px rgba(102, 126, 234, 0.5))'
                        }}>✨</span>
                        Portfolio
                    </div>

                    {/* Переключатель языка справа */}
                    <LanguageSwitcher 
                        currentLang={currentLang} 
                        onLanguageChange={onLanguageChange}
                    />
                </div>
            </div>
        </div>
    );
};

export default TopBar;