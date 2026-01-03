import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch reviews on mount
  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://foodhive-3.onrender.com/api/review');
      setReviews(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to load reviews');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message ) return;
    try {
      setLoading(true);
      await axios.post('https://foodhive-3.onrender.com/api/review', { name, email, message });
      setName('');
      setEmail('');
      setMessage('');
      fetchReviews();
      setLoading(false);
    } catch (err) {
      setError('Failed to submit review');
      setLoading(false);
    }
  };

  return (
    <>
       <div className="w-full bg-white">
      <img 
        className="w-full h-75 object-cover" 
        src="https://www.shutterstock.com/image-photo/writing-contact-us-young-smiling-260nw-637354096.jpg" 
        alt="Contact Us" 
      />
      </div>
         <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Reviews</h2>
        </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-700">
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-700">
                  Message
                </label>
              
              </div>
              <div className="mt-2">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  autoComplete="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  className="block w-full rounded-md bg-white border border-gray-300 px-3 py-3 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6 resize-y"
                  placeholder="Write your review here..."
                />
              </div>
            </div>

       
            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Send'}
              </button>
              {error && <p className="text-red-600 mt-2 text-center">{error}</p>}
            </div>
          </form>

          
        </div>
      </div>
      {/* review section */}
      <div className="max-w-2xl mx-auto my-8 bg-white p-6 rounded shadow">
        <h3 className="text-xl font-bold mb-4">All Reviews</h3>
        {loading && <p>Loading reviews...</p>}
        {reviews.length === 0 && !loading && <p className="text-gray-500">No reviews yet.</p>}
        <ul className="space-y-4">
          {reviews.map((rev, idx) => (
  <li key={rev._id || idx} className="border-b pb-3">
    <div className="flex items-center justify-between">
      <span className="font-semibold text-black">{rev.name}</span>
      <span className="text-xs text-gray-400">
        {rev.createdAt ? new Date(rev.createdAt).toLocaleString() : ''}
      </span>
    </div>
    <p className="text-gray-800 mt-1">{rev.message}</p>
  </li>
))}

        </ul>
      </div>
    </>
   
    

  )
}

export default Contact
