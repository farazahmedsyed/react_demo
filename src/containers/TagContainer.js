import { connect } from 'react-redux'
import ListOfTags from '../presentations/ListOfTags';
import { fetchTag, saveTag, remove } from '../actions/TagAction';

const mapStateToProps = state => ({
tags: state.tag.tags,
isDone : state.tag.isDone,
message: state.tag.message
  
})

const mapDispatchToProps = dispatch => ({
  fetchTags : () => dispatch(fetchTag()),
   onSubmit : (tag) =>dispatch(saveTag(tag)),
   onDelete : (id) => dispatch(remove(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfTags)
