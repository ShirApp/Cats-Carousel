import { Button, Divider } from 'semantic-ui-react';
import { withRouter } from 'react-router';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

export const Bar = ({ favorites, history }) => (
  <Fragment>
      <Button inverted color="pink" onClick={() => history.push('/')}>
        All Facts
      </Button>
      <Button inverted color="blue" onClick={() => favorites && history.push('/favorites')}>
        My Facts &nbsp; {favorites}
      </Button>
    <Divider hidden />
  </Fragment>
);

const mapState = state => ({
  favorites: state.cats.favorites
});

Bar.propTypes = {
  history: propTypes.object,
  favorites: propTypes.number
};

export default withRouter(connect(mapState)(Bar));
