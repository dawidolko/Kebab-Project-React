import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kanit', sans-serif;
  }
    
  html, body {
    overflow-x: hidden;
  }

  /* ---------------------------------------------------------------------
     Accessibility (WCAG 2.1 AA)
     --------------------------------------------------------------------- */

  /* Skip link: hidden until keyboard focus, then pinned to the top. */
  .skip-link {
    position: absolute;
    top: -100px;
    left: 16px;
    z-index: 2000;
    padding: 12px 20px;
    border-radius: 0 0 8px 8px;
    background-color: #1a1a1a;
    color: #ffc500;
    font-weight: 600;
    text-decoration: none;
    border: 2px solid #ffc500;
    transition: top 0.2s ease-in-out;
  }

  .skip-link:focus,
  .skip-link:focus-visible {
    top: 0;
    outline: 3px solid #ffc500;
    outline-offset: 2px;
  }

  /* Target of the skip link, not a tab stop of its own. */
  #main-content:focus {
    outline: none;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 3px solid #ffc500;
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* In-page anchors should not land under the fixed navigation bar. */
  :target {
    scroll-margin-top: 90px;
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
