import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from '@mui/material'

export function Home() {
  const bull = (
    <Box
      component='span'
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  )

  return (
    <Box m={1.7} sx={{ minWidth: 275, mx: 'auto' }}>
      <Card variant='outlined'>
        <>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color='text.secondary'
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant='h5' component='div'>
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color='text.secondary'>
              adjective
            </Typography>
            <Typography variant='body2'>
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Learn More</Button>
          </CardActions>
        </>
      </Card>
    </Box>
  )
}
