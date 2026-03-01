
let cards = document.getElementsByClassName('card');
for(let i = 0; i <= cards.length; i++){
   console.log(i);
   const Total = document.getElementById('Total-number');
Total.innerText = i;
const joblist = document.getElementById('av-jobs-list');
joblist.innerText = i;
};



////Tab section/////////
document.getElementById('tab-all').addEventListener('click',function(){
   const all = document.getElementsByClassName('card');
  for(let i = 0; i < all.length; i++){
   all[i].style.display = "block";
  }
   

})


// // /interview//
document.getElementById('tab-inter').addEventListener('click',function(){

  const show = document.getElementsByClassName('card');
  for(let i =0; i < show.length; i++){
      // console.log(i);
       show[i].style.display = "none";

      const deka = document.getElementsByClassName('inter');
      for(let j = 0; j < deka.length; j++){
         deka[j].style.display = "block";
      }

      // const post = document.getElementsByClassName('not');
      // for(let i = 0; i <= post.length; i++){
      //    post[i].classList.add = 'block';
      // }


}

})
     
// rejected////


document.getElementById('tab-reje').addEventListener('click',function(){

  const show = document.getElementsByClassName('card')
  for(let i =0; i < show.length; i++){
        console.log(i);
       show[i].style.display = "none";

      const dekaReje = document.getElementsByClassName('reje');
      for(let i = 0; i < dekaReje.length; i++){
         dekaReje[i].style.display = 'block';
      }

}

})

// butomm///////////////////////
const interbtn = document.getElementsByClassName('btn-interview');
  
   for(let i = 0; i < interbtn.length; i++ ){
      interbtn[i].addEventListener('click', function(){
         
      const cardNo = this.closest('.card');
      cardNo.classList.add('inter');
      cardNo.classList.remove('reje');

     updatecount()


      })
      
   }




   // reject////////
   const rejectbtn = document.getElementsByClassName('btn-Rejected');
   for(let y = 0; y < rejectbtn.length;y++){
      rejectbtn[y].addEventListener('click', function(){
          
         const cardNo = this.closest('.card');
      cardNo.classList.add('reje');
      cardNo.classList.remove('inter');
            updatecount()



      })
   }


// ///////tab buttom//
const tabsBtn = document.getElementsByClassName('tab');
for(let i = 0; i < tabsBtn.length; i++){
   tabsBtn[i].addEventListener('click',function(){
         for(let j = 0; j < tabsBtn.length; j++){
         tabsBtn[j].classList.remove('tabActive');}
         this.classList.add('tabActive');

   })
}




function updatecount(){
   document.getElementById('Interview-number').innerText = document.getElementsByClassName('inter').length;

   document.getElementById('Rejected-number').innerText = document.getElementsByClassName('reje').length;
};





