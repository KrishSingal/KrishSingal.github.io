class SiteProfile extends HTMLElement {
  connectedCallback() {
    const activePage = this.getAttribute('active-page');
    const activeAttribute = (page) => activePage === page ? ' aria-current="page"' : '';

    this.innerHTML = `
      <aside class="site-profile">
        <img src="Krish copy.jpg" alt="Krish Singal">
        <h2>Krish Singal</h2>
        <p class="profile-contact"> <span>ksingal@engineering.upenn.edu</span></p>
        <p class="profile-links">
          <a href="CV/Krish_Singal_CV.pdf" target="_blank" aria-label="CV" title="CV">
            <svg class="profile-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2-2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8"/></svg><span>CV</span>
          </a>
          <a href="https://dblp.org/pid/327/9147.html" target="_blank" aria-label="DBLP" title="DBLP">
            <img class="profile-link-icon" src="https://cdn.simpleicons.org/dblp/000000" alt=""><span>DBLP</span>
          </a>
          <a href="https://scholar.google.com/citations?user=owzAoCoAAAAJ&hl=en" target="_blank" aria-label="Google Scholar" title="Google Scholar">
            <img class="profile-link-icon" src="https://cdn.simpleicons.org/googlescholar/000000" alt=""><span>Scholar</span>
          </a>
          <a href="https://github.com/KrishSingal" target="_blank" aria-label="GitHub" title="GitHub">
            <img class="profile-link-icon" src="https://cdn.simpleicons.org/github/000000" alt=""><span>Github</span>
          </a>
        </p>
        <nav class="site-page-nav" aria-label="Main navigation">
          <a href="index.html"${activeAttribute('about')}>about</a>
          <a href="research.html"${activeAttribute('research')}>research</a>
          <a href="teaching.html"${activeAttribute('teaching')}>teaching</a>
        </nav>
      </aside>
    `;
  }
}

customElements.define('site-profile', SiteProfile);