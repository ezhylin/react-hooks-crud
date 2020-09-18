import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

export const CourseList = ({
 courses,
 onDelete,
 onEdit,
}) => {
  return !!courses.length && (
    <Grid container spacing={4}>
      {
        courses.map(course => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                image="https://source.unsplash.com/random"
                title={course.name}
                style={{
                  paddingTop: '56.25%'
                }}
              />
            </Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {course.name}
              </Typography>
              <Typography>
                {course.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => onDelete(course.id)} size="small" color="default">
                Delete
              </Button>
              <Button onClick={() => onEdit(course.id)} size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Grid>
        ))
      }
    </Grid>
  );
}