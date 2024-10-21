


const hamburgerMenu = document.getElementById('hamburgerMenu');
const navBarContainer = document.getElementById("navBarContainer")
const navX = document.getElementById('x-div')


hamburgerMenu.addEventListener('click', () => {
    navBarContainer.classList.remove('hidden'); 
    
    hamburgerMenu.classList.add('hidden');      
})

navX.addEventListener('click', () => {
    navBarContainer.classList.add('hidden');   
    

    hamburgerMenu.classList.remove('hidden');  
     
})