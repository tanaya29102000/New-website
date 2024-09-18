import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For making API requests
import { v4 as uuidv4 } from 'uuid';
import { FaCar, FaTruck, FaMotorcycle } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Import SweetAlert2
import '../styles/Services.css';
import image4 from '../images/cartoon.jpg'; // Import the new image

function Services() {
  const [parking, setParking] = useState([]); // State for parking data
  const [vehicleType, setVehicleType] = useState(''); // State for vehicle type
  const [ticketID, setTicketID] = useState(''); // State for ticket ID

  // Fetch parking data from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/parking/getParking')
      .then(response => {
        if (response.data && response.data.length > 0 && response.data[0].floors) {
          const updatedParking = response.data[0].floors.map(floor => ({
            ...floor,
            vehicles: Array.isArray(floor.vehicles) ? floor.vehicles : [],
          }));
          setParking(updatedParking);
        } else {
          setParking([
            { floor: 1, vehicles: [] },
            { floor: 2, vehicles: [] },
            { floor: 3, vehicles: [] },
          ]);
        }
      })
      .catch(error => {
        console.error('Error fetching parking data:', error);
      });
  }, []);

  // Save parking data to the backend
  const saveParkingData = (updatedParking) => {
    const floorsWithFloorField = updatedParking.map((floor, index) => ({
      floor: floor.floor || index + 1, // Ensure 'floor' is present, default to index if missing
      vehicles: floor.vehicles,
    }));

    axios.post('http://localhost:5000/api/parking/saveParking', { floors: floorsWithFloorField })
      .then(response => console.log('Parking data saved:', response.data))
      .catch(error => console.error('Error saving parking data:', error));
  };

  const handleParkVehicle = (e) => {
    e.preventDefault();
    if (!vehicleType) {
      Swal.fire('Please select a vehicle type!', '', 'warning');
      return;
    }

    const ticket = uuidv4();
    const floorIndex = parking.findIndex(floor =>
      Array.isArray(floor.vehicles) && floor.vehicles.length < 5
    );

    if (floorIndex !== -1) {
      const updatedParking = [...parking];
      updatedParking[floorIndex].vehicles.push({ type: vehicleType, ticket });
      setParking(updatedParking);
      saveParkingData(updatedParking);
      Swal.fire({
        title: 'Vehicle Parked!',
        text: `${vehicleType.charAt(0).toUpperCase() + vehicleType.slice(1)} is parked on Floor ${updatedParking[floorIndex].floor} with Ticket ID: ${ticket}`,
        icon: 'success',
      });
      setVehicleType('');
    } else {
      Swal.fire('No parking space available on any floor!', '', 'error');
    }
  };

  const handleUnparkVehicle = (e) => {
    e.preventDefault();
    if (!ticketID) {
      Swal.fire('Please enter a ticket ID!', '', 'warning');
      return;
    }

    let vehicleFound = false;
    const updatedParking = parking.map(floor => {
      const filteredVehicles = floor.vehicles.filter(vehicle => {
        if (vehicle.ticket === ticketID) {
          vehicleFound = true;
        }
        return vehicle.ticket !== ticketID;
      });
      return { ...floor, vehicles: filteredVehicles };
    });

    if (vehicleFound) {
      setParking(updatedParking);
      saveParkingData(updatedParking);
      Swal.fire({
        title: 'Vehicle Unparked!',
        text: `Vehicle with Ticket ID: ${ticketID} is unparked.`,
        icon: 'success',
      });
      setTicketID('');
    } else {
      Swal.fire('Invalid Ticket ID!', '', 'error');
    }
  };

  return (
    <div className="container py-5">
      <div className="row align-items-start mb-5">
        {/* Image Container */}
        <div className="col-md-6">
          <div className="img-container text-center">
            <img
              src={image4}
              alt="Additional Image"
              className="img-fluid"
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="col-md-6">
          <div className="card shadow-sm rounded">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">Parking Management</h5>

              {/* Form for parking a vehicle */}
              <form onSubmit={handleParkVehicle} className="mb-4">
                <div className="form-group mb-3">
                  <label>Vehicle Type:</label>
                  <select
                    className="form-control"
                    value={vehicleType}
                    onChange={(e) => setVehicleType(e.target.value)}
                  >
                    <option value="">Select vehicle type</option>
                    <option value="car">Car</option>
                    <option value="truck">Truck</option>
                    <option value="bike">Bike</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Park Vehicle
                </button>
              </form>

              {/* Form for unparking a vehicle */}
              <form onSubmit={handleUnparkVehicle}>
                <div className="form-group mb-3">
                  <label>Ticket ID:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter ticket ID"
                    value={ticketID}
                    onChange={(e) => setTicketID(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-danger w-100">
                  Unpark Vehicle
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Display parking floors and vehicles */}
      <div className="parking-section">
        {parking.map((floor, index) => (
          <div key={index} className="mb-5">
            <h5 className="text-center mb-4">Floor {floor.floor}</h5>
            <div className="d-flex justify-content-center flex-wrap gap-3">
              {Array.isArray(floor.vehicles) && floor.vehicles.length > 0 ? (
                floor.vehicles.map((vehicle, idx) => (
                  <div key={idx} className="vehicle-card shadow-sm">
                    <div className="vehicle-icon">
                      {vehicle.type === 'car' && <FaCar />}
                      {vehicle.type === 'truck' && <FaTruck />}
                      {vehicle.type === 'bike' && <FaMotorcycle />}
                    </div>
                    <div className="vehicle-info">
                      <p>{vehicle.type.toUpperCase()}</p>
                      <small>Ticket: {vehicle.ticket}</small>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">No vehicles parked on this floor.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
