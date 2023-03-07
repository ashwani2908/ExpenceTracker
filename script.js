const listOfexpence = document.querySelector('.listOfExpence');
const expenceAmt = document.querySelector('#exp-amt');
const expenceDesc = document.querySelector('#expence-desc');
const expenceCat = document.querySelector('#category');
const submitBtn = document.querySelector('#submit-btn');



submitBtn.addEventListener('click',() => {
    let id= genenrateID();
    // localStorange
    const expAmt = expenceAmt.value;
    const expDesc = expenceDesc.value
    const expCat = expenceCat.value

    const expences = {
        expAmt,
        expDesc,
        expCat
    }
    localStorage.setItem(id,JSON.stringify(expences));

    //create li to show
    const li = document.createElement('li');
    li.textContent = expences.expAmt + ' - ' + expences.expDesc + ' - ' + expences.expCat ;
    
    //delete button
    const delBtn = document.createElement('input');
    delBtn.type = 'button';
    delBtn.value = 'Delete';
    delBtn.onclick = () =>{
        localStorage.removeItem(id);
        listOfexpence.removeChild(li);
        
    }
    li.appendChild(delBtn);

    //edit function
    const editBtn = document.createElement('input');
    editBtn.type = 'button';
    editBtn.value = 'Edit';
    editBtn.onclick = () => {
        expenceAmt.value = expences.expAmt;
        expenceCat.value = expences.expCat;
        expenceDesc.value = expences.expDesc;
        localStorage.removeItem(id);
        listOfexpence.removeChild(li);
    }
    li.appendChild(editBtn);
    
    
    
    
    
    listOfexpence.appendChild(li);
    
})

function genenrateID() {
    return Math.floor(Math.random() * 100000000);
}





console.log(listOfexpence);