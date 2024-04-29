'use client'
import { getJokes } from '@/app/actions'
import { Box, Button, Grid, Stack } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import JokeBox from '../JokeBox'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

const JokesContainer = () => {
  const [data, setData] = useState<Joke[]>([])
  const [page, setPage] = useState(1)
  const params = useSearchParams()

  useEffect(() => {
    const getData = async () => {
      const type = (params.get('type') || '') as Joke['type']
      const response = await getJokes({type})
      setData(response)
    }
    getData()
  }, [params])

  return (
    <Box>
      <Grid container spacing={4}>
        {data.map( (joke: Joke ) => 
          <Grid item xs={12} sm={6} key={joke.id}>
            <JokeBox joke={joke}/>
          </Grid>
        )}
      </Grid>
      <Stack flexWrap='nowrap' flexDirection='row' justifyContent='center' alignItems='center' gap={4} my={2}>
        <Button variant='contained' disabled={page === 1}> 
          <ChevronLeft/>
        </Button>
        <span>{page}</span>
        <Button variant='contained' disabled={page === 1}>
          <ChevronRight/>
        </Button>
      </Stack>
    </Box>
  )
}

export default JokesContainer