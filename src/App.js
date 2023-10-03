import { useState } from "react";
import iconArcade from './images/icon-arcade.svg'
import iconAdvanced from './images/icon-advanced.svg'
import iconPro from './images/icon-pro.svg'
import iconCheck from './images/icon-checkmark.svg'
import iconThankYou from './images/icon-thank-you.svg'

export default function App() {
  const [stepNumber, setStepNumber] = useState(1);
  const [selectedPlanMode, setSelectedPlanMode] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(0);
  const [onlineService, setOnlineService] = useState(false);
  const [largerStorage, setLargerStorage] = useState(false);
  const [customProfile, setCustomProfile] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [nameIsEmpty, setNameIsEmpty] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [emailIsEmpty, setEmailIsEmpty] = useState(false);
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneIsEmpty, setPhoneIsEmpty] = useState(false);

  const planPrice = [0,9, 12, 15];
  const plan = ['', 'Arcade', 'Advanced', 'Pro'];


  let total = planPrice[selectedPlan];
  if(onlineService) { total += 1 }
  if(largerStorage) { total += 2 }
  if(customProfile) { total += 2 }
  if(selectedPlanMode) { total *= 10; }

  const handleOnlineService = () => {
    setOnlineService(!onlineService);
  }

  const handleLargerStorage = () => {
    setLargerStorage(!largerStorage);
  }

  const handleCustomProfile = () => {
    setCustomProfile(!customProfile);
  }

  const handleSwitch = () => {
    setSelectedPlanMode(!selectedPlanMode);
  }

  const handlePlanSelect = (value) => {
    setSelectedPlan(value);
  }

  const handleNameInputChange = (e) => {
    setNameValue(e.target.value);
  }

  const handleEmailInputChange = (e) => {
    setEmailValue(e.target.value);
  }

  const handlePhoneInputChange = (e) => {
    setPhoneValue(e.target.value);
  }

  const nextStep = () => {
    if(stepNumber === 1){
      if((nameValue.trim() === '') || (emailValue.trim() === '') || (phoneValue.trim() === '')){
        if(nameValue.trim() === '') { 
          setNameIsEmpty(true);
          if(emailValue.trim() !== '') { setEmailIsEmpty(false); }
          if(phoneValue.trim() !== '') { setPhoneIsEmpty(false); }
        }
        if(emailValue.trim() === '') { 
          setEmailIsEmpty(true);
          if(nameValue.trim() !== '') { setNameIsEmpty(false); }
          if(phoneValue.trim() !== '') { setPhoneIsEmpty(false); }
        }
        if(phoneValue.trim() === '') { 
          setPhoneIsEmpty(true);
          if(emailValue.trim() !== '') { setEmailIsEmpty(false); }
          if(nameValue.trim() !== '') { setNameIsEmpty(false); } 
        }
      } else {
        setStepNumber(stepNumber + 1);
        setNameIsEmpty(false);
        setEmailIsEmpty(false);
        setPhoneIsEmpty(false); 
      }
    }
    if((stepNumber > 1) && (stepNumber < 5)){
      setStepNumber(stepNumber + 1);
    }
  }

  const prevStep = () => {
    setStepNumber(stepNumber - 1);
  }

  const handleStepNbr = (value) => {
    setStepNumber(value);
  }

  return (
    <>
      <div className="h-screen bg-cyan-200 flex lg:justify-center lg:items-center">
        <div className="lg:flex lg:items-center lg:bg-white lg:h-[85%] lg:w-[65%] lg:p-6 rounded-lg">
          <div className="bg-mobile h-44 lg:bg-desktop lg:h-full bg-cover flex justify-center lg:justify-start items-start">
            <div className="flex lg:flex-col mt-10 gap-5 lg:gap-8 lg:mr-32 lg:ml-5">
              <div className="flex items-center lg:w-[110%] gap-3">
                <h1 className={`border ${stepNumber === 1 ? `border-cyan-400 bg-cyan-400 text-blue-950` : `border-white text-white`} rounded-full w-8 h-8 flex items-center justify-center`}>1</h1>
                <div className="hidden lg:block">
                  <h1 className="text-xs font-light text-gray-200 uppercase">step 1</h1>
                  <h2 className="font-bold text-xs text-white uppercase tracking-widest">Your Info</h2>
                </div>
              </div>
              <div className="flex items-center lg:w-[130%] gap-3">
                <h1 className={`border ${stepNumber === 2 ? `border-cyan-400 bg-cyan-400 text-blue-950` : `border-white text-white`} rounded-full w-8 h-8 flex items-center justify-center`}>2</h1>
                <div className="hidden lg:block">
                  <h1 className="text-xs font-light text-gray-200 uppercase">step 2</h1>
                  <h2 className="font-bold text-xs text-white uppercase tracking-widest">select plan</h2>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <h1 className={`border ${stepNumber === 3 ? `border-cyan-400 bg-cyan-400 text-blue-950` : `border-white text-white`} rounded-full w-8 h-8 flex items-center justify-center`}>3</h1>
                <div className="hidden lg:block">
                  <h1 className="text-xs font-light text-gray-200 uppercase">step 3</h1>
                  <h2 className="font-bold text-xs text-white uppercase tracking-widest">add-ons</h2>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <h1 className={`border ${stepNumber >= 4 ? `border-cyan-400 bg-cyan-400 text-blue-950` : `border-white text-white`} rounded-full w-8 h-8 flex items-center justify-center`}>4</h1>
                <div className="hidden lg:block">
                  <h1 className="text-xs font-light text-gray-200 uppercase">step 4</h1>
                  <h2 className="font-bold text-xs text-white uppercase tracking-widest">summary</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:bg-white lg:flex lg:flex-col lg:w-full  lg:h-full lg:justify-between">
            <div className={`ml-5 mr-5 bg-white rounded-xl p-8 mt-[-10%] lg:mt-0 ${stepNumber === 1 ? `` : `hidden`}`}>
              <div>
                <h1 className="text-2xl text-slate-800 font-semibold mb-2">Personal info</h1>
                <p className="text-base text-gray-500 font-normal mb-5">Please provide your name, email, address, and phone number.</p>
              </div>
              <div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <label className="text-slate-800 block mb-1 text-sm font-medium">Name</label>
                    <label className={`mb-1 text-sm font-medium text-red-600 block ${nameIsEmpty ? 'block' : 'hidden'}`}>This field is required</label>
                  </div>
                  <input onChange={handleNameInputChange} className={`border border-gray-400 w-full rounded-md p-2 ${nameIsEmpty ? 'border-red-600' : 'border-gray-400'}`} type="text" placeholder="e.g. Mohamed Missaoui"/>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <label className="text-slate-800 block mb-1 text-sm font-medium">Email Address</label>
                    <label className={`mb-1 text-sm font-medium text-red-600 ${emailIsEmpty ? 'block' : 'hidden'}`}>This field is required</label>
                  </div>
                  <input onChange={handleEmailInputChange} className={`border w-full rounded-md p-2 ${emailIsEmpty ? 'border-red-600' : 'border-gray-400'}`} type="text" placeholder="e.g. mhmed.missaoui@gmail.com"/>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <label className="text-slate-800 block mb-1 text-sm font-medium">Phone Number</label>
                    <label className={`mb-1 text-sm font-medium text-red-600 ${phoneIsEmpty ? 'block' : 'hidden'}`}>This field is required</label>
                  </div>
                  <input onChange={handlePhoneInputChange} className={`border w-full rounded-md p-2 ${phoneIsEmpty ? 'border-red-600' : 'border-gray-400'}`} type="text" placeholder="e.g. +1 234 567 890"/>
                </div>
              </div>
            </div>
            <div className={`ml-5 mr-5 bg-white rounded-xl p-8 mt-[-10%] lg:mt-0 ${stepNumber === 2 ? `` : `hidden`}`}>
              <div>
                <h1 className="text-2xl text-slate-800 font-semibold mb-2">Select your plan</h1>
                <p className="text-base text-gray-500 font-normal mb-5">You have the option of monthly or yearly billing.</p>
              </div>
              <div className="mt-3 space-y-5 lg:space-y-0 lg:flex lg:gap-8">
                <div onClick={() => handlePlanSelect(1)} className={`flex lg:flex-col cursor-pointer lg:w-32 lg:h-32 ${selectedPlanMode ? `lg:h-36` : ``} items-center lg:items-start lg:justify-between border rounded-lg p-3 ${selectedPlan === 1 ? `border-slate-800 bg-gray-100` : `border-gray-300 bg-white`}`}>
                  <img src={iconArcade} alt="/" />
                  <div className="flex flex-col mx-5 lg:mx-0">
                    <h2 className="text-slate-800 font-semibold">Arcade</h2>
                    <div>
                      <p className="text-sm text-gray-400 font-normal">{selectedPlanMode ? '$90/yr' : '$9/mo'}</p>
                      <p className={`text-xs text-slate-800 mt-1 ${selectedPlanMode ? `` : `hidden`}`}>2 months free</p>  
                    </div>
                  </div>
                </div>
                <div onClick={() => handlePlanSelect(2)} className={`flex lg:flex-col cursor-pointer lg:w-32 lg:h-32 ${selectedPlanMode ? `lg:h-36` : ``} items-center lg:items-start lg:justify-between border rounded-lg p-3 ${selectedPlan === 2 ? `border-slate-800 bg-gray-100` : `border-gray-300 bg-white`}`}>
                  <img src={iconAdvanced} alt="/" />
                  <div className="flex flex-col mx-5 lg:mx-0">
                    <h2 className="text-slate-800 font-semibold">Advanced</h2>
                    <div>
                      <p className="text-sm text-gray-400 font-normal">{selectedPlanMode ? '$120/yr' : '$12/mo'}</p>
                      <p className={`text-xs text-slate-800 mt-1 ${selectedPlanMode ? `` : `hidden`}`}>2 months free</p>
                    </div>
                  </div>
                </div>
                <div onClick={() => handlePlanSelect(3)} className={`flex lg:flex-col cursor-pointer lg:w-32 lg:h-32 ${selectedPlanMode ? `lg:h-36` : ``} items-center lg:items-start lg:justify-between border rounded-lg p-3 ${selectedPlan === 3 ? `border-slate-800 bg-gray-100` : `border-gray-300 bg-white`}`}>
                  <img src={iconPro} alt="/" />
                  <div className="flex flex-col mx-5 lg:mx-0">
                    <h2 className="text-slate-800 font-semibold">Pro</h2>
                    <div>
                      <p className="text-sm text-gray-400 font-normal">{selectedPlanMode ? '$150/yr' : '$15/mo'}</p>
                      <p className={`text-xs text-slate-800 mt-1 ${selectedPlanMode ? `` : `hidden`}`}>2 months free</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-center items-center p-5 mt-5 bg-cyan-50 gap-5">
                  <h2 className={`font-bold text-lg ${selectedPlanMode ? `text-gray-400` : `text-slate-800`}`}>Monthly</h2>
                  <div onClick={handleSwitch} className={`flex cursor-pointer ${selectedPlanMode ? `justify-end` : `justify-start`} w-10 h-5 bg-slate-800 rounded-full p-1`}>
                    <span className="flex w-3 h-3 rounded-full bg-white transition-all duration-75"></span>
                  </div>
                  <h2 className={`font-bold text-lg ${selectedPlanMode ? `text-slate-800` : `text-gray-400`}`}>Yearly</h2>
                </div>
              </div>
            </div>
            <div className={`ml-5 mr-5 bg-white rounded-xl p-8 mt-[-10%] lg:mt-0 ${stepNumber === 3 ? `` : `hidden`}`}>
              <div>
                <h1 className="text-2xl text-slate-800 font-semibold mb-2">Pick add-ons</h1>
                <p className="text-base text-gray-500 font-normal mb-5">Add-ons help enhance your gaming experience.</p>
              </div>
              <div className="mt-3 space-y-5">
                <div onClick={handleOnlineService} className={`flex items-center justify-between cursor-pointer border rounded-lg p-3 ${onlineService ? `border-slate-800 bg-gray-100` : `border-gray-300 bg-white`}`}>
                  <div className="flex items-center">
                    <div className={`border p-1 rounded-md ${onlineService ? `bg-blue-800 border-blue-800` : `bg-white border-gray-300`}`}><img className="w-3 h-3" src={iconCheck} alt="/" /></div>
                    <div className="mx-2 flex flex-col">
                      <h2 className="text-slate-800 font-semibold">Online service</h2>
                      <p className="text-xs text-gray-400 font-bold">Access to multiplayer games</p>
                    </div>
                  </div>
                  <div className="text-sm font-light text-blue-800">{selectedPlanMode ? '+$10/yr' : '+$1/mo'}</div>
                </div>
                <div onClick={handleLargerStorage} className={`flex items-center justify-between cursor-pointer border rounded-lg p-3 ${largerStorage ? `border-slate-800 bg-gray-100` : `border-gray-300 bg-white`}`}>
                  <div className="flex items-center">
                    <div className={`border p-1 rounded-md ${largerStorage ? `bg-blue-800 border-blue-800` : `bg-white border-gray-300`}`}><img className="w-3 h-3" src={iconCheck} alt="/" /></div>
                    <div className="mx-2 flex flex-col">
                      <h2 className="text-slate-800 font-semibold">Larger storage</h2>
                      <p className="text-xs text-gray-400 font-bold">Extra 1TB of cloud save.</p>
                    </div>
                  </div>
                  <div className="text-sm font-light text-blue-800">{selectedPlanMode ? '+$20/yr' : '+$2/mo'}</div>
                </div>
                <div onClick={handleCustomProfile} className={`flex items-center justify-between cursor-pointer border rounded-lg p-3 ${customProfile ? `border-slate-800 bg-gray-100` : `border-gray-300 bg-white`}`}>
                  <div className="flex items-center">
                    <div className={`border p-1 rounded-md ${customProfile ? `bg-blue-800 border-blue-800` : `bg-white border-gray-300`}`}><img className="w-3 h-3" src={iconCheck} alt="/" /></div>
                    <div className="mx-2 flex flex-col">
                      <h2 className="text-slate-800 font-semibold">Customizable profile</h2>
                      <p className="text-xs text-gray-400 font-bold">Custom theme on your profile.</p>
                    </div>
                  </div>
                  <div className="text-sm font-light text-blue-800">{selectedPlanMode ? '+$20/yr' : '+$2/mo'}</div>
                </div>
              </div>
            </div>
            <div className={`ml-5 mr-5 bg-white rounded-xl p-8 mt-[-10%] lg:mt-0 ${stepNumber === 4 ? `` : `hidden`}`}>
              <div>
                <h1 className="text-2xl text-slate-800 font-semibold mb-2">Finishing up</h1>
                <p className="text-base text-gray-500 font-normal mb-5">Double-check everything looks Ok before confirming.</p>
              </div>
              <div className="mt-3 space-y-5 bg-cyan-100 rounded-md p-3">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h2 className="text-slate-800 font-bold">{plan[selectedPlan]} ({selectedPlanMode ? `Yearly` : `Monthly`})</h2>
                    <p onClick={() => handleStepNbr(2)} className="text-gray-400 cursor-pointer font-normal underline">Change</p>
                  </div>
                  <div className="text-slate-800 font-bold">{selectedPlanMode ? '$' + (planPrice[selectedPlan]*10) + '/yr' : '$' + planPrice[selectedPlan] + '/mo'}</div>
                </div>
                <hr className="border border-b-1 border-gray-300" />
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <h2 className={`mb-1 text-gray-400 font-normal ${onlineService ? `` : `hidden`}`}>Online Service</h2>
                    <h2 className={`mb-1 text-gray-400 font-normal ${largerStorage ? `` : `hidden`}`}>Larger Storage</h2>
                    <h2 className={`mb-1 text-gray-400 font-normal ${customProfile ? `` : `hidden`}`}>Customizable profile</h2>
                  </div>
                  <div className="flex flex-col">
                    <h2 className={`mb-1 text-slate-800 ${onlineService ? `` : `hidden`}`}>{selectedPlanMode ? '+$10/yr' : '+$1/mo'}</h2>
                    <h2 className={`mb-1 text-slate-800 ${largerStorage ? `` : `hidden`}`}>{selectedPlanMode ? '+$20/yr' : '+$2/mo'}</h2>
                    <h2 className={`mb-1 text-slate-800 ${customProfile ? `` : `hidden`}`}>{selectedPlanMode ? '+$20/yr' : '+$2/mo'}</h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-between p-2 mt-8 lg:mt-4">
                <h1 className="text-gray-400 font-normal">Total (per {selectedPlanMode ? 'year' : 'month'})</h1>
                <div className="font-bold text-violet-600">{ '$' + total + '/'}{selectedPlanMode ? 'yr' : 'mo'}</div>
              </div>
            </div>
            <div className={`ml-5 mr-5 bg-white rounded-xl p-5 mt-[-10%] lg:mt-0 ${stepNumber === 5 ? `` : `hidden`}`}>
              <div className="text-center pt-10 lg:pt-0 lg:pb-0 pb-10">
                <div className="flex justify-center"><img className="h-16 w-16" src={iconThankYou} alt="/" /></div>
                <h2 className="text-2xl font-bold text-slate-800 mt-5 mb-5">Thank you!</h2>
                <p className="ml-3 mr-3 text-gray-400">Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
              </div>
            </div>
            <div className={`fixed lg:static bottom-0 flex justify-between lg:ml-5 lg:mr-3 items-center w-full bg-white p-5 ${stepNumber === 5 ? `hidden` : ``}`}>
              <div><button onClick={prevStep} className={`text-gray-400 font-semibold ${stepNumber === 1 ? `hidden` : ``}`}>Go Back</button></div>
              <div><button onClick={nextStep} className={`text-white font-semibold pl-5 pr-5 p-3 rounded-lg ${stepNumber === 4 ? `bg-violet-600` : `bg-slate-800`}`}>{stepNumber === 4 ? 'Confirm' : 'Next Step'}</button></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
