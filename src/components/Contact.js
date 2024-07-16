import React from 'react';

const Contact = () => {
  return (
    <div class="w-full max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact</h5>
        <a href='mailto:dummy@gmail.com' class="mb-3 font-normal text-gray-700 dark:text-gray-400">dummy@gmail.com</a>
        <a href='tel:999999999'>9999999999</a>
      </div>
    </div>
  );
};

export default Contact;
