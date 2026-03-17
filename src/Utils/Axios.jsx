import axios from "axios";

  const instance=axios.create({
    baseURL:"https://fakestoreapi.com/",

  });
//   const instance = axios.create();


instance.interceptors.request.use(
  function (config) {
    console.log(  "request------->",config)
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (response) {
        console.log(  "reponce------->",response)
    return response;
  },
  function (error) {
    return Promise.reject(error);
  },
);

 export default instance;