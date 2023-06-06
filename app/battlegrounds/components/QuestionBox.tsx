import { Card, Stack } from '@mui/material'
import React from 'react'
import qbStyles from '../battlegrounds.module.css'

export default function QuestionBox() {
  return (
    <Stack width={'1100px'}>
      <Card className={qbStyles.question_box_inner}>
        <h1>Question</h1>
      </Card>
    </Stack>
  )
}
