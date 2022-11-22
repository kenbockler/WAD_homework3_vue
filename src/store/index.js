// /store/index.js
import {createStore} from 'vuex'

export default createStore({
    strict: true,
    state: {
        // productList should be placed here
        productList: [
            {id: 1, author: "Charlotte Bronte", book: "Jane Eyre", goodreads: "4.1/5", price: 20},
            {id: 2, author: "Margaret Mitchell", book: "Gone with the Wind", goodreads: "4.3/5", price: 22},
            {id: 3, author: "Anthony Burgess", book: "A Clockwork Orange", goodreads: "4/5", price: 13},
            {id: 4, author: "Fyodor Dostoevsky", book: "Crime and Punishment", goodreads: "4.2/5", price: 18}
        ],
        posts: [{
            id: 1,
            create_time: "Oct 22, 2022",
            images: "res/images/tartu2024_2.png",
            alt: "Tartu 2024 image",
            body: "Tartu 2022"
        },
            {
                id: 2,
                create_time: "Oct 02, 2022",
                images: "",
                alt: "",
                body: "Anyone knows in which room is the lab today?"
            },
            {
                id: 3,
                create_time: "Oct 01, 2022",
                images: "",
                alt: "",
                body: "But why is the rum gone?"
            },
            {
                id: 4,
                create_time: "Sep 29, 2022",
                images: "res/images/tallinn.png",
                alt: "Tallinn image",
                body: "Tallinn 2022"
            },
            {
                id: 5,
                create_time: "Sep 15, 2022",
                images: "",
                alt: "",
                body: "Sometimes lose, but always win"
            },
            {
                id: 6,
                create_time: "Sep 14, 2022",
                images: "",
                alt: "",
                body: "Had a beer for lunch today"
            },
            {
                id: 7,
                create_time: "Sep 13, 2022",
                images: "",
                alt: "",
                body: "When all else fails, there's always delusion"
            },
            {
                id: 8,
                create_time: "Sep 10, 2022",
                images: "",
                alt: "",
                body: "Wake me up when the semester ends"
            },
            {
                id: 9,
                create_time: "Sep 9, 2022",
                images: "",
                alt: "",
                body: "Wake me up when september ends"
            },
            {
                id: 10,
                create_time: "Sep 5, 2022",
                images: "",
                alt: "",
                body: "Back to school!!"
            }
        ]
    },
    getters: {
        // .map is a higher-order function that creates a new array populated with the results of
        //  calling a provided function on every element in the calling array. – Lecture 5

        productListsale: state => {
            var productListsale = state.productList.map(product => {
                return {
                    id: product.id,
                    author: product.author,
                    price: product.price / 2,
                    book: product.book,
                    goodreads: product.goodreads
                }
            });
            return productListsale
        },
        posts: state => {
            var posts = state.posts.map(post => {
                return {
                    id: post.id,
                    create_time: post.create_time,
                    images: post.images,
                    alt: post.alt,
                    body: post.body
                }
            });
            return posts
        },
    },
    mutations: {
        //The .forEach() method executes a callback function on each of the elements in an array in order. – Lecture 5
        IncreasePrice: state => {
            state.productList.forEach(product => {
                product.price += 1;
            })
        },
        DecreasePrice: state => {
            state.productList.forEach(product => {
                product.price -= 1;
            })
        }
    },
    actions: {
        IncreasePriceAct: act => {
            setTimeout(function () {
                act.commit("IncreasePrice")
            }, 100)
        },
        DecreasePriceAct: act => {
            setTimeout(function () {
                act.commit("DecreasePrice")
            }, 100)
        }
    }
})