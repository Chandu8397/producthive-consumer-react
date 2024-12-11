import axios from 'axios';

const PRODUCTS_RESTAPI_URL = 'http://localhost:8088/producthive/api/products'
//Service interacting with producthive RestAPI of SpringBoot Using "axios Http Library"

class ProductService{

    static getProducts(){
        return axios.get(PRODUCTS_RESTAPI_URL);


    }

}

export default ProductService;