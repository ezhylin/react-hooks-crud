import React, {useState} from 'react';
import TextField from "@material-ui/core/TextField";
import {Container} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

export const CourseForm = ({
 onSubmit,
 children,
 course: initialCourse,
}) => {
  const defaultCourse = {
    name: '',
    description: '',
    authors: [],
  };
  const [ course, setCourse ] = useState(initialCourse || defaultCourse);
  const user = useSelector(({ auth }) => auth.user);
  const { goBack } = useHistory();

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
      authors: [...new Set([...course.authors, user.id])]
    };

    onSubmit(nextCourse);
    goBack();
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
          label="Name"
          variant="outlined"
          name="name"
          value={course.name}
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