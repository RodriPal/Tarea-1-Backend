const getFibNumbers = (req, res) => {
    let fibSerie = [0,1];
    
    let limitNumber = req.query.number

    if (!limitNumber) {
        limitNumber = 20
    }
    else if(isNaN(limitNumber)) {
        res.status(400).send("Solo numeros")
    }

    for(let i = 2; i < limitNumber; i++){
        fibSerie[i] = fibSerie[i - 1] + fibSerie[i - 2]
    }
    
    console.log(fibSerie) 
    res.send(fibSerie)
}



module.exports = {
    getFibNumbers,
}