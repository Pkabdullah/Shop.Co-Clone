"use client";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";

const News = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="w-full bg-[#f2f2f2] py-12 px-4 flex justify-center">
      <div className="px-6 py-12 w-full max-w-7xl bg-black rounded-2xl">
        <div className="flex flex-col gap-8 justify-between items-center lg:flex-row">
          {/* Text Side */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              STAY UP TO DATE ABOUT <br />
              OUR LATEST OFFERS
            </h2>
          </div>

          {/* Input & Button Side */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 items-center w-full max-w-xl sm:flex-row"
          >
            {/* Input Field */}
            <div className="relative w-full">
              <CiMail className="absolute left-4 top-1/2 text-xl text-gray-400 transform -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="py-3 pr-4 pl-12 w-full placeholder-gray-500 text-black bg-white rounded-full focus:outline-none"
              />
            </div>

            {/* Button - styled like input */}
            <button
              type="submit"
              className="px-6 py-3 w-full font-semibold text-black whitespace-nowrap bg-white rounded-full transition sm:w-auto hover:bg-gray-100"
            >
              Subscribe to Newsletter
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default News;


// "use client"
// import React, { useState } from 'react';

// import { CiMail } from "react-icons/ci";
// const News = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
   
//     console.log('Newsletter subscription:', email);
//     setEmail('');
//   };

//   return (
//     <section className="relative left-[10%] py-10 bg-black w-[80%]  ">
//       <div className="px-4 mx-auto max-w-7xl rounded-2xl sm:px-6 lg:px-8">
//         <div className="py-12 bg-black">
//           <div className="flex flex-col gap-8 justify-between items-center lg:flex-row">
//             {/* Left side - Text */}
//             <div className="flex-1">
//               <h2 className="text-4xl font-bold leading-tight text-white lg:text-4xl">
//                 STAY UP TO DATE ABOUT<br />
//                 OUR LATEST OFFERS
//               </h2>
//             </div>
            
//             <div className="flex-1 w-full max-w-md">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="relative">
//                   <CiMail className="absolute left-4 top-1/2 w-5 h-5 text-gray-400 transform -translate-y-1/2" />
//                   <input
//                     type="email"
//                     placeholder="Enter your email address"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="py-3 pr-4 pl-12 w-full placeholder-gray-500 text-gray-900 bg-white rounded-full border-0 focus:ring-2 focus:ring-white"
//                     required
//                   />
//                 </div>
                
              
//                 <button 
//                   type="submit"
//                   className="py-3 w-full font-medium text-black bg-white rounded-full hover:bg-gray-100"
//                 >
//                   Subscribe to Newsletter
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default News;