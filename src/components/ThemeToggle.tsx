// // components/DarkModeToggle.tsx
// 'use client';
// import {Moon, Sun} from 'lucide-react'
// import { useEffect, useState } from 'react';

// const DarkModeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     const saved = localStorage.getItem('theme');
//     if (saved === 'dark') {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !isDark;
//     setIsDark(newMode);
//     document.documentElement.classList.toggle('dark', newMode);
//     localStorage.setItem('theme', newMode ? 'dark' : 'light');
//   };

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="text-xl px-3 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
//       aria-label="Toggle Dark Mode"
//     >
//       {isDark ? <Sun/> : <Moon/>}
//     </button>
//   );
// };

// export default DarkModeToggle;
