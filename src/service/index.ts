import axios from 'axios'

const preFix = 'https://kangroo-557b2.firebaseio.com/';
// axios.defaults.withCredentials = true;

interface IParams {
  action: string,
}

interface IBaseService {
  get: (params: IParams) => Promise<object>
}

const baseService: IBaseService = {
  get: (params: IParams) => {
    return axios.get(preFix + params.action)
      .then((res) => {
        console.log(res)
        return res.data;
      })
      .catch((err) => {
        console.log(`【axios获取信息失败，Content.vue】：${err}`)
        return {err}
      });
  }
};

export default baseService;
