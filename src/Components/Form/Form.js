import React, { 
    useState } from 'react';
import { 
    Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Map from '../Map/Map';

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
    // setDistance('')
    // setPrice('')
}
    //get the ditsnace from the object respone using OSRM(long lat) like params
    //example Barcelona-Rome (2.154007,41.390205/12.496366,41.902782)

    const postFormValue = e => {
        e.preventDefault()
    fetch(`http://router.project-osrm.org/route/v1/driving/${long1},${lat1};${long2},${lat2}`)
    // fetch('http://router.project-osrm.org/route/v1/driving/2.154007,41.390205;12.496366,41.902782')
      .then(res => res.json())
      .then(data =>{
          console.log(data)
          console.log(data.routes[0].distance)
          setDistance(data.routes[0].distance)
      })
      .catch(err=>{
        console.log(err,'error')
        alert('Found a problem fetching data or invalid values')
      })
     
    }
console.log(total)
console.log(price)


  return (
      <>
    <Form>
    <div className='distance-form'>
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
      </div>
      <h4>Coordinates</h4>
      <div className='first-location'>
      <FormGroup>
        <Label for="exampleNumber">Latitude</Label>
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
      </div>
      {/* point B */}
      <div className='second-location'>
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
    </div>
    <Button onClick={postFormValue}>Get distance</Button>

      <div className='prices'>
      <FormGroup>
        <Label for="exampleNumber">Price($/km)</Label>
        <Input
          value={price}
          onChange={e =>setPrice(e.target.value)}
          type="number"
          name="price"
          id="price"
          placeholder="Price €/km"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect" onChange={e => setPrice(e.target.value)}>
          <option>Choose a price..</option>
          <option value={0.50}>Truck → 0.50€/Km</option>
          <option value={0.25}>Van → 0.25€/Km</option>
        </Input>
      </FormGroup>
      </div>
      <Button onClick={getTotalPrice}>Calculate</Button>
      <h4>Total price:{total}€</h4>
      <h4>Distance: {distance* 0.001} km</h4>
      <Map />
    </Form>
   
    </>
  );
}

export default FormD;