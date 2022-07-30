import car from '/assets/images/car.png';
import style from './style.css';

function Blur() {
  return (
    <div class={style.focus}>
      <div class={style.focusMask}>
        <div class={style.focusMaskInner}>
          <img src={car} />
        </div>
      </div>
    </div>
  )
}

export default Blur;