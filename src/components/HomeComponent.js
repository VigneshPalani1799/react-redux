import React, { Component } from 'react';
import buyCake from '../redux/cakeAction';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/iceCreamAction';


class Home extends Component 
{
    render(){
        return(
            <div>
                <h3 style={{marginLeft:"40%"}}>The number of Ice Creams left : {this.props.iceCreams}</h3>
                <button style={{marginLeft:"45%"}} onClick={this.props.buyIceCream}>Buy Ice Creams</button>
                <h3 style={{marginLeft:"40%"}}>The number of Cakes left : {this.props.cakes}</h3>
                <button style={{marginLeft:"45%"}} onClick={this.props.buyCake}>Buy Cake</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cakes:state.cakeReducer.cakes,
        iceCreams:state.iceCreamReducer.iceCreams
    };
}

const dispatchToProps = (dispatch) =>{
    return({
        buyIceCream:()=>dispatch(buyIceCream()),
        buyCake:()=>dispatch(buyCake())
    })
}

export default connect(mapStateToProps,dispatchToProps)(Home);