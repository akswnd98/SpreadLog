import Element, { ConstructorParam as ParentConstructorParam } from '@/src/owl-element/Element';
import { html, render } from 'lit-html';
import x24Icon from '@/assets/images/x-24.svg';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';

export type ConstructorParam = {
  body: Element;
} & ParentConstructorParam;

@injectable()
export default class Dialog extends Element {
  body: Element;

  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.body = payload.body;
  }

  initialRender (payload: ConstructorParam) {
    super.initialRender(payload);
    render(
      html`
        <div class='total-margin'>
          <div id='top' class='top'>
            <p>new node</p>
            <img src=${x24Icon} id='close' />
          </div>
          <div class='body'>
            ${payload.body}
          </div>
          <div class='bottom'>
            <div id='ok' class='ok'>Ok</div>
          </div>
        </div>
      `,
      this.rootElement,
    );
  }
}

customElements.define('sl-dialog', Dialog);
