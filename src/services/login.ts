import request from 'utils/request';

export interface IProduct {
  code: number;
  description: string;
  index: number;
  isSetup: boolean;
  name: string;
  type: number;
}

interface IResult {
  list: IProduct[];
}

type CapResult = {
  uuid: string;
  base64: string;
}
interface IParams {
  account: string;
  password: string;
  uuid: string;
  code: string;
}

export const Login = async (data: IParams) => request.post<IResult>('/data/admin/login', data);
export const GetCaptcha = async () => request.get<CapResult>('/data/admin/getCaptcha');
