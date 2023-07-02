<template>
  <div class="login">
    <h3>ログイン</h3>
    <form class="form" @submit.prevent="login">
      <div>
        <div  class="user">
        ユーザーID:
        </div>
        <input type="text" placeholder="ユーザーID" v-model="username" required>
      </div>
      <div >
        <div class="pass">
        パスワード:
        </div>
        <input type="password" placeholder="パスワード" v-model="password" required>
      </div>
      <button class="login-button ">ログイン</button>
    </form>
  </div>
</template>


<script>

  import {
    CognitoUserPool,
    CognitoUser,
    AuthenticationDetails
  } from 'amazon-cognito-identity-js'


  export default {
    name: 'LoginPage',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login() {
        let poolData = {
          UserPoolId: process.env.VUE_APP_COGNITO_POOL_ID,
          ClientId: process.env.VUE_APP_COGNITO_CLIENT_ID
        };

        let userPool = new CognitoUserPool(poolData);
        let username = this.username;
        let password = this.password;

        let authenticationData = {
          Username: username,
          Password: password,
        };

        let authenticationDetails = new AuthenticationDetails(
          authenticationData
        );

        let userData = {
          Username: username,
          Pool: userPool,
        };

        let cognitoUser = new CognitoUser(userData);

        //Cognitoログイン処理
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: () => {
            //２回目以降に通過
            alert("ログイン成功");
            // let result="/";
            // location.assign(result);
          },
          onFailure: (err)=> {
            alert(err.message || JSON.stringify(err));
          },
        newPasswordRequired: function (userAttributes, requireAttributes) {
            //初回に通過。パスワード変更を行う
            alert("ログイン成功！");
            //TODO：以下パスワード変更は未実装
            console.log(userAttributes);
            console.log(requireAttributes);
            console.log(process.env.VUE_APP_FIRST_LOGIN_EMAIL);
            // let attributesData = {
            //     name: process.env.VUE_APP_FIRST_LOGIN_EMAIL //TODO：メールアドレスはDBから取得する必要がある
            // }
            // //パスワード変更機能実装時に、以下の再パスワードを変数
            // let newPassword = 'Password1'
            // cognitoUser.completeNewPasswordChallenge(newPassword, attributesData, this)
            }
        });
      }
    }
  }
</script>