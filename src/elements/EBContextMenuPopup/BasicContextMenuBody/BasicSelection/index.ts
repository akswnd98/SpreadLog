import SimpleHandler from '@/src/elements/EBAttribute/SimpleHandler';
import Style from '@/src/elements/EBAttribute/Style';
import 'reflect-metadata';
import { injectable, unmanaged } from 'inversify';
import RawBasicSelection, { ConstructorParam as ParentConstructorParam } from './RawBasicSelection';
import styles from './index.scss';

type ConstructorParam = {
  handleClick: (event: MouseEvent) => Promise<void>;
} & ParentConstructorParam;

@injectable()
export default class BasicSelection extends RawBasicSelection {
  constructor (@unmanaged() payload: ConstructorParam) {
    super(payload);
    this.registerAttributes([
      new Style({ styles: styles.toString() }),
      new SimpleHandler({ id: 'root', eventName: 'click', handler: payload.handleClick }),
    ]);
  }
}

customElements.define('eb-basic-selection', BasicSelection);
