import React from 'react'
import useShipData from '../../hooks/useShipData'
import Card from './Card'
import { useTranslation } from "react-i18next";


function CardList({ departureCity, arrivalCity }) {
    const { t } = useTranslation()
    const [data] = useShipData(departureCity, arrivalCity)

    const renderContent = () => {
        if (data.length === 0) {
            return (
                <div className='my-12 w-full h-full flex flex-col gap-3 items-center justify-center'>
                    <img className='w-[100px] lg:w-[120px]' src='/no-result.png' />
                    <p className='font-body text-center'>{t('shipList-card-sorry')}</p>
                </div>
            )
        } else {
            return renderCards()
        }
    }

    const renderCards = () => {
        return (
            data.map((shipData, index) => (
                <Card key={index} data={shipData} />
            ))
        )
    }

    return (
        <div className='flex gap-5 flex-wrap'>
            {renderContent()}
        </div>
    )
}

export default CardList