import http from "../http-common";

class CarDataService {
  getAll() {
    return http.get("/comments");
  }
  getAllByCommunity(id) {
    return http.get(`/comments/commentsall/${id}`);
  }

  getMakes() {
    return http.get("/comments");
  }

  get(id) {
    return http.get(`/comments/${id}`);
  }

  create(data) {
    return http.post("/comments", data);
  }

  update(id, data) {
    return http.put(`/comments/${id}`, data);
  }

  delete(id) {
    return http.delete(`/comments/${id}`);
  }

  deleteAll() {
    return http.delete(`/comments`);
  }

  getModels(make) {
    return http.get(`/comments/models?make=${make}`);
  }

  getGenerations(make, model) {
    return http.get(`/comments/generations?make=${make}&model=${model}`);
  }
}

export default new CarDataService();
