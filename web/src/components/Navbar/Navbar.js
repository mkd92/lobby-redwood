import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">Lobby</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            sx={{
              color: 'white',
              borderColor: 'white',
              display: 'block',
              mx: '.5rem',
            }}
            variant="outlined"
          >
            Login
          </Button>
          <Button
            sx={{
              color: 'white',
              borderColor: 'white',
              display: 'block',
              mx: '.5rem',
            }}
            variant="outlined"
          >
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
