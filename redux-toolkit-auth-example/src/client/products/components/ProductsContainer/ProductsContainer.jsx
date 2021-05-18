import {Component} from "react";
import {connect} from "react-redux";

import {fetchProducts} from "../../../../store/reducer/products/operations"
import {addToCart} from "../../../../store/reducer/cart/actions";
import {getItems, isLoading, isError} from "../../../../store/reducer/products/selectors";

class ProductContainer extends Component {

    componentDidMount() {
        this.props.getAllProducts()
    }

    render() {
        const {children, ...restProps} = this.props;
        return <>
            {children(restProps)}
        </>
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        items: getItems(state),
        loading: isLoading(state),
        error: isError(state)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: () => dispatch(fetchProducts()),
        addToCart: (product)=> dispatch(addToCart(product))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);