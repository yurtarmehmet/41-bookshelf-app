import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Formik } from "formik";
import { categories, ratings } from "../../constants";

const AddBookForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          author: "",
          category: "",
          description: "",
          rating: "",
          imageUrl: "",
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Name of the book"
              />
            </FormGroup>
            <FormGroup>
              <Label for="author">Author</Label>
              <Input
                type="text"
                name="author"
                id="author"
                placeholder="Author of the book"
              />
            </FormGroup>
            <FormGroup>
              <Label for="imageUrl">Image URL</Label>
              <Input
                type="text"
                name="imageUrl"
                id="imageUrl"
                placeholder="Image of the book"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Category</Label>
              <Input type="select" name="category" id="category">
                {categories.map((category) => {
                  return <option>{category}</option>;
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Description</Label>
              <Input type="textarea" name="description" id="description" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Rating</Label>
              <Input type="select" name="rating" id="rating">
                {ratings.map((score) => {
                  return <option>{score}</option>;
                })}
              </Input>
            </FormGroup>
            <Button color="primary">Add Book</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddBookForm;
