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

  //ライブラリのインポート
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
        //cognito設定
        let poolData = {
          UserPoolId: process.env.VUE_APP_COGNITO_POOL_ID,
          ClientId: process.env.VUE_APP_COGNITO_CLIENT_ID
        };
        console.log("poolData")
        let userPool = new CognitoUserPool(poolData);
        //cognitoパラメータ設定
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

        //ログイン処理
        cognitoUser.authenticateUser(authenticationDetails, {
          onSuccess: function() {
            console.log("認証成功ーーーーーーーーーーーーー")
            console.log(result)
            let result="遷移先のURL";
            location.assign(result);
          },
          onFailure: function(err) {
            alert(err.message || JSON.stringify(err));
          },
        });
      }
    }
  }
</script>