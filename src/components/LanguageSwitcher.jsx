import React, { useState } from 'react';

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: 'ru', label: 'Русский', flag: '🇷🇺' },
        { code: 'en', label: 'English', flag: '🇬🇧' }
    ];

    const currentLanguage = languages.find(lang => lang.code === currentLang);

    return (
        <div style={{ position: 'relative' }}>
            {/* Кнопка переключателя */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    borderRadius: '15px',
                    padding: '0.65rem 1.25rem',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen 
                        ? '0 6px 20px rgba(102, 126, 234, 0.4)' 
                        : '0 4px 16px rgba(31, 38, 135, 0.2)',
                    transform: isOpen ? 'scale(1.05)' : 'scale(1)',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
                }}
                onMouseLeave={(e) => {
                    if (!isOpen) {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 16px rgba(31, 38, 135, 0.2)';
                    }
                }}
            >
                <span style={{ fontSize: '1.3rem' }}>{currentLanguage.flag}</span>
                <span>{currentLanguage.code.toUpperCase()}</span>
                <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 16 16" 
                    fill="none"
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                >
                    <path 
                        d="M4 6L8 10L12 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Выпадающее меню */}
            {isOpen && (
                <>
                    {/* Затемнение для закрытия меню */}
                    <div 
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 998
                        }}
                    />
                    
                    <div
                        style={{
                            position: 'absolute',
                            top: 'calc(100% + 0.75rem)',
                            right: 0,
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
                            animation: 'slideDown 0.3s ease-out',
                            minWidth: '180px',
                            zIndex: 999
                        }}
                    >
                        {languages.map((lang, index) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    onLanguageChange(lang.code);
                                    setIsOpen(false);
                                }}
                                style={{
                                    width: '100%',
                                    padding: '1rem 1.5rem',
                                    background: currentLang === lang.code 
                                        ? 'rgba(255, 255, 255, 0.15)' 
                                        : 'transparent',
                                    border: 'none',
                                    borderBottom: index < languages.length - 1 
                                        ? '1px solid rgba(255, 255, 255, 0.1)' 
                                        : 'none',
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem',
                                    transition: 'all 0.2s ease',
                                    fontWeight: currentLang === lang.code ? '600' : '400'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                    e.currentTarget.style.paddingLeft = '2rem';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = currentLang === lang.code 
                                        ? 'rgba(255, 255, 255, 0.15)' 
                                        : 'transparent';
                                    e.currentTarget.style.paddingLeft = '1.5rem';
                                }}
                            >
                                <span style={{ fontSize: '1.3rem' }}>{lang.flag}</span>
                                <span>{lang.label}</span>
                                {currentLang === lang.code && (
                                    <span style={{ 
                                        marginLeft: 'auto', 
                                        fontSize: '1.2rem',
                                        animation: 'fadeIn 0.3s ease-out'
                                    }}>✓</span>
                                )}
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default LanguageSwitcher;