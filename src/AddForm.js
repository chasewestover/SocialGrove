import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { add } from "./actions";
import API from "./Api";

//form for adding an item
function AddForm({ defaultData = { type: "snack", name: "", description: "", recipe: "", serve: "" } }) {
  const [formData, setFormData] = useState(defaultData);
  const [msg, setMsg] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();


  //on form submit, validate data. If valid, add the snack/drink and redirect to snacks/drinks page
  async function handleSubmit(evt) {
    evt.preventDefault();
    if (Object.values(formData).some((v) => v === "")) {
      setMsg("Fill all blanks");
    } else {
      let result = await API.add(formData);
      dispatch(add(result));
      history.push(`/${formData.type}s`);
    }
  }

  //update form data on change
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => ({ ...d, [name]: value }));
    setMsg('');
  }

  return (
    <Card>
      <CardBody>
        <h4>Create a new snack or drink!</h4>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="type">Select</Label>
            <Input onChange={handleChange} type="select" name="type" value={formData.type}>
              <option>snack</option>
              <option>drink</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input onChange={handleChange} type="text" name="name" value={formData.name} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input onChange={handleChange} type="text" name="description" value={formData.description} />
          </FormGroup>
          <FormGroup>
            <Label for="recipe">Recipe</Label>
            <Input onChange={handleChange} type="text" name="recipe" value={formData.recipe} />
          </FormGroup>
          <FormGroup>
            <Label for="serve">Serve</Label>
            <Input onChange={handleChange} type="text" name="serve" value={formData.serve} />
          </FormGroup>
          <Button type="submit">Submit</Button>
          {msg && <p style={{ color: "red" }}>Please fill all inputs</p>}
        </Form>
      </CardBody>
    </Card>
  );
}
export default AddForm;