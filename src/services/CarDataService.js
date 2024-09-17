import https from "../http-common";

class CarDataService {
  getAll() {
    return https.get("/cars");
  }

  getMakes() {
    return https.get("/cars");
  }

  get(id) {
    return https.get(`/cars/${id}`);
  }

  create(data) {
    return https.post("/cars", data);
  }

  update(id, data) {
    return https.put(`/cars/${id}`, data);
  }

  delete(id) {
    return https.delete(`/cars/${id}`);
  }

  deleteAll() {
    return https.delete(`/cars`);
  }

  getModels(make) {
    return https.get(`/cars/models?make=${make}`);
  }

  getGenerations(make, model) {
    return https.get(`/cars/generations?make=${make}&model=${model}`);
  }
}

export default new CarDataService();
