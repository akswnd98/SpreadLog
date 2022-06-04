import Handler from '@/src/elements/EBAttribute/Handler';
import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import ContextMenuPopup from '@/src/admin/EBAdmin/ContextMenuPopup';
import { SYMBOLS } from '@/src/admin/types';
import Static from '@/src/admin/inversify.config';
import Body from '../ContextMenuBody';
import PostGraph from '@/src/app/data-binding/Model/PostGraph';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';

@injectable()
export default class ContextMenu extends Handler<'contextmenu'> {
  eventName: 'contextmenu' = 'contextmenu';

  popup: ContextMenuPopup;

  constructor (
    @inject(SYMBOLS.ContextMenuPopup) popup: ContextMenuPopup,
  ) {
    super({ id: 'root' });
    this.popup = popup;
  }

  async handle (event: MouseEvent) {
    event.preventDefault();
    this.popup.replaceBody(Static.instance.get<Body>(SYMBOLS.GraphVisContextMenuBody));
    this.popup.show({ x: event.clientX, y: event.clientY });
  }
}
