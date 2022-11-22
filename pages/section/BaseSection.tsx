import React, { useEffect, useState } from 'react'
import SearchRouteForm from '../components/SearchRouteForm'
import CardList from '../components/CardList'

function BaseSection() {
    const [form, setForm] = useState({
        departure: '',
        arrival: ''
    })
    const [departureCity, setDepartureCity] = useState('')
    const [arrivalCity, setArrivalCity] = useState('')

    const onSelectChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }

    const onSearchFormSubmit = (e) => {
        e.preventDefault()
        setDepartureCity(form.departure)
        setArrivalCity(form.arrival)
    }

    const onReset = () => {
        setForm({
            departure: '',
            arrival: ''
        })
        setDepartureCity('')
        setArrivalCity('')
    }

    return (
        <div>
            <p className='font-body text-[24px] font-bold mb-7'>Manajemen Kontainer Kapal</p>
            <div className='mb-8'>
                <p className='font-body mb-1'>Rute</p>
                <SearchRouteForm cities={form} onSelectChange={onSelectChange} onSubmit={onSearchFormSubmit} onReset={onReset} />
            </div>
            <CardList departureCity={departureCity} arrivalCity={arrivalCity} />
        </div>
    )
}

export default BaseSection