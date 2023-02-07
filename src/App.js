import {Crud} from './components/crud/index'
import './App.css';
import { useState, useEffect } from "react"; // this holds info about selected image
//useEffect runs function immediately when open website, runs once on default
import { storage, db, getData } from "./components/firebaseConfig"; //importing storage variable we created from firebase file
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"; // specifying where in storage/bucket want to store image 
// above also handles uploading the actual data 
// listAll ==> lists all files in specific path / folder
import { v4 } from "uuid"; // randomizing letters/numbers for unique photo storage names

// initialise database

function App() {
  const [imageUpload, setImageUpload] = useState(null);  //  this is called when click button, sets imageupload
  const [imageList, setImageList] = useState([]) // keeps track of urls of images, using an array
  
  const imageListRef = ref(storage, "images/"); // reference to all files in images folder
  const uploadImage = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`); // This is saying where you want to save the file, file name as well (2nd argument)
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => { //get url of recently selected image - this fixes problem of image not showing when you click upload
        setImageList((prev) => [...prev, url]);
      })
      
      //alert("Image Uploaded");
      
    })
  };

  // loading image - WORKING!!!
  useEffect(() => {
    listAll(imageListRef).then((response) => {
       response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageList((prev) => [...prev, url]) // adding image url to list
        })
       })
    }) // lists all images in path / folder
  }, [])


  return (
    <div className="App">
      <input 
        type ="file" 
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      /> {/*set imageupload state equal to file user selected*/}
      <button onClick={uploadImage}> Upload Image</button>
      <Crud/>

      {imageList.map((url) => {
        return <img src={url}/>
      })}

    </div>
  );
}

export default App;
