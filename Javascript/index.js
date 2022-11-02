let arr=[
    new Person("Asad","Shaikh","Pune","India"),
    new Person("Tanzila","Khan","Karachi","Pakistan"),
    new Person("Jhon","Joen","New York","London"),
    new Person("Joe","flek","venice","Italy"),
    new Person("Lucas","Blanche","Venice","Germany"),
    ];
  
   function Person(FirstName,LastName,City,Country){
    this.FirstName=FirstName
    this.LastName=LastName
    this.City=City
    this.Country=Country
   }
  
   function refreshTable(){
    const table=document.getElementById("demo");
    let tableContent=`<tr>
          <th>SL.No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>Country</th>
      </tr>`
      for(let i=0;i<arr.length;i++){
      tableContent+=  `
      <tr>
      <td>${i+1}</td>
      <td>${arr[i].FirstName}</td>
      <td>${arr[i].LastName}</td>
      <td>${arr[i].City}</td>
      <td>${arr[i].Country}</td>
    </tr>
      `
      }
  table.innerHTML=tableContent;
   }
  
   document.getElementById("bottom").onclick=function(){
    let person=Validatedata()
    if(person!=null){
      arr.push(person)
      refreshTable()
    }
   };
   document.getElementById("top").onclick=function(){
    let person=Validatedata()
    if(person!=null){
      arr.unshift(person)
      refreshTable()
    }
  
  };
  
  function Validatedata(){
  let firstname=document.getElementById("firstname").value;
  let lastname=document.getElementById("lastname").value;
  let City=document.getElementById("City").value;
  let Country=document.getElementById("Country").value;
  if(firstname.length==0){
    alert("please Enter firstname")
    return null;
  }
  if(lastname.length==0){
    alert("please Enter lastname")
    return null;
  }
  if(City.length==0){
    alert("please Enter City")
    return null;
  }
  if(Country.length==0){
    alert("please Enter Country")
    return null;
  }
  return (new Person(firstname,lastname,City,Country))
  }
  refreshTable();
   
  