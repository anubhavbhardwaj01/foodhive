import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Req = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchDonations();
  }, []);

  const fetchDonations = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://foodhive-3.onrender.com/api/donate');
      setDonations(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load donations');
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Available Donations</h2>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {donations.map((don, idx) => (
          <div key={don._id || idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${don.foodType === 'veg' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>{don.foodType === 'veg' ? 'Veg' : 'Non Veg'}</span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">{don.category}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{don.food}</h3>
              <p className="text-gray-700 mb-2">{don.message}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-gray-500">By: {don.name}</span>
                <span className="text-sm text-gray-400">{don.email}</span>
              </div>
              <div className="mt-2">
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Address: {don.address}</span>
              </div>
              <button
                className="mt-4 w-full bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition-colors duration-200"
                onClick={() => alert('Request sent for this donation!')}
              >
                Get It
              </button>
            </div>
          </div>
        ))}
      </div>
      {donations.length === 0 && !loading && !error && (
        <p className="text-center text-gray-500 mt-8">No donations available right now.</p>
      )}
    </div>
  );
};

export default Req;
