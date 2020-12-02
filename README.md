# vue-narito-gallery
Vue.jsで作った、作品の展示などに使うサイト

![Screenshot_2020-12-02 マイクロブタカフェ - gallery narito](https://user-images.githubusercontent.com/28292340/100850365-0f9cc280-34c7-11eb-8653-d5054bdf88dd.jpg)

![Screenshot_2020-12-02 マイクロブタカフェ - gallery narito(1)](https://user-images.githubusercontent.com/28292340/100850374-11ff1c80-34c7-11eb-8745-42ac782e2a20.jpg)



## とりあえず動かしてみたい方

```
git clone https://github.com/naritotakizawa/vue-narito-gallery
cd vue-narito-gallery
npm install
npm run serve
```

127.0.0.1:8080アクセスする

## バックエンド側を実装できる方

 `.env`を編集するか、`env.local`などを作成して次のようにしてください

 ```
 # グーグルアナリティクスを使う方
VUE_APP_NARITOGALLERY_ANALYTICS_ID='UA-12345-6'

# モックを使わないようにする
VUE_APP_NARITOGALLERY_USE_MOCK=false

# 用意したAPIと接続するパス
VUE_APP_NARITOGALLERY_API_ROOT='http://127.0.0.1:8000/api'
 ```

[Django REST framrworkで作ったサンプル](https://github.com/naritotakizawa/drf-narito-gallery)

