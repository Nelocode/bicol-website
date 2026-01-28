'use client'

import { useState, useRef, useEffect } from 'react'
import { createLead } from '@/app/actions'
import { Send, User, Bot, Loader2 } from 'lucide-react'

type Message = {
    role: 'bot' | 'user'
    text: string
}

type FormData = {
    name: string
    email: string
    phone: string
    message: string
}

export default function ConversationalForm() {
    const [messages, setMessages] = useState<Message[]>([
        { role: 'bot', text: '¡Hola! Bienvenido a BICOL. ¿Cuál es tu nombre?' }
    ])
    const [input, setInput] = useState('')
    const [step, setStep] = useState(0) // 0: Name, 1: Email, 2: Phone, 3: Message, 4: Done
    const [data, setData] = useState<FormData>({ name: '', email: '', phone: '', message: '' })
    const [loading, setLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return

        // Add user message
        const newMessages = [...messages, { role: 'user', text: input } as Message]
        setMessages(newMessages)
        const currentInput = input
        setInput('')
        setLoading(true)

        // Simulate thinking delay
        await new Promise(r => setTimeout(r, 600))

        let nextStep = step + 1
        let botResponse = ''

        if (step === 0) {
            setData({ ...data, name: currentInput })
            botResponse = `Mucho gusto, ${currentInput}. ¿Cuál es tu correo electrónico corporativo?`
        } else if (step === 1) {
            setData({ ...data, email: currentInput })
            botResponse = 'Perfecto. ¿A qué número de celular podemos contactarte?'
        } else if (step === 2) {
            setData({ ...data, phone: currentInput })
            botResponse = 'Entendido. Cuéntanos brevemente cómo podemos ayudar a tu empresa:'
        } else if (step === 3) {
            const finalData = { ...data, message: currentInput }
            setData(finalData)

            // Submit to server
            const formData = new FormData()
            formData.append('name', finalData.name)
            formData.append('email', finalData.email)
            formData.append('phone', finalData.phone)
            formData.append('message', finalData.message)

            await createLead(formData)

            botResponse = '¡Gracias! Hemos recibido tu información. Un consultor se contactará contigo pronto.'
            nextStep = 4 // Done
        }

        setMessages([...newMessages, { role: 'bot', text: botResponse }])
        setStep(nextStep)
        setLoading(false)
    }

    return (
        <div className="glass-panel" style={{
            height: '500px',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '500px',
            margin: '0 auto',
            overflow: 'hidden',
            background: 'white', // Ensure background is white
            boxShadow: 'none', // Reset redundant shadow if wrapper has it
            border: 'none',
        }}>
            <div className="header" style={{ padding: '1rem', borderBottom: '1px solid #eee', background: '#f9fafb' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#333' }}>
                    <Bot size={20} color="var(--primary)" />
                    Asistente BICOL
                </h3>
            </div>

            <div ref={scrollRef} style={{ flex: 1, padding: '1rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{
                        alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                        maxWidth: '80%',
                        display: 'flex',
                        gap: '0.5rem'
                    }}>
                        {msg.role === 'bot' && <div style={{ minWidth: '30px', height: '30px', borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Bot size={16} color="#666" /></div>}

                        <div style={{
                            background: msg.role === 'user' ? 'var(--primary)' : '#f3f4f6',
                            color: msg.role === 'user' ? 'white' : '#1f2937',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            borderTopLeftRadius: msg.role === 'bot' ? '2px' : '12px',
                            borderTopRightRadius: msg.role === 'user' ? '2px' : '12px',
                            fontSize: '0.95rem',
                            lineHeight: 1.5,
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}>
                            {msg.text}
                        </div>

                        {msg.role === 'user' && <div style={{ minWidth: '30px', height: '30px', borderRadius: '50%', background: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><User size={16} color="#4b5563" /></div>}
                    </div>
                ))}
                {loading && (
                    <div style={{ alignSelf: 'flex-start', marginLeft: '3rem', color: '#9ca3af', fontSize: '0.85rem' }}>
                        <Loader2 className="animate-spin" size={14} /> Escribiendo...
                    </div>
                )}
            </div>

            {step < 4 && (
                <div style={{ padding: '1rem', borderTop: '1px solid #eee', display: 'flex', gap: '0.5rem', background: 'white' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Escribe tu respuesta..."
                        style={{
                            flex: 1,
                            background: '#f9fafb',
                            border: '1px solid #e5e7eb',
                            color: '#1f2937',
                            outline: 'none',
                            padding: '0.6rem 1rem',
                            borderRadius: '20px',
                            fontSize: '0.95rem'
                        }}
                        autoFocus
                    />
                    <button onClick={handleSend} className="btn-primary" style={{ padding: '0.5rem', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                        <Send size={18} color="white" />
                    </button>
                </div>
            )}
        </div>
    )
}
