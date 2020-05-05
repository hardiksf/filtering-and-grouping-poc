import '../sass/styles.sass';
import { html, render } from 'lit-html';
import './my-element';
const MyElement = html`<my-element></my-element>`
render(MyElement, document.body);