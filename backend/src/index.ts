import app from './server';

app.listen(process.env.PORT, () => {
  console.log('App listening on port ' + process.env.PORT);
});