import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Container} from "@material-ui/core";
import {useHistory} from "react-router-dom";

export const CourseForm = ({
 onSubmit,
 children,
 course: initialCourse,
}) => {
  const defaultCourse = {
    title: '',
    description: ''
  };
  const [course, setCourse] = useState(initialCourse || defaultCourse);
  const history = useHistory();

  const handleChange = ({ target }) => {
    setCourse({
      ...course,
      [target.name]: target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextCourse = {
      ...course,
      image: 'https://source.unsplash.com/random',
    };

    onSubmit(nextCourse);
    history.goBack();
  }

  const { Title, Button } = children;
  return (
    <Container style={{ marginBottom: '2rem' }} >
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Title />
        <TextField
          fullWidth
          margin="normal"
          id="course_title"
          label="Title"
          variant="outlined"
          name="title"
          value={course.title}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          id="course_description"
          label="Description"
          variant="outlined"
          name="description"
          value={course.description}
          onChange={handleChange}
        />
        <Button />
      </form>
    </Container>
  )
}