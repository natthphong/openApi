
const generate = document.getElementById('postform');
generate.addEventListener('click' , generateImg );
var id = 0;

async function generateImg(){
        const imglist = document.querySelector('.imageList');
        const load = document.querySelector('.load');
        load.classList.add('lds-ring');
        const div = document.createElement('div');
        const deleteimg =document.createElement('button');
        const img = document.createElement('img');
        const keyword = document.getElementById('keyword');

        const srcImg = await Api(keyword.value);

        //img
       img.src= srcImg.url;

        img.alt="test";

        //bitton
        deleteimg.setAttribute('id',id);
        deleteimg.innerHTML="delete";
        deleteimg.setAttribute('class' , 'btn');
        deleteimg.addEventListener('click',()=>{dlimg(deleteimg.getAttribute('id'))});

        //container
        div.setAttribute('id',`container${id}`);
        div.setAttribute('class' , 'box');
        div.appendChild(img)
        div.appendChild(deleteimg);

        //list
        imglist.appendChild(div);
        id+=1;
        load.classList.remove('lds-ring')
}

function dlimg(pid){
  
    const imglist = document.querySelector('.imageList');
    const div = document.getElementById(`container${pid}`);
    imglist.removeChild(div);
    id-=1;
  
}

async function Api(str){
        

    const api = await fetch('/openai/image' ,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body:JSON.stringify({
            prompt:str
        })
    });


    const result = await api.json();
        return result.data[0];
}