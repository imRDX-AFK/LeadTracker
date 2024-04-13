let myLeads = []
const  inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalstorage = JSON.parse( localStorage.getItem('myLeads') )

//dummy pr

if(leadsFromLocalstorage){
    myLeads = leadsFromLocalstorage
    renderLeads()
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem('myLeads',JSON.stringify(myLeads))
    renderLeads()
})

deleteBtn.addEventListener("click",function(){
    localStorage.clear()
    myLeads = []
    ulEl.innerHTML = ``

})

function renderLeads(){
    let listItems = ""
    for(let i = 0; i<myLeads.length; i++){
        listItems += `
            <li>
                <a target='blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}