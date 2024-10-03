const footerTemplate = document.createElement('template');

footerTemplate.innerHTML = `
  <style>
    footer {
      height: 60px;
      padding: 0 10px;
      list-style: none;
      display: flex;
      flex-shrink: 0;
      justify-content: space-between;
      align-items: center;
      background-color: #dfdfe2;
    }

    ul {
      padding: 0;
    }

    ul li {
      list-style: none;
      display: inline;
    }

    a {
      margin: 0 15px;
      color: inherit;
      text-decoration: none;
      font-family: Helvetica, sans-serif;
    }

    a {
      background:
        linear-gradient(
          to right,
          rgba(255, 0, 0, 1),
          rgba(255, 0, 180, 1),
          rgba(0, 100, 200, 1)
      );
      background-size: 0 5px;
      background-position: 0 100%;
      background-repeat: no-repeat;
      transition: background-size 400ms;
    }

    a:hover {
      background-size: 100% 5px;
    }

    .social-row {
      font-size: 20px;
    }

    .social-row li a {
      margin: 0 15px;
    }

    .social-row a:hover {
      background-size: 0, 0px
    }
  </style>
  <footer>
    <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="BLOG-LINK">Blog</a></li>
        <li><a href="career.html">Career</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="credits.html">Credits</a></li>
    </ul>
    <ul class="social-row">
      <li><a href="REPOSITORY LINK"><i class="fab fa-github"></i></a></li>
    </ul>
  </footer>
`;

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const fontAwesome = document.querySelector('link[href*="font-awesome"]');
    const shadowRoot = this.attachShadow({ mode: 'closed' });

    if (fontAwesome) {
      shadowRoot.appendChild(fontAwesome.cloneNode());
    }

    shadowRoot.appendChild(footerTemplate.content);
  }
}

customElements.define('footer-component', Footer);