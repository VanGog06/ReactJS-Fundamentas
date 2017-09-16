import Data from './Data';

const baseUrl = 'hotels';

class HotelData {
  static create(hotel) {
    return Data.post(`${baseUrl}/create`, hotel, true);
  }

  static all(page) {
    page = page || 1;

    return Data.get(`${baseUrl}/all?page=${page}`);
  }

  static getHotelById(id) {
    return Data.get(`${baseUrl}/details/${id}`, true);
  }

  static createReview(review, id) {
    return Data.post(`${baseUrl}/details/${id}/reviews/create`, review, true);
  }

  static allReviews(id) {
    return Data.get(`${baseUrl}/details/${id}/reviews`, true);
  }
}

export default HotelData;
