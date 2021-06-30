import React from 'react'
import { ServerBox } from '../extras/sidebar/components'

export function DashboardPage({data} : {
    data: any
}) {
    return (
        <ServerBox data={data} />
    )
}
