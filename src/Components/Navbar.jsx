import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
export default function Navbar({darkMode , setDarkMode }){
return (
    <div className=" flex justify-between mb-8 items-center sm:mb-5 ">

      <div className='transition-all duration-300 hover:tracking-wider dark:text-white'>
        <h1 className="text-4xl font-bold sm:text-3xl  ">
          NexTask
        </h1>
        <p className='sm:text-sm'>Plan. Do. Achieve.</p>
      </div>
      <button onClick={()=>{setDarkMode(!darkMode); }} className=" bg-black text-white px-4 py-2 rounded transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">  {darkMode ? <LightModeIcon/> : <DarkModeIcon/>}</button>
    </div>
);
}