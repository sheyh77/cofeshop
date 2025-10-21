import React from "react";
import Header from "../layout/Header";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle: React.CSSProperties = {
  width: "100%",
  height: "500px",
  borderRadius: "20px",
};

const center = {
  lat: 41.311081, // Toshkent
  lng: 69.240562,
};

const Location: React.FC = () => {
  return (
    <section className="location">
      <Header />
      <div className="cantainer">
        <div className="location-wrap text-center mt-10">
          <div className="location-title mb-6">
            <h1 className="text-3xl font-semibold text-brown-800">Bizning manzil</h1>
            <p className="text-gray-600">Sizni kutamiz!</p>
          </div>

          {/* Google Map */}
          <LoadScript googleMapsApiKey="AIzaSyAbE4y6qs9IemV2qdVv1VsdU1VBZsP8IhQ">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={15}
            >
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>

          {/* Contact Info */}
          <div className="location-info bg-[#f8f5f2] p-6 rounded-2xl shadow-md mt-8 inline-block">
            <h2 className="location-info-title text-2xl font-bold mb-2">Coffee House</h2>
            <p>Toshkent sh., Amir Temur ko‘chasi 15A</p>
            <p>08:00 — 23:00</p>
            <p>+998 90 123 45 67</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;