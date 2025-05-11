fetch('https://jsonplaceholder.typicode.com/posts')
.then((response)=>{
       return response.json()                       
})
.then((data)=>{
       let blogs = document.querySelector('.blogs')

      data.slice(0,100).forEach((posts)=>{
                let blogContainer = document.createElement('div')
                blogContainer.classList.add('blog')
                
                
              

           let title = document.createElement('h3')
           title.classList.add('blogtitle');
           title.innerHTML = posts.title

           let description = document.createElement('p')
           description.classList.add('discription')
           description.innerHTML = posts.body

           blogContainer.append(title)
           blogContainer.append(description)

           blogs.append(blogContainer)
      })
                              
})
.catch((error)=>{
         console.log('error message',error);
                              
})