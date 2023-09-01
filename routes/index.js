var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {



  const animals = [
    {
      name: "Bengal Tiger",
      description: "Bengal Tiger stripes are unique to each individual and act just like human fingerprints do. At approximately 4 inches long, the Bengal Tiger has the largest canine teeth of any living cat ",
      image: 'https://pench-national-park-booking.com/wp-content/uploads/2019/02/bheema-Tiger-1024x660.jpg'
    },

    {
      name: "Mugger Crocodiles",
      description: "The mugger crocodile is a medium-sized broad-snouted crocodile, also known as mugger and marsh crocodile. It is native to freshwater habitats from southern Iran ",
      image: 'https://www.drishtiias.com/images/uploads/1630494496_image4.jpg'
    },

    {
      name: "Indian Leopard",
      description: "The leopard is one of the five extant species in the genus Panthera. It has a pale yellowish to dark golden fur . Its body is slender and muscular reaching a length of 92–183 cm  ",
      image: 'https://a-z-animals.com/media/2022/10/shutterstock_351667181-2048x1449.jpg'
    },

    {
      name: "Asian Elephant",
      description: "The Asian elephant, also known as the Asiatic elephant, is the only living species of the genus Elephas and is distributed throughout the Indian subcontinent  ",
      image: 'https://www.thoughtco.com/thmb/9OiEsBHf5bvRMhSh6A5yM7p-Bc4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/167003501-56a0089e5f9b58eba4ae8f93.jpg'
    }

  ]


  res.render('index', { animals });
});

module.exports = router;
