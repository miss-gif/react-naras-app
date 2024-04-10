import axios from "axios";

// 모든 국가의 데이터를 가져오는 함수
export async function fetchCountries() {
  try {
    const response = await axios.get("https://naras-api.vercel.app/all");
    return response.data; // 성공적으로 데이터를 받아오면 데이터 반환
  } catch (error) {
    return []; // 에러 발생 시 빈 배열 반환
  }
}

// 검색어를 사용하여 국가를 검색하는 함수
export async function fetchSearchResults(q) {
  try {
    const response = await axios.get(`
    https://naras-api.vercel.app/search?q=${q}`);
    return response.data; // 성공적으로 데이터를 받아오면 데이터 반환
  } catch (error) {
    return []; // 에러 발생 시 빈 배열 반환
  }
}

// 국가 코드를 사용하여 특정 국가의 데이터를 가져오는 함수
export async function fetchCountry(code) {
  try {
    const response = await axios.get(
      `https://naras-api.vercel.app/code/${code}`
    );
    return response.data; // 성공적으로 데이터를 받아오면 데이터 반환
  } catch (error) {
    return null; // 에러 발생 시 null 반환
  }
}
