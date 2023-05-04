import UA from '../../assets/svg/flags/ua.svg';
import RU from '../../assets/svg/flags/ru.svg';
import EN from '../../assets/svg/flags/en.svg';

export const GET_PIZZA = 'GET_PIZZA';
export const GET_PIZZA_SUCCESS = 'GET_PIZZA_SUCCESS';
export const GET_PIZZA_LOADING = 'GET_PIZZA_LOADING';
export const GET_PIZZA_FAILURE = 'GET_PIZZA_FAILURE';

export const GET_CURRENT_ORDER = 'GET_CURRENT_ORDER';
export const GET_CURRENT_ORDER_SUCCESS = 'GET_CURRENT_ORDER_SUCCESS';
export const GET_CURRENT_ORDER_FAILURE = 'GET_CURRENT_ORDER_FAILURE';

export const GET_CURRENT_FILTER = 'GET_CURRENT_FILTER';
export const GET_CURRENT_FILTER_SUCCESS = 'GET_CURRENT_FILTER_SUCCESS';
export const GET_CURRENT_FILTER_FAILURE = 'GET_CURRENT_FILTER_FAILURE';

export const SORT_BY = 'SORT_BY';
export const SORT_BY_SUCCESS = 'SORT_BY_SUCCESS';
export const SORT_BY_FAILURE = 'SORT_BY_FAILURE';

export const FILTER_CATEGORY = 'FILTER_CATEGORY';
export const FILTER_CATEGORY_SUCCESS = 'FILTER_CATEGORY_SUCCESS';
export const FILTER_CATEGORY_FAILURE = 'FILTER_CATEGORY_FAILURE';

export const ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART';
export const ADD_PIZZA_TO_CART_SUCCESS = 'ADD_PIZZA_TO_CART_SUCCESS';
export const ADD_PIZZA_TO_CART_FAILURE = 'ADD_PIZZA_TO_CART_FAILURE';

export const UPDATE_PIZZA_CART_ITEM_ = 'UPDATE_PIZZA_CART_ITEM';
export const UPDATE_PIZZA_CART_ITEM_SUCCESS = 'UPDATE_PIZZA_CART_ITEM_SUCCESS';

export const INC_PIZZA_AMOUNT = 'INC_PIZZA_AMOUNT';
export const INC_PIZZA_AMOUNT_SUCCESS = 'INC_PIZZA_AMOUNT_SUCCESS';
export const INC_PIZZA_AMOUNT_FAILURE = 'INC_PIZZA_AMOUNT_FAILURE';

export const DEC_PIZZA_AMOUNT = 'DEC_PIZZA_AMOUNT';
export const DEC_PIZZA_AMOUNT_SUCCESS = 'DEC_PIZZA_AMOUNT_SUCCESS';
export const DEC_PIZZA_AMOUNT_FAILURE = 'DEC_PIZZA_AMOUNT_FAILURE';

export const DELETE_PIZZA_ITEM = 'DELETE_PIZZA_ITEM';
export const DELETE_PIZZA_ITEM_SUCCESS = 'DELETE_PIZZA_ITEM_SUCCESS';
export const DELETE_PIZZA_ITEM_FAILURE = 'DELETE_PIZZA_ITEM_FAILURE';

export const CLEAR_CART = 'CLEAR_CART';
export const CLEAR_CART_SUCCESS = 'CLEAR_CART_SUCCESS';
export const CLEAR_CART_FAILURE = 'CLEAR_CART_FAILURE';

export const MODAL_SHOW = 'MODAL_SHOW';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_CURRENT_AUTH = 'GET_CURRENT_AUTH'
export const GET_CURRENT_AUTH_SUCCESS = 'GET_CURRENT_AUTH_SUCCESS'

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const CRATE_NEW_MANAGER = 'CRATE_NEW_MANAGER';
export const CRATE_NEW_MANAGER_LOADING = 'CRATE_NEW_MANAGER_LOADING';
export const CRATE_NEW_MANAGER_FAILURE = 'CRATE_NEW_MANAGER_FAILURE';

export const GET_MANAGERS = 'GET_MANAGERS';
export const GET_MANAGERS_SUCCESS = 'GET_MANAGERS_SUCCESS';
export const GET_MANAGERS_LOADING = 'GET_MANAGERS_LOADING';
export const GET_MANAGERS_FAILURE = 'GET_MANAGERS_FAILURE';

export const DELETE_MANAGER = 'DELETE_MANAGER'
export const DELETE_MANAGER_SUCCESS = 'DELETE_MANAGER_SUCCESS'
export const DELETE_MANAGER_FAILURE = 'DELETE_MANAGER_FAILURE'

export const CREATE_NEW_PRODUCT = 'CREATE_NEW_PRODUCT';
export const CREATE_NEW_PRODUCT_SUCCESS = 'CREATE_NEW_PRODUCT_SUCCESS';
export const CREATE_NEW_PRODUCT_FAILURE = 'CREATE_NEW_PRODUCT_FAILURE'




export const MODAL = Object.freeze({
    SUCCESS_MODAL: 'SUCCESS_MODAL',
    FAILURE_MODAL: 'FAILURE_MODAL',
    ORDER_FORM: 'ORDER_FORM',
    NEW_MANAGER_FORM: 'NEW_MANAGER_FORM',
    ADD_NEW_PRODUCT: 'ADD_NEW_PRODUCT'
});

export const languages = [
    {
        id: 1,
        lang: "ua",
        title: "UA",
        flag: UA
    },
    {
        id: 2,
        lang: "ru",
        title: "RU",
        flag: RU
    },
    {
        id: 3,
        lang: "en",
        title: "EN",
        flag: EN
    }
];

export const breakPoints = {
    MOBILE_S: 375,
    MOBILE: 576,
    TABLET: 768,
    TABLET_L: 992,
    DESKTOP: 1024,
    DESKTOP_L: 1200,
};

const mediaQuery = (width) => `@media screen and (max-width: ${width - 1}px)`;

export const media = {
    mobileS: mediaQuery(breakPoints.MOBILE_S),
    mobile: mediaQuery(breakPoints.MOBILE),
    tablet: mediaQuery(breakPoints.TABLET),
    tabletL: mediaQuery(breakPoints.TABLET_L),
    desktop: mediaQuery(breakPoints.DESKTOP),
    desktopL: mediaQuery(breakPoints.DESKTOP_L),
};

export const CATEGORIES = ["all", "meat", "vegetarian", "grill", "spicy", "calzone"];

export const AVALIABLE_TYPES = ["thin", "traditional"];
export const AVALIABLE_SIZES = ['26', '30', '40'];
export const SORT = ["popularity", "price", "alphabet"];