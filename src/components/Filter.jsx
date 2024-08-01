import './css/Filter.css'
function Filter({page,filterByCategory ,filterByPrice}) {
   const handleCategoryChange = (event) => {
      filterByCategory(event.target.value);
   };

   const handlePriceChange = (event) => {
      filterByPrice(event.target.value);
   };
   
   return (
      <div className="filter-bar" style={{ display: page === 'home' ? '' : 'none' }}>
         <div className="category">
            Category : <select name="category" id="category" onChange={handleCategoryChange}>
               <option value="none">Select Category</option>
               <option value="electronics">Electronics</option>
               <option value="clothing">Clothing</option>
               <option value="home and kitchen">Home and Kitchen</option>
               <option value="grocery">Grocery</option>
            </select>
         </div>
         <div className="price">Price : <select name="price" id="price" onChange={handlePriceChange}>
            <option value="none">Select Range</option>
            <option value="200">&#8377; 1-200</option>
            <option value="500">&#8377; 200-500</option>
            <option value="500above">&#8377; 500 and Above</option>
         </select>
         </div>
      </div>
   )
}
export default Filter;