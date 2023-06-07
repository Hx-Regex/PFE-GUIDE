import React from 'react'
import {BsAndroid} from 'react-icons/bs'
import { motion } from "framer-motion"
import axios from 'axios';
import fileDownload from 'js-file-download';
import APK from '../Smartcaf.apk'
function Hero() {
   const handleDownload = () => {
        axios.get('/public/Smartcaf.apk', { responseType: 'blob' })
          .then((res) => {
            fileDownload(res.data);
          });
      };
      

  return ( 
    <>

        <div className='h-screen w-full  flex justify-evenly items-center bg-[#4646b6] lgmax:flex-col overflow-hidden'>
           <div className='w-full h-full flex justify-evenly items-center lgmax:flex-col max-w-[1440px]'>

           
            <motion.div initial={{ opacity: 0 ,  x:  -200}} whileInView={{x : 0, opacity: 1 }} transition={{ duration: 0.8}} className='flex justify-center  w-[60%] gap-10  lgmax:gap-2 flex-col lgmax:items-center'>
                <div className='flex justify-center flex-col text-[90px] lgmax:text-[40px] font-bold text-[#d6ef38] lgmax:leading-[50px] leading-[110px] lgmax:items-center textround:text-[30px]'>
                    <h1 className='flex gap-5'>SMART<h1 className='text-white'>CAFETERIA</h1></h1>
                    <h1 className='flex gap-5 text-[87px] text-white lgmax:text-[35px]'> PROJECT<h1 className='text-[#d6ef38]'>GUIDE</h1></h1>
                </div>

                <div className='flex gap-10'>
                        <button className='w-[200px] h-[50px] bg-[#d6ef38] flex justify-center items-center text-[17px] font-bold rounded-md  text-white lgmax:w-[110px] lgmax:h-[35px] lgmax:text-[10px]'>
                                Explore More
                        </button>
                        <a href={APK}
                                    download="Smartcaf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='w-[200px] h-[50px] border-4 border-[#d6ef38] flex justify-center items-center text-[17px] font-bold rounded-md text-[#d6ef38] gap-2 lgmax:w-[110px] lgmax:h-[35px] lgmax:text-[10px]'>
                              <BsAndroid />  Download App
                        </a>
                        
                </div>


            </motion.div>
            
            <motion.div initial={{ opacity: 0 ,  y:  200}} whileInView={{y : 0, opacity: 1 }} transition={{ duration: 0.8}} className=' w-[450px] lgmax:w-[300px]'>
                        <img src="https://cdn.discordapp.com/attachments/928642981186109440/1116063638533439548/Mockup.png" alt="" />
            </motion.div>
            </div>
        </div>


    </>
    )
}

export default Hero