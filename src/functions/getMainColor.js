import analyze from 'rgbaster'

const getMainColor = async (img) => analyze(img,
    {
        ignore: [
            'rgb(0,0,0)',
            'rgb(255,255,255)',
            'rgb(1,1,1)'
        ]
    })
    .then(item => item[0])

export {getMainColor}
