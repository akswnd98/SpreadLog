import Style from '@/src/owl-element/Attribute/Style';
import styles from './index.scss';
import Label, { ConstructorParam as ParentConstructorParam } from '@/src/elements/Label';
import 'reflect-metadata';
import { injectable } from 'inversify';
import Element from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import * as timeago from 'timeago.js';
import MouseOver from './Handler/MouseOver';
import MouseLeave from './Handler/MouseLeave';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class PostDate extends Element {
  constructor () {
    super({
      attributes: [
        new Style({ styles: styles.toString() }),
      ],
    });
    this.registerAttributes([
      new MouseOver({ postDate: this }),
      new MouseLeave({ postDate: this }),
    ]);
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div id='firstUpload'></div>
        <div id='lastUpdate' style='visibility: hidden;'></div>
      `,
      this.rootElement,
    );
  }

  setLastUpdate (date: Date) {
    render(
      html`
        last update: ${timeago.format(date)}
      `,
      this.shadowRoot!.getElementById('lastUpdate')!
    );
  }

  setFirstUpload (date: Date) {
    render(
      html`
        ${timeago.format(date)}
      `,
      this.shadowRoot!.getElementById('firstUpload')!
    );
  }

  showLastUpdate () {
    this.shadowRoot!.getElementById('lastUpdate')!.style.visibility = 'visible';
  }

  hideLastUpdate () {
    this.shadowRoot!.getElementById('lastUpdate')!.style.visibility = 'hidden';
  }
}

customElements.define('post-date', PostDate);
