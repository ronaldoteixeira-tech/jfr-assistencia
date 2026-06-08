document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-up');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: .1 });

    document.querySelectorAll('h1, h2, .service-card, .pain-item').forEach(el => {
        el.style.opacity = '0';
        io.observe(el);
    });

    // Parallax Effect
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.scrollY;

                // Hero image float
                document.querySelectorAll('.hero-img-wrap').forEach(el => {
                    el.style.transform = `translateY(${scrolled * 0.1}px)`;
                });

                // Background glows float faster
                document.querySelectorAll('.hero-glow').forEach((el, i) => {
                    el.style.transform = `translateY(${scrolled * (i === 0 ? 0.35 : 0.2)}px)`;
                });

                // Security blob float
                document.querySelectorAll('.parallax-bg').forEach(el => {
                    el.style.transform = `translateY(${scrolled * 0.15}px)`;
                });

                ticking = false;
            });
            ticking = true;
        }
    });

    // Store Location Tabs
    window.switchStore = function(store) {
        document.querySelectorAll('.store-panel').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelectorAll('.store-tab').forEach(el => {
            el.style.background = 'transparent';
            el.style.color = 'rgba(255,255,255,.45)';
        });
        const panel = document.getElementById('store-' + store);
        if (panel) panel.style.display = 'flex';
        const tab = document.getElementById('tab-' + store);
        if (tab) { tab.style.background = '#28A745'; tab.style.color = '#fff'; }
    };
});
