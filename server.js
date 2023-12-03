const express = require('express');
const multer = require('multer');
const cors = require('cors'); 
const app = express();
const port = 3001;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
  console.log(req.file);

 
  res.json({ message: 'Image uploaded successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

