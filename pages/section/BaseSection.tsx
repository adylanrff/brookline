import React, { useContext, useState } from 'react'
import SearchRouteForm from '../components/SearchRouteForm'
import { RouteFormContext } from '..';
import CardList from '../components/CardList'
import { useTranslation } from "react-i18next";
import useShipData from '../../hooks/useShipData';

function BaseSection() {
    const { t } = useTranslation();
    const { routeForm, setRouteForm, sortBy, setSortBy } = useContext(RouteFormContext)

    const [departureCity, setDepartureCity] = useState(routeForm.departure)
    const [arrivalCity, setArrivalCity] = useState(routeForm.arrival)
    const [data, setData] = useShipData(departureCity, arrivalCity, sortBy)

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

    const handleSortByOnChange = (e) => {
        const { value } = e.target
        setSortBy(value)

        const compareAsc = ( a, b ) => {
            if ( a[value] < b[value] ){
              return -1;
            }
            if ( a[value] > b[value] ){
              return 1;
            }
            return 0;
        }

        const compareDesc = ( a, b ) => {
            return b[value]-a[value]
        }
        
        let sortedData
        if (value === 'departureTime') {
            sortedData = [...data].sort(compareAsc)
        } else {
            sortedData = [...data].sort(compareDesc)
        }
        setData(sortedData)
    }

    return (
        <div>
            <p className='font-body text-[24px] font-bold mb-7'>{t('shipList-title')}</p>
            <div className='mb-5'>
                <p className='font-body mb-1'>{t('shipList-form-route')}</p>
                <SearchRouteForm onSubmit={onSearchFormSubmit} onReset={onReset} onReverse={onReverse} />
                <div className='flex xs:gap-1 gap-3 mt-10 items-center xs:flex-col flex-row text-left'>
                    <span className='font-body xs:w-full md:w-fit'>{t('shipList-form-sortBy')}:</span>
                    <select value={sortBy} onChange={handleSortByOnChange} className='px-2 py-1 font-body border-[1.5px] border-slate-400 rounded-lg xs:w-full w-fit md:w-fit hover:cursor-pointer bg-white'>
                        <option value={'departureTime'}>{t('shipList-form-sortByDeparture')}</option>
                        <option value={'containerLeft'}>{t('shipList-form-sortByContainer')}</option>
                    </select>
                </div>
            </div>
            <CardList data={data} />
        </div>
    )
}

export default BaseSection