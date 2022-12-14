import axios from "axios";

const backendPortNumber = "8000";
// 로컬서버
const localBaseUrl = "localhost";
// 개발서버
const realBaseUrl = "veganner-back.herokuapp.com";

const serverUrl = `http://kdt-ai5-team01.elicecoding.com:5000/`;
axios.defaults.withCredentials = true;
async function get(endpoint: string, params = "") {
  return axios.get(serverUrl + endpoint + "/" + params, {
    // JWT 토큰을 헤더에 담아 백엔드 서버에 보냄.
    headers: {
      "Content-Type": "application/json",
    },
  });
}

async function post(endpoint: string, data?: any) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);

  return axios.post(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

async function put(endpoint: string, data?: string) {
  // JSON.stringify 함수: Javascript 객체를 JSON 형태로 변환함.
  // 예시: {name: "Kim"} => {"name": "Kim"}
  const bodyData = JSON.stringify(data);

  return axios.put(serverUrl + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    },
  });
}

// 아래 함수명에 관해, delete 단어는 자바스크립트의 reserved 단어이기에,
// 여기서는 우선 delete 대신 del로 쓰고 아래 export 시에 delete로 alias 함.
async function del(endpoint: string, params = "") {
  return axios.delete(
    serverUrl + endpoint + "/" + params
    // {
    //   headers: {
    //     Authorization: `Bearer ${sessionStorage.getItem("userToken")}`,
    //   },
    // }
  );
}

// 아래처럼 export한 후, import * as A 방식으로 가져오면,
// A.get, A.post 로 쓸 수 있음.
export { get, post, put, del as delete };
