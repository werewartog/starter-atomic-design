import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {MdShoppingBasket} from 'react-icons/md'
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg'

function header({cart}) {
  return (
    <Container >
        <Link to='/'>
            <img src={logo} alt='Posters' />
        </Link>
        <Cart to='/cart'>
            <div>
                <strong> Meu carrinho</strong>
                <span>{cart.length} itens</span>
            </div>
            <MdShoppingBasket size={36} color ='#fff' />
        </Cart>

    </Container>
  );
}

const mapStateToProps = state => ({
    cart: state.cart
});
export default connect(mapStateToProps)(header)
