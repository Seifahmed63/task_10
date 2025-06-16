var Productnameinput=document.getElementById('Productname')
var Productsiteinput=document.getElementById('Productsite')
var productlist=[]
if(localStorage.getItem('productlist')){
    productlist=JSON.parse(localStorage.getItem('productlist'))
    displayproduct()}
function createproduct(){
var product={
    name:Productnameinput.value ,
    site:Productsiteinput.value
}
productlist.push(product)
localStorage.setItem('productlist',JSON.stringify(productlist))
console.log(productlist);
displayproduct()
clearform()
}



function displayproduct(){
    var cartona=''
    for(var i=0;i<productlist.length;i++){
    cartona+=`   <tr>
            <td>${i+1}</td>
            <td>${productlist[i].name}</td>
            <td>${productlist[i].site}</td>
            <td onclick="deleteproduct(${i})"> <button class="btn btn-danger">delete</button></td>
        </tr>`
    }
    document.getElementById('data').innerHTML=cartona
 }
    function clearform(){
        Productnameinput.value=null
        Productsiteinput.value=null
}
        function deleteproduct(index){
            productlist.splice(index,1)
            localStorage.setItem('productlist',JSON.stringify(productlist))
            displayproduct()
            console.log(productlist);
 }


 function validateallproduct(element){
    console.log(element.id);
    
    var regex={
      Productname:/^[A-Z][a-z]{3,5}$/,
      Productsite:/(?:http[s]?:\/\/.)?(?:www\.)?[-a-zA-Z0-9@%._\+~#=]{2,256}\.[a-z]{2,6}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/,
      
    }
  if( regex[element.id].test(element.value)==true){
  
    console.log('match');
    element.classList.add('is-valid')
    element.classList.remove('is-invalid')
    element.nextElementSibling.classList.add('d-none')
  }
  else{
    console.log('no match');
    element.classList.add('is-invalid')
    element.classList.remove('is-valid')
  
    console.log( element.nextElementSibling);
    element.nextElementSibling.classList.remove('d-none')
  }
  
  }