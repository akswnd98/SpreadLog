import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type DataType = {
  passwd: string;
};

@injectable()
export default class CurrentSignUpPasswd extends Model<DataType> {
  constructor () {
    super({
      data: {
        passwd: '',
      },
    });
  }
}
