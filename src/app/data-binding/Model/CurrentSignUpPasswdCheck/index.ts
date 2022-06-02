import Model from '@/src/owl-data-binding/Model';
import 'reflect-metadata';
import { injectable } from 'inversify';

export type DataType = {
  passwdCheck: string;
};

@injectable()
export default class CurrentSignUpPasswdCheck extends Model<DataType> {
  constructor () {
    super({
      data: {
        passwdCheck: '',
      },
    });
  }
}
