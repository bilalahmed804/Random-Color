const getColor = ()=>{
    const colorHex = document.querySelector('#color-hex')
    
    const randomColor = Math.ceil(Math.random()*4888);

    const colorNumber = "#" + randomColor.toString(16);
    
    colorHex.innerText = colorNumber;
    
    const getButton = document.querySelector('#btn-two')
    getButton.innerHTML = `<i class="fa-regular fa-copy"></i>`

    getButton.addEventListener("click",()=>{

        navigator.clipboard.writeText(colorNumber)

    getButton.innerHTML =`<i class="fa-solid fa-check"></i>`

       

    })

    document.body.style.backgroundColor = colorNumber;
}

document.querySelector('#btn').addEventListener('click',getColor)
getColor()


