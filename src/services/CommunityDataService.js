import http from "../http-common";

class CarDataService {
  getAll() {
    return http.get("/communities");
  }

  getMakes() {
    return http.get("/communities");
  }

  get(id) {
    return http.get(`/communities/${id}`);
  }

  create(data) {
    return http.post("/communities", data);
  }

  update(id, data) {
    return http.put(`/communities/${id}`, data);
  }

  delete(id) {
    return http.delete(`/communities/${id}`);
  }

  deleteAll() {
    return http.delete(`/communities`);
  }

  getModels(make) {
    return http.get(`/communities/models?make=${make}`);
  }

  getFiltered(make, model, generation, productionYears) {
    return http.get(
      `/communities/filter?make=${make}&model=${model}&generation=${generation}&productionYears=${productionYears}`
    );
  }

  getGenerations(make, model) {
    return http.get(`/communities/generations?make=${make}&model=${model}`);
  }
}

export default new CarDataService();
