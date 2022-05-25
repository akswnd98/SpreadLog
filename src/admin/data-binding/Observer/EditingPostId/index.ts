import IObserver from '@/src/data-binding/IObserver';
import 'reflect-metadata';
import { injectable } from 'inversify';
import EditingPostIdNotifier from '../../ModelNotifier/EditingPostId';
import axios, { AxiosResponse } from 'axios';
import { GetByIdRequest, GetByIdResponse } from '@/common/api/post';
import Static from '@/src/admin/inversify.config';
import EditingPostNotifier from '@/src/admin/data-binding/ModelNotifier/EditingPost';
import { SYMBOLS } from '@/src/admin/types';

@injectable()
export default class EditingPostId implements IObserver {
  async update (subject: EditingPostIdNotifier, event: number) {
    const ret = await axios.get<GetByIdResponse, AxiosResponse<GetByIdResponse>, GetByIdRequest>('/api/post/getById', {
      params: {
        id: event,
      },
      responseType: 'json',
    });
    Static.instance.get<EditingPostNotifier>(SYMBOLS.EditingPostNotifier).setData({
      ...ret.data.ret,
      firstUpload: new Date(ret.data.ret.firstUpload),
      lastUpdate: new Date(ret.data.ret.lastUpdate),
    });
  }
}
