import React, {useEffect} from "react";
import { Link as RouterLink, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

import {SearchForm} from "../../shared";
import {CourseList} from "../components";
import {coursesActions} from "../courses.actions";

export const Dashboard = () => {
  const location = useLocation();
  const history = useHistory();
  const courses = useSelector(state => state.courses);
  const dispatch = useDispatch();

  const handleEdit = courseId => {
    history.push(`${location.pathname}/${courseId}`);
  }

  const handleDelete = (courseId) => {
    dispatch(coursesActions.deleteCourse(courseId));
  }

  useEffect(() => {
    dispatch(coursesActions.fetchCourseList());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem 0' }}>
        <div>
          <SearchForm onSubmit={() => console.log('search for courses ...')} />
        </div>
        <div>
          <Link component={RouterLink} to={`${location.pathname}/new`}>New Course</Link>
        </div>
      </div>
      <CourseList
        courses={courses.list}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </Container>
  )
}