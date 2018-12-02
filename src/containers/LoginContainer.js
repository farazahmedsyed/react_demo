import { connect } from 'react-redux'
import Login from '../presentations/login';
import { login } from '../actions/LoginAction';

const mapStateToProps = state => ({
  message : state.login.message,
  user: state.login.user 
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (email,pwd) => dispatch(login(email, pwd))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
