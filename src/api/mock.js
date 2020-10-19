import MockAdapter from 'axios-mock-adapter';


const products1 = {
    count: 20,
    next: '/products/?keyword=&category=0&page=2',
    previous: null,
    results: [
        {
            id: 1, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/1.png',
            category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 2, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/2.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 3, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/3.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 4, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/4.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 5, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/5.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 6, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/6.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
    ]
}

const products2 = {
    count: 20,
    next: '/products/?keyword=&category=0&page=3',
    previous: null,
    results: [
        {
            id: 7, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/1.png',
            category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 8, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/2.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 9, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/3.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 10, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/4.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 11, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/5.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 12, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/6.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
    ]
}

const products3 = {
    count: 20,
    next: '/products/?keyword=&category=0&page=4',
    previous: null,
    results: [
        {
            id: 13, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/1.png',
            category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 14, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/2.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 15, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/3.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 16, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/4.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 17, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/5.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 18, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/6.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
    ]
}
const products4 = {
    count: 20,
    next: null,
    previous: null,
    results: [
        {
            id: 19, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/1.png',
            category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
        {
            id: 20, title: 'マイクロブタカフェ', thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/2.png', category: {
                id: 4,
                name: 'Photo'
            },
            created_at: "2020-08-23T21:05:40+09:00",
        },
    ]
}

const categories = [
    { id: 1, name: 'Game', product_count: 4, },
    { id: 2, name: 'Graphic', product_count: 3, },
    { id: 3, name: 'Illust', product_count: 10, },
    { id: 4, name: 'Photo', product_count: 20, },
    { id: 5, name: 'Web', product_count: 11, },
]

const product1 = {
    id: 1,
    title: 'マイクロブタカフェ',
    thumbnail: 'https://narito.ninja/uploader/home/public/gallery-sample/d3.png',
    category: {
        id: 4,
        name: 'Photo'
    },
    text: '<p><a href="#">マイクロブタカフェ</a>に行ってきたので、写真をたくさん撮りました。非常に人懐っこくグイグイ近づいてきます。気軽に人に登ってみたり、その上でお昼寝したりとやりたい放題です。</p>',
    created_at: "2020-08-23T21:05:40+09:00",
    image_set: [
        {
            id: 1,
            src: 'https://narito.ninja/uploader/home/public/gallery-sample/d4.png',
            alt: 'ぶた1',

        },
        {
            id: 2,
            src: 'https://narito.ninja/uploader/home/public/gallery-sample/d5.png',
            alt: 'ぶた2',
        },
        {
            id: 3,
            src: 'https://narito.ninja/uploader/home/public/gallery-sample/d6.png',
            alt: 'ぶた3',

        },
        {
            id: 4,
            src: 'https://narito.ninja/uploader/home/public/gallery-sample/d1.png',
            alt: 'ぶた4',

        },
        {
            id: 5,
            src: 'https://narito.ninja/uploader/home/public/gallery-sample/d2.png',
            alt: 'ぶた5',
        },
        {
            id: 6,
            src: 'https://narito.ninja/uploader/home/public/gallery-sample/d3.png',
            alt: 'ぶた6',
        },
    ]
}


export default {
    run: client => {
        const mock = new MockAdapter(client);
        mock.onGet('/products/?keyword=&category=0&page=1').reply(200, products1);
        mock.onGet('/products/?keyword=&category=0&page=2').reply(200, products2);
        mock.onGet('/products/?keyword=&category=0&page=3').reply(200, products3);
        mock.onGet('/products/?keyword=&category=0&page=4').reply(200, products4);
        mock.onGet('/categories/?keyword=&category=0').reply(200, categories);
        mock.onGet('/products/1/').reply(200, product1);
        mock.onGet('/products/2/').reply(200, product1);
        mock.onGet('/products/3/').reply(200, product1);
        mock.onGet('/products/4/').reply(200, product1);
        mock.onGet('/products/5/').reply(200, product1);
        mock.onGet('/products/6/').reply(200, product1);
        mock.onGet('/products/7/').reply(200, product1);
        mock.onGet('/products/8/').reply(200, product1);
        mock.onGet('/products/9/').reply(200, product1);
        mock.onGet('/products/10/').reply(200, product1);
        mock.onGet('/products/11/').reply(200, product1);
        mock.onGet('/products/12/').reply(200, product1);
        mock.onGet('/products/13/').reply(200, product1);
        mock.onGet('/products/14/').reply(200, product1);
        mock.onGet('/products/15/').reply(200, product1);
        mock.onGet('/products/16/').reply(200, product1);
        mock.onGet('/products/17/').reply(200, product1);
        mock.onGet('/products/18/').reply(200, product1);
        mock.onGet('/products/19/').reply(200, product1);
        mock.onGet('/products/20/').reply(200, product1);
    }
}