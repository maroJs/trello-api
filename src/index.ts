import { App } from './app';

const app = new App();
app.express.listen(3000,  () => {
  console.log('Example app listening on port 3000!');
});
