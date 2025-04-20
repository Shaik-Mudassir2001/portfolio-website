        const themeToggleBtn = document.querySelector('.theme-toggle');
        const htmlElement = document.documentElement;

        // Function to set theme based on preference
        const setTheme = (theme) => {
            // console.log('Setting theme to:', theme); // Debug 1
            if (theme === 'dark') {
                htmlElement.setAttribute('data-bs-theme', 'dark');
            } else {
                htmlElement.setAttribute('data-bs-theme', 'light'); // Always set the attribute
            }
            localStorage.setItem('theme', theme);
             // console.log('HTML data-bs-theme set to:', htmlElement.getAttribute('data-bs-theme')); // Debug 2
        };

        // Function to toggle theme
        const toggleTheme = () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme') === 'dark' ? 'dark' : 'light';
            // console.log('Toggle clicked. Current theme:', currentTheme); // Debug 3
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            // console.log('Switching to theme:', newTheme); // Debug 4
            setTheme(newTheme);
        };

        // Set initial theme on load
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initialTheme = storedTheme === 'light' ? 'light' : 'dark'; // Default dark unless localStorage is light
        setTheme(initialTheme);
         // console.log('Initial theme loaded:', initialTheme); // Debug 5

        // Add event listener to button
        if (themeToggleBtn) {
            themeToggleBtn.addEventListener('click', toggleTheme);
        }

        // Simple Scroll Animation Logic using Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible'); // Add class to trigger animation
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        // Observe all designated sections for animation
        document.querySelectorAll('.section-animate').forEach((section) => {
            observer.observe(section);
        });

        // Activate Bootstrap ScrollSpy on the body
        const scrollSpy = new bootstrap.ScrollSpy(document.body, {
           target: '#navbarNav',
           offset: 100 // Adjust offset if needed
        })

    