import { createContext, useContext, useEffect, useState } from 'react';

// Crear el contexto
const ViewportContext = createContext();

// Breakpoints (puedes ajustarlos según tus necesidades)
const BREAKPOINTS = {
    mobile: 768,
    tablet: 1024,
};

// Provider del contexto
export const ViewportProvider = ({ children }) => {
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
        isMobile: window.innerWidth <= BREAKPOINTS.mobile,
        isTablet: window.innerWidth > BREAKPOINTS.mobile && window.innerWidth <= BREAKPOINTS.tablet,
        isDesktop: window.innerWidth > BREAKPOINTS.tablet,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const height = window.innerHeight;

            setViewport({
                width,
                height,
                isMobile: width <= BREAKPOINTS.mobile,
                isTablet: width > BREAKPOINTS.mobile && width <= BREAKPOINTS.tablet,
                isDesktop: width > BREAKPOINTS.tablet,
            });
        };

        // Agregar listener para cambios de tamaño
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ViewportContext.Provider value={viewport}>
            {children}
        </ViewportContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useViewport = () => {
    const context = useContext(ViewportContext);

    if (context === undefined) {
        throw new Error('useViewport debe ser usado dentro de un ViewportProvider');
    }

    return context;
};

export default ViewportContext;
