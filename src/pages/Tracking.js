import React, { useState } from 'react';
import './Tracking.css';

function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentData, setShipmentData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setShipmentData({
        number: trackingNumber,
        status: 'In Transit',
        origin: 'New York, USA',
        destination: 'London, UK',
        estimatedDelivery: '2026-03-15',
        lastUpdate: 'Departed from sorting facility',
        history: [
          { date: '2026-03-10', time: '09:00', location: 'New York', status: 'Picked up' },
          { date: '2026-03-10', time: '18:30', location: 'New York', status: 'Arrived at facility' },
          { date: '2026-03-11', time: '02:00', location: 'New York', status: 'Departed from facility' },
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="tracking-page">
      <div className="page-header">
        <h1>Track Your Shipment</h1>
        <p>Enter your tracking number to get real-time updates</p>
      </div>

      <div className="tracking-container">
        <form onSubmit={handleTrack} className="tracking-form">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter tracking number (e.g., TMG123456789)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              required
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Tracking...' : 'Track'}
            </button>
          </div>
        </form>

        {shipmentData && (
          <div className="shipment-details">
            <h2>Shipment Details</h2>
            <div className="status-card">
              <div className="status-header">
                <span className="status-badge">{shipmentData.status}</span>
                <span className="tracking-number">#{shipmentData.number}</span>
              </div>
              <div className="route">
                <div className="route-point">
                  <span className="city">{shipmentData.origin}</span>
                  <span className="label">Origin</span>
                </div>
                <div className="route-line">→</div>
                <div className="route-point">
                  <span className="city">{shipmentData.destination}</span>
                  <span className="label">Destination</span>
                </div>
              </div>
              <div className="estimated">
                Estimated Delivery: <strong>{shipmentData.estimatedDelivery}</strong>
              </div>
            </div>

            <div className="tracking-history">
              <h3>Tracking History</h3>
              <div className="timeline">
                {shipmentData.history.map((event, index) => (
                  <div className="timeline-item" key={index}>
                    <div className="timeline-dot"></div>
                    <div className="timeline-content">
                      <div className="timeline-date">{event.date} {event.time}</div>
                      <div className="timeline-location">{event.location}</div>
                      <div className="timeline-status">{event.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Tracking;