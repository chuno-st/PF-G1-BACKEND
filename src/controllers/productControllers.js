const axios = require('axios');
const { Product } = require ('../db'); 

// --------------- << GET - a '/product/:{idProduct}' >> ---------------

// const getById = async (req, res, next) => {
//     const { id } = req.params
//     try {
//         // let idDbBreed;
//         if (validate(id)) {

//             // let idDbBreeds = await Breed.findAll()

//             let idDbBreeds = await Breed.findByPk(id, {
//                 include: [
//                     {
//                         model: Temperament,
//                         attributes: ['name'],
//                         through: {
//                             attributes: []
//                         }
//                     }
//                 ]
//             })
//             console.log('--------idDbBreeds--------', idDbBreeds)

//             let idDbBreed = {
//                 ID: idDbBreeds.ID,
//                 Imagen: `https://www.hogarmania.com/archivos/201108/mestizo1-XxXx80.jpg`,
//                 Nombre: idDbBreeds.name,
//                 Temperamento: idDbBreeds.temperaments.map(e => e.name + ', '),
//                 Altura: idDbBreeds.height,
//                 Peso: idDbBreeds.weight,
//                 Años: idDbBreeds.life_span
//             };
//             console.log('--------idDbBreed--------', idDbBreed)

//             if (idDbBreed) {
//                 res.send(idDbBreed)
//             } else {
//                 res.send('No existe raza para el Id ingresado')
//             }
//             // console.log('--------breedByIdDb--------', breedByIdDb)
//         } else {
//             let breedById = (await axios(`${GET_BREEDS}`)).data.map(e => ({ ID: e.id, Imagen: e.image.url, Nombre: e.name, Temperamento: e.temperament, Altura: e.height.metric, Peso: e.weight.metric, Años: e.life_span }));
//             // console.log('-------breeById-------', breedById)

//             let idBreed = breedById.filter((obj) => { if (obj.ID == id) return true });
//             // console.log('-------idBreed-------', idBreed)
//             if (idBreed) {
//                 res.send(idBreed[0])
//                 console.log('--------idBreed--------', idBreed[0])

//             } else {
//                 res.send('No existe raza para el Id ingresado')
//             }
//         }
//     } catch (error) {
//         next(error)
//     }
// };

// // --------------- << GET - a '/product?name="...":' >> ---------------

// const getBreeds = async (req, res, next) => {
//     const { name } = req.query

//     if (!name) {
//         try {
//             let breedsApi = (await axios(`${GET_BREEDS}`)).data.map(e => ({ ID: e.id, Imagen: e.image, Nombre: e.name, Temperamento: e.temperament, Peso: e.weight.metric, Origen: e.origin }))

//             let breedsDB = await Breed.findAll({
//                 include: [
//                     {
//                         model: Temperament,
//                         attributes: ['name'],
//                         through: {
//                             attributes: []
//                         }
//                     }
//                 ]
//             });
//             console.log('--------breedsDb--------', breedsDB)


//             let formatBreedDB = await breedsDB.map(e => (
//                 {
//                     ID: e.ID,
//                     Imagen: e.name,
//                     Nombre: e.name,
//                     Temperamento: e.temperaments.map(e => e.name + ', ' ), //+ ', '
//                     // Altura: e.height,
//                     Peso: e.weight,
//                     // Años: e.life_span,
//                     createdInDb: e.createdInDb
//                 }
//             ));


//             let allBreeds = breedsApi.concat(formatBreedDB)

//             console.log('--------formatBreedDb--------', formatBreedDB)

//             res.json(allBreeds)
//             // res.json(breedsApi)

//         } catch (error) {
//             next(error)
//         }
//     } else {
//         try {
//             let apiBreeds = (await axios(`${GET_BREEDS}search?q=${name}`)).data.map(e => ({ ID: e.id, Nombre: e.name }));

//             let nameApiBreed = apiBreeds.filter(b => (b.Nombre.toLowerCase().includes(name.toLowerCase())));

//             let dbBreeds = await Breed.findAll()
//             let dbBreed = dbBreeds.map(e => ({ ID: e.ID, Nombre: e.name }));
//             // console.log('--------dbBreeds--------', dbBreed)

//             let nameDbBreed = dbBreed.filter(b => (b.Nombre.toLowerCase().includes(name.toLowerCase())));
//             // console.log('--------nameDbBreeds--------', nameDbBreed)

//             let nameBreed = [...nameApiBreed, ...nameDbBreed];

//             res.json(nameBreed)
//             console.log('--------nameBreed--------', nameBreed)
//         } catch (error) {
//             if (error.response.status === 404) {
//                 res.send({ message: "La raza que intentas buscar no existe" })
//             } else {
//                 next(error)
//             }
//         }
//     }
// };

// // --------------- << POST - a '/product' >> ---------------
