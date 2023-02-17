import React from "react"


const SideBarSorting = (props) => {
  

  return(
    <div className="sidesettings">
            <div id="sorting">
              <form action="" id="sortform">
                <label htmlFor="sortValue">
                  Sort By : 
                </label>
                <select id="sortValue" name="sortValue" onChange={props.test}> 
                  <option value="Asc">price ascending</option>
                  <option value="Desc">price descending</option>
                </select>
              </form>
            </div>
            <div id="searching">
              <form action="" id="filterform">
                  <label htmlFor="filterCatergories">
                    Category :  
                  </label>
                  <select id="filterCatergories" name="filterCatergories" onChange={(e) => (props.test2(e))}>
                    <option value="Swimming" >Swimming</option>
                    <option value="Football" >Football</option>
                    <option value="Tennis" >Tennis</option>
                    <option value="Bowls" >Bowls</option>
                    <option value="All" >All</option>
                  </select>
                </form>
            </div>
    </div>
  );
}

export default SideBarSorting;