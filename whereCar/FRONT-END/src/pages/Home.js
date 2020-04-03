import React from 'react';
import { FavoriteCarList } from 'containers/List';
import { ListWrapper } from 'components/List';
import { connect } from 'react-redux';
import { HomeController } from 'containers/Information';
import { UserListModify } from '../containers/List';

function Home({loggedIn}) {
  return (
    loggedIn ? 
    // <ListWrapper title="My Car List">
    //   <FavoriteCarList />
    // </ListWrapper>
    <ListWrapper title="UserList">
      <UserListModify></UserListModify>
    </ListWrapper>
    : <HomeController/>
  );
};
export default connect(
  (state) => ({
    loggedIn: state.user.get('logged')
  }),
  (dispatch) => ({
  })
)(Home);