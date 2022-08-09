import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const NewPost = () => {  
  const [file, setFile] = useState()
  const [caption, setCaption] = useState("")
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append("image", file)
    formData.append("caption", caption)
    axios.post("http://localhost:8000/newpost", 
    formData, 
    { headers: {'Content-Type': 'multipart/form-data'}})
    .then(res => console.log("response",res))
    .catch(err=> console.log(err))

    navigate("/")
  }

  const fileSelected = (e) => {
    const file = e.target.files[0]
		setFile(file)
	}

  return (
    <div className="flex flex-col items-center justify-center">

        <form onSubmit={submit} style={{width:650}} className="flex flex-col space-y-5 px-5 py-14">
          <input onChange={fileSelected} type="file" accept="image/*"></input>
          <input value={caption} onChange={e => setCaption(e.target.value)} type="text" placeholder='Caption'></input>
          <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default NewPost;