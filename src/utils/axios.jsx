import axios from "axios";

const instance = axios.create({
  baseURL:"https://api.themoviedb.org/3 ", 
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MmVjOGUzYTdjOWNkY2E4OTRlY2EzM2VmYzMwYmRiYSIsIm5iZiI6MTc0MDAzMTYxMC45NDgsInN1YiI6IjY3YjZjNjdhMGM2MTAyNWZhZmMzZTZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZCntp9Kip_OjZlERKcSjMEFbv34xYP1YcxNgNmLseVg'
  }
  
});

export default instance;
