import React, { useContext, useState } from 'react'
import SearchRouteForm from '../components/SearchRouteForm'
import { RouteFormContext } from '..';
import CardList from '../components/CardList'
import { useTranslation } from "react-i18next";

function BaseSection() {
    const { t } = useTranslation();
    const {routeForm, setRouteForm } = useContext(RouteFormContext)

    const [departureCity, setDepartureCity] = useState(routeForm.departure)
    const [arrivalCity, setArrivalCity] = useState(routeForm.arrival)

    const onSearchFormSubmit = (e) => {
        e.preventDefault()
        setDepartureCity(routeForm.departure)
        setArrivalCity(routeForm.arrival)
    }

    const onReset = () => {
        setRouteForm({
            departure: '',
            arrival: ''
        })
        setDepartureCity('')
        setArrivalCity('')
    }

    const onReverse = () => {
        const newDeparture = routeForm.arrival
        const newArrival = routeForm.departure
        setRouteForm({
            departure: newDeparture,
            arrival: newArrival
        })
    }

    return (
        <div>
            <p className='font-body text-[24px] font-bold mb-7'>{t('shipList-title')}</p>
            <div className='mb-8'>
                <p className='font-body mb-1'>{t('shipList-form-route')}</p>
                <SearchRouteForm onSubmit={onSearchFormSubmit} onReset={onReset} onReverse={onReverse} />
            </div>
            <CardList departureCity={departureCity} arrivalCity={arrivalCity} />
        </div>
    )
}

export default BaseSection