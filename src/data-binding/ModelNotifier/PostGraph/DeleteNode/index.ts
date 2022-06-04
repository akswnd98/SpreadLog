import { SYMBOLS } from '@/src/admin/types';
import { SYMBOLS as BasicSYMBOLS } from '@/src/symbols';
import Node from '@/src/app/data-binding/Model/PostGraph/PostGraphNode';
import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import ModelNotifier from '../..';
import PostGraph, { DataType } from '../../../../app/data-binding/Model/PostGraph';
import PostGraphDeleteNodeObserver from '@/src/data-binding/IObserver/EBGraphVis/DeleteNode/inversified';

@injectable()
export default class DeleteNode extends ModelNotifier<DataType> {
  constructor (
    @inject(BasicSYMBOLS.PostGraph) postGraph: PostGraph,
    @inject(SYMBOLS.PostGraphDeleteNodeObserver) observer: PostGraphDeleteNodeObserver,
  ) {
    super({
      model: postGraph,
    });
    this.attachObserver(observer);
  }

  async notify (event: number) {
    try {
      await super.notify(event);
    } catch (e) {
      console.log('PostGraphAppendNotifier.notify failed');
      throw e;
    }
  }

  async delete (id: number) {
    this.model.data.nodes.delete(id);
    await this.notify(id);
  }
}
