import React, { 
    useState, useEffect } from 'react';
import { 
    Form, FormGroup, Label, Input, Button } from 'reactstrap';

const FormD = () => {
    const [distance, setDistance] = useState('');
    const [price, setPrice] = useState('');
    const [total, setTotal] =useState('');
    const [lat1, setLat1] = useState('');
    const [long1, setLong1] = useState('');
    const [lat2, setLat2] = useState('');
    const [long2, setLong2] = useState('');

    //get the total price per distance
const getTotalPrice = () =>{
    setTotal(distance*price)
    //letting the form line clean
    setDistance('')
    setPrice('')
}
    //get the ditsnace from the object respone using OSRM(long lat) like params
useEffect(() => {
    fetch('http://router.project-osrm.org/route/v1/driving/2.154007,41.390205;12.496366,41.902782')
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          console.log(data.routes[0].distance)
          setDistance(data.routes[0].distance)

      })
      .catch(err=>{
        console.log(err,'error')
        alert('Found a problem fetching data')
      })
  },[])
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
      <h4>Coordinates</h4>
      <FormGroup>
        <Label for="exampleNumber">Lat</Label>
        <Input
          value={lat1}
          onChange={e => setLat1(e.target.value)}
          type="number"
          name="latitude"
          id="latitude"
          placeholder="Latitude first location"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Longitude</Label>
        <Input
          value={long1}
          onChange={e => setLong1(e.target.value)}
          type="number"
          name="longitude"
          id="longitude"
          placeholder="Longitude first location"
        />
      </FormGroup>
      {/* point B */}
      <FormGroup>
        <Label for="exampleNumber">Latitude</Label>
        <Input
          value={lat2}
          onChange={e => setLat2(e.target.value)}
          type="number"
          name="latitude"
          id="latitude"
          placeholder="Latitude second location"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleNumber">Longitude</Label>
        <Input
          value={long2}
          onChange={e => setLong2(e.target.value)}
          type="number"
          name="longitude"
          id="longitude"
          placeholder="Longitude second location.."
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
      <Button onClick={getTotalPrice}>Submit</Button>
      <h4>Total price:{total}$</h4>
      <h4>distance : {distance}</h4>

    </Form>
  );
}

export default FormD;