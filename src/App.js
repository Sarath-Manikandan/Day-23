import './App.css';

function App() {
  return (
    <div className="App">
      <div className="child1">
        <div className="card">
          <div className="parent1">
            <h6>FREE</h6>
            <h1>$0<span className="period">/month</span></h1>
          </div>
          <hr></hr>
          <div className="parent2">
            <p><span>✔</span> Single User</p>
            <p><span>✔</span> 5GB Storage</p>
            <p><span>✔</span> Unlimited public projects</p>
            <p><span>✔</span> Community Access</p>
            <p><span>✖</span> Unlimited Private Projects</p>
            <p><span>✖</span> Dedicated phone Support</p>
            <p><span>✖</span> Free Subdomain</p>
            <p><span>✖</span> Monthly Status Reports</p>
          </div>
          <button>BUTTON</button>
        </div>
      </div>
      <div className="child2">
        <div className="card">
          <div className="parent1">
            <h6>PLUS</h6>
            <h1>$9<span className="period">/month</span></h1>
          </div>
          <hr></hr>
          <div className="parent2">
            <p><span>✔</span> 5 User</p>
            <p><span>✔</span> 50GB Storage</p>
            <p><span>✔</span> Unlimited public projects</p>
            <p><span>✔</span> Community Access</p>
            <p><span>✔</span> Unlimited Private Projects</p>
            <p><span>✔</span> Dedicated phone Support</p>
            <p><span>✔</span> Free Subdomain</p>
            <p><span>✖</span> Monthly Status Reports</p>
          </div>
          <button>BUTTON</button>
        </div>
      </div>
      <div className="child3">
        <div className="card">
          <div className="parent1">
            <h6>PRO</h6>
            <h1>$49<span className="period">/month</span></h1>
          </div>
          <hr></hr>
          <div className="parent2">
            <p><span>✔</span> Unlimited User</p>
            <p><span>✔</span> 150GB Storage</p>
            <p><span>✔</span> Unlimited public projects</p>
            <p><span>✔</span> Community Access</p>
            <p><span>✔</span> Unlimited Private Projects</p>
            <p><span>✔</span> Dedicated phone Support</p>
            <p><span>✔</span> Unlimited Subdomain</p>
            <p><span>✔</span> Monthly Status Reports</p>
          </div>
          <button>BUTTON</button>
        </div>
      </div>
    </div>
  );
}

export default App;
