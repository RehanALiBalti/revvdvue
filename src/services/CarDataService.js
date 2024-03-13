import http from "../http-common";

class CarDataService {
  getAll() {
    return http.get("/cars");
  }

  getMakes() {
    return http.get("/cars");
  }

  get(id) {
    return http.get(`/cars/${id}`);
  }

  create(data) {
    return http.post("/cars", data);
  }

  update(id, data) {
    return http.put(`/cars/${id}`, data);
  }

  delete(id) {
    return http.delete(`/cars/${id}`);
  }

  deleteAll() {
    return http.delete(`/cars`);
  }

  getModels(make) {
    return http.get(`/cars/models?make=${make}`);
  }

  getGenerations(make, model) {
    return http.get(`/cars/generations?make=${make}&model=${model}`);
  }
}

export default new CarDataService();
