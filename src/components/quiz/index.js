import logo1 from '/assets/images/logo1.jpg';
import logo2 from '/assets/images/logo2.jpg';
import logo3 from '/assets/images/logo3.jpg';
import logo4 from '/assets/images/logo4.jpg';
import logo5 from '/assets/images/logo5.jpg';
import logo6 from '/assets/images/logo6.jpg';
import style from './style.css';
import { html } from 'htm/preact';

function Quiz() {
  return html`
    <div class=${style.container}>
      <div class=${style.text}>Se indovini è tua</div>
      <div class=${style.logoContainer}>
        <img src=${logo1} />
        <img src=${logo2} />
        <img src=${logo3} />
        <img src=${logo4} />
        <img src=${logo5} />
        <img src=${logo6} />
      </div>
    </div>
    `;
}

export default Quiz;