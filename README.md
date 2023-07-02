# Login sample (Vue + Cognito)

node v18.16.1

## Project setup

```
npm install
```

### Start App

```
npm start
```

http://localhost:8081

### Env

cognito "vuecognito290f994e_userpool_290f994e-dev"から以下環境変数を設定

```
touch .env.local

VUE_APP_COGNITO_POOL_ID="プールID"
VUE_APP_COGNITO_CLIENT_ID="クライアントID"
```
