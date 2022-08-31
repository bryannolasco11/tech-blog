async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const text_content = document.querySelector('input[name="text_content"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'post',
      body: JSON.stringify({
        title,
        text_content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('#new-post-form').addEventListener('submit', newFormHandler);