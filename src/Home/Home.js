import { useEffect, useState } from "react";
import Axios from "axios";
import Card from "../Card/Card";
import Filter from "../Filters/Filter";
import "./home.css";

function Home() {
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    Axios.get("https://api.spacexdata.com/v3/launches?limit=100").then(
      (response) => {
        setList(response.data);
        
        console.log(list);
        setFiltered(response.data);
      }
    );
  }, []);

  const successLaunch = () => {
    Axios.get(
      "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true"
    ).then((response) => {
      setFiltered(response.data);
    });
  };

  const failLaunch = () => {
    Axios.get(
      "https://api.spacexdata.com/v3/launches?limit=100&launch_success=false"
    ).then((response) => {
      setFiltered(response.data);
    });
  };
  const successLand = () => {
    Axios.get(
      "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
    ).then((response) => {
      setFiltered(response.data);
    });
  };
  const failLand = () => {
    Axios.get(
      "https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=false"
    ).then((response) => {
      setFiltered(response.data);
    });
  };

  function yearFilter(name) {
    Axios.get(
      `https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=${name}`
    ).then((res) => {
      setFiltered(res.data);
    });
  }

  return (
    <div className="Home">
      <div className="Header">
        <h1>SpaceX Launch Programs</h1>
      </div>
      <div className="home-body">
        <div className="left">
          <div className="Filters">
            <h2>Filters</h2>
            <h4 className="underline">Launch Year</h4>
            <div className="btns">
            <button onClick={() => yearFilter("2006")}>2014</button>
            <button onClick={() => yearFilter("2007")}>2014</button>
            <button onClick={() => yearFilter("2008")}>2014</button>
            <button onClick={() => yearFilter("2009")}>2014</button>
            <button onClick={() => yearFilter("2010")}>2014</button>
            <button onClick={() => yearFilter("2011")}>2014</button>
            <button onClick={() => yearFilter("2012")}>2014</button>
            <button onClick={() => yearFilter("2013")}>2014</button>
            <button onClick={() => yearFilter("2014")}>2014</button>
            <button onClick={() => yearFilter("2015")}>2015</button>
            <button onClick={() => yearFilter("2016")}>2016</button>
            <button onClick={() => yearFilter("2017")}>2017</button>
            <button onClick={() => yearFilter("2018")}>2018</button>
            <button onClick={() => yearFilter("2019")}>2019</button>
            <button onClick={() => yearFilter("2020")}>2020</button>
            </div>
            <Filter
              sLaunch={successLaunch}
              fLaunch={failLaunch}
              sLand={successLand}
              fLand={failLand}
            />

          
          </div>
        </div>
        <div className="Cards">
          {filtered.map((list) => {
            return (
              <Card
              key={list.flight_number}
                number={list.flight_number}
                name={list.mission_name}
                image={list.links.mission_patch_small}
                year={list.launch_year}
               
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
