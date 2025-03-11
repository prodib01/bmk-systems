import React, { useEffect } from 'react';

const ScrollAnimation = () => {
    useEffect(() => {
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-on-scroll');

            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;

                if (elementPosition < windowHeight - 100) {
                    element.classList.add('in-view');
                }
            });
        };

        window.addEventListener('scroll', animateOnScroll);
        // Initial check
        animateOnScroll();

        return () => {
            window.removeEventListener('scroll', animateOnScroll);
        };
    }, []);

    return null;
};

export default ScrollAnimation;