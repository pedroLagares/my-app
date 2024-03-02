import express, { json } from 'express';
import { model, connect } from 'mongoose';

const app = express();
app.use(json());
const port = 3000;

const Filme = model('Filme', {
  title: String,
  description: String,
  image_url: String,
  trailer_url: String,
});

app.post('/', async (req, res) => {
  const filme = new Filme({
    tilte: req.body.title,
    description: req.body.title,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  });

  await filme.save();
  return res.send(filme);
});

app.post('/saveText', async (req, res) => {
  const { text } = req.body;

  return res.send(text);
});

app.put('/:id', async (req, res) => {
  const filme = await Filme.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    description: req.body.description,
    image_url: req.body.image_url,
    trailer_url: req.body.trailer_url,
  }, {
    new: true,
  });

  return res.send(filme);
});

app.get('/filmes', async (req, res) => {
  const filmes = await Filme.find();

  return res.send(filmes);
});

app.delete('/:id', async (req, res) => {
  const filme = await Filme.findByIdAndDelete(req.params.id);
  return res.send(filme);
});

app.listen(port, () => {
  connect('mongodb+srv://m001-student:ZmzCvbiUyjqmr4f8@sandbox.n2l43.mongodb.net/?retryWrites=true&w=majority&appName=Sandbox');

  console.log('coleeeeeeeeeeeeeeeeee');
});
