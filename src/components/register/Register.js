import React from 'react'
import "./Register.css"

import background from "./assets/images/signup.jpg"

const Input = ({ type, id, name, placeholder }) => {
    return (
        <input type={type} id={id} name={name} placeholder={placeholder}
            className='border-[1px] border-blue-400 focus:border-blue-500 focus:border-[2px] outline-none w-full px-4 py-2 rounded-sm'
        />
    )
}

const Button = ({ children, id }) => {
    return (
        <button id={id} className='w-full px-4 py-2 outline-1 outline-blue-500 text-xl font-semibold text-blue-800 bg-yellow-300 hover:bg-yellow-400 transition-all duration-300 rounded-sm'>{children}</button>
    )
}

const Register = () => {

    const bgStyle = {
        background: `linear-gradient(rgba(99, 112, 168, 0.5), rgba(81, 91, 233, 0.5)), url(${background})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }

    const bgBlur = {
        backgroundColor: `rgba(255, 255, 255, 0.2)`,
        backdropFilter: `blur(4px)`
    }

    return (
        <>
            <div className="register-wrapper min-h-[60vh] flex py-[4rem]" style={bgStyle}>
                <div className="container max-w-[1280px] mx-auto row flex flex-col justify-center lg:flex-row flex-wrap lg:justify-between gap-8 items-center">
                    <div className="col grow space-y-8">
                        <div className="row text-center lg:text-left">
                            <p className='text-white text-xl'>Get 100 courses online for free!</p>
                            <h3 className='text-white text-3xl md:text-5xl font-extrabold'>Register To Get It</h3>
                        </div>
                        <div className="row countdown flex flex-wrap gap-2 md:gap-8 text-center text-white text-lg md:text-2xl font-semibold">
                            <div className="box flex flex-col gap-2 px-4 py-2" style={bgBlur}>
                                <span>18</span>
                                <span>Days</span>
                            </div>
                            <div className="box flex flex-col gap-2 px-4 py-2" style={bgBlur}>
                                <span>23</span>
                                <span>Hours</span>
                            </div>
                            <div className="box flex flex-col gap-2 px-4 py-2" style={bgBlur}>
                                <span>18</span>
                                <span>Mins</span>
                            </div>
                            <div className="box flex flex-col gap-2 px-4 py-2" style={bgBlur}>
                                <span>45</span>
                                <span>Secs</span>
                            </div>
                        </div>
                    </div>
                    <div className="col w-full lg:w-1/3 px-2 md:px-8">
                        <div className="register-form w-full bg-white px-8 py-[4rem] space-y-8 rounded-2xl">
                            <div className='row'><h3 className='font-bold text-xl text-center lg:text-left'>Create Free Account Now!</h3></div>
                            <div className="row form-wrapper flex flex-col gap-4 ">
                                <div className="field">
                                    <Input type={`text`} id={`nameInput`} name={`name`} placeholder={`Name`} />
                                </div>
                                <div className="field">
                                    <Input type={`email`} id={`emailInput`} name={`email`} placeholder={`Email`} />
                                </div>
                                <div className="field">
                                    <Input type={`number`} id={`phoneInput`} name={`phone`} placeholder={`Phone Number`} />
                                </div>
                                <div className="field">
                                    <Button id={`registerBtn`}>Register</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register