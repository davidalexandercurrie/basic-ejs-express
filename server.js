let express = require('express');
let app = express();

app.set('view engine', 'ejs');

let projectsData = {
  myCoolProject: {
    title: 'My Cool Project',
    description: 'This is a cool project',
    image: 'https://placehold.it/200x200',
  },
  myOtherCoolProject: {
    title: 'My Other Cool Project',
    description: 'This is another cool project',
    image: 'https://placehold.it/200x200',
  },
};

// serve static files from the public folder on root path
app.use(express.static('public'));

// serve ejs template depending on id in path
app.get('/project/:id', (req, res) => {
  if (projectsData[req.params.id]) {
    res.render('project.ejs', projectsData[req.params.id]);
  } else {
    res.status(404).send('Project not found');
  }
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
