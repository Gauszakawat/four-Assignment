
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
   
  const noPost =document.getElementById('nopost');
  noPost.style.display = "none";

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

       const nopost = document.getElementById('nopost');
       if(deka.length === 0){
         nopost.style.display = "block";
       }
       else{
                  nopost.style.display = "none";

       }


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
 

 const nopost = document.getElementById('nopost');
       if(dekaReje.length===0 ){
         nopost.style.display = "block";
       }
       else{
          nopost.style.display = "none";

       }


}
      

})

// butomm///////////////////////
const interbtn = document.getElementsByClassName('btn-interview');
  
   for(let i = 0; i < interbtn.length; i++ ){
      interbtn[i].addEventListener('click', function(){
         
      const cardNo = this.closest('.card');
      cardNo.classList.add('inter');
            cardNo.classList.add('bbge');

      cardNo.classList.remove('reje');
            cardNo.classList.remove('bbred');

      // badge/////
      
      const badge = cardNo.getElementsByClassName('interbage')[0];
       badge.style.display = "inline-block";


       const badgereje = cardNo.getElementsByClassName('rejebage')[0];
       badgereje.style.display = "none";

       const notap = cardNo.getElementsByClassName('notapplied')[0];
       notap.style.display = "none";
      // end////



     updatecount();


      }
   
   )
      
   }




   // reject////////
   const rejectbtn = document.getElementsByClassName('btn-Rejected');
   for(let y = 0; y < rejectbtn.length;y++){
      rejectbtn[y].addEventListener('click', function(){
          
         const cardNo = this.closest('.card');
      cardNo.classList.add('reje');
      cardNo.classList.add('bbred');

      cardNo.classList.remove('inter');

cardNo.classList.remove('bbge');


// bage
   const badge = cardNo.getElementsByClassName('interbage')[0];
       badge.style.display = "none";

       const badgereje = cardNo.getElementsByClassName('rejebage')[0];
       badgereje.style.display = "inline-block";

       const notap = cardNo.getElementsByClassName('notapplied')[0];
       notap.style.display = "none";




// end


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


// ////no post////


