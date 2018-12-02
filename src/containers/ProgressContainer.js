
import { connect } from 'react-redux'
import Progress from '../presentations/Progress';

const mapStateToProps = state => ({
state: state.progress.state  
})

const mapDispatchToProps = dispatch => ({
 // onSubmit: (email,pwd) => dispatch(login(email, pwd))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Progress)