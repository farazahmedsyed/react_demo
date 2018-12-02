import { connect } from 'react-redux'
import Signup from '../presentations/signup';
import { signup } from '../actions/SignupAction';

const mapStateToProps = state => ({
  message : state.signup.message,  
})

const mapDispatchToProps = dispatch => ({
  onSubmit: (email,pwd,rePwd) => dispatch(signup(email, pwd, rePwd))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
