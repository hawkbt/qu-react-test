import { Button, Stack } from '@mui/material'
import Link from 'next/link'


const SortsContainer = () => {
  return (
    <Stack flexWrap='nowrap' flexDirection='row' justifyContent='center' alignItems='center' gap={4} my={2}>
      <Link href={{pathname: '/', query: { type: 'programming' }}}> 
        <Button variant='outlined'>
          Programming Jokes 
        </Button>
      </Link>
      <Link href={{pathname: '/', query: { type: 'dad' }}}> 
        <Button variant='outlined'>
          Dad Jokes 
        </Button>
      </Link>
      <Link href={{pathname: '/', query: { type: 'general' }}}> 
        <Button variant='outlined'>
          General Jokes 
        </Button>
      </Link>
      <Link href={{pathname: '/', query: { type: 'knock-knock' }}}> 
        <Button variant='outlined'>
          Knock-Knock Jokes 
        </Button>
      </Link>
    </Stack>
  )
}

export default SortsContainer