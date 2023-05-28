'use client'
import { Stack } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography'

export default function HomeScreen() {
  return (
    <div className='HomeScreen'>
      <Stack className='outer-container' justifyContent={'center'} alignItems={'center'} border={1} minHeight={'100vh'}>
        <Typography variant='h3' fontFamily={'Orbitron'}>Welcome to buggy trials</Typography>
      </Stack>
    </div>
  )
}
