import React, { useState } from 'react';
import { 
    Form, FormGroup, Label, Input, Button } from 'reactstrap';

const FormD = () => {
    const [distance, setDistance] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] =useState('');

const getTotalPrice = () =>{
    setTotal(distance*price)
    //letting the form line clean
    setDistance('')
    setPrice('')
}
console.log(total)
  return (
    <Form>
      <FormGroup>
        <Label for="exampleNumber">Distance(km)</Label>
        <Input
          value={distance}
          onChange={e => setDistance(e.target.value)}
          type="number"
          name="distance"
          id="distance"
          placeholder="Distance in km"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Price($/km)</Label>
        <Input
          value={price}
          onChange={e =>setPrice(e.target.value)}
          type="number"
          name="price"
          id="price"
          placeholder="Price $/km"
        />
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup> */}
      <Button onClick={getTotalPrice}>Submit</Button>
      <h4>Total price:{total}$</h4>
    </Form>
  );
}

export default FormD;