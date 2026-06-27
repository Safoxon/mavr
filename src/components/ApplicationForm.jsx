import { useState } from 'react'
import { supabase } from '../lib/supabase'
import { sendTelegramNotification } from '../lib/telegram'
import './ApplicationForm.css'

const initialFormState = {
  ism: '',
  telefon: '',
  til: 'Ingliz tili',
  daraja: 'Bilmayman',
  vaqt: 'Ertalab (9:00-12:00)'
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState(initialFormState)
  const [status, setStatus] = useState('idle') // 'idle', 'loading', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      // 1. Insert into Supabase
      const { error } = await supabase
        .from('arizalar')
        .insert([formData])

      if (error) throw error

      // 2. Send Telegram Notification
      await sendTelegramNotification(formData)

      // 3. Handle Success
      setStatus('success')
      setFormData(initialFormState) // Reset form

    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="application-form-container">
      <form className="application-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="ism">To'liq ism-sharifingiz</label>
          <input 
            type="text" 
            id="ism" 
            name="ism" 
            value={formData.ism} 
            onChange={handleChange} 
            placeholder="Ism-familyangiz" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefon">Telefon raqamingiz</label>
          <input 
            type="tel" 
            id="telefon" 
            name="telefon" 
            value={formData.telefon} 
            onChange={handleChange} 
            placeholder="+998 90 123 45 67" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="til">Qaysi tilni o'rganmoqchisiz?</label>
          <select id="til" name="til" value={formData.til} onChange={handleChange}>
            <option value="Ingliz tili">Ingliz tili</option>
            <option value="Koreys tili">Koreys tili</option>
            <option value="Yapon tili">Yapon tili</option>
            <option value="Arab tili">Arab tili</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="daraja">Darajangiz qanday?</label>
          <select id="daraja" name="daraja" value={formData.daraja} onChange={handleChange}>
            <option value="Bilmayman">Bilmayman</option>
            <option value="Boshlang'ich (A1-A2)">Boshlang'ich (A1-A2)</option>
            <option value="O'rta (B1-B2)">O'rta (B1-B2)</option>
            <option value="Yuqori (C1-C2)">Yuqori (C1-C2)</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="vaqt">Darslar uchun qaysi vaqt qulay?</label>
          <select id="vaqt" name="vaqt" value={formData.vaqt} onChange={handleChange}>
            <option value="Ertalab (9:00-12:00)">Ertalab (9:00-12:00)</option>
            <option value="Tushdan keyin (12:00-17:00)">Tushdan keyin (12:00-17:00)</option>
            <option value="Kechqurun (17:00-20:00)">Kechqurun (17:00-20:00)</option>
          </select>
        </div>

        {status === 'success' && (
          <div className="form-message success">
            Arizangiz qabul qilindi! Tez orada siz bilan bog'lanamiz.
          </div>
        )}
        
        {status === 'error' && (
          <div className="form-message error">
            Xatolik yuz berdi. Qaytadan urinib ko'ring.
          </div>
        )}

        <button 
          type="submit" 
          className="btn-primary form-submit" 
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Yuborilmoqda...' : 'Darsga yozilish'}
        </button>
      </form>
    </div>
  )
}
