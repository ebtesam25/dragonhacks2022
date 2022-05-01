import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [words, setwords] = useState("");
  const [name, setname] = useState("");
  const [imagelist, setimagelist] = useState(["https://storage.googleapis.com/dragonhacks2022/dallE0.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE1.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE2.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE3.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE4.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE5.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE6.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE7.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE8.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE9.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE10.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE11.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE12.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE13.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE14.jpg",
  "https://storage.googleapis.com/dragonhacks2022/dallE15.jpg"])
  const [vocab, setvocab] = useState([{'id':1,'name':'Week 1', 'words':['fox','woods','shelter']}]);
  const [stories, setstories] = useState([{'id':1,'name':"Crocodile Story", 'story':"Once upon a time, there was a crocodile who lived in a river. He was a big, strong crocodile who loved to swim and bask in the sun. One day, he saw a fish swimming by and decided to eat it. He snapped at the fish, but it was too quick and got away. The crocodile was so angry that he started to chase the fish. But no matter how hard he tried, he couldn't catch it.", 'img':imagelist}]);
  const [selectedstory, setselectedstory] = useState(0);

  const _addVocab = () => {
    const list = words.split(",");
    let v = []
    v = vocab;
    v.push({'id':v.length,'name':'Week '+(v.length+1).toString(),'words':list})

    setvocab(v);
    console.log(vocab);
    

  }

  useEffect(() => {
    
    
  }, [words])


  return (
    <div className="App">
      <header className="App-header">
      <div class="navbar bg-gray-900">
      <img src="https://img.icons8.com/fluency/30/000000/reading-unicorn.png"/>
        <a class="btn btn-ghost normal-case text-xl text-base-100">tellmeastory.AI</a>
      </div>
      </header>
      <body className="p-10 bg-gradient-to-t from-gray-700 via-gray-900 to-black">

      <div class="form-control">
        <label class="label">
          <span class="label-text font-bold text-base-100">New Vocabulary List</span>
        </label> 
        <textarea value={words} onChange={(e)=>setwords(e.target.value)} class="textarea textarea-bordered h-24 bg-gray-800 text-base-100" placeholder="List of words separated by commas"></textarea>
        <label class="label">
        </label>
        <button class="btn btn-active btn-primary" onClick={()=>_addVocab()}>Add</button>
      </div>
        <h1 className="text-xl font-bold pt-10 text-base-100 py-10">Vocabulary Lists</h1>
        <div className="flex-row flex gap-4">{vocab.map((v) =>(<div class="card w-96 bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">{v.name}</h2>
          <p>{v.words.map((w)=>{return w.toString()+", "})}</p>
          <div class="card-actions justify-end">
            <button class="btn">Generate Book</button>
          </div>
        </div>
      </div>))}</div>
      <h1 className="text-xl font-bold py-10 text-base-100">Books</h1>
        {stories.map((s)=>(<div class="card w-96 bg-secondary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">{s.name}</h2>
          <p>{s.story}</p>
          <div class="card-actions justify-end">
            <button class="btn">View</button>
          </div>
        </div>
      </div>))}


      <div class="mockup-window border bg-base-300 my-10">
      <div class="flex justify-center px-4 py-4 bg-base-200 font-bold">{stories[selectedstory].name}</div>
      <div class="carousel carousel-center rounded-box">
      {stories[selectedstory].img.map((img)=>(<div class="carousel-item">
        <img src={img} alt="Pizza" />
      </div>))}
      </div>
      <p class="flex justify-start px-10 py-10 bg-base-200 text-xl">{stories[selectedstory].story}</p>
    </div>
      </body>
    </div>
  );
}

export default App;
