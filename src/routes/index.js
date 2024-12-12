import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import NotFoundPage from "../components/DefaultComponent/DefaultComponent";
import DefaultComponent from "../components/DefaultComponent/DefaultComponent";
export const routes = [
    {
    path: '/',
    page: HomePage,
    isShowHeader: false
    },
    {
    path: '/order',
    page: OrderPage,
    isShowHeader: false

    },
    {
    path: '/products',
    page: ProductsPage,
    isShowHeader: false

    },
    {
    path: "*",
    page: NotFoundPage,
    }
    
]