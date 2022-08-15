import axios from 'axios';
import { SERVER_BASE } from '../config';

export const fetcher = (url: string, method: 'get' | 'post', data?: any) =>
  axios({ method, url: SERVER_BASE + url, data }).then((res) => res.data);
