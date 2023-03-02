import axios from "axios";

export const getPizzaApiRequest = () => axios({
    method: "GET",
    url: "http://localhost:3001/pizzas"
});
