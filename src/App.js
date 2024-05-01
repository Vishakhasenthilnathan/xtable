import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [info,setInfo]= useState(
      [
        { date: "2022-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-01", views: 100, article: "Article 1" },
        { date: "2023-09-02", views: 150, article: "Article 2" },
        { date: "2023-09-02", views: 120, article: "Article 3" },
        { date: "2020-09-03", views: 200, article: "Article 4" }
      ]

  )
  const sortByDate = () => {
      const sortDate = info.sort((a, b) => {
          let sortByDate = new Date(b.date) - new Date(a.date);
          if (sortByDate!==0) return sortByDate;
          else
              return b.views-a.views;
      });

      console.log(sortDate);
      setInfo([...sortDate])
  }
  const sortByViews= ()=>{
      const sortView = info.sort((a, b) => {
          let sortByView = b.views-a.views;
          if (sortByView!==0) return sortByView;
          else
              return new Date(b.date) - new Date(a.date);
      });

      console.log(sortView);
      setInfo([...sortView])
  }
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
        <table>
            <thead>
            <tr>
                <th>Date</th>
                <th>Views</th>
                <th>Article</th>
            </tr>
            </thead>
            <tbody>
            {info.map((item) => (
                <tr>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  );
}

export default App;
