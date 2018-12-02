import { connect } from 'react-redux'
import ListOfData from '../presentations/ListOfData';
import { fetchData, saveData, remove } from '../actions/DataAction';

const mapStateToProps = state => ({
data: state.data.data,
isDone : state.data.isDone,
tags: state.data.tags,
message: state.data.message
})

const mapDispatchToProps = dispatch => ({
  fetchData : () =>dispatch(fetchData()),
  onSubmit: (data) => dispatch(saveData(data)),
  onSearch : (search) =>dispatch(fetchData(search)),
  onDelete : (id) => dispatch(remove(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfData)
