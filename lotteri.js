
const antal_vinster = document.getElementById("antalvinster")
const svaretdiv = document.getElementById("svar_div")

const vinster = ["Klebins Mjölk", "Klebins Mössa", "Klebins skor", "Klebin"]


function buttonClick(e){
    

    let vinst = `<h3>Dina vinster</h3>`

    let antalv = parseInt(antal_vinster.value)

    console.log(`funkar e ${antalv}`)


    if (antalv < 4 && antalv > 0){
        alert("Slumpa lott")

        for (i=0; i<antalv; i++){
            let slumtal = Math.floor(Math.random() * antalv)

            let t_vinst = vinster[slumtal]
            vinst += `<p> ${t_vinst} </p>`
        }


        svaretdiv.innerHTML = vinst
    }
    else{

        alert("För många lotter eller 0 valda")
    }

}