import ProductsContainer from "../../components/ProductsContainer";
import ProductList from "../../components/ProductList";

import styles from "./AllProductsPage.module.scss";

const AllProductsPage = ()=>{
    return (
        <div className={styles.page}>
            <div className="container">
                <h1 className={styles.pageTitle}>Все товары</h1>
                <ProductsContainer>
                    {props => <ProductList {...props} />}
                </ProductsContainer>
            </div>
        </div>
    )
}

export default AllProductsPage;