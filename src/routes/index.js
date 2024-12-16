import HomePage from "../pages/HomePage/HomePage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductsPage from "../pages/ProductsPage/ProductsPage"
import NotFoundPage from "../components/DefaultComponent/DefaultComponent";
import DefaultComponent from "../components/DefaultComponent/DefaultComponent";
import { type } from "@testing-library/user-event/dist/type";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";
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
        path: '/type',
        page: TypeProductPage,
        isShowHeader: false
    
        },
    {
    path: "*",
    page: NotFoundPage,
    }
    
]