import axios from 'axios';
const KEY = "26886697-f132e609f22bab827cfdbeee1";
const BASE_URL = 'https://pixabay.com/api/';


export default class ApiService {
  constructor() {
    this.options = {
      params: {
        key: `${KEY}`,
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: 1,
        per_page: 40,
      },
    };
  }

  incrementPage() {
    this.options.params.page += 1;
  }

  async getPictures() {
    const response = await axios.get(`${BASE_URL}`, this.options);
    this.incrementPage();
    return response;
  }

  resetPage() {
    this.pageNumber = 1;
  }

  get searchQuery() {
    return this.options.params.q;
  }

  set searchQuery(newQuery) {
    this.options.params.q = newQuery;
  }

  get pageNumber() {
    return this.options.params.page;
  }

  set pageNumber(newNumber) {
    this.options.params.page = newNumber;
  }
}