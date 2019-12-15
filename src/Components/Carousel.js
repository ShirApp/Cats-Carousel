
import ReactCardCarousel from 'react-card-carousel';
import { Grid, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import CatCard from './CatCard';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  selectAllCats,
  selectAllFavorites
} from '../store';

  export const Carousel = ({ isFetching, cats, match }) =>
  isFetching ? (
    'Loading...'
  ) : !cats[0] && match.url === '/favorites' ? (
    `You don't have any favorites yet!`
  ) : (

    <Container>
      <Grid>
        <ReactCardCarousel autoplay={ true } autoplay_speed={ 2000 }>
          {cats.map(cat => (
            <Fragment key={cat.id}>
              <Grid.Column mobile={16} tablet={8} computer={4}>
                <CatCard cat={cat} />
              </Grid.Column>
            </Fragment>
          ))}
        </ReactCardCarousel>
      </Grid>
    </Container>

  );

const mapAll = state => ({
  cats: selectAllCats(state),
  isFetching: state.cats.isFetching
});

const mapFavorites = state => ({
  cats: selectAllFavorites(state),
  isFetching: state.cats.isFetching
});

const mapSingle = (state, { match }) => {
  const cat = state.cats.byId[match.params.catId];
  // Ternary in case of hard refresh while single selected
  return { cats: cat ? [cat] : [] };
};

Carousel.propTypes = {
  cats: PropTypes.array,
  favorites: PropTypes.array
};

export const AllCats = withRouter(connect(mapAll)(Carousel));
export const SingleCat = withRouter(connect(mapSingle)(Carousel));
export const FavoriteCats = withRouter(connect(mapFavorites)(Carousel));
