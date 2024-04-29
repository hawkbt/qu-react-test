'use server'
import globals from '@/globals'
import tags from '@/globals/tagsCollection'

interface GetJokesProps {
  type?: Joke['type'] | ''
}

export async function getJokes({type = ''}: GetJokesProps) {
  try {
    const t = type !== '' ? `/${type}`: ''
    const res = await fetch(`${globals.apiUrl}${t}/ten`, {next: {tags: [tags.jokes]}})
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
    const response = await res.json()
    return response
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}




