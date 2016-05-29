import React, {Component, PropTypes} from 'react';
import {connect}from 'react-redux';
import CourseList from './CourseList';
import {browserHistory,Link} from 'react-router';

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {title: ""}
    };

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <Link className="btn btn-primary" to="course">Add New With Link Component</Link>
        {" | "}
        <input type="submit"
               value="Add New With React Router BrowserHistory.push Method"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <CourseList courses={this.props.courses}/>

      </div>
    );
  }

}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {

  return {
    courses: state.courses
  }
    ;
}


export default connect(mapStateToProps)(CoursesPage);
