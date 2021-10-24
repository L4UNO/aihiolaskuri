var tulos = document.getElementById('tulos')
var ala
var paino

function tyhjenna() {
    document.getElementById('len').value = ""
    document.getElementById('w1').value = ""
    document.getElementById('w2').value = ""
    document.getElementById('tulos').innerHTML = ""
    document.getElementById('batch').innerHTML = ""
}

function tulosta() {
    material = document.getElementById("material-selection").value
    form = document.getElementById('material-form').value
    len = document.getElementById('len').value // pituus
    w1 = document.getElementById('w1').value // 1-sivu tai ulkohalkaisija
    w2 = document.getElementById('w2').value // 2-sivu tai sisähalkaisija
    qty = document.getElementById('qty').value

    if (form == "ptanko") {
        r = w1 / 2 //säde
        ala = 3.1415 * r * r
    } else if (form == "ntanko") {
        ala = (w1 * w2)
        console.log(ala)
    } else if (form == "putki") {
        reika_ala = 3.1415 * (w2 / 2) * (w2 / 2)
        ala = (3.1415 * (w1 / 2) * (w1 / 2)) - reika_ala
    }

    ala /= 100         // muutetaan neliömillit neliösenteiksi

    if (material == "steel") {
        // paino = tiheys * tilavuus
        paino = (7.85 * ala * (len / 10)) / 1000               // g -> kg
    } else if (material == "alu") {
        // paino = tiheys * tilavuus
        paino = (2.7 * ala * (len / 10)) / 1000
    }

    //console.log(ala)

    tulos.innerHTML = "Yhden aihion paino: " + paino.toFixed(2) + "kg"

    if (qty > "1") {
        kok_paino = paino * qty
        document.getElementById('batch').innerHTML = "Koko määrän paino: " + kok_paino.toFixed(2) + "kg"
    } else {
        document.getElementById('batch').innerHTML = ""
    }
    

}