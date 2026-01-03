import React, { useState } from 'react';
import axios from 'axios';

const Donate = () => {
  const [form, setForm] = useState({
    food: '',
    foodType: 'veg',
    category: '',
    quantity: '',
    email: '',
    phone: '',
    address: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');
    try {
      await axios.post('https://foodhive-3.onrender.com/api/donate', {
        ...form,
        quantity: Number(form.quantity),
        phone: Number(form.phone),
      });
      setSuccess('Donation submitted successfully!');
      setForm({
        food: '',
        foodType: 'veg',
        category: '',
        quantity: '',
        email: '',
        phone: '',
        address: '',
      });
    } catch (err) {
      setError('Failed to submit donation.');
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
        <img
          alt="Your Company"
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
          className="mx-auto h-10 w-auto"
        />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Donate Food</h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white p-8 rounded shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="food" className="block text-sm/6 font-medium text-gray-700">
              Food item:
            </label>
            <div className="mt-2">
              <input
                id="food"
                name="food"
                type="text"
                required
                autoComplete="food"
                value={form.food}
                onChange={handleChange}
                className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="flex gap-6 mt-6 bg-white px-2 py-2 rounded-full shadow items-center justify-center">
            <label className="flex items-center gap-2 text-lg font-semibold text-black">
              <input type="radio" name="foodType" value="veg" className="accent-green-600" checked={form.foodType === 'veg'} onChange={handleChange} />
              Veg
            </label>
            <label className="flex items-center gap-2 text-lg font-semibold text-black">
              <input type="radio" name="foodType" value="nonveg" className="accent-red-600" checked={form.foodType === 'nonveg'} onChange={handleChange} />
              Non Veg
            </label>
          </div>
          <div className="mt-4">
            <label htmlFor="category" className="block text-sm/6 font-medium text-gray-700 mb-1">Category</label>
            <select
              id="category"
              name="category"
              className="block w-full rounded-md bg-white border border-gray-300 px-3 py-2 text-base text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
              required
              value={form.category}
              onChange={handleChange}
            >
              <option value="">Select category</option>
              <option value="raw">Raw Food</option>
              <option value="cooked">Cooked Food</option>
              <option value="packed">Packed Food</option>
            </select>
          </div>
          <div>
            <label htmlFor="quantity" className="block text-sm/6 font-medium text-gray-700">
              Quantity (person):
            </label>
            <div className="mt-2">
              <input
                id="quantity"
                name="quantity"
                type="number"
                required
                autoComplete="food"
                value={form.quantity}
                onChange={handleChange}
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
                value={form.email}
                onChange={handleChange}
                className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="phone" className="block text-sm/6 font-medium text-gray-700">
                PhoneNo:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="number"
                required
                autoComplete="phone"
                value={form.phone}
                onChange={handleChange}
                className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="address" className="block text-sm/6 font-medium text-gray-700">
                Address:
              </label>
            </div>
            <div className="mt-2">
              <input
                id="address"
                name="address"
                type="text"
                required
                autoComplete="address"
                value={form.address}
                onChange={handleChange}
                className="block w-full rounded-md bg-white border border-gray-300 px-3 py-1.5 text-base text-black placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
          {success && <p className="text-green-600 text-center">{success}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Donate;
