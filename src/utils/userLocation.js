import { useEffect, useState } from "react";

function UserLocation() {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;

        setLocation({ lat, lng });

        // Fetch address from OpenStreetMap
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
          const data = await response.json();
          console.log("data", data);
        setAddress(data.display_name);
      });
    }
  }, []);

  return (
    <div>
      <h3>User Location</h3>
      {location ? (
        <>
          <p>
            Lat: {location.lat}, Lng: {location.lng}
          </p>
          <p>Address: {address || "Fetching address..."}</p>
        </>
      ) : (
        <p>Fetching location...</p>
      )}
    </div>
  );
}

export default UserLocation;
