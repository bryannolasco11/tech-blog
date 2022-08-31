async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment_text = document.querySelector('input[name="comment_text"]').value.trim();
    const post_id=document.querySelector('#saveBtn').dataset.post;
    const comment_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    if (comment_text){
        const response = await fetch(`/api/comments/${comment_id}`, {
            method: 'put',
            body: JSON.stringify({
                
                comment_text
            }),
            headers:{
                'Content-Type': 'application/json'
            }
        });
        if(response.ok){
            document.location.replace(`/post/${post_id}`);
        } else{
            alert(response.statusText);
        }
    }
  }
  
  document.querySelector('.edit-comment-form').addEventListener('submit', commentFormHandler);