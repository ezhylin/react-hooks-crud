import React from "react";
import { useRouteMatch } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import Button from "@material-ui/core/Button";

import { CourseForm } from '../components';
import {coursesActions} from "../courses.actions";

export const EditCourse = () => {
  const { params } = useRouteMatch();
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);

  const editCourse = courses.list.find(course => course.id === Number(params.courseId));

  const handleUpdate = (course) => {
    dispatch(coursesActions.updateCourse(Number(params.courseId), course));
  }

  return (
    <CourseForm
      onSubmit={handleUpdate}
      course={editCourse}
    >
      {{
        Title: () => <h2>Edit Course</h2>,
        Button: () => (<Button type="submit" size="large">Edit</Button>)
      }}
    </CourseForm>
  )
}