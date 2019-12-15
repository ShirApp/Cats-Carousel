import { withRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCats } from '../store';
import { AllCats, FavoriteCats, SingleCat } from './Carousel';

class Routes extends Component {
  componentDidMount = () => this.props.getCats();

  render() {
    return (
      <Switch>
        <Route exact path="/" component={AllCats} />
        <Route path="/favorites" component={FavoriteCats} />
        <Route path="/cats/:catId" component={SingleCat} />
      </Switch>
    );
  }
}

const mapDispatch = dispatch => ({
  getCats: () => dispatch(getCats())
});

export default withRouter(connect(null, mapDispatch)(Routes));
