import React, { useState } from 'react'
import { motion } from "framer-motion"

function Parts() {
    const [index , setIndex ] = useState(0)
    const SmartAir = [
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003467790647356/Arduino-Mega-2560-R3-Pic01-700x700.png' ,
            name : 'Arduino Mega' ,
        },
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003468361085078/esp32-carte-de-developpement-wifi-bluetooth-ultra-faible-consommation-d-energie-double-coeur-esp-32-removebg-preview_1.png' ,
            name : 'Esp32' ,
        },
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003468067479672/DHT22-MAROC-removebg-preview_1.png',
            name : 'DHT 22' ,
        },
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003469166391377/arduino-buzzer-module-removebg-preview_2.png',
            name : 'Buzzer' ,
        },
    ]
    const SmartStock = [
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003467790647356/Arduino-Mega-2560-R3-Pic01-700x700.png' ,
            name : 'Arduino Mega' ,
        },
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003468361085078/esp32-carte-de-developpement-wifi-bluetooth-ultra-faible-consommation-d-energie-double-coeur-esp-32-removebg-preview_1.png' ,
            name : 'Esp32' ,
        },
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003468633702531/p_1_0_5_4_1054-HX711-Capteur-de-pression-24-bits-de-precision-adapte-avec-arduino-removebg-preview_1.png',
            name : 'Hx711' ,
        },
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116005981718065212/ezgif.com-webp-to-png-removebg-preview.png',
            name : 'LoadCell' ,
        },
    ]
    const SmartWindow = [
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003467790647356/Arduino-Mega-2560-R3-Pic01-700x700.png' ,
            name : 'Arduino Mega' ,
        },
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003468361085078/esp32-carte-de-developpement-wifi-bluetooth-ultra-faible-consommation-d-energie-double-coeur-esp-32-removebg-preview_1.png' ,
            name : 'Esp32' ,
        },
        {
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116003468944089138/servo-removebg-preview_1.png',
            name : 'Servo Motor' ,
        },
    ]


    const Parts = [
        {
            Title : 'Smart Air',
            desc : "Le système utilise un capteur DHT22 pour mesurer la température et l'humidité de l'environnement de la cafétéria. Les valeurs de température et d'humidité sont envoyées à l’application mobile via une communication Wifi.L'application mobile affiche les données de température et d'humidité en temps réel, permettant aux utilisateurs de surveiller les conditions de l'air dans la cafétéria, Un buzzer est utilisé pour alerter les utilisateurs en cas de dépassement des seuils de température ou d'humidité.",
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116029603857838160/image.png',
            Mat  : SmartAir,
            i : 1,
            direction : 'right',
        },
        {
            Title : 'Smart Window',
            desc : "Le système utilise un servomoteur pour ouvrir et fermer manuellement ou bien automatiquementla fenêtre de la cafétéria en fonction des conditions de température et d'humidité.Si la températureou l'humidité dépasse une limite prédéfinie, la fenêtre se ferme automatiquement pour maintenirdes conditions intérieures optimales.Lorsque les conditions reviennent dans la plage acceptable, la fenêtre s'ouvre partiellement (50 %)pour permettre une ventilation adéquate.Si les conditions deviennent extrêmes, la fenêtre s'ouvrecomplètement pour une aération maximale.",
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116028396296732713/image.png',
            i : 2,
            Mat  : SmartWindow,
            direction : 'left',
        },
        {
            Title : 'Smart Stock',
            desc : "Le système utilise un capteur de poids HX711 pour mesurer le niveau de stock des aliments ou desproduits dans la cafétéria.Le poids mesuré est envoyé à l'application mobile via unecommunication Wifi.L'application mobile affiche le niveau de stock en temps réel, permettant auxutilisateurs de surveiller et de gérer efficacement les approvisionnements.L'ensemble du système est contrôlé par une carte Arduino Méga, qui collecte les données descapteurs, contrôle le servomoteur et communique avec l'ESP32 pour l'envoi des données versl'application mobile via la connexion Wifi. L'ESP32 est responsable de la communication avec labase de données Firebase pour stocker et récupérer les données.",
            img : 'https://cdn.discordapp.com/attachments/928642981186109440/1116029202882367578/image.png',
            i : 3,
            Mat  : SmartStock,
            direction : 'right',
        },
     
    ]
  return (

    <>
        <div className='w-full h-[200px] bg-[#0c0c1c] flex justify-center items-center'>
                <h1 className='text-[80px] text-[#d6ef38] underline font-bold lgmax:text-[60px]'>PARTS</h1>
        </div>
      {Parts.map((part) => (
        <> 
        {part.direction == 'right' ? 
        <div className={`w-full h-[600px] bg-[#0c0c1c] flex justify-evenly items-center lgmax:flex-col lgmax:h-auto p-5 gap-4 overflow-hidden` }>
        
        <motion.div initial={{ opacity: 0 ,  x:  -200}} whileInView={{x : 0, opacity: 1 }} transition={{ duration: 0.8}} className='h-[90%] w-[44%] flex  flex-col justify-evenly items-center gap-2 lgmax:w-[85%]'>
          
             
             
            <div className='text-[30px] text-[#d6ef38] font-bold'>{part.Title}</div>
            <div className='text-[20px]  text-white  lgmax:text-[14px]'>
                    {part.desc}
            </div>
            <div className='flex flex-col w-full gap-2  border-2 p-4 rounded-xl'>
                <div className='text-[22px] font-bold text-white mb-2 text-center'>Matériels</div>


                <div className='flex justify-evenly items-center'>
                {part.Mat.map((comp) => (
                    <div className='flex flex-col gap-2 w-[20%] h-[120px] items-center '>
                            <img className='object-fill w-full h-[60%]' src={comp.img} alt="" />

                        <div className='font-bold text-white'>
                            {comp.name}
                        </div>

                    </div>
                ))}
                </div>

            </div>
            
            
        

        </motion.div>
        <motion.div  initial={{ opacity: 0 ,  x:  200}} whileInView={{x : 0, opacity: 1 }} transition={{ duration: 0.8}} className='w-[40%] h-[90%] 0 rounded-2xl  border-4 border-[#d6ef38] p-2 lgmax:w-[85%] '>
                <img className='w-full h-full rounded-xl' src={part.img} alt="" />
        </motion.div>


    </div> :
                        <div className='w-full h-[550px] bg-[#13132c] flex justify-evenly items-center lgmax:h-auto lgmax:flex-col p-5 overflow-hidden'>
                    <motion.div  initial={{ opacity: 0 ,  x: -200}} whileInView={{x : 0, opacity: 1 }} transition={{ duration: 0.8}} className='w-[40%] h-[90%] 0 rounded-2xl  border-4 border-[#d6ef38] p-2 lgmax:w-[85%] '>
                        <img  className='rounded-2xl object-fill w-full h-full' src={part.img} alt="" />
                    </motion.div>
                        
                <motion.div  initial={{ opacity: 0 ,  x:  200}} whileInView={{x : 0, opacity: 1 }} transition={{ duration: 0.8}} className='h-[90%] w-[44%] flex  flex-col justify-evenly items-center lgmax:w-[85%] gap-4'>
                
                    
                    
                    <div className='text-[30px]  font-bold text-[#d6ef38]'>{part.Title}</div>
                    <div className='text-[20px]  text-white lgmax:text-[14px] '>
                            {part.desc}
                    </div>
                    <div className='flex flex-col w-full  border-2 p-4 gap-4 rounded-xl'>
                        <div className='text-[22px] font-bold text-white text-center'>Materiel</div>


                        <div className='flex justify-evenly items-center'>
                        {part.Mat.map((comp) => (
                            <div className='flex flex-col gap-2 w-[20%] h-[120px] items-center '>
                                    <img className='object-fill w-full h-[60%]' src={comp.img} alt="" />

                                <div className='font-bold text-white'>
                                    {comp.name}
                                </div>

                            </div>
                        ))}
                        </div>

                    </div>
                    
                    
                

                </motion.div>
                


                </div>

        }
    </>
      ))}
    </>
 
    )
}

export default Parts