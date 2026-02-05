// VaultGuard Router - Single Page App Navigation
const Router = {
    currentSection: 'dashboard',

    init() {
        // Set up navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const section = e.currentTarget.dataset.section;
                if (section) {
                    this.navigateTo(section);
                }
            });
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.section) {
                this.navigateTo(e.state.section, false);
            }
        });

        // Load initial section from URL hash or default
        const hash = window.location.hash.slice(1);
        this.navigateTo(hash || 'dashboard', false);
    },

    navigateTo(section, pushState = true) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(el => {
            el.classList.remove('active');
        });

        // Show selected section
        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.classList.add('active');
            this.currentSection = section;

            // Update URL
            if (pushState) {
                history.pushState({section}, '', '#' + section);
            }

            // Update sidebar active state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.dataset.section === section) {
                    link.classList.add('active');
                }
            });

            // Load section data
            this.loadSectionData(section);

            // Scroll to top
            window.scrollTo(0, 0);
        }
    },

    loadSectionData(section) {
        // Call section-specific load functions
        const loadFunction = 'load_' + section.replace(/-/g, '_');
        if (typeof window[loadFunction] === 'function') {
            window[loadFunction]();
        }
    },

    goToProjectDetail(projectId) {
        // Store project ID in session
        sessionStorage.setItem('currentProjectId', projectId);
        this.navigateTo('project-detail');
    },

    goToReviewDetail(evidenceId) {
        // Store evidence ID in session
        sessionStorage.setItem('currentEvidenceId', evidenceId);
        this.navigateTo('review-detail');
    },

    goBack() {
        history.back();
    }
};

// Initialize router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    Router.init();
});