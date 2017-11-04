const sharp = require('sharp')
const fs = require('fs')

// redimensionar imagem  300x300 
sharp('./img/star-wars-rebels2-1200x675.jpg')
    .resize(300, 300)
    .max()
    .toFile('./img/imagem-resize-300x300.jpg', function(err, info) {
        if (err) {
            console.log(err)
        }

        console.log(info)
    })

// recorta imagem é converte em png
const borda = new Buffer(
    '<svg><rect x="0" y="0" width="200" height="200" rx="10" ry="10"/></svg>'
)

const arredondado = sharp()
    .resize(300, 300)
    .overlayWith(borda, { cutout: true })
    .png()

const img = fs.createReadStream('./img/code-javascript.jpg')

img.pipe(arredondado).pipe(fs.createWriteStream('./img/code-javascript-arredondado-200x200.png'))


// recorta em circulo 
const circulo = new Buffer(
    '<svg width="300" height="300"><circle cx="150" cy="150" r="150"/></svg>'
)

const circular = sharp()
    .resize(300, 300)
    .overlayWith(circulo, { cutout: true })
    .png()

const imgA = fs.createReadStream('./img/code-javascript.jpg')

imgA.pipe(circular).pipe(fs.createWriteStream('./img/code-javascript-circular-300x300.png'))