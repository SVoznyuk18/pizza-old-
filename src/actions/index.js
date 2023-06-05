import { getPizzaRequest, createNewProduct } from './pizza';
import { sortBy, filterCategory, getCurrentFilter } from './filter';
import {
  addPizzaToCart,
  increasePizzaAmount,
  decreasePizzaAmount,
  deletePizzaItem,
  clearCart,
  getCurrentOrder,
} from './cart';
import { toggleModal } from './modal';
import { loginRequest, logout, getCurrentAuth } from './login';
import { createNewManager, getManagers, deleteManager } from './users';
import {
  placeNewOrder,
  getOrders,
  increasePizzaAmountPlacedOrder,
  decreasePizzaAmountPlacedOrder,
  deletePizzaAmountPlacedOrder,
} from './orders';

export {
  getPizzaRequest,
  sortBy,
  filterCategory,
  addPizzaToCart,
  increasePizzaAmount,
  decreasePizzaAmount,
  deletePizzaItem,
  clearCart,
  toggleModal,
  getCurrentOrder,
  getCurrentFilter,
  loginRequest,
  logout,
  getCurrentAuth,
  createNewManager,
  getManagers,
  deleteManager,
  createNewProduct,
  placeNewOrder,
  getOrders,
  increasePizzaAmountPlacedOrder,
  decreasePizzaAmountPlacedOrder,
  deletePizzaAmountPlacedOrder,
};
