import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
import poolData from "../cognito-pool-data";

//코그니트 API임 알아서 다해줌
const userPool = new CognitoUserPool(poolData);

//회원가입 숫자,영문자 6자리 이상 유효성 걸어야 함
export const createUser = (username, email, password, callback) => {
  const attributeList = [
    new CognitoUserAttribute({
      Name: "email",
      Value: email,
    }),
  ];

  userPool.signUp(username, password, attributeList, null, callback);
};

//코드 인증 이메일로 날아간 코드 인증하는 거임 6자리 유효성 필요
export const verifyUser = (username, verifyCode, callback) => {
  const userData = {
    Username: username,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData); // 바깥에 빼지말고 여기에 두삼
  cognitoUser.confirmRegistration(verifyCode, true, callback);
};

export const changePassword = (
  userName,
  email,
  oldPassword,
  newPassword,
  callback
) => {
  const userData = {
    Username: userName,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.changePassword(oldPassword, newPassword, callback);
};

//로그인 복잡함 잘보면 이해됨 물어보지 마셈 나도 헷갈려F
export const authenticateUser = (email, password, callback) => {
  const authData = {
    Username: email,
    Password: password,
  };
  const authDetails = new AuthenticationDetails(authData);
  const userData = {
    Username: email,
    Pool: userPool,
  };
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.authenticateUser(authDetails, {
    onSuccess: (result) => {
      callback(null, result);
    },
    onFailure: (err) => {
      callback(err);
    },
  });
};

//로그아웃
export const signOut = () => {
  userPool.getCurrentUser().signOut();
  window.location.reload();
};

//유저 정보 가져오기
export const getCurrentUser = (callback) => {
  const cognitoUser = userPool.getCurrentUser();
  if (!cognitoUser) return false;

  cognitoUser.getSession((err, session) => {
    if (err) {
      console.log(err);
      return;
    }

  console.log("로그인 토큰 정보", session); // 엑세스 토큰, id토큰, 리프레시 토큰 담겨 있음

  cognitoUser.getUserAttributes((err, attributes) => {
      if (err) return console.log(err);
      callback(attributes);
    });
  });
};

//유저 이름 가져오기
export const getUsername = (callback) => {
  const cognitoUser = userPool.getCurrentUser();
  if (!cognitoUser) return false;
  callback(cognitoUser.getUsername());
};
