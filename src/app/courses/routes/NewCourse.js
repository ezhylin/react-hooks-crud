import React from "react";
import {useDispatch} from "react-redux";

import Button from "@material-ui/core/Button";

import { CourseForm } from '../components';
import { coursesActions } from "../courses.actions";

export const NewCourse = () => {
  const dispatch = useDispatch();

  const handleCreate = (course) => {
    dispatch(coursesActions.createCourse({
      id: Date.now(),
      ...course,
    }))
  };

  return (
    <CourseForm
      onSubmit={handleCreate}
    >
      {{
        Title: () => <h2>Create Course</h2>,
        Button: () => (<Button type="submit" size="large">Create</Button>)
      }}
    </CourseForm>
  )
}