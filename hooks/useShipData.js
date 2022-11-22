import { useEffect, useState } from "react";

export default function useShipData(departureCity, arrivalCity) {
    const defaultData = [
        {
            id: "UA145009BS",
            IMONumber: "UA-145009BS",
            name: "Sri Multan Ship",
            ownerName: "Hafizh Thariq Afif",
            waCP: 'https://wa.me/6285107927777',
            facebookCP: 'https://www.facebook.com/profile.php?id=100000604108506',
            imgUrl: "./ship.png",
            routes: [{
                id: 1,
                departureCity: 'Surabaya',
                departurePort: 'Pelabuhan Tanjung Perak',
                arrivalCity: 'Bali',
                arrivalPort: 'Pelabuhan Gili Manuk',
                schedule: [{
                    departureTime: '10.00',
                    arrivalTime: '11.00',
                    containerLeft: 5,
                    totalContainer: 20,
                    containerFilled: 15
                }, {
                    departureTime: '11.00',
                    arrivalTime: '12.00',
                    containerLeft: 1,
                    totalContainer: 20,
                    containerFilled: 19
                }, {
                    departureTime: '11.00',
                    arrivalTime: '12.00',
                    containerLeft: 3,
                    totalContainer: 20,
                    containerFilled: 17
                }]
            }],
        },
        {
            id: "UA14000BS",
            IMONumber: "UA-140009BS",
            name: "Soerabaja Ship",
            ownerName: "Azka Nabilah Mumtaz",
            imgUrl: "./ship.png",
            waCP: 'https://wa.me/6281234561789',
            facebookCP: 'https://www.facebook.com/azka.n.mumtaz',
            routes: [{
                id: 1,
                departureCity: 'Surabaya',
                departurePort: 'Pelabuhan Tanjung Perak',
                arrivalCity: 'Depok',
                arrivalPort: 'Pelabuhan ABCDE',
                schedule: [{
                    departureTime: '10.00',
                    arrivalTime: '11.00',
                    containerLeft: 5,
                    totalContainer: 20,
                    containerFilled: 15
                }, {
                    departureTime: '11.00',
                    arrivalTime: '12.00',
                    containerLeft: 1,
                    totalContainer: 20,
                    containerFilled: 19
                }, {
                    departureTime: '11.00',
                    arrivalTime: '12.00',
                    containerLeft: 3,
                    totalContainer: 20,
                    containerFilled: 17
                }]
            }],
        }
    ]

    const [data, setData] = useState([]);

    const mapData = (filtered, departure, arrival) => {
        let newFiltered = []
        for (let i=0; i < filtered.length; i++) {
            const routes = filtered[i].routes || []
            for (let j=0; j < routes.length; j++) {
                const schedules = routes[j].schedule
                for (let k=0; k < schedules.length; k++) {
                    const shipData = filtered[i]
                    const routeData = filtered[i].routes[j]
                    const isSameRoute = routeData.departureCity === departure && routeData.arrivalCity === arrival
                    const isNoFilter = departureCity === '' || arrivalCity === ''
                    const shouldBeFiltered = isSameRoute || isNoFilter
                    if (shouldBeFiltered) {
                        const scheduleData = filtered[i].routes[j].schedule[k]
                        const data = {
                            id: shipData.id,
                            IMONumber: shipData.IMONumber,
                            name: shipData.name,
                            ownerName: shipData.ownerName,
                            waCP: shipData.waCP,
                            facebookCP: shipData.facebookCP,
                            imgUrl: shipData.imgUrl,
                            departureCity: routeData.departureCity,
                            departurePort: routeData.departurePort,
                            arrivalCity: routeData.arrivalCity,
                            arrivalPort: routeData.arrivalPort,
                            departureTime: scheduleData.departureTime,
                            arrivalTime: scheduleData.arrivalTime,
                            containerLeft: scheduleData.containerLeft,
                            totalContainer: scheduleData.totalContainer,
                            containerFilled: scheduleData.containerFilled
                        }
                        newFiltered.push(data)
                    }
                }
            }
        }
        setData(newFiltered)
    }

    // TODO: fetch data
    useEffect(() => {
        let filteredShipData
        if (departureCity === '' || arrivalCity === '') {
            filteredShipData = [...defaultData]
        } else {
            filteredShipData = defaultData.filter((ship) => {
                const routes = ship.routes
                const filteredRoutes = routes.filter((route) => (route.departureCity === departureCity && route.arrivalCity === arrivalCity))
                return filteredRoutes.length > 0
            })
        }
        mapData(filteredShipData, departureCity, arrivalCity)
    }, [departureCity, arrivalCity])

    return [data]
}