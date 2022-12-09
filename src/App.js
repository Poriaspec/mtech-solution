import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/HomePage/HomePage';
import {ChatWidget} from "@papercups-io/chat-widget";
import ScrollButton from "./ScrollButton/ScrollButton"


function App() {


	return (

      <>
        <div className='bg-white dark:bg-green text-green dark:text-white h-screen'>
          <Router>
  
            <Routes>

            <Route path='/' element={<Homepage/>} />

               {/* <Route path='/about' element={<AboutUs/>} />
              <Route path='/portfolio' element={<Portfolio/>} />
              <Route path='/services' element={<Services/>} />
              <Route path='/contact' element={<Contact/>} /> */}

              </Routes>
        
           </Router> 

           <ScrollButton/>

        <ChatWidget
        // `accountId` is used instead of `token` in older versions
        // of the @papercups-io/chat-widget package (before v1.2.x).
        // You can delete this line if you are on the latest version.
        // accountId="4b3daaa5-b001-48bf-8d20-90711cdc50e1"
        token="4b3daaa5-b001-48bf-8d20-90711cdc50e1"
        inbox="29a639b9-a38a-46d7-a9a3-46fffd4afe24"
        title="Welcome to MTech Solutions "
        subtitle="Ask us anything in the chat window below 😊"
        primaryColor="#000000"
        newMessagePlaceholder="Start typing..."
        showAgentAvailability={true}
        agentAvailableText="We're online right now!"
        agentUnavailableText="We're away at the moment."
        requireEmailUpfront={true}
        iconVariant="outlined"
        baseUrl="https://app.papercups.io"
        // Optionally include data about your customer here to identify them
        // customer={{
        //   name: __CUSTOMER__.name,
        //   email: __CUSTOMER__.email,
        //   external_id: __CUSTOMER__.id,
        //   metadata: {
        //     plan: "premium"
        //   }
        // }}
      />
  
  



           </div>



    </>
  );
}

export default App;
