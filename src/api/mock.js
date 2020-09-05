import MockAdapter from 'axios-mock-adapter';


const products1 = {
    count: 20,
    next: '/products/?keyword=&category=0&page=2',
    previous: null,
    results: [
        { id: 1, title: 'マイクロブタカフェ1', thumbnail: 'https://narito.ninja/uploader/home/public/1.jpg' },
        { id: 2, title: 'マイクロブタカフェ2', thumbnail: 'https://narito.ninja/uploader/home/public/2.jpg' },
        { id: 3, title: 'マイクロブタカフェ3', thumbnail: 'https://narito.ninja/uploader/home/public/3.jpg' },
        { id: 4, title: 'マイクロブタカフェ4', thumbnail: 'https://narito.ninja/uploader/home/public/4.jpg' },
        { id: 5, title: 'マイクロブタカフェ1', thumbnail: 'https://narito.ninja/uploader/home/public/5.jpg' },
        { id: 6, title: 'マイクロブタカフェ2', thumbnail: 'https://narito.ninja/uploader/home/public/6.jpg' },
        { id: 7, title: 'マイクロブタカフェ3', thumbnail: 'https://narito.ninja/uploader/home/public/7.jpg' },
        { id: 8, title: 'マイクロブタカフェ4', thumbnail: 'https://narito.ninja/uploader/home/public/8.jpg' },
        { id: 9, title: 'マイクロブタカフェ1', thumbnail: 'https://narito.ninja/uploader/home/public/9.jpg' },
        { id: 10, title: 'マイクロブタカフェ2', thumbnail: 'https://narito.ninja/uploader/home/public/10.jpg' },
        { id: 11, title: 'マイクロブタカフェ3', thumbnail: 'https://narito.ninja/uploader/home/public/11.jpg' },
        { id: 12, title: 'マイクロブタカフェ4', thumbnail: 'https://narito.ninja/uploader/home/public/12.jpg' },
    ]
}

const products2 = {
    count: 20,
    next: null,
    previous: null,
    results: [
        { id: 13, title: 'マイクロブタカフェ1', thumbnail: 'https://narito.ninja/uploader/home/public/1.jpg' },
        { id: 14, title: 'マイクロブタカフェ2', thumbnail: 'https://narito.ninja/uploader/home/public/2.jpg' },
        { id: 15, title: 'マイクロブタカフェ3', thumbnail: 'https://narito.ninja/uploader/home/public/3.jpg' },
        { id: 16, title: 'マイクロブタカフェ4', thumbnail: 'https://narito.ninja/uploader/home/public/4.jpg' },
        { id: 17, title: 'マイクロブタカフェ1', thumbnail: 'https://narito.ninja/uploader/home/public/5.jpg' },
        { id: 18, title: 'マイクロブタカフェ2', thumbnail: 'https://narito.ninja/uploader/home/public/6.jpg' },
        { id: 19, title: 'マイクロブタカフェ3', thumbnail: 'https://narito.ninja/uploader/home/public/7.jpg' },
        { id: 20, title: 'マイクロブタカフェ4', thumbnail: 'https://narito.ninja/uploader/home/public/8.jpg' },
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
    title: 'マイクロブタカフェ1',
    thumbnail: 'https://narito.ninja/uploader/home/public/2.jpg',
    category: {
        id: 4,
        name: 'Photo'
    },
    text: '<p><a href="#">マイクロブタカフェ</a>に行ってきたので、写真をたくさん撮りました。非常に人懐っこくグイグイ近づいてきます。気軽に人に登ってみたり、その上でお昼寝したりとやりたい放題です。</p>',
    created_at: "2020-08-23T21:05:40+09:00",
    is_auto_order: true,
    column_width: 290,
    container_width: 900,
    image_set: [
        {
            id: 1,
            src: 'https://narito.ninja/uploader/home/public/d4.jpg',
            alt: 'ぶた1',
            width: 290
        },
        {
            id: 2,
            src: 'https://narito.ninja/uploader/home/public/d5.jpg',
            alt: 'ぶた2',
            width: 290
        },
        {
            id: 3,
            src: 'https://narito.ninja/uploader/home/public/d6.jpg',
            alt: 'ぶた3',
            width: 290
        },
        {
            id: 4,
            src: 'https://narito.ninja/uploader/home/public/d1.jpg',
            alt: 'ぶた4',
            width: 290
        },
        {
            id: 5,
            src: 'https://narito.ninja/uploader/home/public/d2.jpg',
            alt: 'ぶた5',
            width: 290
        },
        {
            id: 6,
            src: 'https://narito.ninja/uploader/home/public/d3.jpg',
            alt: 'ぶた6',
            width: 290
        },
    ]
}

const product2 = {
    id: 2,
    title: 'マイクロブタカフェ2',
    thumbnail: 'https://narito.ninja/uploader/home/public/2.jpg',
    category: {
        id: 4,
        name: 'Photo'
    },
    text: '<p><a href="#">マイクロブタカフェ</a>に行ってきたので、写真をたくさん撮りました。非常に人懐っこくグイグイ近づいてきます。気軽に人に登ってみたり、その上でお昼寝したりとやりたい放題です。</p>',
    created_at: "2020-08-23T21:05:40+09:00",
    is_auto_order: true,
    column_width: 900,
    container_width: 900,
    image_set: [
        {
            id: 1,
            src: 'https://narito.ninja/uploader/home/public/d7.jpg',
            alt: 'ぶた1',
            width: 900
        },

    ]
}

const product3 = {
    id: 3,
    title: 'マイクロブタカフェ3',
    thumbnail: 'https://narito.ninja/uploader/home/public/2.jpg',
    category: {
        id: 4,
        name: 'Photo'
    },
    text: '<p><a href="#">マイクロブタカフェ</a>に行ってきたので、写真をたくさん撮りました。非常に人懐っこくグイグイ近づいてきます。気軽に人に登ってみたり、その上でお昼寝したりとやりたい放題です。</p>',
    created_at: "2020-08-23T21:05:40+09:00",
    is_auto_order: true,
    column_width: 600,
    container_width: 600,
    image_set: [
        {
            id: 1,
            src: 'https://narito.ninja/uploader/home/public/d7.jpg',
            alt: 'ぶた1',
            width: 900
        },

    ]
}

const product4 = {
    id: 4,
    title: 'マイクロブタカフェ4',
    thumbnail: 'https://narito.ninja/uploader/home/public/2.jpg',
    category: {
        id: 4,
        name: 'Photo'
    },
    text: '<p><a href="#">マイクロブタカフェ</a>に行ってきたので、写真をたくさん撮りました。非常に人懐っこくグイグイ近づいてきます。気軽に人に登ってみたり、その上でお昼寝したりとやりたい放題です。</p>',
    created_at: "2020-08-23T21:05:40+09:00",
    is_auto_order: true,
    column_width: 168,
    container_width: 900,
    image_set: [
        {
            id: 1,
            src: 'https://narito.ninja/uploader/home/public/d4.jpg',
            alt: 'ぶた1',
            width: 168
        },
        {
            id: 2,
            src: 'https://narito.ninja/uploader/home/public/d5.jpg',
            alt: 'ぶた2',
            width: 168
        },
        {
            id: 3,
            src: 'https://narito.ninja/uploader/home/public/d6.jpg',
            alt: 'ぶた3',
            width: 351
        },
        {
            id: 4,
            src: 'https://narito.ninja/uploader/home/public/d1.jpg',
            alt: 'ぶた4',
            width: 168
        },
        {
            id: 5,
            src: 'https://narito.ninja/uploader/home/public/d2.jpg',
            alt: 'ぶた5',
            width: 168
        },
        {
            id: 6,
            src: 'https://narito.ninja/uploader/home/public/d3.jpg',
            alt: 'ぶた6',
            width: 168
        },
    ]
}

export default {
    run: client => {
        const mock = new MockAdapter(client);
        mock.onGet('/products/?keyword=&category=0&page=1').reply(200, products1);
        mock.onGet('/products/?keyword=&category=0&page=2').reply(200, products2);
        mock.onGet('/categories/?keyword=&category=0').reply(200, categories);
        mock.onGet('/products/1').reply(200, product1);
        mock.onGet('/products/2').reply(200, product2);
        mock.onGet('/products/3').reply(200, product3);
        mock.onGet('/products/4').reply(200, product4);
        mock.onGet('/products/5').reply(200, product1);
        mock.onGet('/products/6').reply(200, product2);
        mock.onGet('/products/7').reply(200, product3);
        mock.onGet('/products/8').reply(200, product4);
        mock.onGet('/products/9').reply(200, product1);
        mock.onGet('/products/10').reply(200, product2);
        mock.onGet('/products/11').reply(200, product3);
        mock.onGet('/products/12').reply(200, product4);
        mock.onGet('/products/13').reply(200, product1);
        mock.onGet('/products/14').reply(200, product2);
        mock.onGet('/products/15').reply(200, product3);
        mock.onGet('/products/16').reply(200, product4);
        mock.onGet('/products/17').reply(200, product1);
        mock.onGet('/products/18').reply(200, product2);
        mock.onGet('/products/19').reply(200, product3);
        mock.onGet('/products/20').reply(200, product4);
    }
}