/** @jsx html */
import { html } from 'snabbdom-jsx'

const Btn = ({ text, clickHandler }) =>
  <div className='counter-btn' on-click={clickHandler}>{text}</div>

export default Btn
