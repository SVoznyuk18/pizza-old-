
import { getPizzaRequest } from './pizza';
import { sortBy, filterCategory, getCurrentFilter } from './filter';
import { addPizzaToCart, increasePizzaAmount, decreasePizzaAmount, deletePizzaItem, clearCart, getCurrentOrder } from './cart';
import {handleToggleModal } from './modal';

export { getPizzaRequest, sortBy, filterCategory, addPizzaToCart, increasePizzaAmount, decreasePizzaAmount, deletePizzaItem, clearCart, handleToggleModal, getCurrentOrder, getCurrentFilter };