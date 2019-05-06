import express from 'express'

const app = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env')
  )
  console.log('  Press CTRL-C to stop\n')
})
