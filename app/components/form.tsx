"use client"
import React, { FormEvent, useState } from 'react'

export default function ContactForm() {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [selectedOption, setSelectedOption] = useState('');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        try {
         const res = await fetch('/api/contact', {
            method:'POST', 
            body: JSON.stringify({
                name,
                email,
                selectedOption,
                message,
             }),
             headers: {
                'content-type': 'application/json',
             },

         })

        } catch (err:any) {
            console.error('Err', err)
        }
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
      };

  return (
  <>
          <form onSubmit={onSubmit} className=" devis__form opacity-0 col-span-3 max-w-2xl">
            <div className="border-t border-gray-300 p-6" />

            <div className="mb-4">
              <div className='flex flex-row gap-10 items-center text-white text-xl font-bold mb-2'>
                <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">01</span>
                <label className="" htmlFor="name">
                  Le nom de votre entreprise 
                </label>
              </div>
              <input
                className="shadow appearance-none border rounded w-full text-xl pl-16 pb-8 text-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-transparent placeholder-gray-700"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Votre nom *"
                required
                style={{borderColor: 'transparent'}}
              />
            </div>
            <div className="border-t border-gray-300 p-6" />

            <div className="mb-4">
              <div className='flex flex-row gap-10 items-center text-white text-xl font-bold mb-2'>
                <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">02</span>
                <label className="" htmlFor="email">
                  Votre e-mail
                </label>
              </div>
              <input
                className="shadow appearance-none border rounded w-full text-xl pl-16 pb-8 text-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-transparent placeholder-gray-700"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Votre e-mail *"
                required
                style={{borderColor: 'transparent'}}
              />
            </div>
            <div className="border-t border-gray-300 p-6" />

            <div className="mb-4">
              <div className='flex flex-row gap-10 items-center text-white text-xl font-bold mb-2'>
                <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">03</span>
                <label className="" htmlFor="selectService">
                  Choisissez une offre
                </label>
              </div>
              <select
                className="shadow appearance-none border rounded w-full text-xl py-2 pl-16 text-gray-400 leading-tight focus:outline-none focus:shadow-outline bg-transparent placeholder-gray-700"
                value={selectedOption}
                onChange={handleSelectChange}
                required
                style={{borderColor: 'transparent'}}
              >
                <option className="text-gray-700" value="">Choisissez une offre *</option>
                <option value="site-vitrine">Site vitrine</option>
                <option value="site-e-commerce">Site e-commerce</option>
                <option value="autre-demande">Autre demande</option>
              </select>
            </div>
            <div className="border-t border-gray-300 p-6" />

            <div className="mb-4">
              <div className='flex flex-row gap-10 items-center text-white text-xl font-bold mb-2'>
                <span className="bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text not-italic text-transparent">04</span>
                <label className="" htmlFor="message">
                  Votre message 
                </label>
              </div>
              <textarea
                className="shadow appearance-none border rounded w-full text-xl py-2 pl-16 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent placeholder-gray-700"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                rows={4}
                placeholder="Votre message *"
                required
                style={{borderColor: 'transparent'}}
              ></textarea>
            </div>
            <div className="border-t border-gray-300 py-8" />
       <div className='flex flex-row-reverse'>
       <button
              type="submit"
              className='border py-2 px-3 rounded-3xl text-xl font-bold'
            >
              Envoyer
            </button>
       </div>
</form>
  </>
  )
}
