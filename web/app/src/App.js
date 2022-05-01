import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div class="navbar bg-base-100">
        <a class="btn btn-ghost normal-case text-xl">tellmeastory.AI</a>
      </div>
      </header>
      <body className="p-10">
      <div class="form-control">
        <label class="label">
          <span class="label-text font-bold">New Vocabulary List</span>
        </label> 
        <textarea class="textarea textarea-bordered h-24" placeholder="List of words separated by commas"></textarea>
        <label class="label">
        </label>
        <button class="btn btn-active btn-primary">Add</button>
      </div>
        <h1 className="text-xl font-bold pt-10">Vocabulary Lists</h1>
        <div class="card w-96 bg-primary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">Vocabulary List</h2>
          <p>fox, woods, food</p>
          <div class="card-actions justify-end">
            <button class="btn">Generate Book</button>
          </div>
        </div>
      </div>
      <h1 className="text-xl font-bold py-10">Books</h1>
        <div class="card w-96 bg-secondary text-primary-content">
        <div class="card-body">
          <h2 class="card-title">Fox Story</h2>
          <p>fox, woods, food</p>
          <div class="card-actions justify-end">
            <button class="btn">View</button>
          </div>
        </div>
      </div>


      <div class="mockup-window border bg-base-300 my-10">
      <div class="flex justify-center px-4 py-4 bg-base-200 font-bold">Title</div>
      <div class="flex justify-start px-10 py-10 bg-base-200">Story</div>
    </div>
      </body>
    </div>
  );
}

export default App;
