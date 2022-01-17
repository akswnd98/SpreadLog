import SimpleHandler from '@/src/EBAttribute/SimpleHandler';
import Style from '@/src/EBAttribute/Style';
import EBRawSelection, { ConstructorParam as ParentConstructorParam } from '../EBRawSelection';
import styles from './index.scss';

type ConstructorParam = {
  handleClick: (event: MouseEvent) => void;
} & ParentConstructorParam;

export default class EBBasicSelection extends EBRawSelection {
  constructor (payload: ConstructorParam) {
    super(payload);
    this.registerAttributes([
      new Style({ styles: styles.toString() }),
      new SimpleHandler({ id: 'root', eventName: 'click', handler: payload.handleClick }),
    ]);
  }
}

customElements.define('eb-basic-selection', EBBasicSelection);
