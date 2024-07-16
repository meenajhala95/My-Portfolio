import React from 'react';

const Skills = () => {
  return (
    <div class="w-full max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col justify-between p-4 leading-normal">
        <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 mr-1 bg-blue-600 rounded-full me-1.5 flex-shrink-0"></span>Javascript</span>
        <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 mr-1 bg-purple-500 rounded-full me-1.5 flex-shrink-0"></span>React JS</span>
        <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 mr-1 bg-indigo-500 rounded-full me-1.5 flex-shrink-0"></span>Redux</span>
        <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 mr-1 bg-gray-500 rounded-full me-1.5 flex-shrink-0"></span>HTML</span>
        <span class="flex items-center text-sm font-medium text-gray-900 dark:text-white me-3"><span class="flex w-2.5 h-2.5 mr-1 bg-pink-500 rounded-full me-1.5 flex-shrink-0"></span>CSS</span>
      </div>
    </div>
  );
};

export default Skills;
