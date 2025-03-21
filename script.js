// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Initialize video
    const video = document.querySelector('.journey-video');
    setTimeout(() => {
        video.play().catch(error => console.log("Video play failed:", error));
    }, 1000);

    // Animate content
    gsap.from('.journey-content', {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out"
    });

    // Animate video
    gsap.from('.journey-video', {
        opacity: 0,
        scale: 1.1,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out"
    });

    // Animate scroll indicator
    gsap.from('.scroll-indicator', {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 2,
        ease: "power2.out"
    });

    // Video clip path animation
    gsap.to('.journey-video', {
        clipPath: 'circle(70% at center)',
        duration: 1.5,
        ease: "power2.inOut"
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                console.log('Form submitted:', data);
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'var(--success)';
                
                // Reset form after 2 seconds
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.textContent = 'Send Message';
                    submitBtn.style.background = 'var(--primary)';
                    submitBtn.disabled = false;
                }, 2000);
            }, 1500);
        });
    }

    // Map Link Handler
    const mapLink = document.querySelector('.find-map');
    if (mapLink) {
        mapLink.addEventListener('click', function(e) {
            e.preventDefault();
            // Coordinates for 36 Woodlands Way, Parkwood QLD 4214
            const latitude = -28.0077;
            const longitude = 153.3771;
            const label = '36 Woodlands Way, Parkwood';
            
            // Create Google Maps URL with coordinates
            const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}&label=${encodeURIComponent(label)}`;
            
            // Open in new tab
            window.open(mapsUrl, '_blank');
        });
    }
});
