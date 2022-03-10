import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import Style from '../EBAttribute/Style';
import EBListElement, { ConstructorParam as ParentConstructorParam } from '../EBListElement';
import styles from './index.scss';

export type ConstructorParam = {
} & ParentConstructorParam;

@injectable()
export default class EBContextMenuPopup extends EBListElement {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.registerAttribute(new Style({ styles: styles.toString() }));
    this.rootElement.style.visibility = 'hidden';
    this.rootElement.classList.add('hide');
  }

  show (cord: { x: number; y: number; }) {
    this.rootElement.style.visibility = 'visible';
    this.rootElement.style.left = `${cord.x}px`;
    this.rootElement.style.top = `${cord.y}px`;
    this.rootElement.classList.remove('hide');
    this.rootElement.classList.add('show');
    document.body.addEventListener('click', () => {
      this.hide();
    }); // 이건 필수적으로 개선해야됨.
  }

  hide () {
    this.rootElement.classList.remove('show');
    this.rootElement.classList.add('hide');
    setTimeout(() => {
      this.rootElement.style.visibility = 'hidden';
    }, 500);
  }
}

customElements.define('eb-context-menu-popup', EBContextMenuPopup);
