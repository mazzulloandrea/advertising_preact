import { h } from 'preact';
import style from './style.css';
import CloseButton from '../../components/closeButton';
import Blur from '../../components/blur';
import Quiz from '../../components/quiz';

{/* const JSXEelement = <span>test</span>; */ }
{/* <iframe src="https://adv-1-jcngfiq1l-mazzulloandrea.vercel.app/" /> */ }

const Home = () => {
  function close() {
    const anim = document.getElementById("animation");
    if (anim.classList.value.includes('exit')) {
      return;
    } else {
      anim.classList.toggle(style.exit);
      anim.onanimationend = (evt => evt.target.style.left = '-25vw')
    }
  };

  return (
    <div id="animation" class={style.container}>
      <div class={style.closeContainer}>
        <CloseButton closeAnimation={(evt) => close()} />
      </div>
      <div class={style.blurSection} onclick={() => window.open("http://www.google.it")}>
        <Blur />
      </div>
      <div class={style.quizSection} onclick={() => window.open("http://www.google.it")}>
        <Quiz />
      </div>
    </div>
  );
}

export default Home;
