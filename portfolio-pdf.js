(function () {
    const careerOrder = ['digitaldime', 'gsitm', 'onestore1', 'onestore2', 'encar'];
    const featuredOrder = ['onestore-2', 'onestore-1', 'encar-1', 'gsitm-1'];
    const earlyOrder = ['digitaldime-1', 'digitaldime-2', 'digitaldime-3', 'digitaldime-4', 'onestore-3', 'gsitm-2'];
    const sideOrder = ['side-note-cleaner'];

    function createTechBadges(items) {
        if (!items || items.length === 0) return '';
        return `<div class="pdf-tech">${items.map((item) => `<span class="tech-badge">${item}</span>`).join('')}</div>`;
    }

    function renderCareer() {
        const root = document.getElementById('pdfCareerRoot');
        if (!root || typeof careerData === 'undefined') return;

        root.innerHTML = careerOrder
            .filter((id) => careerData[id])
            .map((id) => {
                const item = careerData[id];
                const sections = item.sections.map((section) => `
                    <div class="pdf-body-section">
                        <h4>${section.title}</h4>
                        ${section.content}
                    </div>
                `).join('');

                return `
                    <article class="pdf-card career-card">
                        <div class="pdf-card-header">
                            <div>
                                <h3>${item.company}</h3>
                                <div class="pdf-meta">
                                    <span class="pdf-chip">${item.period}</span>
                                    <span class="pdf-chip">${item.duration}</span>
                                    <span class="pdf-chip">${item.role}</span>
                                </div>
                            </div>
                            ${item.logo ? `<img src="${item.logo}" alt="${item.company} 로고" class="company-logo-print">` : ''}
                        </div>
                        <div class="pdf-body">${sections}</div>
                        ${createTechBadges(item.techStack)}
                    </article>
                `;
            }).join('');
    }

    function renderProjects(rootId, ids) {
        const root = document.getElementById(rootId);
        if (!root || typeof projectData === 'undefined') return;

        root.innerHTML = ids
            .filter((id) => projectData[id])
            .map((id) => {
                const project = projectData[id];
                return `
                    <article class="pdf-card project-card" data-project-id="${id}">
                        <div class="pdf-card-header">
                            <div>
                                <h3>${project.title}</h3>
                                <div class="pdf-meta">
                                    <span class="pdf-chip">${project.period}</span>
                                </div>
                            </div>
                        </div>
                        <p>${project.description}</p>
                        ${createTechBadges(project.tech)}
                        <div class="pdf-body">${project.features}</div>
                    </article>
                `;
            }).join('');
    }

    function normalizeExternalLinks() {
        document.querySelectorAll('.pdf-document a').forEach((link) => {
            const href = link.getAttribute('href');
            if (!href) return;
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        });
    }

    function removeInteractiveAttributes() {
        document.querySelectorAll('.pdf-document [onclick], .pdf-document [onkeydown], .pdf-document [role="button"], .pdf-document [tabindex]').forEach((node) => {
            node.removeAttribute('onclick');
            node.removeAttribute('onkeydown');
            node.removeAttribute('role');
            node.removeAttribute('tabindex');
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        renderCareer();
        renderProjects('pdfFeaturedProjectsRoot', featuredOrder);
        renderProjects('pdfEarlyProjectsRoot', earlyOrder);
        renderProjects('pdfSideProjectRoot', sideOrder);
        normalizeExternalLinks();
        removeInteractiveAttributes();
    });
})();
