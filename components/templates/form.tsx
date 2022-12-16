import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaSpinner } from 'react-icons/fa'

import Styles from "../../styles/util.module.css"

export default function Form({ emailAlerts, sendFrom, emailCc, emailBcc }: any) {

    const [sending, setSending] = useState('Idle')

    const router = useRouter()

    const handleSubmit = async (e) => {
        setSending('Sending')
        e.preventDefault()
        const data = {
            name: e.target.fullName.value,
            email: e.target.emailAddress.value,
            phone: e.target.phone.value,
            message: e.target.message.value,
            emailAlerts: e.target.emailAlerts.value,
            sendFrom: e.target.sendFrom.value,
            emailBcc: e.target.emailBcc.value,
            emailCc: e.target.emailCc.value,
        }
        const JSONdata = JSON.stringify(data)
        const endpoint = '/api/postmark-contact'
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const submit = await fetch(endpoint, options)
        const res = await submit.json()
        if (res.ErrorCode === 0) {
            setSending('Sent')
            console.log('Sent:', res)
            router.push('/thank-you')
        }
        else {
            setSending('Error')
            console.log('Error:', res)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="name" id="name" className="h-0 w-0 opacity-0" autoComplete="off" />
                <input type="hidden" name="email" id="email" className="h-0 w-0 opacity-0" autoComplete="off" />
                <input type="hidden" name="emailAlerts" value={emailAlerts ? emailAlerts : 'submissions@hungryramwebdesign.com'} id="emailAlerts" className="h-0 w-0 opacity-0" />
                <input type="hidden" name="sendFrom" value={sendFrom ? sendFrom : 'forms@hungryramwebdesign.com'} id="sendFrom" className="h-0 w-0 opacity-0" />
                <input type="hidden" name="emailBcc" value={emailBcc} id="emailBcc" className="h-0 w-0 opacity-0" />
                <input type="hidden" name="emailCc" value={emailCc} id="emailCc" className="h-0 w-0 opacity-0" />
                <div>
                    <div className="py-5">
                        <label className="text-lg uppercase font-bold">NAME*</label>
                        <div>
                            <div className="grid md:grid-cols-2 gap-x-5">
                                <div className="my-5">
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="w-full border bg-transparent p-2 border-slate-300"
                                        required
                                        aria-required
                                    />
                                    <label htmlFor="first-name" className="uppercase">First Name</label>

                                </div>
                                <div className="my-5">
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="w-full border bg-transparent p-2 border-slate-300"
                                        required
                                        aria-required
                                    />
                                    <label htmlFor="last-name" className="uppercase">Last Name</label>

                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-1">
                                <div className="my-5">
                                    <label htmlFor="email-address" className="uppercase">Email*</label>
                                    <input
                                        type="email"
                                        name="emailAddress"
                                        id="email-address"
                                        autoComplete="email"
                                        className="w-full border bg-transparent p-2 border-slate-300"
                                        required
                                        aria-required
                                    />
                                </div>

                                <div>
                                    <div className="checks my-5">
                                        <label className="text-lg uppercase">Are you a broker?*</label>
                                        <div className="my-5 flex items-center">
                                            <input type="radio" className="h-5 w-5" id="broker1" value="yes" name="broker" />
                                            <label htmlFor="broker1" className="text-sm ml-3">YES</label>
                                        </div>
                                        <div className="my-5 flex items-center">
                                            <input type="radio" className="h-5 w-5" id="broker2" value="no" name="broker" />
                                            <label htmlFor="broker2" className="text-sm ml-3">NO</label>
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <div>
                                            <label className="uppercase text-lg" htmlFor="interested-in">
                                                I am interested in*
                                            </label>
                                            <div className="relative mt-5">
                                                <div className="my-5 flex items-center">
                                                    <input type="radio" className="h-5 w-5" id="checkbox-2" value="2 bedrooms" name="interestedIn" />
                                                    <label htmlFor="checkbox-2" className="text-sm ml-3 uppercase">2 Bedrooms</label>
                                                </div>
                                                <div className="my-5 flex items-center">
                                                    <input type="radio" className="h-5 w-5" id="checkbox-3" value="3 bedrooms" name="interestedIn" />
                                                    <label htmlFor="checkbox-3" className="text-sm ml-3 uppercase">3 Bedrooms</label>
                                                </div>
                                                <div className="my-5 flex items-center">
                                                    <input type="radio" className="h-5 w-5" id="checkbox-4" value="4 bedrooms" name="interestedIn" />
                                                    <label htmlFor="checkbox-4" className="text-sm ml-3 uppercase">4 Bedrooms</label>
                                                </div>
                                                <div className="my-5 flex items-center">
                                                    <input type="radio" className="h-5 w-5" id="checkbox-5" value="5 bedrooms" name="interestedIn" />
                                                    <label htmlFor="checkbox-5" className="text-sm ml-3 uppercase">5 Bedrooms</label>
                                                </div>
                                                <div className="my-5 flex items-center">
                                                    <input type="radio" className="h-5 w-5" id="checkbox-1" value="penthouses" name="interestedIn" />
                                                    <label htmlFor="checkbox-1" className="text-sm ml-3 uppercase">Penthouses</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <div className="md:w-96">
                                            <label className="uppercase text-xl" htmlFor="price-range">
                                                Price Range*
                                            </label>
                                            <div className="relative mt-5">
                                                <select className="block appearance-none w-full bg-transparent border py-3 px-4 pr-8" id="price-range" name="priceRange">
                                                    <option value="$1,500,000 - $2,5000,000">$1,500,000 - $2,5000,000</option>
                                                    <option value="$2,500,000 - $3,500,000">$2,500,000 - $3,500,000</option>
                                                    <option value="$3,500,000 - $4,500,000">$3,500,000 - $4,500,000</option>
                                                    <option value="$4,500,000+">$4,500,000+</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <div className="md:w-96">
                                            <label className="uppercase text-xl" htmlFor="hear-about">
                                                How did you hear about us?
                                            </label>
                                            <div className="relative mt-5">
                                                <select className="block appearance-none w-full bg-transparent border py-3 px-4 pr-8" id="hear-about" name="hearAbout">
                                                    <option value="News Article/Press">News Article/Press</option>
                                                    <option value="Online Search">Online Search</option>
                                                    <option value="Instagram">Instagram</option>
                                                    <option value="Broker">Broker</option>
                                                    <option value="Friend / Family / Referral">Friend / Family / Referral</option>
                                                    <option value="Other">Other</option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-5">
                                        <textarea name="message" id="" rows="5" className="w-full border"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="m-1 text-sm text-black">By clicking submit, I consent to having this website save my information to respond to my inquiry</p>
                    </div>
                    <div className="py-2">
                        <button
                            type="submit"
                            className="px-20 py-3 w-1/2 bg-[#474967] hover:bg-white hover:text-black transition-all ease-in border-black border text-white"
                        >
                            {sending === 'Idle' ?
                                'Submit'
                                : sending === 'Sending' ?
                                    <FaSpinner className="animate-spin mx-auto text-xl" />
                                    : sending === 'Sent' ?
                                        'Sent'
                                        : 'Message Error'
                            }
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}