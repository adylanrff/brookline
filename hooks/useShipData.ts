import { useEffect, useState } from "react";
import { ShipCard, ShipData } from "../types/ship";

export default function useShipData(departureCity: string, arrivalCity: string): [ShipCard[]] {
    const defaultData: ShipData[] = [
        {
            id: "L5HYXX8FKV",
            IMONumber: "L5HYXX8FKV",
            name: "Madrid Maersk",
            ownerName: "Scarlett Guerrero",
            waCP: 'https://wa.me/6285107927777',
            facebookCP: 'https://www.facebook.com/profile.php?id=100000604108506',
            imgUrl: "./ship1.jpeg",
            routes: [{
                id: 1,
                departureCity: 'Surabaya',
                departurePort: 'Tanjung Perak',
                arrivalCity: 'Bali',
                arrivalPort: 'Gili Manuk',
                schedule: [{
                    departureTime: '10.00',
                    arrivalTime: '10.45',
                    containerLeft: 5,
                    totalContainer: 120,
                    containerFilled: 115
                }, {
                    departureTime: '15.15',
                    arrivalTime: '16.00',
                    containerLeft: 1,
                    totalContainer: 120,
                    containerFilled: 119
                }]
            }, {
                id: 2,
                departureCity: 'Bali',
                departurePort: 'Gili Manuk',
                arrivalCity: 'Jakarta',
                arrivalPort: 'Sunda Kelapa',
                schedule: [{
                    departureTime: '11.10',
                    arrivalTime: '11.55',
                    containerLeft: 12,
                    totalContainer: 120,
                    containerFilled: 108
                }]
            }],
        },
        {
            id: "QL3OB6O491",
            IMONumber: "QL3OB6O491",
            name: "MSC Diana",
            ownerName: "Diamond Townsend",
            imgUrl: "./ship2.jpeg",
            waCP: 'https://wa.me/6285107927777',
            facebookCP: 'https://www.facebook.com/profile.php?id=100000604108506',
            routes: [{
                id: 1,
                departureCity: 'Surabaya',
                departurePort: 'Tanjung Perak',
                arrivalCity: 'Jakarta',
                arrivalPort: 'Tanjong Priok',
                schedule: [{
                    departureTime: '12.00',
                    arrivalTime: '12.45',
                    containerLeft: 23,
                    totalContainer: 80,
                    containerFilled: 57
                }, {
                    departureTime: '14.15',
                    arrivalTime: '15.00',
                    containerLeft: 32,
                    totalContainer: 80,
                    containerFilled: 48
                }]
            }, {
                id: 2,
                departureCity: 'Jakarta',
                departurePort: 'Tanjong Priok',
                arrivalCity: 'Surabaya',
                arrivalPort: 'Tanjung Perak',
                schedule: [{
                    departureTime: '13.00',
                    arrivalTime: '13.45',
                    containerLeft: 19,
                    totalContainer: 80,
                    containerFilled: 61
                }, {
                    departureTime: '15.40',
                    arrivalTime: '16.25',
                    containerLeft: 21,
                    totalContainer: 80,
                    containerFilled: 59
                }]
            }],
        }, {
            id: "RMTINB811Z",
            IMONumber: "RMTINB811Z",
            name: "CMA CGM Antoine De Saint Exupery",
            ownerName: "Stephanie Reeves",
            imgUrl: "./ship3.jpeg",
            waCP: 'https://wa.me/6285107927777',
            facebookCP: 'https://www.facebook.com/profile.php?id=100000604108506',
            routes: [{
                id: 1,
                departureCity: 'Bali',
                departurePort: 'Gili Manuk',
                arrivalCity: 'Jakarta',
                arrivalPort: 'Sunda Kelapa',
                schedule: [{
                    departureTime: '09.10',
                    arrivalTime: '10.55',
                    containerLeft: 25,
                    totalContainer: 95,
                    containerFilled: 70
                }]
            }, {
                id: 2,
                departureCity: 'Jakarta',
                departurePort: 'Sunda Kelapa',
                arrivalCity: 'Bali',
                arrivalPort: 'Benoa',
                schedule: [{
                    departureTime: '11.00',
                    arrivalTime: '11.45',
                    containerLeft: 19,
                    totalContainer: 95,
                    containerFilled: 76
                }]
            }, {
                id: 3,
                departureCity: 'Bali',
                departurePort: 'Benoa',
                arrivalCity: 'Surabaya',
                arrivalPort: 'Tanjung Perak',
                schedule: [{
                    departureTime: '14.20',
                    arrivalTime: '15.05',
                    containerLeft: 33,
                    totalContainer: 95,
                    containerFilled: 62
                }]
            }],
        }, {
            id: "D2ZTBV56V6",
            IMONumber: "D2ZTBV56V6",
            name: "Ever Golden",
            ownerName: "Brandon Melendez",
            imgUrl: "./ship4.jpeg",
            waCP: 'https://wa.me/6285107927777',
            facebookCP: 'https://www.facebook.com/profile.php?id=100000604108506',
            routes: [{
                id: 1,
                departureCity: 'Bali',
                departurePort: 'Gili Manuk',
                arrivalCity: 'Surabaya',
                arrivalPort: 'Tanjung Perak',
                schedule: [{
                    departureTime: '16.10',
                    arrivalTime: '17.00',
                    containerLeft: 90,
                    totalContainer: 150,
                    containerFilled: 60
                }]
            }, {
                id: 2,
                departureCity: 'Surabaya',
                departurePort: 'Tanjung Perak',
                arrivalCity: 'Jakarta',
                arrivalPort: 'Tanjong Priok',
                schedule: [{
                    departureTime: '17.50',
                    arrivalTime: '18.20',
                    containerLeft: 65,
                    totalContainer: 150,
                    containerFilled: 85
                }]
            }, {
                id: 3,
                departureCity: 'Jakarta',
                departurePort: 'Tanjung Priok',
                arrivalCity: 'Bali',
                arrivalPort: 'Gili Manuk',
                schedule: [{
                    departureTime: '19.30',
                    arrivalTime: '20.15',
                    containerLeft: 86,
                    totalContainer: 150,
                    containerFilled: 64
                }]
            }],
        }, {
            id: "ZQ3V5VEC8H",
            IMONumber: "ZQ3V5VEC8H",
            name: "MOL Triumph",
            ownerName: "Alejandra Thornton",
            imgUrl: "./ship5.jpeg",
            waCP: 'https://wa.me/6285107927777',
            facebookCP: 'https://www.facebook.com/profile.php?id=100000604108506',
            routes: [{
                id: 1,
                departureCity: 'Surabaya',
                departurePort: 'Benoa',
                arrivalCity: 'Bali',
                arrivalPort: 'Gili Manuk',
                schedule: [{
                    departureTime: '09.15',
                    arrivalTime: '10.45',
                    containerLeft: 13,
                    totalContainer: 100,
                    containerFilled: 87
                },
                {
                    departureTime: '14.35',
                    arrivalTime: '15.10',
                    containerLeft: 19,
                    totalContainer: 100,
                    containerFilled: 81
                }]
            }, {
                id: 2,
                departureCity: 'Bali',
                departurePort: 'Benoa',
                arrivalCity: 'Jakarta',
                arrivalPort: 'Tanjong Priok',
                schedule: [{
                    departureTime: '12.20',
                    arrivalTime: '13.05',
                    containerLeft: 8,
                    totalContainer: 100,
                    containerFilled: 92
                }, {
                    departureTime: '16.40',
                    arrivalTime: '17.30',
                    containerLeft: 26,
                    totalContainer: 100,
                    containerFilled: 74
                }]
            }],
        }
    ]

    const [data, setData] = useState<ShipCard[]>();

    const mapData = (filtered, departure, arrival) => {
        let newFiltered: ShipData[] = []
        for (let i = 0; i < filtered.length; i++) {
            const routes = filtered[i].routes || []
            for (let j = 0; j < routes.length; j++) {
                const schedules = routes[j].schedule
                for (let k = 0; k < schedules.length; k++) {
                    const shipData = filtered[i]
                    const routeData = filtered[i].routes[j]
                    let isSameRoute
                    if (departure !== '' && arrival !== '') {
                        isSameRoute = routeData.departureCity === departure && routeData.arrivalCity === arrival
                    } else if (departure === '' && arrival !== '') {
                        isSameRoute = routeData.arrivalCity === arrival
                    } else if (departure !== '' && arrival === '') {
                        isSameRoute = routeData.departureCity === departure
                    }
                    const isNoFilter = departureCity === '' && arrivalCity === ''
                    const shouldBeFiltered = isSameRoute || isNoFilter
                    if (shouldBeFiltered) {
                        const scheduleData = filtered[i].routes[j].schedule[k]
                        const data: ShipCard = {
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
        let filteredShipData: ShipData[]
        if (departureCity === '' && arrivalCity === '') {
            filteredShipData = [...defaultData]
        } else {
            filteredShipData = defaultData.filter((ship) => {
                const routes = ship.routes
                const filteredRoutes = routes.filter((route) => (route.departureCity === departureCity || route.arrivalCity === arrivalCity))
                return filteredRoutes.length > 0
            })
        }
        mapData(filteredShipData, departureCity, arrivalCity)
    }, [departureCity, arrivalCity])

    return [data]
}
