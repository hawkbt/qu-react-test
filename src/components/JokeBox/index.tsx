'use client'
import { Card, CardContent, CardHeader, Collapse, Typography } from "@mui/material"
import { useState } from "react"

interface JokeBoxProps {
  joke: Joke
}

const JokeBox = (props: JokeBoxProps) => {
  const { joke } = props
  const [open, setOpen] = useState(false)
  const onHeaderClick = ( ) => setOpen( o => !o )

  return (
    <Card >
      <CardHeader subheader={joke.type} title={joke.setup} onClick={onHeaderClick} sx={{cursor: 'pointer'}}/>
      <Collapse in={open}>
        <CardContent>
          <Typography variant="body2">{joke.punchline}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default JokeBox