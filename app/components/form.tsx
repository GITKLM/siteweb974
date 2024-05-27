"use client"
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xpzvebrp");
  if (state.succeeded) {
      return <p className='pt-40 col-span-3 max-w-2xl text-3xl leading-10'>Merci pour votre message, nous nous engageons à vous répondre dans les plus brefs délais !</p>;
  }

  return (

      <form onSubmit={handleSubmit} className="devis__form opacity-0 col-span-3 max-w-2xl">
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
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom *"
            required
            style={{borderColor: 'transparent'}}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
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
            type="email"
            id="email"
            name="email"
            placeholder="Votre e-mail *"
            required
            style={{borderColor: 'transparent'}}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
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
            required
            id="select"
            name="select"
            style={{borderColor: 'transparent'}}
          >
            <option className="text-gray-700" value="">Choisissez une offre *</option>
            <option value="site-vitrine">Site vitrine</option>
            <option value="site-e-commerce">Site e-commerce</option>
            <option value="autre-demande">Autre demande</option>
          </select>
          <ValidationError 
            prefix="Select" 
            field="select"
            errors={state.errors}
          />
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
            rows={4}
            placeholder="Votre message *"
            required
            style={{borderColor: 'transparent'}}
            id="message"
            name="message"
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <div className="border-t border-gray-300 py-8" />
        <div className='flex flex-row-reverse'>
          <button
            type="submit"
            disabled={state.submitting}
            className='border py-2 px-3 rounded-3xl text-xl font-bold'
          >
            Envoyer
          </button>
        </div>
      </form>
  );
}
