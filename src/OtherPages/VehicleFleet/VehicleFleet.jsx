import React from 'react'
import FleetCom1 from '../../components/VehicleFleetComs/FleetCom1/FleetCom1'
import"./VehicleFleet.css"
import FleetCom2 from '../../components/VehicleFleetComs/FleetCom2/FleetCom2'
import FleetCom3 from '../../components/VehicleFleetComs/FleetCom3/FleetCom3'

const VehicleFleet = () => {
    return (
        <div>
            <FleetCom1/>
            <FleetCom2/>
            <FleetCom3/>
        </div>
    )
}

export default VehicleFleet