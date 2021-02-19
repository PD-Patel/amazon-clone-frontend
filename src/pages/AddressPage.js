import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./AddressPage.css";
function AddressPage() {
  const history = useHistory();
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [pincode, setPincode] = useState("");
  const [flat, setFlat] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [{ user }] = useStateValue("");

  const handleAddress = () => {
    db.collection("address").doc(user?.email).set({
      fullname: fullname,
      mobileNumber: phone,
      pincode: pincode,
      house: flat,
      area: area,
      landmark: landmark,
      city: city,
      state: state,
    });

    history.push("/pf_949905674748947");
  };
  return (
    <div className="address-page">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif"
        alt=""
        className="address-logo"
      />

      <div className="address-form">
        <p>Add a Address</p>
        <form action="">
          <p className="label">Full name</p>
          <input
            className="addressInput"
            type="text"
            name="name"
            id="name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />

          <p className="label">Mobile number</p>
          <input
            className="addressInput"
            type="text"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <p className="label">PIN code</p>
          <input
            className="addressInput"
            type="text"
            name="pinCode"
            id="pinCode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />

          <p className="label">Flat, House no., Building, Company, Apartment</p>
          <input
            className="addressInput"
            type="text"
            name="flat"
            id="flat"
            value={flat}
            onChange={(e) => setFlat(e.target.value)}
          />

          <p className="label">Area, Colony, Street, Sector, Village</p>
          <input
            className="addressInput"
            type="text"
            name="area"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />

          <p className="label">Landmark</p>
          <input
            className="addressInput"
            type="text"
            name="landmark"
            id="landmark"
            value={landmark}
            onChange={(e) => setLandmark(e.target.value)}
          />

          <p className="label">Town/City</p>
          <input
            className="addressInput"
            type="text"
            name="city"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <p className="label">State</p>
          <input
            className="addressInput"
            type="text"
            name="State"
            id="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </form>

        <p className="instructions">Add delivery instructions</p>
        <p className="small">
          Preferences are used to plan your delivery. However, shipments can
          sometimes arrive early or later than planned.
        </p>
      </div>

      <button onClick={handleAddress}>Deliver to this Address</button>
    </div>
  );
}

export default AddressPage;
