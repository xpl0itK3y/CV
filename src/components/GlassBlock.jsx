import React from "react";

const GlassBlock = ({ children, delay = 0 }) => {
    return (
        <div className="glass-block"
        style={{
            animation: `slideIn 0.6s ease-out ${delay}s both`,
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '20px',
            padding: '2rem',
            marginBottom: '2rem',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
            transition: 'all 0.3s ease'
        }}
        >
            {children}
        </div>  
    );
};

export default GlassBlock;