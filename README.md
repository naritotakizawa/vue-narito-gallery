# vue-narito-gallery
ギャラリーサイト。Vue製

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

