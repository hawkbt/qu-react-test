'use client'
import { getJokes } from '@/app/actions'
import { Box, Button, Grid, Stack } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import JokeBox from '../JokeBox'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'

const JokesContainer = () => {
  const [data, setData] = useState<Joke[]>([])
  const [dataHolder, setDataHolder] = useState<Joke[]>([])
  const [page, setPage] = useState(1)
  const params = useSearchParams()

  useEffect(() => {
    const getData = async () => {
      const type = (params.get('type') || '') as Joke['type']
      const response = await getJokes({type})
      setData(response)
      setDataHolder(response)
      setPage(1)
    }
    getData()
  }, [params])

  const onPageChange = async ( pageType: 'next' | 'prev') => {
    
    if (pageType === 'next'){
      const type = (params.get('type') || '') as Joke['type']
      const response = await getJokes({type})
      const uniqueResponse = response.filter( (x: Joke)  => !dataHolder.some( i => i.id === x.id))
      setData(uniqueResponse)
      setDataHolder( d => [...d, ...uniqueResponse])
    }else {
      const start = page === 1 ? 0 : (page - 2) * 10
      const end = page === 1 ? 10 : (page - 1) * 10
      const response = dataHolder.slice(start, end)
      setData([...response])
    }
    setPage( p => pageType === 'next' ? p + 1 : p - 1 === 0 ? 1 : p - 1)
  }

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
        <Button variant='contained' onClick={() => onPageChange('prev')} disabled={page === 1}> 
          <ChevronLeft/>
        </Button>
        <span>{page}</span>
        <Button variant='contained' onClick={() => onPageChange('next')} disabled={data.length < 10}>
          <ChevronRight/>
        </Button>
      </Stack>
    </Box>
  )
}

export default JokesContainer