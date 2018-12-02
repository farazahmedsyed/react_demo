import { connect } from 'react-redux'
import Home from '../presentations/Home';
import { fetchUser } from '../actions/HomeAction';

const mapStateToProps = state => ({
user: state.user.user,
isDone : state.user.isDone
  
})

const mapDispatchToProps = dispatch => ({
  fetch : () =>dispatch(fetchUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
