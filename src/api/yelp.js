import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 2DmZ1ZlSW0TQrXItWsDNaO4FrUgdOnJeE0kvJGxRrdgoNM4ujZPgyAmWkT3jZpA7mhMdTmhKzRAZW5vNTd7isANW9VOIQXL6FFp6Qc_rKHnwIMfP9UQwydH0fiQVXnYx"
  }  
});
