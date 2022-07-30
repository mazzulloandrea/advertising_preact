import close from '/assets/images/close.png';
import style from './style.css';
function CloseButton({ closeAnimation }) {
  return (
    <div class={style.container} onclick={() => closeAnimation()}>
      <img src={close} />
    </div>
  )
}

export default CloseButton;