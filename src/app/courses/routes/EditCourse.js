import React from "react";
import { useRouteMatch } from "react-router-dom";
import Button from "@material-ui/core/Button";

import { CourseForm } from '../components';
import {useAppState} from "../../../store";

export const EditCourse = () => {
  const { params } = useRouteMatch();
  const { state } = useAppState();
  console.log(state)
  const editCourse = state.courses.list.find(course => course.id === Number(params.courseId));

  return (
    <CourseForm
      onSubmit={() => console.log('edit course')}
      course={editCourse}
    >
      {{
        Title: () => <h2>Edit Course</h2>,
        Button: () => (<Button type="submit" size="large">Edit</Button>)
      }}
    </CourseForm>
  )
}