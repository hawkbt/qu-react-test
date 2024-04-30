import { Box, Grid, Skeleton } from '@mui/material'
import React from 'react'

export default function LoadingJokes() {
  return  (
    <Box>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skeleton variant="rectangular" width={530} height={88} />
        </Grid>
      </Grid>
    </Box>
  )
}