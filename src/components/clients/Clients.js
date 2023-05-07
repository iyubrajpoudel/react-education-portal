import React from 'react'

import client1 from "./assets/images/client (1).png"
import client2 from "./assets/images/client (2).png"
import client3 from "./assets/images/client (3).png"
import client4 from "./assets/images/client (4).png"
import client5 from "./assets/images/client (5).png"
import client6 from "./assets/images/client (6).png"

const Clients = () => {
    return (
        <>
            <div className="wrapper py-4">
                <div className="container max-w-[1280px] mx-auto space-y-10">
                    <div className="row text-center p-2">
                        <h2 className="text-3xl font-bold">Trusted By</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, iure.</p>
                    </div>
                    <div className="row flex justify-around p-2 flex-wrap gap-6">
                        <div className='cursor-pointer'><img src={client1} alt="" className='w-[6rem]' /></div>
                        <div className='cursor-pointer'><img src={client2} alt="" className='w-[6rem]' /></div>
                        <div className='cursor-pointer'><img src={client3} alt="" className='w-[6rem]' /></div>
                        <div className='cursor-pointer'><img src={client4} alt="" className='w-[6rem]' /></div>
                        <div className='cursor-pointer'><img src={client5} alt="" className='w-[6rem]' /></div>
                        <div className='cursor-pointer'><img src={client6} alt="" className='w-[6rem]' /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clients