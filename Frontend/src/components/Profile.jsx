import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [donatedOrders, setDonatedOrders] = useState([]);
  const [requestedOrders, setRequestedOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem('userInfo'));
    setUserInfo(info);
    fetchProfileDetails(info?.email);
  }, []);

  const fetchProfileDetails = async (email) => {
    if (!email) {
      setError('User not logged in');
      return;
    }
    try {
      setLoading(true);
      // Fetch all donations and filter by user email
      const donateRes = await axios.get('https://foodhive-3.onrender.com/api/donate');
      const userDonated = donateRes.data.filter(order => order.email === email);
      setDonatedOrders(userDonated);
  // Fetch all requests and filter by user email
  const requestRes = await axios.get('https://foodhive-3.onrender.com/api/request');
  const userRequested = requestRes.data.filter(order => order.email === email);
  setRequestedOrders(userRequested);
      setLoading(false);
    } catch (err) {
      setError('Failed to load profile details');
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Profile</h2>
      {userInfo && (
        <div className="mb-6 text-center">
          <div className="text-lg font-semibold">{userInfo.name}</div>
          <div className="text-gray-600">{userInfo.email}</div>
        </div>
      )}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {!loading && !error && (
        <>
          <div className="mb-8">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-lg inline-block mr-4">
              Orders Donated: {donatedOrders.length}
            </div>
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-lg inline-block">
              Orders Requested: {requestedOrders.length}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Donated Orders</h3>
            {donatedOrders.length === 0 ? (
              <p className="text-gray-500">No donations yet.</p>
            ) : (
              <div className="space-y-4">
                {donatedOrders.map((order, idx) => (
                  <div key={order._id || idx} className="border rounded-lg p-4 bg-gray-50">
                    <div className="font-semibold text-lg">{order.food} <span className="ml-2 text-xs px-2 py-1 rounded-full bg-yellow-100 text-yellow-800">{order.category}</span></div>
                    <div className="text-sm text-gray-700">Type: <span className={order.foodType === 'veg' ? 'text-green-600' : 'text-red-600'}>{order.foodType}</span></div>
                    <div className="text-sm">Quantity: {order.quantity}</div>
                    <div className="text-sm">Address: {order.address}</div>
                    <div className="text-sm">Phone: {order.phone}</div>
                    <div className="text-sm">Message: {order.message || 'N/A'}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">Requested Orders</h3>
            {requestedOrders.length === 0 ? (
              <p className="text-gray-500">No requests yet.</p>
            ) : (
              <div className="space-y-4">
                {requestedOrders.map((order, idx) => (
                  <div key={order._id || idx} className="border rounded-lg p-4 bg-gray-50">
                    {/* Show request details here */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
