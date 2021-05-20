import React, { useState } from "react";
import { useHistory } from "react-router";
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from "reactstrap";
import SnackOrBoozeApi from "./Api";

//form for adding an item
function AddForm({ add, defaultData = { type: "snack", name: "", description: "", recipe: "", serve: "" } }) {
  const [formData, setFormData] = useState(defaultData);
  const [valid, setValid] = useState(true);
  const history = useHistory();

  //on form submit, validate data. If valid, add the snack/drink and redirect to snacks/drinks page
  async function handleSubmit(evt) {               
    evt.preventDefault();                                    //       ¯\_(ツ)_/¯
    validate(); //why is my validation not updating 'valid' before the conditional? I thought the arrow function on line 27 would force this
    if (valid) {  //I've also used this pattern before with no issues so I'm a bit stumped 
      let result = await SnackOrBoozeApi.add(formData.type, { ...formData, type: undefined });
      add(formData.type, result);
      history.push(`/${formData.type}s`)
    }
  }

  //update form data on change
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(d => ({ ...d, [name]: value }));
  }

  //validate all inputs non-empty
  function validate() {
    setValid(v => !Object.values(formData).includes(""));
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
          {!valid && <p style={{color: "red"}}>Please fill all inputs</p>}
        </Form>
      </CardBody>
    </Card>
  );
}
export default AddForm;